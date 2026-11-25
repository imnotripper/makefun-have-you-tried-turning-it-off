[![make.fun · u-motasimfuad-have-you-tried-turning-it-off-154a938b](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/imnotripper/makefun-have-you-tried-turning-it-off/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/imnotripper/makefun-have-you-tried-turning-it-off/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)

# Have You Tried Turning It Off? — make.fun entry

One original funny line a hopeless tech support agent gives a desperate
customer, for the [Have You Tried Turning It Off? bounty](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
on make.fun.

## The line

> Great news — I've escalated your ticket to Tier 2. That's me again, but in a different headset.

95 characters (97 bytes UTF-8), one line. The cheerful escalation is the
joke: Tier 2 is the same agent in a different headset — the uselessness is
total, and the customer is never the butt of it.

## How it works

`main.ts` is a deterministic emitter: it writes the fixed line to
`/output/entry.txt` with a plain write followed by an explicit `chmod 0644`
(so the grader can read it), then reads the file back and fails loudly if
what landed is not byte-identical to the line. It validates the entry first —
1–199 characters, single line, non-blank — exiting non-zero on failure. No
network, no randomness, no clock: two runs produce byte-identical output.

`selection.md` records the 12-line candidate pool, the scores against the five
judge criteria, and the elimination rounds that picked the winner.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Test it

```sh
node --test test.ts
```
