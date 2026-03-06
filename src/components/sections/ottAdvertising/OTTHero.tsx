import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import EnergyButton from "@/components/effects/EnergyButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ottHeroDashboard from "@/assets/ott/ott-hero-dashboard.webp";

interface OTTHeroProps {
  breadcrumbs: any[];
}

const OTTHero = ({ breadcrumbs }: OTTHeroProps) => {
  return (
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
                <span className="text-sm font-medium text-white/80">OTT Advertising Platform</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                OTT Advertising Platform — Reach Streaming Audiences
                <span className="block text-brand-orange-400">Across Every Screen</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Streaming has changed how people consume content, and how brands must reach them.
              </p>
              <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
                Over-the-top (OTT) advertising allows you to deliver targeted video ads across smart TVs, smartphones, tablets, laptops, and gaming consoles. Wherever audiences stream, your message follows.
              </p>
              <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
                PublifyX provides a programmatic OTT advertising platform that connects you to premium streaming inventory across devices and environments. Whether your audience is watching a show on a smart TV, catching up on content on mobile, or streaming during their commute, your campaigns reach them with precision and measurable impact.
              </p>
              <p className="text-base text-navy-400 mb-10 font-semibold">
                Looking to expand beyond traditional TV? Speak with our team about launching OTT campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
                  <Link to="/contact" className="flex items-center text-white no-underline group">
                    Book a Demo{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                  src={ottHeroDashboard}
                  alt="OTT advertising platform dashboard showing programmatic ad buying across streaming devices"
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
  );
};

export default OTTHero;
