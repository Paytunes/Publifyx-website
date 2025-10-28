import Footer from "@/components/Footer";
import DigitalHeroSection from "@/components/sections/digitalAdvertising/DigitalHeroSection";
import PlatformGridSection from "@/components/sections/digitalAdvertising/PlatformGridSection";
import InquiryBannerSection from "@/components/sections/digitalAdvertising/InquiryBannerSection";
import ExplainerSection from "@/components/sections/digitalAdvertising/ExplainerSection";
import PricingTableSection from "@/components/sections/digitalAdvertising/PricingTableSection";
import DigitalFAQSection from "@/components/sections/digitalAdvertising/DigitalFAQSection";
import DigitalContactSection from "@/components/sections/digitalAdvertising/DigitalContactSection";

const DigitalAdvertising = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <DigitalHeroSection />
        <PlatformGridSection />
        <InquiryBannerSection />
        <ExplainerSection />
        <PricingTableSection />
        <DigitalFAQSection />
        <DigitalContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default DigitalAdvertising;
