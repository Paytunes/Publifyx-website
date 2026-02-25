import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ctvHeroDashboard from "@/assets/ctv/ctv-connected-hero.webp";

interface CTVHeroSectionProps {
  onGetStarted: () => void;
}

const CTVHeroSection = ({ onGetStarted }: CTVHeroSectionProps) => {
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-brand-orange-400" />
              <span className="text-sm font-medium text-white/80">Connected TV Advertising</span>
            </div>

            <h1 className="mb-6 !text-white leading-[1.1]">
              PublifyX Connected TV
              <span className="block text-brand-orange-400">Advertising Platform</span>
            </h1>

            <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
              Your brand deserves premium attention. Reach engaged audiences on the biggest screen in the house with
              programmatic CTV advertising.
            </p>

            <p className="text-base text-navy-300 mb-10 font-semibold">
              Smart TVs · Streaming Apps · Premium Inventory · Real-Time Analytics
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
              <Button
                onClick={onGetStarted}
                className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-sm text-navy-400">No commitment required · Launch campaigns in minutes</p>
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
                src={ctvHeroDashboard}
                alt="Connected TV advertising dashboard with audience targeting and campaign performance analytics"
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

export default CTVHeroSection;
