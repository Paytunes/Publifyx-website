
import { Button } from "@/components/ui/button";

interface CTVBenefitsSectionProps {
  onGetStarted: () => void;
}

const CTVBenefitsSection = ({ onGetStarted }: CTVBenefitsSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Why Advertise on Smart TVs in 2025?</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Smart TV adoption is exploding with more households are choosing streaming over cable.
            </p>
            <p>
              Today is the perfect time for your brand to adapt Smart TV advertising. It helps you get in front of engaged viewers—on the biggest screen in the house—right when they're paying the most attention.
            </p>
            <p>
              And unlike other digital platforms, your advertisement will enjoy full-screen takeovers, zero scroll distractions, and premium inventory across OTT platforms like Hulu, SonyLIV, Hotstar, and more.
            </p>
            <p>
              Expect your brands to run smarter, richer, and better-looking campaigns with Smart TV advertising with connected TV ads by PublifyX.
            </p>
          </div>
          <div className="text-center mt-8">
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
