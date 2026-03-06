import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useServiceBreadcrumbs } from "@/hooks/useServiceBreadcrumbs";
import { motion } from "framer-motion";
import { Tv } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FounderQuoteSection from "@/components/sections/FounderQuoteSection";
import ClientTestimonialSection from "@/components/sections/ClientTestimonialSection";

// Redesigned Sections
import OTTHero from "@/components/sections/ottAdvertising/OTTHero";
import OTTMeasurementSection from "@/components/sections/ottAdvertising/OTTMeasurementSection";
import OTTResourceSection from "@/components/sections/ottAdvertising/OTTResourceSection";
import OTTStickyFeaturesSection from "@/components/sections/ottAdvertising/OTTStickyFeaturesSection";

import ottMultiscreenImg from "@/assets/ott/ott-multiscreen.webp";
import prerollImg from "@/assets/ott/preroll-ad.webp";
import midrollImg from "@/assets/ott/midroll-ad.webp";
import postrollImg from "@/assets/ott/postroll-ad.webp";
import interactiveImg from "@/assets/ott/interactive-ad.webp";
import companionImg from "@/assets/ott/companion-banner.webp";

const adFormats = [
  {
    title: "Pre-Roll Video Ads",
    desc: "Short video ads that play before the viewer's selected content begins. Typically 15 or 30 seconds in length.",
    image: prerollImg,
  },
  {
    title: "Mid-Roll Video Ads",
    desc: "Ads inserted during natural breaks within longer-form content, similar to traditional commercial breaks but targeted to specific audiences.",
    image: midrollImg,
  },
  {
    title: "Post-Roll Video Ads",
    desc: "Video ads that play after the content has concluded.",
    image: postrollImg,
  },
  {
    title: "Interactive OTT Ads",
    desc: "Formats that allow viewers to engage with the ad using their remote control or touch screen, including clickable overlays and QR code prompts.",
    image: interactiveImg,
  },
  {
    title: "Companion Display Banners",
    desc: "Display ads shown alongside or below the video player on certain OTT platforms, reinforcing the video message with a visual banner.",
    image: companionImg,
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
      "OTT ads run across ad-supported streaming services, FAST (free ad-supported streaming TV) channels, and OTT apps. Specific platforms vary by region and inventory availability through our SSP partners.",
  },
  {
    question: "Can OTT advertising be targeted to specific audiences?",
    answer:
      "Yes. PublifyX supports audience targeting based on demographics, geography, interests, viewing behavior, purchase intent, and household-level data for OTT campaigns.",
  },
  {
    question: "How much does OTT advertising cost?",
    answer:
      "OTT advertising is typically priced on a CPM basis. Costs vary based on targeting specificity, inventory quality, and campaign scale. PublifyX allows flexible budget entry points suitable for businesses of varying sizes.",
  },
  {
    question: "Can I measure OTT ad performance?",
    answer:
      "Yes. PublifyX provides real-time reporting on impressions, video completion rates, reach, frequency, and cost metrics. Attribution measurement for website visits and conversions is also available.",
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

    // FAQ Schema
    const faqSchema = {
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
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-ott-faq-schema", "true");
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.title = "PublifyX — Programmatic Advertising Platform";
      const el = document.querySelector("script[data-ott-faq-schema]");
      if (el) el.remove();
    };
  }, []);
  const breadcrumbs = useServiceBreadcrumbs("OTT Advertising");

  return (
    <Layout transparentHeader>
      {/* ─── 1. HERO ─── */}
      <OTTHero breadcrumbs={breadcrumbs} />

      {/* ─── 2. WHAT IS OTT ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              <p className="text-lg text-navy-400 leading-relaxed mb-4">
                OTT stands for "over-the-top," referring to content delivered directly over the internet, bypassing
                traditional cable, broadcast, and satellite television providers.
              </p>
              <p className="text-lg text-navy-400 leading-relaxed mb-8">
                OTT advertising is the placement of ads within this internet-delivered content.
              </p>
              <p className="text-base text-navy-600 font-semibold mb-4">OTT content is consumed across:</p>
              <ul className="space-y-4 mb-8">
                {["Smart TVs & Streaming devices", "Smartphones & Tablets", "Laptops", "Gaming consoles"].map(
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange-500/10 rounded-3xl blur-2xl" />
                <img
                  src={ottMultiscreenImg}
                  alt="OTT content streaming across smart TVs, smartphones, tablets, laptops, and gaming consoles"
                  className="relative w-full h-auto rounded-2xl shadow-2xl shadow-navy-900/20 border border-navy-100"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="bg-navy-50 rounded-2xl border border-navy-100 p-6 mb-6 max-w-[40rem] mx-auto">
          <p className="text-base text-navy-600 font-semibold mb-2">The distinction is simple:</p>
          <p className="text-navy-500 leading-relaxed mb-1">
            <strong className="text-navy-800">OTT</strong> is the delivery method across all internet-connected devices.
          </p>
          <p className="text-navy-500 leading-relaxed">
            <strong className="text-navy-800">CTV</strong> is specifically OTT viewed on a television screen.
          </p>
        </div>
        <p className="text-lg text-navy-400 leading-relaxed max-w-[40rem] mx-auto text-center text-orange-700">
          When you activate OTT campaigns through PublifyX, you reach audiences across every screen, not just the living
          room.
        </p>
      </section>

      {/* ─── 3. FOUNDER QUOTE ─── */}
      <FounderQuoteSection
        quote="Streaming is not a trend, it's the new default. Our OTT platform ensures brands don't just follow audiences across devices, but reach them with measurable impact."
        name="Saurabh"
        title="CEO, PublifyX"
      />

      {/* ─── 4. WHY OTT ADVERTISING MATTERS ─── */}
      <OTTMeasurementSection />

      {/* ─── 5. PLATFORM CAPABILITIES (Sticky Scroll) ─── */}
      <OTTStickyFeaturesSection />

      {/* ─── 6. AD FORMATS ─── */}
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
              OTT Ad Formats Supported by PublifyX
            </motion.h2>
          </div>
          <div className="space-y-16 max-w-6xl mx-auto">
            {adFormats.map((format, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={format.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-navy-500/10 border border-navy-100">
                      <img
                        src={format.image}
                        alt={`${format.title} - OTT ad format`}
                        className="w-full h-auto"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="w-11 h-11 rounded-xl bg-brand-orange-500 flex items-center justify-center mb-5 shadow-lg shadow-brand-orange-500/20">
                      <span className="text-white font-black text-base">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-extrabold text-navy-800 text-2xl mb-3">{format.title}</h3>
                    <p className="text-navy-400 font-medium leading-relaxed">{format.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 7. TESTIMONIAL ─── */}
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

      {/* ─── 8. RESOURCES ─── */}
      <OTTResourceSection />

      {/* ─── 9. FAQ ─── */}
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
              Frequently Asked Questions About OTT Advertising
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
    </Layout>
  );
};

export default OTTAdvertising;
