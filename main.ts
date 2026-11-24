import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I didn't forget your deadline — I evicted it from my context window to make room for the task itself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
