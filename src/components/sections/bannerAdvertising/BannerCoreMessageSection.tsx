import { useEffect, useState } from "react";
import { Eye, Users, BarChart3, Target } from "lucide-react";

const BannerCoreMessageSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("core-message-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="core-message-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Main Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Transform Your Brand Visibility with
                <span className="text-orange-500"> Strategic Banner Advertising</span>
              </h2>

              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Take advantage of online banner ads with PublifyX, a platform designed to increase your brand's
                  visibility and reach. Online banner advertising is an effective way to capture the attention of
                  potential customers by visually promoting your products or services across a variety of online
                  platforms.
                </p>

                <p>
                  By placing eye-catching ads on high-traffic websites, PublifyX helps your business gain more exposure
                  and recognition. Our platform simplifies the process of targeting the right audience, ensuring that
                  your messaging aligns with consumer interests and preferences.
                </p>

                <p>
                  Join numerous successful brands that have leveraged PublifyX's innovative features to boost their
                  online presence and engage their target market effectively.
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-sm text-gray-600">Active Brands</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-500 mb-2">2M+</div>
                <div className="text-sm text-gray-600">Daily Impressions</div>
              </div>
            </div>
          </div>

          {/* Why Choose PublifyX */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                Why Choose PublifyX for Banner Advertising?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Advanced Targeting</h4>
                    <p className="text-gray-600 text-sm">
                      Segment your audience based on demographics, behavior, and interests for maximum impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Detailed Analytics</h4>
                    <p className="text-gray-600 text-sm">
                      Measure campaign impact with comprehensive analytics and make data-driven decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Scalable Solutions</h4>
                    <p className="text-gray-600 text-sm">
                      Flexible solutions that grow with your business, serving brands of all sizes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 p-3 rounded-lg">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">High-Quality Ads</h4>
                    <p className="text-gray-600 text-sm">
                      Deliver targeted ads that reach the right audience at the perfect moment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCoreMessageSection;
