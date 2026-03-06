import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Globe, Target, RefreshCw, BarChart3, Zap } from "lucide-react";

const features = [
  {
    title: "Multi-Device Reach",
    description:
      "Deliver video ads across smart TVs, mobile devices, tablets, desktop browsers, and gaming consoles.",
    icon: Smartphone,
    bullets: [
      "Smart TVs & streaming sticks",
      "Mobile & tablet apps",
      "Desktop browsers & gaming consoles",
    ],
    visual: {
      label: "Device Coverage",
      items: [
        { name: "Smart TV", pct: 38 },
        { name: "Mobile", pct: 32 },
        { name: "Desktop", pct: 18 },
        { name: "Tablet", pct: 12 },
      ],
    },
  },
  {
    title: "Premium Inventory Access",
    description:
      "Connect to ad-supported streaming platforms, FAST channels, and OTT app inventory through leading SSPs.",
    icon: Globe,
    bullets: [
      "FAST channel inventory",
      "Ad-supported streaming platforms",
      "OTT app placements via SSP partners",
    ],
    visual: {
      label: "Inventory Sources",
      items: [
        { name: "FAST Channels", pct: 35 },
        { name: "AVOD Apps", pct: 30 },
        { name: "OTT Apps", pct: 20 },
        { name: "Premium VOD", pct: 15 },
      ],
    },
  },
  {
    title: "Advanced Audience Targeting",
    description:
      "Target viewers by age, gender, income, interests, purchase behavior, content genre, and geography.",
    icon: Target,
    bullets: [
      "Demographic & interest-based segments",
      "Purchase intent signals",
      "Geographic & contextual targeting",
    ],
    visual: {
      label: "Targeting Layers",
      items: [
        { name: "Demographics", pct: 45 },
        { name: "Interests", pct: 28 },
        { name: "Geography", pct: 17 },
        { name: "Behavioral", pct: 10 },
      ],
    },
  },
  {
    title: "Frequency Management",
    description:
      "Control how many times a household or individual sees your ad across devices and platforms.",
    icon: RefreshCw,
    bullets: [
      "Household-level frequency caps",
      "Cross-device deduplication",
      "Platform-level control",
    ],
    visual: {
      label: "Frequency Control",
      items: [
        { name: "Household Cap", pct: 40 },
        { name: "Device Cap", pct: 30 },
        { name: "Session Cap", pct: 20 },
        { name: "Daily Cap", pct: 10 },
      ],
    },
  },
  {
    title: "Real-Time Optimization",
    description:
      "Monitor campaign performance in real time with impressions, VCR, reach, frequency, and cost efficiency.",
    icon: BarChart3,
    bullets: [
      "Live impression & VCR tracking",
      "Cost efficiency monitoring",
      "Auto-optimization rules",
    ],
    visual: {
      label: "Performance Metrics",
      items: [
        { name: "Impressions", pct: 42 },
        { name: "VCR", pct: 30 },
        { name: "Reach", pct: 18 },
        { name: "Efficiency", pct: 10 },
      ],
    },
  },
  {
    title: "Omnichannel Integration",
    description:
      "Combine OTT with display, audio, and native advertising within PublifyX for unified media buying.",
    icon: Zap,
    bullets: [
      "Unified campaign management",
      "Cross-channel attribution",
      "Single reporting dashboard",
    ],
    visual: {
      label: "Channel Mix",
      items: [
        { name: "OTT/CTV", pct: 40 },
        { name: "Display", pct: 25 },
        { name: "Audio", pct: 20 },
        { name: "Native", pct: 15 },
      ],
    },
  },
];

const FeatureVisual = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const Icon = feature.icon;
  return (
    <div className="bg-white rounded-2xl border border-navy-100 p-8 shadow-xl shadow-navy-500/5 h-full">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-navy-100">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-navy-50 rounded-lg h-7 flex items-center px-3">
          <span className="text-[11px] text-navy-400 font-mono">publifyx.com/ott/{feature.title.toLowerCase().replace(/\s+/g, "-")}</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-brand-orange-50 flex items-center justify-center">
          <Icon className="w-7 h-7 text-brand-orange-500" />
        </div>
        <div>
          <p className="text-xs font-bold text-brand-orange-500 uppercase tracking-widest">{feature.visual.label}</p>
          <h4 className="text-xl font-extrabold text-navy-900">{feature.title}</h4>
        </div>
      </div>

      {/* Bar chart mockup */}
      <div className="space-y-5">
        {feature.visual.items.map((item, i) => (
          <div key={item.name}>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm font-semibold text-navy-700">{item.name}</span>
              <span className="text-sm font-bold text-brand-orange-500">{item.pct}%</span>
            </div>
            <div className="w-full bg-navy-100 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.pct}%` }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-brand-orange-500 to-brand-orange-400"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Step indicator */}
      <div className="mt-8 pt-4 border-t border-navy-100 flex items-center justify-between">
        <span className="text-xs font-bold text-navy-400 uppercase tracking-wider">Feature {index + 1} of {features.length}</span>
        <div className="flex gap-1">
          {features.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === index ? "bg-brand-orange-500" : "bg-navy-200"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const OTTStickyFeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setBlockRef = useCallback((el: HTMLDivElement | null, i: number) => {
    blockRefs.current[i] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = blockRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-49% 0px -49% 0px", threshold: 0 }
    );

    blockRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-navy-50" ref={sectionRef}>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-extrabold text-brand-orange-500 uppercase tracking-widest mb-4"
          >
            Platform Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight max-w-3xl mx-auto"
          >
            Everything you need to launch OTT ads
          </motion.h2>
        </div>
      </div>

      {/* Desktop: Full-height scroll sections with sticky visual */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:gap-16 relative">
            {/* Left: Sticky visual — stays in viewport */}
            <div className="relative">
              <div className="sticky top-24 h-[calc(100vh-8rem)] flex items-center">
                <div className="w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                    >
                      <FeatureVisual feature={features[activeIndex]} index={activeIndex} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right: Each feature block takes ~90vh, vertically centered */}
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
                            isActive ? "bg-brand-orange-500" : "bg-brand-orange-50"
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 transition-colors duration-300 ${
                              isActive ? "text-white" : "text-brand-orange-500"
                            }`}
                          />
                        </div>
                        <h3 className="text-xl font-extrabold text-navy-800">{feature.title}</h3>
                      </div>
                      <p className="text-navy-400 font-medium leading-relaxed mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2.5 text-sm text-navy-600 font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Stacked layout */}
      <div className="lg:hidden px-4 sm:px-6 pb-16 space-y-10">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title}>
              <div className="bg-white rounded-2xl border border-navy-100 p-6 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-orange-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-orange-500" />
                  </div>
                  <h3 className="text-lg font-extrabold text-navy-800">{feature.title}</h3>
                </div>
                <p className="text-navy-400 font-medium leading-relaxed mb-3 text-sm">{feature.description}</p>
                <ul className="space-y-1.5">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm text-navy-600 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <FeatureVisual feature={feature} index={i} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OTTStickyFeaturesSection;
