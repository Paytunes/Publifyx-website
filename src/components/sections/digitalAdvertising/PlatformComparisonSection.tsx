const platforms = [
  {
    platform: "Google/Bing Ads",
    bestFor: "Lead gen, e-commerce, B2B",
    pricing: "₹5-500/click",
    keyAdvantage: "High buying intent",
    results: "2-5% conversion, ₹500-3K/lead"
  },
  {
    platform: "Meta/Instagram",
    bestFor: "Brand building, e-commerce",
    pricing: "₹20-200/1K views",
    keyAdvantage: "399M reach, precise targeting",
    results: "1-3% CTR, 40-60% cheaper"
  },
  {
    platform: "LinkedIn",
    bestFor: "B2B, professionals",
    pricing: "₹50-300/click",
    keyAdvantage: "64M decision-makers",
    results: "High-quality B2B leads"
  },
  {
    platform: "YouTube/OTT",
    bestFor: "Video storytelling, demos",
    pricing: "₹50-500/1K views",
    keyAdvantage: "759M users, 80% more engagement",
    results: "60-75% completion rate"
  },
  {
    platform: "Display Ads",
    bestFor: "Awareness, retargeting",
    pricing: "₹20-200/1K views",
    keyAdvantage: "Cross-web visibility",
    results: "0.5-2% CTR, top-of-funnel"
  },
  {
    platform: "Performance Marketing",
    bestFor: "E-commerce, EdTech, real estate",
    pricing: "Custom CPL/CPA",
    keyAdvantage: "Pay only for results",
    results: "3-5x ROAS"
  },
  {
    platform: "Influencer/Affiliate",
    bestFor: "D2C, fashion, beauty",
    pricing: "₹10K-10L/campaign",
    keyAdvantage: "70% consumer trust",
    results: "5-10x engagement"
  }
];

const PlatformComparisonSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Digital Advertising Platforms - Quick Comparison
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-primary text-white">
                  <th className="px-6 py-4 text-left font-semibold">Platform</th>
                  <th className="px-6 py-4 text-left font-semibold">Best For</th>
                  <th className="px-6 py-4 text-left font-semibold">Pricing</th>
                  <th className="px-6 py-4 text-left font-semibold">Key Advantage</th>
                  <th className="px-6 py-4 text-left font-semibold">Results</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((platform, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-200 hover:bg-purple-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{platform.platform}</td>
                    <td className="px-6 py-4 text-gray-600">{platform.bestFor}</td>
                    <td className="px-6 py-4 text-gray-600">{platform.pricing}</td>
                    <td className="px-6 py-4 text-gray-600">{platform.keyAdvantage}</td>
                    <td className="px-6 py-4 text-gray-600">{platform.results}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformComparisonSection;
