
import Layout from "@/components/Layout";
import { useState } from "react";
import GetStartedModal from "@/components/GetStartedModal";
import HeroSection from "@/components/sections/whiteLabelDSP/HeroSection";
import WhiteLabelExplanationSection from "@/components/sections/whiteLabelDSP/WhiteLabelExplanationSection";
import BenefitsAndAudienceSection from "@/components/sections/whiteLabelDSP/BenefitsAndAudienceSection";
import ComparisonSection from "@/components/sections/whiteLabelDSP/ComparisonSection";
import FeaturesSection from "@/components/sections/whiteLabelDSP/FeaturesSection";
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
      <BenefitsAndAudienceSection />
      <ComparisonSection />
      <FeaturesSection />
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
