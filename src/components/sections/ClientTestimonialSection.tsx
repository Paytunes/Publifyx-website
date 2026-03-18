import { useRef } from "react";
import { CheckCircle2, Sparkles, Quote } from "lucide-react";

interface ClientTestimonialSectionProps {
  quote: string;
  attribution: string;
  results: string[];
  variant?: "split" | "wide" | "grid";
  background?: "white" | "navy";
}

const ClientTestimonialSection = ({
  quote,
  attribution,
  results,
  variant = "split",
  background = "navy",
}: ClientTestimonialSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  if (variant === "wide") {
    return (
      <section ref={ref} className="py-12 md:py-16 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-white rounded-3xl border border-navy-100 p-8 md:p-12 relative overflow-hidden"
            style={{
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)",
            }}
          >
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange-400 via-brand-orange-500 to-brand-orange-300" />

            {/* Subtle quote mark background */}
            <Quote className="absolute top-6 right-8 w-16 h-16 text-navy-100 opacity-40" />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5 text-brand-orange-700" />
                </div>
                <div>
                  <p className="text-lg md:text-xl text-navy-700 leading-relaxed italic font-display">
                    "{quote}"
                  </p>
                  {attribution && (
                    <p className="text-sm font-semibold text-navy-400 mt-3">
                      — {attribution}
                    </p>
                  )}
                </div>
              </div>

              {/* Results label */}
              <div className="mt-8 mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-orange-700">
                  Results Snapshot
                </p>
              </div>

              {/* Horizontal animated chips */}
              <div className="flex flex-wrap gap-3">
                {results.map((result, i) => (
                  <div
                    key={i}
                    className="group inline-flex items-center gap-2.5 bg-navy-50 border border-navy-100 rounded-2xl px-5 py-3 hover:border-brand-orange-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-7 h-7 rounded-lg bg-brand-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange-200 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange-700" />
                    </div>
                    <span className="text-sm font-semibold text-navy-700">
                      {result}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "grid") {
    return (
      <section ref={ref} className="py-16 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quote card */}
          <div className="bg-navy-50 rounded-3xl border border-navy-100 p-8 md:p-10 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange-400 to-brand-orange-600" />
            <Quote className="absolute top-6 right-8 w-14 h-14 text-navy-200 opacity-30" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5 text-brand-orange-700" />
              </div>
              <div>
                <p className="text-lg md:text-xl text-navy-700 leading-relaxed italic font-display mb-4">
                  "{quote}"
                </p>
                {attribution && (
                  <p className="text-sm font-semibold text-navy-500">
                    — {attribution}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Results label */}
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange-700 mb-4">
            Results Snapshot
          </p>

          {/* 4-col grid cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((result, i) => (
              <div
                key={i}
                className="group relative bg-navy-800 rounded-2xl p-6 border border-navy-700 hover:border-brand-orange-500/30 hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-brand-orange-500/0 group-hover:bg-brand-orange-500/[0.03] transition-colors duration-300" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-500/15 flex items-center justify-center mb-4 group-hover:bg-brand-orange-500/25 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange-400" />
                  </div>
                  <p className="text-sm font-medium text-navy-100 leading-relaxed">
                    {result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default: split 2-column layout
  return (
    <section
      ref={ref}
      className={`py-12 md:py-16 ${background === "navy" ? "bg-navy-50" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left: Testimonial card with glassmorphism depth */}
          <div
            className="bg-white rounded-3xl border border-navy-100 p-8 md:p-10 relative overflow-hidden flex flex-col justify-center"
            style={{
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)",
            }}
          >
            {/* Left accent bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-orange-400 via-brand-orange-500 to-brand-orange-300" />
            {/* Subtle background quote */}
            <Quote className="absolute bottom-4 right-4 w-20 h-20 text-navy-100 opacity-30" />

            <div className="relative z-10">
              <Sparkles className="w-5 h-5 text-brand-orange-700 mb-5" />
              <p className="text-lg md:text-xl text-navy-700 leading-relaxed italic font-display mb-6">
                "{quote}"
              </p>
              <div className="w-10 h-px bg-navy-200 mb-3" />
              {attribution && (
                <p className="text-sm font-semibold text-navy-500">
                  — {attribution}
                </p>
              )}
            </div>
          </div>

          {/* Right: Results Snapshot cards */}
          <div className="flex flex-col">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange-700 mb-4">
              Results Snapshot
            </p>
            <div className="space-y-3 flex-1 flex flex-col justify-center">
              {results.map((result, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-navy-100 p-5 hover:border-brand-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange-700 flex-shrink-0" />
                    <p className="text-sm font-semibold text-navy-700 leading-snug">
                      {result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialSection;
