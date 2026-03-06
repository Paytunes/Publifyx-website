import { motion } from "framer-motion";
import { PlayCircle, Download } from "lucide-react";
import EnergyButton from "@/components/effects/EnergyButton";

const OTTMidPageCTA = () => {
  return (
    <section className="py-12 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-800 rounded-3xl overflow-hidden relative border border-white/5 shadow-2xl">
          <div className="relative z-10 px-8 py-16 md:px-20 md:py-12 text-center">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white text-3xl md:text-5xl font-extrabold mb-8 leading-tight"
            >
              Want to see how PublifyX Attribution works? Get a Personalized Walkthrough.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-6 mt-10 justify-center"
            >
              <EnergyButton className="bg-brand-orange-600 hover:bg-brand-orange-700 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-brand-orange-500/20">
                <PlayCircle className="w-6 h-6 mr-3" />
                Book Presentation
              </EnergyButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OTTMidPageCTA;
