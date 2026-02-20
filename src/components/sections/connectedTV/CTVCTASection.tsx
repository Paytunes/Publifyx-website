import { Button } from "@/components/ui/button";

interface CTVCTASectionProps {
  onGetStarted: () => void;
}

const CTVCTASection = ({ onGetStarted }: CTVCTASectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-6 text-white">Stop Wasting Budgets on Invisible Ads. Your customers are on Smart TVs.</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's meet them there—with ads they can't ignore.
          </p>
          <Button
            onClick={onGetStarted}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-lg"
          >
            Book a Demo to Launch Your Smart TV Campaign
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTVCTASection;
