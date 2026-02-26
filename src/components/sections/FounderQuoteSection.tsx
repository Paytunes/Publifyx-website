import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

interface FounderQuoteSectionProps {
  quote: string;
  name: string;
  title: string;
  showImage?: boolean;
  variant?: "default" | "cinematic";
}

const FounderQuoteSection = ({
  quote,
  name,
  title,
  showImage = true,
  variant = "default",
}: FounderQuoteSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const sentences = quote.split(/(?<=\.)\s+/);

  return (
    <section ref={ref} className="relative py-12 md:py-16 overflow-hidden bg-navy-800">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-orange-500 rounded-full blur-[300px] opacity-[0.06]" />

      {variant === "cinematic" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[280px] rounded-2xl border border-white/[0.04] opacity-40" />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-orange-500/30 via-transparent to-brand-orange-500/10 opacity-60" />

          <div className="relative bg-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/[0.08] p-8 md:p-12 lg:p-16">
            {/* Oversized quote mark */}
            <Quote className="absolute top-6 left-6 md:top-8 md:left-10 w-12 h-12 md:w-16 md:h-16 text-brand-orange-500/10" />

            <div className="text-center">
              {/* Quote text with line-by-line reveal */}
              <blockquote className="relative z-10 mb-10">
                {sentences.map((sentence, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="inline text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light italic"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {sentence}{" "}
                  </motion.span>
                ))}
              </blockquote>

              {/* Founder identity */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col items-center gap-4"
              >
                {showImage && (
                  <div className="relative">
                    {/* Glow ring */}
                    <motion.div
                      animate={
                        isInView
                          ? {
                              boxShadow: [
                                "0 0 0 3px hsla(27, 100%, 50%, 0.15)",
                                "0 0 0 6px hsla(27, 100%, 50%, 0.08)",
                                "0 0 0 3px hsla(27, 100%, 50%, 0.15)",
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-orange-400 to-brand-orange-600 flex items-center justify-center text-white font-bold text-xl"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {name.charAt(0)}
                    </motion.div>
                  </div>
                )}
                <div>
                  <p className="text-white font-semibold text-base">— {name}</p>
                  <p className="text-navy-400 text-sm">{title}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuoteSection;
