import { useState, useEffect } from "react";
import { Rocket, ArrowRight, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BannerCTASectionProps {
  onGetStarted: () => void;
}

const BannerCTASection = ({ onGetStarted }: BannerCTASectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState([
    { id: 1, x: 10, y: 20, delay: 0 },
    { id: 2, x: 90, y: 30, delay: 500 },
    { id: 3, x: 20, y: 80, delay: 1000 },
    { id: 4, x: 80, y: 70, delay: 1500 },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("final-cta-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setAnimatedElements((prev) =>
          prev.map((element) => ({
            ...element,
            y: element.y + (Math.random() - 0.5) * 4,
            x: element.x + (Math.random() - 0.5) * 2,
          })),
        );
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      id="final-cta-section"
      className="py-16 md:py-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      {animatedElements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-pulse opacity-20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}ms`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Rocket className="w-6 h-6 text-[#ff7200]" />
          </div>
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Main Heading */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
              <span className="text-white font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              ✅ Ready to Maximize Your Reach?
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Start your first campaign with PublifyX today and join thousands of successful brands.
            </p>
          </div>

          {/* Main CTA Button */}
          <div className="mb-8">
            <Button
              onClick={onGetStarted}
              className="bg-white text-[#ff7200] hover:bg-gray-100 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-110 shadow-2xl group"
            >
              <Rocket className="mr-3 w-6 h-6 group-hover:animate-bounce" />
              Launch My Banner Ad Campaign
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm">4.9/5 Customer Rating</span>
            </div>

            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">Setup in Under 5 Minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="white"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default BannerCTASection;
