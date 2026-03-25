# Blog Merge Notes: Jaisellers-Blog → JSCoWeb

## What was merged

The **Jaisellers-Blog** repository (`joshuajaisellers-alt/Jaisellers-Blog`) has been
merged into JSCoWeb under the `blog/` directory using `git subtree add`, which
preserves the complete commit history from both repositories.

## How git history was preserved

```bash
git remote add blog-source https://github.com/joshuajaisellers-alt/Jaisellers-Blog.git
git fetch blog-source
git subtree add --prefix=blog blog-source/main
```

The `blog/` directory at the repo root contains the original HTML source files
from Jaisellers-Blog, linked to that repository's full 10-commit history.
To pull future changes from Jaisellers-Blog:

```bash
git subtree pull --prefix=blog blog-source main
```

## Astro integration

The blog content has been converted to Astro pages served under `/blog`:

| URL | Astro source |
|-----|-------------|
| `/blog` | `src/pages/blog/index.astro` |
| `/blog/on-making-things` | `src/pages/blog/on-making-things.astro` |

A dedicated layout, `src/layouts/BlogLayout.astro`, handles the blog's
light-themed, reading-optimized design without inheriting the main site's
dark theme.

## Tailwind configuration analysis

**Neither repository uses Tailwind CSS.** No Tailwind configuration merge is needed.

- **JSCoWeb**: uses plain CSS in `public/site.css` (dark theme)
- **Jaisellers-Blog**: uses inline `<style>` blocks in each HTML file (light theme)

The blog's light theme is intentionally separate from the main site's dark theme,
and the `BlogLayout.astro` isolates it by not importing `site.css` or `global.css`.

## Astro configuration analysis

Both sites share the same Astro major version (5.x). No configuration conflict.
The merged `astro.config.mjs` is unchanged:

```js
export default defineConfig({
  site: "https://jaisellers.com",
  base: "/",
});
```

The `blog/` directory at the repo root contains raw HTML files but is **not**
inside `src/pages/`, so Astro's file-based router ignores it entirely.

## Dependency conflict analysis

| Package | JSCoWeb | Jaisellers-Blog | Conflict? |
|---------|---------|-----------------|-----------|
| `astro` | `^5.16.11` | *(no package.json)* | None |
| Tailwind | *(not used)* | *(not used)* | None |

**Jaisellers-Blog has no `package.json`** — it is a pure HTML/CSS project with
no npm dependencies. There are zero dependency conflicts.

## Image assets

The blog post `on-making-things` references an image:
`/assets/i-stayed.jpg`

Add this image to `public/assets/i-stayed.jpg` in JSCoWeb to display it.
The `public/assets/` directory has been created and is ready for the file.

## What was NOT changed in the main site

- `astro.config.mjs` — unchanged
- `package.json` — unchanged (no new dependencies required)
- `tsconfig.json` — unchanged
- `public/site.css` — unchanged (dark theme intact)
- `.github/workflows/deploy.yml` — unchanged
- All existing pages retain their layouts and styles
