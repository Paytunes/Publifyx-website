import { Cpu, Tv, LayoutDashboard } from "lucide-react";
import { useReveal, useRevealGroup } from "@/hooks/useReveal";

const solutions = [
  {
    icon: Cpu,
    title: "AI-Powered Creativity",
    description:
      "Create captivating audio and video content effortlessly with advanced AI algorithms that ensure natural, engaging creativity in seconds.",
    image: "/lovable-uploads/f64cf965-b6ee-4102-9e75-6f5b1cbdf48b.webp",
    alt: "Person editing ad video on phone using AI",
  },
  {
    icon: Tv,
    title: "OTT Advertising Simplification",
    description:
      "Pre-packaged OTT solutions make platform selection easy and affordable, with guaranteed high ad completion rates to maximize ROI.",
    image: "/lovable-uploads/283b0e0e-7e0f-457e-9002-2c270f2cd928.webp",
    alt: "Woman watching video content on mobile device",
  },
  {
    icon: LayoutDashboard,
    title: "White-Labeled DSP Solutions",
    description:
      "Customized DSP platforms for corporate media agencies with self-branded reporting portals and campaign management tools.",
    image: "/lovable-uploads/d0e4d426-d705-4d55-8135-97e8afdf1613.webp",
    alt: "Smartphone showing ad interface – DSP solution",
  },
];

const SolutionsSection = () => {
  const headingRef = useReveal();
  // Grid container — children get staggered reveal via useRevealGroup
  const gridRef = useRevealGroup<HTMLDivElement>();

  return (
    <section className="py-12 md:py-16 bg-navy-50 below-fold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={headingRef}>
          <p className="reveal inline-block text-sm font-semibold text-brand-orange-700 uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="reveal reveal-delay-1 mb-4">Solutions Built for Scale</h2>
          <p className="reveal reveal-delay-2 text-lg text-navy-400 max-w-2xl mx-auto">
            Everything you need to launch, manage, and optimize digital campaigns at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={gridRef}>
          {solutions.map((solution, i) => (
            <div
              key={solution.title}
              className={`reveal reveal-delay-${i + 1} group bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500`}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  width={400}
                  height={208}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              </div>
              <div className="p-7">
                <div className="w-11 h-11 rounded-xl bg-brand-orange-50 flex items-center justify-center mb-4 group-hover:bg-brand-orange-500 group-hover:text-white transition-colors duration-300">
                  <solution.icon className="w-5 h-5 text-brand-orange-500 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl">{solution.title}</h3>
                <p className="text-navy-400 leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
