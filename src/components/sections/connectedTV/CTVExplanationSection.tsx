import { motion } from "framer-motion";
import { Tv, Gamepad2, Monitor, Radio } from "lucide-react";

interface CTVExplanationSectionProps {
  onGetStarted?: () => void;
}

const devices = [
  { icon: Tv, label: "Smart TVs with built-in internet connectivity" },
  { icon: Radio, label: "Streaming devices (Roku, Amazon Fire TV, Apple TV)" },
  { icon: Gamepad2, label: "Gaming consoles (PlayStation, Xbox)" },
  { icon: Monitor, label: "Internet-enabled set-top boxes" },
];

const CTVExplanationSection = ({}: CTVExplanationSectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            What Is CTV
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 max-w-4xl mx-auto"
          >
            What Is CTV Advertising?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
          >
            CTV advertising refers to video ads delivered through internet-connected television devices. Unlike traditional linear TV, where ads are broadcast to mass audiences during scheduled programming, CTV ads are served programmatically to specific households or audience segments based on data-driven targeting.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h3 className="text-xl font-bold text-navy-800 mb-6 text-center">Connected TV devices include:</h3>
          <ul className="space-y-4">
            {devices.map((device, i) => (
              <motion.li
                key={device.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-4 bg-navy-50 rounded-xl border border-navy-100 p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange-100 flex items-center justify-center flex-shrink-0">
                  <device.icon className="w-5 h-5 text-brand-orange-500" />
                </div>
                <span className="text-navy-600 font-medium">{device.label}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-navy-400 leading-relaxed">
            CTV advertising is a subset of OTT (over-the-top) advertising. While OTT refers to content delivered via the internet across all devices (smartphones, tablets, laptops, TVs), CTV specifically refers to ads viewed on a television screen through an internet connection.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTVExplanationSection;
