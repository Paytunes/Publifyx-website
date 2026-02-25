
import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CTVHeroSection from "@/components/sections/connectedTV/CTVHeroSection";
import CTVExplanationSection from "@/components/sections/connectedTV/CTVExplanationSection";
import CTVBenefitsSection from "@/components/sections/connectedTV/CTVBenefitsSection";
import CTVHowToSection from "@/components/sections/connectedTV/CTVHowToSection";
import CTVAudienceSection from "@/components/sections/connectedTV/CTVAudienceSection";
import CTVCTASection from "@/components/sections/connectedTV/CTVCTASection";
import CTVFAQSection from "@/components/sections/connectedTV/CTVFAQSection";

const ConnectedTVAdvertising = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prev = document.title;
    document.title = "Connected TV Advertising - PublifyX";
    return () => { document.title = prev; };
  }, []);

  const handleGetStarted = () => {
    navigate("/contact");
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
    </Layout>
  );
};

export default ConnectedTVAdvertising;
