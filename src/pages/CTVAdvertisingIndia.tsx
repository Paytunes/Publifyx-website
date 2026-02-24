import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const CTVAdvertisingIndia = () => {
  useEffect(() => {
    document.title = "CTV Advertising in India | Connected TV Ads — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Reach India's growing smart TV audience with programmatic CTV campaigns. Target by state, city, and pin code across premium Indian streaming platforms.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Services" },
        { label: "CTV Advertising", path: "/ctv-advertising" },
        { label: "India" },
      ]}
      heroTitle="CTV Advertising in India — Reach India's Growing Connected TV Audience"
      heroSubtitle="India's connected TV market is experiencing rapid growth. Millions of households now access content through internet-connected television devices — a massive opportunity for advertisers."
      relatedArticleSlug="connected-tv-advertising-guide"
      ctaTitle="Launch CTV Campaigns in India"
      ctaDescription="Reach premium Indian audiences on the largest screen in the household with programmatic precision."
      faqs={[
        { question: "Is CTV advertising available in India?", answer: "Yes. CTV advertising is available in India through programmatic platforms like PublifyX. With growing smart TV adoption and ad-supported streaming platforms, CTV inventory in India is expanding rapidly." },
        { question: "Which streaming platforms support CTV ads in India?", answer: "Several Indian streaming platforms offer ad-supported content, including ad-supported tiers on major streaming services. Available inventory varies by SSP integrations and platform partnerships." },
        { question: "How is CTV different from mobile OTT advertising in India?", answer: "CTV refers specifically to ads viewed on a television screen. Mobile OTT refers to streaming on smartphones. CTV provides a larger, more immersive screen experience with higher completion rates." },
        { question: "Can I target specific cities in India with CTV ads?", answer: "Yes. PublifyX supports geographic targeting in India at the state, city, and pin code level for CTV campaigns." },
      ]}
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">The State of CTV in India</h2>
          <p className="text-navy-600 leading-relaxed mb-4">India's CTV ecosystem is at an inflection point. Smart TV penetration is accelerating, driven by affordable devices from Xiaomi, Samsung, TCL, and OnePlus. Simultaneously, Indian streaming platforms have embraced ad-supported models — JioCinema, Disney+ Hotstar, and FAST channels are gaining traction.</p>
          <p className="text-navy-600 leading-relaxed">Brands that move early into CTV advertising in India will benefit from lower competition and strong audience engagement.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Why CTV Advertising Works in India</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Premium, Engaged Audiences", desc: "CTV viewers in India tend to be urban, affluent, and digitally savvy — a high-value audience segment." },
              { title: "Non-Skippable, Full-Screen Ads", desc: "Completion rates significantly higher than mobile video with immersive TV experience." },
              { title: "Household-Level Targeting", desc: "Target by geography, demographics, interests, and household profiles to reach the right homes." },
              { title: "Growing Inventory", desc: "As more Indian platforms adopt ad-supported models, available CTV inventory continues to expand." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">PublifyX CTV for the Indian Market</h2>
          <p className="text-navy-600 leading-relaxed">PublifyX provides programmatic access to CTV inventory in India through integrations with SSPs and streaming platforms serving the Indian market. Our platform enables you to run CTV campaigns targeting Indian audiences with geographic precision down to the city and pin code level.</p>
        </div>

        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-navy-900 mb-3">Explore Related</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/ctv-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">CTV Advertising (Global)</Link>
            <Link to="/ott-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">OTT Advertising</Link>
            <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default CTVAdvertisingIndia;
