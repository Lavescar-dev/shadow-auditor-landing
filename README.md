# Shadow Auditor — landing page

Landing page for [Shadow Auditor](https://github.com/Lavescar-dev/shadow-auditor), a static analysis CLI that checks AI-generated code.

- **Live:** https://shadow-auditor-landing.pages.dev
- **Product:** [shadow-auditor](https://github.com/Lavescar-dev/shadow-auditor)

A single-page site built with SvelteKit + Svelte 5, with Turkish/English copy under `src/lib/i18n`.
Deployed to Cloudflare Pages via `@sveltejs/adapter-cloudflare`.

## Development

```sh
npm ci
npm run dev       # local dev server
npm run check     # svelte-check + TypeScript
npm run build
```

## Deploy

```sh
npm run deploy    # build + wrangler pages deploy (requires a Cloudflare account)
```
