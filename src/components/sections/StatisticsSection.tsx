import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 12000, suffix: "+", label: "Pin Codes", description: "Hyper-local targeting" },
  { value: 100, suffix: "+", label: "Publishers", description: "Premium inventory" },
  { value: 10, suffix: "M+", label: "Daily Audience", description: "Active users reached" },
  { value: 10, suffix: "M+", label: "Ad Requests", description: "Processed daily" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  const display = target >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}K` : count.toString();

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-2 font-display">
      {display}
      {suffix}
    </div>
  );
};

const StatisticsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Subtle background effect */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(220 47% 12%) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            Platform Reach
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Reach the Right Audience
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="text-center p-8 rounded-2xl bg-navy-50 border border-navy-100 hover:border-brand-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
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
