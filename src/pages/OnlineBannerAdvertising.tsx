
import Layout from "@/components/Layout";
import { useState } from "react";
import GetStartedModal from "@/components/GetStartedModal";
import BannerHeroSection from "@/components/sections/bannerAdvertising/BannerHeroSection";
import BannerCoreMessageSection from "@/components/sections/bannerAdvertising/BannerCoreMessageSection";
import BannerBenefitsSection from "@/components/sections/bannerAdvertising/BannerBenefitsSection";
import BannerFeaturesSection from "@/components/sections/bannerAdvertising/BannerFeaturesSection";
import BannerSuccessStoriesSection from "@/components/sections/bannerAdvertising/BannerSuccessStoriesSection";
import BannerCTASection from "@/components/sections/bannerAdvertising/BannerCTASection";

const OnlineBannerAdvertising = () => {
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsGetStartedModalOpen(true);
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

      <GetStartedModal 
        isOpen={isGetStartedModalOpen} 
        onClose={() => setIsGetStartedModalOpen(false)} 
      />
    </Layout>
  );
};

export default OnlineBannerAdvertising;
