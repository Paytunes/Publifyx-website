import { motion } from "framer-motion";
import { Target, Zap, Star, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticCard from "@/components/effects/MagneticCard";

const targetAudience = [
  {
    title: "Media Agencies",
    description:
      "Bring programmatic buying in-house, eliminate middlemen, and increase margins by operating your own branded DSP. Control the entire media buying workflow and offer clients a proprietary platform experience.",
    icon: Target,
  },
  {
    title: "Ad Networks",
    description:
      "Provide your advertiser base with self-serve programmatic capabilities. Expand your product offering beyond traditional network buys to include real-time bidding, audience targeting, and cross-channel reach.",
    icon: Zap,
  },
  {
    title: "Startups & Entrepreneurs",
    description:
      "Enter the ad tech market without the capital expenditure of building a DSP from scratch. PublifyX gives you enterprise-grade technology at a fraction of the cost and time.",
    icon: Star,
  },
  {
    title: "Publishers with Ad Services",
    description:
      "If you offer advertising solutions alongside your content business, a white label DSP lets you create a full-service buying platform for your advertising clients.",
    icon: Rocket,
  },
];

interface BenefitsAndAudienceSectionProps {
  onGetStarted: () => void;
}

const BenefitsAndAudienceSection = ({}: BenefitsAndAudienceSectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            Built For You
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Who Is PublifyX White Label DSP For?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {targetAudience.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <MagneticCard className="bg-white rounded-2xl border border-navy-100 p-8 hover:shadow-lg transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-orange-50 flex items-center justify-center mb-5 group-hover:bg-brand-orange-100 transition-colors">
                  <audience.icon className="w-6 h-6 text-brand-orange-500" />
                </div>
                <h3 className="font-bold text-navy-800 text-xl mb-2">
                  {audience.title}
                </h3>
                <p className="text-navy-400 leading-relaxed">
                  {audience.description}
                </p>
              </MagneticCard>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <p className="text-navy-500 mb-6 font-medium">
            Not sure which model fits your business?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center btn-primary text-lg px-10 py-4 text-white no-underline"
          >
            Request a Strategy Consultation{" "}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenefitsAndAudienceSection;
