import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const ENTRY_FILE = join(OUTPUT_DIR, "entry.txt");
const ENTRY_TEXT = "My fridge door sucks shut like a bank vault, but the onion smell still gets out on bail.";

function writeEntry(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(ENTRY_FILE, ENTRY_TEXT, { encoding: "utf8" });
}

writeEntry();
