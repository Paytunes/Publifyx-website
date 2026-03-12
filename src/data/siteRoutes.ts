/**
 * Single source of truth for all live, indexable pages on the site.
 * Used by the sitemap generator (scripts/generate-sitemap.ts).
 *
 * When you add or remove a page:
 *   1. Add/remove its route in App.tsx
 *   2. Add/remove its entry here
 *
 * Blog posts are auto-included from blogPosts.ts — no need to list them here.
 *
 * DO NOT include:
 *   - Alias/redirect routes (e.g. /contact-us, /connected-tv-advertising)
 *   - 404 / catch-all routes
 *   - Draft or unpublished pages
 *   - Internal/admin routes
 */

export interface SiteRoute {
  /** Canonical path (must match App.tsx route) */
  path: string;
  /** Sitemap priority 0.0–1.0 */
  priority: number;
  /** Sitemap changefreq */
  changefreq: string;
}

export const siteRoutes: SiteRoute[] = [
  // ── Core ──────────────────────────────────────────────
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/white-label-dsp", priority: 0.9, changefreq: "monthly" },
  { path: "/ctv-advertising", priority: 0.9, changefreq: "monthly" },
  { path: "/ott-advertising", priority: 0.9, changefreq: "monthly" },
  {
    path: "/programmatic-audio-advertising",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/programmatic-display-advertising",
    priority: 0.8,
    changefreq: "monthly",
  },
  { path: "/blog", priority: 0.8, changefreq: "daily" },

  // ── Supporting ────────────────────────────────────────
  { path: "/services", priority: 0.7, changefreq: "monthly" },
  { path: "/contact", priority: 0.7, changefreq: "yearly" },
  { path: "/about", priority: 0.6, changefreq: "monthly" },
  { path: "/saurabh", priority: 0.5, changefreq: "yearly" },
  { path: "/digital-advertising", priority: 0.7, changefreq: "monthly" },
  { path: "/online-banner-advertising", priority: 0.7, changefreq: "monthly" },
  {
    path: "/white-label-dsp-vs-self-serve-dsp",
    priority: 0.6,
    changefreq: "monthly",
  },
  { path: "/ctv-advertising-india", priority: 0.7, changefreq: "monthly" },

  // ── Legal ─────────────────────────────────────────────
  { path: "/terms_and_conditions", priority: 0.3, changefreq: "yearly" },
  { path: "/privacy_policy", priority: 0.3, changefreq: "yearly" },
];
