import { Button } from "@/components/ui/button";

const BookDigitalAdsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-gradient-to-br from-purple-primary to-purple-accent text-white rounded-2xl p-10 md:p-14">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Digital Ads Across 100+ Platforms in Minutes
            </h2>
            <p className="text-lg md:text-xl mb-6 opacity-95 leading-relaxed">
              Advertise on YouTube, Facebook, Instagram, Google, OTT platforms, and 100+ digital channels from one dashboard. Start at ₹5,000 for targeted campaigns with real-time tracking, expert campaign management, and transparent pricing.
            </p>
            <p className="text-xl font-semibold mb-8">
              No agencies taking 20% cuts. No confusing dashboards. Just measurable results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                Get Instant Quote
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 border-white text-white hover:bg-white/20">
                Call 080-37307893
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDigitalAdsSection;
