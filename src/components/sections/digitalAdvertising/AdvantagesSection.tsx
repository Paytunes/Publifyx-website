const advantages = [
  {
    title: "Budget-flexible & scalable",
    description: "Start at ₹5,000 and scale instantly based on results, no massive upfront commitment"
  },
  {
    title: "Precision targeting",
    description: "Reach only your ideal customers by age, location, interests, behavior + retarget website visitors at 75% lower cost"
  },
  {
    title: "Real-time tracking & optimization",
    description: "See clicks, conversions, and ROI instantly; change underperforming ads in minutes, not months"
  },
  {
    title: "Multiple formats & A/B testing",
    description: "Test videos, carousels, stories across audiences; double down on what works"
  },
  {
    title: "Superior ROI",
    description: "₹7-12 CPM on Meta vs. ₹50-100 on traditional media, with direct links to product pages and booking forms"
  },
  {
    title: "Pan-India reach with local control",
    description: "Target one city or entire country from the same dashboard, adjust by geography instantly"
  }
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What are the Advantages of Digital Advertising?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-primary hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
