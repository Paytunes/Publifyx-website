import { useEffect, useRef, useState } from "react";
import {
  Palette,
  Layers,
  Zap,
  Target,
  Settings,
  Headphones,
} from "lucide-react";
import featureImg1 from "@/assets/white-label-dsp/white_label_platform_feature1.webp";
import featureImg2 from "@/assets/white-label-dsp/white_label_platform_feature2.webp";
import featureImg3 from "@/assets/white-label-dsp/white_label_platform_feature3.webp";
import featureImg4 from "@/assets/white-label-dsp/white_label_platform_feature4.webp";
import featureImg5 from "@/assets/white-label-dsp/white_label_platform_feature5.webp";
import featureImg6 from "@/assets/white-label-dsp/white_label_platform_feature6.webp";
import featureImg7 from "@/assets/white-label-dsp/white_label_platform_feature7.webp";

const features = [
  {
    title: "Full Brand Customization",
    description:
      "Deploy the platform on your custom domain with your logo, color palette, and brand guidelines applied throughout the interface. To your clients, it is your platform, not a reseller solution.",
    icon: Palette,
    image: featureImg1,
  },
  {
    title: "Multi-Channel Media Buying",
    description:
      "Run display, video, native, audio, CTV, and OTT campaigns from one unified interface.",
    icon: Layers,
    image: featureImg2,
  },
  {
    title: "Real-Time Bidding Engine",
    description:
      "Our proprietary RTB engine processes bid requests in milliseconds, optimizing for your advertisers' KPIs including CPM, CPC, CPA, and ROAS targets.",
    icon: Zap,
    image: featureImg3,
  },
  {
    title: "Advanced Targeting",
    description:
      "Demographic, geographic, behavioral, contextual, and device-level targeting — plus first-party and third-party data integration.",
    icon: Target,
    image: featureImg4,
  },
  {
    title: "Transparent Reporting and Analytics",
    description:
      "Granular campaign reporting with real-time dashboards. White-labeled reports that you can share directly with your clients.",
    icon: Target,
    image: featureImg7,
  },
  {
    title: "Self-Serve and Managed Service Options",
    description:
      "Configure the platform for self-serve advertiser access or use it as a managed service tool for your internal media buying team.",
    icon: Settings,
    image: featureImg5,
  },
  {
    title: "Dedicated Support & Onboarding",
    description:
      "Our ad tech specialists guide you through platform setup, SSP integrations, and campaign optimization best practices.",
    icon: Headphones,
    image: featureImg6,
  },
];

const FeaturesSection = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isLg, setIsLg] = useState(false);

  /* Track breakpoint so we apply correct offsets */
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsLg(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  /* Recompute sticky tops when breakpoint changes */
  useEffect(() => {
    const baseTop = isLg ? 100 : 70;
    const offset = isLg ? 40 : 30;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.top = `${baseTop + i * offset}px`;
    });
  }, [isLg]);

  /* On scroll, scale down cards that are "behind" the current top card */
  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const stickyTop = parseFloat(el.style.top) || 100;

        const overflow = stickyTop - rect.top;
        const progress = Math.min(1, Math.max(0, overflow / 200));

        const scale = 1 - progress * 0.05;
        el.style.transform = `scale(${scale})`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-8">
        <div className="text-center">
          <span className="inline-block text-sm font-extrabold text-brand-orange-700 uppercase tracking-widest mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight max-w-3xl mx-auto">
            Key Features of PublifyX White Label DSP
          </h2>
        </div>
      </div>

      {/* Sticky stacking cards — works on both desktop and mobile */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="sticky mb-6 lg:mb-8 rounded-2xl border border-navy-100 bg-white shadow-lg shadow-navy-500/8 overflow-hidden transition-transform duration-200 ease-out will-change-transform"
              style={{
                top: `${(isLg ? 100 : 70) + i * (isLg ? 40 : 30)}px`,
                zIndex: i + 1,
              }}
            >
              {/* Desktop: side-by-side, alternating image position */}
              <div className="hidden lg:grid lg:grid-cols-[1fr_1fr] items-stretch">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    width={800}
                    height={533}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div
                  className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <span className="text-xs font-bold text-brand-orange-700 uppercase tracking-wider mb-1">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(features.length).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-4 mb-4 mt-2">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-orange-700" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-extrabold text-navy-800">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-navy-600 font-medium leading-relaxed text-base">
                    {feature.description}
                  </p>
                  <div className="flex gap-1.5 mt-6">
                    {features.map((_, j) => (
                      <div
                        key={j}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          j <= i
                            ? "bg-brand-orange-600 w-6"
                            : "bg-navy-200 w-1.5"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile: image on top, content below */}
              <div className="lg:hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  width={800}
                  height={533}
                  className="w-full h-auto object-cover sm:max-w-[60%] sm:m-auto"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-4 sm:p-5">
                  <span className="text-xs font-bold text-brand-orange-700 mb-1 block">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(features.length).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-3 mb-2 mt-1">
                    <div className="w-9 h-9 rounded-lg bg-brand-orange-50 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-brand-orange-700" />
                    </div>
                    <h3 className="text-base font-extrabold text-navy-800">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-navy-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                  <div className="flex gap-1 mt-4">
                    {features.map((_, j) => (
                      <div
                        key={j}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          j <= i ? "bg-brand-orange-500 w-5" : "bg-navy-200 w-1"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* Spacer so the last card has room to fully stick */}
        <div className="h-16 lg:h-20" />
      </div>
    </section>
  );
};

export default FeaturesSection;
