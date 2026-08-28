import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function getExcludeEntries(config) {
  const lines = config.split(/\r?\n/);
  const excludeIndex = lines.findIndex((line) => /^exclude:\s*$/.test(line));

  assert.notEqual(excludeIndex, -1, "Expected _config.yml to define an exclude block.");

  const entries = [];

  for (const line of lines.slice(excludeIndex + 1)) {
    if (/^\S/.test(line)) {
      break;
    }

    const match = line.match(/^\s*-\s+(.*)$/);

    if (match) {
      entries.push(match[1]);
    }
  }

  return entries;
}

test("GitHub Pages Jekyll config excludes application source directories", async () => {
  const config = await readFile(new URL("../_config.yml", import.meta.url), "utf8");
  const excludeEntries = getExcludeEntries(config);

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
    assert.ok(
      excludeEntries.includes(entry),
      `Expected exclude block to contain ${entry}.`,
    );
  }
});
