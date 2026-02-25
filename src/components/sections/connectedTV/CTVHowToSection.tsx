import { motion } from "framer-motion";
import { Target, MonitorPlay, Upload, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTVHowToSectionProps {
  onGetStarted: () => void;
}

const steps = [
  {
    number: "01",
    title: "Define Your Audience",
    description: "Choose who sees your ads—based on age, location, interests, and even viewing habits.",
    icon: Target,
  },
  {
    number: "02",
    title: "Pick the Right Platforms",
    description: "Select from top OTT platforms and apps where your audience hangs out.",
    icon: MonitorPlay,
  },
  {
    number: "03",
    title: "Upload Your Creatives",
    description: "Use your existing video assets or create new high-impact creatives for CTV.",
    icon: Upload,
  },
  {
    number: "04",
    title: "Measure & Optimize",
    description: "Get detailed insights—impressions, views, completions, even retarget across mobile and desktop.",
    icon: BarChart3,
  },
];

const CTVHowToSection = ({ onGetStarted }: CTVHowToSectionProps) => {
  return (
    <section className="py-20 md:py-28 bg-white">
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
            How to Advertise on Connected TV
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
          >
            PublifyX has made it really simple for you to launch CTV campaigns in four easy steps.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-navy-50 rounded-2xl border border-navy-100 p-8 text-center relative"
            >
              <span className="text-5xl font-black text-navy-100 absolute top-4 right-5">
                {step.number}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-brand-orange-100 flex items-center justify-center mx-auto mb-5 relative z-10">
                <step.icon className="w-7 h-7 text-brand-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-800 mb-3">{step.title}</h3>
              <p className="text-navy-400 leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <p className="text-lg text-navy-400 mb-6">No guesswork. Just smart advertising that performs.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group"
          >
            Launch a Campaign
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTVHowToSection;
