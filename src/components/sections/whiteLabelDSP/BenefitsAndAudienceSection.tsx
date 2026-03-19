import { useEffect, useRef, useState } from "react";
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsLg(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const baseTop = isLg ? 100 : 70;
    const offset = isLg ? 40 : 30;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.top = `${baseTop + i * offset}px`;
    });
  }, [isLg]);

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
    <section className="bg-navy-50">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-8">
        <div className="text-center">
          <span className="inline-block text-sm font-semibold text-brand-orange-700 uppercase tracking-widest mb-3">
            Built For You
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight max-w-3xl mx-auto">
            Who Is PublifyX White Label DSP For?
          </h2>
        </div>
      </div>

      {/* Sticky stacking cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {targetAudience.map((audience, i) => {
          const Icon = audience.icon;
          return (
            <div
              key={audience.title}
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
                    src={audience.image}
                    alt={audience.title}
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
                    {String(targetAudience.length).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-4 mb-4 mt-2">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-orange-700" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-extrabold text-navy-800">
                      {audience.title}
                    </h3>
                  </div>
                  <p className="text-navy-600 font-medium leading-relaxed text-base">
                    {audience.description}
                  </p>
                  <div className="flex gap-1.5 mt-6">
                    {targetAudience.map((_, j) => (
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
                  src={audience.image}
                  alt={audience.title}
                  width={800}
                  height={533}
                  className="w-full h-auto object-cover sm:max-w-[60%] sm:m-auto"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-4 sm:p-5">
                  <span className="text-xs font-bold text-brand-orange-700 mb-1 block">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(targetAudience.length).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-3 mb-2 mt-1">
                    <div className="w-9 h-9 rounded-lg bg-brand-orange-50 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-brand-orange-700" />
                    </div>
                    <h3 className="text-base font-extrabold text-navy-800">
                      {audience.title}
                    </h3>
                  </div>
                  <p className="text-navy-600 leading-relaxed text-sm">
                    {audience.description}
                  </p>
                  <div className="flex gap-1 mt-4">
                    {targetAudience.map((_, j) => (
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
        <div className="h-16 lg:h-20" />
      </div>

      {/* CTA */}
      <div className="flex flex-col text-center items-center pb-12 md:pb-16 px-4">
        <p className="text-navy-500 mb-6 font-medium">
          Not sure which model fits your business?
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center btn-primary text-base sm:text-lg px-4 sm:px-10 py-4 text-white no-underline"
        >
          Request a Strategy Consultation{" "}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default BenefitsAndAudienceSection;
