import { motion } from "framer-motion";
import { Check, Target, Zap, Star, Users, Rocket, Shield } from "lucide-react";

const benefits = [
  "Use your own domain and logo",
  "Set your own pricing and margins",
  "Keep full control of customer relationships",
  "Access real-time programmatic bidding",
  "Full support, no technical team required",
  "Enterprise-grade tools and infrastructure",
];

const targetAudience = [
  { title: "Ad Agencies", description: "Offer clients a scalable, branded DSP solution", icon: Target },
  { title: "Ad Networks", description: "Centralise and optimise buying across inventory", icon: Zap },
  { title: "Startups", description: "Jumpstart your ad tech venture without dev costs", icon: Star },
  { title: "Media Buyers", description: "Run campaigns under your brand with pro tools", icon: Users },
  { title: "Publishers", description: "Monetize inventory with advanced bidding tech", icon: Rocket },
  { title: "Consultants", description: "Deliver white-label solutions to your clients", icon: Shield },
];

const BenefitsAndAudienceSection = () => {
  return (
    <section className="py-20 md:py-28 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-navy-100 p-8 md:p-10"
          >
            <span className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-2">
              Why Choose Us
            </span>
            <h2 className="mb-8 text-2xl md:text-3xl">Key Benefits</h2>
            <ul className="space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-navy-600 text-lg font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Target Audience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-navy-100 p-8 md:p-10"
          >
            <span className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-2">
              Built For
            </span>
            <h2 className="mb-8 text-2xl md:text-3xl">Who's It For?</h2>
            <div className="space-y-5">
              {targetAudience.map((audience) => (
                <div key={audience.title} className="flex items-center gap-4 group hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-50 flex items-center justify-center flex-shrink-0">
                    <audience.icon className="w-5 h-5 text-brand-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800 text-base mb-0.5">{audience.title}</h3>
                    <p className="text-navy-400 text-sm leading-relaxed">{audience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsAndAudienceSection;
