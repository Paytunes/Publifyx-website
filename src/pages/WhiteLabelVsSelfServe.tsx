import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const WhiteLabelVsSelfServe = () => {
  useEffect(() => {
    document.title = "White Label DSP vs Self-Serve DSP: Which Is Right for You? — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Understand the key differences between a white label DSP and a self-serve DSP. Compare features, costs, control, and scalability to choose the right model for your business.");
  }, []);

  const comparisons = [
    { factor: "Branding", selfServe: "A self-serve DSP carries the provider's brand.", whiteLabel: "A white label DSP carries your brand exclusively." },
    { factor: "Control Over Pricing", selfServe: "You pay the provider's published rates.", whiteLabel: "You set your own pricing for clients." },
    { factor: "Supply Partnerships", selfServe: "Pre-configured supply sources.", whiteLabel: "Custom SSP integrations available." },
    { factor: "Client Access", selfServe: "Typically one level of access.", whiteLabel: "Custom access tiers for different client types." },
    { factor: "Cost Structure", selfServe: "Percentage of media spend that grows as you scale.", whiteLabel: "Fixed or tiered pricing, more cost-effective at higher volumes." },
    { factor: "Time to Market", selfServe: "Immediate access.", whiteLabel: "One to two weeks setup." },
    { factor: "Long-Term Scalability", selfServe: "Better for quick access without building a branded platform.", whiteLabel: "Stronger foundation for building a differentiated ad tech business." },
  ];

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Resources" },
        { label: "White Label DSP vs Self-Serve DSP" },
      ]}
      heroTitle="White Label DSP vs Self-Serve DSP — Which Model Is Right for Your Business?"
      heroSubtitle="When entering programmatic advertising, one of the first decisions you face is choosing between a white label DSP and a self-serve DSP. Both provide access to programmatic ad buying, but they differ significantly in branding, control, cost structure, and long-term scalability. This comparison breaks down the key differences to help you determine which model aligns best with your business goals."
      relatedArticleSlug="white-label-dsp-reasons"
      ctaTitle="Choose the Right Model"
      ctaDescription="Not sure which approach fits your business? Talk to our team for a personalized recommendation."
      faqs={[
        { question: "Can a white label DSP also offer self-serve access?", answer: "Yes. A white label DSP can be configured to provide self-serve access to your clients. The white label refers to the branding and ownership model, while self-serve describes the user experience." },
        { question: "Is a white label DSP more expensive than a self-serve DSP?", answer: "Not necessarily. While white label DSPs may have a platform access fee, they typically avoid the percentage-based spend markups of self-serve DSPs. At higher media spend volumes, white label often becomes more cost-effective." },
        { question: "Can I switch from a self-serve DSP to a white label DSP?", answer: "Yes. Many businesses start with a self-serve DSP and transition to a white label solution as their business grows and the need for branding, margin control, and client access becomes more important." },
      ]}
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What Is a Self-Serve DSP?</h2>
          <p className="text-navy-600 leading-relaxed mb-4">A self-serve DSP is a software-as-a-service platform where you sign up for an account, deposit funds, and begin buying programmatic ad inventory. The platform carries the DSP provider's branding. You manage campaigns through their interface, use their pre-integrated supply sources, and pay fees that typically include a percentage markup on media spend.</p>
          <p className="text-navy-600 leading-relaxed">Self-serve DSPs are designed for quick access. You can start buying media almost immediately without setup time. However, you have limited control over branding, supply partnerships, fee structures, and client-facing experiences.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What Is a White Label DSP?</h2>
          <p className="text-navy-600 leading-relaxed mb-4">A <Link to="/white-label-dsp" className="text-brand-orange-500 hover:underline font-medium">white label DSP</Link> is a pre-built demand side platform that you deploy under your own brand. You control the domain, logo, interface design, pricing, and client access. The technology provider manages the infrastructure, bidding engine, and supply integrations behind the scenes.</p>
          <p className="text-navy-600 leading-relaxed">A white label DSP requires a setup period (typically one to two weeks) and involves a different pricing model — usually a platform access fee rather than a percentage of spend. In return, you get a platform that looks, feels, and operates as your own proprietary technology.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Key Differences: White Label DSP vs Self-Serve DSP</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-navy-50 border border-navy-100 rounded-xl p-6">
              <h3 className="font-bold text-navy-900 mb-3">Choose a Self-Serve DSP If:</h3>
              <p className="text-sm text-navy-600">You are an individual advertiser or small team that needs quick, no-setup access to programmatic buying and does not require branding or client-facing features.</p>
            </div>
            <div className="bg-brand-orange-50 border border-brand-orange-200 rounded-xl p-6">
              <h3 className="font-bold text-navy-900 mb-3">Choose a White Label DSP If:</h3>
              <p className="text-sm text-navy-600">You are an agency, ad network, or startup that wants to offer programmatic capabilities under your own brand, control pricing and margins, and build long-term client relationships around a proprietary platform experience.</p>
            </div>
          </div>
          <p className="text-navy-600 leading-relaxed">PublifyX offers a white label DSP that gives you the control, branding, and scalability of a proprietary platform — without the cost and complexity of building one yourself.</p>
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