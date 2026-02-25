
import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BannerHeroSection from "@/components/sections/bannerAdvertising/BannerHeroSection";
import BannerCoreMessageSection from "@/components/sections/bannerAdvertising/BannerCoreMessageSection";
import BannerBenefitsSection from "@/components/sections/bannerAdvertising/BannerBenefitsSection";
import BannerFeaturesSection from "@/components/sections/bannerAdvertising/BannerFeaturesSection";
import BannerSuccessStoriesSection from "@/components/sections/bannerAdvertising/BannerSuccessStoriesSection";
import BannerCTASection from "@/components/sections/bannerAdvertising/BannerCTASection";

const OnlineBannerAdvertising = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Online Banner Advertising Solutions | High-Impact Display Ads — PublifyX";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Amplify your brand with targeted online banner advertising. High-impact display campaigns with advanced targeting and real-time optimization. Get started in 30 seconds.");
    return () => { document.title = "White Label DSP Platform | Launch Your Programmatic Ad Business — PublifyX"; };
  }, []);

  const handleGetStarted = () => {
    navigate("/contact");
  };

  const scrollToExplainer = () => {
    const element = document.getElementById('core-message-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <BannerHeroSection 
        onGetStarted={handleGetStarted} 
        onWatchDemo={scrollToExplainer}
      />
      
      <BannerCoreMessageSection />
      
      <BannerBenefitsSection />
      
      <BannerFeaturesSection />
      
      <BannerSuccessStoriesSection />
      
      <BannerCTASection onGetStarted={handleGetStarted} />
    </Layout>
  );
};

export default OnlineBannerAdvertising;
