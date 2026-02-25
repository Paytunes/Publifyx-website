import { motion } from "framer-motion";
import { TrendingUp, Users, Monitor, Zap } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticCard from "@/components/effects/MagneticCard";

interface CTVBenefitsSectionProps {
  onGetStarted: () => void;
}

const benefits = [
  {
    title: "Explosive Growth",
    description: "Smart TV adoption is exploding with more households choosing streaming over cable.",
    icon: TrendingUp,
  },
  {
    title: "Engaged Viewers",
    description: "Get in front of engaged viewers on the biggest screen in the house when they're paying attention.",
    icon: Users,
  },
  {
    title: "Premium Inventory",
    description: "Full-screen takeovers with zero distractions across OTT platforms like Hulu, SonyLIV, Hotstar.",
    icon: Monitor,
  },
  {
    title: "Smarter Campaigns",
    description: "Run smarter, richer, and better-looking campaigns with Smart TV advertising.",
    icon: Zap,
  },
];

const CTVBenefitsSection = ({ onGetStarted }: CTVBenefitsSectionProps) => {
  return (
    <section className="py-20 md:py-28 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            Why CTV
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 max-w-4xl mx-auto"
          >
            Why Advertise on Smart TVs in 2025?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
          >
            Today is the perfect time for your brand to adopt Smart TV advertising with connected TV ads by PublifyX.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14"
        >
          {benefits.map((benefit, i) => (
            <MagneticCard
              key={benefit.title}
              className="bg-white rounded-2xl border border-navy-100 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-brand-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{benefit.title}</h3>
                  <p className="text-navy-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </MagneticCard>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-800 rounded-2xl border border-navy-700 p-10 max-w-5xl mx-auto text-center"
        >
          <p className="text-lg text-navy-200 mb-6 leading-relaxed max-w-2xl mx-auto">
            Expect your brand to run smarter, richer, and better-looking campaigns with Smart TV advertising with connected TV ads by PublifyX.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTVBenefitsSection;
