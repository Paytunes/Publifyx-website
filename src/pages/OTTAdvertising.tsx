import Layout from "@/components/Layout";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useServiceBreadcrumbs } from "@/hooks/useServiceBreadcrumbs";
import ottHeroDashboard from "@/assets/ott/ott-hero-dashboard.webp";
import { motion } from "framer-motion";
import EnergyButton from "@/components/effects/EnergyButton";
import {
  ArrowRight,
  Sparkles,
  Smartphone,
  Tv,
  Target,
  BarChart3,
  RefreshCw,
  Zap,
  Settings,
  PhoneCall,
  Rocket,
  GraduationCap,
  Building2,
  Store,
  Globe,
  Megaphone,
} from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FounderQuoteSection from "@/components/sections/FounderQuoteSection";
import ClientTestimonialSection from "@/components/sections/ClientTestimonialSection";

const features = [
  {
    title: "Multi-Device Reach",
    description: "Deliver video ads across smart TVs, mobile devices, tablets, desktop browsers, and gaming consoles.",
    icon: Smartphone,
  },
  {
    title: "Premium Inventory Access",
    description:
      "Connect to ad-supported streaming platforms, FAST channels, and OTT app inventory through leading SSPs.",
    icon: Globe,
  },
  {
    title: "Advanced Audience Targeting",
    description: "Target viewers by age, gender, income, interests, purchase behavior, content genre, and geography.",
    icon: Target,
  },
  {
    title: "Frequency Management",
    description: "Control how many times a household or individual sees your ad across devices and platforms.",
    icon: RefreshCw,
  },
  {
    title: "Real-Time Optimization",
    description:
      "Monitor campaign performance in real time with impressions, VCR, reach, frequency, and cost efficiency.",
    icon: BarChart3,
  },
  {
    title: "Omnichannel Integration",
    description: "Combine OTT with display, audio, and native advertising within PublifyX for unified media buying.",
    icon: Zap,
  },
];

const adFormats = [
  {
    title: "Pre-Roll Video Ads",
    desc: "Short video ads that play before the viewer's selected content begins. Typically 15 or 30 seconds.",
  },
  {
    title: "Mid-Roll Video Ads",
    desc: "Ads inserted during natural breaks within longer-form content, targeted to specific audiences.",
  },
  { title: "Post-Roll Video Ads", desc: "Video ads that play after the content has concluded." },
  {
    title: "Interactive OTT Ads",
    desc: "Formats allowing viewers to engage with clickable overlays and QR code prompts.",
  },
  {
    title: "Companion Display Banners",
    desc: "Display ads shown alongside the video player, reinforcing the video message with a visual banner.",
  },
];

const steps = [
  {
    number: "01",
    title: "Define Campaign Goals",
    description: "Set your objectives — awareness, reach, conversions, or brand lift.",
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
    title: "Launch Campaigns",
    description: "Go live across OTT inventory via real-time bidding with optimized creatives.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Optimize & Report",
    description: "Monitor performance in real time and optimize for maximum ROI.",
    icon: GraduationCap,
  },
];

const whoItsFor = [
  {
    title: "Brand Advertisers",
    description: "Reach streaming audiences at scale with full-screen, non-skippable video ads across every device.",
    icon: Megaphone,
  },
  {
    title: "Media Agencies",
    description: "Offer OTT as a premium channel within your programmatic stack with white-label reporting.",
    icon: Building2,
  },
  {
    title: "Performance Marketers",
    description: "Drive measurable outcomes with precise targeting and real-time optimization across OTT inventory.",
    icon: Target,
  },
  {
    title: "Local & Regional Businesses",
    description: "Target specific geographic areas with OTT ads — reach cord-cutters in your market affordably.",
    icon: Store,
  },
];

const faqs = [
  {
    question: "What is the difference between OTT and CTV advertising?",
    answer:
      "OTT refers to content delivered over the internet across all devices — TVs, phones, tablets, and computers. CTV refers specifically to ads viewed on a television screen through internet-connected devices. CTV is a subset of OTT.",
  },
  {
    question: "What platforms do OTT ads run on?",
    answer:
      "OTT ads run across ad-supported streaming services, FAST channels, and OTT apps. Specific platforms vary by region and inventory availability through our SSP partners.",
  },
  {
    question: "Can OTT advertising be targeted to specific audiences?",
    answer:
      "Yes. PublifyX supports audience targeting based on demographics, geography, interests, viewing behavior, purchase intent, and household-level data for OTT campaigns.",
  },
  {
    question: "How much does OTT advertising cost?",
    answer:
      "OTT advertising is typically priced on a CPM basis. Costs vary based on targeting specificity, inventory quality, and campaign scale. PublifyX allows flexible budget entry points.",
  },
  {
    question: "Can I measure OTT ad performance?",
    answer:
      "Yes. PublifyX provides real-time reporting on impressions, video completion rates, reach, frequency, and cost metrics. Attribution measurement is also available.",
  },
];

const OTTAdvertising = () => {
  useEffect(() => {
    document.title = "OTT Advertising Platform | Over-the-Top Ads Across Every Screen — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Deliver targeted OTT advertising across streaming platforms on every device. PublifyX's OTT ads platform offers programmatic buying, precise targeting, and real-time analytics.",
      );
    return () => {
      document.title = "PublifyX — Programmatic Advertising Platform";
    };
  }, []);
  const breadcrumbs = useServiceBreadcrumbs("OTT Advertising");

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
                <span className="text-sm font-medium text-white/80">OTT Advertising Platform</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                OTT Advertising — Reach Streaming Audiences
                <span className="block text-brand-orange-400">Across Every Screen</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Over-the-top advertising gives brands the ability to reach audiences wherever they stream — on smart
                TVs, mobile phones, tablets, laptops, and gaming consoles.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                Every device · Every platform · One dashboard
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
                  <Link to="/contact" className="flex items-center text-white no-underline group">
                    Book a Call{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </EnergyButton>
              </div>
              <p className="text-sm text-navy-400">No commitment required · Flexible budget entry points</p>
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
                  src={ottHeroDashboard}
                  alt="OTT streaming platform analytics dashboard with multi-device targeting and audience segmentation"
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

      {/* What Is OTT */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              OTT Advertising
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 max-w-4xl mx-auto"
            >
              What Is OTT Advertising?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
            >
              OTT stands for "over-the-top," referring to content delivered directly over the internet, bypassing
              traditional cable and satellite. OTT advertising reaches viewers across all internet-connected devices
              with the precision of digital and the impact of television.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-navy-50 rounded-2xl border border-navy-100 p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-4">OTT Reaches Every Screen</h3>
              <ul className="space-y-3">
                {["Smart TVs & streaming sticks", "Smartphones & tablets", "Laptops & desktops", "Gaming consoles"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                        <Tv className="w-3.5 h-3.5 text-brand-orange-600" />
                      </div>
                      <span className="text-navy-600 font-medium">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="bg-navy-800 rounded-2xl border border-navy-700 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Why OTT Matters</h3>
              <ul className="space-y-3">
                {[
                  "Household-level targeting precision",
                  "Higher attention than linear TV",
                  "Non-skippable ad formats",
                  "Measurable impressions & attribution",
                  "Growing cord-cutter audiences",
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
        quote="Streaming is not a trend, it's the new default. Our OTT platform ensures brands don't just follow audiences across devices, but reach them with measurable impact."
        name="Saurabh"
        title="CEO, PublifyX"
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
              PublifyX OTT Advertising Capabilities
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
              OTT Ad Formats Supported
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
                className={i === adFormats.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
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
        quote="OTT allowed us to extend our TV strategy across mobile and desktop without losing targeting control. The unified dashboard made cross-screen planning simple."
        attribution="Head of Digital, National Media Agency"
        results={[
          "Cross-device reach expansion by 42%",
          "Controlled frequency across TV + mobile environments",
          "Reduced CPM wastage through audience segmentation",
          "Increased incremental reach beyond linear TV",
        ]}
        variant="split"
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
              Who Is OTT Advertising For?
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
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
              How OTT Advertising Works with PublifyX
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
                Launch Your OTT Campaign{" "}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </EnergyButton>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-navy-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Explore Related Services</h3>
            <div className="flex flex-wrap gap-3">
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
                to="/programmatic-audio-advertising"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                Audio Advertising
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
          <h2 className="mb-6 !text-white">Launch Your OTT Campaign</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">
            Connect with streaming audiences across every device. Talk to our team to plan your first OTT campaign.
          </p>
          <p className="text-base text-navy-400 mb-10 font-semibold">No commitment required · Flexible budgets</p>
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

export default OTTAdvertising;
