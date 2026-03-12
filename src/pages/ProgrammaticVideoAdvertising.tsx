import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useServiceBreadcrumbs } from "@/hooks/useServiceBreadcrumbs";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import videoHeroDashboard from "@/assets/video/video-hero-dashboard.webp";
import { motion } from "framer-motion";
import EnergyButton from "@/components/effects/EnergyButton";
import {
  ArrowRight,
  Sparkles,
  Video,
  Monitor,
  Target,
  Eye,
  Zap,
  Layers,
  PhoneCall,
  Settings,
  Rocket,
  GraduationCap,
  Building2,
  Megaphone,
  Tv,
} from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: "In-Stream & Outstream",
    description:
      "Pre-roll, mid-roll, post-roll within video content, or outstream video in editorial environments.",
    icon: Video,
  },
  {
    title: "Premium Inventory",
    description:
      "Access video placements across high-quality publisher sites, mobile apps, and streaming platforms.",
    icon: Monitor,
  },
  {
    title: "VAST & VPAID Compliance",
    description:
      "Full support for industry-standard video ad serving protocols across publishers and devices.",
    icon: Layers,
  },
  {
    title: "Advanced Targeting",
    description:
      "Target by demographics, geography, interests, device type, content context, and behavioral signals.",
    icon: Target,
  },
  {
    title: "Viewability Optimization",
    description:
      "Optimize for viewable impressions and video completion rate to maximize budget efficiency.",
    icon: Eye,
  },
  {
    title: "Cross-Channel Strategy",
    description:
      "Combine web/app video with CTV and OTT within PublifyX for unified video advertising.",
    icon: Zap,
  },
];

const adFormats = [
  {
    title: "Pre-Roll Video Ads",
    desc: "Video ads playing before content — 6s bumper, 15s, and 30s formats.",
  },
  {
    title: "Mid-Roll Video Ads",
    desc: "Ads inserted during natural breaks for higher completion rates.",
  },
  {
    title: "Post-Roll Video Ads",
    desc: "Video ads playing after content conclusion.",
  },
  {
    title: "Outstream Video Ads",
    desc: "Auto-playing video within text-based editorial content.",
  },
  {
    title: "Rewarded Video Ads",
    desc: "In-app video offering incentives for full ad viewing.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Video Creatives",
    description: "Upload your 6s, 15s, or 30s video ads in MP4 or MOV format.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Set Targeting",
    description:
      "Define audiences by demographics, behavior, context, and geography.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Launch Campaigns",
    description:
      "Go live across premium video inventory via real-time bidding.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description:
      "Monitor VCR, viewability, and conversions — optimize in real time.",
    icon: GraduationCap,
  },
];

const whoItsFor = [
  {
    title: "Brand Advertisers",
    description:
      "Build awareness with sight, sound, and motion — video delivers the strongest brand recall of any digital format.",
    icon: Megaphone,
  },
  {
    title: "Media Agencies",
    description:
      "Run video campaigns for clients across web, app, and streaming with white-label reporting and margin control.",
    icon: Building2,
  },
  {
    title: "Performance Marketers",
    description:
      "Drive measurable outcomes with video completion optimization and cross-device attribution.",
    icon: Target,
  },
  {
    title: "Streaming & OTT Brands",
    description:
      "Extend your video strategy from CTV to web and mobile with unified campaign management.",
    icon: Tv,
  },
];

const faqs = [
  {
    question: "What is the difference between in-stream and outstream?",
    answer:
      "In-stream plays within existing video content. Outstream appears within non-video environments like articles, auto-playing as the user scrolls.",
  },
  {
    question: "What video ad lengths does PublifyX support?",
    answer:
      "6-second bumper, 15-second, and 30-second spots. Custom lengths may be available depending on inventory.",
  },
  {
    question: "How is video ad performance measured?",
    answer:
      "Key metrics include impressions, VCR, viewability rate, CTR, and CPCV — all available in real-time reporting.",
  },
  {
    question: "Can I run video ads on mobile apps?",
    answer:
      "Yes. PublifyX provides in-app video inventory including rewarded and interstitial video formats.",
  },
  {
    question: "Does PublifyX support VAST and VPAID?",
    answer:
      "Yes. Full support for both standards ensuring compatibility across all publishers.",
  },
];

const ProgrammaticVideoAdvertising = () => {
  useEffect(() => {
    document.title =
      "Programmatic Video Advertising Platform | Video DSP — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Run high-impact video ad campaigns across websites, apps, and streaming platforms with PublifyX.",
      );
    return () => {
      document.title = "PublifyX — Programmatic Advertising Platform";
    };
  }, []);

  const breadcrumbs = useServiceBreadcrumbs("Programmatic Video Advertising");

  return (
    <Layout transparentHeader>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-800">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-brand-orange-500 rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-orange-300 rounded-full blur-[160px] opacity-[0.06]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <PageBreadcrumb items={breadcrumbs} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">
                  Video Advertising Platform
                </span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                Programmatic Video — High-Impact Ads
                <span className="block text-brand-orange-400">
                  Across Web, App & Streaming
                </span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Video commands attention like no other format. Higher
                engagement, stronger brand recall, and growing consumer
                preference make video essential for every media strategy.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                In-stream · Outstream · Rewarded · One platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
                  <Link
                    to="/contact"
                    className="flex items-center text-white no-underline group"
                  >
                    Book a Call{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </EnergyButton>
              </div>
              <p className="text-sm text-navy-400">
                No commitment required · VAST & VPAID supported
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange-500/10 rounded-3xl blur-2xl" />
                <img
                  src={videoHeroDashboard}
                  alt="Programmatic video advertising dashboard with player interface and engagement analytics"
                  className="relative w-full h-auto rounded-2xl shadow-2xl shadow-black/40 border border-white/10"
                  width={1024}
                  height={1024}
                  fetchPriority="high"
                  decoding="sync"
                />
              </div>
            </div>
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
              Video Advertising
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 max-w-4xl mx-auto"
            >
              Why Invest in Programmatic Video?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
            >
              Video captures attention more effectively than any other digital
              format. The combination of sight, sound, and motion creates
              immersive experiences that drive brand awareness, recall, and
              purchase intent.
            </motion.p>
          </div>
        </div>
      </section>

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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Video Advertising Capabilities
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
                  <h3 className="font-bold text-navy-800 text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Video Ad Formats on PublifyX
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {adFormats.map((format, i) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={
                  i === adFormats.length - 1
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }
              >
                <div className="bg-navy-50 rounded-2xl border border-navy-100 p-7 h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-bold text-navy-800 text-lg mb-2">
                    {format.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed">
                    {format.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who Is Video Advertising For?
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
                  <h3 className="font-bold text-navy-800 text-xl mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-navy-400 leading-relaxed">
                    {audience.description}
                  </p>
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
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
                  <div className="text-xs font-bold text-brand-orange-500 mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-navy-800 text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
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
              <Link
                to="/contact"
                className="flex items-center text-white no-underline group"
              >
                Launch Video Campaigns{" "}
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
            <h3 className="text-lg font-bold text-navy-900 mb-4">
              Explore Related Services
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/ctv-advertising"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                CTV Advertising
              </Link>
              <Link
                to="/ott-advertising"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                OTT Advertising
              </Link>
              <Link
                to="/programmatic-display-advertising"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                Display Advertising
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
          <h2 className="mb-6 !text-white">Launch Your Video Campaign</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">
            Run high-impact video campaigns across premium websites, mobile
            apps, and streaming environments.
          </p>
          <p className="text-base text-navy-400 mb-10 font-semibold">
            No commitment required · All formats supported
          </p>
          <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
            <Link
              to="/contact"
              className="flex items-center text-white no-underline group"
            >
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
                  <AccordionContent className="text-navy-500 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgrammaticVideoAdvertising;
