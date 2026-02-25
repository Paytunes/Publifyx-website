import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const Features = () => {
  useEffect(() => {
    document.title = "PublifyX DSP Features | Targeting, Reporting, Formats, and More";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Explore the full feature set of PublifyX DSP — advanced targeting, real-time bidding, multi-channel support, brand safety, transparent reporting, and white label customization.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Features" },
      ]}
      heroTitle="PublifyX DSP Features — Everything You Need for Programmatic Success"
      heroSubtitle="PublifyX is built to give you comprehensive programmatic buying capabilities across every major digital channel. From advanced targeting and real-time optimization to transparent reporting and white label customization, every feature is designed to help you run efficient, high-performing campaigns."
      relatedArticleSlug="ad-tech-trends-2026"
      ctaTitle="See Features in Action"
      ctaDescription="Schedule a personalized demo to explore every feature of the PublifyX platform."
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Multi-Channel Campaign Management</h2>
          <p className="text-navy-600 leading-relaxed">Run campaigns across display, video, audio, Connected TV (CTV), and Over-the-Top (OTT) from a single unified platform. No need to switch between multiple tools or accounts for different formats. Plan, launch, and optimize cross-channel campaigns from one dashboard.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Advanced Targeting</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: "Demographic Targeting", desc: "Age, gender, household income, education, and parental status." },
              { title: "Geographic Targeting", desc: "Country, state, city, DMA, zip code, and radius targeting." },
              { title: "Behavioral Targeting", desc: "Purchase intent, browsing behavior, and interest-based audience segments." },
              { title: "Contextual Targeting", desc: "Keyword and category-based targeting to align ads with relevant content." },
              { title: "Device Targeting", desc: "Desktop, mobile, tablet, connected TV, and specific operating systems." },
              { title: "Time and Day Targeting", desc: "Schedule campaigns to run during specific hours and days of the week." },
              { title: "First-Party Data Onboarding", desc: "Upload and activate your own audience data for precision targeting." },
              { title: "Third-Party Data Segments", desc: "Access audience data from leading data providers." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-4">
                <h3 className="font-bold text-navy-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Real-Time Bidding and Optimization</h2>
          <p className="text-navy-600 leading-relaxed">PublifyX's real-time bidding engine processes millions of bid requests per second, evaluating each impression against your campaign criteria and bidding strategy. Our optimization algorithms automatically adjust bids to maximize performance toward your chosen KPIs — whether CPM, CPC, CPA, ROAS, or video completion rate.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Reporting and Analytics</h2>
          <p className="text-navy-600 leading-relaxed">Access real-time campaign dashboards with granular metrics across all channels. View performance by creative, placement, audience segment, device, geography, and time period. Export reports in customizable formats. White label reporting ensures client-facing reports carry your brand.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Brand Safety and Fraud Prevention</h2>
          <p className="text-navy-600 leading-relaxed">Protect your campaigns with domain-level and category-level exclusions, pre-bid fraud filtering, viewability verification, and integration with third-party brand safety and verification providers. Ensure your ads appear alongside appropriate content and reach real users.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">White Label Customization</h2>
          <p className="text-navy-600 leading-relaxed">Deploy the PublifyX platform under your brand. Custom domain, logo, color palette, and interface elements. Client-facing dashboards and reports reflect your identity exclusively. No PublifyX branding visible to your end users.</p>
        </div>

        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-navy-900 mb-3">Explore More</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/how-it-works" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">How It Works</Link>
            <Link to="/integrations" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Integrations</Link>
            <Link to="/pricing" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Pricing</Link>
            <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default Features;