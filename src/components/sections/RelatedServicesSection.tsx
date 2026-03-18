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
        <span className="inline-block text-sm font-extrabold text-brand-orange-700 uppercase tracking-widest mb-4">
          More Solutions
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900">
          Explore Related Services
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div key={service.title}>
              <Link
                to={service.path}
                className="group flex flex-col h-full bg-navy-50 border border-navy-100 rounded-2xl p-8 hover:border-brand-orange-500/30 hover:shadow-lg hover:shadow-brand-orange-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange-700 flex items-center justify-center mb-5 shadow-lg shadow-brand-orange-500/20">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-2 group-hover:text-brand-orange-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy-600 font-medium leading-relaxed mb-4 flex-1">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-brand-orange-700 font-bold text-sm group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default RelatedServicesSection;
