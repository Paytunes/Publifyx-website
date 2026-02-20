
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import GetStartedModal from "@/components/GetStartedModal";

const HeroSection = () => {
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/lovable-uploads/bef683a7-f8ef-4723-b8b6-270b4e10a7c0.png"
                alt="Young woman using phone – digital advertising concept"
                className="w-full h-auto rounded-lg shadow-lg"
                width={584}
                height={721}
                fetchPriority="high"
                decoding="sync"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h1 className="mb-6">
                PublifyX – AI-Powered Ad-Tech Platform for High-Performance Digital Campaigns
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
              <Button 
                onClick={() => setIsGetStartedModalOpen(true)}
                className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Get Your White Label DSP
              </Button>
            </div>
          </div>
        </div>
      </section>

      <GetStartedModal 
        isOpen={isGetStartedModalOpen} 
        onClose={() => setIsGetStartedModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;
