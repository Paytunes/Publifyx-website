
import { Button } from "@/components/ui/button";

interface CTVExplanationSectionProps {
  onGetStarted: () => void;
}

const CTVExplanationSection = ({ onGetStarted }: CTVExplanationSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">What is Connected TV Advertising?</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Connected TV (CTV) advertising lets your brand show video ads on internet-enabled TVs—think Smart TVs, Roku, Fire TV, Apple TV, even gaming consoles.
            </p>
            <p>
              Unlike traditional cable ads that interrupt random content, CTV ads appear within on-demand, high-quality, and premium environments—exactly where today's viewer is.
            </p>
            <p>
              Advertisers can easily target real people and will be able to track real results, which is something you don't get with traditional cable advertising.
            </p>
          </div>
          <div className="text-center mt-8">
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
