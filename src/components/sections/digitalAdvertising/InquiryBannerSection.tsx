import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const InquiryBannerSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-purple-primary to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Campaign?
            </h2>
            <p className="text-lg md:text-xl text-purple-100 mb-6 max-w-2xl">
              Get personalized recommendations and exclusive rates from our advertising experts. 
              We'll help you choose the perfect platforms for your target audience.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-purple-50">
                <span className="w-2 h-2 bg-purple-accent rounded-full"></span>
                Free campaign consultation
              </li>
              <li className="flex items-center gap-2 text-purple-50">
                <span className="w-2 h-2 bg-purple-accent rounded-full"></span>
                Transparent pricing & packages
              </li>
              <li className="flex items-center gap-2 text-purple-50">
                <span className="w-2 h-2 bg-purple-accent rounded-full"></span>
                Dedicated account manager
              </li>
            </ul>
            <Button 
              size="lg"
              className="bg-white text-purple-primary hover:bg-gray-100 font-semibold"
            >
              Plan My Campaign
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Data-Driven Results
              </h3>
              <p className="text-purple-100">
                Track impressions, engagement, and conversions in real-time with our advanced analytics dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryBannerSection;
