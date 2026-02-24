import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

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
            The Smartest White Label DSP for Programmatic Ad Buying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to run a powerful, scalable ad platform — without the time, cost, or hassle of building it yourself.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-navy-50 rounded-2xl border border-navy-100 overflow-hidden"
        >
          <div className="bg-navy-800 px-8 md:px-12 py-6 flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-brand-orange-400" />
            <h3 className="!text-white text-xl md:text-2xl font-bold">What is a White Labelled Platform?</h3>
          </div>
          <div className="px-8 md:px-12 py-8">
            <p className="text-navy-500 mb-5 leading-relaxed text-lg">
              A white label platform is a ready-made SaaS product that businesses can rebrand as their own by customising the name, logo, and design. It lets companies launch quickly without building from scratch, saving time, development costs, and maintenance efforts.
            </p>
            <p className="text-navy-500 mb-8 leading-relaxed text-lg">
              In short, it's our tech and your brand. You get the power of a full-scale white label demand side platform, branded as your own, with zero development time.
            </p>
            <div className="bg-brand-orange-50 border border-brand-orange-200 rounded-xl p-6">
              <p className="font-bold text-brand-orange-600 text-lg md:text-xl text-center">
                No need to build. No need to manage servers. Just plug in and launch.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhiteLabelExplanationSection;
