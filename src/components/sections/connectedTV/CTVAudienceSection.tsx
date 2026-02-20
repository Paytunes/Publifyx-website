
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ShoppingBag, MapPin, CheckCircle } from "lucide-react";

interface CTVAudienceSectionProps {
  onGetStarted: () => void;
}

const CTVAudienceSection = ({ onGetStarted }: CTVAudienceSectionProps) => {
  const audiences = [
    {
      title: "Ad Agencies",
      description: "running brand campaigns across channels",
      icon: Building2
    },
    {
      title: "D2C Brands",
      description: "looking for scalable reach + performance",
      icon: ShoppingBag
    },
    {
      title: "Local Businesses",
      description: "targeting specific zip codes or cities",
      icon: MapPin
    }
  ];

  const useCases = [
    "Building brand awareness with full-screen video",
    "Running geo-targeted seasonal promotions", 
    "Retargeting users who visited your website, right on their TV"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-6">Who Should Use Connected TV Advertise & Key Use Cases</h2>
          <p className="text-lg text-gray-700">Connected TV is made for:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {audiences.map((audience, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <audience.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{audience.title}</h3>
                <p className="text-gray-600">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto mb-8">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Key Use Cases Include:</h3>
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{useCase}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            No more spraying and praying—CTV helps you land exactly where it matters.
          </p>
          <Button 
            onClick={onGetStarted}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-lg"
          >
            Let's Talk Strategy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTVAudienceSection;
