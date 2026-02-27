import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Building2 } from "lucide-react";
import MagneticButton from "@/components/effects/MagneticButton";

const ProductsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-navy-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange-500 rounded-full blur-[200px] opacity-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange-400 rounded-full blur-[160px] opacity-[0.06]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-400 uppercase tracking-widest mb-3"
          >
            Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 !text-white"
          >
            Choose Your Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-300 max-w-2xl mx-auto"
          >
            An evolved user experience that drives performance across channels with ease.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shout Lite */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-500 group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-orange-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-brand-orange-400" />
              </div>
              <h3 className="mb-4 !text-white text-2xl">Shout Lite</h3>
              <p className="text-navy-300 leading-relaxed mb-8">
                AI-powered audio and video creativity solutions at a fraction of traditional costs. Pre-packaged OTT
                solutions simplify advertising, empowering businesses to optimize ROI through enhanced ad completion
                rates.
              </p>
            </div>
            <MagneticButton as="div" className="w-full">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center btn-primary w-full text-center group/btn"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Shout Enterprise */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-brand-orange-500/20 relative group hover:shadow-2xl hover:shadow-brand-orange-500/30 transition-shadow duration-500"
          >
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
              Popular
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-4 !text-white text-2xl">Shout Enterprise</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                White-Labeled DSP Platform designed for corporate media agencies. Fully customizable platforms with
                self-branded reporting portals and campaign management tools for unparalleled client services.
              </p>
            </div>
            <MagneticButton as="div" className="w-full">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-navy-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full text-center group/btn"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
