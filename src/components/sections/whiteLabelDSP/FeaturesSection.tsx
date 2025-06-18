
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Sparkles, ChevronRight, Star, Shield, Rocket } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Real-time bidding engine",
      description: "Advanced RTB technology for optimal performance",
      icon: Zap
    },
    {
      title: "Self-serve and managed campaign modes", 
      description: "Flexible campaign management options",
      icon: Target
    },
    {
      title: "Customizable UI",
      description: "Complete white-label customization",
      icon: Sparkles
    },
    {
      title: "Advanced targeting tools",
      description: "Precision targeting with detailed analytics",
      icon: ChevronRight
    },
    {
      title: "Multi-Format Support: Display, Video, Audio, Native, CTV",
      description: "Comprehensive ad format coverage",
      icon: Star
    },
    {
      title: "API access for integrations",
      description: "Complete API access for custom integrations",
      icon: Shield
    },
    {
      title: "Instantly Scalable without Hiring a Full Dev Team",
      description: "No code. No team. Just launch.",
      icon: Sparkles
    },
    {
      title: "24/7 tech support and onboarding",
      description: "Full support and seamless onboarding",
      icon: Rocket
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Features
          </div>
          <h2 className="mb-6 max-w-4xl mx-auto text-4xl md:text-5xl font-bold text-gray-900">
            Features You'll Love
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white hover:scale-105 overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="text-white" size={20} />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight flex-grow-0">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
