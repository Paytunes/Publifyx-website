import { motion } from "framer-motion";
import { Building2, ShoppingBag, MapPin, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticCard from "@/components/effects/MagneticCard";

interface CTVAudienceSectionProps {
  onGetStarted: () => void;
}

const audiences = [
  {
    title: "Ad Agencies",
    description: "Running brand campaigns across channels",
    icon: Building2,
  },
  {
    title: "D2C Brands",
    description: "Looking for scalable reach + performance",
    icon: ShoppingBag,
  },
  {
    title: "Local Businesses",
    description: "Targeting specific zip codes or cities",
    icon: MapPin,
  },
];

const useCases = [
  "Building brand awareness with full-screen video",
  "Running geo-targeted seasonal promotions",
  "Retargeting users who visited your website, right on their TV",
];

const CTVAudienceSection = ({ onGetStarted }: CTVAudienceSectionProps) => {
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
            Target Audience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 max-w-4xl mx-auto"
          >
            Who Should Use Connected TV Advertising & Key Use Cases
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
          >
            Connected TV is made for brands and agencies looking to reach premium audiences at scale.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10"
        >
          {audiences.map((audience) => (
            <MagneticCard
              key={audience.title}
              className="bg-white rounded-2xl border border-navy-100 p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange-100 flex items-center justify-center mx-auto mb-5">
                <audience.icon className="w-7 h-7 text-brand-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-2">{audience.title}</h3>
              <p className="text-navy-400">{audience.description}</p>
            </MagneticCard>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-navy-100 p-8 max-w-4xl mx-auto mb-10"
        >
          <h3 className="text-xl font-bold text-navy-800 mb-6 text-center">Key Use Cases Include:</h3>
          <ul className="space-y-4 max-w-xl mx-auto">
            {useCases.map((useCase) => (
              <li key={useCase} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-brand-orange-600" />
                </div>
                <span className="text-navy-600 font-medium">{useCase}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="text-center">
          <p className="text-lg text-navy-400 mb-6">
            No more spraying and praying—CTV helps you land exactly where it matters.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group"
          >
            Let's Talk Strategy
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTVAudienceSection;
