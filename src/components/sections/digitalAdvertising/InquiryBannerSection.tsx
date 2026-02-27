import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles, BarChart3 } from "lucide-react";

const InquiryBannerSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-primary via-purple-600 to-purple-700">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Launch Your<br />Digital Campaign?
            </h2>
            
            <p className="text-xl text-purple-50 mb-8 leading-relaxed">
              Get personalized recommendations and exclusive rates from our digital advertising experts. 
              We'll help you choose the perfect platforms for your target audience.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Free campaign strategy consultation",
                "Transparent pricing & custom packages",
                "Dedicated account manager & support",
                "Real-time campaign analytics dashboard"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <CheckCircle className="w-6 h-6 text-purple-200 flex-shrink-0" />
                  <span className="text-purple-50">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-white text-purple-primary hover:bg-gray-100 font-bold px-8 py-6 text-lg h-auto shadow-lg"
              >
                Plan My Campaign
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg h-auto"
              >
                View Pricing
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BarChart3 className="w-10 h-10 text-purple-primary" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Data-Driven Results
                </h3>
                <p className="text-purple-100 text-lg leading-relaxed">
                  Track impressions, engagement, and conversions in real-time with our advanced analytics dashboard
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-purple-100">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-purple-100">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">10M+</div>
                  <div className="text-sm text-purple-100">Reach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryBannerSection;
