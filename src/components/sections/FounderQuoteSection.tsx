import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

interface FounderQuoteSectionProps {
  quote: string;
  name: string;
  title: string;
  variant?: "default" | "cinematic" | "waveform";
}

const FounderQuoteSection = ({
  quote,
  name,
  title,
  variant = "default",
}: FounderQuoteSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const lines = quote.split(". ").map((s, i, arr) =>
    i < arr.length - 1 ? s + "." : s
  );

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-navy-900"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Animated accent glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.08 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-500 rounded-full blur-[300px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.04 } : {}}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-brand-orange-300 rounded-full blur-[200px]"
      />

      {variant === "cinematic" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[380px] h-[240px] rounded-3xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-sm"
        />
      )}

      {variant === "waveform" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.04 } : {}}
          transition={{ duration: 1 }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-[3px]"
        >
          {Array.from({ length: 80 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[2px] bg-brand-orange-400 rounded-full"
              initial={{ height: 4 }}
              animate={isInView ? {
                height: [4, 20 + Math.sin(i * 0.3) * 35, 4],
              } : {}}
              transition={{
                duration: 2.5,
                delay: i * 0.02,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism floating card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/[0.08] p-10 md:p-14 text-center"
          style={{
            boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Animated gradient border overlay */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -inset-[1px] rounded-3xl"
              style={{
                background: "conic-gradient(from 0deg, transparent 60%, hsl(27 100% 50% / 0.15) 75%, transparent 90%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Large quote marks */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView ? { opacity: 0.06, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-6 left-1/2 -translate-x-1/2"
          >
            <Quote className="w-28 h-28 text-brand-orange-400" />
          </motion.div>

          {/* Founder avatar with glow ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-20 h-20 mx-auto mb-10"
          >
            {/* Pulsing glow */}
            <motion.div
              className="absolute -inset-2 rounded-full bg-gradient-to-br from-brand-orange-400 to-brand-orange-600 blur-lg"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Orange ring */}
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-brand-orange-400 to-brand-orange-600 p-[2.5px]">
              <div className="w-full h-full rounded-full bg-navy-800 flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-orange-400 font-display">
                  S
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quote text — line-by-line reveal */}
          <div className="space-y-2 mb-10 relative z-10">
            {lines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.35 + i * 0.15,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="text-xl md:text-2xl lg:text-[1.7rem] text-white/90 leading-relaxed font-display font-medium italic"
                >
                  {i === 0 ? `"${line.trim()}` : i === lines.length - 1 ? `${line.trim()}"` : line.trim()}
                </motion.p>
              </div>
            ))}
          </div>

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 + lines.length * 0.15 }}
            className="relative z-10"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-orange-400 to-transparent mx-auto mb-4" />
            <p className="text-brand-orange-400 font-semibold text-base font-display">
              — {name}
            </p>
            <p className="text-navy-400 text-sm mt-1">{title}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuoteSection;
