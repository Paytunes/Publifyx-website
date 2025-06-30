
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Monitor, Zap } from "lucide-react";

interface CTVBenefitsSectionProps {
  onGetStarted: () => void;
}

const CTVBenefitsSection = ({ onGetStarted }: CTVBenefitsSectionProps) => {
  const benefits = [
    {
      title: "Explosive Growth",
      description: "Smart TV adoption is exploding with more households choosing streaming over cable.",
      icon: TrendingUp
    },
    {
      title: "Engaged Viewers",
      description: "Get in front of engaged viewers on the biggest screen in the house when they're paying attention.",
      icon: Users
    },
    {
      title: "Premium Inventory",
      description: "Full-screen takeovers with zero distractions across OTT platforms like Hulu, SonyLIV, Hotstar.",
      icon: Monitor
    },
    {
      title: "Smarter Campaigns",
      description: "Run smarter, richer, and better-looking campaigns with Smart TV advertising.",
      icon: Zap
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-center">Why Advertise on Smart TVs in 2025?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3 flex-shrink-0">
                      <benefit.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 mb-6">
              Today is the perfect time for your brand to adapt Smart TV advertising. Expect your brands to run smarter, richer, and better-looking campaigns with Smart TV advertising with connected TV ads by PublifyX.
            </p>
            <Button 
              onClick={onGetStarted}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-lg"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTVBenefitsSection;
