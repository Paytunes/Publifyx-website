import { useState, useEffect } from "react";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BannerHeroSectionProps {
  onGetStarted: () => void;
  onWatchDemo: () => void;
}

const BannerHeroSection = ({ onGetStarted, onWatchDemo }: BannerHeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingElements, setFloatingElements] = useState([
    { id: 1, x: 10, y: 10, delay: 0 },
    { id: 2, x: 80, y: 20, delay: 1000 },
    { id: 3, x: 20, y: 70, delay: 2000 },
    { id: 4, x: 90, y: 80, delay: 1500 },
  ]);

  useEffect(() => {
    setIsVisible(true);

    // Animate floating elements
    const interval = setInterval(() => {
      setFloatingElements((prev) =>
        prev.map((element) => ({
          ...element,
          y: element.y + (Math.random() - 0.5) * 2,
          x: element.x + (Math.random() - 0.5) * 1,
        })),
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-light via-white to-orange-50 relative overflow-hidden">
      {/* Floating Banner Elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-pulse"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}ms`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-16 h-10 bg-[#ff7200] rounded-lg shadow-lg flex items-center justify-center opacity-20">
            <span className="text-xs text-white font-bold">AD</span>
          </div>
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-[#ff7200] animate-pulse" />
              <span className="text-[#ff7200] font-semibold text-sm uppercase tracking-wide">
                High-Impact Advertising
              </span>
            </div>

            <h1 className="mb-6 text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              🚀 Amplify Your Brand with{" "}
              <span className="text-[#ff7200] relative">
                Effective Online Banner Advertising
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#ff7200] opacity-30 rounded"></div>
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Engage your audience instantly with PublifyX banner ads tailored for impact.
            </p>

            {/* Stats Preview */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">300% Avg ROI</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <Button
                onClick={onGetStarted}
                className="bg-[#ff7200] hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg group"
              >
                ✅ Get Started in 30 Seconds
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by 500+ brands worldwide</p>
              <div className="flex items-center space-x-4 opacity-60">
                <div className="px-3 py-1 bg-gray-100 rounded text-xs font-medium">Fortune 500</div>
                <div className="px-3 py-1 bg-gray-100 rounded text-xs font-medium">Startups</div>
                <div className="px-3 py-1 bg-gray-100 rounded text-xs font-medium">Agencies</div>
              </div>
            </div>
          </div>

          {/* Visual Mockup */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              {/* Main Device Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  {/* Website Header */}
                  <div className="h-12 bg-gray-100 rounded-lg flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-xs text-gray-500">www.high-traffic-site.com</div>
                  </div>

                  {/* Banner Ad Examples */}
                  <div className="space-y-3">
                    <div className="h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold animate-pulse">
                      Your Brand Here
                    </div>
                    <div className="h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-semibold">
                      Engaging Banner Ad
                    </div>
                    <div className="h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
                      Click-Worthy Content
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Metrics */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
                <span className="text-sm font-bold">+300% CTR</span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
                <span className="text-sm font-bold">Live Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHeroSection;
