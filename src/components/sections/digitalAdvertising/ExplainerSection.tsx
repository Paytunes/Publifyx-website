import { Target, BarChart3, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach your ideal audience with advanced demographic, geographic, and behavioral targeting. Target by age, gender, location, interests, device type, and listening habits for maximum campaign effectiveness."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor your campaign performance with comprehensive dashboards showing impressions, click-through rates, conversions, and engagement metrics. Make data-driven decisions to optimize your advertising spend."
  },
  {
    icon: Users,
    title: "Massive Reach",
    description: "Access over 10 million daily active users across India's top digital platforms. From metro cities to tier 2 and tier 3 towns, reach listeners across 12,000+ pin codes nationwide."
  },
  {
    icon: Zap,
    title: "Quick Launch",
    description: "Launch campaigns in as little as 48 hours. Our streamlined process handles everything from creative approval to platform integration, so you can start seeing results faster."
  }
];

const ExplainerSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Digital Advertising?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Digital advertising combines the power of targeted reach with measurable results, 
            delivering exceptional ROI for brands of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-primary hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-5 group-hover:bg-purple-primary transition-colors">
                  <Icon className="w-7 h-7 text-purple-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-10 md:p-14 border border-gray-200 shadow-sm">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            How Digital Advertising Works
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Understanding the Medium
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Digital audio advertising delivers promotional messages through streaming music services, podcasts, 
                and internet radio platforms. Unlike traditional radio, digital audio offers sophisticated targeting 
                capabilities, allowing advertisers to reach specific demographics and track campaign performance in real-time.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Campaign Types & Formats
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Choose from various ad formats to match your campaign objectives:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-purple-accent font-bold mt-1">•</span>
                  <span><strong>Audio Spots:</strong> 15-30 second audio advertisements that play between songs or podcast content</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-purple-accent font-bold mt-1">•</span>
                  <span><strong>Display Companion:</strong> Visual banners that accompany audio ads on mobile and desktop apps</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-purple-accent font-bold mt-1">•</span>
                  <span><strong>Video Ads:</strong> Short video advertisements for platforms supporting video content</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-purple-accent font-bold mt-1">•</span>
                  <span><strong>Sponsored Sessions:</strong> Brand takeovers offering ad-free listening for a set period</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Targeting Capabilities
              </h4>
              <p className="text-gray-600 leading-relaxed">
                PublifyX's platform enables precise audience targeting based on demographics (age, gender, income), 
                geography (country, state, city, pin code), device type (mobile, desktop, smart speakers), 
                listening behavior, time of day, content genre preferences, and more. This ensures your message 
                reaches the right people at the right time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplainerSection;
