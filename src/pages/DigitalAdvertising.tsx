import Layout from "@/components/Layout";
import PlatformGridSection from "@/components/sections/digitalAdvertising/PlatformGridSection";
import InquiryBannerSection from "@/components/sections/digitalAdvertising/InquiryBannerSection";
import DigitalInfoSection from "@/components/sections/digitalAdvertising/DigitalInfoSection";
import PricingTableSection from "@/components/sections/digitalAdvertising/PricingTableSection";
import DigitalFAQSection from "@/components/sections/digitalAdvertising/DigitalFAQSection";
import DigitalContactSection from "@/components/sections/digitalAdvertising/DigitalContactSection";

const DigitalAdvertising = () => {
  return (
    <Layout>
      <PlatformGridSection />
      <InquiryBannerSection />
      <DigitalInfoSection />
      <PricingTableSection />
      <DigitalFAQSection />
      <DigitalContactSection />
    </Layout>
  );
};

export default DigitalAdvertising;
