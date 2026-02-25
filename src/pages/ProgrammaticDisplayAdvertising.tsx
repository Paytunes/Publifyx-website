import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Globe, Target, BarChart3, Shield, RefreshCw, Zap, Layers, PhoneCall, Settings, Rocket, GraduationCap, Building2, Store, Megaphone } from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  { title: "Massive Inventory Reach", description: "Access display inventory across hundreds of thousands of websites and mobile apps through leading ad exchanges.", icon: Globe },
  { title: "All Ad Formats", description: "Support for IAB banners, native ads, expandable rich media, and interstitial placements.", icon: Layers },
  { title: "Advanced Targeting", description: "Target by demographics, interests, browsing behavior, contextual keywords, geography, and device type.", icon: Target },
  { title: "RTB Optimization", description: "Algorithms optimize in real time for CPM, CPC, CPA, or ROAS efficiency.", icon: Zap },
  { title: "Retargeting & Prospecting", description: "Re-engage website visitors and use lookalike modeling to find new audiences.", icon: RefreshCw },
  { title: "Viewability & Brand Safety", description: "Viewability verification, fraud detection, and domain-level exclusion controls.", icon: Shield },
  { title: "Transparent Reporting", description: "Real-time dashboards with impressions, clicks, CTR, conversions, and cost efficiency.", icon: BarChart3 },
];

const adFormats = [
  { title: "Standard IAB Banners", desc: "Leaderboard (728×90), medium rectangle (300×250), skyscraper (160×600), and mobile formats." },
  { title: "Native Display Ads", desc: "Ads matching the look and feel of surrounding content for higher engagement." },
  { title: "Rich Media Ads", desc: "Interactive ads with expandable panels, embedded video, carousels, and animation." },
  { title: "Interstitial Ads", desc: "Full-screen ads shown during natural transition points in mobile apps and web." },
];

const steps = [
  { number: "01", title: "Upload Creatives", description: "Upload your banner, native, or rich media ad creatives.", icon: PhoneCall },
  { number: "02", title: "Define Audiences", description: "Set targeting by demographics, behavior, context, and geography.", icon: Settings },
  { number: "03", title: "Launch via RTB", description: "Go live across premium inventory through real-time bidding.", icon: Rocket },
  { number: "04", title: "Optimize Results", description: "Monitor performance and optimize for your campaign goals.", icon: GraduationCap },
];

const whoItsFor = [
  { title: "Performance Marketers", description: "Drive conversions with precise targeting, retargeting, and real-time optimization across billions of impressions.", icon: Target },
  { title: "Brand Advertisers", description: "Build awareness at scale with premium display placements across trusted websites and apps.", icon: Megaphone },
  { title: "Media Agencies", description: "Run display campaigns for clients with white-label reporting and transparent margin control.", icon: Building2 },
  { title: "E-Commerce Brands", description: "Retarget shoppers, drive product page visits, and maximize ROAS with dynamic display campaigns.", icon: Store },
];

const faqs = [
  { question: "What is programmatic display advertising?", answer: "Programmatic display advertising is the automated buying and selling of display ad placements through real-time bidding. Advertisers use a DSP to bid on impressions that match their targeting criteria across websites and apps." },
  { question: "What ad sizes are supported?", answer: "PublifyX supports all IAB standard display sizes including 728×90, 300×250, 160×600, 320×50, 300×600, and more." },
  { question: "How does targeting work for display ads?", answer: "You can target by demographics, interests, browsing behavior, contextual keywords, geographic location, device type, and custom audience segments." },
  { question: "What is the difference between display and native ads?", answer: "Standard display ads are banner-style placements. Native ads match the visual style of surrounding content for a more integrated experience." },
  { question: "Can I retarget users with display ads?", answer: "Yes. PublifyX supports pixel-based retargeting and lookalike audience modeling." },
];

const ProgrammaticDisplayAdvertising = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Programmatic Display Advertising Platform | Display DSP — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Run targeted display advertising campaigns across premium websites and apps with PublifyX's programmatic display DSP.");
    return () => { document.title = "PublifyX — Programmatic Advertising Platform"; };
  }, []);

  const handleGetStarted = () => navigate("/contact");

  return (
    <Layout transparentHeader>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-800">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-brand-orange-500 rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-orange-300 rounded-full blur-[160px] opacity-[0.06]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">Display Advertising Platform</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                Programmatic Display — Banner, Native &
                <span className="block text-brand-orange-400">Rich Media Ads at Scale</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Display advertising is the foundation of programmatic media buying. Reach billions of daily impressions across websites, apps, and digital properties worldwide.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                Banners · Native · Rich Media · One platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <Button onClick={handleGetStarted} className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group">
                  Book a Call <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded-xl font-semibold text-lg backdrop-blur-sm">
                  <Play className="mr-2 w-5 h-5" /> Watch Demo
                </Button>
              </div>
              <p className="text-sm text-navy-400">No commitment required · All IAB formats supported</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "Billions", label: "Daily Impressions" },
                { value: "40+", label: "SSP Integrations" },
                { value: "All IAB", label: "Standard Sizes" },
                { value: "Real-Time", label: "Optimization" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-bold text-brand-orange-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-navy-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Display Advertising</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4 max-w-4xl mx-auto">What Is Programmatic Display Advertising?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed">
              Programmatic display is the automated buying of display ad inventory through real-time bidding auctions. It accounts for the majority of all digital display spending globally, providing advertisers with scale, efficiency, and precise audience targeting.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Platform Features</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Display Advertising Features</motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={i === features.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}>
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Ad Formats</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Display Ad Formats on PublifyX</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {adFormats.map((format, i) => (
              <motion.div key={format.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="bg-navy-50 rounded-2xl border border-navy-100 p-7 h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-bold text-navy-800 text-lg mb-2">{format.title}</h3>
                  <p className="text-navy-400 text-sm leading-relaxed">{format.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Built For You</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Who Is Display Advertising For?</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whoItsFor.map((audience, i) => (
              <motion.div key={audience.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Get Started</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>How It Works</motion.h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {steps.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="relative text-center group">
                {i < steps.length - 1 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-navy-200" />}
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <Button onClick={handleGetStarted} className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-orange-500/25 group">
              Launch Display Campaigns <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-navy-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Explore Related Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/programmatic-video-advertising" className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Video Advertising</Link>
              <Link to="/ott-advertising" className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">OTT Advertising</Link>
              <Link to="/ctv-advertising" className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">CTV Advertising</Link>
              <Link to="/white-label-dsp" className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-800" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-500 rounded-full blur-[250px] opacity-10" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="mb-6 !text-white">Launch Display Campaigns Today</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">Access billions of daily impressions with advanced targeting and real-time optimization.</p>
          <p className="text-base text-navy-400 mb-10 font-semibold">No commitment required · All formats supported</p>
          <Button onClick={handleGetStarted} className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white text-lg px-10 py-6 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-orange-500/25 rounded-xl group">
            Book a Call <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">FAQ</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Frequently Asked Questions</motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border border-navy-100 px-6 overflow-hidden">
                  <AccordionTrigger className="text-left font-semibold text-navy-800 hover:text-brand-orange-500 hover:no-underline py-5">{faq.question}</AccordionTrigger>
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

export default ProgrammaticDisplayAdvertising;
