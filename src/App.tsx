
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
// High-traffic landing pages eagerly bundled to eliminate lazy-load waterfall (LCP)
import ConnectedTVAdvertising from "./pages/ConnectedTVAdvertising";
import OnlineBannerAdvertising from "./pages/OnlineBannerAdvertising";
import WhiteLabelDSP from "./pages/WhiteLabelDSP";
import DigitalAdvertising from "./pages/DigitalAdvertising";
import Contact from "./pages/Contact";

// Lower-priority routes remain lazy-loaded
const AdInsights = lazy(() => import("./pages/AdInsights"));
const BlogPostOnlineBannerAdvertising2026 = lazy(() => import("./pages/BlogPost-OnlineBannerAdvertising2026"));
const BlogPostAdTechTrends2026 = lazy(() => import("./pages/BlogPost-AdTechTrends2026"));
const BlogPostWhiteLabelDSPReasons = lazy(() => import("./pages/BlogPost-WhiteLabelDSPReasons"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ad-insights" element={<AdInsights />} />
            <Route path="/white-label-dsp" element={<WhiteLabelDSP />} />
            <Route path="/connected-tv-advertising" element={<ConnectedTVAdvertising />} />
            <Route path="/online-banner-advertising" element={<OnlineBannerAdvertising />} />
            <Route path="/digital-advertising" element={<DigitalAdvertising />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/online-banner-advertising-guide-2026" element={<BlogPostOnlineBannerAdvertising2026 />} />
            <Route path="/blog/ad-tech-trends-2026" element={<BlogPostAdTechTrends2026 />} />
            <Route path="/blog/white-label-dsp-reasons" element={<BlogPostWhiteLabelDSPReasons />} />
            <Route path="/terms_and_conditions" element={<TermsConditions />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
