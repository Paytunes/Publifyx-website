import { Button } from "@/components/ui/button";

const pricingData = [
  {
    adOption: "Banner",
    rates: "₹ 0.07 - ₹ 0.94"
  },
  {
    adOption: "Article",
    rates: "₹ 10,100 - ₹ 4,65,000"
  },
  {
    adOption: "Video",
    rates: "₹ 0.093 - ₹ 8,70,000"
  },
  {
    adOption: "Social Media Post",
    rates: "₹ 35,60,000 - ₹ 35,60,000"
  },
  {
    adOption: "Scratch Card",
    rates: "₹ 9 - ₹ 9"
  }
];

const DigitalPricingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Digital Advertising Cost
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-primary text-white">
                  <th className="px-6 py-4 text-left font-semibold">Ad Option</th>
                  <th className="px-6 py-4 text-left font-semibold">Rates</th>
                  <th className="px-6 py-4 text-left font-semibold">Place Ads</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-200 hover:bg-purple-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.adOption}</td>
                    <td className="px-6 py-4 text-gray-600">{item.rates}</td>
                    <td className="px-6 py-4">
                      <Button variant="default" size="sm">
                        Book Ads Now
                      </Button>
                    </td>
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

export default DigitalPricingSection;
