import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const JoinRevolutionSection = () => {
  return (
    <section className="py-20 md:py-32 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-4">
              Join Us
            </span>
            <h2 className="mb-6 text-left">Join the Digital Advertising Revolution</h2>
            <p className="text-lg text-navy-400 mb-8 leading-relaxed">
              Be part of the future of digital advertising. Whether you're a creative thinker, tech enthusiast, or marketing expert, there's a place for you. Together, we'll push boundaries, innovate relentlessly, and redefine excellence in digital advertising.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center btn-primary group"
            >
              Join Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
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
