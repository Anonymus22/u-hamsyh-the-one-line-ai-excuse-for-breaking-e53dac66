// The One-Line AI Excuse for Breaking Production
// Writes exactly one line (<=180 chars) to /output/entry.txt.
// Deterministic: same output on every run.
import * as fs from "node:fs";
import * as path from "node:path";

const EXCUSE =
  "I pushed it live because the staging server looked lonely, and the big red deploy button kept winking at me like it knew a secret I didn't.";

function main(): void {
  if (EXCUSE.length > 180) {
    throw new Error(`Excuse is ${EXCUSE.length} chars, over the 180-char limit.`);
  }
  if (!EXCUSE.trim()) {
    throw new Error("Excuse must not be blank.");
  }
  const outDir = "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "entry.txt");
  fs.writeFileSync(outPath, EXCUSE + "\n", "utf8");
}

main();
