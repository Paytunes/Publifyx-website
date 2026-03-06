import Layout from "@/components/Layout";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useServiceBreadcrumbs } from "@/hooks/useServiceBreadcrumbs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Target,
  BarChart3,
  RefreshCw,
  Zap,
  PhoneCall,
  Settings,
  Rocket,
  GraduationCap,
  Building2,
  Store,
  Globe,
  Megaphone,
  Tv,
  CheckCircle2,
} from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FounderQuoteSection from "@/components/sections/FounderQuoteSection";
import ClientTestimonialSection from "@/components/sections/ClientTestimonialSection";
import EnergyButton from "@/components/effects/EnergyButton";

// New Redesigned Sections
import OTTHero from "@/components/sections/ottAdvertising/OTTHero";
import OTTDeviceSection from "@/components/sections/ottAdvertising/OTTDeviceSection";
import OTTMeasurementSection from "@/components/sections/ottAdvertising/OTTMeasurementSection";
import OTTMidPageCTA from "@/components/sections/ottAdvertising/OTTMidPageCTA";
import OTTResourceSection from "@/components/sections/ottAdvertising/OTTResourceSection";
import OTTStickyFeaturesSection from "@/components/sections/ottAdvertising/OTTStickyFeaturesSection";

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
      {/* ─── 1. HERO ─── */}
      <OTTHero breadcrumbs={breadcrumbs} />

      {/* ─── 2. TESTIMONIAL (right after hero, like Kochava) ─── */}
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

      {/* ─── 3. WHAT IS OTT — Alternating 2-col layout ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Row 1: Text left, Card right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-4">
                OTT Advertising
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-6 leading-tight">
                What Is OTT Advertising?
              </h2>
              <p className="text-lg text-navy-400 leading-relaxed mb-8">
                OTT stands for "over-the-top," referring to content delivered directly over the internet, bypassing
                traditional cable and satellite. OTT advertising reaches viewers across all internet-connected devices
                with the precision of digital and the impact of television.
              </p>
              <ul className="space-y-4">
                {["Smart TVs & streaming sticks", "Smartphones & tablets", "Laptops & desktops", "Gaming consoles"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                        <Tv className="w-4 h-4 text-brand-orange-600" />
                      </div>
                      <span className="text-navy-700 font-semibold">{item}</span>
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-10">
                <EnergyButton className="inline-flex items-center btn-primary text-base px-8 py-4">
                  <Link to="/contact" className="flex items-center text-white no-underline group">
                    Request Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </EnergyButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-navy-800 rounded-3xl border border-navy-700 p-10">
                <h3 className="text-2xl font-extrabold text-white mb-6">Why OTT Matters</h3>
                <ul className="space-y-4">
                  {[
                    "Household-level targeting precision",
                    "Higher attention than linear TV",
                    "Non-skippable ad formats",
                    "Measurable impressions & attribution",
                    "Growing cord-cutter audiences",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-brand-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange-400" />
                      </div>
                      <span className="text-navy-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Card left, Text right (alternating) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-navy-50 rounded-3xl border border-navy-100 p-10">
                <h3 className="text-2xl font-extrabold text-navy-800 mb-6">OTT Reaches Every Screen</h3>
                <ul className="space-y-4">
                  {[
                    "Measure users across CTV, mobile, and connected devices",
                    "Connect the dots across devices and platforms",
                    "Capture full-funnel engagement from impression to conversion",
                    "Attribute conversions across omnichannel media efforts",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange-600" />
                      </div>
                      <span className="text-navy-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-4">
                For All Advertisers
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-6 leading-tight">
                PublifyX for All OTT Advertisers
              </h2>
              <p className="text-lg text-navy-400 leading-relaxed mb-8">
                Seamlessly launch acquisition or re-engagement campaigns with leading OTT partners. Attribute
                cross-screen conversions and visualize campaign performance alongside all your omnichannel media
                efforts.
              </p>
              <EnergyButton className="inline-flex items-center btn-primary text-base px-8 py-4">
                <Link to="/contact" className="flex items-center text-white no-underline group">
                  Request Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </EnergyButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. FOUNDER QUOTE ─── */}
      <FounderQuoteSection
        quote="Streaming is not a trend, it's the new default. Our OTT platform ensures brands don't just follow audiences across devices, but reach them with measurable impact."
        name="Saurabh"
        title="CEO, PublifyX"
      />

      {/* ─── 5. DEVICE SECTION ─── */}
      <OTTDeviceSection />

      {/* ─── 6. MEASUREMENT & ATTRIBUTION ─── */}
      <OTTMeasurementSection />

      {/* ─── 7. PLATFORM CAPABILITIES (Sticky Scroll) ─── */}
      <OTTStickyFeaturesSection />

      {/* ─── 8. AD FORMATS ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-extrabold text-brand-orange-500 uppercase tracking-widest mb-4"
            >
              Ad Formats
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900"
            >
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
                <div className="bg-navy-50 rounded-2xl border border-navy-100 p-8 h-full hover:shadow-xl hover:shadow-navy-500/5 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-brand-orange-500 flex items-center justify-center mb-5 shadow-lg shadow-brand-orange-500/20">
                    <span className="text-white font-black text-base">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-extrabold text-navy-800 text-xl mb-3">{format.title}</h3>
                  <p className="text-navy-400 font-medium leading-relaxed text-sm">{format.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. WHO IT'S FOR ─── */}
      <section className="py-16 md:py-24 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-orange-500 rounded-full blur-[200px] opacity-[0.08]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-extrabold text-brand-orange-400 uppercase tracking-widest mb-4"
            >
              Who It's For
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl mx-auto"
            >
              Built for Every Type of Advertiser
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whoItsFor.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-orange-500/20 flex items-center justify-center mb-5 group-hover:bg-brand-orange-500 transition-colors">
                  <item.icon className="w-7 h-7 text-brand-orange-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-extrabold text-white text-xl mb-2">{item.title}</h3>
                <p className="text-navy-300 leading-relaxed font-medium text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. HOW IT WORKS ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-extrabold text-brand-orange-500 uppercase tracking-widest mb-4"
            >
              Workflow
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900"
            >
              How OTT Advertising Works
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
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
                  <div className="hidden md:block absolute top-12 left-[100%] w-[100%] h-[2px] bg-navy-100 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-24 h-24 rounded-3xl bg-navy-800 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-orange-500 transition-all duration-300 shadow-xl shadow-navy-900/20">
                    <step.icon className="w-10 h-10 text-brand-orange-400 group-hover:text-white" />
                  </div>
                  <div className="text-sm font-black text-brand-orange-500 mb-2 tracking-widest">{step.number}</div>
                  <h3 className="font-extrabold text-navy-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-navy-400 font-medium text-sm leading-relaxed">{step.description}</p>
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
            <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-brand-orange-500/30">
              <Link to="/contact" className="flex items-center text-white no-underline group">
                Launch Your First Campaign{" "}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </EnergyButton>
          </motion.div>
        </div>
      </section>

      {/* ─── 11. MID-PAGE CTA ─── */}
      <OTTMidPageCTA />

      {/* ─── 12. RESOURCES ─── */}
      <OTTResourceSection />

      {/* ─── 13. FAQ ─── */}
      <section className="py-16 md:py-24 bg-navy-50 faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-extrabold text-brand-orange-500 uppercase tracking-widest mb-4"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900"
            >
              Common Questions
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
                  <AccordionContent className="text-navy-400 font-medium leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ─── 14. FINAL CTA ─── */}
      <section className="py-16 md:py-24 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange-500 rounded-full blur-[250px] opacity-[0.08]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="mb-6 !text-white text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
            Ready to Reach Cord-Cutters Everywhere?
          </h2>
          <p className="text-lg md:text-xl text-navy-200 mb-10 font-medium max-w-2xl mx-auto">
            Join hundreds of brands using PublifyX to dominate the streaming landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-5 rounded-2xl">
              <Link to="/contact" className="flex items-center text-white no-underline group">
                Request a Demo
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </EnergyButton>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/20 text-lg px-10 py-5 rounded-2xl font-bold backdrop-blur-sm transition-all"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default OTTAdvertising;
