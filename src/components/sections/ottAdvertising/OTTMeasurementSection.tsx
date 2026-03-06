import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import EnergyButton from "@/components/effects/EnergyButton";
import targetingImg from "@/assets/ott/ott-targeting.webp";
import engagedViewerImg from "@/assets/ott/ott-engaged-viewer.webp";
import measurementImg from "@/assets/ott/ott-measurement-dashboard.webp";

const OTTMeasurementSection = () => {
  return (
    <section className="py-12 md:py-16 bg-navy-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-8 leading-tight">
            Why OTT Advertising Matters
          </h2>
          <p className="text-lg text-navy-600 leading-relaxed max-w-3xl mx-auto">
            Traditional TV advertising operates on a broadcast model where ads reach a mass audience with limited
            targeting precision. OTT flips that model.
          </p>
        </motion.div>

        {/* Block 1: Targeting — Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange-500/10 rounded-full blur-[100px]" />
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] border border-navy-100">
              <img src={targetingImg} alt="OTT advertising targeting dashboard" className="w-full h-auto" width={672} height={512} loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              With OTT, you can target at the household or individual level using:
            </p>
            <div className="space-y-5">
              {["Demographic data", "Behavioral signals", "Geographic location", "Content preferences"].map((item) => (
                <div key={item} className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange-600" />
                  </div>
                  <p className="text-lg font-semibold text-navy-800">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Block 2: Engagement — Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-navy-600 mb-6 leading-relaxed">
              OTT audiences are highly engaged. They have actively chosen the content they are watching, which
              translates to higher attention levels compared to passive channel surfing on linear TV.
            </p>
            <p className="text-lg text-navy-800 font-semibold leading-relaxed">
              Most OTT ads are non-skippable, delivering consistently high completion rates.
            </p>
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
              <img src={engagedViewerImg} alt="Engaged viewer watching OTT content" className="w-full h-auto" width={800} height={600} loading="lazy" decoding="async" />
            </div>
          </motion.div>
        </div>

        {/* Block 3: Measurement — Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange-500/10 rounded-full blur-[100px]" />
            <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] border border-navy-100">
              <img src={measurementImg} alt="OTT performance measurement dashboard" className="w-full h-auto" width={800} height={600} loading="lazy" decoding="async" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-navy-600 mb-8 leading-relaxed">For advertisers, OTT combines:</p>
            <div className="space-y-5 mb-8">
              {["Television-scale reach", "Digital targeting precision", "Transparent performance measurement"].map(
                (item) => (
                  <div key={item} className="flex gap-4 items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange-600" />
                    </div>
                    <p className="text-lg font-semibold text-navy-800">{item}</p>
                  </div>
                ),
              )}
            </div>
            <p className="text-lg text-navy-600 leading-relaxed">
              Impressions, completion rates, frequency, attribution, all measurable in real time.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-navy-600 mb-6">
            Want to see how OTT fits into your media mix? Request a strategic consultation.
          </p>
          <Link to="/contact">
            <EnergyButton className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange-500 hover:bg-brand-orange-600 text-white rounded-xl font-bold text-lg transition-colors duration-300">
              Book a Demo
            </EnergyButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OTTMeasurementSection;
