/**
 * Generates sitemap.xml and blog/rss.xml from siteRoutes.ts and blogPosts.ts.
 * Used by the Vite plugin at build time and can be run standalone.
 */

import { blogPosts } from "../src/data/blogPosts";
import { siteRoutes } from "../src/data/siteRoutes";

const SITE_URL = "https://www.publifyx.com";
const TODAY = new Date().toISOString().split("T")[0];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateSitemap(): string {
  const urls: string[] = [];

  // Static / service pages from the single-source registry
  for (const page of siteRoutes) {
    urls.push(`  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`);
  }

  // Blog posts — auto-generated from blogPosts data
  for (const post of blogPosts) {
    const postDate = new Date(post.date);
    const lastmod = isNaN(postDate.getTime()) ? TODAY : postDate.toISOString().split("T")[0];

    urls.push(`  <url>
    <loc>${SITE_URL}/blog/${escapeXml(post.slug)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
}

export function generateRSS(): string {
  const items = blogPosts.map((post) => {
    const postDate = new Date(post.date);
    const pubDate = isNaN(postDate.getTime())
      ? new Date().toUTCString()
      : postDate.toUTCString();

    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${escapeXml(post.slug)}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${escapeXml(post.slug)}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>PublifyX Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Insights on programmatic advertising, CTV, OTT, white-label DSP, and ad tech trends.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml"/>
${items.join("\n")}
  </channel>
</rss>`;
}
