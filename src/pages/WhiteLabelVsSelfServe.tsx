import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const WhiteLabelVsSelfServe = () => {
  useEffect(() => {
    document.title = "White Label DSP vs Self-Serve DSP: Which Is Right for You? — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Compare branding, pricing control, scalability, and cost structure between white label and self-serve DSPs. Find the right programmatic model for your business.");
  }, []);

  const comparisons = [
    { factor: "Branding", selfServe: "Provider's brand", whiteLabel: "Your brand exclusively" },
    { factor: "Pricing Control", selfServe: "Published rates", whiteLabel: "You set your own pricing" },
    { factor: "Supply Partnerships", selfServe: "Pre-configured sources", whiteLabel: "Custom SSP integrations" },
    { factor: "Client Access", selfServe: "One access level", whiteLabel: "Custom access tiers" },
    { factor: "Cost Structure", selfServe: "% of media spend", whiteLabel: "Fixed or tiered pricing" },
    { factor: "Time to Market", selfServe: "Immediate", whiteLabel: "1-2 weeks setup" },
    { factor: "Scalability", selfServe: "Limited differentiation", whiteLabel: "Strong foundation for growth" },
  ];

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Resources" },
        { label: "White Label DSP vs Self-Serve DSP" },
      ]}
      heroTitle="White Label DSP vs Self-Serve DSP — Which Model Is Right for Your Business?"
      heroSubtitle="Both provide access to programmatic ad buying, but they differ significantly in branding, control, cost structure, and long-term scalability."
      relatedArticleSlug="white-label-dsp-reasons"
      ctaTitle="Choose the Right Model"
      ctaDescription="Not sure which approach fits your business? Talk to our team for a personalized recommendation."
      faqs={[
        { question: "Can a white label DSP also offer self-serve access?", answer: "Yes. A white label DSP can be configured to provide self-serve access to your clients. The white label refers to the branding and ownership model, while self-serve describes the user experience." },
        { question: "Is a white label DSP more expensive than a self-serve DSP?", answer: "Not necessarily. While white label DSPs may have a platform access fee, they typically avoid the percentage-based spend markups of self-serve DSPs. At higher volumes, white label often becomes more cost-effective." },
        { question: "Can I switch from a self-serve DSP to a white label DSP?", answer: "Yes. Many businesses start with a self-serve DSP and transition to a white label solution as their need for branding, margin control, and client access grows." },
      ]}
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What Is a Self-Serve DSP?</h2>
          <p className="text-navy-600 leading-relaxed">A self-serve DSP is a SaaS platform where you sign up, deposit funds, and begin buying programmatic ad inventory. The platform carries the DSP provider's branding. You manage campaigns through their interface. Self-serve DSPs are designed for quick access — but you have limited control over branding, supply partnerships, fee structures, and client-facing experiences.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What Is a White Label DSP?</h2>
          <p className="text-navy-600 leading-relaxed">A <Link to="/white-label-dsp" className="text-brand-orange-500 hover:underline font-medium">white label DSP</Link> is a pre-built demand side platform deployed under your own brand. You control the domain, logo, interface design, pricing, and client access. The technology provider manages the infrastructure behind the scenes. It requires a setup period of one to two weeks, but in return you get a platform that operates as your own proprietary technology.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Key Differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold rounded-tl-xl">Factor</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Self-Serve DSP</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold rounded-tr-xl">White Label DSP</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-navy-50" : "bg-white"}>
                    <td className="px-4 py-3 text-sm font-medium text-navy-900">{row.factor}</td>
                    <td className="px-4 py-3 text-sm text-navy-600">{row.selfServe}</td>
                    <td className="px-4 py-3 text-sm text-navy-700 font-medium">{row.whiteLabel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Which Should You Choose?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-50 border border-navy-100 rounded-xl p-6">
              <h3 className="font-bold text-navy-900 mb-3">Choose Self-Serve If:</h3>
              <p className="text-sm text-navy-600">You are an individual advertiser or small team that needs quick, no-setup access to programmatic buying and does not require branding or client-facing features.</p>
            </div>
            <div className="bg-brand-orange-50 border border-brand-orange-200 rounded-xl p-6">
              <h3 className="font-bold text-navy-900 mb-3">Choose White Label If:</h3>
              <p className="text-sm text-navy-600">You are an agency, ad network, or startup that wants to offer programmatic capabilities under your own brand, control pricing, and build long-term client relationships.</p>
            </div>
          </div>
        </div>

        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-navy-900 mb-3">Explore More</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
            <Link to="/pricing" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Pricing</Link>
            <Link to="/dsp-for-agencies" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">DSP for Agencies</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default WhiteLabelVsSelfServe;
