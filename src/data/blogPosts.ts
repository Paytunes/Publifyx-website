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
  {
    id: 5,
    title: "What Is a White Label DSP? Everything You Need to Know",
    excerpt:
      "A white label DSP lets you offer programmatic advertising capabilities as if you built the technology yourself. Your clients see your logo, your domain, and your reports.",
    category: "White Label DSP",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "what-is-a-white-label-dsp",
  },
  {
    id: 6,
    title: "How to Launch Your Own DSP Without Building From Scratch",
    excerpt:
      "White label DSP technology has changed the equation entirely. Agencies, ad networks, and startups can deploy a fully branded, operational DSP in days.",
    category: "White Label DSP",
    date: "Jan 12, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "how-to-launch-your-own-dsp",
  },
  {
    id: 7,
    title: "CTV vs OTT Advertising: What's the Difference?",
    excerpt:
      "CTV and OTT are two of the most commonly used — and most commonly confused — terms in streaming advertising. Understanding the distinction is important for planning effective strategies.",
    category: "CTV Advertising",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "ctv-vs-ott-advertising",
  },
  {
    id: 8,
    title: "The Complete Guide to Programmatic Audio Advertising",
    excerpt:
      "Programmatic audio advertising allows brands to reach listeners across streaming music, podcasts, and digital radio through automated, data-driven ad buying.",
    category: "Programmatic Audio",
    date: "Jan 8, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "guide-to-programmatic-audio-advertising",
  },
  {
    id: 9,
    title: "Why Agencies Are Switching to White Label DSPs",
    excerpt:
      "More media agencies are moving away from third-party DSPs toward white label solutions. The reasons are clear: better margins, stronger client retention, and full control.",
    category: "White Label DSP",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "why-agencies-switching-to-white-label-dsp",
  },
  {
    id: 10,
    title: "How Does Connected TV Advertising Work?",
    excerpt:
      "Connected TV advertising delivers video ads to viewers watching content on internet-connected television devices. Here's how it works behind the scenes.",
    category: "CTV Advertising",
    date: "Jan 3, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "how-does-connected-tv-advertising-work",
  },
  {
    id: 11,
    title: "Smart TV Advertising: A Complete Guide",
    excerpt:
      "Smart TVs have become the primary way millions of households consume video content. For advertisers, this creates a direct channel to reach viewers on the largest screen.",
    category: "CTV Advertising",
    date: "Dec 30, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "smart-tv-advertising-guide",
  },
  {
    id: 12,
    title: "DSP vs SSP: What Advertisers Need to Know",
    excerpt:
      "DSP and SSP sit on opposite sides of the programmatic ecosystem, but they work together to make automated ad buying and selling possible.",
    category: "Ad Tech",
    date: "Dec 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "dsp-vs-ssp-explained",
  },
  {
    id: 13,
    title: "Top Benefits of White Label Programmatic Advertising",
    excerpt:
      "White label programmatic advertising allows businesses to enter the ad tech market by leveraging pre-built technology under their own brand.",
    category: "White Label DSP",
    date: "Dec 25, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "benefits-of-white-label-programmatic-advertising",
  },
  {
    id: 14,
    title: "Programmatic Advertising in India: A Market Overview",
    excerpt:
      "India's digital advertising market is among the fastest-growing in the world, and programmatic advertising is playing an increasingly central role.",
    category: "Programmatic",
    date: "Dec 22, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "programmatic-advertising-india",
  },
  {
    id: 15,
    title: "How to Buy OTT Ads Programmatically",
    excerpt:
      "Buying OTT advertising programmatically allows you to reach streaming audiences across devices with data-driven targeting and real-time optimization.",
    category: "OTT Advertising",
    date: "Dec 20, 2025",
    readTime: "7 min read",
    image: ottBuyAdsCard,
    slug: "how-to-buy-ott-ads-programmatically",
  },
  {
    id: 16,
    title: "White Label DSP vs Building In-House: A Cost Comparison",
    excerpt:
      "Whether to build your own DSP or use a white label solution is one of the most consequential decisions in ad tech. Here's a detailed cost comparison.",
    category: "White Label DSP",
    date: "Dec 18, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "white-label-dsp-vs-building-in-house",
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
