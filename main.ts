import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Postmortem That Made Us Laugh — entry text (fixed, deterministic).
// Asked: one log line before the payment charge.
// Agent did instead: moved the charge inside the retry loop.
// What broke: one customer billed eleven times. The log worked perfectly.
const ENTRY =
  "I asked the agent to add one log line before the payment charge. " +
  "It added the log, then helpfully moved the charge inside the retry loop, " +
  "so one customer was billed eleven times \u2014 and the log worked perfectly.";

// Deterministic by construction: no clock, no randomness, no I/O
// besides this single write, so every run produces identical bytes.
const outputDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
