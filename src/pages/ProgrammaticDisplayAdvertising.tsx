import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const ProgrammaticDisplayAdvertising = () => {
  useEffect(() => {
    document.title = "Programmatic Display Advertising Platform | Display DSP — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Run targeted display advertising campaigns across premium websites and apps with PublifyX's programmatic display DSP. Banner ads, native ads, and rich media at scale.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Services" },
        { label: "Programmatic Display Advertising" },
      ]}
      heroTitle="Programmatic Display Advertising — Banner, Native, and Rich Media Ads at Scale"
      heroSubtitle="Display advertising remains the foundation of programmatic media buying. Connect to billions of daily impressions across websites, mobile apps, and digital properties worldwide."
      relatedArticleSlug="online-banner-advertising-guide-2026"
      ctaTitle="Launch Display Campaigns Today"
      ctaDescription="Access billions of daily impressions across premium websites and apps with advanced targeting and real-time optimization."
      faqs={[
        { question: "What is programmatic display advertising?", answer: "Programmatic display advertising is the automated buying and selling of display ad inventory through real-time bidding auctions. When a user visits a website or opens an app, the available ad space triggers a bid request that is sent to demand-side platforms." },
        { question: "What display ad formats does PublifyX support?", answer: "PublifyX supports all IAB standard banner sizes, native ad formats, expandable rich media, and interstitial placements across desktop and mobile." },
        { question: "Can I retarget users with display ads?", answer: "Yes. PublifyX supports retargeting users who have previously visited your website or interacted with your brand. You can also use lookalike modeling to find new audiences." },
        { question: "How is display ad performance measured?", answer: "Key metrics include impressions, clicks, click-through rate (CTR), conversions, viewability rate, and cost efficiency. All available in real-time dashboards." },
        { question: "Is programmatic display advertising brand-safe?", answer: "Yes. PublifyX provides domain-level and category-level exclusions, pre-bid fraud filtering, viewability verification, and third-party brand safety integrations." },
      ]}
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What Is Programmatic Display Advertising?</h2>
          <p className="text-navy-600 leading-relaxed mb-4">Programmatic display advertising is the automated buying and selling of display ad inventory through real-time bidding auctions. When a user visits a website or opens an app, the available ad space triggers a bid request sent to demand-side platforms. Advertisers bid on the impression based on whether the user matches their targeting criteria. The winning ad is served in milliseconds.</p>
          <p className="text-navy-600 leading-relaxed">Display ads include standard banner formats (such as 300×250, 728×90, and 160×600), native ads that blend with surrounding content, and rich media ads with interactive elements. Programmatic display accounts for the majority of all digital display ad spending globally.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">PublifyX Display Advertising Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Massive Inventory Reach", desc: "Access display inventory across hundreds of thousands of websites and mobile apps through leading ad exchanges and SSPs." },
              { title: "Standard and Custom Ad Formats", desc: "Support for all IAB standard banner sizes, native ad formats, expandable rich media, and interstitial placements." },
              { title: "Advanced Audience Targeting", desc: "Target users by demographics, interests, purchase behavior, browsing history, contextual relevance, device type, and geography." },
              { title: "Real-Time Bidding Optimization", desc: "Bidding algorithms optimize in real time for CPM, CPC, CPA, or ROAS efficiency." },
              { title: "Retargeting and Prospecting", desc: "Re-engage previous visitors and use lookalike modeling to find new audiences that share characteristics with your best customers." },
              { title: "Viewability and Brand Safety", desc: "Viewability verification, fraud detection, and domain-level exclusion controls ensure ads are seen by real users." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Display Ad Formats</h2>
          <div className="space-y-4">
            {[
              { title: "Standard IAB Banners", desc: "All standard sizes including leaderboard (728×90), medium rectangle (300×250), skyscraper (160×600), and mobile-optimized formats." },
              { title: "Native Display Ads", desc: "Ads that match the look, feel, and function of surrounding content. Drive higher engagement by integrating naturally." },
              { title: "Rich Media Ads", desc: "Interactive display ads with expandable panels, embedded video, carousels, and animation for enhanced engagement." },
              { title: "Interstitial Ads", desc: "Full-screen display ads shown during natural transition points within mobile apps and mobile web." },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-brand-orange-500 pl-5 py-2">
                <h3 className="font-bold text-navy-900">{item.title}</h3>
                <p className="text-sm text-navy-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-navy-900 mb-3">Explore Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/programmatic-video-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Video Advertising</Link>
            <Link to="/ott-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">OTT Advertising</Link>
            <Link to="/ctv-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">CTV Advertising</Link>
            <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default ProgrammaticDisplayAdvertising;
