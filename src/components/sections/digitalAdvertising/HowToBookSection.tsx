const steps = [
  {
    step: "Step 1: Tell Us Your Goals",
    content: [
      "Visit themediaant.com or call 080-37307893",
      "Share three things:",
      "• What do you want? (leads, sales, awareness, app installs)",
      "• Who's your target audience?",
      "• What's your budget?",
      "Free strategy session included—we'll recommend the optimal platform mix."
    ]
  },
  {
    step: "Step 2: We Build Your Campaign Strategy",
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
    step: "Step 3: Campaign Launch & Tracking",
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
    step: "Step 4: Ongoing Optimization",
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
    step: "Step 5: Scale What Works",
    content: [
      "Found a winning formula? We help you:",
      "• 2x-5x your budget profitably",
      "• Expand to new platforms",
      "• Test new markets/audiences",
      "• Build retargeting funnels",
      "dedicated campaign manager is available via call, WhatsApp, or email throughout."
    ]
  }
];

const HowToBookSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Book Digital Ads with The Media Ant?
          </h2>
          <p className="text-xl text-gray-600">
            Launch your campaign in 24-48 hours. We handle the technical complexity.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-purple-primary mb-4">
                {item.step}
              </h3>
              <div className="space-y-2">
                {item.content.map((line, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed">
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
