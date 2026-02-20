import { useEffect, useState } from "react";
import { BarChart3, Zap, Headphones } from "lucide-react";

const BannerFeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Track and assess the effectiveness of your ads continuously with robust, real-time analytics. Get instant insights to refine strategies and match evolving customer behaviors.",
      mockup: "📊 Live Dashboard",
      color: "bg-blue-500",
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description:
        "Integrate with various digital channels to ensure your banner ads achieve broad visibility across multiple platforms and maximize your reach.",
      mockup: "🔌 Multi-Platform",
      color: "bg-green-500",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist with any queries and ensure you leverage our tools to their fullest potential.",
      mockup: "👥 Support Team",
      color: "bg-orange-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("features-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">PublifyX's Exclusive Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PublifyX distinguishes itself in the banner advertising landscape with exclusive features designed to
            optimize your campaigns and maximize impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Feature Cards */}
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isSelected = index === selectedFeature;

              return (
                <div
                  key={index}
                  className={`
                    p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300
                    ${
                      isSelected
                        ? "border-orange-500 bg-orange-50 shadow-lg transform scale-105"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                    }
                  `}
                  onClick={() => setSelectedFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-sm text-[#ff7200] font-semibold">{feature.mockup}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Feature Visualization */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              {/* Main Feature Display */}
              <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{features[selectedFeature].title}</h3>
                  <div className="text-4xl mb-4">{features[selectedFeature].mockup}</div>
                </div>

                {/* Mock Dashboard/Interface */}
                <div className="space-y-4">
                  {selectedFeature === 0 && (
                    // Analytics Dashboard
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Impressions</span>
                        <span className="font-bold text-blue-500">1.2M</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: "75%" }}></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Click Rate</span>
                        <span className="font-bold text-green-500">4.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                  )}

                  {selectedFeature === 1 && (
                    // Integration Platforms
                    <div className="flex justify-center items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                        FB
                      </div>
                      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                        G
                      </div>
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                        IG
                      </div>
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                        WA
                      </div>
                    </div>
                  )}

                  {selectedFeature === 2 && (
                    // Support Interface
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                        <div className="flex-1 bg-orange-100 rounded-lg p-3 text-sm">How can I help you today?</div>
                      </div>
                      <div className="flex items-center space-x-3 justify-end">
                        <div className="flex-1 bg-gray-100 rounded-lg p-3 text-sm text-right">
                          I need help with my campaign setup
                        </div>
                        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-3 py-2 rounded-full shadow-lg animate-bounce">
                <span className="text-xs font-bold">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFeaturesSection;
