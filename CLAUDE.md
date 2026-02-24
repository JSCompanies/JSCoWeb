# CLAUDE.md — JSCoWeb

This file provides context for AI assistants working in this repository.

## Project Overview

**JSCoWeb** is the marketing and portfolio website for **JaiSellers Companies**, a founder-led consulting and design studio. The site presents three service divisions:

- **JSC (JaiSellers Consulting)** — nonprofit governance, funding, and systems architecture
- **Design Studio** — brand identity and design services
- **JSI (Just Systems Initiative)** — a Cleveland County-based nonprofit focused on justice navigation and reentry housing stabilization

**Live domain:** `jaisellers.com`
**Deployment:** GitHub Pages (automated via GitHub Actions on push to `master`)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro](https://astro.build) 5.x |
| Language | TypeScript (strict mode) |
| Styling | Plain CSS (no preprocessor) |
| Module system | ES modules (`"type": "module"`) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

No database, no backend, no external APIs. This is a fully static site.

---

## Directory Structure

```
JSCoWeb/
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions deploy pipeline (authoritative)
├── public/                   # Static assets served as-is
│   ├── favicon.svg
│   ├── site.css              # Main theme stylesheet (dark mode, gold accents)
│   ├── styles/site.css       # Duplicate — use public/site.css as source of truth
│   ├── images/               # Photos and media (PNG, JPEG)
│   └── video/                # Hero video (hero.mp4, hero.jpg poster)
├── src/
│   ├── assets/               # SVGs (astro.svg, background.svg)
│   ├── components/
│   │   └── Welcome.astro     # (unused starter component)
│   ├── layouts/
│   │   └── Layout.astro      # Base HTML shell (head, fonts, meta)
│   ├── pages/                # One file = one route
│   │   ├── index.astro       # / — Home with hero, service cards, divisions
│   │   ├── consulting.astro  # /consulting
│   │   ├── design.astro      # /design
│   │   ├── jsi.astro         # /jsi
│   │   ├── systems.astro     # /systems
│   │   ├── about.astro       # /about
│   │   ├── contact.astro     # /contact
│   │   └── 501c3.astro       # /501c3
│   └── styles/
│       └── global.css        # CSS variables, reset, typography utilities
├── astro.config.mjs          # Astro config (site URL, base path)
├── package.json
├── package-lock.json
├── tsconfig.json             # Extends astro/tsconfigs/strict
├── CNAME                     # Custom domain: jaisellers.com
└── README.md                 # Astro starter template docs
```

---

## Development Commands

```bash
npm run dev      # Start local dev server at http://localhost:4321
npm run build    # Build production site to ./dist
npm run preview  # Preview the production build locally
```

Always run `npm install` (or `npm ci`) first if dependencies are missing.

---

## Deployment

### How it works

Pushing to the `master` branch triggers `.github/workflows/deploy.yml`, which:
1. Installs dependencies with `npm ci`
2. Builds the site with `npm run build`
3. Uploads the `./dist` artifact
4. Deploys to GitHub Pages using `actions/deploy-pages`

**GitHub Pages must be configured to use "GitHub Actions" as the source** (not a branch) in the repository Settings → Pages.

### Common deployment issues

- **Two workflow files** — the repo previously had both `astro-deploy.yml` (branch-based deploy) and `deploy.yml` (Actions-based deploy). They conflict. Only `deploy.yml` should exist.
- **Wrong Pages source** — if GitHub Pages is set to deploy from the `gh-pages` branch instead of GitHub Actions, `deploy.yml` will fail silently.
- **`npm ci` vs `npm install`** — `npm ci` requires `package-lock.json` to exist and be committed. It is committed in this repo.

---

## Styling Conventions

### Color palette (dark theme — `public/site.css`)

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg` | `#0e0f12` | Page background |
| `--text` | `#f4f2ee` | Body text |
| `--gold` | `#caa24a` | Accent color, headings, CTAs |

### Light theme fallback (`src/styles/global.css`)

Used in `Layout.astro` but visually overridden by `site.css` on all pages.

### CSS patterns in use

- CSS custom properties (variables) for theming
- `clamp()` for fluid/responsive typography and spacing
- CSS Grid (`.grid3` = 3-column layout)
- Flexbox for nav and card rows
- No CSS framework or preprocessor — write plain CSS

---

## Astro Conventions

- **File-based routing** — every file in `src/pages/` becomes a route automatically
- **`.astro` files** — frontmatter (between `---`) runs at build time; template below is HTML
- **Static output** — no server-side rendering; `astro.config.mjs` uses default static mode
- **`Layout.astro`** — wrap every page with `<Layout title="...">` for consistent head/meta

Example page structure:

```astro
---
// Build-time JS goes here
---
<Layout title="Page Title">
  <!-- HTML content here -->
</Layout>
```

---

## Content & Branding Notes

- The brand name is **JaiSellers Companies** (abbrev: JSC)
- The nonprofit arm is **Just Systems Initiative** (abbrev: JSI)
- Tone: professional, mission-driven, direct — avoid generic marketing language
- Gold (`#caa24a`) is the primary brand accent; use it for headings, highlights, and CTAs
- Contact is handled via `mailto:` links — there is no form backend

---

## What Does NOT Exist Here

- No test suite (no Jest, Vitest, Playwright, etc.)
- No linter (no ESLint, Prettier config)
- No backend or API routes
- No database
- No environment variables (no `.env` needed)
- No authentication

---

## Key Files to Know

| File | Why it matters |
|------|----------------|
| `public/site.css` | Controls all visual appearance — most styling lives here |
| `src/layouts/Layout.astro` | Shared HTML shell; edit for head/meta/font changes |
| `src/pages/index.astro` | Home page — entry point for all visitor traffic |
| `astro.config.mjs` | Must keep `site: "https://jaisellers.com"` and `base: "/"` |
| `.github/workflows/deploy.yml` | The only deployment pipeline — do not add a second one |
| `CNAME` | Contains `jaisellers.com` — do not delete or the custom domain breaks |
