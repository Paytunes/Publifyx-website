const adTypes = [
  {
    title: "1. Search Engine Marketing (SEM) – Google & Bing Ads",
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
    title: "2. Social Media Advertising – Meta, Instagram, LinkedIn",
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
    title: "3. Video Advertising – YouTube & OTT Platforms",
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
    title: "4. Display Ads – Banner & Native Advertising",
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
    title: "5. Performance Marketing – Lead & Sales Focused",
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
  },
  {
    title: "6. Influencer & Affiliate Marketing",
    subtitle: "Leverage trusted voices to amplify your brand message.",
    details: [
      "How it works: Partner with relevant influencers or affiliates who promote your products to their engaged audiences",
      "Pricing: ₹10,000-10,00,000 per campaign depending on influencer reach",
      "Best for: D2C brands, fashion, beauty, tech products, apps",
      "Why it works: 70% of consumers trust influencer recommendations over brand ads",
      "Average results: 5-10x engagement vs. traditional ads"
    ]
  }
];

const TypesOfAdsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Types of Digital Ads
          </h2>
        </div>

        <div className="space-y-8">
          {adTypes.map((type, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-purple-primary mb-2">
                {type.title}
              </h3>
              <p className="text-lg font-semibold text-gray-700 mb-4">
                {type.subtitle}
              </p>
              <div className="space-y-2">
                {type.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed">
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
