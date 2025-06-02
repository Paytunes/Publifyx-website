
const StatisticsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-6 text-white">Target Audience without wasting resources</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-600 p-8 rounded-lg text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">12K+</div>
            <div className="text-blue-100 text-lg">Pincode</div>
          </div>

          <div className="bg-blue-600 p-8 rounded-lg text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
            <div className="text-blue-100 text-lg">Publisher</div>
          </div>

          <div className="bg-blue-600 p-8 rounded-lg text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">10M+</div>
            <div className="text-blue-100 text-lg">Audience</div>
          </div>

          <div className="bg-blue-600 p-8 rounded-lg text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">10M+</div>
            <div className="text-blue-100 text-lg">Request</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
