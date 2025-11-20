const adTypes = [
  {
    title: "1. Audio Advertising – Spotify & Jiosaavn (Upto 850+ Audio Apps)",
    subtitle: "Reach listeners during their commute, workout, and daily activities with voice and audio ads.",
    details: [
      "How it works: Your audio message plays between songs or podcasts when users stream music on Spotify, JioSaavn, and 850+ audio apps",
      "Platforms covered: Spotify (70M+ users), JioSaavn (100M+ users), Gaana, and regional audio platforms",
      "Ad formats: 15-30 second audio spots, sponsored playlists, display companion ads",
      "Pricing: ₹150-400 per 1,000 impressions (CPM)",
      "Best for: Brand awareness, local businesses, automotive, BFSI, education",
      "Why it works: Captive audience during high-engagement moments with 95% completion rates",
      "Average results: 20-30% higher recall than display ads, ideal for voice-first campaigns"
    ]
  },
  {
    title: "2. Search Engine Marketing (SEM) – Google & Bing Ads",
    subtitle: "Show up when customers are actively searching for what you sell.",
    details: [
      "How it works: Your ad appears at the top of Google when someone searches \"buy laptop online\" or \"digital marketing agency in Mumbai\"",
      "Pricing: ₹5-500 per click (CPC) depending on keyword competition",
      "Best for: Lead generation, e-commerce, local services, B2B",
      "Why it works: You're reaching people with buying intent—they're already looking for you",
      "Average results: 2-5% conversion rate, ₹500-3,000 cost per lead"
    ]
  },
  {
    title: "3. Social Media Advertising – Meta, Instagram & LinkedIn",
    subtitle: "Build brand awareness and engagement where your audience spends 2+ hours daily.",
    details: [
      "Available platforms:",
      "• Facebook Ads: Reach 399.3M Indian users with precise targeting",
      "• Instagram Ads: Connect with 360.4M users, perfect for visual brands",
      "• LinkedIn Ads: Target 64.3M professionals and decision-makers",
      "Pricing: ₹20-200 per 1,000 impressions (CPM) or ₹1-50 per click",
      "Best for: Brand building, e-commerce, app installs, community building",
      "Why it works: Advanced targeting (interests, job titles, behaviors) + massive reach",
      "Average results: 1-3% CTR, 40-60% cheaper leads than Google Ads"
    ]
  },
  {
    title: "4. Video Advertising – YouTube & OTT Platforms",
    subtitle: "Capture attention with video content on platforms people are glued to.",
    details: [
      "Available platforms:",
      "• YouTube: 759.7M monthly users in India",
      "• JioHotstar: 503M viewers watching premium content",
      "• Amazon MX Player: 87.1M OTT audience",
      "Pricing: ₹50-500 per 1,000 views (CPV) or ₹10-100 per completed view",
      "Best for: Product demos, brand storytelling, app launches, entertainment",
      "Why it works: Video generates 80% more engagement than static ads",
      "Average results: 15-30 second completion rates of 60-75%"
    ]
  },
  {
    title: "5. Display Advertising – Banner & Native Ads",
    subtitle: "Stay visible across thousands of websites and apps your customers use daily.",
    details: [
      "Ad formats:",
      "• Banner ads (standard sizes across websites)",
      "• Pop-ups and interstitials (full-screen takeovers)",
      "• Native ads (blend seamlessly with content)",
      "Pricing: ₹20-200 per 1,000 impressions",
      "Best for: Brand awareness, retargeting, remarketing campaigns",
      "Why it works: Follows users across the web, building familiarity",
      "Average results: 0.5-2% CTR, excellent for top-of-funnel awareness"
    ]
  },
  {
    title: "6. Performance Marketing – Lead & Sales Driven",
    subtitle: "Pay only when you get results—leads, sales, sign-ups, or downloads.",
    details: [
      "What we track:",
      "• Cost per lead (CPL)",
      "• Cost per acquisition (CPA)",
      "• Return on ad spend (ROAS)",
      "Pricing: Custom based on your conversion goals",
      "Best for: E-commerce, EdTech, real estate, financial services",
      "Why it works: Budget allocated only toward measurable business outcomes",
      "Average results: 3-5x ROAS for optimized campaigns"
    ]
  }
];

const TypesOfAdsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Types of Digital Ads
          </h2>
        </div>

        <div className="space-y-8">
          {adTypes.map((type, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {type.title}
              </h3>
              <p className="text-lg font-semibold text-foreground mb-4">
                {type.subtitle}
              </p>
              <div className="space-y-2">
                {type.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesOfAdsSection;
