import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import EnergyButton from "@/components/effects/EnergyButton";
import { useReveal } from "@/hooks/useReveal";

const JoinRevolutionSection = () => {
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  return (
    <section className="py-12 md:py-16 bg-navy-50 overflow-hidden below-fold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={leftRef as React.RefObject<HTMLDivElement>} className="reveal reveal-left">
            <span className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-4">
              Join Us
            </span>
            <h2 className="mb-6 text-left">Join the Digital Advertising Revolution</h2>
            <p className="text-lg text-navy-400 mb-8 leading-relaxed">
              Be part of the future of digital advertising. Whether you're a creative thinker, tech enthusiast, or
              marketing expert, there's a place for you. Together, we'll push boundaries, innovate relentlessly, and
              redefine excellence in digital advertising.
            </p>
            <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
              <Link to="/contact" className="flex items-center text-white no-underline group">
                Join Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </EnergyButton>
          </div>

          <div ref={rightRef as React.RefObject<HTMLDivElement>} className="reveal reveal-right">
            <img
              src="/lovable-uploads/378f516e-ced5-4d46-999b-0075f2957d7a.webp"
              alt="Podcast recording studio – audio ad production setup"
              className="w-full h-auto rounded-2xl shadow-xl"
              width={584}
              height={624}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinRevolutionSection;
