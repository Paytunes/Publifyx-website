
import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/sections/whiteLabelDSP/HeroSection";
import WhiteLabelExplanationSection from "@/components/sections/whiteLabelDSP/WhiteLabelExplanationSection";
import WhyChooseSection from "@/components/sections/whiteLabelDSP/WhyChooseSection";
import FeaturesSection from "@/components/sections/whiteLabelDSP/FeaturesSection";
import BenefitsAndAudienceSection from "@/components/sections/whiteLabelDSP/BenefitsAndAudienceSection";
import HowItWorksSection from "@/components/sections/whiteLabelDSP/HowItWorksSection";
import WhiteLabelCTASection from "@/components/sections/whiteLabelDSP/WhiteLabelCTASection";
import WhiteLabelFAQSection from "@/components/sections/whiteLabelDSP/WhiteLabelFAQSection";
import FounderQuoteSection from "@/components/sections/FounderQuoteSection";
import ClientTestimonialSection from "@/components/sections/ClientTestimonialSection";

const WhiteLabelDSP = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "White Label DSP Platform | Launch Your Own DSP — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Launch your own branded white label DSP in 15 minutes with PublifyX. Multi-channel programmatic buying across Display, Video, Audio & CTV. No coding required.");
    return () => { document.title = "White Label DSP Platform | Launch Your Programmatic Ad Business — PublifyX"; };
  }, []);

  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <Layout transparentHeader>
      <HeroSection onGetStarted={handleGetStarted} />
      <WhiteLabelExplanationSection />
      <FounderQuoteSection
        quote="We built PublifyX to remove the biggest barrier in ad tech: Access. Agencies and startups shouldn't need million-dollar engineering teams to own powerful programmatic technology. Our white label DSP gives businesses control, speed, and margin from day one."
        name="Saurabh"
        title="CEO, PublifyX"
      />
      <ClientTestimonialSection
        quote="Launching our own branded DSP completely changed how clients perceive us. We're no longer just a media agency, we're a technology partner. The transition was smooth, and we were live within minutes."
        attribution="Founder, Performance Marketing Agency"
        results={[
          "Launched branded DSP in under 15 minutes",
          "Increased programmatic margins by 28%",
          "Improved client retention through platform access",
          "Expanded into CTV and Audio without additional tools",
        ]}
        variant="split"
      />
      <WhyChooseSection onGetStarted={handleGetStarted} />
      <FeaturesSection />
      <BenefitsAndAudienceSection onGetStarted={handleGetStarted} />
      <HowItWorksSection onGetStarted={handleGetStarted} />
      <WhiteLabelCTASection onGetStarted={handleGetStarted} />
      <WhiteLabelFAQSection />
    </Layout>
  );
};

export default WhiteLabelDSP;
