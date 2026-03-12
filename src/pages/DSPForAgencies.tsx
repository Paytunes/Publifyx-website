import Layout from "@/components/Layout";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useServiceBreadcrumbs } from "@/hooks/useServiceBreadcrumbs";
import agencyHeroDashboard from "@/assets/agency/agency-hero-dashboard.webp";
import { motion } from "framer-motion";
import EnergyButton from "@/components/effects/EnergyButton";
import {
  ArrowRight,
  Sparkles,
  Building2,
  Palette,
  Users,
  DollarSign,
  Headphones,
  Layers,
  Target,
  PhoneCall,
  Settings,
  Rocket,
  GraduationCap,
  Zap,
  Star,
  Globe,
} from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: "Multi-Channel Buying",
    description:
      "Run display, video, audio, CTV, and OTT campaigns from a single interface.",
    icon: Layers,
  },
  {
    title: "White Label Branding",
    description:
      "Deploy under your agency's brand — custom domain, logo, colors, and reports.",
    icon: Palette,
  },
  {
    title: "Flexible Client Access",
    description:
      "Grant self-serve access, view-only dashboards, or manage everything internally.",
    icon: Users,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden markups on media. You control what you charge clients.",
    icon: DollarSign,
  },
  {
    title: "Dedicated Support",
    description:
      "Onboarding, training, and ongoing support tailored to how agencies operate.",
    icon: Headphones,
  },
  {
    title: "Scalable Infrastructure",
    description:
      "From ten clients to a hundred — the platform scales without constraints.",
    icon: Zap,
  },
];

const agencyTypes = [
  {
    title: "Independent Media Agencies",
    description:
      "Bring programmatic in-house, replace third-party DSPs, and capture margins that went to middlemen.",
    icon: Building2,
  },
  {
    title: "Performance Marketing Agencies",
    description:
      "Run data-driven campaigns optimizing toward CPA, ROAS, and performance KPIs with log-level data.",
    icon: Target,
  },
  {
    title: "Creative Agencies",
    description:
      "Add programmatic capabilities to your offering without building a media buying team from scratch.",
    icon: Star,
  },
  {
    title: "Regional & Boutique Agencies",
    description:
      "Compete with larger agencies by presenting clients with a proprietary technology platform.",
    icon: Globe,
  },
];

const steps = [
  {
    number: "01",
    title: "Schedule Consultation",
    description:
      "Define business requirements, branding, and client structure.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Platform Configuration",
    description: "We configure your domain, branding, and SSP integrations.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Deploy Your DSP",
    description:
      "Your branded platform goes live — typically within 5-10 business days.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Onboarding & Growth",
    description:
      "Your team receives training and ongoing support for campaign optimization.",
    icon: GraduationCap,
  },
];

const faqs = [
  {
    question: "Can my agency white label the PublifyX DSP?",
    answer:
      "Yes. Full white label capabilities — your domain, branding, and visual identity. Clients see your proprietary technology.",
  },
  {
    question: "How does PublifyX help agencies increase margins?",
    answer:
      "By eliminating third-party DSP fees. You set your own pricing and retain the margin that previously went to intermediaries.",
  },
  {
    question: "What channels can agencies access?",
    answer: "Display, video, audio, CTV, and OTT — all from one platform.",
  },
  {
    question: "Do agencies need technical staff?",
    answer:
      "No dedicated technical staff required. PublifyX handles infrastructure, maintenance, and updates.",
  },
  {
    question: "How quickly can an agency get started?",
    answer:
      "Most deployments complete within 5-10 business days including branding, SSP integrations, and onboarding.",
  },
];

const DSPForAgencies = () => {
  useEffect(() => {
    document.title =
      "DSP for Agencies | Programmatic Platform Built for Media Agencies — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "PublifyX offers a white label DSP built for media agencies. Bring programmatic buying in-house, increase margins, and offer clients a branded platform.",
      );
    return () => {
      document.title = "PublifyX — Programmatic Advertising Platform";
    };
  }, []);
  const breadcrumbs = useServiceBreadcrumbs("DSP for Agencies");

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
          <PageBreadcrumb items={breadcrumbs} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">
                  DSP for Agencies
                </span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                DSP for Agencies — Bring Programmatic
                <span className="block text-brand-orange-400">
                  Buying In-House
                </span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Eliminate third-party fees, increase margins, and present
                clients with a branded programmatic platform that carries your
                agency's identity.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                Your brand · Your margins · Your clients · Our infrastructure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
                  <Link
                    to="/contact"
                    className="flex items-center text-white no-underline group"
                  >
                    Book a Call{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </EnergyButton>
              </div>
              <p className="text-sm text-navy-400">
                No commitment required · Deploy in 5-10 days
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange-500/10 rounded-3xl blur-2xl" />
                <img
                  src={agencyHeroDashboard}
                  alt="Agency DSP control panel with campaign manager, client management, and revenue tracking"
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

      {/* Why Agencies Need Own DSP */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              Agency DSP
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 max-w-4xl mx-auto"
            >
              Why Agencies Need Their Own DSP
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
            >
              Third-party DSPs erode margins, create transparency concerns, and
              make it difficult to differentiate. Operating your own DSP changes
              the equation — you control the workflow, set margins, and present
              clients with your branded platform.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-navy-50 rounded-2xl border border-navy-100 p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-4">
                Without Your Own DSP
              </h3>
              <ul className="space-y-3">
                {[
                  "Paying percentage-based fees",
                  "Limited supply path control",
                  "Reports carry another brand",
                  "Easy for clients to switch",
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
              <h3 className="text-xl font-bold text-white mb-4">
                With PublifyX DSP
              </h3>
              <ul className="space-y-3">
                {[
                  "Control entire media buying workflow",
                  "Set your own margins",
                  "Branded platform experience",
                  "Stronger client retention",
                  "Log-level data access",
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What Makes PublifyX Right for Agencies
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
                  <h3 className="font-bold text-navy-800 text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How Agencies Use PublifyX
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {agencyTypes.map((audience, i) => (
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

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-navy-50">
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How to Get Started
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
                  <div className="text-xs font-bold text-brand-orange-500 mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-navy-800 text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
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
              <Link
                to="/contact"
                className="flex items-center text-white no-underline group"
              >
                Get Your Agency's Own DSP{" "}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </EnergyButton>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50 rounded-2xl border border-navy-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-navy-900 mb-4">
              Explore Related Services
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/white-label-dsp"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                White Label DSP
              </Link>
              <Link
                to="/contact"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                Contact Us
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
          <h2 className="mb-6 !text-white">Get Your Agency's Own DSP</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">
            Eliminate third-party fees, increase margins, and present clients
            with a branded platform.
          </p>
          <p className="text-base text-navy-400 mb-10 font-semibold">
            No commitment required · Deploy in 5-10 days
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

export default DSPForAgencies;
