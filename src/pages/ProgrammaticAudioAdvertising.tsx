import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useServiceBreadcrumbs } from "@/hooks/useServiceBreadcrumbs";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { removeAllFaqPageSchemas } from "@/utils/faqSchemaUtils";
import audioHeroDashboard from "@/assets/audio/audio-hero-dashboard.webp";
import usaMapSilhouette from "@/assets/audio/usa-map-silhouette.png";
import listenerHeadphones from "@/assets/audio/listener-headphones.webp";
import programmaticAudioConcept from "@/assets/audio/programmatic-audio-concept.webp";
import podcastStudio from "@/assets/audio/podcast-studio.webp";
import audioDevices from "@/assets/audio/audio-devices.webp";
import { motion, useInView } from "framer-motion";
import EnergyButton from "@/components/effects/EnergyButton";
import { ArrowRight, Sparkles, Headphones, Radio, Mic, Globe, Monitor, Music } from "lucide-react";
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

const faqs = [
  {
    question: "What is programmatic audio advertising?",
    answer:
      "Programmatic audio advertising uses automated, real-time bidding technology to buy and deliver audio ads across streaming music platforms, podcasts, and digital radio. It eliminates manual buying and enables precise audience targeting.",
  },
  {
    question: "What platforms do programmatic audio ads run on?",
    answer:
      "Programmatic audio ads run across streaming music services, podcast networks, digital radio platforms, and smart speaker environments. Specific platform availability depends on SSP integrations and regional inventory.",
  },
  {
    question: "How long are audio ads?",
    answer:
      "Standard programmatic audio ad lengths are 15 seconds and 30 seconds. Some platforms also support 6-second or 60-second formats depending on inventory availability.",
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
  { value: 93, suffix: "%", description: "of U.S. adults aged 18+ tune in to radio every week" },
  {
    value: 84,
    suffix: "%",
    description: "of Americans aged 12+ are familiar with podcasts (approx. 241 million people)",
  },
  { value: 73, suffix: "%", description: "of Americans aged 12+ listened to online audio in the past month" },
  { value: 47, suffix: "%", description: "of Americans aged 12+ listened to a podcast during the last month" },
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
              <h1 className="mb-6 !text-white leading-[1.1] text-3xl md:text-4xl lg:text-[2.75rem] xl:text-4xl">
                Programmatic Audio Advertising — Reach Listeners Across Streaming, Podcasts, and Digital Radio
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Not every powerful advertising moment happens on a screen.
              </p>
              <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
                Audio reaches audiences while they commute, exercise, cook, or work, moments when visual ads cannot
                compete.
              </p>
              <p className="text-base text-navy-300 mb-10 leading-relaxed max-w-xl">
                PublifyX provides a programmatic audio advertising platform that automates the buying and delivery of
                audio ads across streaming music, podcasts, digital radio, and smart speaker environments. Target
                listeners with precision and measure performance in real time, all within the same platform you use for
                display, video, and CTV.
              </p>
              <p className="text-sm text-navy-300 mb-6 font-semibold">
                Want to reach audiences during screen-free moments? Talk to our audio specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
                  <Link to="/contact" className="flex items-center text-white no-underline group">
                    Book a Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

      {/* ═══════════════ WHAT IS PROGRAMMATIC AUDIO ═══════════════ */}
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
                  src={programmaticAudioConcept}
                  alt="Programmatic audio advertising concept showing smartphone with audio waveforms, headphones, microphone, and targeting signals"
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
              <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-6">
                What Is Programmatic Audio Advertising?
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed text-lg">
                <p>
                  Programmatic audio advertising is the automated buying and selling of audio ad inventory using
                  real-time bidding technology.
                </p>
                <p>
                  When a listener streams music, a podcast, or digital radio content, an audio ad slot becomes
                  available. A bid request is sent to demand-side platforms, where advertisers compete in a real-time
                  auction based on targeting criteria. The winning ad is served seamlessly within the listener's stream.
                </p>
                <p>
                  This process happens in milliseconds and eliminates the need for manual negotiations with individual
                  publishers or radio stations. Advertisers gain access to vast audio inventory across multiple
                  platforms and can manage targeting, budgets, pacing, and frequency from a single interface.
                </p>
                <p>
                  Programmatic audio ads are typically 15 or 30 seconds in length and are often accompanied by a
                  companion display banner shown in the app or player while the audio ad plays.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY AUDIO DESERVES A PLACE ═══════════════ */}
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
                Why Audio Advertising Deserves a Place in Your Media Mix
              </h2>
              <div className="space-y-3 text-navy-600 leading-relaxed text-lg">
                <p>Audio captures attention during moments when visual ads are ineffective.</p>
                <p>Listeners are often fully engaged, wearing headphones, focused, and immersed in content.</p>
                <p>
                  Unlike display ads that can be scrolled past, audio ads are typically played in full. Completion rates
                  are consistently high.
                </p>
                <p>Digital audio consumption continues to expand, driven by:</p>
              </div>
              <ul className="space-y-3 mt-4 mb-6">
                {[
                  "Streaming music platforms",
                  "Podcast growth",
                  "Smart speaker adoption",
                  "Increased mobile usage",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-4 h-4 text-brand-orange-600" />
                    </div>
                    <span className="text-navy-600 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-navy-600 leading-relaxed text-lg mb-6">
                For advertisers, this means scalable, addressable reach with precision targeting.
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
                  src={podcastStudio}
                  alt="Professional podcast recording studio with microphone for programmatic audio advertising"
                  className="relative w-full h-auto rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex gap-6 flex-col items-center mt-6 p-4">
          <p className="text-sm text-navy-400 font-semibold text-center">
            Considering audio for your next campaign? Let's map the right targeting strategy.
          </p>
          <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
            <Link to="/contact" className="flex items-center text-white no-underline group">
              Book a Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </EnergyButton>
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">
                Ad Formats
              </span>
              <h2 className="mb-8">Audio Ad Formats Supported by PublifyX</h2>
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
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Frequently Asked Questions About Programmatic Audio Advertising
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

      {/* ═══════════════ AUDIO STATISTICS — US Map visual ═══════════════ */}
      <section className="py-12 md:py-16 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />

        {/* USA Map — absolute background visual */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src={usaMapSilhouette}
            alt=""
            aria-hidden="true"
            className="w-[90%] max-w-4xl h-auto opacity-20 md:opacity-25 lg:opacity-30 object-contain"
            loading="lazy"
          />
        </div>

        {/* Foreground content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h3 className="text-white font-bold text-xl md:text-2xl lg:text-3xl text-center mb-12 md:mb-16">
            United States of America
          </h3>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto">
            {audioStats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center px-4 py-6"
              >
                <AnimatedStatCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-white/70 text-sm md:text-base leading-relaxed mt-3 max-w-[240px] mx-auto">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/80 text-sm mt-12 md:mt-16 text-center"
          >
            Source: Statista, Edison Research 2024
          </motion.p>
        </div>
      </section>
    </Layout>
  );
};

export default ProgrammaticAudioAdvertising;
