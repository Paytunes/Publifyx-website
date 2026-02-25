import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Target, MapPin, Brain, Monitor, Clock, Database, Upload, Users, Layers, Zap, BarChart3, Shield, Palette, Settings, Building2, Star, Globe } from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const targetingFeatures = [
  { title: "Demographic Targeting", description: "Age, gender, household income, education, and parental status.", icon: Users },
  { title: "Geographic Targeting", description: "Country, state, city, DMA, zip code, and radius targeting.", icon: MapPin },
  { title: "Behavioral Targeting", description: "Purchase intent, browsing behavior, and interest-based audience segments.", icon: Brain },
  { title: "Contextual Targeting", description: "Keyword and category-based targeting to align ads with relevant content.", icon: Layers },
  { title: "Device Targeting", description: "Desktop, mobile, tablet, CTV, and specific operating systems.", icon: Monitor },
  { title: "Time & Day Targeting", description: "Schedule campaigns for specific hours and days of the week.", icon: Clock },
  { title: "First-Party Data", description: "Upload and activate your own audience data for precision targeting.", icon: Upload },
  { title: "Third-Party Segments", description: "Access audience data from leading data providers.", icon: Database },
];

const platformFeatures = [
  { title: "Multi-Channel Campaigns", description: "Run display, video, audio, CTV, and OTT from one unified dashboard. No switching between tools.", icon: Layers },
  { title: "Real-Time Bidding Engine", description: "Processes millions of bid requests per second, optimizing for CPM, CPC, CPA, and ROAS targets.", icon: Zap },
  { title: "Reporting & Analytics", description: "Real-time dashboards with granular metrics across all channels, exportable in customizable formats.", icon: BarChart3 },
  { title: "Brand Safety", description: "Domain-level exclusions, pre-bid fraud filtering, viewability verification, and third-party integrations.", icon: Shield },
  { title: "White Label Customization", description: "Custom domain, logo, color palette. Client-facing dashboards reflect your identity exclusively.", icon: Palette },
  { title: "Flexible Client Access", description: "Self-serve advertiser access, view-only dashboards, or managed service — configurable per client.", icon: Settings },
];

const whoItsFor = [
  { title: "Media Agencies", description: "Full multi-channel buying with white-label branding, margin control, and client-facing dashboards.", icon: Building2 },
  { title: "Ad Networks", description: "Offer self-serve programmatic capabilities to your advertiser base with custom access tiers.", icon: Globe },
  { title: "Startups", description: "Enterprise-grade technology without the build cost. Launch your own DSP in days.", icon: Star },
  { title: "Performance Marketers", description: "Advanced targeting, real-time optimization, and transparent reporting for data-driven campaigns.", icon: Target },
];

const faqs = [
  { question: "What channels does PublifyX support?", answer: "Display, video, audio, Connected TV (CTV), and Over-the-Top (OTT) — all from one unified platform." },
  { question: "Can I white-label the platform?", answer: "Yes. Custom domain, logo, colors, and interface elements. No PublifyX branding visible to your end users." },
  { question: "What targeting options are available?", answer: "Demographic, geographic, behavioral, contextual, device, time-of-day, first-party data onboarding, and third-party audience segments." },
  { question: "How does real-time bidding work?", answer: "Our RTB engine processes millions of bid requests per second, evaluating each impression against your campaign criteria and optimizing for your chosen KPIs." },
  { question: "Is reporting customizable?", answer: "Yes. View performance by creative, placement, audience, device, geography, and time period. Export in customizable formats with white-label branding." },
];

const Features = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "PublifyX DSP Features | Targeting, Reporting, Formats, and More";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Explore the full feature set of PublifyX DSP — advanced targeting, real-time bidding, multi-channel support, brand safety, transparent reporting, and white label customization.");
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
                <span className="text-sm font-medium text-white/80">Platform Features</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                Everything You Need for
                <span className="block text-brand-orange-400">Programmatic Success</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Advanced targeting, real-time optimization, multi-channel support, brand safety, transparent reporting, and full white label customization — all in one platform.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                8 targeting types · 5 channels · Real-time optimization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <Button onClick={handleGetStarted} className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group">
                  See Features in Action <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded-xl font-semibold text-lg backdrop-blur-sm">
                  <Play className="mr-2 w-5 h-5" /> Watch Demo
                </Button>
              </div>
              <p className="text-sm text-navy-400">No commitment required · Full-featured demo available</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "8+", label: "Targeting Options" },
                { value: "5", label: "Ad Channels" },
                { value: "40+", label: "SSP Integrations" },
                { value: "Real-Time", label: "Optimization & Reporting" },
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

      {/* Platform Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Core Capabilities</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Platform Features</motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {platformFeatures.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <MagneticCard className="group bg-navy-50 rounded-2xl border border-navy-100 p-7 hover:shadow-lg transition-all duration-300 h-full">
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

      {/* Advanced Targeting */}
      <section className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Targeting</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Advanced Targeting Options</motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {targetingFeatures.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <div className="bg-white rounded-2xl border border-navy-100 p-6 hover:shadow-lg transition-all duration-300 h-full group">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-50 flex items-center justify-center mb-4 group-hover:bg-brand-orange-100 transition-colors">
                    <feature.icon className="w-5 h-5 text-brand-orange-500" />
                  </div>
                  <h3 className="font-bold text-navy-800 text-sm mb-1">{feature.title}</h3>
                  <p className="text-navy-400 text-xs leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Built For You</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Who Uses PublifyX Features?</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whoItsFor.map((audience, i) => (
              <motion.div key={audience.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
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

      {/* Related */}
      <section className="py-12 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-navy-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Explore More</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/how-it-works" className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">How It Works</Link>
              <Link to="/integrations" className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Integrations</Link>
              <Link to="/pricing" className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Pricing</Link>
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
          <h2 className="mb-6 !text-white">See Features in Action</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">Schedule a personalized demo to explore every feature of the PublifyX platform.</p>
          <p className="text-base text-navy-400 mb-10 font-semibold">No commitment required · Full-featured demo</p>
          <Button onClick={handleGetStarted} className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white text-lg px-10 py-6 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-orange-500/25 rounded-xl group">
            Book a Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

export default Features;
