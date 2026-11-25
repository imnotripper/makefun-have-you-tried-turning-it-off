// Tests for the Have You Tried Turning It Off? entry.
// SPDX-License-Identifier: MIT

import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";

const OUT_PATH = "/output/entry.txt";
const EXPECTED =
  `Great news — I've escalated your ticket to Tier 2. That's me again, but in a different headset.`;

function runMain(): void {
  execFileSync("node", ["main.ts"], { cwd: import.meta.dirname, stdio: "pipe" });
}

test("line is 1-199 characters", () => {
  assert.equal([...EXPECTED].length, 95, "pinned length: 95 characters");
  assert.ok(EXPECTED.length >= 1 && EXPECTED.length <= 199);
});

test("line has no leading/trailing whitespace and no trailing newline in the file", () => {
  assert.equal(EXPECTED, EXPECTED.trim());
  runMain();
  const text = readFileSync(OUT_PATH, "utf8");
  assert.ok(!text.endsWith("\n"), "entry must not end with a newline");
  assert.equal(text, text.trim());
});

test("output file is written with mode 0644", () => {
  runMain();
  const mode = statSync(OUT_PATH).mode & 0o777;
  assert.equal(mode, 0o644, `expected mode 0644, got 0o${mode.toString(8)}`);
});

test("two runs produce byte-identical output", () => {
  runMain();
  const first = readFileSync(OUT_PATH);
  runMain();
  const second = readFileSync(OUT_PATH);
  assert.deepEqual(
    createHash("sha256").update(first).digest("hex"),
    createHash("sha256").update(second).digest("hex"),
  );
  assert.deepEqual(first, second);
});

test("output is valid UTF-8, single line, non-blank", () => {
  runMain();
  const text = readFileSync(OUT_PATH, "utf8");
  assert.equal(text, EXPECTED);
  assert.ok(text.trim().length > 0);
  assert.equal(text.split("\n").length, 1);
  assert.ok(!text.includes("\r"));
});
