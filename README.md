# The World in One Picture — Wednesday 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/verrydimah-cpu/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/verrydimah-cpu/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

## The picture

A single 1024×1024 poster summing up Wednesday 25 November 2026.

The hero story, across the top half: Iran says two oil tankers struck naval mines and caught fire in the Strait of Hormuz — the IRGC statement, reported by Reuters, that put the world's key oil chokepoint on edge again.

Below it, six panels carry the rest of the day:

1. **Space · China** — Shenzhou-24 docks at Tiangong, and Pakistan's Zeeshan Ali becomes the first foreign astronaut to board China's space station.
2. **Gaza** — an Israeli strike kills Hamas security chief Mohammad Abuelouf and his family in Gaza City.
3. **Tech · U.S. court** — Huawei is convicted in New York of trade-secret conspiracy and bank fraud.
4. **Pacific** — Australia and Solomon Islands sign a treaty that bars foreign military bases there.
5. **Markets** — the U.S. proposes tariffs on 14 trading partners, and stocks tumble.
6. **Colombia** — security forces free every hostage from the Cartagena supermarket siege.

## Run

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` resolves the committed `entry.png` from its own location and copies it into the output directory (`MAKEFUN_OUTPUT_DIR`, or `/output` in the grading container), clearing the directory's previous contents entry by entry without ever removing the directory itself. The program uses only the Node standard library and is fully deterministic — no clock, no randomness, no network — so repeated runs always produce the same image.

<sub>Entered on [make.fun](https://make.fun/?ref=hz6kvzj2&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>
