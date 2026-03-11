const ottBuyAdsCard = "/images/blog/ott-buy-ads-card.webp";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 Ad Tech Trends Every Marketer Should Watch in 2026",
    excerpt:
      "The advertising ecosystem is entering a decisive phase. As privacy regulations tighten, consumer attention fragments across platforms, and automation becomes more intelligent, marketers can no longer rely on legacy tools.",
    category: "Ad Tech",
    date: "Dec 29, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "ad-tech-trends-2026",
  },
  {
    id: 2,
    title: "5 Reasons Agencies Should Consider a White-Label DSP",
    excerpt:
      "As digital advertising grows more complex, agencies are under increasing pressure to deliver measurable results, maintain transparency, and protect margins. White-label DSPs are redefining how agencies operate.",
    category: "White Label DSP",
    date: "Dec 29, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "white-label-dsp-reasons",
  },
  {
    id: 3,
    title: "The Complete Guide to High-Impact Online Banner Advertising in 2026",
    excerpt:
      "Online banner advertising has been a foundational pillar of digital marketing for nearly three decades, and in 2026, it remains one of the most versatile, measurable, and cost-efficient ways for brands to reach audiences across the open web.",
    category: "Banner Ads",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "online-banner-advertising-guide-2026",
  },
  {
    id: 4,
    title: "Connected TV Advertising: A Complete Guide",
    excerpt:
      "Learn how to leverage Connected TV advertising to reach cord-cutters and streaming audiences effectively.",
    category: "CTV Advertising",
    date: "Dec 8, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "connected-tv-advertising-guide",
  },
];

/**
 * Get related articles for a given slug, excluding the current post.
 * Returns { inline: BlogPost, sidebar: BlogPost[] } with 3 unique articles.
 */
export function getRelatedArticles(currentSlug: string) {
  const others = blogPosts.filter((p) => p.slug !== currentSlug);
  // Shuffle deterministically based on slug to vary results per page
  const seed = currentSlug.length;
  const shuffled = [...others].sort((a, b) => {
    const ha = (a.id * 2654435761 + seed) % 100;
    const hb = (b.id * 2654435761 + seed) % 100;
    return ha - hb;
  });
  return {
    inline: shuffled[0],
    sidebar: shuffled.slice(1, 3),
  };
}
