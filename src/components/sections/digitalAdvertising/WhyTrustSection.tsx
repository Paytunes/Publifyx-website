import { Check } from "lucide-react";

const benefits = [
  "Access 100+ platforms in one place—Google, Meta, YouTube, OTT, news apps, e-commerce",
  "Save 15-30% on ad spend with pre-negotiated rates and expert optimization",
  "Real-time performance tracking with transparent dashboards showing every rupee spent",
  "Campaign setup in 24 hours with dedicated media planners handling the technical stuff",
  "Data-driven results – we optimize based on what's working, not guesswork",
  "Trusted by: Startups to enterprises across BFSI, e-commerce, real estate, education, and tech sectors"
];

const WhyTrustSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why 8,000+ Businesses Trust Publifyx for Digital Advertising
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 bg-muted/30 p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <p className="text-foreground leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustSection;
