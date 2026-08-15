import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the JSCo homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>JaiSellers Companies<\/title>/i);
  assert.match(html, /Structure where Art can thrive\./);
  assert.match(html, /JaiSellers Consulting/);
  assert.match(html, /JaiSellers Designs and Photography/);
  assert.match(html, /Just Systems Initiatives/);
  assert.match(html, /Nonprofit Strategy and Compliance/);
  assert.match(html, /IRS 1023 readiness/);
  assert.match(html, /Governance Reset/);
  assert.match(html, /Funding Readiness/);
  assert.match(html, /Advisory Retainer/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});
