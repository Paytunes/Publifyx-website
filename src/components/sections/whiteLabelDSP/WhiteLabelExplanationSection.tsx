import { motion } from "framer-motion";
import { Lightbulb, Check } from "lucide-react";

const youControl = [
  "Branding and domain",
  "Pricing and margins",
  "Client access",
  "Campaign workflows",
];

const weManage = [
  "Real-time bidding infrastructure",
  "Server architecture",
  "Data pipelines",
  "SSP and exchange integrations",
  "Ongoing compliance and updates",
];

const WhiteLabelExplanationSection = () => {
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
            White Label DSP
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 max-w-4xl mx-auto"
          >
            What Is a White Label DSP?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
          >
            A white label DSP is a fully built demand side platform developed and maintained by a technology provider, but deployed under your brand. Instead of investing millions in building proprietary ad tech from the ground up, you get a fully functional programmatic advertising platform that looks and feels like your own product, ready to onboard advertisers and start buying media immediately.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {/* You Control */}
          <div className="bg-navy-50 rounded-2xl border border-navy-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-orange-100 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-brand-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-navy-800">You Control</h3>
            </div>
            <ul className="space-y-4">
              {youControl.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-orange-600" />
                  </div>
                  <span className="text-navy-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* We Manage */}
          <div className="bg-navy-800 rounded-2xl border border-navy-700 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-orange-500/20 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-brand-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white">We Manage</h3>
            </div>
            <ul className="space-y-4">
              {weManage.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-navy-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhiteLabelExplanationSection;
