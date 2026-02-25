import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Play,
  CheckCircle2,
  DollarSign,
  Layers,
  Palette,
  Network,
  GraduationCap,
  Headphones,
  RefreshCw,
  Building2,
  Globe,
  Star,
  Target,
} from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const included = [
  {
    title: "Platform Access",
    description: "Full DSP with campaign management, targeting, bidding, and reporting across all channels.",
    icon: Layers,
  },
  {
    title: "White Label Branding",
    description: "Custom domain, logo, colors, and branded reporting at no additional charge.",
    icon: Palette,
  },
  {
    title: "SSP Integrations",
    description: "Pre-configured connections to 40+ SSPs and ad exchanges. Custom integrations available.",
    icon: Network,
  },
  {
    title: "Multi-Channel Access",
    description: "Display, video, audio, CTV, and OTT — all included in base pricing.",
    icon: DollarSign,
  },
  {
    title: "Onboarding & Training",
    description: "Dedicated onboarding sessions, platform training, and documentation.",
    icon: GraduationCap,
  },
  {
    title: "Technical Support",
    description: "Responsive support for platform issues, campaign troubleshooting, and optimization.",
    icon: Headphones,
  },
  {
    title: "Updates & Maintenance",
    description: "Regular feature updates, security patches, and infrastructure maintenance included.",
    icon: RefreshCw,
  },
];

const whoItsFor = [
  {
    title: "Growing Agencies",
    description: "Flexible pricing that scales with your client base. Start lean, grow without constraints.",
    icon: Building2,
  },
  {
    title: "Ad Networks",
    description: "Predictable costs for offering self-serve programmatic to your advertiser base.",
    icon: Globe,
  },
  {
    title: "Startups",
    description: "Enterprise-grade technology at a fraction of the build cost. Launch without millions in development.",
    icon: Star,
  },
  {
    title: "Performance Teams",
    description: "Transparent pricing with no hidden markups — your margins improve as you grow.",
    icon: Target,
  },
];

const faqs = [
  {
    question: "How much does a white label DSP cost?",
    answer:
      "Pricing varies based on features, channels, and media spend volume. PublifyX offers flexible plans. Contact our team for a custom quote.",
  },
  {
    question: "Does PublifyX charge a percentage of media spend?",
    answer:
      "PublifyX structures pricing to remain cost-effective as your business scales. Your margins improve with growth. Contact us for details.",
  },
  {
    question: "Are there setup fees?",
    answer:
      "Setup requirements vary by deployment. White label branding, domain setup, and standard SSP integrations are included.",
  },
  {
    question: "Is it cheaper to build or buy a DSP?",
    answer:
      "Building from scratch costs millions and requires dedicated engineering. A white label DSP provides the same functionality at a fraction of the cost in days.",
  },
  {
    question: "Can I upgrade my plan?",
    answer: "Yes. Plans scale with your business. As media spend and client base grow, your plan adjusts accordingly.",
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "White Label DSP Pricing | Transparent Programmatic Platform Costs — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Explore PublifyX white label DSP pricing. Flexible plans for agencies, ad networks, and startups. Transparent costs with no hidden fees.",
      );
    return () => {
      document.title = "PublifyX — Programmatic Advertising Platform";
    };
  }, []);

  const handleGetStarted = () => navigate("/contact");

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
          <PageBreadcrumb items={[{ label: "Home", path: "/" }, { label: "Resources" }, { label: "Pricing" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">Pricing</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                Transparent, Flexible Pricing
                <span className="block text-brand-orange-400">For Every Business Size</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Enterprise-grade programmatic technology without the enterprise-grade price tag. No hidden fees, no
                surprise charges, no percentage-based markups.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                No hidden fees · Margins improve as you grow · All channels included
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <Button
                  onClick={handleGetStarted}
                  className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group"
                >
                  Request Custom Quote{" "}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded-xl font-semibold text-lg backdrop-blur-sm"
                >
                  <Play className="mr-2 w-5 h-5" /> Watch Demo
                </Button>
              </div>
              <p className="text-sm text-navy-400">No commitment required · Custom pricing available</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { value: "7", label: "Inclusions in Every Plan" },
                { value: "5", label: "Ad Channels Included" },
                { value: "40+", label: "SSP Integrations" },
                { value: "0%", label: "Hidden Markup Fees" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl font-bold text-brand-orange-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-navy-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              What's Included
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Everything in Every Plan
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {included.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={i === included.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <MagneticCard className="group bg-navy-50 rounded-2xl border border-navy-100 p-7 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange-50 flex items-center justify-center mb-5 group-hover:bg-brand-orange-100 transition-colors">
                    <item.icon className="w-6 h-6 text-brand-orange-500" />
                  </div>
                  <h3 className="font-bold text-navy-800 text-lg mb-2">{item.title}</h3>
                  <p className="text-navy-400 text-sm leading-relaxed">{item.description}</p>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Advantage */}
      <section className="py-12 md:py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              Pricing Advantage
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Why PublifyX Pricing Makes Sense
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-navy-100 p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-4">Traditional DSP Pricing</h3>
              <ul className="space-y-3">
                {[
                  "Percentage of media spend (gets expensive)",
                  "Per-channel premiums",
                  "Per-integration fees",
                  "Hidden markups on media costs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-500 text-xs font-bold">✕</span>
                    </div>
                    <span className="text-navy-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-800 rounded-2xl border border-navy-700 p-8">
              <h3 className="text-xl font-bold text-white mb-4">PublifyX Pricing</h3>
              <ul className="space-y-3">
                {[
                  "Predictable platform access fee",
                  "All channels included",
                  "All integrations included",
                  "Branding included at no extra cost",
                  "Margins improve as you grow",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="text-navy-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 md:py-16 bg-white">
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
              Pricing for Every Business Stage
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whoItsFor.map((audience, i) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
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
            <h3 className="text-lg font-bold text-navy-900 mb-4">Explore Related</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/white-label-dsp"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                White Label DSP
              </Link>
              <Link
                to="/dsp-for-agencies"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                DSP for Agencies
              </Link>
              <Link
                to="/features"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                Features
              </Link>
              <Link
                to="/how-it-works"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                How It Works
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
          <h2 className="mb-6 !text-white">Request a Custom Pricing Quote</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">
            Every business has unique requirements. Get pricing tailored to your goals.
          </p>
          <p className="text-base text-navy-400 mb-10 font-semibold">No commitment required · Custom plans available</p>
          <Button
            onClick={handleGetStarted}
            className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white text-lg px-10 py-6 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-orange-500/25 rounded-xl group"
          >
            Get Your Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-navy-50">
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

export default Pricing;
