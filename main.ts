// One-Line Laugh-Off — writes exactly one joke line, with no trailing
// newline, to the make.fun output file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Grandpa's will left us no house, no money — just one chair, a referee's whistle, and a note: 'May the best grandchild win.'";

function entryPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  const target = entryPath();
  mkdirSync(join(target, ".."), { recursive: true });
  // writeFileSync adds nothing of its own: the file is exactly JOKE,
  // byte for byte, so the character gate counts only the joke itself.
  writeFileSync(target, JOKE, "utf8");
}

main();
