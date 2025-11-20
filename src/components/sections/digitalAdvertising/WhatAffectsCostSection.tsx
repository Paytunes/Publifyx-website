const factors = [
  {
    title: "Platform choice",
    description: "LinkedIn costs 5x more than Facebook for similar reach"
  },
  {
    title: "Audience targeting",
    description: "Narrow targeting (Mumbai CEOs aged 35-45) costs more than broad (India, 18-65)"
  },
  {
    title: "Competition",
    description: "High-demand keywords and audiences have higher CPCs"
  },
  {
    title: "Ad quality",
    description: "Better-performing ads get lower costs (Google/Meta reward relevance)"
  },
  {
    title: "Timing",
    description: "Festival seasons (Diwali, New Year) see 30-50% cost increases"
  },
  {
    title: "Campaign objective",
    description: "Brand awareness is cheapest, conversions cost 3-5x more"
  }
];

const WhatAffectsCostSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Affects Your Digital Advertising Cost?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factors.map((factor, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {factor.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAffectsCostSection;
