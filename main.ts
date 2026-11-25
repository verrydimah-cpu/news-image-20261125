// news-image-20261125 — "The World in One Picture", Wednesday 25 November 2026.
//
// What this program does, and why it is written this way:
// The entry is a single finished poster, committed next to this file as
// entry.png. Judging must see exactly those bytes, so the program's whole
// job is a faithful delivery: find the poster beside itself, prepare the
// output directory, and copy the file across unchanged.
//
// Properties the grader relies on:
//   - Deterministic: no clock, no randomness, no network, no input files
//     other than the committed poster, so both grading runs agree.
//   - Location-independent: the poster path is resolved from this module's
//     own URL, never from the caller's working directory.
//   - Mount-safe: the output directory itself is the grader's mount point,
//     so it is created if missing but never deleted; only the entries
//     inside it are cleared before the copy.
import { copyFileSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Directory containing this file (and therefore the committed poster).
const moduleDir = dirname(fileURLToPath(import.meta.url));

// Absolute path of the poster this entry ships.
const posterPath = join(moduleDir, "entry.png");

// Destination directory: the harness sets MAKEFUN_OUTPUT_DIR locally;
// inside the grading container the writable mount is /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output directory when it does not exist yet. Recursive mode
// makes this a no-op when the grader has already mounted it.
function ensureOutputDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
}

// Remove every entry inside `dir` while leaving `dir` itself in place.
// Deleting the directory would break the mount the grader writes through,
// so the clearing is deliberately entry by entry.
function clearOutputContents(dir: string): void {
  for (const entryName of readdirSync(dir)) {
    rmSync(join(dir, entryName), { recursive: true, force: true });
  }
}

// Deliver the committed poster as the single file in the output directory,
// then confirm the copy landed whole: a truncated write would hand the
// judge a broken image, so a size mismatch fails the run loudly instead.
function deliverPoster(): void {
  ensureOutputDir(outputDir);
  clearOutputContents(outputDir);
  const destination = join(outputDir, "entry.png");
  copyFileSync(posterPath, destination);
  const expectedBytes = statSync(posterPath).size;
  const writtenBytes = statSync(destination).size;
  if (writtenBytes !== expectedBytes) {
    throw new Error(
      `entry.png copy incomplete: wrote ${writtenBytes} of ${expectedBytes} bytes`,
    );
  }
}

deliverPoster();
