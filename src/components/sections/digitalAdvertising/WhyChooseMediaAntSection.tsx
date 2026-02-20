import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const reasons = [
  {
    title: "1. Better ROI with Proven Expertise",
    description: "We've managed ₹50+ crore in ad spend. Our campaigns deliver 20-30% lower cost per lead than DIY efforts—saving you money while getting more results."
  },
  {
    title: "2. 100% Transparent Tracking",
    description: "Real-time dashboards show exactly where every rupee goes—impressions, clicks, conversions, cost per lead. No black boxes, just clear data you can see 24/7."
  },
  {
    title: "3. 100+ Platforms, One Dashboard",
    description: "Google, Meta, YouTube, OTT, LinkedIn—we manage everything. No juggling multiple agencies or logins. Coordinated strategy across all channels."
  },
  {
    title: "4. Launch in 24-48 Hours",
    description: "Most agencies take weeks. We get campaigns live in 2 days with dedicated managers handling all technical setup and optimization."
  },
  {
    title: "5. Dedicated Support, Not Ticket Queues",
    description: "Every client gets a dedicated campaign manager—direct phone/WhatsApp access, weekly reviews, priority responses under 2 hours."
  },
  {
    title: "6. Continuous Optimization",
    description: "We don't launch and forget. Weekly tweaks to pause losers, scale winners, test new audiences—most clients see 30-50% improvement after 4 weeks."
  },
  {
    title: "7. No Long-Term Contracts",
    description: "Month-to-month engagements. Clients stay for results, not because they're locked in. Pause or stop with 7 days notice."
  },
  {
    title: "8. Free Strategy & Creative Planning",
    description: "Free campaign planning, creative development, and media mix recommendations (worth ₹15,000)—included with every campaign."
  }
];

const WhyChooseMediaAntSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose PublifyX for Digital Advertising?
          </h2>
        </div>

        <div className="space-y-0 mb-12">
          {reasons.map((reason, index) => (
            <div key={index}>
              <div className="bg-card p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
              {index < reasons.length - 1 && (
                <Separator className="my-6" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            The Bottom Line
          </h2>
          
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-10">
            <p className="text-2xl font-bold mb-4 text-center">
              You get agency expertise without agency headaches—better results, transparent reporting, and dedicated support at every step.
            </p>
            <p className="text-xl mb-8 text-center">
              No lock-ins. No hidden costs. Just performance-driven campaigns that deliver measurable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <Button size="lg" className="w-full sm:w-auto font-semibold bg-white text-gray-900 hover:bg-gray-100 border border-gray-200">
                Start Your Campaign with PublifyX
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold bg-background/10 hover:bg-background/20 border-primary-foreground/30 text-primary-foreground hover:text-primary-foreground">
                Schedule a Free Consultation
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 text-primary-foreground">
              <a href="tel:+918448330304" className="flex items-center gap-2 hover:underline">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Call: +91-8448330304</span>
              </a>
              <span className="hidden sm:inline text-primary-foreground/50">|</span>
              <a href="mailto:info@publifyx.com" className="flex items-center gap-2 hover:underline">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Email: info@publifyx.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMediaAntSection;
