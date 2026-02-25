import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const OTTAdvertising = () => {
  useEffect(() => {
    document.title = "OTT Advertising Platform | Over-the-Top Ads Across Every Screen — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Deliver targeted OTT advertising across streaming platforms on every device. PublifyX's OTT ads platform offers programmatic buying, precise targeting, and real-time analytics.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Services" },
        { label: "OTT Advertising" },
      ]}
      heroTitle="OTT Advertising Platform — Reach Streaming Audiences Across Every Screen"
      heroSubtitle="Over-the-top (OTT) advertising gives brands the ability to reach audiences wherever they stream content — on smart TVs, mobile phones, tablets, laptops, and gaming consoles. As consumers continue to shift away from traditional cable and satellite services, OTT has become a critical channel for advertisers seeking to maintain reach and relevance. PublifyX provides a programmatic OTT advertising platform that connects you to premium streaming inventory across devices and platforms. Whether your audience is watching a show on their smart TV, catching up on a podcast app, or streaming music during their commute, our platform ensures your message reaches them with precision and measurable impact."
      relatedArticleSlug="connected-tv-advertising-guide"
      ctaTitle="Launch Your OTT Campaign"
      ctaDescription="Connect with streaming audiences across every device. Talk to our team to plan your first OTT campaign."
      faqs={[
        { question: "What is the difference between OTT and CTV advertising?", answer: "OTT refers to content delivered over the internet across all devices — TVs, phones, tablets, and computers. CTV refers specifically to ads viewed on a television screen through internet-connected devices. CTV is a subset of OTT." },
        { question: "What platforms do OTT ads run on?", answer: "OTT ads run across ad-supported streaming services, FAST (free ad-supported streaming TV) channels, and OTT apps. Specific platforms vary by region and inventory availability through our SSP partners." },
        { question: "Can OTT advertising be targeted to specific audiences?", answer: "Yes. PublifyX supports audience targeting based on demographics, geography, interests, viewing behavior, purchase intent, and household-level data for OTT campaigns." },
        { question: "How much does OTT advertising cost?", answer: "OTT advertising is typically priced on a CPM basis. Costs vary based on targeting specificity, inventory quality, and campaign scale. PublifyX allows flexible budget entry points suitable for businesses of varying sizes." },
        { question: "Can I measure OTT ad performance?", answer: "Yes. PublifyX provides real-time reporting on impressions, video completion rates, reach, frequency, and cost metrics. Attribution measurement for website visits and conversions is also available." },
      ]}
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What Is OTT Advertising?</h2>
          <p className="text-navy-600 leading-relaxed mb-4">OTT stands for "over-the-top," referring to content delivered directly over the internet, bypassing traditional cable, broadcast, and satellite television providers. OTT advertising is the placement of ads within this internet-delivered content.</p>
          <p className="text-navy-600 leading-relaxed mb-4">OTT content is consumed across multiple devices — smart TVs, streaming sticks (Roku, Fire TV), smartphones, tablets, laptops, and gaming consoles. The ads served within this content can be video pre-rolls, mid-rolls, or post-rolls, as well as interactive ad formats that prompt viewer engagement.</p>
          <p className="text-navy-600 leading-relaxed">The key distinction between OTT and <Link to="/ctv-advertising" className="text-brand-orange-500 hover:underline font-medium">CTV</Link> is the scope. OTT refers to the content delivery method and spans all internet-connected devices. CTV is a subset of OTT, referring specifically to content viewed on a television screen. When you run OTT advertising through PublifyX, you reach viewers across all these screens — not just the TV.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Why OTT Advertising Matters</h2>
          <p className="text-navy-600 leading-relaxed mb-4">Traditional TV advertising operates on a broadcast model where ads reach a mass audience with limited targeting precision. OTT advertising flips this model by enabling household-level and individual-level targeting based on demographic data, behavioral signals, geographic location, and content preferences.</p>
          <p className="text-navy-600 leading-relaxed mb-4">OTT audiences are highly engaged. They have actively chosen the content they are watching, which translates to higher attention levels compared to passive channel surfing on linear TV. Ad completion rates on OTT are consistently higher than other digital video environments, as many OTT ads are non-skippable.</p>
          <p className="text-navy-600 leading-relaxed">For advertisers, OTT provides the reach of television with the accountability of digital. You can track impressions, completion rates, frequency, and attribution — metrics that traditional TV simply cannot offer at the same granularity.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">PublifyX OTT Advertising Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Multi-Device Reach", desc: "Deliver video ads across smart TVs, mobile devices, tablets, desktop browsers, and gaming consoles. Reach your audience on the device and platform they prefer." },
              { title: "Premium Inventory Access", desc: "Connect to ad-supported streaming platforms, FAST channels, and OTT app inventory through our integrations with leading supply-side platforms and private marketplace deals." },
              { title: "Advanced Audience Targeting", desc: "Target viewers based on age, gender, household income, interests, purchase behavior, content genre preferences, and geographic location. Combine first-party data with third-party audience segments for precise reach." },
              { title: "Frequency Management", desc: "Control how many times a household or individual sees your ad across devices and platforms, preventing ad fatigue while maximizing campaign efficiency." },
              { title: "Real-Time Optimization and Reporting", desc: "Monitor campaign performance in real time with metrics including impressions, VCR, reach, frequency, and cost efficiency. Make adjustments on the fly to improve results." },
              { title: "Seamless Integration with Other Channels", desc: "Combine OTT campaigns with display, audio, and native advertising within the PublifyX platform for a unified, omnichannel media buying experience." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">OTT Ad Formats Supported by PublifyX</h2>
          <div className="space-y-4">
            {[
              { title: "Pre-Roll Video Ads", desc: "Short video ads that play before the viewer's selected content begins. Typically 15 or 30 seconds in length." },
              { title: "Mid-Roll Video Ads", desc: "Ads inserted during natural breaks within longer-form content, similar to traditional commercial breaks but targeted to specific audiences." },
              { title: "Post-Roll Video Ads", desc: "Video ads that play after the content has concluded." },
              { title: "Interactive OTT Ads", desc: "Formats that allow viewers to engage with the ad using their remote control or touch screen, including clickable overlays and QR code prompts." },
              { title: "Companion Display Banners", desc: "Display ads shown alongside or below the video player on certain OTT platforms, reinforcing the video message with a visual banner." },
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
            <Link to="/programmatic-video-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Video Advertising</Link>
            <Link to="/programmatic-audio-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Audio Advertising</Link>
            <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default OTTAdvertising;