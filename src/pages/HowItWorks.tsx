import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const HowItWorks = () => {
  useEffect(() => {
    document.title = "How PublifyX Works | Launch Your White Label DSP in Days";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Learn how PublifyX works — from initial setup to live campaign launch. Deploy your white label DSP in days with full branding, SSP integrations, and multi-channel capabilities.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "How It Works" },
      ]}
      heroTitle="How PublifyX Works — From Setup to Live Campaigns in Days"
      heroSubtitle="Launching your own demand side platform sounds complex, but with PublifyX, the process is streamlined and straightforward. We handle the technology — you focus on your brand, your clients, and your growth."
      ctaTitle="Ready to Launch?"
      ctaDescription="Most clients go from consultation to live campaigns within five to ten business days."
      faqs={[
        { question: "How long does the full setup process take?", answer: "Most PublifyX deployments are completed within five to ten business days, depending on the level of customization and integration required." },
        { question: "Do I need engineering resources on my side?", answer: "No. PublifyX handles all technical setup, configuration, and ongoing platform maintenance. Your team focuses on business operations and client management." },
        { question: "Can I add more channels or integrations later?", answer: "Yes. You can activate additional channels and SSP integrations at any time as your business needs evolve." },
      ]}
    >
      <section className="space-y-12">
        {[
          { step: "1", title: "Discovery and Consultation", desc: "We discuss your business model, target markets, and specific requirements — channels to activate, client access model, branding specs, and SSP or data partner integrations. This ensures the platform is configured to your exact needs from day one." },
          { step: "2", title: "Platform Configuration and Branding", desc: "Our team configures the platform with your branding — custom domain, logo, color palette, and interface customizations. We set up your account structure, user roles, and permission levels." },
          { step: "3", title: "Supply Integration", desc: "We activate connections to SSPs and ad exchanges relevant to your campaigns. PublifyX comes pre-integrated with 40+ SSPs covering display, video, audio, CTV, and OTT. Custom integrations are also available." },
          { step: "4", title: "Team Onboarding and Training", desc: "Your team receives comprehensive onboarding covering platform navigation, campaign setup, targeting options, bidding strategies, reporting, and optimization best practices." },
          { step: "5", title: "Campaign Launch and Optimization", desc: "Launch your first campaigns. Our support team assists with strategy, troubleshooting, and optimization as you scale your operations." },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-6">
            <span className="flex-shrink-0 w-12 h-12 bg-brand-orange-500 text-white rounded-2xl flex items-center justify-center text-lg font-bold">{item.step}</span>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">{item.title}</h2>
              <p className="text-navy-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}

        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-navy-900 mb-3">Explore More</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/features" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Features</Link>
            <Link to="/pricing" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Pricing</Link>
            <Link to="/integrations" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Integrations</Link>
            <Link to="/case-studies" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Case Studies</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default HowItWorks;
