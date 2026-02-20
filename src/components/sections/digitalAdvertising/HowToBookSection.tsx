const steps = [
  {
    number: "1",
    title: "Share Your Goals",
    content: [
      "Visit [website] or call [phone number]",
      "Share three things:",
      "• What do you want? (leads, sales, awareness, app installs)",
      "• Who's your target audience?",
      "• What's your budget?",
      "Free strategy session included—we'll recommend the optimal platform mix."
    ]
  },
  {
    number: "2",
    title: "Get a Custom Campaign Strategy",
    content: [
      "Our media planners create a custom plan showing:",
      "• Which platforms to use (Google, Meta, YouTube, etc.)",
      "• Budget allocation across channels",
      "• Expected reach and conversions",
      "• Creative requirements",
      "You approve before we spend a rupee."
    ]
  },
  {
    number: "3",
    title: "Campaign Setup & Real-Time Tracking",
    content: [
      "We set up:",
      "• Pixel tracking on your website",
      "• Conversion goals (form fills, purchases, calls)",
      "• Custom dashboards showing real-time performance",
      "• A/B tests for continuous optimization",
      "You get login access to see live data 24/7—clicks, impressions, conversions, cost per lead."
    ]
  },
  {
    number: "4",
    title: "Continuous Optimization",
    content: [
      "We don't just launch and forget.",
      "Weekly actions we take:",
      "• Pause underperforming ads",
      "• Increase budget on winning campaigns",
      "• Test new audiences and creatives",
      "• Adjust bids based on performance",
      "• Share detailed reports with insights",
      "Average improvement: 30-50% better results after 4 weeks of optimization"
    ]
  },
  {
    number: "5",
    title: "Scale and Expand",
    content: [
      "Found a winning formula? We help you:",
      "• 2x-5x your budget profitably",
      "• Expand to new platforms",
      "• Test new markets/audiences",
      "• Build retargeting funnels",
      "Your dedicated campaign manager is available via call, WhatsApp, or email throughout."
    ]
  }
];

const HowToBookSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How to Book Digital Ads with PublifyX
          </h2>
          <p className="text-xl text-muted-foreground">
            Launch your campaign in 24-48 hours. We handle the technical complexity.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">{item.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground pt-2">
                  {item.title}
                </h3>
              </div>
              <div className="space-y-2 ml-16">
                {item.content.map((line, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBookSection;
