import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("GitHub Pages Jekyll config excludes application source directories", async () => {
  const config = await readFile(new URL("../_config.yml", import.meta.url), "utf8");

  for (const entry of [
    "app/",
    "build/",
    "db/",
    "drizzle/",
    "examples/",
    "src/",
    "tests/",
    "worker/",
  ]) {
    assert.match(config, new RegExp(`^\\s*-\\s+${entry.replace("/", "\\/")}$`, "m"));
  }
});
