import { motion } from "framer-motion";
import { Tv, Target, BarChart3 } from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTVExplanationSectionProps {
  onGetStarted: () => void;
}

const items = [
  {
    icon: Tv,
    title: "Smart TV Reach",
    description:
      "Connected TV (CTV) advertising lets your brand show video ads on internet-enabled TVs—think Smart TVs, Roku, Fire TV, Apple TV, even gaming consoles.",
  },
  {
    icon: Target,
    title: "Premium Placement",
    description:
      "Unlike traditional cable ads that interrupt random content, CTV ads appear within on-demand, high-quality, and premium environments—exactly where today's viewer is.",
  },
  {
    icon: BarChart3,
    title: "Real Results",
    description:
      "Advertisers can easily target real people and will be able to track real results, which is something you don't get with traditional cable advertising.",
  },
];

const CTVExplanationSection = ({ onGetStarted }: CTVExplanationSectionProps) => {
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
            What Is CTV
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 max-w-4xl mx-auto"
          >
            What is Connected TV Advertising?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
          >
            Deliver full-screen, non-skippable video ads to viewers on the biggest screen in the house — powered by programmatic precision.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {items.map((item, i) => (
            <MagneticCard
              key={item.title}
              className="bg-navy-50 rounded-2xl border border-navy-100 p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange-100 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-brand-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-3">{item.title}</h3>
              <p className="text-navy-400 leading-relaxed text-sm">{item.description}</p>
            </MagneticCard>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group"
          >
            Book Your Free Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTVExplanationSection;
