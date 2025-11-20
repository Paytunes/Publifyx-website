const WhatAreDigitalAdsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          What are Digital Ads?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Digital ads are online advertisements shown on platforms like Google, Facebook, Instagram, and YouTube that help businesses reach their exact target customers based on location, interests, and behavior. Unlike traditional advertising, you can start with budgets as low as ₹5,000, see real-time results (clicks, sales, ROI), and pay only when people engage with your ad—making it the most cost-effective and measurable way to grow your business online.
            </p>
          </div>
          <div className="bg-muted/50 rounded-xl aspect-video flex items-center justify-center border-2 border-dashed border-border">
            <p className="text-muted-foreground text-center px-4">
              Illustrative image placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAreDigitalAdsSection;
