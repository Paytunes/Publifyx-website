const factors = [
  "Platform choice: LinkedIn costs 5x more than Facebook for similar reach",
  "Audience targeting: Narrow targeting (Mumbai CEOs aged 35-45) costs more than broad (India, 18-65)",
  "Competition: High-demand keywords and audiences have higher CPCs",
  "Ad quality: Better-performing ads get lower costs (Google/Meta reward relevance)",
  "Timing: Festival seasons (Diwali, New Year) see 30-50% cost increases",
  "Campaign objective: Brand awareness is cheapest, conversions cost 3-5x more"
];

const WhatAffectsCostSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Affects Your Digital Advertising Cost?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {factors.map((factor, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-700 leading-relaxed font-medium">{factor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAffectsCostSection;
