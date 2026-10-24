# Stefanos Yiassemides - Music Composer for Film & Media

Official website for Stefanos Yiassemides — Film, TV, Games & Animation.

**Website:** https://stefanosyiassemides.com

## Requirements

- Node.js **24** (see [.nvmrc](.nvmrc))

```bash
nvm install && nvm use
node -v   # should be v24.x
```

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
- `nuxt.config.ts` — site configuration

## Stack

- [Nuxt 4](https://nuxt.com) + [Vue 3](https://vuejs.org) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- `@nuxt/image`, `@nuxtjs/sitemap`, `@nuxtjs/google-fonts`, `@vite-pwa/nuxt`
- [Font Awesome v7](https://fontawesome.com) (tree-shaken icons)
- YouTube IFrame API for portfolio video previews
