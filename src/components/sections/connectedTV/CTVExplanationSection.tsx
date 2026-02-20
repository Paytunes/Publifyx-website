
import { Button } from "@/components/ui/button";
import { Tv, Target, BarChart3 } from "lucide-react";

interface CTVExplanationSectionProps {
  onGetStarted: () => void;
}

const CTVExplanationSection = ({ onGetStarted }: CTVExplanationSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-center">What is Connected TV Advertising?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Smart TV Reach</h3>
              <p className="text-gray-600">
                Connected TV (CTV) advertising lets your brand show video ads on internet-enabled TVs—think Smart TVs, Roku, Fire TV, Apple TV, even gaming consoles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Premium Placement</h3>
              <p className="text-gray-600">
                Unlike traditional cable ads that interrupt random content, CTV ads appear within on-demand, high-quality, and premium environments—exactly where today's viewer is.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Real Results</h3>
              <p className="text-gray-600">
                Advertisers can easily target real people and will be able to track real results, which is something you don't get with traditional cable advertising.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={onGetStarted}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-lg"
            >
              Book Your Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTVExplanationSection;
