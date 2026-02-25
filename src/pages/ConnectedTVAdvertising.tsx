
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
    document.title = "Connected TV Advertising Platform | CTV Ads — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Reach engaged audiences on Smart TVs with PublifyX Connected TV advertising. Premium CTV inventory, real-time analytics, and programmatic precision.");
    return () => { document.title = "PublifyX — Programmatic Advertising Platform"; };
  }, []);

  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <Layout transparentHeader>
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
