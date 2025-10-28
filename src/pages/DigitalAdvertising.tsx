import Layout from "@/components/Layout";
import DigitalHeroSection from "@/components/sections/digitalAdvertising/DigitalHeroSection";
import PlatformGridSection from "@/components/sections/digitalAdvertising/PlatformGridSection";
import InquiryBannerSection from "@/components/sections/digitalAdvertising/InquiryBannerSection";
import ExplainerSection from "@/components/sections/digitalAdvertising/ExplainerSection";
import PricingTableSection from "@/components/sections/digitalAdvertising/PricingTableSection";
import DigitalFAQSection from "@/components/sections/digitalAdvertising/DigitalFAQSection";
import DigitalContactSection from "@/components/sections/digitalAdvertising/DigitalContactSection";

const DigitalAdvertising = () => {
  return (
    <Layout>
      <DigitalHeroSection />
      <PlatformGridSection />
      <InquiryBannerSection />
      <ExplainerSection />
      <PricingTableSection />
      <DigitalFAQSection />
      <DigitalContactSection />
    </Layout>
  );
};

export default DigitalAdvertising;
