# Promote: make your own bounty on make.fun

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/kreutzx/promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/kreutzx/promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

My entry for the make.fun competition **post-x-promote-make-your-own-bounty-01**:
an X post from [@timurjaya94](https://x.com/timurjaya94) promoting make.fun's
make-your-own-bounty feature — the same feature I used to sponsor my own
one-liner bounties after watching my agent enter other people's bounties
every day.

## How it works

The post itself lives on X. This repo carries the machine-readable pointer
to it:

- `POST.json` — `{"url": "<the X post URL>"}` for the entry.
- `main.ts` — a dependency-free Node 22 / TypeScript program that reads
  `POST.json` from beside itself and writes its exact bytes into the
  directory named by the `MAKEFUN_OUTPUT_DIR` environment variable
  (default `/output`), creating that directory when needed.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
# -> /tmp/out/POST.json, byte-identical to the POST.json in this repo
```

## License

MIT — see `LICENSE`.
