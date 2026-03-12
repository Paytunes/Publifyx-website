import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

export interface RelatedService {
  title: string;
  desc: string;
  icon: LucideIcon;
  path: string;
}

interface RelatedServicesSectionProps {
  services: RelatedService[];
}

const RelatedServicesSection = ({ services }: RelatedServicesSectionProps) => (
  <section className="py-12 md:py-16 bg-white max-w-7xl mx-auto">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-extrabold text-brand-orange-700 uppercase tracking-widest mb-4"
        >
          More Solutions
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900"
        >
          Explore Related Services
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={service.path}
                className="group flex flex-col h-full bg-navy-50 border border-navy-100 rounded-2xl p-8 hover:border-brand-orange-500/30 hover:shadow-lg hover:shadow-brand-orange-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange-500 flex items-center justify-center mb-5 shadow-lg shadow-brand-orange-500/20">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-2 group-hover:text-brand-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy-600 font-medium leading-relaxed mb-4 flex-1">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-brand-orange-500 font-bold text-sm group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default RelatedServicesSection;
