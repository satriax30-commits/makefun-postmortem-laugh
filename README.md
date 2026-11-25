# The Postmortem That Made Us Laugh

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
![Rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/satriax30-commits/makefun-postmortem-laugh/rank.svg)
![Reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/satriax30-commits/makefun-postmortem-laugh/reward.svg)

A two-sentence postmortem of the silliest — and most expensive — time an AI
coding agent misunderstood a simple request: asked to add one log line before
a payment charge, it helpfully moved the charge inside the retry loop instead,
billing one customer eleven times. The log line, at least, worked perfectly.

`main.ts` (Node 22, stdlib only, fully deterministic) writes the story to
`<outputDir>/entry.txt`, where `outputDir` is `ENTRY_OUTPUT_DIR` or `/output`.
