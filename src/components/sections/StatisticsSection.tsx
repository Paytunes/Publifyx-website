import { useRef, useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const stats = [
  { value: 12000, suffix: "+", label: "Pin Codes", description: "Hyper-local targeting" },
  { value: 100, suffix: "+", label: "Publishers", description: "Premium inventory" },
  { value: 10, suffix: "M+", label: "Daily Audience", description: "Active users reached" },
  { value: 10, suffix: "M+", label: "Ad Requests", description: "Processed daily" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let raf: number;
    const duration = 1800;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  const display =
    target >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}K` : count.toString();

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-navy-800 mb-2 font-display">
      {display}
      {suffix}
    </div>
  );
};

const StatisticsSection = () => {
  const headingRef = useReveal();

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden below-fold">
      {/* Subtle background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(220 47% 12%) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={headingRef as React.RefObject<HTMLDivElement>}>
          <span className="reveal inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">
            Platform Reach
          </span>
          <h2 className="reveal reveal-delay-1">Reach the Right Audience</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${i + 1} text-center p-8 rounded-2xl bg-navy-50 border border-navy-100 hover:border-brand-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="text-brand-orange-500 font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-navy-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
