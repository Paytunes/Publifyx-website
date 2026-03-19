
import { Globe, Target, RefreshCw, BarChart3, Shield, Layers } from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";

const features = [
  {
    icon: Globe,
    title: "Premium Streaming Inventory Access",
    description: "Access ad-supported streaming platforms, FAST channels, OTT apps, and premium CTV inventory via SSP integrations and private marketplace deals.",
  },
  {
    icon: Target,
    title: "Precision Audience Targeting",
    description: "Go beyond basic demographics. Target households based on interests, purchase intent, viewing behavior, income level, and geographic location, down to the zip code level.",
  },
  {
    icon: RefreshCw,
    title: "Cross-Device Retargeting",
    description: "Identify viewers who saw your CTV ad and retarget them across mobile, desktop, and tablet with display or video follow-up campaigns, creating a true omnichannel experience.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Campaign Reporting",
    description: "Monitor impressions, video completion rates (VCR), reach, frequency, and cost metrics in real time. Our reporting dashboard provides full transparency into where your ads ran and how they performed.",
  },
  {
    icon: Shield,
    title: "Brand Safety Controls",
    description: "Ensure your ads appear alongside quality content with category-level and app-level exclusions, plus third-party verification integrations.",
  },
  {
    icon: Layers,
    title: "White Label CTV Capabilities",
    description: "Agencies using PublifyX's white label DSP can offer CTV advertising as a branded service to their clients, with custom reporting and platform access.",
  },
];

const CTVFeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            Platform Features
          </span>
          <h2
            className="mb-4 max-w-4xl mx-auto"
          >
            PublifyX CTV Advertising Platform Features
          </h2>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature) => (
            <MagneticCard
              key={feature.title}
              className="bg-navy-50 rounded-2xl border border-navy-100 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange-100 flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-brand-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-3">{feature.title}</h3>
              <p className="text-navy-400 leading-relaxed text-sm">{feature.description}</p>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTVFeaturesSection;
