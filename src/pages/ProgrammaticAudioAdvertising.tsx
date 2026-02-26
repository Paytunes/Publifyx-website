import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useServiceBreadcrumbs } from "@/hooks/useServiceBreadcrumbs";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import audioHeroDashboard from "@/assets/audio/audio-hero-dashboard.webp";
import { motion } from "framer-motion";
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
  RefreshCw,
  Globe,
  PhoneCall,
  Settings,
  Rocket,
  GraduationCap,
  Building2,
  Store,
  Megaphone,
  Music,
} from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FounderQuoteSection from "@/components/sections/FounderQuoteSection";
import ClientTestimonialSection from "@/components/sections/ClientTestimonialSection";

const features = [
  {
    title: "Cross-Platform Audio",
    description: "Access inventory across streaming music, podcast networks, digital radio, and smart speakers.",
    icon: Globe,
  },
  {
    title: "Precision Targeting",
    description: "Target by demographics, geography, interests, listening behavior, content genre, and time of day.",
    icon: Target,
  },
  {
    title: "Dynamic Creative",
    description:
      "Serve different audio creatives to different segments based on targeting criteria for personalized messaging.",
    icon: Mic,
  },
  {
    title: "Companion Banners",
    description: "Pair audio ads with visual companion banners in the listener's app for reinforced messaging.",
    icon: Radio,
  },
  {
    title: "Real-Time Reporting",
    description: "Track impressions, completion rate, reach, frequency, and cost per completed listen.",
    icon: BarChart3,
  },
  {
    title: "Unified Platform",
    description: "Manage audio alongside display, video, CTV, and OTT — no separate tools or logins required.",
    icon: Zap,
  },
];

const adFormats = [
  {
    title: "In-Stream Audio Ads",
    desc: "15 or 30-second spots before, during, or between songs, podcasts, or radio content.",
  },
  {
    title: "Podcast Dynamic Insertion",
    desc: "Targeted audio ads dynamically inserted into podcast episodes at listen time.",
  },
  {
    title: "Companion Display Banners",
    desc: "Visual banners appearing in the streaming app while the audio ad plays.",
  },
  {
    title: "Sequential Audio Messaging",
    desc: "A series of audio ads delivered to the same listener over time for narrative storytelling.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Audio Creatives",
    description: "Upload your 15s or 30s audio ad creatives with optional companion banners.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Set Targeting",
    description: "Define audiences by demographics, listening behavior, genre, and geography.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Launch Campaigns",
    description: "Go live across audio inventory via programmatic buying.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Optimize & Report",
    description: "Monitor completion rates, reach, and frequency — optimize in real time.",
    icon: GraduationCap,
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
      "Programmatic audio uses automated, real-time bidding to buy and deliver audio ads across streaming music, podcasts, and digital radio.",
  },
  {
    question: "What platforms do audio ads run on?",
    answer: "Streaming music services, podcast networks, digital radio platforms, and smart speaker environments.",
  },
  {
    question: "How long are audio ads?",
    answer: "Standard lengths are 15 and 30 seconds. Some platforms support 6-second or 60-second formats.",
  },
  {
    question: "Can I target specific audiences?",
    answer:
      "Yes. Targeting by demographics, geography, interests, listening behavior, content genre, device type, and time of day.",
  },
  {
    question: "How is performance measured?",
    answer:
      "Key metrics: impressions, audio completion rate, unique listener reach, frequency, and cost per completed listen.",
  },
];

const ProgrammaticAudioAdvertising = () => {
  useEffect(() => {
    document.title = "Programmatic Audio Advertising Platform | Audio DSP — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Run targeted audio ads on streaming music, podcasts, and digital radio with PublifyX's programmatic audio platform.",
      );
    return () => {
      document.title = "PublifyX — Programmatic Advertising Platform";
    };
  }, []);

  const breadcrumbs = useServiceBreadcrumbs("Programmatic Audio Advertising");

  return (
    <Layout transparentHeader>
      {/* Hero */}
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
                Programmatic Audio — Reach Listeners
                <span className="block text-brand-orange-400">Where Screens Cannot</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Audio reaches audiences during screen-free moments — commuting, exercising, cooking, and working. The
                fastest-growing channel in programmatic.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                Streaming · Podcasts · Digital Radio · One platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
                  <Link to="/contact" className="flex items-center text-white no-underline group">
                    Book a Call{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </EnergyButton>
              </div>
              <p className="text-sm text-navy-400">No commitment required · High completion rates</p>
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

      {/* Explainer */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-navy-50 rounded-2xl border border-navy-100 p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-4">Audio Advantage</h3>
              <ul className="space-y-3">
                {[
                  "Screen-free audience reach",
                  "95%+ completion rates",
                  "Growing listener base globally",
                  "Podcast boom driving inventory",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-3.5 h-3.5 text-brand-orange-600" />
                    </div>
                    <span className="text-navy-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-800 rounded-2xl border border-navy-700 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Programmatic Precision</h3>
              <ul className="space-y-3">
                {[
                  "Automated real-time bidding",
                  "Demographic & behavioral targeting",
                  "Dynamic creative optimization",
                  "Cross-channel integration",
                  "Measurable attribution",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="text-navy-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <FounderQuoteSection
        quote="Some of the most influential advertising moments happen when screens are off. Audio allows brands to speak directly to listeners during high-attention moments, and we've made that scalable and measurable."
        name="Saurabh"
        title="CEO, PublifyX"
        variant="waveform"
      />

      {/* Features */}
      <section className="py-12 md:py-16 bg-navy-50">
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
              Audio Platform Features
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <MagneticCard className="group bg-white rounded-2xl border border-navy-100 p-7 hover:shadow-lg transition-all duration-300 h-full">
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

      {/* Ad Formats */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              Ad Formats
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Audio Ad Formats Supported
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {adFormats.map((format, i) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="bg-navy-50 rounded-2xl border border-navy-100 p-7 h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-bold text-navy-800 text-lg mb-2">{format.title}</h3>
                  <p className="text-navy-400 text-sm leading-relaxed">{format.desc}</p>
                </div>
              </motion.div>
            ))}
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
        variant="wide"
      />

      {/* Who It's For */}
      <section className="py-12 md:py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              Built For You
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Who Is Audio Advertising For?
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whoItsFor.map((audience, i) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <MagneticCard className="bg-white rounded-2xl border border-navy-100 p-8 hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange-50 flex items-center justify-center mb-5 group-hover:bg-brand-orange-100 transition-colors">
                    <audience.icon className="w-6 h-6 text-brand-orange-500" />
                  </div>
                  <h3 className="font-bold text-navy-800 text-xl mb-2">{audience.title}</h3>
                  <p className="text-navy-400 leading-relaxed">{audience.description}</p>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
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
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative text-center group"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-navy-200" />
                )}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-navy-800 flex items-center justify-center mx-auto mb-5 group-hover:bg-navy-700 transition-colors">
                    <step.icon className="w-8 h-8 text-brand-orange-400" />
                  </div>
                  <div className="text-xs font-bold text-brand-orange-500 mb-2">{step.number}</div>
                  <h3 className="font-bold text-navy-800 text-base mb-2">{step.title}</h3>
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

      {/* Related */}
      <section className="py-12 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-navy-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Explore Related Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/ott-advertising"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                OTT Advertising
              </Link>
              <Link
                to="/ctv-advertising"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                CTV Advertising
              </Link>
              <Link
                to="/programmatic-video-advertising"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                Video Advertising
              </Link>
              <Link
                to="/white-label-dsp"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                White Label DSP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-800" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-500 rounded-full blur-[250px] opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="mb-6 !text-white">Start Your Audio Campaign</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">
            Reach listeners across streaming music, podcasts, and digital radio with precision targeting.
          </p>
          <p className="text-base text-navy-400 mb-10 font-semibold">No commitment required · High completion rates</p>
          <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
            <Link to="/contact" className="flex items-center text-white no-underline group">
              Book a Call{" "}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </EnergyButton>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-navy-50 faq-section">
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
