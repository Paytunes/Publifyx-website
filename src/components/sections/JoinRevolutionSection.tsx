import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import podcastStudioImg from "@/assets/home/podcast-studio.webp";

const JoinRevolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height + window.innerHeight;
      const scrolled = window.innerHeight - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));
      // Map progress 0..1 to 40..-40
      const translateY = 40 - progress * 80;
      img.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-navy-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-4">
              Join Us
            </span>
            <h2 className="mb-6 text-left">
              Join the Digital Advertising Revolution
            </h2>
            <p className="text-lg text-navy-400 mb-8 leading-relaxed">
              Be part of the future of digital advertising. Whether you're a
              creative thinker, tech enthusiast, or marketing expert, there's a
              place for you. Together, we'll push boundaries, innovate
              relentlessly, and redefine excellence in digital advertising.
            </p>
            <div className="inline-flex items-center btn-primary text-lg px-10 py-4">
              <Link
                to="/contact"
                className="flex items-center text-white no-underline group"
              >
                Join Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div ref={imgRef}>
            <img
              src={podcastStudioImg}
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
