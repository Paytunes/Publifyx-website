import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Monitor, Video, Tv, BarChart3, Settings, Target } from "lucide-react";
import { Link } from "react-router-dom";
import EnergyButton from "@/components/effects/EnergyButton";
import DisplayMockup from "./mockups/DisplayMockup";
import VideoMockup from "./mockups/VideoMockup";
import CTVMockup from "./mockups/CTVMockup";
import DataTargetingMockup from "./mockups/DataTargetingMockup";
import ReportingMockup from "./mockups/ReportingMockup";
import WhiteLabelMockup from "./mockups/WhiteLabelMockup";

const tabs = [
  {
    id: "display",
    label: "Display Inventory",
    icon: Monitor,
    headline: "Display Advertising",
    description:
      "Access premium display inventory across 40+ supply-side platforms. Serve banners, rich media, and native ads on top-tier publisher websites and mobile apps — all from one unified dashboard.",
    Mockup: DisplayMockup,
  },
  {
    id: "video",
    label: "Video Advertising",
    icon: Video,
    headline: "Video Advertising",
    description:
      "Run pre-roll, mid-roll, and outstream video campaigns across premium video publishers. Reach engaged audiences on content they love with VAST/VPAID-compliant creatives.",
    Mockup: VideoMockup,
  },
  {
    id: "ctv",
    label: "Connected TV (CTV)",
    icon: Tv,
    headline: "Connected TV (CTV)",
    description:
      "Deliver unskippable, full-screen ads on smart TVs and streaming devices. CTV combines the impact of television with the precision of digital — measurable, targeted, and brand-safe.",
    Mockup: CTVMockup,
  },
  {
    id: "data",
    label: "Data & Targeting",
    icon: Target,
    headline: "Data & Targeting",
    description:
      "Leverage first-party, third-party, and contextual data to build precise audience segments. Our DMP integration ensures every impression is targeted, relevant, and high-performing.",
    Mockup: DataTargetingMockup,
  },
  {
    id: "reporting",
    label: "Real-Time Reporting",
    icon: BarChart3,
    headline: "Real-Time Reporting",
    description:
      "White-labeled dashboards with live campaign metrics, exportable reports, and client-facing analytics. Give your advertisers full transparency without exposing your margins.",
    Mockup: ReportingMockup,
  },
  {
    id: "whitelabel",
    label: "White Label Control",
    icon: Settings,
    headline: "White Label Control",
    description:
      "Full control over branding, domains, user management, and margin settings. Your clients see your brand — never ours. Launch your own DSP in under 15 minutes with zero upfront investment.",
    Mockup: WhiteLabelMockup,
  },
];

interface WhyChooseSectionProps {
  onGetStarted: () => void;
}

const WhyChooseSection = ({ onGetStarted }: WhyChooseSectionProps) => {
  const [activeTab, setActiveTab] = useState("display");
  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-16 md:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="rounded-3xl bg-white border border-navy-100 shadow-xl shadow-navy-800/5 overflow-hidden"
        >
          {/* Tab Bar */}
          <div className="border-b border-navy-100 px-4 md:px-8 pt-6 pb-0 overflow-x-auto scrollbar-hide">
            <div className="flex gap-1 min-w-max">
              {tabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-t-xl transition-colors duration-200 whitespace-nowrap ${
                      isActive
                        ? "bg-navy-800 text-white"
                        : "text-navy-400 hover:text-navy-700 hover:bg-navy-50"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-4 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {/* Browser chrome + headline */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-xs text-navy-300 font-mono">
                    publify<span className="text-brand-orange-500">x</span>.io / {activeContent.id}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-800 mb-2">{activeContent.headline}</h3>
                  <p className="text-sm text-navy-400 leading-relaxed max-w-3xl">{activeContent.description}</p>
                </div>

                {/* Unique Dashboard Mockup */}
                <activeContent.Mockup />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-navy-500 mb-6 font-medium">
            Talk to our team about activating the channels that matter most to your business.
          </p>
          <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
            <Link to="/contact" className="flex items-center text-white no-underline group">
              Book a Call <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </EnergyButton>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
