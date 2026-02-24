import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const OTTAdvertising = () => {
  useEffect(() => {
    document.title = "OTT Advertising Platform | Streaming Ads Across Every Screen — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Deliver targeted video ads across streaming platforms on every device. Programmatic OTT buying with advanced targeting, frequency management, and real-time optimization.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Services" },
        { label: "OTT Advertising" },
      ]}
      heroTitle="OTT Advertising Platform — Reach Streaming Audiences Across Every Screen"
      heroSubtitle="Over-the-top (OTT) advertising gives brands the ability to reach audiences wherever they stream content — on smart TVs, mobile phones, tablets, laptops, and gaming consoles."
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
          <p className="text-navy-600 leading-relaxed">The key distinction between OTT and <Link to="/ctv-advertising" className="text-brand-orange-500 hover:underline font-medium">CTV</Link> is the scope. OTT refers to the content delivery method and spans all internet-connected devices. CTV is a subset of OTT, referring specifically to content viewed on a television screen.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Why OTT Advertising Matters</h2>
          <p className="text-navy-600 leading-relaxed mb-4">Traditional TV advertising operates on a broadcast model where ads reach a mass audience with limited targeting precision. OTT advertising flips this model by enabling household-level and individual-level targeting based on demographic data, behavioral signals, geographic location, and content preferences.</p>
          <p className="text-navy-600 leading-relaxed">OTT audiences are highly engaged. Ad completion rates on OTT are consistently higher than other digital video environments, as many OTT ads are non-skippable. For advertisers, OTT provides the reach of television with the accountability of digital.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">PublifyX OTT Advertising Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Multi-Device Reach", desc: "Deliver video ads across smart TVs, mobile devices, tablets, desktop browsers, and gaming consoles." },
              { title: "Premium Inventory Access", desc: "Connect to ad-supported streaming platforms, FAST channels, and OTT app inventory through leading SSPs." },
              { title: "Advanced Audience Targeting", desc: "Target viewers by age, gender, income, interests, purchase behavior, content genre, and geography." },
              { title: "Frequency Management", desc: "Control how many times a household or individual sees your ad across devices and platforms." },
              { title: "Real-Time Optimization", desc: "Monitor performance in real time with metrics including impressions, VCR, reach, and frequency." },
              { title: "Cross-Channel Integration", desc: "Combine OTT with display, audio, and native advertising within PublifyX for omnichannel media buying." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">OTT Ad Formats</h2>
          <div className="space-y-4">
            {[
              { title: "Pre-Roll Video Ads", desc: "Short video ads that play before the viewer's selected content begins. Typically 15 or 30 seconds." },
              { title: "Mid-Roll Video Ads", desc: "Ads inserted during natural breaks within longer-form content, similar to traditional commercial breaks but targeted." },
              { title: "Post-Roll Video Ads", desc: "Video ads that play after the content has concluded." },
              { title: "Interactive OTT Ads", desc: "Formats that allow viewers to engage using their remote or touch screen, including clickable overlays and QR code prompts." },
              { title: "Companion Display Banners", desc: "Display ads shown alongside the video player on certain OTT platforms, reinforcing the video message." },
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
