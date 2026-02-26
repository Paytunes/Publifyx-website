import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FounderQuoteSectionProps {
  quote: string;
  name: string;
  title: string;
  showImage?: boolean;
  variant?: "default" | "cinematic";
}

const FounderQuoteSection = ({ quote, name, title, showImage = true }: FounderQuoteSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-14 md:py-20 overflow-hidden bg-navy-800">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">
          {/* Founder identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center shrink-0"
          >
            {showImage && (
              <motion.div
                animate={
                  isInView
                    ? {
                        boxShadow: [
                          "0 0 0 3px hsla(27, 100%, 50%, 0.18), 0 0 20px 4px hsla(27, 100%, 50%, 0.08)",
                          "0 0 0 5px hsla(27, 100%, 50%, 0.10), 0 0 28px 6px hsla(27, 100%, 50%, 0.05)",
                          "0 0 0 3px hsla(27, 100%, 50%, 0.18), 0 0 20px 4px hsla(27, 100%, 50%, 0.08)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-brand-orange-400 to-brand-orange-600 flex items-center justify-center text-white font-bold text-3xl md:text-4xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {name.charAt(0)}
              </motion.div>
            )}
            <p
              className="text-white font-semibold text-base mt-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {name}
            </p>
            <p className="text-navy-300 text-sm">{title}</p>
          </motion.div>

          {/* Speech bubble with CSS triangle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex-1 min-w-0 md:ml-10 group"
          >
            <blockquote
              className="relative rounded-2xl p-6 md:p-8 lg:p-10 transition-shadow duration-500 group-hover:shadow-[0_8px_32px_-8px_hsla(27,100%,50%,0.12)]"
              style={{
                background: "oklch(27.8% 0.033 256.848)",
                color: "#ffffff",
              }}
            >
              {/* Triangle pointer – desktop: points left toward founder */}
              <span
                className="hidden md:block absolute"
                style={{
                  top: "24px",
                  left: "-40px",
                  width: 0,
                  height: 0,
                  borderWidth: "15px 40px 0 0",
                  borderStyle: "solid",
                  borderColor: "transparent oklch(27.8% 0.033 256.848)",
                }}
              />
              {/* Triangle pointer – mobile: points up toward founder */}
              <span
                className="block md:hidden absolute"
                style={{
                  top: "-15px",
                  left: "32px",
                  width: 0,
                  height: 0,
                  borderWidth: "0 15px 15px 0",
                  borderStyle: "solid",
                  borderColor: "transparent oklch(27.8% 0.033 256.848) transparent transparent",
                }}
              />
              <p
                className="text-lg md:text-xl lg:text-[1.35rem] text-white/90 leading-relaxed font-light italic"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                &ldquo;{quote}&rdquo;
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderQuoteSection;
