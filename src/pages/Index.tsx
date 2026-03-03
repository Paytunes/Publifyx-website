import { lazy, Suspense } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";

// Lazy-load below-fold sections to reduce initial JS bundle
const SolutionsSection = lazy(() => import("@/components/sections/SolutionsSection"));
const ProductsSection = lazy(() => import("@/components/sections/ProductsSection"));
const AdInActionSection = lazy(() => import("@/components/sections/AdInActionSection"));
const StatisticsSection = lazy(() => import("@/components/sections/StatisticsSection"));
const JoinRevolutionSection = lazy(() => import("@/components/sections/JoinRevolutionSection"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));

const Index = () => {
  return (
    <Layout transparentHeader>
      <HeroSection />
      {/* Min-height fallback prevents CLS (layout shift) as below-fold sections lazy-load */}
      <Suspense fallback={<div style={{ minHeight: "2400px" }} aria-hidden="true" />}>
        <SolutionsSection />
        <ProductsSection />
        <AdInActionSection />
        <StatisticsSection />
        <JoinRevolutionSection />
        <CTASection />
        <FAQSection />
      </Suspense>
    </Layout>
  );
};

export default Index;
