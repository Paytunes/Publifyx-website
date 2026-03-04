# PublifyX Website

Marketing and product website for **PublifyX**, a programmatic advertising platform. The site includes product pages, pricing, blog articles, case studies, and legal/policy pages.

## Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | React 18 + TypeScript             |
| Build       | Vite                              |
| Styling     | Tailwind CSS                      |
| Components  | shadcn/ui                         |
| Routing     | React Router DOM                  |
| Origin      | Scaffolded with Lovable           |

## Getting Started

**Prerequisites:** Node.js >= 18, npm

```bash
# Install dependencies
npm install

# Start dev server (port 8080)
npm run dev

# Production build
npm run build
```

## Folder Structure

```
src/
  main.tsx            # Application entry point
  App.tsx             # Route definitions
  pages/              # Page components (~41 pages + blog posts)
  components/         # Shared and UI components
  data/               # Static content / data files
  hooks/              # Custom React hooks
  lib/                # Utility libraries
  utils/              # Helper functions
public/               # Static assets
```

## Key Pages

- **Home** -- Landing page (`Index.tsx`)
- **Features / How It Works** -- Product detail pages
- **Pricing** -- Plan comparison
- **Blog** -- Ad-tech articles (CTV, OTT, programmatic, DSP/SSP)
- **Contact / About** -- Company info
- **Legal** -- Privacy Policy, Terms & Conditions

## Deployment

Production builds output to `dist/`. Deploy to any static hosting provider (Vercel, Netlify, S3 + CloudFront, etc.) or publish directly via [Lovable](https://lovable.dev).
