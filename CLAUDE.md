# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (runs typegen before starting)
npm run dev

# Build (runs typegen before building)
npm run build

# Lint
npm run lint

# Regenerate Sanity types manually
npm run typegen
```

There are no tests in this project.

## Architecture

This is a **Next.js 15 personal blog/portfolio site** backed by **Sanity CMS**.

### Routing

- `src/app/(frontend)/` — public-facing site (Home, Blog list, Blog post pages)
- `src/app/studio/` — embedded Sanity Studio at `/studio`
- `src/app/layout.tsx` — root layout (no Header/Footer)
- `src/app/(frontend)/layout.tsx` — frontend layout wrapping all public pages with `Header`, `Footer`, `ThemeProvider`, and `SanityLive`

### Data fetching

All content comes from Sanity. Two fetch patterns are used:

1. **`client.fetch()`** with `{ next: { revalidate: 60 } }` — for static-ish data (posts list, experiences). Uses `src/sanity/lib/client.ts`.
2. **`sanityFetch()`** from `src/sanity/lib/live.ts` — for live preview (individual blog post pages). Requires `SanityLive` component in the layout.

All GROQ queries are defined in `src/sanity/lib/queries.ts`.

### Sanity schema types

Defined in `src/sanity/schemaTypes/`: `post`, `author`, `category`, `blockContent`, `experience`.

Generated TypeScript types live in `src/sanity/types.ts` — **do not edit manually**; run `npm run typegen` to regenerate after schema changes.

### Key conventions

- **Fonts:** `Inter` (variable: `--font-inter`, class `font-sans`) and `Barlow` (variable: `--font-barlow`, class `font-heading`) loaded via `next/font/google`.
- **Dark mode:** `next-themes` with `attribute="class"`. Use `dark:` Tailwind variants throughout.
- **Images from Sanity:** Always use `urlFor()` from `src/sanity/lib/image.ts` to build image URLs.
- **Blog post body:** Rendered with `<PortableText>` using custom components from `src/sanity/portableTextComponents.tsx`.
- **Experiences section:** Fetched from Sanity and rendered via the `<Accordion>` component.
