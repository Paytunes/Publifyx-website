import { Target, Zap, Star, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import builtForImg1 from "@/assets/white-label-dsp/white_label_built_for1.webp";
import builtForImg2 from "@/assets/white-label-dsp/white_label_built_for2.webp";
import builtForImg3 from "@/assets/white-label-dsp/white_label_built_for3.webp";
import builtForImg4 from "@/assets/white-label-dsp/white_label_built_for4.webp";

const targetAudience = [
  {
    title: "Media Agencies",
    description:
      "Bring programmatic buying in-house, eliminate middlemen, and increase margins by operating your own branded DSP. Control the entire media buying workflow and offer clients a proprietary platform experience.",
    icon: Target,
    image: builtForImg1,
  },
  {
    title: "Ad Networks",
    description:
      "Provide your advertiser base with self-serve programmatic capabilities. Expand your product offering beyond traditional network buys to include real-time bidding, audience targeting, and cross-channel reach.",
    icon: Zap,
    image: builtForImg2,
  },
  {
    title: "Startups & Entrepreneurs",
    description:
      "Enter the ad tech market without the capital expenditure of building a DSP from scratch. PublifyX gives you enterprise-grade technology at a fraction of the cost and time.",
    icon: Star,
    image: builtForImg3,
  },
  {
    title: "Publishers with Advertising Services",
    description:
      "If you offer advertising solutions alongside your content business, a white label DSP lets you create a full-service buying platform for your advertising clients.",
    icon: Rocket,
    image: builtForImg4,
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
          <span className="inline-block text-sm font-semibold text-brand-orange-700 uppercase tracking-widest mb-3">
            Built For You
          </span>
          <h2>Who Is PublifyX White Label DSP For?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {targetAudience.map((audience) => (
            <div key={audience.title}>
              <div className="bg-white rounded-2xl border border-navy-100 overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
                <img
                  src={audience.image}
                  alt={audience.title}
                  width={800}
                  height={533}
                  className="w-full h-60 sm:h-80 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6 sm:px-8 sm:py-4 ">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange-50 flex items-center justify-center group-hover:bg-brand-orange-100 transition-colors">
                      <audience.icon className="w-5 h-5 text-brand-orange-700" />
                    </div>
                    <h3 className="font-bold text-navy-800 text-xl">
                      {audience.title}
                    </h3>
                  </div>
                  <p className="text-navy-400 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </div>
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
