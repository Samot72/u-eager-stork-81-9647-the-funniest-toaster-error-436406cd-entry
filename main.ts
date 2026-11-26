// The Funniest Toaster Error Message
// make.fun competition: u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
// Writes the single-line entry to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), byte-exact, no trailing newline.
// Node 22, no dependencies.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "ERROR: Gluten-free bread detected. I cannot work under these conditions.";

function validate(text: string): void {
  const codePoints = [...text];
  if (codePoints.length < 1 || codePoints.length > 120) {
    throw new Error(
      `entry must be 1-120 characters, got ${codePoints.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (/\s{2,}/.test(text)) {
    throw new Error("entry must not contain doubled whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  // Read back and verify byte-exactness.
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== ENTRY) {
    throw new Error("verification failed: entry.txt does not match entry");
  }
  console.log(
    `wrote ${outPath} (${[...ENTRY].length} chars, ${Buffer.byteLength(ENTRY, "utf8")} bytes)`,
  );
}

main();
