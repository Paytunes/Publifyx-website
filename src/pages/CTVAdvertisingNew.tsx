import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const CTVAdvertising = () => {
  useEffect(() => {
    document.title = "CTV Advertising Platform | Connected TV Ads — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Reach households on smart TVs and streaming devices with non-skippable, full-screen video ads. Precision targeting, real-time reporting, and premium CTV inventory access.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Services" },
        { label: "CTV Advertising" },
      ]}
      heroTitle="CTV Advertising Platform — Reach Audiences on Connected TV"
      heroSubtitle="Television has not disappeared. It has evolved. Connected TV advertising allows brands to reach viewers on smart TVs and streaming devices with the full-screen impact of traditional TV combined with the targeting precision of digital."
      relatedArticleSlug="connected-tv-advertising-guide"
      ctaTitle="Activate CTV Advertising"
      ctaDescription="Deliver non-skippable, full-screen video ads to viewers on smart TVs, Roku, Amazon Fire TV, Apple TV, and more."
      faqs={[
        { question: "What is the difference between CTV and OTT advertising?", answer: "CTV refers specifically to ads viewed on a television screen through an internet-connected device. OTT is a broader term that covers content and ads delivered via the internet across all devices including smartphones, tablets, laptops, and TVs. CTV is a subset of OTT." },
        { question: "What video formats are supported for CTV ads?", answer: "PublifyX supports 15-second and 30-second video ad formats for CTV campaigns. Creatives should be in MP4 or MOV format, optimized for full-screen, high-definition television viewing." },
        { question: "Can I target specific geographic areas with CTV advertising?", answer: "Yes. PublifyX supports geographic targeting at the country, state, city, DMA (designated market area), and zip code level for CTV campaigns." },
        { question: "How is CTV advertising measured?", answer: "Key CTV metrics include impressions, video completion rate (VCR), unique household reach, frequency, and cost per completed view (CPCV). PublifyX also supports attribution measurement for website visits and conversions." },
        { question: "Is CTV advertising only for large brands?", answer: "No. CTV advertising is accessible to businesses of all sizes. With programmatic buying through PublifyX, you can start with flexible budgets and scale based on performance." },
      ]}
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What Is CTV Advertising?</h2>
          <p className="text-navy-600 leading-relaxed mb-4">CTV advertising refers to video ads delivered through internet-connected television devices. Unlike traditional linear TV, where ads are broadcast to mass audiences during scheduled programming, CTV ads are served programmatically to specific households or audience segments based on data-driven targeting.</p>
          <p className="text-navy-600 leading-relaxed mb-4">Connected TV devices include smart TVs with built-in internet connectivity, streaming devices (Roku, Amazon Fire TV, Apple TV), gaming consoles (PlayStation, Xbox), and internet-enabled set-top boxes.</p>
          <p className="text-navy-600 leading-relaxed">CTV advertising is a subset of <Link to="/ott-advertising" className="text-brand-orange-500 hover:underline font-medium">OTT (over-the-top) advertising</Link>. While OTT refers to content delivered via the internet across all devices, CTV specifically refers to ads viewed on a television screen.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Why CTV Advertising Is Essential for Modern Brands</h2>
          <p className="text-navy-600 leading-relaxed mb-6">The shift from cable to streaming is a structural change in media consumption. Cord-cutting households continue to grow year over year. CTV brings together:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {["The immersive impact of television", "Non-skippable ad placements", "Household-level targeting", "Real-time optimization", "Transparent reporting", "Cross-device retargeting"].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-lg px-4 py-3 text-sm text-navy-700 font-medium">{item}</div>
            ))}
          </div>
          <p className="text-navy-600 leading-relaxed mt-6">Completion rates on CTV typically exceed mobile and desktop video. Viewers actively choose what they watch, resulting in higher attention and brand recall. CTV enables targeting by demographics, geography, interests, purchase behavior, and household characteristics.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">PublifyX CTV Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Premium Streaming Inventory", desc: "Access ad-supported streaming platforms, FAST channels, OTT apps, and premium CTV inventory via SSP integrations." },
              { title: "Precision Audience Targeting", desc: "Target households by interests, purchase intent, viewing behavior, income level, and geography down to zip code." },
              { title: "Cross-Device Retargeting", desc: "Retarget CTV viewers across mobile, desktop, and tablet with display or video follow-up campaigns." },
              { title: "Real-Time Campaign Reporting", desc: "Monitor impressions, VCR, reach, frequency, and cost metrics in real time with full transparency." },
              { title: "Brand Safety Controls", desc: "Category-level and app-level exclusions plus third-party verification integrations." },
              { title: "White Label CTV Capabilities", desc: "Agencies can offer CTV advertising as a branded service with custom reporting and platform access." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
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
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <p className="text-navy-700 pt-1">{step}</p>
              </div>
            ))}
          </div>
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
