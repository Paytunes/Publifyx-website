import { useState, lazy, Suspense } from "react";
import { ArrowRight, Play, Sparkles, BarChart3, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import GetStartedModal from "@/components/GetStartedModal";
import SplitRevealText from "@/components/effects/SplitRevealText";
import EnergyButton from "@/components/effects/EnergyButton";

const ParticleNetwork = lazy(() => import("@/components/effects/ParticleNetwork"));

const HeroSection = () => {
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-800">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />

        {/* Particle network */}
        <Suspense fallback={null}>
          <ParticleNetwork />
        </Suspense>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Accent glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-orange-500 rounded-full blur-[180px] opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-brand-orange-400 rounded-full blur-[140px] opacity-[0.06]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
              >
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">AI-Powered Ad-Tech Platform</span>
              </motion.div>

              <h1 className="mb-6 !text-white leading-[1.1]">
                <SplitRevealText text="Launch High-Performance" delay={0.2} />
                <span className="block text-brand-orange-400">
                  <SplitRevealText text="Digital Campaigns" delay={0.5} />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl text-navy-200 mb-10 max-w-lg leading-relaxed"
              >
                Leverage AI for seamless creativity, simplify OTT advertising, and maximize ROI with white-labeled DSP
                solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <EnergyButton
                  className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-brand-orange-500/25"
                  onClick={() => setIsGetStartedModalOpen(true)}
                >
                  Get Your White Label DSP
                  <ArrowRight className="ml-2 w-5 h-5" />
                </EnergyButton>
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded-xl font-semibold text-lg backdrop-blur-sm"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Trust metrics */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-center gap-8 pt-8 border-t border-white/10"
              >
                {[
                  { icon: Globe, value: "300+", label: "Publishers" },
                  { icon: BarChart3, value: "10M+", label: "Daily Users" },
                  { icon: Sparkles, value: "12K+", label: "Pin Codes" },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-2">
                    <m.icon className="w-5 h-5 text-brand-orange-400" />
                    <div>
                      <div className="text-white font-bold text-lg">{m.value}</div>
                      <div className="text-navy-300 text-sm">{m.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 !bg-[#ffbf32]">
                  <img
                    src="/lovable-uploads/bef683a7-f8ef-4723-b8b6-270b4e10a7c0.png"
                    alt="Young woman using phone – digital advertising concept"
                    className="w-full h-auto"
                    width={584}
                    height={721}
                    fetchPriority="high"
                    decoding="sync"
                    sizes="50vw"
                  />
                </div>
                {/* Floating card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-navy-800">+300% ROI</div>
                      <div className="text-xs text-navy-400">Avg. Campaign</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GetStartedModal isOpen={isGetStartedModalOpen} onClose={() => setIsGetStartedModalOpen(false)} />
    </>
  );
};

export default HeroSection;
