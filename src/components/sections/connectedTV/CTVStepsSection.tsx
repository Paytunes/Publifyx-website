import { motion } from "framer-motion";

interface CTVStepsSectionProps {
  onGetStarted?: () => void;
}

const steps = [
  "Define campaign objectives (awareness, reach, performance).",
  "Configure audience targeting.",
  "Upload 15- or 30-second HD video creatives (MP4 or MOV).",
  "Set budget, bid strategy, and schedule.",
  "Launch via real-time bidding across connected TV inventory.",
  "Monitor and optimize in real time.",
  "Post-campaign, access reporting on impressions, VCR, unique household reach, frequency, and cost per completed view.",
];

const CTVStepsSection = ({ onGetStarted }: CTVStepsSectionProps) => {
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
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 max-w-4xl mx-auto"
          >
            How CTV Advertising Works with PublifyX
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-14"
        >
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="flex items-start gap-4 bg-white rounded-xl border border-navy-100 p-5"
              >
                <span className="w-8 h-8 rounded-lg bg-brand-orange-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-navy-600 font-medium leading-relaxed">{step}</span>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
};

export default CTVStepsSection;
