import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import EnergyButton from "@/components/effects/EnergyButton";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  GraduationCap,
  Search,
  Palette,
  Network,
  Building2,
  Globe,
  Star,
  Target,
} from "lucide-react";
import howItWorksDashboard from "@/assets/how-it-works/hero-dashboard.webp";
import MagneticCard from "@/components/effects/MagneticCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We discuss your business model, target markets, channels to activate, client access model, branding specs, and SSP integration needs.",
    icon: Search,
  },
  {
    number: "02",
    title: "Platform Configuration",
    description:
      "Our team configures your custom domain, logo, color palette, account structure, user roles, and permission levels.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Supply Integration",
    description:
      "We activate connections to 40+ SSPs covering display, video, audio, CTV, and OTT — plus any custom supply partners.",
    icon: Network,
  },
  {
    number: "04",
    title: "Team Onboarding",
    description:
      "Comprehensive training on platform navigation, campaign setup, targeting, bidding, reporting, and optimization.",
    icon: GraduationCap,
  },
  {
    number: "05",
    title: "Campaign Launch",
    description:
      "Go live with your first campaigns. Our support team assists with strategy, troubleshooting, and optimization.",
    icon: Rocket,
  },
];

const whoItsFor = [
  {
    title: "Media Agencies",
    description:
      "Deploy a branded DSP with full white-label customization. Control margins, client access, and reporting.",
    icon: Building2,
  },
  {
    title: "Ad Networks",
    description:
      "Add self-serve programmatic buying capabilities for your advertiser base — fast and scalable.",
    icon: Globe,
  },
  {
    title: "Startups",
    description:
      "Enter the ad tech market without millions in development costs. Enterprise-grade technology, ready in days.",
    icon: Star,
  },
  {
    title: "Performance Marketers",
    description:
      "Launch data-driven campaigns across multiple channels with advanced targeting and real-time optimization.",
    icon: Target,
  },
];

const faqs = [
  {
    question: "How long does the full setup process take?",
    answer:
      "Most deployments complete within five to ten business days, depending on customization and integration requirements.",
  },
  {
    question: "Do I need engineering resources?",
    answer:
      "No. PublifyX handles all technical setup, configuration, and ongoing platform maintenance. Your team focuses on business operations.",
  },
  {
    question: "Can I add more channels or integrations later?",
    answer:
      "Yes. You can activate additional channels and SSP integrations at any time as your business needs evolve.",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    document.title = "How PublifyX Works | Launch Your White Label DSP in Days";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Learn how PublifyX works — from initial setup to live campaign launch. Deploy your white label DSP in days.",
      );
    return () => {
      document.title = "PublifyX — Programmatic Advertising Platform";
    };
  }, []);

  return (
    <Layout transparentHeader>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-800">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-brand-orange-500 rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-orange-300 rounded-full blur-[160px] opacity-[0.06]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <PageBreadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Resources" },
              { label: "How It Works" },
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">
                  How It Works
                </span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                From Setup to Live Campaigns
                <span className="block text-brand-orange-400">
                  In Days, Not Months
                </span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Launching your own DSP sounds complex. With PublifyX, we handle
                the technology, infrastructure, and integrations — you focus on
                your brand, clients, and growth.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                5 steps · 5-10 business days · Zero engineering required
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
                  <Link
                    to="/contact"
                    className="flex items-center text-white no-underline group"
                  >
                    Start Your Journey{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </EnergyButton>
              </div>
              <p className="text-sm text-navy-400">
                No commitment required · Most clients launch within 2 weeks
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange-500/10 rounded-3xl blur-2xl" />
                <img
                  src={howItWorksDashboard}
                  alt="DSP onboarding process dashboard showing setup steps, domain configuration, and integration status"
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

      {/* Steps */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              The Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Five Steps to Your Own DSP
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-navy-400 max-w-2xl mx-auto mt-4"
            >
              From consultation to live campaigns — typically within five to ten
              business days.
            </motion.p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-start gap-6 bg-navy-50 rounded-2xl border border-navy-100 p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-navy-800 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-brand-orange-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-orange-500 mb-1">
                      STEP {step.number}
                    </div>
                    <h3 className="font-bold text-navy-800 text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-navy-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
              <Link
                to="/contact"
                className="flex items-center text-white no-underline group"
              >
                Start Step 1 — Book a Call{" "}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </EnergyButton>
          </motion.div>
        </div>
      </section>

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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who Is This Process For?
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
                <MagneticCard className="bg-white rounded-2xl border border-navy-100 p-8 hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange-50 flex items-center justify-center mb-5 group-hover:bg-brand-orange-100 transition-colors">
                    <audience.icon className="w-6 h-6 text-brand-orange-500" />
                  </div>
                  <h3 className="font-bold text-navy-800 text-xl mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-navy-400 leading-relaxed">
                    {audience.description}
                  </p>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50 rounded-2xl border border-navy-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-navy-900 mb-4">
              Explore More
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/features"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                Features
              </Link>
              <Link
                to="/contact"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/integrations"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                Integrations
              </Link>
              <Link
                to="/case-studies"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                Case Studies
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
          <h2 className="mb-6 !text-white">Ready to Launch?</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">
            Most clients go from consultation to live campaigns within five to
            ten business days.
          </p>
          <p className="text-base text-navy-400 mb-10 font-semibold">
            No commitment required · Zero engineering needed
          </p>
          <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
            <Link
              to="/contact"
              className="flex items-center text-white no-underline group"
            >
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
                  <AccordionContent className="text-navy-500 leading-relaxed pb-5">
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

export default HowItWorks;
