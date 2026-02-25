import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import videoProduction from "@/assets/video/video-production.webp";
import videoStreaming from "@/assets/video/video-streaming.webp";

const ProgrammaticVideoAdvertising = () => {
  useEffect(() => {
    document.title = "Programmatic Video Advertising Platform | Video DSP — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Run high-impact video ad campaigns across websites, apps, and streaming platforms with PublifyX's programmatic video advertising platform. Pre-roll, mid-roll, and outstream formats.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Services" },
        { label: "Programmatic Video Advertising" },
      ]}
      heroTitle="Programmatic Video Advertising — High-Impact Video Ads Across Web, App, and Streaming"
      heroSubtitle="Video advertising commands attention like no other digital format. With higher engagement rates, stronger brand recall, and growing consumer preference for video content, programmatic video has become an essential channel for performance-driven and brand-building campaigns alike. PublifyX provides a programmatic video advertising platform that enables agencies and advertisers to run video campaigns across premium websites, mobile apps, and streaming environments. Access in-stream and outstream video inventory through real-time bidding, target specific audiences with precision, and measure every impression with detailed performance analytics."
      relatedArticleSlug="connected-tv-advertising-guide"
      ctaTitle="Launch Your Video Campaign"
      ctaDescription="Run high-impact video campaigns across premium websites, mobile apps, and streaming environments."
      faqs={[
        { question: "What is the difference between in-stream and outstream video ads?", answer: "In-stream video ads play within existing video content (before, during, or after). Outstream video ads appear within non-video environments like articles and feeds, auto-playing as the user scrolls." },
        { question: "What video ad lengths does PublifyX support?", answer: "PublifyX supports 6-second bumper ads, 15-second spots, and 30-second spots. Custom lengths may be available depending on inventory sources." },
        { question: "How is video ad performance measured?", answer: "Key video metrics include impressions, video completion rate (VCR), viewability rate, click-through rate, and cost per completed view (CPCV). PublifyX provides all of these in real-time reporting." },
        { question: "Can I run video ads on mobile apps?", answer: "Yes. PublifyX provides access to in-app video inventory across mobile applications, including rewarded and interstitial video formats." },
        { question: "Does PublifyX support VAST and VPAID video tags?", answer: "Yes. PublifyX fully supports VAST (Video Ad Serving Template) and VPAID (Video Player-Ad Interface Definition) standards for video ad serving compatibility across publishers." },
      ]}
    >
      <section className="space-y-12">
        <div className="rounded-2xl overflow-hidden mb-2">
          <img src={videoProduction} alt="Video ad production and programmatic video advertising campaign setup" width={800} height={450} loading="eager" decoding="async" className="w-full h-auto object-cover" />
          <p className="text-xs text-navy-400 mt-2 italic">Video advertising commands attention with the combination of sight, sound, and motion.</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What Is Programmatic Video Advertising?</h2>
          <p className="text-navy-600 leading-relaxed mb-4">Programmatic video advertising is the automated buying of video ad placements through real-time bidding technology. When a user encounters a video ad opportunity — whether on a news website, within a mobile app, or on a streaming platform — a bid request is sent to demand-side platforms. Advertisers bid on the impression based on targeting criteria, and the winning video ad is served to the viewer.</p>
          <p className="text-navy-600 leading-relaxed">Programmatic video ads include in-stream formats (pre-roll, mid-roll, and post-roll ads that play within video content) and outstream formats (video ads that appear within text-based content, typically auto-playing as the user scrolls). Both formats offer high visibility and engagement compared to standard display placements.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Why Invest in Programmatic Video Advertising?</h2>
          <p className="text-navy-600 leading-relaxed mb-4">Video captures attention more effectively than any other digital ad format. Studies consistently show that video ads drive higher brand awareness, message recall, and purchase intent compared to static display. The combination of sight, sound, and motion creates an immersive experience that resonates with audiences.</p>
          <p className="text-navy-600 leading-relaxed mb-4">Programmatic buying amplifies the effectiveness of video by adding targeting precision and real-time optimization. Instead of buying video inventory manually through direct deals alone, programmatic enables you to reach specific audiences across thousands of video publishers simultaneously. You can optimize toward completion rate, viewability, or conversion goals — adjusting campaigns in real time based on performance data.</p>
          <p className="text-navy-600 leading-relaxed">The growth of digital video consumption across devices has also expanded available inventory. From short-form content on mobile apps to long-form streaming on connected TVs, the opportunities for programmatic video advertising continue to increase.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">PublifyX Video Advertising Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "In-Stream and Outstream Formats", desc: "Run pre-roll, mid-roll, and post-roll video ads within video content, or deploy outstream video ads that play within editorial and app environments." },
              { title: "Premium Video Inventory", desc: "Access video ad placements across high-quality publisher sites, mobile apps, and streaming platforms through our SSP and ad exchange integrations." },
              { title: "VAST and VPAID Compliance", desc: "Full support for industry-standard video ad serving protocols, ensuring compatibility across publishers and devices." },
              { title: "Advanced Audience Targeting", desc: "Target video audiences by demographics, geography, interests, device type, content context, and behavioral signals. Combine with first-party data for precision." },
              { title: "Viewability and Completion Optimization", desc: "Our algorithms optimize for viewable impressions and video completion rate, ensuring your budget is spent on ads that are actually seen and watched." },
              { title: "Cross-Channel Video Strategy", desc: "Combine web and app video campaigns with CTV and OTT within PublifyX for a unified video advertising strategy across all screens." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img src={videoStreaming} alt="Video streaming on connected devices for programmatic video ad delivery" width={800} height={450} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Video Ad Formats on PublifyX</h2>
          <div className="space-y-4">
            {[
              { title: "Pre-Roll Video Ads", desc: "Video ads that play before the viewer's chosen content. Standard lengths include 6 seconds (bumper), 15 seconds, and 30 seconds." },
              { title: "Mid-Roll Video Ads", desc: "Video ads inserted during natural break points within longer content, delivering higher completion rates due to viewer investment in the content." },
              { title: "Post-Roll Video Ads", desc: "Video ads that play after the viewer's content has concluded." },
              { title: "Outstream Video Ads", desc: "Video ads that appear within non-video editorial content, auto-playing as the user scrolls. Outstream expands video reach beyond video-only environments." },
              { title: "Rewarded Video Ads", desc: "Video ads in mobile apps that offer the user an incentive (such as in-app currency or extra content) in exchange for watching the full ad." },
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
            <Link to="/ctv-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">CTV Advertising</Link>
            <Link to="/ott-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">OTT Advertising</Link>
            <Link to="/programmatic-display-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Display Advertising</Link>
            <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default ProgrammaticVideoAdvertising;