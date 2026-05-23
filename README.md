# Stefanos Yiassemides - Music Composer & Sound Designer

Official website for Stefanos Yiassemides. Music Composer for Film, TV, Games & Animation.

**Website:** https://stefanosyiassemides.com

## Requirements

- Node.js 20+ (see [.nvmrc](.nvmrc))

## Build setup

```bash
# install dependencies
npm install

# dev server with hot reload (http://localhost:3000)
npm run dev

# static site generation (output: .output/public)
npm run generate

# preview generated static site
npm run preview

# deploy to GitHub Pages (gh-pages branch)
npm run generate && npm run deploy

# code quality (also runs automatically on git push via Husky)
npm run check
```

## Git hooks

- **commit-msg** — Conventional Commits via Commitlint
- **pre-push** — `npm run check` (lint, format, typecheck, static generate)

## Project structure

- `app/` — Vue pages, components, plugins, and assets
- `public/` — static files (images, `works.json`, `CNAME`, etc.)
- `nuxt.config.ts` — Nuxt 4 configuration

## Stack

- [Nuxt 4](https://nuxt.com) + Vue 3 + TypeScript
- Tailwind CSS
- `@nuxt/image`, `@nuxtjs/sitemap`, `@vite-pwa/nuxt`
- Font Awesome (tree-shaken icons)
- YouTube IFrame API + `@vimeo/player` for portfolio video previews
