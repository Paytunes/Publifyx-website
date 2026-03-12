import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// All pages are lazy-loaded so the main entry bundle stays minimal.
// Contact is lazy — form functionality is 100% preserved, just deferred until /contact is navigated to.
const Index = lazy(() => import("./pages/Index"));
const Contact = lazy(() => import("./pages/Contact"));

// High-traffic pages
const Blog = lazy(() => import("./pages/Blog"));
const WhiteLabelDSP = lazy(() => import("./pages/WhiteLabelDSP"));

// Lazy-loaded pages
const CTVAdvertisingNew = lazy(() => import("./pages/CTVAdvertisingNew"));
const OTTAdvertising = lazy(() => import("./pages/OTTAdvertising"));

const About = lazy(() => import("./pages/About"));
const WhiteLabelVsSelfServe = lazy(
  () => import("./pages/WhiteLabelVsSelfServe"),
);
const CTVAdvertisingIndia = lazy(() => import("./pages/CTVAdvertisingIndia"));
const OnlineBannerAdvertising = lazy(
  () => import("./pages/OnlineBannerAdvertising"),
);
const DigitalAdvertising = lazy(() => import("./pages/DigitalAdvertising"));
const Services = lazy(() => import("./pages/Services"));
const CEO = lazy(() => import("./pages/CEO"));
const ProgrammaticAudioAdvertising = lazy(
  () => import("./pages/ProgrammaticAudioAdvertising"),
);
const ProgrammaticDisplayAdvertising = lazy(
  () => import("./pages/ProgrammaticDisplayAdvertising"),
);

// Existing blog posts
const BlogPostOnlineBannerAdvertising2026 = lazy(
  () => import("./pages/BlogPost-OnlineBannerAdvertising2026"),
);
const BlogPostAdTechTrends2026 = lazy(
  () => import("./pages/BlogPost-AdTechTrends2026"),
);
const BlogPostWhiteLabelDSPReasons = lazy(
  () => import("./pages/BlogPost-WhiteLabelDSPReasons"),
);
const BlogPostConnectedTVAdvertising = lazy(
  () => import("./pages/BlogPost-ConnectedTVAdvertising"),
);

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
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            {/* Core */}
            <Route path="/" element={<Index />} />
            <Route path="/white-label-dsp" element={<WhiteLabelDSP />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />

            {/* Core Service Pages */}
            <Route path="/ctv-advertising" element={<CTVAdvertisingNew />} />
            <Route
              path="/connected-tv-advertising"
              element={<CTVAdvertisingNew />}
            />
            <Route path="/ott-advertising" element={<OTTAdvertising />} />

            {/* Supporting Pages */}
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/saurabh" element={<CEO />} />

            {/* Legacy */}
            <Route
              path="/programmatic-audio-advertising"
              element={<ProgrammaticAudioAdvertising />}
            />
            <Route
              path="/programmatic-display-advertising"
              element={<ProgrammaticDisplayAdvertising />}
            />
            <Route
              path="/online-banner-advertising"
              element={<OnlineBannerAdvertising />}
            />
            <Route
              path="/digital-advertising"
              element={<DigitalAdvertising />}
            />

            {/* Blog Posts — Existing */}
            <Route
              path="/blog/online-banner-advertising-guide-2026"
              element={<BlogPostOnlineBannerAdvertising2026 />}
            />
            <Route
              path="/blog/ad-tech-trends-2026"
              element={<BlogPostAdTechTrends2026 />}
            />
            <Route
              path="/blog/white-label-dsp-reasons"
              element={<BlogPostWhiteLabelDSPReasons />}
            />
            <Route
              path="/blog/connected-tv-advertising-guide"
              element={<BlogPostConnectedTVAdvertising />}
            />

            {/* Legal */}
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
