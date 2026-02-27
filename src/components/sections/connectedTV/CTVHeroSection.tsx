import { Button } from "@/components/ui/button";

interface CTVHeroSectionProps {
  onGetStarted: () => void;
}

const CTVHeroSection = ({ onGetStarted }: CTVHeroSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 max-w-4xl mx-auto text-white">PublifyX Connected TV advertising</h1>
          <h2 className="mb-8 max-w-3xl mx-auto text-xl md:text-2xl text-blue-100 font-medium">
            Your Brand Deserves Premium Attention with PublifyX Connected TV Advertising
          </h2>
          <Button
            onClick={onGetStarted}
            className="bg-[#ff7200] hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTVHeroSection;
