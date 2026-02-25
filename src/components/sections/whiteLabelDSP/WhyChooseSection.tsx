import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Video, Tv, Radio, Headphones, LayoutGrid } from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";

const channels = [
  { name: "Display Advertising", icon: Monitor },
  { name: "Video Advertising", icon: Video },
  { name: "Connected TV (CTV)", icon: Tv },
  { name: "Over-the-Top (OTT)", icon: LayoutGrid },
  { name: "Programmatic Audio", icon: Headphones },
  { name: "Native Ads", icon: Radio },
];

interface WhyChooseSectionProps {
  onGetStarted: () => void;
}

const WhyChooseSection = ({ onGetStarted }: WhyChooseSectionProps) => {
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
            Why PublifyX
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 max-w-4xl mx-auto"
          >
            Why Choose PublifyX White Label DSP?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed"
          >
            Most white label platforms focus heavily on display. Some extend into video. PublifyX delivers true
            multi-channel capability under one unified platform. We connect to 40+ supply-side platforms and ad
            exchanges, giving your advertisers access to premium inventory across web, mobile apps, smart TVs, and
            streaming environments. Every format. Every screen. One branded dashboard.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {channels.map((channel, i) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <MagneticCard className="bg-white rounded-xl border border-navy-100 p-6 text-center hover:shadow-lg transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-orange-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-orange-100 transition-colors">
                  <channel.icon className="w-6 h-6 text-brand-orange-500" />
                </div>
                <h3 className="font-bold text-navy-800 text-sm">{channel.name}</h3>
              </MagneticCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-navy-500 mb-6 font-medium">
            Talk to our team about activating the channels that matter most to your business.
          </p>
          <Button
            onClick={onGetStarted}
            className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-6 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-orange-500/25 group"
          >
            Book a Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
