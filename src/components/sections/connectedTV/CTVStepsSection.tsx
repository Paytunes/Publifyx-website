import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import stepObjectives from "@/assets/ctv/step-objectives.png";
import stepTargeting from "@/assets/ctv/step-targeting.png";
import stepCreatives from "@/assets/ctv/step-creatives.png";
import stepBudget from "@/assets/ctv/step-budget.png";
import stepLaunch from "@/assets/ctv/step-launch.png";
import stepOptimize from "@/assets/ctv/step-optimize.png";
import stepReporting from "@/assets/ctv/step-reporting.png";

interface CTVStepsSectionProps {
  onGetStarted: () => void;
}

const steps = [
  {
    number: "01",
    title: "Define Objectives",
    description: "Define campaign objectives (awareness, reach, performance).",
    image: stepObjectives,
  },
  {
    number: "02",
    title: "Configure Targeting",
    description: "Configure audience targeting.",
    image: stepTargeting,
  },
  {
    number: "03",
    title: "Upload Creatives",
    description: "Upload 15- or 30-second HD video creatives (MP4 or MOV).",
    image: stepCreatives,
  },
  {
    number: "04",
    title: "Set Budget & Schedule",
    description: "Set budget, bid strategy, and schedule.",
    image: stepBudget,
  },
  {
    number: "05",
    title: "Launch Campaign",
    description: "Launch via real-time bidding across connected TV inventory.",
    image: stepLaunch,
  },
  {
    number: "06",
    title: "Monitor & Optimize",
    description: "Monitor and optimize in real time.",
    image: stepOptimize,
  },
  {
    number: "07",
    title: "Access Reporting",
    description: "Post-campaign, access reporting on impressions, VCR, unique household reach, frequency, and cost per completed view.",
    image: stepReporting,
  },
];

const CTVStepsSection = ({ onGetStarted }: CTVStepsSectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 max-w-4xl mx-auto"
          >
            How CTV Advertising Works with PublifyX
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-navy-100 p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
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
      </div>
    </section>
  );
};

export default CTVStepsSection;
