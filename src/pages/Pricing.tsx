import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  useEffect(() => {
    document.title = "White Label DSP Pricing | Transparent Programmatic Platform Costs — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Explore PublifyX white label DSP pricing. Flexible plans for agencies, ad networks, and startups. Transparent costs with no hidden fees. Request a custom quote today.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Pricing" },
      ]}
      heroTitle="White Label DSP Pricing — Transparent, Flexible Plans for Every Business Size"
      heroSubtitle="Understanding the cost of a white label DSP is one of the most important factors in your decision. At PublifyX, we believe pricing should be transparent, predictable, and aligned with your business model — whether you are a growing agency, an established ad network, or a startup entering the ad tech space. Our pricing is designed to give you access to enterprise-grade programmatic technology without the enterprise-grade price tag. No hidden fees, no surprise charges, and no percentage-based markups that eat into your margins as your spending scales."
      ctaTitle="Request a Custom Pricing Quote"
      ctaDescription="Every business has unique requirements. Schedule a consultation to get pricing tailored to your goals. Contact our team today to request a custom pricing quote and see how PublifyX can power your programmatic advertising business at a cost that makes sense."
      faqs={[
        { question: "How much does a white label DSP cost?", answer: "White label DSP pricing varies based on features, channels, and media spend volume. PublifyX offers flexible plans designed for agencies, ad networks, and startups. Contact our team for a custom pricing quote tailored to your requirements." },
        { question: "Does PublifyX charge a percentage of media spend?", answer: "PublifyX structures pricing to remain cost-effective as your business scales. Our goal is to ensure your margins improve with growth. Contact us for specific pricing details based on your anticipated volume." },
        { question: "Are there setup fees for a white label DSP?", answer: "Setup requirements vary by deployment. Our team will outline any applicable setup considerations during the consultation process. White label branding, domain setup, and standard SSP integrations are included." },
        { question: "Is it cheaper to build a DSP in-house or use a white label solution?", answer: "Building a DSP from scratch typically costs millions of dollars and requires a dedicated engineering team. A white label DSP provides the same functionality at a fraction of the cost and can be deployed in days rather than months or years." },
        { question: "Can I upgrade my plan as my business grows?", answer: "Yes. PublifyX pricing plans are designed to scale with your business. As your media spend and client base grow, your plan can be adjusted accordingly." },
      ]}
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">How PublifyX DSP Pricing Works</h2>
          <p className="text-navy-600 leading-relaxed mb-4">PublifyX offers flexible pricing models tailored to different business stages and requirements. Our pricing typically includes a platform access fee and may include a nominal technology fee based on media spend. The exact pricing structure depends on your specific requirements, including the number of channels you plan to activate, the level of customization needed, and the volume of media spend you anticipate.</p>
          <p className="text-navy-600 leading-relaxed">Unlike many competitors who charge a percentage of your total ad spend — which becomes increasingly expensive as your business grows — PublifyX structures pricing to ensure the platform remains cost-effective at every scale. Your margins improve as you grow, not the other way around.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">What Is Included in PublifyX Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Platform Access", desc: "Full access to the PublifyX DSP with campaign management, targeting, bidding, and reporting capabilities across all supported channels." },
              { label: "White Label Branding", desc: "Custom domain, logo integration, color customization, and branded reporting at no additional charge." },
              { label: "SSP and Exchange Integrations", desc: "Pre-configured connections to over 40 supply-side platforms and ad exchanges. Additional custom integrations can be arranged." },
              { label: "Multi-Channel Capabilities", desc: "Access to display, video, audio, CTV, and OTT advertising channels within a single platform." },
              { label: "Onboarding and Training", desc: "Dedicated onboarding sessions, platform training, and documentation for your team." },
              { label: "Ongoing Technical Support", desc: "Responsive technical support for platform issues, campaign troubleshooting, and optimization guidance." },
              { label: "Platform Updates and Maintenance", desc: "Regular feature updates, security patches, and infrastructure maintenance handled by PublifyX at no additional cost." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-navy-50 border border-navy-100 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-brand-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-navy-900">{item.label}: </span>
                  <span className="text-sm text-navy-700">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Pricing Factors to Consider</h2>
          <p className="text-navy-600 leading-relaxed mb-4">When evaluating white label DSP pricing, consider the total cost of ownership — not just the monthly fee. Key factors include the channels supported (some providers charge extra for CTV or audio), the number of SSP integrations included, whether branding customization carries additional costs, and the fee structure as your media spend scales.</p>
          <p className="text-navy-600 leading-relaxed mb-4">PublifyX includes all major channels and branding customization in the base pricing. We do not charge per-channel premiums or per-integration fees. This makes it easier to predict your costs and plan your business model with confidence.</p>
          <p className="text-navy-600 leading-relaxed">Additionally, consider the cost of alternatives. Building a DSP from scratch typically requires millions of dollars in development costs, a team of ad tech engineers, and months (or years) of development time. Using a non-white-labeled self-serve DSP means paying ongoing percentage-based fees and presenting clients with another company's brand. PublifyX provides a middle path — enterprise-grade technology under your brand, at a fraction of the build cost.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Request a Custom Pricing Quote</h2>
          <p className="text-navy-600 leading-relaxed mb-4">Every business has unique requirements. To provide the most accurate pricing for your situation, we recommend scheduling a consultation with our team. We will discuss your business model, target markets, expected media spend volume, and customization needs — then provide a pricing proposal that aligns with your goals.</p>
          <p className="text-navy-600 leading-relaxed">Contact our team today to request a custom pricing quote and see how PublifyX can power your programmatic advertising business at a cost that makes sense.</p>
        </div>

        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-navy-900 mb-3">Explore Related Pages</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
            <Link to="/dsp-for-agencies" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">DSP for Agencies</Link>
            <Link to="/features" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Features</Link>
            <Link to="/how-it-works" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">How It Works</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default Pricing;