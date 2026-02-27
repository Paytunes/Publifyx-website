import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import WhiteLabelDSP from "./pages/WhiteLabelDSP";
import Contact from "./pages/Contact";

// Lazy-loaded pages
const CTVAdvertisingNew = lazy(() => import("./pages/CTVAdvertisingNew"));
const OTTAdvertising = lazy(() => import("./pages/OTTAdvertising"));
const ProgrammaticAudioAdvertising = lazy(() => import("./pages/ProgrammaticAudioAdvertising"));
const ProgrammaticDisplayAdvertising = lazy(() => import("./pages/ProgrammaticDisplayAdvertising"));
const ProgrammaticVideoAdvertising = lazy(() => import("./pages/ProgrammaticVideoAdvertising"));
const DSPForAgencies = lazy(() => import("./pages/DSPForAgencies"));
const Pricing = lazy(() => import("./pages/Pricing"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Features = lazy(() => import("./pages/Features"));
const Integrations = lazy(() => import("./pages/Integrations"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const About = lazy(() => import("./pages/About"));
const WhiteLabelVsSelfServe = lazy(() => import("./pages/WhiteLabelVsSelfServe"));
const CTVAdvertisingIndia = lazy(() => import("./pages/CTVAdvertisingIndia"));
const OnlineBannerAdvertising = lazy(() => import("./pages/OnlineBannerAdvertising"));
const DigitalAdvertising = lazy(() => import("./pages/DigitalAdvertising"));
const AdInsights = lazy(() => import("./pages/AdInsights"));
const Services = lazy(() => import("./pages/Services"));
const CEO = lazy(() => import("./pages/CEO"));

// Existing blog posts
const BlogPostOnlineBannerAdvertising2026 = lazy(() => import("./pages/BlogPost-OnlineBannerAdvertising2026"));
const BlogPostAdTechTrends2026 = lazy(() => import("./pages/BlogPost-AdTechTrends2026"));
const BlogPostWhiteLabelDSPReasons = lazy(() => import("./pages/BlogPost-WhiteLabelDSPReasons"));
const BlogPostConnectedTVAdvertising = lazy(() => import("./pages/BlogPost-ConnectedTVAdvertising"));

// New Phase 3 blog posts
const BlogPostWhatIsWhiteLabelDSP = lazy(() => import("./pages/BlogPost-WhatIsWhiteLabelDSP"));
const BlogPostHowToLaunchDSP = lazy(() => import("./pages/BlogPost-HowToLaunchDSP"));
const BlogPostCTVvsOTT = lazy(() => import("./pages/BlogPost-CTVvsOTT"));
const BlogPostProgrammaticAudioGuide = lazy(() => import("./pages/BlogPost-ProgrammaticAudioGuide"));
const BlogPostWhyAgenciesSwitching = lazy(() => import("./pages/BlogPost-WhyAgenciesSwitching"));
const BlogPostHowCTVWorks = lazy(() => import("./pages/BlogPost-HowCTVWorks"));
const BlogPostSmartTVGuide = lazy(() => import("./pages/BlogPost-SmartTVGuide"));
const BlogPostDSPvsSSP = lazy(() => import("./pages/BlogPost-DSPvsSSP"));
const BlogPostWhiteLabelBenefits = lazy(() => import("./pages/BlogPost-WhiteLabelBenefits"));
const BlogPostProgrammaticIndia = lazy(() => import("./pages/BlogPost-ProgrammaticIndia"));
const BlogPostHowToBuyOTTAds = lazy(() => import("./pages/BlogPost-HowToBuyOTTAds"));
const BlogPostWhiteLabelVsBuildInHouse = lazy(() => import("./pages/BlogPost-WhiteLabelVsBuildInHouse"));

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
            {/* Core */}
            <Route path="/" element={<Index />} />
            <Route path="/white-label-dsp" element={<WhiteLabelDSP />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />

            {/* Core Service Pages */}
            <Route path="/ctv-advertising" element={<CTVAdvertisingNew />} />
            <Route path="/connected-tv-advertising" element={<CTVAdvertisingNew />} />
            <Route path="/ott-advertising" element={<OTTAdvertising />} />
            <Route path="/programmatic-audio-advertising" element={<ProgrammaticAudioAdvertising />} />
            <Route path="/programmatic-display-advertising" element={<ProgrammaticDisplayAdvertising />} />
            <Route path="/programmatic-video-advertising" element={<ProgrammaticVideoAdvertising />} />
            <Route path="/dsp-for-agencies" element={<DSPForAgencies />} />
            <Route path="/pricing" element={<Pricing />} />

            {/* Supporting Pages */}
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/features" element={<Features />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/saurabh" element={<CEO />} />
            <Route path="/white-label-dsp-vs-self-serve-dsp" element={<WhiteLabelVsSelfServe />} />
            <Route path="/ctv-advertising-india" element={<CTVAdvertisingIndia />} />

            {/* Legacy */}
            <Route path="/online-banner-advertising" element={<OnlineBannerAdvertising />} />
            <Route path="/digital-advertising" element={<DigitalAdvertising />} />
            <Route path="/ad-insights" element={<AdInsights />} />

            {/* Blog Posts — Existing */}
            <Route path="/blog/online-banner-advertising-guide-2026" element={<BlogPostOnlineBannerAdvertising2026 />} />
            <Route path="/blog/ad-tech-trends-2026" element={<BlogPostAdTechTrends2026 />} />
            <Route path="/blog/white-label-dsp-reasons" element={<BlogPostWhiteLabelDSPReasons />} />
            <Route path="/blog/connected-tv-advertising-guide" element={<BlogPostConnectedTVAdvertising />} />

            {/* Blog Posts — Phase 3 */}
            <Route path="/blog/what-is-a-white-label-dsp" element={<BlogPostWhatIsWhiteLabelDSP />} />
            <Route path="/blog/how-to-launch-your-own-dsp" element={<BlogPostHowToLaunchDSP />} />
            <Route path="/blog/ctv-vs-ott-advertising" element={<BlogPostCTVvsOTT />} />
            <Route path="/blog/guide-to-programmatic-audio-advertising" element={<BlogPostProgrammaticAudioGuide />} />
            <Route path="/blog/why-agencies-switching-to-white-label-dsp" element={<BlogPostWhyAgenciesSwitching />} />
            <Route path="/blog/how-does-connected-tv-advertising-work" element={<BlogPostHowCTVWorks />} />
            <Route path="/blog/smart-tv-advertising-guide" element={<BlogPostSmartTVGuide />} />
            <Route path="/blog/dsp-vs-ssp-explained" element={<BlogPostDSPvsSSP />} />
            <Route path="/blog/benefits-of-white-label-programmatic-advertising" element={<BlogPostWhiteLabelBenefits />} />
            <Route path="/blog/programmatic-advertising-india" element={<BlogPostProgrammaticIndia />} />
            <Route path="/blog/how-to-buy-ott-ads-programmatically" element={<BlogPostHowToBuyOTTAds />} />
            <Route path="/blog/white-label-dsp-vs-building-in-house" element={<BlogPostWhiteLabelVsBuildInHouse />} />

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
