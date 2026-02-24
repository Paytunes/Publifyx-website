import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-800">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-brand-orange-500 rounded-full blur-[200px] opacity-10" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-orange-300 rounded-full blur-[160px] opacity-[0.06]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-brand-orange-400" />
            <span className="text-sm font-medium text-white/80">White Label DSP Solution</span>
          </div>

          <h1 className="mb-6 !text-white leading-[1.1] max-w-5xl mx-auto">
            White Labelled Platform for
            <span className="block text-brand-orange-400">Programmatic Ad Buying</span>
          </h1>

          <p className="text-lg md:text-xl text-navy-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Launch your own ad tech business with our white label DSP for programmatic ad buying for Display, Video, Audio, Native, and CTV ads.
          </p>

          <p className="text-base text-navy-300 mb-10 font-semibold">
            Easy setup · Full control · Powerful performance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button
              onClick={onGetStarted}
              className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group"
            >
              Start Your Free Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded-xl font-semibold text-lg backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          <p className="text-sm text-navy-400">No commitment required · Launch in under 15 minutes</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
