import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const Integrations = () => {
  useEffect(() => {
    document.title = "PublifyX Integrations | SSPs, Ad Exchanges, and Data Partners";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "PublifyX integrates with 40+ SSPs, ad exchanges, and data partners. Access premium inventory across display, video, audio, CTV, and OTT channels.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Integrations" },
      ]}
      heroTitle="Integrations — Connected to the Programmatic Ecosystem"
      heroSubtitle="The value of a demand side platform depends on the quality and breadth of its supply connections. PublifyX integrates with over 40 supply-side platforms, ad exchanges, and data partners — giving you access to premium inventory across display, video, audio, CTV, and OTT channels worldwide."
      ctaTitle="Explore Our Integrations"
      ctaDescription="Need a specific supply partner or data integration? Our team can configure custom connections for your platform."
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Supply-Side Platform Integrations</h2>
          <p className="text-navy-600 leading-relaxed">PublifyX connects to leading SSPs that aggregate inventory from premium publishers, apps, and streaming platforms. These integrations provide access to billions of daily impressions across all major ad formats and devices. Our supply partnerships are continuously expanded and optimized to ensure you have access to the highest-quality inventory at competitive clearing prices.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Ad Exchange Connections</h2>
          <p className="text-navy-600 leading-relaxed">Access real-time bidding inventory through major ad exchanges that connect publishers with advertisers at scale. Our exchange integrations cover open auction, private marketplace (PMP), and programmatic guaranteed deal types.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Data Partner Integrations</h2>
          <p className="text-navy-600 leading-relaxed">Enhance your targeting with third-party audience data from leading data providers. Access demographic, behavioral, interest-based, and intent-based audience segments to improve campaign precision.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Custom Integrations</h2>
          <p className="text-navy-600 leading-relaxed">If you have existing relationships with specific supply partners, data providers, or measurement vendors, our team can configure custom integrations to ensure those partnerships are active within your PublifyX platform.</p>
        </div>

        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-navy-900 mb-3">Explore More</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/features" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Features</Link>
            <Link to="/how-it-works" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">How It Works</Link>
            <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default Integrations;