import { motion } from "framer-motion";
import { Palette, Layers, Zap, Target, BarChart3, Settings, Headphones } from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";

const features = [
  {
    title: "Full Brand Customization",
    description:
      "Deploy on your custom domain with your logo, color palette, and brand guidelines. To your clients, it's your platform — not a reseller solution.",
    icon: Palette,
  },
  {
    title: "Multi-Channel Media Buying",
    description: "Run display, video, native, audio, CTV, and OTT campaigns from one unified interface.",
    icon: Layers,
  },
  {
    title: "Real-Time Bidding Engine",
    description:
      "Our proprietary RTB engine processes bid requests in milliseconds, optimizing for CPM, CPC, CPA, and ROAS targets.",
    icon: Zap,
  },
  {
    title: "Advanced Targeting",
    description:
      "Demographic, geographic, behavioral, contextual, and device-level targeting — plus first-party and third-party data integration.",
    icon: Target,
  },
  {
    title: "Transparent Reporting",
    description:
      "Granular campaign reporting with real-time dashboards. White-labeled reports you can share directly with your clients.",
    icon: BarChart3,
  },
  {
    title: "Self-Serve & Managed Modes",
    description:
      "Configure the platform for self-serve advertiser access or use it as a managed service tool for your internal media buying team.",
    icon: Settings,
  },
  {
    title: "Dedicated Support & Onboarding",
    description:
      "Our ad tech specialists guide you through platform setup, SSP integrations, and campaign optimization best practices.",
    icon: Headphones,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            Platform Features
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Key Features of PublifyX White Label DSP
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={i === features.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <MagneticCard className="group bg-navy-50 rounded-2xl border border-navy-100 p-7 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-orange-50 flex items-center justify-center mb-5 group-hover:bg-brand-orange-100 transition-colors">
                  <feature.icon className="w-6 h-6 text-brand-orange-500" />
                </div>
                <h3 className="font-bold text-navy-800 text-lg mb-2">{feature.title}</h3>
                <p className="text-navy-400 text-sm leading-relaxed">{feature.description}</p>
              </MagneticCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
