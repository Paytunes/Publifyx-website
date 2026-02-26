import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

interface ClientTestimonialSectionProps {
  quote: string;
  attribution: string;
  results: string[];
  variant?: "split" | "wide" | "grid";
}

const ClientTestimonialSection = ({
  quote,
  attribution,
  results,
  variant = "split",
}: ClientTestimonialSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (variant === "wide") {
    return (
      <section ref={ref} className="py-16 md:py-20 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Wide testimonial card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-navy-100 p-8 md:p-12 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange-400 via-brand-orange-500 to-brand-orange-300" />
            <div className="flex items-start gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-brand-orange-500 flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl text-navy-700 leading-relaxed italic font-display">
                "{quote}"
              </p>
            </div>
            <p className="text-sm font-semibold text-navy-500 mb-8">
              — {attribution}
            </p>

            {/* Horizontal chips */}
            <div className="flex flex-wrap gap-3">
              {results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="inline-flex items-center gap-2 bg-navy-50 border border-navy-100 rounded-xl px-4 py-2.5 hover:border-brand-orange-200 hover:shadow-sm transition-all duration-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-navy-700">
                    {result}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === "grid") {
    return (
      <section ref={ref} className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-navy-50 rounded-3xl border border-navy-100 p-8 md:p-10 mb-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange-400 to-brand-orange-600" />
            <Sparkles className="w-5 h-5 text-brand-orange-500 mb-4" />
            <p className="text-lg md:text-xl text-navy-700 leading-relaxed italic font-display mb-4">
              "{quote}"
            </p>
            <p className="text-sm font-semibold text-navy-500">
              — {attribution}
            </p>
          </motion.div>

          {/* 4-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="group bg-navy-800 rounded-2xl p-6 border border-navy-700 hover:border-brand-orange-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange-500/15 flex items-center justify-center mb-4 group-hover:bg-brand-orange-500/25 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange-400" />
                </div>
                <p className="text-sm font-medium text-navy-100 leading-relaxed">
                  {result}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default: split layout
  return (
    <section ref={ref} className="py-16 md:py-20 bg-navy-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-navy-100 p-8 md:p-10 shadow-sm relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-orange-400 to-brand-orange-600" />
            <Sparkles className="w-5 h-5 text-brand-orange-500 mb-5" />
            <p className="text-lg md:text-xl text-navy-700 leading-relaxed italic font-display mb-6">
              "{quote}"
            </p>
            <p className="text-sm font-semibold text-navy-500">
              — {attribution}
            </p>
          </motion.div>

          {/* Right: Results Snapshot */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xs font-bold uppercase tracking-widest text-brand-orange-500 mb-2"
            >
              Results Snapshot
            </motion.p>
            {results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                className="group bg-white rounded-2xl border border-navy-100 p-5 hover:border-brand-orange-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange-100 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange-500" />
                  </div>
                  <p className="text-sm font-semibold text-navy-700 leading-snug">
                    {result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialSection;
