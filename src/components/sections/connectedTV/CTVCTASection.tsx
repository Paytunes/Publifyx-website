import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CTVCTASectionProps {
  onGetStarted: () => void;
}

const CTVCTASection = ({ onGetStarted }: CTVCTASectionProps) => {
  return (
    <section className="py-20 md:py-28 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-800" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-500 rounded-full blur-[250px] opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <h2 className="mb-6 !text-white">Stop Wasting Budgets on Invisible Ads</h2>
        <p className="text-xl text-navy-300 mb-4 leading-relaxed">
          Your customers are on Smart TVs. Let's meet them there—with ads they can't ignore.
        </p>
        <p className="text-base text-navy-400 mb-10 font-semibold">
          No commitment required · Launch campaigns in minutes
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center bg-brand-orange-500 hover:bg-brand-orange-600 text-white text-lg px-10 py-4 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-orange-500/25 rounded-xl group"
        >
          Book a Demo to Launch Your Smart TV Campaign
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
};

export default CTVCTASection;
