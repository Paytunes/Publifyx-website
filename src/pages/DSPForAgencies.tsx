import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const DSPForAgencies = () => {
  useEffect(() => {
    document.title = "DSP for Agencies | Programmatic Platform Built for Media Agencies — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "PublifyX offers a white label DSP built for media agencies. Bring programmatic buying in-house, increase margins, and offer clients a branded advertising platform.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Services" },
        { label: "DSP for Agencies" },
      ]}
      heroTitle="DSP for Agencies — Bring Programmatic Buying In-House with Your Own Branded Platform"
      heroSubtitle="Media agencies are under increasing pressure to demonstrate transparency, deliver measurable results, and differentiate their services in a crowded marketplace. Operating your own demand side platform is one of the most effective ways to achieve all three. PublifyX provides a DSP built specifically for the needs of media agencies. Whether you want a white-labeled platform branded as your own or a managed buying tool for your media team, PublifyX gives you direct access to programmatic inventory across display, video, audio, CTV, and OTT — with full control over margins, client access, and reporting."
      relatedArticleSlug="white-label-dsp-reasons"
      ctaTitle="Get Your Agency's Own DSP"
      ctaDescription="Eliminate third-party fees, increase margins, and present clients with a platform that carries your brand."
      faqs={[
        { question: "Can my agency white label the PublifyX DSP?", answer: "Yes. PublifyX offers full white label capabilities. You can deploy the platform under your own domain, branding, and visual identity. Clients interact with a platform that appears to be your proprietary technology." },
        { question: "How does PublifyX help agencies increase margins?", answer: "By operating your own DSP, you eliminate third-party DSP fees and markups. You set your own pricing with clients and retain the margin that previously went to technology intermediaries." },
        { question: "What channels can agencies access through PublifyX?", answer: "Agencies can run programmatic campaigns across display, video, audio, Connected TV (CTV), and Over-the-Top (OTT) channels — all from one platform." },
        { question: "Do agencies need technical staff to use PublifyX?", answer: "No dedicated technical staff is required. PublifyX handles all platform infrastructure, maintenance, and updates. Your team focuses on campaign strategy and client management. We provide comprehensive onboarding training." },
        { question: "How quickly can an agency get started with PublifyX?", answer: "Most agency deployments are completed within five to ten business days, including branding setup, SSP integrations, and team onboarding." },
      ]}
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Why Agencies Need Their Own DSP</h2>
          <p className="text-navy-600 leading-relaxed mb-4">Most agencies today rely on third-party DSPs where they pay percentage-based fees on media spend, have limited control over supply paths, and present reports that carry another company's branding. This model erodes margins, creates transparency concerns with clients, and makes it difficult to differentiate your agency from competitors using the same tools.</p>
          <p className="text-navy-600 leading-relaxed mb-4">Operating your own DSP — or a <Link to="/white-label-dsp" className="text-brand-orange-500 hover:underline font-medium">white-labeled version</Link> of one — changes the equation. You control the entire media buying workflow. You set your own margins. You present clients with a platform that carries your brand. And you gain access to log-level data that enables deeper optimization and more transparent reporting.</p>
          <p className="text-navy-600 leading-relaxed">An agency DSP also strengthens client retention. When clients use your platform to view campaigns and access reports, switching to another agency becomes significantly more costly and disruptive. Your technology becomes part of their workflow.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">What Makes PublifyX the Right DSP for Agencies?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Multi-Channel Buying in One Platform", desc: "Run display, video, audio, CTV, and OTT campaigns from a single interface. No need to manage multiple DSP accounts for different channels." },
              { title: "White Label Branding", desc: "Deploy the PublifyX platform under your agency's brand. Custom domain, logo, colors, and client-facing reports — everything reflects your identity." },
              { title: "Flexible Client Access", desc: "Choose how clients interact with the platform. Grant self-serve access for hands-on clients, provide view-only dashboards for reporting purposes, or manage everything internally." },
              { title: "Transparent Fee Structure", desc: "PublifyX operates on a clear, predictable pricing model. No hidden markups on media costs. You control what you charge your clients and how you structure your margins." },
              { title: "Dedicated Agency Support", desc: "Our team understands the agency business model. We provide onboarding, training, and ongoing support tailored to how agencies operate — including help with pitches, RFP responses, and campaign strategy." },
              { title: "Scalable Infrastructure", desc: "Whether you manage ten clients or a hundred, the PublifyX platform scales with your business. Add new advertisers, campaigns, and channels without infrastructure constraints." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">How Agencies Use PublifyX</h2>
          <div className="space-y-4">
            {[
              { title: "Independent Media Agencies", desc: "Use PublifyX to bring programmatic buying in-house, replacing reliance on third-party DSPs and capturing the margin that previously went to technology middlemen." },
              { title: "Performance Marketing Agencies", desc: "Use the platform to run data-driven campaigns across multiple channels, optimizing toward CPA, ROAS, and other performance KPIs with full log-level data access." },
              { title: "Creative Agencies", desc: "Expanding into media services use PublifyX to add programmatic capabilities to their offering without building a media buying team from scratch." },
              { title: "Regional and Boutique Agencies", desc: "Use the white label DSP to compete with larger agencies by presenting clients with a proprietary technology platform that elevates their positioning in the market." },
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
            <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
            <Link to="/pricing" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Pricing</Link>
            <Link to="/how-it-works" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">How It Works</Link>
            <Link to="/case-studies" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Case Studies</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default DSPForAgencies;