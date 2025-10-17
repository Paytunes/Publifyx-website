
import { Shield } from "lucide-react";

const ComparisonSection = () => {
  const comparison = [
    {
      feature: "Time to Launch",
      buildOwn: "12–18 months",
      whiteLabel: "15 minutes"
    },
    {
      feature: "Upfront Investment",
      buildOwn: "$250K+",
      whiteLabel: "Zero"
    },
    {
      feature: "Maintenance & Infrastructure",
      buildOwn: "Your responsibility",
      whiteLabel: "Fully managed for you"
    },
    {
      feature: "Custom Branding",
      buildOwn: "Yes (complex setup)",
      whiteLabel: "Yes (easy setup)"
    },
    {
      feature: "Programmatic Access",
      buildOwn: "Requires integrations",
      whiteLabel: "Built-in SSP access"
    },
    {
      feature: "Scalability",
      buildOwn: "Hard without dev team",
      whiteLabel: "Instantly scalable"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Comparison
          </div>
          <h2 className="mb-6 max-w-4xl mx-auto text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose a White Label DSP Over Building Your Own?
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white">
                <tr>
                  <th className="px-6 md:px-8 py-6 text-left font-bold text-lg md:text-xl">Feature</th>
                  <th className="px-6 md:px-8 py-6 text-left font-bold text-lg md:text-xl">Build Your Own DSP</th>
                  <th className="px-6 md:px-8 py-6 text-left font-bold text-lg md:text-xl">Our White Labelled Platform</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className={`border-b-2 border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors duration-300`}>
                    <td className="px-6 md:px-8 py-6 font-bold text-gray-800 text-lg md:text-xl">{row.feature}</td>
                    <td className="px-6 md:px-8 py-6 text-red-600 font-semibold text-base md:text-lg">{row.buildOwn}</td>
                    <td className="px-6 md:px-8 py-6 text-green-600 font-bold text-base md:text-lg">{row.whiteLabel}</td>
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

export default ComparisonSection;
