
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdInsights from "./pages/AdInsights";
import WhiteLabelDSP from "./pages/WhiteLabelDSP";
import ConnectedTVAdvertising from "./pages/ConnectedTVAdvertising";
import OnlineBannerAdvertising from "./pages/OnlineBannerAdvertising";
import DigitalAdvertising from "./pages/DigitalAdvertising";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPostOnlineBannerAdvertising2025 from "./pages/BlogPost-OnlineBannerAdvertising2025";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ad-insights" element={<AdInsights />} />
          <Route path="/white-label-dsp" element={<WhiteLabelDSP />} />
          <Route path="/connected-tv-advertising" element={<ConnectedTVAdvertising />} />
          <Route path="/online-banner-advertising" element={<OnlineBannerAdvertising />} />
          <Route path="/digital-advertising" element={<DigitalAdvertising />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/online-banner-advertising-guide-2025" element={<BlogPostOnlineBannerAdvertising2025 />} />
          <Route path="/terms_and_conditions" element={<TermsConditions />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
