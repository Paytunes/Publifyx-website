import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const DigitalHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-primary via-purple-700 to-purple-900 text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Digital Advertising Platforms
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Connect with millions of listeners across India's top audio streaming platforms. 
            Data-driven campaigns with precise targeting and measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-purple-accent hover:bg-purple-accent/90 text-white font-semibold px-8 py-6 text-lg"
            >
              Get Platform Rates
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
            >
              Talk to an Expert
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              "10M+ Daily Users",
              "12K+ Pin Codes",
              "100+ Publishers",
              "Real-time Analytics"
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-accent flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalHeroSection;
