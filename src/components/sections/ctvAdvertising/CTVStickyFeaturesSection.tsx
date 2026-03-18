import { useEffect, useRef, useState, useCallback } from "react";
import {
  Globe,
  Target,
  RefreshCw,
  BarChart3,
  Shield,
  Layers,
} from "lucide-react";
import featureImg1 from "@/assets/ctv/ctv_platform_features1.webp";
import featureImg2 from "@/assets/ctv/ctv_platform_features2.webp";
import featureImg3 from "@/assets/ctv/ctv_platform_features3.webp";
import featureImg4 from "@/assets/ctv/ctv_platform_features4.webp";
import featureImg5 from "@/assets/ctv/ctv_platform_features5.webp";
import featureImg6 from "@/assets/ctv/ctv_platform_features6.webp";

const features = [
  {
    title: "Premium Streaming Inventory Access",
    description:
      "Access ad-supported streaming platforms, FAST channels, OTT apps, and premium CTV inventory via SSP integrations and private marketplace deals.",
    icon: Globe,
    image: featureImg1,
  },
  {
    title: "Precision Audience Targeting",
    description:
      "Go beyond basic demographics. Target households based on interests, purchase intent, viewing behavior, income level, and geographic location, down to the zip code level.",
    icon: Target,
    image: featureImg2,
  },
  {
    title: "Cross-Device Retargeting",
    description:
      "Identify viewers who saw your CTV ad and retarget them across mobile, desktop, and tablet with display or video follow-up campaigns, creating a true omnichannel experience.",
    icon: RefreshCw,
    image: featureImg3,
  },
  {
    title: "Real-Time Campaign Reporting",
    description:
      "Monitor impressions, video completion rates (VCR), reach, frequency, and cost metrics in real time. Our reporting dashboard provides full transparency into where your ads ran and how they performed.",
    icon: BarChart3,
    image: featureImg4,
  },
  {
    title: "Brand Safety Controls",
    description:
      "Ensure your ads appear alongside quality content with category-level and app-level exclusions, plus third-party verification integrations.",
    icon: Shield,
    image: featureImg5,
  },
  {
    title: "White Label CTV Capabilities",
    description:
      "Agencies using PublifyX's white label DSP can offer CTV advertising as a branded service to their clients, with custom reporting and platform access.",
    icon: Layers,
    image: featureImg6,
  },
];

const FeatureVisual = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const Icon = feature.icon;
  return (
    <div className="bg-white rounded-2xl border border-navy-100 p-6 shadow-xl shadow-navy-500/5 h-full">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-navy-100">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-navy-50 rounded-lg h-7 flex items-center px-3">
          <span className="text-[11px] text-navy-400 font-mono">
            publifyx.com/ctv/{feature.title.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>
      </div>

      {/* Feature image */}
      <div className="rounded-xl overflow-hidden mb-4">
        <img
          src={feature.image}
          alt={feature.title}
          width={800}
          height={533}
          className="w-full h-auto object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-brand-orange-50 flex items-center justify-center">
          <Icon className="w-5 h-5 text-brand-orange-700" />
        </div>
        <h4 className="text-lg font-extrabold text-navy-900">{feature.title}</h4>
      </div>

      {/* Step indicator */}
      <div className="mt-4 pt-3 border-t border-navy-100 flex items-center justify-between">
        <span className="text-xs font-bold text-navy-400 uppercase tracking-wider">
          Feature {index + 1} of {features.length}
        </span>
        <div className="flex gap-1">
          {features.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === index ? "bg-brand-orange-500" : "bg-navy-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CTVStickyFeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setBlockRef = useCallback((el: HTMLDivElement | null, i: number) => {
    blockRefs.current[i] = el;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIdx = 0;
      let closestDist = Infinity;

      blockRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });

      setActiveIndex(closestIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white" ref={sectionRef}>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12">
        <div className="text-center">
          <span className="inline-block text-sm font-extrabold text-brand-orange-700 uppercase tracking-widest mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight max-w-3xl mx-auto">
            PublifyX CTV Advertising Platform Features
          </h2>
        </div>
      </div>

      {/* Desktop: Cards LEFT, Sticky image RIGHT */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:gap-16 relative">
            {/* Left: Each feature card */}
            <div>
              {features.map((feature, i) => {
                const Icon = feature.icon;
                const isActive = i === activeIndex;
                return (
                  <div
                    key={feature.title}
                    ref={(el) => setBlockRef(el, i)}
                    className="flex items-center"
                    style={{ minHeight: "90vh" }}
                  >
                    <div
                      className={`rounded-2xl border-2 p-8 w-full transition-all duration-300 ${
                        isActive
                          ? "border-brand-orange-500 bg-white shadow-lg shadow-brand-orange-500/10"
                          : "border-navy-100 bg-white/50 opacity-40"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                            isActive
                              ? "bg-brand-orange-500"
                              : "bg-brand-orange-50"
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 transition-colors duration-300 ${
                              isActive ? "text-white" : "text-brand-orange-700"
                            }`}
                          />
                        </div>
                        <h3 className="text-xl font-extrabold text-navy-800">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-navy-600 font-medium leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Sticky visual */}
            <div className="relative">
              <div className="sticky top-24 h-[calc(100vh-8rem)] flex items-center">
                <div className="w-full">
                  <div className="transition-opacity duration-300">
                    <FeatureVisual
                      feature={features[activeIndex]}
                      index={activeIndex}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Image on top, then title + description */}
      <div className="lg:hidden px-4 sm:px-6 pb-16 space-y-6">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white rounded-2xl border border-navy-100 overflow-hidden">
            <img
              src={feature.image}
              alt={feature.title}
              width={800}
              height={533}
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="p-5">
              <h3 className="text-base font-extrabold text-navy-800 mb-1">
                {feature.title}
              </h3>
              <p className="text-navy-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTVStickyFeaturesSection;
