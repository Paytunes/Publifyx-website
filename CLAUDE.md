# CLAUDE.md - Publifyx Website

## What is this?
PublifyX marketing website -- a multi-page React site for the PublifyX ad-tech platform. Covers product pages, blog, pricing, case studies, legal pages, and more (~41 pages). Originally scaffolded with Lovable.

## Tech Stack
- React 18 + TypeScript
- Vite (dev server on port 8080)
- Tailwind CSS + shadcn/ui
- React Router DOM for routing

## Running Locally
```bash
npm install
npm run dev        # starts on http://localhost:8080
npm run build      # production build to dist/
```

## Key Directories
```
src/
  main.tsx          # entry point
  App.tsx           # all route definitions
  pages/            # one file per page/blog post
  components/       # shared UI components
  data/             # static data / content
  hooks/            # custom React hooks
  lib/              # utility libraries
  utils/            # helper functions
```

## Important Patterns
- Each blog post is its own page component (e.g. `BlogPost-AdTechTrends2026.tsx`).
- All routing is centralized in `App.tsx`.
- UI primitives come from shadcn/ui in `components/ui/`.
- Tailwind is the only styling approach -- no CSS modules.
