const pricingData = [
  {
    platform: "Spotify",
    cpm: "₹150-250",
    minBudget: "₹50,000",
    reach: "8M+",
    targeting: "Advanced"
  },
  {
    platform: "JioSaavn",
    cpm: "₹100-180",
    minBudget: "₹35,000",
    reach: "15M+",
    targeting: "Advanced"
  },
  {
    platform: "Gaana",
    cpm: "₹120-200",
    minBudget: "₹40,000",
    reach: "12M+",
    targeting: "Standard"
  },
  {
    platform: "Wynk Music",
    cpm: "₹130-220",
    minBudget: "₹45,000",
    reach: "10M+",
    targeting: "Advanced"
  },
  {
    platform: "Amazon Music",
    cpm: "₹180-280",
    minBudget: "₹55,000",
    reach: "6M+",
    targeting: "Premium"
  },
  {
    platform: "YouTube Music",
    cpm: "₹200-300",
    minBudget: "₹60,000",
    reach: "20M+",
    targeting: "Premium"
  }
];

const PricingTableSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Platform Pricing Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for all major digital audio platforms. Final rates may vary based on 
            campaign duration, targeting parameters, and seasonal demand.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-primary text-white">
                  <th className="px-6 py-4 text-left font-semibold">Platform</th>
                  <th className="px-6 py-4 text-left font-semibold">CPM Range</th>
                  <th className="px-6 py-4 text-left font-semibold">Min. Budget</th>
                  <th className="px-6 py-4 text-left font-semibold">Monthly Reach</th>
                  <th className="px-6 py-4 text-left font-semibold">Targeting Level</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-200 hover:bg-purple-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.platform}</td>
                    <td className="px-6 py-4 text-gray-600">{item.cpm}</td>
                    <td className="px-6 py-4 text-gray-600">{item.minBudget}</td>
                    <td className="px-6 py-4 text-gray-600">{item.reach}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        item.targeting === 'Premium' 
                          ? 'bg-purple-100 text-purple-primary' 
                          : item.targeting === 'Advanced'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {item.targeting}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            💡 Pricing Notes
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-purple-accent font-bold mt-1">•</span>
              <span>CPM (Cost Per Mille) represents cost per 1,000 impressions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-accent font-bold mt-1">•</span>
              <span>Minimum budgets are indicative and may vary based on campaign requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-accent font-bold mt-1">•</span>
              <span>Volume discounts available for campaigns exceeding ₹5 lakhs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-accent font-bold mt-1">•</span>
              <span>All prices exclusive of creative production and GST</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingTableSection;
