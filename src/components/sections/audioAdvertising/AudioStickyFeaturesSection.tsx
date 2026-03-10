import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Target, Mic, Radio, BarChart3, Zap } from "lucide-react";

const features = [
  {
    title: "Cross-Platform Audio Inventory",
    description: "Access audio ad inventory across streaming music services, podcast networks, digital radio stations, and smart speaker environments through our integrations with leading audio SSPs.",
    icon: Globe,
    visual: {
      label: "Platform Coverage",
      items: [
        { name: "Streaming Music", pct: 38 },
        { name: "Podcasts", pct: 30 },
        { name: "Digital Radio", pct: 20 },
        { name: "Smart Speakers", pct: 12 },
      ],
    },
  },
  {
    title: "Precision Listener Targeting",
    description: "Target audio audiences based on demographics, geographic location, interests, listening behavior, content genre, device type, and time of day.",
    icon: Target,
    visual: {
      label: "Targeting Layers",
      items: [
        { name: "Demographics", pct: 35 },
        { name: "Geography", pct: 25 },
        { name: "Interests", pct: 22 },
        { name: "Behavior", pct: 18 },
      ],
    },
  },
  {
    title: "Dynamic Creative Capabilities",
    description:
      "Serve different audio ad creatives to different audience segments based on targeting criteria, enabling personalized messaging at scale.",
    icon: Mic,
    visual: {
      label: "Creative Segments",
      items: [
        { name: "Personalized", pct: 42 },
        { name: "Contextual", pct: 28 },
        { name: "Sequential", pct: 18 },
        { name: "A/B Tested", pct: 12 },
      ],
    },
  },
  {
    title: "Companion Display Banners",
    description: "Pair your audio ad with a visual companion banner that appears in the listener's app, reinforcing your message with a clickable visual element.",
    icon: Radio,
    visual: {
      label: "Banner Engagement",
      items: [
        { name: "In-App Display", pct: 40 },
        { name: "Clickthrough", pct: 28 },
        { name: "Brand Recall", pct: 20 },
        { name: "Interaction", pct: 12 },
      ],
    },
  },
  {
    title: "Real-Time Reporting",
    description: "Track audio campaign performance with metrics including impressions, completion rate, reach, frequency, and cost per completed listen.",
    icon: BarChart3,
    visual: {
      label: "Performance Metrics",
      items: [
        { name: "Impressions", pct: 40 },
        { name: "Completion Rate", pct: 30 },
        { name: "Reach", pct: 18 },
        { name: "Efficiency", pct: 12 },
      ],
    },
  },
  {
    title: "Unified Platform Experience",
    description: "Manage audio campaigns alongside display, video, CTV, and OTT within the PublifyX platform, no separate tools or logins required.",
    icon: Zap,
    visual: {
      label: "Channel Mix",
      items: [
        { name: "Audio", pct: 35 },
        { name: "Display", pct: 25 },
        { name: "Video/CTV", pct: 25 },
        { name: "OTT", pct: 15 },
      ],
    },
  },
];

const FeatureVisual = ({ feature, index }: { feature: (typeof features)[0]; index: number }) => {
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
          <span className="text-[11px] text-navy-400 font-mono">
            publifyx.com/audio/{feature.title.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-brand-orange-50 flex items-center justify-center">
          <Icon className="w-7 h-7 text-brand-orange-700" />
        </div>
        <div>
          <p className="text-xs font-bold text-brand-orange-700 uppercase tracking-widest">{feature.visual.label}</p>
          <h4 className="text-xl font-extrabold text-navy-900">{feature.title}</h4>
        </div>
      </div>

      {/* Bar chart mockup */}
      <div className="space-y-5">
        {feature.visual.items.map((item, i) => (
          <div key={item.name}>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm font-semibold text-navy-700">{item.name}</span>
              <span className="text-sm font-bold text-brand-orange-700">{item.pct}%</span>
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
        <span className="text-xs font-bold text-navy-400 uppercase tracking-wider">
          Feature {index + 1} of {features.length}
        </span>
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

const AudioStickyFeaturesSection = () => {
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
    <section className="bg-navy-50" ref={sectionRef}>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-extrabold text-brand-orange-700 uppercase tracking-widest mb-4"
          >
            Platform Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight max-w-3xl mx-auto"
          >
            Audio Platform Features
          </motion.h2>
        </div>
      </div>

      {/* Desktop: Sticky scroll with visual on right */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:gap-16 relative">
            {/* Left: Feature blocks */}
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
                              isActive ? "text-white" : "text-brand-orange-700"
                            }`}
                          />
                        </div>
                        <h3 className="text-xl font-extrabold text-navy-800">{feature.title}</h3>
                      </div>
                      <p className="text-navy-600 font-medium leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Sticky visual */}
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
                    <Icon className="w-5 h-5 text-brand-orange-700" />
                  </div>
                  <h3 className="text-lg font-extrabold text-navy-800">{feature.title}</h3>
                </div>
                <p className="text-navy-600 font-medium leading-relaxed text-sm">{feature.description}</p>
              </div>
              <FeatureVisual feature={feature} index={i} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AudioStickyFeaturesSection;
