import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import EnergyButton from "@/components/effects/EnergyButton";

const CTASection = () => {
  return (
    <section className="py-12 md:py-16 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-800" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-500 rounded-full blur-[250px] opacity-10" />

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,114,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,114,0,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <h2 className="mb-6 !text-white">Ready to Transform Your Advertising?</h2>
        <p className="text-xl text-navy-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of brands already using PublifyX to reach their target audiences with precision and impact.
        </p>
        <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
          <Link to="/contact" className="flex items-center text-white no-underline group">
            Request a Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </EnergyButton>
      </motion.div>
    </section>
  );
};

export default CTASection;
