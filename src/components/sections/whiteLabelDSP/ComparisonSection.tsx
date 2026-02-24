import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparison = [
  { feature: "Time to Launch", buildOwn: "12–18 months", whiteLabel: "Under 15 mins" },
  { feature: "Upfront Investment", buildOwn: "$250K+", whiteLabel: "Zero" },
  { feature: "Maintenance & Infrastructure", buildOwn: "Your responsibility", whiteLabel: "Fully managed for you" },
  { feature: "Custom Branding", buildOwn: "Yes (complex setup)", whiteLabel: "Yes (easy setup)" },
  { feature: "Programmatic Access", buildOwn: "Requires integrations", whiteLabel: "Built-in SSP access" },
  { feature: "Scalability", buildOwn: "Hard without dev team", whiteLabel: "Instantly scalable" },
];

const ComparisonSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            Comparison
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            Why Choose a White Label DSP Over Building Your Own?
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto bg-white rounded-2xl border border-navy-100 overflow-hidden shadow-lg"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-800">
                  <th className="px-6 md:px-8 py-5 text-left font-bold text-white text-base">Feature</th>
                  <th className="px-6 md:px-8 py-5 text-left font-bold text-navy-300 text-base">Build Your Own DSP</th>
                  <th className="px-6 md:px-8 py-5 text-left font-bold text-brand-orange-400 text-base">Our White Labelled Platform</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-navy-50 ${index % 2 === 0 ? "bg-navy-50/50" : "bg-white"} hover:bg-brand-orange-50/30 transition-colors`}
                  >
                    <td className="px-6 md:px-8 py-5 font-semibold text-navy-800">{row.feature}</td>
                    <td className="px-6 md:px-8 py-5 text-navy-400 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      {row.buildOwn}
                    </td>
                    <td className="px-6 md:px-8 py-5 text-green-600 font-semibold flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {row.whiteLabel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
