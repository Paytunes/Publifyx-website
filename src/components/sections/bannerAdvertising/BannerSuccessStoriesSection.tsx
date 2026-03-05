import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BannerSuccessStoriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);

  const successStories = [
    {
      industry: "Retail Sector",
      company: "Fashion Forward Co.",
      result: "30% increase in web traffic",
      timeframe: "first month",
      description:
        "A leading retail brand witnessed significant growth in brand awareness and engagement through tailored campaigns that captured their brand essence while reaching the desired audience.",
      metrics: {
        traffic: "+30%",
        conversion: "+25%",
        roi: "400%",
      },
      color: "from-blue-500 to-purple-500",
    },
    {
      industry: "Tech Startup",
      company: "InnovateTech Solutions",
      result: "Substantial boost in lead generation",
      timeframe: "product launch",
      description:
        "A tech startup successfully launched a new product, observing remarkable improvements in customer acquisition through our targeted advertising approach and strategic banner placement.",
      metrics: {
        leads: "+180%",
        signups: "+90%",
        roi: "350%",
      },
      color: "from-green-500 to-teal-500",
    },
    {
      industry: "Healthcare",
      company: "MedCare Plus",
      result: "45% improvement in patient acquisition",
      timeframe: "6 months",
      description:
        "A healthcare provider transformed their patient outreach strategy, achieving unprecedented growth in patient consultations and appointment bookings through targeted banner campaigns.",
      metrics: {
        patients: "+45%",
        appointments: "+60%",
        roi: "280%",
      },
      color: "from-orange-500 to-red-500",
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

    const element = document.getElementById("success-stories-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentStory((prev) => (prev + 1) % successStories.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, successStories.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const currentStoryData = successStories[currentStory];

  return (
    <section id="success-stories-section" className="py-16 md:py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Success Stories with PublifyX</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PublifyX has played a pivotal role in transforming the digital marketing strategies of numerous businesses
            through advanced banner advertising solutions.
          </p>
        </div>

        <div className="relative">
          {/* Main Story Display */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Story Content */}
              <div className="space-y-8">
                <div>
                  <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                    {currentStoryData.industry}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{currentStoryData.company}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{currentStoryData.description}</p>
                  <div className="flex items-center space-x-4 text-[#ff7200] font-semibold">
                    <TrendingUp className="w-5 h-5" />
                    <span>
                      {currentStoryData.result} in {currentStoryData.timeframe}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(currentStoryData.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-white rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-[#ff7200] mb-1">{value}</div>
                      <div className="text-sm text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Representation */}
              <div className="relative">
                <div
                  className={`bg-gradient-to-br ${currentStoryData.color} rounded-2xl p-8 text-white shadow-2xl transform transition-all duration-500`}
                >
                  <div className="text-center mb-8">
                    <div className="text-4xl mb-4">📈</div>
                    <h4 className="text-xl font-bold mb-2 text-white">Campaign Results</h4>
                    <p className="opacity-90">{currentStoryData.industry}</p>
                  </div>

                  {/* Animated Chart */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Before PublifyX</span>
                      <div className="w-24 h-2 bg-white/30 rounded"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>After PublifyX</span>
                      <div className="w-24 h-2 bg-white rounded relative overflow-hidden">
                        <div className="absolute inset-0 bg-yellow-300 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-sm italic">
                      "PublifyX transformed our advertising strategy and delivered results beyond our expectations."
                    </p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-green-700 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
                  <span className="text-sm font-bold">Success</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <Button
              onClick={prevStory}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-orange-50 hover:border-orange-500"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
            {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  aria-label={`Go to story ${index + 1}`}
                  aria-current={index === currentStory ? "true" : undefined}
                  className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500`}
                >
                  <span className={`block rounded-full transition-all duration-300 ${
                    index === currentStory ? "bg-[#ff7200] w-8 h-3" : "bg-gray-300 w-3 h-3"
                  }`} />
                </button>
              ))}
            </div>

            <Button
              onClick={nextStory}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-orange-50 hover:border-orange-500"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#ff7200] mb-2">500+</div>
                <div className="text-gray-600">Successful Campaigns</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500 mb-2">300%</div>
                <div className="text-gray-600">Average ROI Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSuccessStoriesSection;
