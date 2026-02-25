import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import displayAnalytics from "@/assets/display/display-analytics.webp";
import displayDevices from "@/assets/display/display-devices.webp";

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
      heroSubtitle="Display advertising remains the foundation of programmatic media buying. From banner ads on premium news sites to native placements within mobile apps, programmatic display offers advertisers massive reach, precise targeting, and real-time optimization capabilities. PublifyX provides a programmatic display advertising platform that connects you to billions of daily impressions across websites, mobile apps, and digital properties worldwide. Run banner ads, native ads, and rich media campaigns with advanced targeting, real-time bidding, and transparent reporting — all integrated within the PublifyX multi-channel DSP."
      relatedArticleSlug="online-banner-advertising-guide-2026"
      ctaTitle="Launch Display Campaigns Today"
      ctaDescription="Access billions of daily impressions across premium websites and apps with advanced targeting and real-time optimization."
      faqs={[
        { question: "What is programmatic display advertising?", answer: "Programmatic display advertising is the automated buying and selling of display ad placements through real-time bidding. Advertisers use a DSP to bid on impressions that match their targeting criteria across websites and apps." },
        { question: "What ad sizes are supported for display campaigns?", answer: "PublifyX supports all IAB standard display sizes including 728×90, 300×250, 160×600, 320×50, 300×600, and more. Custom sizes may be available depending on inventory sources." },
        { question: "How does targeting work for display ads?", answer: "You can target display audiences by demographics, interests, browsing behavior, contextual keywords, geographic location, device type, and custom audience segments built from first-party data." },
        { question: "What is the difference between display and native ads?", answer: "Standard display ads are clearly distinguishable banner-style placements. Native ads are designed to match the visual style and format of the surrounding content, creating a more integrated and less intrusive user experience." },
        { question: "Can I retarget users with display ads?", answer: "Yes. PublifyX supports pixel-based retargeting to re-engage users who have visited your website, as well as lookalike audience modeling to reach new users with similar profiles." },
      ]}
    >
      <section className="space-y-12">
        <div className="rounded-2xl overflow-hidden mb-2">
          <img src={displayAnalytics} alt="Programmatic display advertising analytics dashboard showing campaign performance metrics" width={800} height={450} loading="eager" decoding="async" className="w-full h-auto object-cover" />
          <p className="text-xs text-navy-400 mt-2 italic">Programmatic display connects you to billions of daily impressions across websites and apps worldwide.</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What Is Programmatic Display Advertising?</h2>
          <p className="text-navy-600 leading-relaxed mb-4">Programmatic display advertising is the automated buying and selling of display ad inventory through real-time bidding auctions. When a user visits a website or opens an app, the available ad space triggers a bid request that is sent to demand-side platforms. Advertisers bid on the impression based on whether the user matches their targeting criteria. The winning ad is served to the user in milliseconds.</p>
          <p className="text-navy-600 leading-relaxed mb-4">Display ads include standard banner formats (such as 300×250, 728×90, and 160×600), native ads that blend with the surrounding content, and rich media ads that incorporate interactive elements like expandable panels, video, or animation.</p>
          <p className="text-navy-600 leading-relaxed">Programmatic display accounts for the majority of all digital display ad spending globally. It provides advertisers with scale, efficiency, and the ability to target specific audiences across millions of websites and apps simultaneously.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">PublifyX Display Advertising Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Massive Inventory Reach", desc: "Access display inventory across hundreds of thousands of websites and mobile apps through our integrations with leading ad exchanges and SSPs." },
              { title: "Standard and Custom Ad Formats", desc: "Support for all IAB standard banner sizes, native ad formats, expandable rich media, and interstitial placements." },
              { title: "Advanced Audience Targeting", desc: "Target users based on demographics, interests, purchase behavior, browsing history, contextual relevance, device type, and geographic location." },
              { title: "Real-Time Bidding Optimization", desc: "Our bidding algorithms optimize in real time for your campaign goals — whether you are targeting CPM, CPC, CPA, or ROAS efficiency." },
              { title: "Retargeting and Prospecting", desc: "Re-engage users who have previously visited your website or interacted with your brand. Use lookalike modeling to find new audiences that share characteristics with your best customers." },
              { title: "Viewability and Brand Safety", desc: "Ensure your ads are seen by real users in brand-safe environments with viewability verification, fraud detection, and domain-level exclusion controls." },
              { title: "Transparent Reporting", desc: "Access real-time dashboards with metrics including impressions, clicks, CTR, conversions, viewability rate, and cost efficiency." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img src={displayDevices} alt="Display ads shown across multiple devices including desktop, laptop, and mobile" width={800} height={450} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Display Ad Formats Available on PublifyX</h2>
          <div className="space-y-4">
            {[
              { title: "Standard IAB Banners", desc: "All standard banner sizes including leaderboard (728×90), medium rectangle (300×250), skyscraper (160×600), and mobile-optimized formats (320×50, 300×600)." },
              { title: "Native Display Ads", desc: "Ads that match the look, feel, and function of the surrounding content. Native placements drive higher engagement by integrating naturally into the user experience." },
              { title: "Rich Media Ads", desc: "Interactive display ads with expandable panels, embedded video, carousels, and animation for enhanced user engagement." },
              { title: "Interstitial Ads", desc: "Full-screen display ads shown during natural transition points within mobile apps and mobile web experiences." },
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