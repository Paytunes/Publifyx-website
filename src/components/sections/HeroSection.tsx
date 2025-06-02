
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/lovable-uploads/bef683a7-f8ef-4723-b8b6-270b4e10a7c0.png"
              alt="Digital Advertising Solutions"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h1 className="mb-6">
              Publifyx pioneers innovative Ad-Tech solutions, transforming the digital advertising realm.
            </h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-lg text-gray-700">Leveraging AI for seamless, cost-effective audio and video creativity solutions.</span>
              </div>
              <div className="flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-lg text-gray-700">Simplify advertising with pre-packaged OTT as well as white-labeled DSP solutions.</span>
              </div>
              <div className="flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-lg text-gray-700">Empowering businesses to maximize ROI by optimizing ad completion rates and campaign performance</span>
              </div>
            </div>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
