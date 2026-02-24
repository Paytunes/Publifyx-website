
import Layout from "@/components/Layout";
import { useState } from "react";
import GetStartedModal from "@/components/GetStartedModal";
import HeroSection from "@/components/sections/whiteLabelDSP/HeroSection";
import WhiteLabelExplanationSection from "@/components/sections/whiteLabelDSP/WhiteLabelExplanationSection";
import WhyChooseSection from "@/components/sections/whiteLabelDSP/WhyChooseSection";
import FeaturesSection from "@/components/sections/whiteLabelDSP/FeaturesSection";
import BenefitsAndAudienceSection from "@/components/sections/whiteLabelDSP/BenefitsAndAudienceSection";
import HowItWorksSection from "@/components/sections/whiteLabelDSP/HowItWorksSection";
import WhiteLabelCTASection from "@/components/sections/whiteLabelDSP/WhiteLabelCTASection";
import WhiteLabelFAQSection from "@/components/sections/whiteLabelDSP/WhiteLabelFAQSection";

const WhiteLabelDSP = () => {
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsGetStartedModalOpen(true);
  };

  return (
    <Layout transparentHeader>
      <HeroSection onGetStarted={handleGetStarted} />
      <WhiteLabelExplanationSection />
      <WhyChooseSection onGetStarted={handleGetStarted} />
      <FeaturesSection />
      <BenefitsAndAudienceSection onGetStarted={handleGetStarted} />
      <HowItWorksSection onGetStarted={handleGetStarted} />
      <WhiteLabelCTASection onGetStarted={handleGetStarted} />
      <WhiteLabelFAQSection />

      <GetStartedModal 
        isOpen={isGetStartedModalOpen} 
        onClose={() => setIsGetStartedModalOpen(false)} 
      />
    </Layout>
  );
};

export default WhiteLabelDSP;
