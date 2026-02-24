import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const ProgrammaticVideoAdvertising = () => {
  useEffect(() => {
    document.title = "Programmatic Video Advertising | Video DSP — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Launch high-impact video campaigns across web, app, and streaming platforms. Pre-roll, mid-roll, and outstream formats with VAST/VPAID support and completion optimization.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Services" },
        { label: "Programmatic Video Advertising" },
      ]}
      heroTitle="Programmatic Video Advertising — High-Impact Video Ads Across Web, App, and Streaming"
      heroSubtitle="Video advertising commands attention like no other digital format. Higher engagement rates, stronger brand recall, and growing consumer preference for video content."
      relatedArticleSlug="connected-tv-advertising-guide"
      ctaTitle="Launch Your Video Campaign"
      ctaDescription="Run high-impact video campaigns across premium websites, mobile apps, and streaming environments."
      faqs={[
        { question: "What is the difference between in-stream and outstream video ads?", answer: "In-stream video ads play within existing video content (before, during, or after). Outstream video ads appear within non-video environments like articles and feeds, auto-playing as the user scrolls." },
        { question: "What video ad lengths does PublifyX support?", answer: "PublifyX supports 6-second bumper ads, 15-second spots, and 30-second spots. Custom lengths may be available depending on inventory sources." },
        { question: "How is video ad performance measured?", answer: "Key video metrics include impressions, video completion rate (VCR), viewability rate, click-through rate, and cost per completed view (CPCV). All available in real-time reporting." },
        { question: "Can I run video ads on mobile apps?", answer: "Yes. PublifyX provides access to in-app video inventory across mobile applications, including rewarded and interstitial video formats." },
        { question: "Does PublifyX support VAST and VPAID video tags?", answer: "Yes. PublifyX fully supports VAST (Video Ad Serving Template) and VPAID (Video Player-Ad Interface Definition) standards for video ad serving compatibility." },
      ]}
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What Is Programmatic Video Advertising?</h2>
          <p className="text-navy-600 leading-relaxed mb-4">Programmatic video advertising is the automated buying of video ad placements through real-time bidding technology. When a user encounters a video ad opportunity — whether on a news website, within a mobile app, or on a streaming platform — a bid request is sent to demand-side platforms. Advertisers bid on the impression based on targeting criteria, and the winning video ad is served.</p>
          <p className="text-navy-600 leading-relaxed">Programmatic video ads include in-stream formats (pre-roll, mid-roll, and post-roll) and outstream formats (video ads within text-based content, auto-playing as the user scrolls). Both formats offer high visibility and engagement.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Why Invest in Programmatic Video?</h2>
          <p className="text-navy-600 leading-relaxed mb-4">Video captures attention more effectively than any other digital ad format. Studies consistently show that video ads drive higher brand awareness, message recall, and purchase intent compared to static display.</p>
          <p className="text-navy-600 leading-relaxed">Programmatic buying amplifies effectiveness by adding targeting precision and real-time optimization. Instead of buying video inventory manually, programmatic enables you to reach specific audiences across thousands of video publishers simultaneously.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">PublifyX Video Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "In-Stream and Outstream Formats", desc: "Run pre-roll, mid-roll, and post-roll video ads within video content, or deploy outstream video ads in editorial environments." },
              { title: "Premium Video Inventory", desc: "Access video placements across high-quality publisher sites, mobile apps, and streaming platforms." },
              { title: "VAST and VPAID Compliance", desc: "Full support for industry-standard video ad serving protocols, ensuring compatibility across publishers." },
              { title: "Advanced Audience Targeting", desc: "Target by demographics, geography, interests, device type, content context, and behavioral signals." },
              { title: "Viewability Optimization", desc: "Algorithms optimize for viewable impressions and video completion rate, ensuring budget efficiency." },
              { title: "Cross-Channel Video Strategy", desc: "Combine web and app video with CTV and OTT within PublifyX for a unified video strategy." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Video Ad Formats</h2>
          <div className="space-y-4">
            {[
              { title: "Pre-Roll Video Ads", desc: "Video ads that play before the viewer's chosen content. Standard lengths: 6 seconds (bumper), 15 seconds, and 30 seconds." },
              { title: "Mid-Roll Video Ads", desc: "Inserted during natural break points within longer content, delivering higher completion rates." },
              { title: "Post-Roll Video Ads", desc: "Video ads that play after the viewer's content has concluded." },
              { title: "Outstream Video Ads", desc: "Video ads within non-video editorial content, auto-playing as the user scrolls, expanding video reach." },
              { title: "Rewarded Video Ads", desc: "Video ads in mobile apps offering the user an incentive in exchange for watching the full ad." },
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
