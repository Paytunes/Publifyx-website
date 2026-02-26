import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Quote } from "lucide-react";

interface ResultItem {
  text: string;
}

interface ClientTestimonialSectionProps {
  quote: string;
  attribution: string;
  role: string;
  results: ResultItem[];
  layout?: "split" | "wide";
}

const ClientTestimonialSection = ({
  quote,
  attribution,
  role,
  results,
  layout = "split",
}: ClientTestimonialSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-navy-50 relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange-500 rounded-full blur-[300px] opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3">
            Client Success
          </span>
          <h2>What Our Clients Say</h2>
        </motion.div>

        <div
          className={`grid gap-8 max-w-6xl mx-auto ${
            layout === "split" ? "lg:grid-cols-2" : "lg:grid-cols-5"
          }`}
        >
          {/* Testimonial card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`relative group ${layout === "wide" ? "lg:col-span-3" : ""}`}
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-orange-500/20 via-transparent to-navy-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white rounded-2xl border border-navy-100 p-8 md:p-10 h-full flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div>
                <Quote className="w-8 h-8 text-brand-orange-500/20 mb-4" />
                <p className="text-navy-700 text-lg md:text-xl leading-relaxed font-light italic mb-8">
                  "{quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-navy-100">
                <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-white font-bold text-sm">
                  {attribution.charAt(0)}
                </div>
                <div>
                  <p className="text-navy-800 font-semibold text-sm">
                    {attribution}
                  </p>
                  <p className="text-navy-400 text-xs">{role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results snapshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className={layout === "wide" ? "lg:col-span-2" : ""}
          >
            <div className="bg-navy-800 rounded-2xl border border-navy-700 p-8 md:p-10 h-full">
              <h3 className="!text-white text-lg font-bold mb-6">
                Results Snapshot
              </h3>
              <div className="space-y-4">
                {results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + i * 0.12,
                    }}
                    className="group/item flex items-start gap-3 bg-white/[0.04] rounded-xl border border-white/[0.06] p-4 hover:bg-white/[0.07] hover:border-brand-orange-500/20 transition-all duration-300"
                  >
                    <div className="w-7 h-7 rounded-lg bg-brand-orange-500/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-brand-orange-500/25 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange-400" />
                    </div>
                    <p className="text-navy-200 text-sm font-medium leading-relaxed">
                      {result.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialSection;
