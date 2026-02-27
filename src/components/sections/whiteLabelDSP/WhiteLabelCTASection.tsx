
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface WhiteLabelCTASectionProps {
  onGetStarted: () => void;
}

const WhiteLabelCTASection = ({ onGetStarted }: WhiteLabelCTASectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="mb-6 text-white text-4xl md:text-6xl font-bold">
          Ready to Launch Your DSP?
        </h2>
        <p className="text-xl md:text-2xl mb-4 text-orange-100 leading-relaxed font-medium">
          Why wait months and spend thousands when you can launch your white label DSP for programmatic ad buying this week?
        </p>
        <p className="text-lg md:text-xl mb-10 text-orange-200 font-semibold">
          Zero coding | Full control | Enterprise-grade tools
        </p>
        <Button 
          onClick={onGetStarted}
          className="bg-white text-orange-600 hover:bg-gray-100 text-lg md:text-xl px-12 py-6 font-bold hover:scale-105 transition-all duration-300 shadow-2xl rounded-2xl"
        >
          Book Your Free Demo Now
          <ArrowRight className="ml-3 w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default WhiteLabelCTASection;
