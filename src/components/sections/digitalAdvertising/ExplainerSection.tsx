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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Digital Audio Advertising?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Digital audio advertising combines the emotional impact of audio storytelling with the precision 
            of digital targeting, delivering measurable results for brands of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex gap-4 p-6 rounded-xl border border-gray-200 hover:border-purple-accent hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How Digital Audio Advertising Works
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
