
import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import AdInActionSection from "@/components/sections/AdInActionSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import CTASection from "@/components/sections/CTASection";
import JoinRevolutionSection from "@/components/sections/JoinRevolutionSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SolutionsSection />
      <ProductsSection />
      <AdInActionSection />
      <StatisticsSection />
      <CTASection />
      <JoinRevolutionSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
