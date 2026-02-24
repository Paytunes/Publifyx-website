import { useEffect } from "react";
import Layout from "@/components/Layout";
import PublisherLogosSection from "@/components/sections/digitalAdvertising/PublisherLogosSection";
import DigitalPricingSection from "@/components/sections/digitalAdvertising/DigitalPricingSection";
import TMAInsightsSection from "@/components/sections/digitalAdvertising/TMAInsightsSection";
import TopAdSpendSection from "@/components/sections/digitalAdvertising/TopAdSpendSection";
import TopMediasSection from "@/components/sections/digitalAdvertising/TopMediasSection";
import PopularMediasSection from "@/components/sections/digitalAdvertising/PopularMediasSection";
import TopMediaOptionsSection from "@/components/sections/digitalAdvertising/TopMediaOptionsSection";
import TopCategoriesSection from "@/components/sections/digitalAdvertising/TopCategoriesSection";
import WhatAreDigitalAdsSection from "@/components/sections/digitalAdvertising/WhatAreDigitalAdsSection";
import WhyTrustSection from "@/components/sections/digitalAdvertising/WhyTrustSection";
import AdvantagesSection from "@/components/sections/digitalAdvertising/AdvantagesSection";
import TypesOfAdsSection from "@/components/sections/digitalAdvertising/TypesOfAdsSection";
import CostInIndiaSection from "@/components/sections/digitalAdvertising/CostInIndiaSection";
import WhatAffectsCostSection from "@/components/sections/digitalAdvertising/WhatAffectsCostSection";
import PlatformComparisonSection from "@/components/sections/digitalAdvertising/PlatformComparisonSection";
import HowToBookSection from "@/components/sections/digitalAdvertising/HowToBookSection";
import WhyChooseMediaAntSection from "@/components/sections/digitalAdvertising/WhyChooseMediaAntSection";
import DigitalFAQSection from "@/components/sections/digitalAdvertising/DigitalFAQSection";

const DigitalAdvertising = () => {
  useEffect(() => {
    document.title = "Digital Advertising in India — Rates, Platforms & Strategy | PublifyX";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Compare digital ad rates across India's top platforms. Launch targeted campaigns with real-time analytics and measurable ROI across display, video, and streaming channels.");
    return () => { document.title = "White Label DSP Platform | Launch Your Programmatic Ad Business — PublifyX"; };
  }, []);

  return (
    <Layout>
      <PublisherLogosSection />
      <TMAInsightsSection />
      <DigitalPricingSection />
      <TopAdSpendSection />
      <TopMediasSection />
      <PopularMediasSection />
      <TopMediaOptionsSection />
      <TopCategoriesSection />
      <WhatAreDigitalAdsSection />
      <WhyTrustSection />
      <AdvantagesSection />
      <TypesOfAdsSection />
      <CostInIndiaSection />
      <WhatAffectsCostSection />
      <PlatformComparisonSection />
      <HowToBookSection />
      <WhyChooseMediaAntSection />
      <DigitalFAQSection />
    </Layout>
  );
};

export default DigitalAdvertising;
