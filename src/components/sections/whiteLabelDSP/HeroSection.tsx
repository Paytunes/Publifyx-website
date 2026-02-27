
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-orange-100/20 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm font-semibold mb-6 shadow-lg">
          <Star className="w-5 h-5 mr-2 fill-current" />
          White Label DSP Solution
        </div>
        <h1 className="mb-6 max-w-5xl mx-auto text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent leading-tight">
          White Labelled Platform for Programmatic Ad Buying
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
          Launch your own ad tech business with our white label DSP for programmatic ad buying for Display, Video, Audio, Native, and CTV ads.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-8 font-semibold">
          Easy setup | Full control | Powerful performance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onGetStarted}
            className="btn-primary text-lg px-10 py-6 hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Start Your Free Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-500">No commitment required</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
