
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import GetStartedModal from "@/components/GetStartedModal";
import CTVHeroSection from "@/components/sections/connectedTV/CTVHeroSection";
import CTVExplanationSection from "@/components/sections/connectedTV/CTVExplanationSection";
import CTVBenefitsSection from "@/components/sections/connectedTV/CTVBenefitsSection";
import CTVHowToSection from "@/components/sections/connectedTV/CTVHowToSection";
import CTVAudienceSection from "@/components/sections/connectedTV/CTVAudienceSection";
import CTVCTASection from "@/components/sections/connectedTV/CTVCTASection";
import CTVFAQSection from "@/components/sections/connectedTV/CTVFAQSection";

const ConnectedTVAdvertising = () => {
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  useEffect(() => {
    // Set meta title
    document.title = "Connected Tv Advertising - PublifyX";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Connected TV advertising helps you reach audiences traditional TV can't. Target precisely with our programmatic platform. Learn more today.");
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = "Connected TV advertising helps you reach audiences traditional TV can't. Target precisely with our programmatic platform. Learn more today.";
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "PublifyX";
    };
  }, []);

  const handleGetStarted = () => {
    setIsGetStartedModalOpen(true);
  };

  return (
    <Layout>
      <CTVHeroSection onGetStarted={handleGetStarted} />
      <CTVExplanationSection onGetStarted={handleGetStarted} />
      <CTVBenefitsSection onGetStarted={handleGetStarted} />
      <CTVHowToSection onGetStarted={handleGetStarted} />
      <CTVAudienceSection onGetStarted={handleGetStarted} />
      <CTVCTASection onGetStarted={handleGetStarted} />
      <CTVFAQSection />

      <GetStartedModal 
        isOpen={isGetStartedModalOpen} 
        onClose={() => setIsGetStartedModalOpen(false)} 
      />
    </Layout>
  );
};

export default ConnectedTVAdvertising;
