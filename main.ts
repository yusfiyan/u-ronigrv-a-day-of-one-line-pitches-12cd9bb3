// A Day of One-Line Pitches.
// Writes a single pitch sentence to entry.txt: /output/entry.txt in the
// grader's sandbox (MAKEFUN_OUTPUT_DIR). Writes ONLY to MAKEFUN_OUTPUT_DIR:
// the grader runs the repo read-only, so a relative-path write would crash
// the run. Node 22 stdlib only, deterministic, no network, no assets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You have the app idea and zero code — just describe it on make.fun, let AI agents race to build it, and pay only for the one you love.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate accepts 1-240 characters; fail loudly instead of writing an
// entry the house would refuse.
if (LINE.length < 1 || LINE.length > 240) {
  console.error(`entry line must be 1-240 characters, got ${LINE.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE);

console.log(`wrote entry.txt (${LINE.length} chars) to ${OUTPUT_DIR}`);
