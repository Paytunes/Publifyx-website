import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useServiceBreadcrumbs } from "@/hooks/useServiceBreadcrumbs";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import audioHeroDashboard from "@/assets/audio/audio-hero-dashboard.webp";
import listenerHeadphones from "@/assets/audio/listener-headphones.webp";
import podcastStudio from "@/assets/audio/podcast-studio.webp";
import audioDevices from "@/assets/audio/audio-devices.webp";
import listenerActive from "@/assets/audio/listener-active.webp";
import stepUploadCreatives from "@/assets/audio/step-upload-creatives.webp";
import stepSetTargeting from "@/assets/audio/step-set-targeting.webp";
import stepLaunchCampaigns from "@/assets/audio/step-launch-campaigns.webp";
import stepOptimizeReport from "@/assets/audio/step-optimize-report.webp";
import { motion, useInView } from "framer-motion";
import EnergyButton from "@/components/effects/EnergyButton";
import {
  ArrowRight,
  Sparkles,
  Headphones,
  Radio,
  Target,
  BarChart3,
  Mic,
  Zap,
  Globe,
  PhoneCall,
  Settings,
  Rocket,
  GraduationCap,
  Monitor,
  Building2,
  Store,
  Megaphone,
  Music,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FounderQuoteSection from "@/components/sections/FounderQuoteSection";
import ClientTestimonialSection from "@/components/sections/ClientTestimonialSection";
import AudioStickyFeaturesSection from "@/components/sections/audioAdvertising/AudioStickyFeaturesSection";

const adFormats = [
  {
    title: "In-Stream Audio Ads",
    desc: "Short audio spots (15 or 30 seconds) that play before, during, or between songs, podcast episodes, or radio content.",
    icon: Music,
  },
  {
    title: "Podcast Ads with Dynamic Insertion",
    desc: "Targeted audio ads dynamically inserted into podcast episodes at listen time, based on the listener's profile and targeting parameters.",
    icon: Mic,
  },
  {
    title: "Companion Display Banners",
    desc: "Visual banners that appear within the streaming app while the audio ad plays, providing a visual reinforcement and a clickable call-to-action.",
    icon: Radio,
  },
  {
    title: "Sequential Audio Messaging",
    desc: "Deliver a series of audio ads to the same listener over time, building a narrative or guiding them through a funnel with progressive messaging.",
    icon: Headphones,
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Audio Creatives",
    description: "Upload your 15s or 30s audio ad creatives with optional companion banners.",
    icon: PhoneCall,
    image: stepUploadCreatives,
  },
  {
    number: "02",
    title: "Set Targeting",
    description: "Define audiences by demographics, listening behavior, genre, and geography.",
    icon: Settings,
    image: stepSetTargeting,
  },
  {
    number: "03",
    title: "Launch Campaigns",
    description: "Go live across audio inventory via programmatic buying.",
    icon: Rocket,
    image: stepLaunchCampaigns,
  },
  {
    number: "04",
    title: "Optimize & Report",
    description: "Monitor completion rates, reach, and frequency — optimize in real time.",
    icon: GraduationCap,
    image: stepOptimizeReport,
  },
];

const whoItsFor = [
  {
    title: "Brand Advertisers",
    description: "Reach audiences during screen-free moments — commuting, exercising, cooking — when visual ads can't.",
    icon: Megaphone,
  },
  {
    title: "Media Agencies",
    description: "Add audio as a premium channel to your programmatic stack with unified reporting.",
    icon: Building2,
  },
  {
    title: "Podcast Advertisers",
    description: "Dynamically insert targeted ads into podcast episodes with precision and measurability.",
    icon: Music,
  },
  {
    title: "Local Businesses",
    description: "Target specific geographic areas with audio ads on local streaming and radio platforms.",
    icon: Store,
  },
];

const faqs = [
  {
    question: "What is programmatic audio advertising?",
    answer:
      "Programmatic audio advertising uses automated, real-time bidding technology to buy and deliver audio ads across streaming music platforms, podcasts, and digital radio. It eliminates manual buying and enables precise audience targeting.",
  },
  {
    question: "What platforms do programmatic audio ads run on?",
    answer: "Programmatic audio ads run across streaming music services, podcast networks, digital radio platforms, and smart speaker environments. Specific platform availability depends on SSP integrations and regional inventory.",
  },
  {
    question: "How long are audio ads?",
    answer: "Standard programmatic audio ad lengths are 15 seconds and 30 seconds. Some platforms also support 6-second or 60-second formats depending on inventory availability.",
  },
  {
    question: "Can I target specific audiences with audio advertising?",
    answer:
      "Yes. PublifyX supports targeting by demographics, geography, interests, listening behavior, content genre, device type, and time of day for audio campaigns.",
  },
  {
    question: "How is audio advertising performance measured?",
    answer:
      "Key metrics include impressions, audio completion rate, unique listener reach, frequency, and cost per completed listen. Companion banner metrics include click-through rate and engagement.",
  },
];

const audioStats = [
  { value: 95, suffix: "%+", label: "Completion Rate", description: "Audio ads played in full", icon: TrendingUp },
  { value: 500, suffix: "M+", label: "Listeners Reached", description: "Across streaming platforms", icon: Users },
  { value: 100, suffix: "+", label: "Publisher Partners", description: "Premium audio inventory", icon: Globe },
  { value: 24, suffix: "/7", label: "Real-Time Bidding", description: "Always-on campaigns", icon: Clock },
];

/* ── Animated counter (AdTonos-inspired) ── */
const AnimatedStatCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-extrabold text-white mb-2 font-display">
      {count}
      {suffix}
    </div>
  );
};

const ProgrammaticAudioAdvertising = () => {
  useEffect(() => {
    document.title = "Programmatic Audio Advertising Platform | Audio DSP — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Run targeted audio ads on streaming music, podcasts, and digital radio with PublifyX's programmatic audio advertising platform. Reach listeners where screens cannot.",
      );
    return () => {
      document.title = "PublifyX — Programmatic Advertising Platform";
    };
  }, []);

  const breadcrumbs = useServiceBreadcrumbs("Programmatic Audio Advertising");

  return (
    <Layout transparentHeader>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-800">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-brand-orange-500 rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-orange-300 rounded-full blur-[160px] opacity-[0.06]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <PageBreadcrumb items={breadcrumbs} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">Audio Advertising Platform</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                Programmatic Audio Advertising — Reach Listeners Across Streaming, Podcasts, and Digital Radio
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Not every powerful advertising moment happens on a screen.
              </p>
              <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
                Audio reaches audiences while they commute, exercise, cook, or work, moments when visual ads cannot compete.
              </p>
              <p className="text-base text-navy-300 mb-10 leading-relaxed max-w-xl">
                PublifyX provides a programmatic audio advertising platform that automates the buying and delivery of audio ads across streaming music, podcasts, digital radio, and smart speaker environments. Target listeners with precision and measure performance in real time, all within the same platform you use for display, video, and CTV.
              </p>
              <p className="text-sm text-navy-400 mb-6 font-semibold">
                Want to reach audiences during screen-free moments? Talk to our audio specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
                  <Link to="/contact" className="flex items-center text-white no-underline group">
                    Book a Demo{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </EnergyButton>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange-500/10 rounded-3xl blur-2xl" />
                <img
                  src={audioHeroDashboard}
                  alt="Programmatic audio advertising dashboard with waveform visualization and listener analytics"
                  className="relative w-full h-auto rounded-2xl shadow-2xl shadow-black/40 border border-white/10"
                  width={1024}
                  height={1024}
                  fetchPriority="high"
                  decoding="sync"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY AUDIO — Alternating Image/Text (TradeDesk-style) ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              Audio Advertising
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 max-w-4xl mx-auto"
            >
              Why Audio Advertising?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
            >
              Audio reaches audiences in moments where visual media cannot. Listeners are attentive but away from
              screens. Audio ads benefit from high completion rates — unlike display or video, audio ads are typically
              played in full.
            </motion.p>
          </div>

          {/* Alternating block 1: Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-brand-orange-500/8 rounded-3xl blur-xl" />
                <img
                  src={listenerHeadphones}
                  alt="Person listening to streaming music with headphones"
                  className="relative w-full h-auto rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-navy-800 mb-6">Audio Advantage</h3>
              <ul className="space-y-4">
                {[
                  "Screen-free audience reach",
                  "95%+ completion rates",
                  "Growing listener base globally",
                  "Podcast boom driving inventory",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-4 h-4 text-brand-orange-600" />
                    </div>
                    <span className="text-navy-600 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Alternating block 2: Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-navy-800 mb-6">Programmatic Precision</h3>
              <ul className="space-y-4">
                {[
                  "Automated real-time bidding",
                  "Demographic & behavioral targeting",
                  "Dynamic creative optimization",
                  "Cross-channel integration",
                  "Measurable attribution",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-brand-orange-400" />
                    </div>
                    <span className="text-navy-600 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-brand-orange-500/8 rounded-3xl blur-xl" />
                <img
                  src={podcastStudio}
                  alt="Professional podcast recording studio with microphone and audio waveforms"
                  className="relative w-full h-auto rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FounderQuoteSection
        quote="Some of the most influential advertising moments happen when screens are off. Audio allows brands to speak directly to listeners during high-attention moments, and we've made that scalable and measurable."
        name="Saurabh"
        title="CEO, PublifyX"
        variant="default"
      />

      {/* ═══════════════ FEATURES — Sticky scroll (OTT-style) ═══════════════ */}
      <AudioStickyFeaturesSection />

      {/* ═══════════════ AD FORMATS — Alternating with image ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">
                Ad Formats
              </span>
              <h2 className="mb-8">Audio Ad Formats Supported</h2>
              <div className="space-y-6">
                {adFormats.map((format, i) => (
                  <motion.div
                    key={format.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 items-start group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange-500 transition-colors">
                      <format.icon className="w-5 h-5 text-brand-orange-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-800 text-lg mb-1">{format.title}</h3>
                      <p className="text-navy-400 leading-relaxed">{format.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange-500/8 rounded-3xl blur-xl" />
                <img
                  src={audioDevices}
                  alt="Smart speakers and audio streaming devices for programmatic audio advertising"
                  className="relative w-full h-auto rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ClientTestimonialSection
        quote="Audio campaigns helped us reach audiences during commute hours where display simply couldn't. Completion rates were consistently strong, and companion banners drove additional engagement."
        attribution="Senior Media Planner, Digital-First Agency"
        results={[
          "Targeted by listening behavior and time of day",
          "Increased brand recall in post-campaign surveys",
          "Improved reach during non-screen engagement hours",
        ]}
        variant="split"
      />

      {/* ═══════════════ WHO IT'S FOR — Image + Cards ═══════════════ */}
      <section className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange-500/8 rounded-3xl blur-xl" />
                <img
                  src={listenerActive}
                  alt="Active listener with wireless earbuds during outdoor exercise"
                  className="relative w-full h-auto rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
              >
                Built For You
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                Who Is Audio Advertising For?
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whoItsFor.map((audience, i) => (
                  <motion.div
                    key={audience.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="bg-white rounded-xl border border-navy-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group">
                      <div className="w-11 h-11 rounded-xl bg-brand-orange-50 flex items-center justify-center mb-4 group-hover:bg-brand-orange-100 transition-colors">
                        <audience.icon className="w-5 h-5 text-brand-orange-500" />
                      </div>
                      <h3 className="font-bold text-navy-800 text-base mb-2">{audience.title}</h3>
                      <p className="text-navy-400 text-sm leading-relaxed">{audience.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS — Timeline ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              Get Started
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              How It Works
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-navy-50 rounded-2xl border border-navy-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-full h-44 bg-white flex items-center justify-center p-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-brand-orange-500 tracking-wider">{step.number}</span>
                  <h3 className="font-bold text-navy-800 text-lg mt-2 mb-2">{step.title}</h3>
                  <p className="text-navy-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
              <Link to="/contact" className="flex items-center text-white no-underline group">
                Start Your Audio Campaign{" "}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </EnergyButton>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ RELATED SERVICES ═══════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-extrabold text-brand-orange-700 uppercase tracking-widest mb-4"
            >
              More Solutions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900"
            >
              Explore Related Services
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "OTT Advertising",
                desc: "Reach viewers across premium OTT platforms with programmatic video campaigns.",
                icon: Radio,
                path: "/ott-advertising",
              },
              {
                title: "CTV Advertising",
                desc: "Reach audiences on the big screen with programmatic connected TV campaigns.",
                icon: Globe,
                path: "/ctv-advertising",
              },
              {
                title: "White Label DSP",
                desc: "Launch your own branded demand-side platform with PublifyX's white-label infrastructure.",
                icon: Monitor,
                path: "/white-label-dsp",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="group flex flex-col h-full bg-navy-50 border border-navy-100 rounded-2xl p-8 hover:border-brand-orange-500/30 hover:shadow-lg hover:shadow-brand-orange-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange-500 flex items-center justify-center mb-5 shadow-lg shadow-brand-orange-500/20">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold text-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-navy-600 font-medium leading-relaxed mb-4 flex-1">{service.desc}</p>
                  <span className="inline-flex items-center gap-2 text-brand-orange-500 font-bold text-sm group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ AUDIO STATISTICS — AdTonos-inspired (near bottom) ═══════════════ */}
      <section className="py-20 md:py-28 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-orange-500 rounded-full blur-[200px] opacity-[0.08]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-orange-300 rounded-full blur-[160px] opacity-[0.06]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-400 uppercase tracking-widest mb-3"
            >
              Platform Reach
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="!text-white"
            >
              Audio Advertising by the Numbers
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {audioStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange-500/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-brand-orange-400" />
                </div>
                <AnimatedStatCounter target={stat.value} suffix={stat.suffix} />
                <div className="text-brand-orange-400 font-semibold text-lg mb-1">{stat.label}</div>
                <div className="text-navy-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[200px] opacity-[0.08]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-orange-300 rounded-full blur-[150px] opacity-20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="mb-6 !text-white">Start Your Audio Campaign</h2>
          <p className="text-xl text-white/90 mb-4 leading-relaxed">
            Reach listeners across streaming music, podcasts, and digital radio with precision targeting.
          </p>
          <p className="text-base text-white/70 mb-10 font-semibold">No commitment required · High completion rates</p>
          <EnergyButton className="inline-flex items-center bg-navy-800 hover:bg-navy-900 text-white text-lg px-10 py-4 rounded-xl font-semibold shadow-xl transition-all duration-300 hover:scale-105">
            <Link to="/contact" className="flex items-center text-white no-underline group">
              Book a Call{" "}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </EnergyButton>
        </motion.div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-20 md:py-28 bg-navy-50 faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              FAQ
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Frequently Asked Questions
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white rounded-xl border border-navy-100 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-navy-800 hover:text-brand-orange-500 hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-navy-500 leading-relaxed pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgrammaticAudioAdvertising;
