import { motion } from "framer-motion";
import { Zap, Target, Sparkles, Layers, Star, Shield, Headphones } from "lucide-react";

const features = [
  { title: "Real-time bidding engine", description: "Advanced RTB technology for optimal performance", icon: Zap },
  { title: "Self-serve & managed modes", description: "Flexible campaign management options", icon: Target },
  { title: "Customizable UI", description: "Complete white-label customization", icon: Sparkles },
  { title: "Advanced targeting tools", description: "Precision targeting with detailed analytics", icon: Layers },
  { title: "Multi-Format Support", description: "Display, Video, Audio, Native, CTV", icon: Star },
  { title: "API access", description: "Complete API access for custom integrations", icon: Shield },
  { title: "Instantly scalable", description: "No code. No team. Just launch.", icon: Layers },
  { title: "24/7 tech support", description: "Full support and seamless onboarding", icon: Headphones },
];

const FeaturesSection = () => {
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
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Features You'll Love
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" as const }}
              className="group bg-white rounded-xl border border-navy-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-orange-50 flex items-center justify-center mb-4 group-hover:bg-brand-orange-100 transition-colors">
                <feature.icon className="w-5 h-5 text-brand-orange-500" />
              </div>
              <h3 className="font-bold text-navy-800 text-base mb-2 leading-tight">{feature.title}</h3>
              <p className="text-navy-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
