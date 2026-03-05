import { motion } from "framer-motion";
import multiscreenImg from "@/assets/ott/ott-multiscreen.webp";
import { CheckCircle2 } from "lucide-react";

const OTTMeasurementSection = () => {
  return (
    <section className="py-12 md:py-16 bg-navy-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-8 leading-tight">
              Precise Attribution Across the Modern Streaming Landscape
            </h2>
            <p className="text-lg text-navy-500 mb-10 leading-relaxed">
              Understand the full customer journey. PublifyX's measurement tools connect your OTT ad exposure 
              to real-world actions across any device, from mobile sign-ups to desktop conversions.
            </p>

            <div className="space-y-6">
              {[
                { title: "Household-Level Precision", desc: "Identify which households saw your ads and how they interacted later." },
                { title: "Cross-Device Connectivity", desc: "Bridge the gap between viewing on a TV and converting on a phone." },
                { title: "Real-Time Actionable Data", desc: "Optimize your campaigns instantly based on multi-touch attribution." }
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange-500/20 flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-navy-800 mb-1">{item.title}</h4>
                    <p className="text-navy-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange-500/10 rounded-full blur-[100px]" />
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] border border-navy-100">
              <img
                src={multiscreenImg}
                alt="Multi-screen attribution diagram"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OTTMeasurementSection;
