import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

            <h1 className="mb-6 !text-white leading-[1.1] text-3xl md:text-4xl lg:text-[2.75rem] xl:text-4xl">
              CTV Advertising Platform —
              <span className="block text-brand-orange-400">Reach Audiences on Connected TV</span>
            </h1>

            <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
              Television has not disappeared. It has evolved.
            </p>

            <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
              Connected TV advertising allows brands to reach viewers on smart TVs and streaming devices with the
              full-screen impact of traditional TV combined with the targeting precision and measurability of digital.
            </p>

            <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
              PublifyX gives agencies and advertisers a powerful CTV advertising platform to plan, execute, and measure
              campaigns across premium streaming environments, all from a unified dashboard.
            </p>

            <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
              Deliver non-skippable, full-screen video ads to viewers watching content on smart TVs, Roku, Amazon Fire
              TV, Apple TV, gaming consoles, and other connected devices.
            </p>

            <p className="text-base text-navy-300 mb-6 font-semibold">Big screen impact. Digital precision.</p>

            <h3 className="text-lg text-navy-200 mb-6">
              Explore how CTV can fit into your media strategy. Book a demo today.
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
              <Button
                onClick={onGetStarted}
                className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group"
              >
                Book a Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-sm text-navy-400">No commitment required · Launch campaigns in minutes</p>
          </motion.div>

          {/* Right side — trust stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: "100+", label: "Premium CTV Publishers" },
              { value: "95%+", label: "Video Completion Rate" },
              { value: "15s/30s", label: "Ad Format Support" },
              { value: "24/7", label: "Dedicated Support" },
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
  );
};

export default CTVHeroSection;
