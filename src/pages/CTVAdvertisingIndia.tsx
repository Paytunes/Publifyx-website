import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Tv, Target, Users, Globe, MapPin, TrendingUp, PhoneCall, Settings, Rocket, GraduationCap, Building2, Store, Megaphone, Zap } from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  { title: "Premium Indian Audiences", description: "CTV viewers in India are urban, affluent, and digitally savvy — a high-value segment for FMCG, auto, electronics, and more.", icon: Users },
  { title: "Non-Skippable Full-Screen", description: "CTV ads deliver immersive, full-screen experiences with completion rates significantly higher than mobile video.", icon: Tv },
  { title: "Household-Level Targeting", description: "Target by geography, demographics, interests, and household profiles to reach the right homes.", icon: Target },
  { title: "Growing Inventory", description: "As Indian streaming platforms adopt ad-supported models, CTV inventory continues to expand rapidly.", icon: TrendingUp },
  { title: "Pin Code Level Targeting", description: "Programmatic access with geographic precision down to city and pin code level.", icon: MapPin },
  { title: "Multi-Platform Access", description: "Access inventory across JioCinema, Disney+ Hotstar, SonyLIV, ZEE5, and more through SSP integrations.", icon: Globe },
];

const whoItsFor = [
  { title: "Indian Media Agencies", description: "Plan CTV campaigns for Indian brands with programmatic precision and white-label reporting.", icon: Building2 },
  { title: "National Advertisers", description: "Reach India's growing smart TV audience across metros and tier-2 cities.", icon: Megaphone },
  { title: "Regional Businesses", description: "Target specific states, cities, or pin codes with CTV ads for localized impact.", icon: Store },
  { title: "Ad Tech Startups", description: "Build an ad platform for the Indian market with PublifyX's CTV technology and inventory.", icon: Zap },
];

const steps = [
  { number: "01", title: "Define India Strategy", description: "Set objectives and targeting criteria for the Indian market.", icon: PhoneCall },
  { number: "02", title: "Configure Targeting", description: "Select audiences by geography, demographics, and viewing behavior.", icon: Settings },
  { number: "03", title: "Launch Campaigns", description: "Go live across Indian CTV inventory via programmatic buying.", icon: Rocket },
  { number: "04", title: "Optimize & Report", description: "Monitor performance and optimize for maximum impact in India.", icon: GraduationCap },
];

const faqs = [
  { question: "Is CTV advertising available in India?", answer: "Yes. CTV advertising is available through PublifyX. With growing smart TV adoption and ad-supported streaming, CTV inventory in India is expanding rapidly." },
  { question: "Which streaming platforms support CTV ads in India?", answer: "Several Indian streaming platforms offer ad-supported content. Available inventory varies by SSP integrations and platform partnerships." },
  { question: "How is CTV different from mobile OTT in India?", answer: "CTV is ads on TV screens via internet-connected devices. Mobile OTT is streaming on smartphones. CTV provides a larger, more immersive experience with higher completion rates." },
  { question: "Can I target specific cities in India?", answer: "Yes. PublifyX supports geographic targeting at state, city, and pin code level for CTV campaigns in India." },
];

const CTVAdvertisingIndia = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "CTV Advertising in India | Connected TV Ads Platform for Indian Market — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Launch CTV advertising campaigns in India with PublifyX. Reach smart TV audiences across Indian streaming platforms.");
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
          <PageBreadcrumb items={[{ label: "Home", path: "/" }, { label: "Services" }, { label: "CTV Advertising India" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">CTV Advertising India</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                CTV Advertising in India — Reach India's
                <span className="block text-brand-orange-400">Connected TV Audience</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                India's CTV market is booming. Smart TV adoption, expanding broadband, and streaming platforms like JioCinema, Disney+ Hotstar, and ZEE5 create massive advertising opportunity.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                Premium audiences · Pin code targeting · Growing inventory
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <Button onClick={handleGetStarted} className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group">
                  Book a Call <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded-xl font-semibold text-lg backdrop-blur-sm">
                  <Play className="mr-2 w-5 h-5" /> Learn More
                </Button>
              </div>
              <p className="text-sm text-navy-400">No commitment required · Indian market expertise</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "100M+", label: "Smart TVs in India" },
                { value: "Pin Code", label: "Level Targeting" },
                { value: "10+", label: "Indian Streaming Apps" },
                { value: "Growing", label: "FAST Channel Inventory" },
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

      {/* State of CTV in India */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Market Opportunity</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4 max-w-4xl mx-auto">The State of CTV in India</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed">
              India's CTV ecosystem is at an inflection point. Smart TV penetration is accelerating with affordable devices from Xiaomi, Samsung, TCL, and OnePlus. Indian streaming platforms have embraced ad-supported models — brands moving early into CTV will benefit from lower competition and strong engagement.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Why CTV India</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Why CTV Advertising Works in India</motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Built For You</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Who Is CTV India For?</motion.h2>
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

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Get Started</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>How to Launch CTV in India</motion.h2>
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
              Launch CTV in India <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50 rounded-2xl border border-navy-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Explore Related</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/ctv-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">CTV Advertising (Global)</Link>
              <Link to="/ott-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">OTT Advertising</Link>
              <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-800" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-500 rounded-full blur-[250px] opacity-10" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="mb-6 !text-white">Launch CTV Campaigns in India</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">Reach premium Indian audiences on the largest screen in the household with programmatic precision.</p>
          <p className="text-base text-navy-400 mb-10 font-semibold">No commitment required · Indian market expertise</p>
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

export default CTVAdvertisingIndia;
