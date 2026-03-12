import Layout from "@/components/Layout";
import { useEffect } from "react";
import { removeAllFaqPageSchemas } from "@/utils/faqSchemaUtils";
import { Link } from "react-router-dom";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useServiceBreadcrumbs } from "@/hooks/useServiceBreadcrumbs";
import { motion } from "framer-motion";
import EnergyButton from "@/components/effects/EnergyButton";
import ctvHeroDashboard from "@/assets/ctv/ctv-hero-dashboard.webp";
import stepObjectives from "@/assets/ctv/step-objectives.webp";
import stepTargeting from "@/assets/ctv/step-targeting.webp";
import stepCreatives from "@/assets/ctv/step-creatives.webp";
import stepBudget from "@/assets/ctv/step-budget.webp";
import stepLaunch from "@/assets/ctv/step-launch.webp";
import stepOptimize from "@/assets/ctv/step-optimize.webp";
import deviceSmartTv from "@/assets/ctv/device-smart-tv.png";
import deviceStreaming from "@/assets/ctv/device-streaming.png";
import deviceGaming from "@/assets/ctv/device-gaming.png";
import deviceSettop from "@/assets/ctv/device-settop.png";
import {
  ArrowRight,
  Sparkles,
  Tv,
  Target,
  BarChart3,
  Shield,
  RefreshCw,
  Layers,
  Globe,
  Check,
  Gamepad2,
  Monitor,
  Radio,
  Headphones,
} from "lucide-react";
import RelatedServicesSection from "@/components/sections/RelatedServicesSection";
import MagneticCard from "@/components/effects/MagneticCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FounderQuoteSection from "@/components/sections/FounderQuoteSection";
import ClientTestimonialSection from "@/components/sections/ClientTestimonialSection";

const features = [
  {
    title: "Premium Streaming Inventory Access",
    description:
      "Access ad-supported streaming platforms, FAST channels, OTT apps, and premium CTV inventory via SSP integrations and private marketplace deals.",
    icon: Globe,
  },
  {
    title: "Precision Audience Targeting",
    description:
      "Go beyond basic demographics. Target households based on interests, purchase intent, viewing behavior, income level, and geographic location, down to the zip code level.",
    icon: Target,
  },
  {
    title: "Cross-Device Retargeting",
    description:
      "Identify viewers who saw your CTV ad and retarget them across mobile, desktop, and tablet with display or video follow-up campaigns, creating a true omnichannel experience.",
    icon: RefreshCw,
  },
  {
    title: "Real-Time Campaign Reporting",
    description:
      "Monitor impressions, video completion rates (VCR), reach, frequency, and cost metrics in real time. Our reporting dashboard provides full transparency into where your ads ran and how they performed.",
    icon: BarChart3,
  },
  {
    title: "Brand Safety Controls",
    description:
      "Ensure your ads appear alongside quality content with category-level and app-level exclusions, plus third-party verification integrations.",
    icon: Shield,
  },
  {
    title: "White Label CTV Capabilities",
    description:
      "Agencies using PublifyX's white label DSP can offer CTV advertising as a branded service to their clients, with custom reporting and platform access.",
    icon: Layers,
  },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Define Objectives",
    description: "Define campaign objectives (awareness, reach, performance).",
    image: "step-objectives",
  },
  {
    number: "02",
    title: "Configure Targeting",
    description: "Configure audience targeting.",
    image: "step-targeting",
  },
  {
    number: "03",
    title: "Upload Creatives",
    description: "Upload 15- or 30-second HD video creatives (MP4 or MOV).",
    image: "step-creatives",
  },
  {
    number: "04",
    title: "Set Budget & Schedule",
    description: "Set budget, bid strategy, and schedule.",
    image: "step-budget",
  },
  {
    number: "05",
    title: "Launch Campaign",
    description: "Launch via real-time bidding across connected TV inventory.",
    image: "step-launch",
  },
  {
    number: "06",
    title: "Monitor & Report",
    description:
      "Monitor and optimize in real time.  Post-campaign, access reporting on impressions, VCR, unique household reach, frequency, and cost per completed view.",
    image: "step-optimize",
  },
];

const ctvDevices = [
  { icon: Tv, label: "Smart TVs with built-in internet connectivity", image: deviceSmartTv },
  { icon: Radio, label: "Streaming devices (Roku, Amazon Fire TV, Apple TV)", image: deviceStreaming },
  { icon: Gamepad2, label: "Gaming consoles (PlayStation, Xbox)", image: deviceGaming },
  { icon: Monitor, label: "Internet-enabled set-top boxes", image: deviceSettop },
];

const ctvBrings = [
  "The immersive impact of television",
  "Non-skippable ad placements",
  "Household-level targeting",
  "Real-time optimization",
  "Transparent reporting",
];

const targetingBy = ["Demographics", "Geography", "Interests", "Purchase behavior", "Household characteristics"];

const faqs = [
  {
    question: "What is the difference between CTV and OTT advertising?",
    answer:
      "CTV refers specifically to ads viewed on a television screen through an internet-connected device. OTT is a broader term that covers content and ads delivered via the internet across all devices including smartphones, tablets, laptops, and TVs. CTV is a subset of OTT.",
  },
  {
    question: "What video formats are supported for CTV ads?",
    answer:
      "PublifyX supports 15-second and 30-second video ad formats for CTV campaigns. Creatives should be in MP4 or MOV format, optimized for full-screen, high-definition television viewing.",
  },
  {
    question: "Can I target specific geographic areas with CTV advertising?",
    answer:
      "Yes. PublifyX supports geographic targeting at the country, state, city, DMA (designated market area), and zip code level for CTV campaigns.",
  },
  {
    question: "How is CTV advertising measured?",
    answer:
      "Key CTV metrics include impressions, video completion rate (VCR), unique household reach, frequency, and cost per completed view (CPCV). PublifyX also supports attribution measurement for website visits and conversions driven by CTV exposure.",
  },
  {
    question: "Is CTV advertising only for large brands?",
    answer:
      "No. CTV advertising is accessible to businesses of all sizes. With programmatic buying through PublifyX, you can start with flexible budgets and scale based on performance results.",
  },
];

const ctvSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "CTV Advertising Platform",
    serviceType: "Connected TV Advertising",
    provider: {
      "@type": "Organization",
      name: "PublifyX",
      url: "https://www.publifyx.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    description:
      "Launch data-driven connected TV advertising campaigns with PublifyX. Reach households across premium streaming platforms with programmatic targeting and real-time reporting.",
    url: "https://www.publifyx.com/ctv-advertising",
    category: "Programmatic Advertising",
    offers: {
      "@type": "Offer",
      url: "https://www.publifyx.com/ctv-advertising",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PublifyX CTV Advertising Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    description:
      "A programmatic CTV advertising platform enabling agencies and advertisers to reach connected TV audiences with household-level targeting and real-time reporting.",
    publisher: {
      "@type": "Organization",
      name: "PublifyX",
    },
    featureList: [
      "Premium CTV inventory access",
      "Household-level targeting",
      "Cross-device retargeting",
      "Real-time campaign reporting",
      "Brand safety controls",
      "White label CTV capabilities",
    ],
    offers: {
      "@type": "Offer",
      url: "https://www.publifyx.com/ctv-advertising",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.publifyx.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.publifyx.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "CTV Advertising",
        item: "https://www.publifyx.com/ctv-advertising",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody:
      "CTV campaigns through PublifyX delivered stronger completion rates than any other video channel we've tested. The targeting precision gave us both reach and relevance.",
    author: {
      "@type": "Person",
      name: "Marketing Head, Leading D2C Brand",
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "PublifyX CTV Advertising Platform",
    },
  },
];

const CTVAdvertising = () => {
  useEffect(() => {
    document.title = "CTV Advertising Platform | Programmatic Connected TV Ads — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Launch data-driven CTV campaigns with PublifyX's connected TV advertising platform. Target households across premium streaming inventory with programmatic precision and real-time reporting.",
      );

    removeAllFaqPageSchemas();
    const scripts: HTMLScriptElement[] = ctvSchemas.map((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `ctv-schema-${i}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      document.title = "PublifyX — Programmatic Advertising Platform";
      scripts.forEach((s) => s.remove());
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
                <span className="text-sm font-medium text-white/80">Connected TV Advertising</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1] text-3xl md:text-4xl lg:text-[2.75rem] xl:text-4xl">
                CTV Advertising Platform —
                <span className="block text-brand-orange-400">Reach Audiences on Connected TV</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Television has not disappeared. It has evolved.
              </p>
              <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
                Connected TV advertising allows brands to reach viewers on smart TVs and streaming devices with the
                full-screen impact of traditional TV combined with the targeting precision and measurability of digital.
              </p>
              <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
                PublifyX gives agencies and advertisers a powerful CTV advertising platform to plan, execute, and
                measure campaigns across premium streaming environments, all from a unified dashboard.
              </p>
              <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
                Deliver non-skippable, full-screen video ads to viewers watching content on smart TVs, Roku, Amazon Fire
                TV, Apple TV, gaming consoles, and other connected devices.
              </p>
              <p className="text-base text-navy-300 mb-6 font-semibold">Big screen impact. Digital precision.</p>
              <h3 className="text-lg text-navy-200 mb-6">
                Explore how CTV can fit into your media strategy. Book a demo today.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
                  <Link to="/contact" className="flex items-center text-white no-underline group">
                    Book a Call <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </EnergyButton>
              </div>
              <p className="text-sm text-navy-400">No commitment required · Launch campaigns in minutes</p>
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

      {/* What Is CTV Advertising */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-700 uppercase tracking-widest mb-3"
            >
              What Is CTV
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
              CTV advertising refers to video ads delivered through internet-connected television devices. Unlike
              traditional linear TV, where ads are broadcast to mass audiences during scheduled programming, CTV ads are
              served programmatically to specific households or audience segments based on data-driven targeting.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-navy-800 mb-8 text-center">Connected TV devices include:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ctvDevices.map((device, i) => (
                <motion.div
                  key={device.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card rounded-2xl border border-navy-100 p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-full h-28 flex items-center justify-center mb-4">
                    <img
                      src={device.image}
                      alt={device.label}
                      className="max-h-full max-w-[80%] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold text-navy-800 text-sm leading-snug">{device.label}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-navy-400 leading-relaxed">
              CTV advertising is a subset of OTT (over-the-top) advertising. While OTT refers to content delivered via
              the internet across all devices (smartphones, tablets, laptops, TVs), CTV specifically refers to ads
              viewed on a television screen through an internet connection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Quote */}
      <FounderQuoteSection
        quote="Connected TV is where brand impact meets digital precision. We designed our CTV Advertising capabilities to give advertisers the storytelling power of television with the targeting and accountability modern marketers demand."
        name="Saurabh"
        title="CEO PublifyX"
        variant="cinematic"
      />

      {/* Why CTV Advertising Is Essential */}
      <section className="py-12 md:py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              Why CTV
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 max-w-4xl mx-auto"
            >
              Why CTV Advertising Is Essential for Modern Brands
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
            >
              The shift from cable to streaming is not a trend, it is a structural change in media consumption.
              Cord-cutting households continue to grow year over year, and a significant portion of younger demographics
              have never subscribed to traditional cable.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-navy-100 p-8"
            >
              <h3 className="text-xl font-bold text-navy-800 mb-6">CTV brings together:</h3>
              <ul className="space-y-4">
                {ctvBrings.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand-orange-600" />
                    </div>
                    <span className="text-navy-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-navy-100 p-8"
            >
              <h3 className="text-xl font-bold text-navy-800 mb-6">Additionally, CTV enables targeting by:</h3>
              <ul className="space-y-4">
                {targetingBy.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand-orange-600" />
                    </div>
                    <span className="text-navy-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-navy-400 leading-relaxed mb-4">
              Completion rates on CTV typically exceed mobile and desktop video. Viewers actively choose what they
              watch, resulting in higher attention and brand recall.
            </p>
            <p className="text-lg text-navy-400 leading-relaxed">
              Advertisers can control frequency, optimize in real time, and measure outcomes including website visits,
              app installs, and offline conversions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-12 md:py-16 bg-white">
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
              PublifyX CTV Advertising Platform Features
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

      {/* How CTV Advertising Works */}
      <section className="py-12 md:py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              How It Works
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              How CTV Advertising Works with PublifyX
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {howItWorksSteps.map((step, i) => {
              const images: Record<string, string> = {
                "step-objectives": stepObjectives,
                "step-targeting": stepTargeting,
                "step-creatives": stepCreatives,
                "step-budget": stepBudget,
                "step-launch": stepLaunch,
                "step-optimize": stepOptimize,
              };
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card rounded-2xl border border-navy-100 p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-full h-36 flex items-center justify-center mb-5">
                    <img
                      src={images[step.image]}
                      alt={step.title}
                      className="max-h-full max-w-[80%] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="inline-block text-sm font-bold text-brand-orange-500 mb-2">{step.number}</span>
                  <h3 className="font-bold text-navy-800 text-base mb-2">{step.title}</h3>
                  <p className="text-navy-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
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
          <h3 className="text-2xl md:text-3xl font-bold mb-6 !text-white">
            Ready to activate CTV advertising? Request a campaign walkthrough.
          </h3>
          <p className="text-base text-navy-400 mb-10 font-semibold">
            No commitment required · Launch campaigns in minutes
          </p>
          <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
            <Link to="/contact" className="flex items-center text-white no-underline group">
              Contact Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </EnergyButton>
        </motion.div>
      </section>

      {/* ═══════════════ RELATED SERVICES ═══════════════ */}
      <RelatedServicesSection
        services={[
          {
            title: "OTT Advertising",
            desc: "Reach viewers across premium OTT platforms with programmatic video campaigns.",
            icon: Radio,
            path: "/ott-advertising",
          },
          {
            title: "Programmatic Audio",
            desc: "Engage listeners on music and podcast platforms with targeted audio campaigns.",
            icon: Headphones,
            path: "/programmatic-audio-advertising",
          },
          {
            title: "Programmatic Display",
            desc: "Run programmatic banner, native, and rich media display campaigns at scale.",
            icon: Monitor,
            path: "/programmatic-display-advertising",
          },
        ]}
      />

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-white faq-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Frequently Asked Questions About CTV Advertising
            </motion.h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-navy-50 rounded-xl border border-navy-100 px-6 overflow-hidden hover:border-brand-orange-200 transition-colors duration-300"
                >
                  <AccordionTrigger className="py-5 !text-[16px] text-left font-semibold text-navy-800 hover:no-underline hover:text-brand-orange-500 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-navy-400 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default CTVAdvertising;
