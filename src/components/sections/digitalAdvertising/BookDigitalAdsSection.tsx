import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const BookDigitalAdsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-gradient-to-br from-purple-primary to-purple-accent text-white rounded-2xl p-10 md:p-14">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Digital Ads Across 100+ Platforms in Minutes
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg md:text-xl opacity-95 leading-relaxed">
                Advertise on YouTube, Facebook, Instagram, Google, OTT platforms, and 100+ digital channels from one integrated Publifyx dashboard.
              </p>
              <p className="text-lg md:text-xl opacity-95 leading-relaxed">
                Start at ₹5,000 for targeted, real-time campaigns with transparent pricing and expert optimization.
              </p>
              <p className="text-lg md:text-xl font-semibold opacity-95 leading-relaxed">
                No agencies taking 20% cuts. No complicated dashboards. Just measurable, growth-driven results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8">
                Start Your Campaign with Publifyx
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 border-white text-white hover:bg-white/20">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us: +91-XXXXXXXXXX
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 border-white text-white hover:bg-white/20">
                <Mail className="w-5 h-5 mr-2" />
                Email: info@publifyx.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDigitalAdsSection;
