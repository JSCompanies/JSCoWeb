// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.jaisellers.com",
  base: "/",
  integrations: [
    sitemap({
      // keep private/client-only pages out of search
      filter: (page) => !page.includes("/galleries") && !page.includes("/proofs/"),
    }),
  ],
});
