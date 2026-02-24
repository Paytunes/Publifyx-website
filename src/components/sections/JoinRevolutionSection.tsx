import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import MagneticButton from "@/components/effects/MagneticButton";

const JoinRevolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-navy-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          >
            <span className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-4">
              Join Us
            </span>
            <h2 className="mb-6 text-left">Join the Digital Advertising Revolution</h2>
            <p className="text-lg text-navy-400 mb-8 leading-relaxed">
              Be part of the future of digital advertising. Whether you're a creative thinker, tech enthusiast, or marketing expert, there's a place for you. Together, we'll push boundaries, innovate relentlessly, and redefine excellence in digital advertising.
            </p>
            <MagneticButton as="div">
              <Link to="/contact" className="inline-flex items-center btn-primary group">
                Join Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
            style={{ y: imgY }}
          >
            <img
              src="/lovable-uploads/378f516e-ced5-4d46-999b-0075f2957d7a.png"
              alt="Podcast recording studio – audio ad production setup"
              className="w-full h-auto rounded-2xl shadow-xl"
              width={584}
              height={624}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinRevolutionSection;
