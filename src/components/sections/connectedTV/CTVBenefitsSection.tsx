import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface CTVBenefitsSectionProps {
  onGetStarted?: () => void;
}

const ctvBrings = [
  "The immersive impact of television",
  "Non-skippable ad placements",
  "Household-level targeting",
  "Real-time optimization",
  "Transparent reporting",
];

const targetingBy = [
  "Demographics",
  "Geography",
  "Interests",
  "Purchase behavior",
  "Household characteristics",
];

const CTVBenefitsSection = ({ onGetStarted }: CTVBenefitsSectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            Why CTV
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 max-w-4xl mx-auto"
          >
            Why CTV Advertising Is Essential for Modern Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
          >
            The shift from cable to streaming is not a trend, it is a structural change in media consumption. Cord-cutting households continue to grow year over year, and a significant portion of younger demographics have never subscribed to traditional cable.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
          {/* CTV brings together */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-navy-100 p-8"
          >
            <h3 className="text-xl font-bold text-navy-800 mb-6">CTV brings together:</h3>
            <ul className="space-y-4">
              {ctvBrings.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-orange-600" />
                  </div>
                  <span className="text-navy-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTV enables targeting by */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-navy-100 p-8"
          >
            <h3 className="text-xl font-bold text-navy-800 mb-6">Additionally, CTV enables targeting by:</h3>
            <ul className="space-y-4">
              {targetingBy.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-orange-600" />
                  </div>
                  <span className="text-navy-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-navy-400 leading-relaxed mb-4">
            Completion rates on CTV typically exceed mobile and desktop video. Viewers actively choose what they watch, resulting in higher attention and brand recall.
          </p>
          <p className="text-lg text-navy-400 leading-relaxed">
            Advertisers can control frequency, optimize in real time, and measure outcomes including website visits, app installs, and offline conversions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTVBenefitsSection;
