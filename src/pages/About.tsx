import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import EnergyButton from "@/components/effects/EnergyButton";
import { ArrowRight, Sparkles, Lightbulb, Globe, Handshake, Building2, Star, Target, Zap } from "lucide-react";
import aboutDashboard from "@/assets/about/hero-dashboard.webp";
import MagneticCard from "@/components/effects/MagneticCard";

const whatWeDo = [
  {
    title: "White Label DSP Technology",
    description: "A fully functional, branded demand side platform supporting display, video, audio, CTV, and OTT.",
    icon: Lightbulb,
  },
  {
    title: "Infrastructure & Bidding",
    description: "We handle real-time bidding engine, server architecture, data pipelines, and ongoing compliance.",
    icon: Zap,
  },
  {
    title: "Supply Integrations",
    description: "40+ SSP and ad exchange connections pre-configured. Custom integrations available.",
    icon: Globe,
  },
  {
    title: "Ongoing Support",
    description: "Ad tech specialists guide you through setup, optimization, and campaign strategy.",
    icon: Handshake,
  },
];

const whoWeServe = [
  {
    title: "Independent Media Agencies",
    description:
      "Bring programmatic in-house, eliminate middlemen, and increase margins with your own branded platform.",
    icon: Building2,
  },
  {
    title: "Ad Networks",
    description: "Offer self-serve programmatic capabilities to your advertiser base with custom access tiers.",
    icon: Globe,
  },
  {
    title: "Performance Companies",
    description:
      "Run data-driven campaigns across multiple channels with advanced targeting and real-time optimization.",
    icon: Target,
  },
  {
    title: "Startups",
    description: "Enter the ad tech market without millions in development costs. Launch your own DSP in days.",
    icon: Star,
  },
];

const values = [
  {
    title: "Transparency",
    description: "Clear pricing, honest communication, and full visibility into how your platform operates.",
  },
  {
    title: "Accessibility",
    description: "Enterprise-grade ad tech should not require enterprise-grade budgets. We make it accessible.",
  },
  {
    title: "Partnership",
    description: "We succeed when you succeed. Our support goes beyond technology into business strategy.",
  },
  {
    title: "Innovation",
    description: "Continuous platform updates, new features, and expanded integrations to keep you competitive.",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "About PublifyX | White Label Programmatic Technology Company";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "PublifyX is a programmatic advertising technology company providing white label DSP solutions for agencies, ad networks, and startups worldwide.",
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
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-brand-orange-500 rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-orange-300 rounded-full blur-[160px] opacity-[0.06]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <PageBreadcrumb items={[{ label: "Home", path: "/" }, { label: "Resources" }, { label: "About" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">About PublifyX</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                Powering the Next Generation of
                <span className="block text-brand-orange-400">Programmatic Advertising</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                We build white-labeled DSP technology that enables agencies, ad networks, and startups to launch their
                own branded programmatic platforms — without building from scratch.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                Delhi, India · Serving clients worldwide · Enterprise tech, accessible pricing
              </p>
              <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4 mb-10">
                <Link to="/contact" className="flex items-center text-white no-underline group">
                  Partner with Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </EnergyButton>
              <p className="text-sm text-navy-400">Democratizing access to programmatic ad tech</p>
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
                  src={aboutDashboard}
                  alt="PublifyX company overview dashboard showing global client network, multi-channel capabilities, and technology stack"
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

      {/* What We Do */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              What We Do
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Our Technology, Your Brand
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-navy-400 max-w-3xl mx-auto mt-4 leading-relaxed"
            >
              You deploy the platform under your brand, operate with your pricing, and manage clients independently —
              while we handle infrastructure, bidding technology, and updates.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatWeDo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
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

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              Our Approach
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              What Drives Us
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="bg-white rounded-2xl border border-navy-100 p-6 hover:shadow-lg transition-all duration-300 h-full text-center">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-bold text-navy-800 text-base mb-2">{value.title}</h3>
                  <p className="text-navy-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              Who We Serve
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Our Clients
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whoWeServe.map((audience, i) => (
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
            <h3 className="text-lg font-bold text-navy-900 mb-4">Learn More</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
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
          <h2 className="mb-6 !text-white">Partner with PublifyX</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">
            Ready to explore how we can power your programmatic advertising business?
          </p>
          <p className="text-base text-navy-400 mb-10 font-semibold">No commitment required · Global reach</p>
          <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
            <Link to="/contact" className="flex items-center text-white no-underline group">
              Book a Call <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </EnergyButton>
        </motion.div>
      </section>
    </Layout>
  );
};

export default About;
