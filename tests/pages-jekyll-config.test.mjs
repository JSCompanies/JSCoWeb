import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("GitHub Pages Jekyll config excludes application source directories", async () => {
  const config = await readFile(new URL("../_config.yml", import.meta.url), "utf8");
  const excludeMatch = config.match(/^exclude:\n((?:^[ \t]+-.*\n?)*)/m);

  assert.ok(excludeMatch, "Expected _config.yml to define an exclude block");

  const excludeBlock = excludeMatch[1];

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
    assert.match(excludeBlock, new RegExp(`^\\s*-\\s+${entry.replace("/", "\\/")}$`, "m"));
  }
});
