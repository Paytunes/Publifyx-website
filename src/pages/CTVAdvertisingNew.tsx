import Layout from "@/components/Layout";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useServiceBreadcrumbs } from "@/hooks/useServiceBreadcrumbs";
import { motion } from "framer-motion";
import EnergyButton from "@/components/effects/EnergyButton";
import ctvHeroDashboard from "@/assets/ctv/ctv-hero-dashboard.webp";
import {
  ArrowRight,
  Sparkles,
  Tv,
  Target,
  BarChart3,
  Shield,
  RefreshCw,
  Zap,
  PhoneCall,
  Settings,
  Rocket,
  GraduationCap,
  Building2,
  Store,
  Megaphone,
} from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FounderQuoteSection from "@/components/sections/FounderQuoteSection";
import ClientTestimonialSection from "@/components/sections/ClientTestimonialSection";

const features = [
  {
    title: "Premium Streaming Inventory",
    description:
      "Access ad-supported streaming platforms, FAST channels, and premium CTV inventory via SSP integrations.",
    icon: Tv,
  },
  {
    title: "Precision Targeting",
    description:
      "Target households by interests, purchase intent, viewing behavior, income, and geography down to zip code.",
    icon: Target,
  },
  {
    title: "Cross-Device Retargeting",
    description: "Retarget CTV viewers across mobile, desktop, and tablet with display or video follow-up campaigns.",
    icon: RefreshCw,
  },
  {
    title: "Real-Time Reporting",
    description: "Monitor impressions, VCR, reach, frequency, and cost metrics with full transparency.",
    icon: BarChart3,
  },
  {
    title: "Brand Safety Controls",
    description: "Category-level and app-level exclusions plus third-party verification integrations.",
    icon: Shield,
  },
  {
    title: "White Label CTV",
    description: "Agencies can offer CTV advertising as a branded service with custom reporting.",
    icon: Zap,
  },
];

const steps = [
  {
    number: "01",
    title: "Define Objectives",
    description: "Set campaign goals — awareness, reach, performance, or brand lift.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Configure Targeting",
    description: "Select audiences by demographics, geography, interests, and viewing behavior.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Upload & Launch",
    description: "Upload 15s or 30s HD video creatives and launch via real-time bidding.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Monitor & Optimize",
    description: "Track VCR, reach, frequency, and cost — optimize in real time.",
    icon: GraduationCap,
  },
];

const whoItsFor = [
  {
    title: "Brand Advertisers",
    description:
      "Deliver full-screen, non-skippable video ads on the biggest screen in the household with TV-level impact.",
    icon: Megaphone,
  },
  {
    title: "Media Agencies",
    description: "Offer CTV as a premium channel within your programmatic stack with white-label branding.",
    icon: Building2,
  },
  {
    title: "Performance Marketers",
    description: "Combine CTV reach with cross-device retargeting for measurable, full-funnel outcomes.",
    icon: Target,
  },
  {
    title: "Regional Businesses",
    description: "Target specific geographic areas with CTV ads — reach cord-cutters in your market at scale.",
    icon: Store,
  },
];

const faqs = [
  {
    question: "What is the difference between CTV and OTT advertising?",
    answer:
      "CTV refers specifically to ads on TV screens via internet-connected devices. OTT covers all internet-delivered content across all devices. CTV is a subset of OTT.",
  },
  {
    question: "What video formats are supported?",
    answer: "15-second and 30-second video ads in MP4 or MOV format, optimized for full-screen HD television viewing.",
  },
  {
    question: "Can I target specific geographic areas?",
    answer: "Yes. Geographic targeting at country, state, city, DMA, and zip code level.",
  },
  {
    question: "How is CTV advertising measured?",
    answer:
      "Impressions, VCR, unique household reach, frequency, CPCV, plus attribution for website visits and conversions.",
  },
  {
    question: "Is CTV only for large brands?",
    answer:
      "No. CTV is accessible to all business sizes with flexible budgets through programmatic buying on PublifyX.",
  },
];

const CTVAdvertising = () => {
  useEffect(() => {
    document.title = "CTV Advertising Platform | Programmatic Connected TV Ads — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Launch data-driven CTV campaigns with PublifyX's connected TV advertising platform. Target households across premium streaming inventory.",
      );
    return () => {
      document.title = "PublifyX — Programmatic Advertising Platform";
    };
  }, []);

  const breadcrumbs = useServiceBreadcrumbs("CTV Advertising");

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
                <span className="text-sm font-medium text-white/80">CTV Advertising Platform</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                CTV Advertising — Reach Audiences on
                <span className="block text-brand-orange-400">Connected TV</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Television has evolved. Connected TV advertising delivers full-screen, non-skippable video ads with the
                targeting precision of digital to viewers on smart TVs and streaming devices.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                Big screen impact · Digital precision · One platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
                  <Link to="/contact" className="flex items-center text-white no-underline group">
                    Book a Demo{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </EnergyButton>
              </div>
              <p className="text-sm text-navy-400">No commitment required · Flexible budgets</p>
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
                  src={ctvHeroDashboard}
                  alt="Connected TV advertising dashboard with audience targeting and campaign performance analytics"
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

      {/* What Is CTV */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              CTV Advertising
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 max-w-4xl mx-auto"
            >
              What Is CTV Advertising?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
            >
              CTV advertising refers to video ads delivered through internet-connected television devices — smart TVs,
              Roku, Amazon Fire TV, Apple TV, and gaming consoles. Unlike linear TV, CTV ads are served programmatically
              to specific households based on data-driven targeting.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-navy-50 rounded-2xl border border-navy-100 p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-4">CTV Devices</h3>
              <ul className="space-y-3">
                {[
                  "Smart TVs with built-in internet",
                  "Roku, Fire TV, Apple TV",
                  "PlayStation, Xbox consoles",
                  "Internet-enabled set-top boxes",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                      <Tv className="w-3.5 h-3.5 text-brand-orange-600" />
                    </div>
                    <span className="text-navy-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-800 rounded-2xl border border-navy-700 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Why CTV Wins</h3>
              <ul className="space-y-3">
                {[
                  "Immersive full-screen impact",
                  "Non-skippable ad placements",
                  "Household-level targeting",
                  "Real-time optimization",
                  "Transparent reporting",
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
        quote="Connected TV is where brand impact meets digital precision. We designed our CTV Advertising capabilities to give advertisers the storytelling power of television with the targeting and accountability modern marketers demand."
        name="Saurabh"
        title="CEO, PublifyX"
        variant="cinematic"
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
              CTV Advertising Platform Features
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

      {/* Who It's For */}
      <section className="py-12 md:py-16 bg-white">
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
              Who Is CTV Advertising For?
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
                <MagneticCard className="bg-navy-50 rounded-2xl border border-navy-100 p-8 hover:shadow-lg transition-all duration-300 group h-full">
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
      <section className="py-12 md:py-16 bg-navy-50">
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
              How CTV Advertising Works
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
                Activate CTV Advertising{" "}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </EnergyButton>
          </motion.div>
        </div>
      </section>

      <ClientTestimonialSection
        quote="CTV campaigns through PublifyX delivered stronger completion rates than any other video channel we've tested. The targeting precision gave us both reach and relevance."
        attribution="Marketing Head, Leading D2C Brand"
        results={[
          "Household-level targeting across key metros",
          "Cross-device retargeting increased post-view conversions",
          "Transparent reporting improved campaign optimization speed",
        ]}
        variant="split"
      />

      {/* Related */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50 rounded-2xl border border-navy-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Explore Related Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/ott-advertising"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                OTT Advertising
              </Link>
              <Link
                to="/programmatic-video-advertising"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                Video Advertising
              </Link>
              <Link
                to="/ctv-advertising-india"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                CTV in India
              </Link>
              <Link
                to="/white-label-dsp"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
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
          <h2 className="mb-6 !text-white">Activate CTV Advertising</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">
            Deliver non-skippable, full-screen video ads to viewers on smart TVs, Roku, Fire TV, Apple TV, and more.
          </p>
          <p className="text-base text-navy-400 mb-10 font-semibold">No commitment required · Flexible budgets</p>
          <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
            <Link to="/contact" className="flex items-center text-white no-underline group">
              Book a Demo{" "}
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

export default CTVAdvertising;
