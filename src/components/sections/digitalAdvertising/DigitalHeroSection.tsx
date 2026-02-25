import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Target, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-primary via-purple-600 to-purple-700 text-white pt-16 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Digital Advertising<br />
            That Delivers Results
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-purple-50 leading-relaxed max-w-2xl">
            Reach millions of engaged users across India's top digital platforms. 
            Launch targeted campaigns with real-time analytics and measurable ROI.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-purple-primary hover:bg-gray-100 font-bold px-10 py-7 text-lg h-auto shadow-lg"
              >
                Get Platform Rates
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-bold px-10 py-7 text-lg h-auto"
              >
                Talk to an Expert
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              { icon: TrendingUp, text: "10M+ Daily Users" },
              { icon: Target, text: "12K+ Pin Codes" },
              { icon: BarChart, text: "300+ Publishers" },
              { icon: CheckCircle2, text: "Real-time Analytics" }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <feature.icon className="w-6 h-6 text-purple-200 flex-shrink-0 mt-0.5" />
                <span className="text-base font-semibold leading-tight">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default DigitalHeroSection;
