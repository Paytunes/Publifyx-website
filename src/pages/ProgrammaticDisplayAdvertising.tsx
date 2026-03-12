import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useServiceBreadcrumbs } from "@/hooks/useServiceBreadcrumbs";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { removeAllFaqPageSchemas } from "@/utils/faqSchemaUtils";
import displayHeroDashboard from "@/assets/display/display-hero-dashboard.webp";
import displayAnalytics from "@/assets/display/display-analytics.webp";
import displayDevices from "@/assets/display/display-devices.webp";
import formatStandardBanners from "@/assets/display/format-standard-banners.webp";
import formatNativeAds from "@/assets/display/format-native-ads.webp";
import formatRichMedia from "@/assets/display/format-rich-media.webp";
import formatInterstitial from "@/assets/display/format-interstitial.webp";
import { motion } from "framer-motion";
import EnergyButton from "@/components/effects/EnergyButton";
import { ArrowRight, Sparkles, Image, Layout as LayoutIcon, Film, Maximize2, Layers } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FounderQuoteSection from "@/components/sections/FounderQuoteSection";
import ClientTestimonialSection from "@/components/sections/ClientTestimonialSection";
import DisplayStickyFeaturesSection from "@/components/sections/displayAdvertising/DisplayStickyFeaturesSection";

const adFormats = [
  {
    title: "Standard IAB Banners",
    desc: "All standard banner sizes including leaderboard (728x90), medium rectangle (300x250), skyscraper (160x600), and mobile-optimized formats (320x50, 300x600).",
    icon: Image,
    category: "01",
    image: formatStandardBanners,
  },
  {
    title: "Native Display Ads",
    desc: "Ads that match the look, feel, and function of the surrounding content. Native placements drive higher engagement by integrating naturally into the user experience.",
    icon: LayoutIcon,
    category: "02",
    image: formatNativeAds,
  },
  {
    title: "Rich Media Ads",
    desc: "Interactive display ads with expandable panels, embedded video, carousels, and animation for enhanced user engagement.",
    icon: Film,
    category: "03",
    image: formatRichMedia,
  },
  {
    title: "Interstitial Ads",
    desc: "Full-screen display ads shown during natural transition points within mobile apps and mobile web experiences.",
    icon: Maximize2,
    category: "04",
    image: formatInterstitial,
  },
];

const faqs = [
  {
    question: "What is programmatic display advertising?",
    answer:
      "Programmatic display advertising is the automated buying and selling of display ad placements through real-time bidding. Advertisers use a DSP to bid on impressions that match their targeting criteria across websites and apps.",
  },
  {
    question: "What ad sizes are supported for display campaigns?",
    answer:
      "PublifyX supports all IAB standard display sizes including 728x90, 300x250, 160x600, 320x50, 300x600, and more. Custom sizes may be available depending on inventory sources.",
  },
  {
    question: "How does targeting work for display ads?",
    answer:
      "You can target display audiences by demographics, interests, browsing behavior, contextual keywords, geographic location, device type, and custom audience segments built from first-party data.",
  },
  {
    question: "What is the difference between display and native ads?",
    answer:
      "Standard display ads are clearly distinguishable banner-style placements. Native ads are designed to match the visual style and format of the surrounding content, creating a more integrated and less intrusive user experience.",
  },
  {
    question: "Can I retarget users with display ads?",
    answer:
      "Yes. PublifyX supports pixel-based retargeting to re-engage users who have visited your website, as well as lookalike audience modeling to reach new users with similar profiles.",
  },
];

const displaySchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PublifyX",
    url: "https://www.publifyx.com",
    logo: "https://www.publifyx.com/logo.png",
    founder: { "@type": "Person", name: "Saurabh", jobTitle: "CEO" },
    sameAs: ["https://www.linkedin.com/company/publifyx"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Programmatic Display Advertising Platform",
    serviceType: "Programmatic Display Advertising",
    provider: {
      "@type": "Organization",
      name: "PublifyX",
      url: "https://www.publifyx.com",
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    description:
      "Run targeted display advertising campaigns across premium websites and apps with PublifyX's programmatic display DSP. Banner ads, native ads, and rich media at scale.",
    url: "https://www.publifyx.com/programmatic-display-advertising",
    category: "Programmatic Advertising Platform",
    offers: {
      "@type": "Offer",
      url: "https://www.publifyx.com/programmatic-display-advertising",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PublifyX Programmatic Display Advertising Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    description:
      "A programmatic display advertising platform that automates the buying and delivery of banner ads, native ads, and rich media across premium websites and apps with real-time bidding and precision audience targeting.",
    publisher: { "@type": "Organization", name: "PublifyX" },
    featureList: [
      "Massive inventory reach across websites and apps",
      "Standard and custom ad formats",
      "Advanced audience targeting",
      "Real-time bidding optimization",
      "Retargeting and prospecting",
      "Viewability and brand safety",
      "Transparent reporting",
    ],
    offers: {
      "@type": "Offer",
      url: "https://www.publifyx.com/programmatic-display-advertising",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
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
        name: "Programmatic Display Advertising",
        item: "https://www.publifyx.com/programmatic-display-advertising",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody:
      "Display campaigns through PublifyX gave us the reach we needed while still allowing precise audience targeting. The ability to retarget users across multiple publishers significantly improved campaign efficiency.",
    author: {
      "@type": "Person",
      name: "Performance Marketing Lead, E-Commerce Brand",
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "PublifyX Programmatic Display Advertising Platform",
    },
  },
];

const ProgrammaticDisplayAdvertising = () => {
  useEffect(() => {
    document.title = "Programmatic Display Advertising Platform | Display DSP — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Run targeted display advertising campaigns across premium websites and apps with PublifyX's programmatic display DSP. Banner ads, native ads, and rich media at scale.",
      );

    removeAllFaqPageSchemas();

    const scripts: HTMLScriptElement[] = displaySchemas.map((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `display-schema-${i}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      document.title = "PublifyX — Programmatic Advertising Platform";
      scripts.forEach((s) => s.remove());
    };
  }, []);

  const breadcrumbs = useServiceBreadcrumbs("Programmatic Display Advertising");

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
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">Display Advertising Platform</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1] text-3xl md:text-4xl lg:text-[2.75rem] xl:text-4xl">
                Programmatic Display Advertising — Banner, Native, and Rich Media Ads at Scale
              </h1>
              <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
                Display advertising remains one of the most powerful foundations of programmatic media buying. From
                banner placements on premium news websites to native ads embedded within mobile apps, display campaigns
                allow advertisers to reach audiences at scale while maintaining precise targeting and control.
              </p>
              <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
                PublifyX provides a programmatic display advertising platform that connects advertisers to billions of
                daily impressions across websites, mobile apps, and digital properties worldwide.
              </p>
              <p className="text-base text-navy-300 mb-8 leading-relaxed max-w-xl">
                Run banner ads, native ads, and rich media campaigns with advanced targeting, real-time bidding, and
                transparent reporting, all within the same multi-channel DSP used for video, audio, OTT, and CTV.
              </p>
              <p className="text-sm text-navy-300 mb-6 font-semibold">
                Looking to scale display advertising with programmatic precision? Request a platform walkthrough.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
                  <Link to="/contact" className="flex items-center text-white no-underline group">
                    Book a Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </EnergyButton>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange-500/10 rounded-3xl blur-2xl" />
                <img
                  src={displayHeroDashboard}
                  alt="Programmatic display ads dashboard with banner ad performance analytics and audience targeting controls"
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

      {/* ═══════════════ WHAT IS PROGRAMMATIC DISPLAY ═══════════════ */}
      {/* Pattern 1: Image LEFT, Text RIGHT */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-brand-orange-500/8 rounded-3xl blur-xl" />
                <img
                  src={displayAnalytics}
                  alt="Programmatic display advertising concept showing banner ad formats, RTB auction flow, and publisher network placement"
                  className="relative w-full h-auto rounded-2xl shadow-xl"
                  width={672}
                  height={672}
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
              <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-6">
                What Is Programmatic Display Advertising?
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed text-lg">
                <p>
                  Programmatic display advertising is the automated buying and selling of display ad inventory through
                  real-time bidding technology.
                </p>
                <p>
                  When a user visits a website or opens an app, the available ad space generates a bid request.
                  Demand-side platforms evaluate that opportunity in real time, matching it against advertiser targeting
                  criteria.
                </p>
                <p>
                  If the user fits the targeting profile, the platform places a bid. The highest eligible bid wins the
                  auction, and the ad is delivered instantly.
                </p>
                <p>This entire process happens in milliseconds.</p>
                <p>
                  Display ads include standard banner formats (such as 300x250, 728x90, and 160x600), native ads that
                  blend with the surrounding content, and rich media ads that incorporate interactive elements like
                  expandable panels, video, or animation.
                </p>
                <p>
                  Programmatic display accounts for the majority of all digital display ad spending globally. It
                  provides advertisers with scale, efficiency, and the ability to target specific audiences across
                  millions of websites and apps simultaneously.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY PROGRAMMATIC DISPLAY MATTERS ═══════════════ */}
      {/* Pattern 2: Text LEFT, Image RIGHT */}
      <section className="py-12 md:py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-3">
                Let's Understand why Programmatic Display Advertising Matters:
              </h2>
              <div className="space-y-3 text-navy-600 leading-relaxed text-lg">
                <p>
                  Display advertising offers one of the largest pools of addressable digital inventory available today.
                </p>
                <p>Through programmatic buying, advertisers gain the ability to:</p>
              </div>
              <ul className="space-y-3 mt-4 mb-6">
                {[
                  "Reach audiences across a vast network of publishers and apps",
                  "Target users based on behavior, interests, and demographics",
                  "Optimize campaigns dynamically based on performance data",
                  "Retarget users who have previously interacted with the brand",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                      <Layers className="w-4 h-4 text-brand-orange-600" />
                    </div>
                    <span className="text-navy-600 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-navy-600 leading-relaxed text-lg mb-6">
                Programmatic display combines scale with control, allowing advertisers to continuously refine targeting,
                bidding strategies, and creative performance as campaigns run.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-brand-orange-500/8 rounded-3xl blur-xl" />
                <img
                  src={displayDevices}
                  alt="Display advertising across multiple devices showing banner ad formats on desktop, tablet, and mobile screens"
                  className="relative w-full h-auto rounded-2xl shadow-xl"
                  width={672}
                  height={672}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex gap-6 flex-col items-center mt-6 p-4">
          <p className="text-sm text-navy-400 font-semibold text-center">
            Want to explore how display fits into your full programmatic strategy? Speak with our team.
          </p>
          <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
            <Link to="/contact" className="flex items-center text-white no-underline group">
              Book a Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </EnergyButton>
        </div>
      </section>

      {/* ═══════════════ FOUNDER QUOTE ═══════════════ */}
      <FounderQuoteSection
        quote="Programmatic display is often underestimated because it feels familiar. But when you combine scale with intelligent targeting and real-time optimization, display becomes one of the most powerful performance channels available to advertisers."
        name="Saurabh"
        title="CEO, PublifyX"
        variant="default"
      />

      {/* ═══════════════ FEATURES — Sticky horizontal scroll ═══════════════ */}
      <DisplayStickyFeaturesSection />

      {/* ═══════════════ AD FORMATS GRID ═══════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-extrabold text-brand-orange-700 uppercase tracking-widest mb-4"
            >
              Ad Formats
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900"
            >
              Display Ad Formats Available on PublifyX
            </motion.h2>
          </div>

          {/* Desktop: 2-col grid | Tablet: 2-col compact | Mobile: stacked */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {adFormats.map((format, i) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-navy-50 rounded-2xl border border-navy-100 p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="w-full h-36 flex items-center justify-center mb-5">
                  <img
                    src={format.image}
                    alt={format.title}
                    className="max-h-full max-w-[80%] object-contain rounded-xl"
                    width={320}
                    height={205}
                    loading="lazy"
                  />
                </div>
                <span className="inline-block text-sm font-bold text-brand-orange-500 mb-2">{format.category}</span>
                <h3 className="font-bold text-navy-800 text-base mb-2">{format.title}</h3>
                <p className="text-navy-400 text-sm leading-relaxed">{format.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Ad formats CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mt-12 gap-4"
          >
            <p className="text-sm text-navy-400 font-semibold text-center">
              Interested in running high-impact display campaigns? Request a demo of the PublifyX platform.
            </p>
            <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
              <Link to="/contact" className="flex items-center text-white no-underline group">
                Book a Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </EnergyButton>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CLIENT EXPERIENCE ═══════════════ */}
      <ClientTestimonialSection
        quote="Display campaigns through PublifyX gave us the reach we needed while still allowing precise audience targeting. The ability to retarget users across multiple publishers significantly improved campaign efficiency."
        attribution=""
        results={[
          "Expanded campaign reach across thousands of publisher sites",
          "Increased click-through performance through contextual targeting",
          "Reduced wasted impressions using viewability filters",
          "Improved retargeting conversion rates through audience segmentation",
        ]}
        variant="split"
      />

      {/* ═══════════════ EXPLORE RELATED SERVICES ═══════════════ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
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
                icon: Layers,
                path: "/ott-advertising",
              },
              {
                title: "CTV Advertising",
                desc: "Reach audiences on the big screen with programmatic connected TV campaigns.",
                icon: Sparkles,
                path: "/ctv-advertising",
              },
              {
                title: "White Label DSP",
                desc: "Launch your own branded demand-side platform with PublifyX's white-label infrastructure.",
                icon: ArrowRight,
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

      {/* ═══════════════ FAQ ═══════════════ */}
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
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900"
            >
              Frequently Asked Questions About Programmatic Display Advertising
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white rounded-2xl border border-navy-100 px-8 overflow-hidden hover:border-brand-orange-500/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-extrabold text-navy-800 hover:text-brand-orange-600 hover:no-underline py-6 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-navy-600 font-medium leading-relaxed pb-6 text-base">
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

export default ProgrammaticDisplayAdvertising;
