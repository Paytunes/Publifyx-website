const categoriesData = [
  { category: "Entertainment", adSpend: "₹4.4 Cr" },
  { category: "OTT", adSpend: "₹3.8 Cr" },
  { category: "Top 5 Video Platforms", adSpend: "₹3.6 Cr" },
  { category: "CTV", adSpend: "₹2.1 Cr" },
  { category: "Gaming and Sports", adSpend: "₹1.3 Cr" }
];

const TopCategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Categories by Ad Spend in Q3 2025
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-primary text-white">
                  <th className="px-6 py-4 text-left font-semibold">Category</th>
                  <th className="px-6 py-4 text-left font-semibold">Ad Spend</th>
                </tr>
              </thead>
              <tbody>
                {categoriesData.map((item, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-200 hover:bg-purple-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.category}</td>
                    <td className="px-6 py-4 text-gray-600">{item.adSpend}</td>
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

export default TopCategoriesSection;
