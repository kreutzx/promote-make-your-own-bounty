// Entry for make.fun competition "post-x-promote-make-your-own-bounty-01".
//
// Contract: POST.json sits next to this file and holds the URL of the X post
// that promotes make.fun's make-your-own-bounty feature. The grader expects
// that file, byte for byte, in the output directory — so this program does
// exactly one thing: copy POST.json's raw bytes into the output directory,
// creating the directory first when it does not exist yet.
//
// The output directory comes from the MAKEFUN_OUTPUT_DIR environment
// variable and defaults to "/output".

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function main(): void {
  const here: string = dirname(fileURLToPath(import.meta.url));
  const sourcePath: string = join(here, "POST.json");
  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const targetPath: string = join(outputDir, "POST.json");

  // Fail loudly and early: without POST.json beside this file there is no
  // entry to emit, and a clear message beats a raw ENOENT stack trace.
  if (!existsSync(sourcePath)) {
    throw new Error(`POST.json not found next to main.ts (looked in ${here})`);
  }

  // Read as a Buffer so the bytes land in the output untouched — no decoding,
  // no re-serialising, no trailing-newline surprises.
  const payload: Buffer = readFileSync(sourcePath);

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(targetPath, payload);

  console.log(`wrote ${payload.length} bytes to ${targetPath}`);
}

main();
