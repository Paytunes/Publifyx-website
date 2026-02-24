import { motion } from "framer-motion";
import { Cpu, Tv, LayoutDashboard } from "lucide-react";

const solutions = [
  {
    icon: Cpu,
    title: "AI-Powered Creativity",
    description: "Create captivating audio and video content effortlessly with advanced AI algorithms that ensure natural, engaging creativity in seconds.",
    image: "/lovable-uploads/f64cf965-b6ee-4102-9e75-6f5b1cbdf48b.png",
    alt: "Person editing ad video on phone using AI",
  },
  {
    icon: Tv,
    title: "OTT Advertising Simplification",
    description: "Pre-packaged OTT solutions make platform selection easy and affordable, with guaranteed high ad completion rates to maximize ROI.",
    image: "/lovable-uploads/283b0e0e-7e0f-457e-9002-2c270f2cd928.png",
    alt: "Woman watching video content on mobile device",
  },
  {
    icon: LayoutDashboard,
    title: "White-Labeled DSP Solutions",
    description: "Customized DSP platforms for corporate media agencies with self-branded reporting portals and campaign management tools.",
    image: "/lovable-uploads/d0e4d426-d705-4d55-8135-97e8afdf1613.png",
    alt: "Smartphone showing ad interface – DSP solution",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const SolutionsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            Solutions Built for Scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-navy-400 max-w-2xl mx-auto"
          >
            Everything you need to launch, manage, and optimize digital campaigns at scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={384}
                  height={208}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-7">
                <div className="w-11 h-11 rounded-xl bg-brand-orange-50 flex items-center justify-center mb-4">
                  <solution.icon className="w-5 h-5 text-brand-orange-500" />
                </div>
                <h3 className="mb-3 text-xl">{solution.title}</h3>
                <p className="text-navy-400 leading-relaxed">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
