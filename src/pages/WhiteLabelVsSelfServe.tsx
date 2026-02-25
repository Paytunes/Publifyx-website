import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2, XCircle, Palette, DollarSign, Network, Users, Clock, TrendingUp, Building2, Globe, Star, Target } from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const comparisons = [
  { factor: "Branding", selfServe: "Provider's brand", whiteLabel: "Your brand exclusively", icon: Palette },
  { factor: "Pricing Control", selfServe: "Provider's published rates", whiteLabel: "You set your own pricing", icon: DollarSign },
  { factor: "Supply Partnerships", selfServe: "Pre-configured sources", whiteLabel: "Custom SSP integrations", icon: Network },
  { factor: "Client Access", selfServe: "One level of access", whiteLabel: "Custom access tiers", icon: Users },
  { factor: "Cost Structure", selfServe: "% of spend (grows with scale)", whiteLabel: "Fixed/tiered (more cost-effective)", icon: TrendingUp },
  { factor: "Time to Market", selfServe: "Immediate access", whiteLabel: "1-2 weeks setup", icon: Clock },
];

const whoItsFor = [
  { title: "Agencies", description: "Choose white label if you want to brand the platform, control margins, and build client relationships around proprietary technology.", icon: Building2 },
  { title: "Ad Networks", description: "White label lets you offer self-serve programmatic under your brand with custom access for different advertiser tiers.", icon: Globe },
  { title: "Startups", description: "Start with white label for a differentiated market entry — your own branded DSP from day one.", icon: Star },
  { title: "Solo Advertisers", description: "Self-serve DSP may work if you need quick, no-setup access without branding or client features.", icon: Target },
];

const faqs = [
  { question: "Can a white label DSP also offer self-serve access?", answer: "Yes. White label refers to branding and ownership. Self-serve describes the user experience. You can configure white label for self-serve client access." },
  { question: "Is a white label DSP more expensive?", answer: "Not necessarily. White label DSPs avoid percentage-based spend markups. At higher volumes, white label often becomes more cost-effective." },
  { question: "Can I switch from self-serve to white label?", answer: "Yes. Many businesses start self-serve and transition to white label as branding, margin control, and client access needs grow." },
];

const WhiteLabelVsSelfServe = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "White Label DSP vs Self-Serve DSP: Which Is Right for You? — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Understand the key differences between a white label DSP and a self-serve DSP. Compare features, costs, control, and scalability.");
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
                <span className="text-sm font-medium text-white/80">Comparison Guide</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                White Label DSP vs Self-Serve DSP —
                <span className="block text-brand-orange-400">Which Is Right for You?</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Both provide programmatic ad buying, but they differ significantly in branding, control, cost structure, and long-term scalability.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                Branding · Margins · Control · Scalability
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <Button onClick={handleGetStarted} className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group">
                  Get Recommendation <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <p className="text-sm text-navy-400">Not sure? Talk to our team for a personalized recommendation</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "6", label: "Key Differences" },
                { value: "100%", label: "Brand Control (WL)" },
                { value: "1-2 Weeks", label: "WL Setup Time" },
                { value: "Better", label: "ROI at Scale (WL)" },
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

      {/* Comparison Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Key Differences</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Side-by-Side Comparison</motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {comparisons.map((comp, i) => (
              <motion.div key={comp.factor} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="bg-navy-50 rounded-2xl border border-navy-100 p-7 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-50 flex items-center justify-center mb-4">
                    <comp.icon className="w-5 h-5 text-brand-orange-500" />
                  </div>
                  <h3 className="font-bold text-navy-800 text-base mb-4">{comp.factor}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-navy-300 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-navy-400 uppercase">Self-Serve</span>
                        <p className="text-sm text-navy-500">{comp.selfServe}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-brand-orange-500 uppercase">White Label</span>
                        <p className="text-sm text-navy-700 font-medium">{comp.whiteLabel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Model */}
      <section className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Choose Your Model</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Which Should You Choose?</motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-navy-100 p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-4">Self-Serve DSP</h3>
              <p className="text-navy-400 text-sm mb-6 leading-relaxed">Best for individual advertisers or small teams needing quick, no-setup access without branding requirements.</p>
              <ul className="space-y-3">
                {["Immediate access", "No setup required", "Provider's branding", "% of spend fees"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-navy-400" />
                    </div>
                    <span className="text-navy-600 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-800 rounded-2xl border border-navy-700 p-8">
              <h3 className="text-xl font-bold text-white mb-4">White Label DSP ✦</h3>
              <p className="text-navy-300 text-sm mb-6 leading-relaxed">Best for agencies, networks, and startups wanting branded programmatic capabilities with margin control.</p>
              <ul className="space-y-3">
                {["Your brand exclusively", "Custom pricing & margins", "Client access tiers", "Cost-effective at scale", "Long-term competitive moat"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="text-navy-200 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Built For You</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Recommendations by Business Type</motion.h2>
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
              <Link to="/white-label-dsp" className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
              <Link to="/pricing" className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Pricing</Link>
              <Link to="/dsp-for-agencies" className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">DSP for Agencies</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-800" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-500 rounded-full blur-[250px] opacity-10" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="mb-6 !text-white">Choose the Right Model</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">Not sure which approach fits your business? Talk to our team for a personalized recommendation.</p>
          <p className="text-base text-navy-400 mb-10 font-semibold">No commitment required · Expert guidance</p>
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

export default WhiteLabelVsSelfServe;
