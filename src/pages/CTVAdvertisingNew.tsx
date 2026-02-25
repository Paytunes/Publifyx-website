import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import ctvLivingRoom from "@/assets/ctv/ctv-living-room.webp";
import ctvStreaming from "@/assets/ctv/ctv-streaming.webp";

const CTVAdvertising = () => {
  useEffect(() => {
    document.title = "CTV Advertising Platform | Programmatic Connected TV Ads — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Launch data-driven CTV campaigns with PublifyX's connected TV advertising platform. Target households across premium streaming inventory with programmatic precision and real-time reporting.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Services" },
        { label: "CTV Advertising" },
      ]}
      heroTitle="CTV Advertising Platform — Reach Audiences on Connected TV"
      heroSubtitle="Television has not disappeared. It has evolved. Connected TV advertising allows brands to reach viewers on smart TVs and streaming devices with the full-screen impact of traditional TV combined with the targeting precision and measurability of digital. PublifyX gives agencies and advertisers a powerful CTV advertising platform to plan, execute, and measure campaigns across premium streaming environments — all from a unified dashboard. Deliver non-skippable, full-screen video ads to viewers watching content on smart TVs, Roku, Amazon Fire TV, Apple TV, gaming consoles, and other connected devices. Big screen impact. Digital precision."
      relatedArticleSlug="connected-tv-advertising-guide"
      ctaTitle="Activate CTV Advertising"
      ctaDescription="Deliver non-skippable, full-screen video ads to viewers on smart TVs, Roku, Amazon Fire TV, Apple TV, and more. Explore how CTV can fit into your media strategy. Book a demo today."
      faqs={[
        { question: "What is the difference between CTV and OTT advertising?", answer: "CTV refers specifically to ads viewed on a television screen through an internet-connected device. OTT is a broader term that covers content and ads delivered via the internet across all devices including smartphones, tablets, laptops, and TVs. CTV is a subset of OTT." },
        { question: "What video formats are supported for CTV ads?", answer: "PublifyX supports 15-second and 30-second video ad formats for CTV campaigns. Creatives should be in MP4 or MOV format, optimized for full-screen, high-definition television viewing." },
        { question: "Can I target specific geographic areas with CTV advertising?", answer: "Yes. PublifyX supports geographic targeting at the country, state, city, DMA (designated market area), and zip code level for CTV campaigns." },
        { question: "How is CTV advertising measured?", answer: "Key CTV metrics include impressions, video completion rate (VCR), unique household reach, frequency, and cost per completed view (CPCV). PublifyX also supports attribution measurement for website visits and conversions driven by CTV exposure." },
        { question: "Is CTV advertising only for large brands?", answer: "No. CTV advertising is accessible to businesses of all sizes. With programmatic buying through PublifyX, you can start with flexible budgets and scale based on performance results." },
      ]}
    >
      <section className="space-y-12">
        <div className="rounded-2xl overflow-hidden mb-2">
          <img
            src={ctvLivingRoom}
            alt="Smart TV in a modern living room displaying streaming content for connected TV advertising"
            width={800}
            height={450}
            loading="eager"
            decoding="async"
            className="w-full h-auto object-cover"
          />
          <p className="text-xs text-navy-400 mt-2 italic">Connected TV advertising delivers full-screen video ads to viewers on smart TVs and streaming devices.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What Is CTV Advertising?</h2>
          <p className="text-navy-600 leading-relaxed mb-4">CTV advertising refers to video ads delivered through internet-connected television devices. Unlike traditional linear TV, where ads are broadcast to mass audiences during scheduled programming, CTV ads are served programmatically to specific households or audience segments based on data-driven targeting.</p>
          <p className="text-navy-600 leading-relaxed mb-4">Connected TV devices include:</p>
          <ul className="list-disc list-inside text-navy-600 leading-relaxed mb-4 space-y-1 pl-2">
            <li>Smart TVs with built-in internet connectivity</li>
            <li>Streaming devices (Roku, Amazon Fire TV, Apple TV)</li>
            <li>Gaming consoles (PlayStation, Xbox)</li>
            <li>Internet-enabled set-top boxes</li>
          </ul>
          <p className="text-navy-600 leading-relaxed">CTV advertising is a subset of <Link to="/ott-advertising" className="text-brand-orange-500 hover:underline font-medium">OTT (over-the-top) advertising</Link>. While OTT refers to content delivered via the internet across all devices (smartphones, tablets, laptops, TVs), CTV specifically refers to ads viewed on a television screen through an internet connection.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Why CTV Advertising Is Essential for Modern Brands</h2>
          <p className="text-navy-600 leading-relaxed mb-6">The shift from cable to streaming is not a trend, it is a structural change in media consumption. Cord-cutting households continue to grow year over year, and a significant portion of younger demographics have never subscribed to traditional cable.</p>
          <h3 className="text-xl font-bold text-navy-900 mb-3">CTV brings together:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {["The immersive impact of television", "Non-skippable ad placements", "Household-level targeting", "Real-time optimization", "Transparent reporting"].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-lg px-4 py-3 text-sm text-navy-700 font-medium">{item}</div>
            ))}
          </div>
          <p className="text-navy-600 leading-relaxed mb-6">Completion rates on CTV typically exceed mobile and desktop video. Viewers actively choose what they watch, resulting in higher attention and brand recall.</p>
          <h3 className="text-xl font-bold text-navy-900 mb-3">Additionally, CTV enables targeting by:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {["Demographics", "Geography", "Interests", "Purchase behavior", "Household characteristics"].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-lg px-4 py-3 text-sm text-navy-700 font-medium">{item}</div>
            ))}
          </div>
          <p className="text-navy-600 leading-relaxed">Advertisers can control frequency, optimize in real time, and measure outcomes including website visits, app installs, and offline conversions.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">PublifyX CTV Advertising Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Premium Streaming Inventory Access", desc: "Access ad-supported streaming platforms, FAST channels, OTT apps, and premium CTV inventory via SSP integrations and private marketplace deals." },
              { title: "Precision Audience Targeting", desc: "Go beyond basic demographics. Target households based on interests, purchase intent, viewing behavior, income level, and geographic location, down to the zip code level." },
              { title: "Cross-Device Retargeting", desc: "Identify viewers who saw your CTV ad and retarget them across mobile, desktop, and tablet with display or video follow-up campaigns, creating a true omnichannel experience." },
              { title: "Real-Time Campaign Reporting", desc: "Monitor impressions, video completion rates (VCR), reach, frequency, and cost metrics in real time. Our reporting dashboard provides full transparency into where your ads ran and how they performed." },
              { title: "Brand Safety Controls", desc: "Ensure your ads appear alongside quality content with category-level and app-level exclusions, plus third-party verification integrations." },
              { title: "White Label CTV Capabilities", desc: "Agencies using PublifyX's white label DSP can offer CTV advertising as a branded service to their clients, with custom reporting and platform access." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img
            src={ctvStreaming}
            alt="Streaming content on a connected TV device showing programmatic CTV ad delivery"
            width={800}
            height={450}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">How CTV Advertising Works with PublifyX</h2>
          <div className="space-y-4">
            {[
              "Define campaign objectives (awareness, reach, performance).",
              "Configure audience targeting.",
              "Upload 15- or 30-second HD video creatives (MP4 or MOV).",
              "Set budget, bid strategy, and schedule.",
              "Launch via real-time bidding across connected TV inventory.",
              "Monitor and optimize in real time.",
              "Post-campaign, access reporting on impressions, VCR, unique household reach, frequency, and cost per completed view.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <p className="text-navy-700 pt-1">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-navy-600 mt-6 font-medium">Ready to activate CTV advertising? Request a campaign walkthrough.</p>
        </div>

        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-navy-900 mb-3">Explore Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/ott-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">OTT Advertising</Link>
            <Link to="/programmatic-video-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Video Advertising</Link>
            <Link to="/ctv-advertising-india" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">CTV in India</Link>
            <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default CTVAdvertising;