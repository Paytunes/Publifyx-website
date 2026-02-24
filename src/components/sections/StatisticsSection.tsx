import { motion } from "framer-motion";

const stats = [
  { value: "12K+", label: "Pin Codes", description: "Hyper-local targeting" },
  { value: "100+", label: "Publishers", description: "Premium inventory" },
  { value: "10M+", label: "Daily Audience", description: "Active users reached" },
  { value: "10M+", label: "Ad Requests", description: "Processed daily" },
];

const StatisticsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            Platform Reach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Reach the Right Audience
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-8 rounded-2xl bg-navy-50 border border-navy-100 hover:border-brand-orange-200 transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-2 font-display">
                {stat.value}
              </div>
              <div className="text-brand-orange-500 font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-navy-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
