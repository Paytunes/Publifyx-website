import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import stepConsultation from "@/assets/white-label-dsp/step-consultation.png";
import stepConfigure from "@/assets/white-label-dsp/step-configure.png";
import stepDeploy from "@/assets/white-label-dsp/step-deploy.png";
import stepOnboarding from "@/assets/white-label-dsp/step-onboarding.png";

const steps = [
  {
    number: "01",
    title: "Schedule a Consultation",
    description: "Schedule a consultation to define business requirements and branding.",
    image: stepConsultation,
  },
  {
    number: "02",
    title: "Configure Your Platform",
    description: "Our team configures your domain, branding, and SSP integrations.",
    image: stepConfigure,
  },
  {
    number: "03",
    title: "Deploy in 15 Minutes",
    description: "Deployment is completed within 15 minutes.",
    image: stepDeploy,
  },
  {
    number: "04",
    title: "Onboarding & Support",
    description: "Your team receives onboarding training and ongoing support.",
    image: stepOnboarding,
  },
];

interface HowItWorksSectionProps {
  onGetStarted: () => void;
}

const HowItWorksSection = ({ onGetStarted }: HowItWorksSectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            Get Started
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            How to Get Started with PublifyX White Label DSP
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-400 max-w-2xl mx-auto mt-4"
          >
            From consultation to live campaigns — typically within two weeks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-navy-50 rounded-2xl border border-navy-100 p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-36 flex items-center justify-center mb-5">
                <img
                  src={step.image}
                  alt={step.title}
                  className="max-h-full max-w-[80%] object-contain"
                  loading="lazy"
                />
              </div>
              <span className="inline-block text-sm font-bold text-brand-orange-500 mb-2">
                {step.number}
              </span>
              <h3 className="font-bold text-navy-800 text-base mb-2">{step.title}</h3>
              <p className="text-navy-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={onGetStarted}
            className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-orange-500/25 group"
          >
            Contact Us to Begin Setup
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
