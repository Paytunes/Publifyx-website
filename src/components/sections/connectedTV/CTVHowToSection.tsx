import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, MonitorPlay, Upload, BarChart3 } from "lucide-react";

interface CTVHowToSectionProps {
  onGetStarted: () => void;
}

const CTVHowToSection = ({ onGetStarted }: CTVHowToSectionProps) => {
  const steps = [
    {
      title: "Define Your Audience",
      description: "Choose who sees your ads—based on age, location, interests, and even viewing habits.",
      icon: Target,
    },
    {
      title: "Pick the Right Platforms",
      description: "Select from top OTT platforms and apps where your audience hangs out.",
      icon: MonitorPlay,
    },
    {
      title: "Upload Your Creatives",
      description: "Use your existing video assets or create new high-impact creatives for CTV.",
      icon: Upload,
    },
    {
      title: "Measure & Optimize",
      description: "Get detailed insights—impressions, views, completions, even retarget across mobile and desktop.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-6">How to Advertise on Connected TV</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            If you're wondering how to advertise on connected TV, PublifyX has made it really simple for you:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">No guesswork. Just smart advertising that performs.</p>
          <Button
            onClick={onGetStarted}
            className="bg-[#ff7200] hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-lg"
          >
            Launch a Campaign
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTVHowToSection;
