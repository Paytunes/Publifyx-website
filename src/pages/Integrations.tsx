import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Network, Database, Globe, Settings, Building2, Star, Target, Tv, Monitor, Headphones, Video } from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";

const integrationTypes = [
  { title: "Supply-Side Platforms", description: "Leading SSPs aggregating inventory from premium publishers, apps, and streaming platforms. Billions of daily impressions across all major formats.", icon: Network },
  { title: "Ad Exchanges", description: "Real-time bidding inventory through major exchanges. Open auction, private marketplace (PMP), and programmatic guaranteed deals.", icon: Globe },
  { title: "Data Partners", description: "Third-party audience data from leading providers. Demographic, behavioral, interest-based, and intent-based segments.", icon: Database },
  { title: "Custom Integrations", description: "Have existing supply partners or data providers? Our team configures custom integrations for your platform.", icon: Settings },
];

const channelCoverage = [
  { title: "Display Inventory", description: "Hundreds of thousands of websites and mobile apps through leading exchanges.", icon: Monitor },
  { title: "Video Inventory", description: "In-stream and outstream placements across premium publishers and streaming platforms.", icon: Video },
  { title: "Audio Inventory", description: "Streaming music, podcast networks, digital radio, and smart speaker environments.", icon: Headphones },
  { title: "CTV & OTT Inventory", description: "Smart TVs, streaming devices, FAST channels, and ad-supported OTT apps.", icon: Tv },
];

const whoItsFor = [
  { title: "Media Agencies", description: "Access the broadest inventory across all channels with a single platform login and unified reporting.", icon: Building2 },
  { title: "Ad Networks", description: "Offer your advertisers premium programmatic inventory through custom supply partnerships.", icon: Globe },
  { title: "Startups", description: "Launch with 40+ pre-configured integrations — no need to negotiate supply deals from scratch.", icon: Star },
  { title: "Performance Teams", description: "Optimize across multiple supply sources for the best performance at the lowest cost.", icon: Target },
];

const Integrations = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "PublifyX Integrations | SSPs, Ad Exchanges, and Data Partners";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "PublifyX integrates with 40+ SSPs, ad exchanges, and data partners. Access premium inventory across display, video, audio, CTV, and OTT.");
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
          <PageBreadcrumb items={[{ label: "Home", path: "/" }, { label: "Resources" }, { label: "Integrations" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">Integrations</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                Connected to the
                <span className="block text-brand-orange-400">Programmatic Ecosystem</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                The value of a DSP depends on its supply connections. PublifyX integrates with 40+ SSPs, ad exchanges, and data partners for premium inventory worldwide.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                40+ SSPs · All channels · Custom integrations available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <Button onClick={handleGetStarted} className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group">
                  Explore Integrations <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded-xl font-semibold text-lg backdrop-blur-sm">
                  <Play className="mr-2 w-5 h-5" /> Watch Demo
                </Button>
              </div>
              <p className="text-sm text-navy-400">Need a specific partner? Custom integrations available</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { value: "40+", label: "SSP Integrations" },
                { value: "5", label: "Channel Types" },
                { value: "Billions", label: "Daily Impressions" },
                { value: "Custom", label: "Integrations Available" },
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

      {/* Integration Types */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Integration Types</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>How We Connect You</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {integrationTypes.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
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

      {/* Channel Coverage */}
      <section className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">Channel Coverage</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Inventory Across Every Channel</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {channelCoverage.map((channel, i) => (
              <motion.div key={channel.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="bg-white rounded-2xl border border-navy-100 p-6 hover:shadow-lg transition-all duration-300 h-full text-center group">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-orange-100 transition-colors">
                    <channel.icon className="w-6 h-6 text-brand-orange-500" />
                  </div>
                  <h3 className="font-bold text-navy-800 text-sm mb-2">{channel.title}</h3>
                  <p className="text-navy-400 text-xs leading-relaxed">{channel.description}</p>
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
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Who Benefits from Our Integrations?</motion.h2>
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
              <Link to="/features" className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Features</Link>
              <Link to="/how-it-works" className="text-sm bg-navy-50 border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">How It Works</Link>
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
          <h2 className="mb-6 !text-white">Explore Our Integrations</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">Need a specific supply partner or data integration? Our team can configure custom connections.</p>
          <p className="text-base text-navy-400 mb-10 font-semibold">No commitment required · Custom integrations available</p>
          <Button onClick={handleGetStarted} className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white text-lg px-10 py-6 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-orange-500/25 rounded-xl group">
            Book a Call <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Integrations;
