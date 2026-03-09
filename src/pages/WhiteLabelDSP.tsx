import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/sections/whiteLabelDSP/HeroSection";
import WhiteLabelExplanationSection from "@/components/sections/whiteLabelDSP/WhiteLabelExplanationSection";
import WhyChooseSection from "@/components/sections/whiteLabelDSP/WhyChooseSection";
import FeaturesSection from "@/components/sections/whiteLabelDSP/FeaturesSection";
import BenefitsAndAudienceSection from "@/components/sections/whiteLabelDSP/BenefitsAndAudienceSection";
import HowItWorksSection from "@/components/sections/whiteLabelDSP/HowItWorksSection";
import WhiteLabelCTASection from "@/components/sections/whiteLabelDSP/WhiteLabelCTASection";
import WhiteLabelFAQSection from "@/components/sections/whiteLabelDSP/WhiteLabelFAQSection";
import FounderQuoteSection from "@/components/sections/FounderQuoteSection";
import ClientTestimonialSection from "@/components/sections/ClientTestimonialSection";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "White Label DSP Platform",
  serviceType: "White Label Demand Side Platform",
  provider: {
    "@type": "Organization",
    name: "PublifyX",
    url: "https://www.publifyx.com",
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  description:
    "Launch your own branded white label DSP in 15 minutes with PublifyX. Multi-channel programmatic buying across Display, Video, Audio, CTV and OTT. No coding required.",
  url: "https://www.publifyx.com/white-label-dsp",
  category: "Programmatic Advertising Platform",
  offers: {
    "@type": "Offer",
    url: "https://www.publifyx.com/white-label-dsp",
    availability: "https://schema.org/InStock",
  },
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PublifyX White Label DSP",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web-based",
  description:
    "A fully branded white label demand side platform enabling agencies, ad networks and startups to launch their own programmatic advertising platform.",
  publisher: {
    "@type": "Organization",
    name: "PublifyX",
  },
  featureList: [
    "Full brand customization",
    "Multi-channel media buying",
    "Real-time bidding engine",
    "Advanced audience targeting",
    "White-labeled reporting",
    "Self-serve and managed service configuration",
  ],
  offers: {
    "@type": "Offer",
    url: "https://www.publifyx.com/white-label-dsp",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to launch a white label DSP with PublifyX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most white label DSP deployments with PublifyX are completed within 15 minutes. This includes branding customization, domain setup, SSP integrations, and platform testing.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical expertise to operate a white label DSP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. PublifyX handles all technical infrastructure, server management, and platform updates. You and your team focus on client relationships, campaign strategy, and business development. We provide full onboarding training.",
      },
    },
    {
      "@type": "Question",
      name: "What ad formats does PublifyX white label DSP support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PublifyX supports display banners, native ads, video (pre-roll, mid-roll, outstream), audio ads (streaming, podcast, digital radio), Connected TV (CTV), and Over-the-Top (OTT) video formats.",
      },
    },
    {
      "@type": "Question",
      name: "Can I set my own pricing and margins with a white label DSP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You have full control over your pricing structure. You decide what to charge your advertisers and how to structure your margins. PublifyX operates transparently in the background.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a white label DSP and a self-serve DSP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A self-serve DSP is a SaaS tool where you sign up, deposit funds, and start buying media — but the platform carries the provider's branding. A white label DSP is fully rebranded as your own product, giving you control over branding, pricing, client access, and SSP partnerships.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.publifyx.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.publifyx.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "White Label DSP",
      item: "https://www.publifyx.com/white-label-dsp",
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  reviewBody:
    "Launching our own branded DSP completely changed how clients perceive us. The transition was smooth and we were live within minutes.",
  author: {
    "@type": "Person",
    name: "Founder, Performance Marketing Agency",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  itemReviewed: {
    "@type": "SoftwareApplication",
    name: "PublifyX White Label DSP",
  },
};

const allSchemas = [serviceSchema, softwareAppSchema, faqSchema, breadcrumbSchema, reviewSchema];

const WhiteLabelDSP = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "White Label DSP Platform | Launch Your Own DSP — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Launch your own branded white label DSP in 15 minutes with PublifyX. Multi-channel programmatic buying across Display, Video, Audio & CTV. No coding required.",
      );

    // Inject JSON-LD schemas
    const scripts: HTMLScriptElement[] = allSchemas.map((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `wl-dsp-schema-${i}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      document.title = "White Label DSP Platform | Launch Your Programmatic Ad Business — PublifyX";
      scripts.forEach((s) => s.remove());
    };
  }, []);

  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <Layout transparentHeader>
      <HeroSection onGetStarted={handleGetStarted} />
      <WhiteLabelExplanationSection />
      <FounderQuoteSection
        quote="We built PublifyX to remove the biggest barrier in ad tech: Access. Agencies and startups shouldn't need million-dollar engineering teams to own powerful programmatic technology. Our white label DSP gives businesses control, speed, and margin from day one."
        name="Saurabh"
        title="CEO, PublifyX"
      />
      <WhyChooseSection onGetStarted={handleGetStarted} />
      <FeaturesSection />
      <BenefitsAndAudienceSection onGetStarted={handleGetStarted} />
      <HowItWorksSection onGetStarted={handleGetStarted} />
      <ClientTestimonialSection
        quote="Launching our own branded DSP completely changed how clients perceive us. We're no longer just a media agency, we're a technology partner. The transition was smooth, and we were live within minutes."
        attribution="Founder, Performance Marketing Agency"
        results={[
          "Launched branded DSP in under 15 minutes",
          "Increased programmatic margins by 28%",
          "Improved client retention through platform access",
          "Expanded into CTV and Audio without additional tools",
        ]}
        variant="split"
      />
      <WhiteLabelCTASection onGetStarted={handleGetStarted} />
      <WhiteLabelFAQSection />
    </Layout>
  );
};

export default WhiteLabelDSP;
