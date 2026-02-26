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
      className="relative py-20 md:py-28 overflow-hidden bg-navy-900"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Accent glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange-500 rounded-full blur-[280px] opacity-[0.07]" />

      {variant === "cinematic" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[340px] h-[220px] rounded-3xl border border-white/[0.04] bg-white/[0.01]" />
      )}

      {variant === "waveform" && (
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-1 opacity-[0.04]">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-brand-orange-400 rounded-full"
              style={{
                height: `${20 + Math.sin(i * 0.4) * 30 + Math.random() * 15}px`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Large quote marks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.06, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="absolute top-8 left-1/2 -translate-x-1/2"
        >
          <Quote className="w-32 h-32 text-brand-orange-400" />
        </motion.div>

        {/* Founder avatar with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative w-20 h-20 mx-auto mb-10"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-orange-400 to-brand-orange-600 blur-md opacity-40 animate-pulse" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-brand-orange-400 to-brand-orange-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-navy-800 flex items-center justify-center">
              <span className="text-2xl font-bold text-brand-orange-400 font-display">
                S
              </span>
            </div>
          </div>
        </motion.div>

        {/* Quote text — line-by-line reveal */}
        <div className="space-y-1 mb-10">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              className="text-xl md:text-2xl lg:text-[1.65rem] text-white/90 leading-relaxed font-display font-medium italic"
            >
              "{line.trim()}"
            </motion.p>
          ))}
        </div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + lines.length * 0.12 }}
        >
          <p className="text-brand-orange-400 font-semibold text-base">
            — {name}
          </p>
          <p className="text-navy-400 text-sm mt-1">{title}</p>
        </motion.div>

        {/* Glassmorphism border frame */}
        <div className="absolute inset-4 md:inset-8 rounded-3xl border border-white/[0.05] pointer-events-none" />
      </div>
    </section>
  );
};

export default FounderQuoteSection;
