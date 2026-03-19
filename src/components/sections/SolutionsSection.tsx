import { Cpu, Tv, LayoutDashboard } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import solutionAiCreativity from "@/assets/home/solution-ai-creativity.webp";
import solutionOtt from "@/assets/home/solution-ott.webp";
import solutionDsp from "@/assets/home/solution-dsp.webp";

const solutions = [
  {
    icon: Cpu,
    title: "AI-Powered Creativity",
    description:
      "Create captivating audio and video content effortlessly with advanced AI algorithms that ensure natural, engaging creativity in seconds.",
    image: solutionAiCreativity,
    alt: "Person editing ad video on phone using AI",
  },
  {
    icon: Tv,
    title: "OTT Advertising Simplification",
    description:
      "Pre-packaged OTT solutions make platform selection easy and affordable, with guaranteed high ad completion rates to maximize ROI.",
    image: solutionOtt,
    alt: "Woman watching video content on mobile device",
  },
  {
    icon: LayoutDashboard,
    title: "White-Labeled DSP Solutions",
    description:
      "Customized DSP platforms for corporate media agencies with self-branded reporting portals and campaign management tools.",
    image: solutionDsp,
    alt: "Smartphone showing ad interface – DSP solution",
  },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = y * -12; // maps [-0.5, 0.5] to [6, -6]
    const rotateY = x * 12;  // maps [-0.5, 0.5] to [-6, 6]
    ref.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "none";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transition: "transform 0.3s ease-out" }}
    >
      {children}
    </div>
  );
};

const SolutionsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="inline-block text-sm font-semibold text-brand-orange-700 uppercase tracking-widest mb-3"
          >
            What We Offer
          </p>
          <h2
            className="mb-4"
          >
            Solutions Built for Scale
          </h2>
          <p
            className="text-lg text-navy-400 max-w-2xl mx-auto"
          >
            Everything you need to launch, manage, and optimize digital campaigns at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
            >
              <TiltCard className="group bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500">
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
                    <solution.icon className="w-5 h-5 text-brand-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="mb-3 text-xl">{solution.title}</h3>
                  <p className="text-navy-400 leading-relaxed">{solution.description}</p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
