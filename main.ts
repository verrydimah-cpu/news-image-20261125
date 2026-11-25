// news-image-20261125 — delivers the committed poster to the output directory.
// Deterministic: no clock, no randomness, no network. It reads only the
// entry.png shipped beside this file and writes it to MAKEFUN_OUTPUT_DIR.
import { copyFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
// Clear the output directory's contents entry by entry — the directory
// itself is the grader's mount and is never removed.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
copyFileSync(source, join(outDir, "entry.png"));
