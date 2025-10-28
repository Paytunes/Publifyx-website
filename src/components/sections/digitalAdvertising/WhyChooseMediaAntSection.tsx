const reasons = [
  {
    title: "1. Better ROI Through Expert Optimization",
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
    title: "8. Strategy Included Free",
    description: "Free campaign planning, creative development, and media mix recommendations (worth ₹15,000)—included with every campaign."
  }
];

const WhyChooseMediaAntSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose The Media Ant for Digital Advertising?
          </h2>
        </div>

        <div className="space-y-6 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-primary hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-purple-primary mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-primary to-purple-accent text-white rounded-2xl p-10 text-center">
          <p className="text-2xl font-bold mb-4">
            The bottom line: You get agency expertise without agency headaches—better results, transparent reporting, and dedicated support at every step.
          </p>
          <p className="text-xl mb-6">
            No lock-ins. No hidden costs. Just performance-driven campaigns that deliver measurable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMediaAntSection;
