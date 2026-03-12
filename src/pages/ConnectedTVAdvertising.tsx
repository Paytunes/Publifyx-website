
import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CTVHeroSection from "@/components/sections/connectedTV/CTVHeroSection";
import CTVExplanationSection from "@/components/sections/connectedTV/CTVExplanationSection";
import CTVBenefitsSection from "@/components/sections/connectedTV/CTVBenefitsSection";
import CTVFeaturesSection from "@/components/sections/connectedTV/CTVFeaturesSection";
import CTVStepsSection from "@/components/sections/connectedTV/CTVStepsSection";
import CTVCTASection from "@/components/sections/connectedTV/CTVCTASection";
import CTVFAQSection from "@/components/sections/connectedTV/CTVFAQSection";
import FounderQuoteSection from "@/components/sections/FounderQuoteSection";
import ClientTestimonialSection from "@/components/sections/ClientTestimonialSection";

const ConnectedTVAdvertising = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "CTV Advertising Platform | Programmatic Connected TV Ads — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Launch data-driven CTV campaigns with PublifyX's connected TV advertising platform. Target households across premium streaming inventory with programmatic precision and real-time reporting.");
    return () => { document.title = "PublifyX — Programmatic Advertising Platform"; };
  }, []);

  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <Layout transparentHeader>
      <CTVHeroSection onGetStarted={handleGetStarted} />
      <CTVExplanationSection onGetStarted={handleGetStarted} />
      <FounderQuoteSection
        quote="Connected TV is where brand impact meets digital precision. We designed our CTV Advertising capabilities to give advertisers the storytelling power of television with the targeting and accountability modern marketers demand."
        name="Saurabh"
        title="CEO PublifyX"
      />
      <CTVBenefitsSection onGetStarted={handleGetStarted} />
      <CTVFeaturesSection />
      <CTVStepsSection onGetStarted={handleGetStarted} />
      <ClientTestimonialSection
        quote="CTV campaigns through PublifyX delivered stronger completion rates than any other video channel we've tested. The targeting precision gave us both reach and relevance."
        attribution="Marketing Head, Leading D2C Brand"
        results={[
          "Household-level targeting across key metros",
          "Cross-device retargeting increased post-view conversions",
          "Transparent reporting improved campaign optimization speed",
        ]}
        variant="split"
      />
      <CTVCTASection onGetStarted={handleGetStarted} />
      <CTVFAQSection />
    </Layout>
  );
};

export default ConnectedTVAdvertising;
