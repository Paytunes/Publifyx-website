import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import { TrendingUp, Users, Zap } from "lucide-react";

const CaseStudies = () => {
  useEffect(() => {
    document.title = "PublifyX Case Studies | Real Results from Real Clients";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "See how agencies, ad networks, and startups launched branded DSPs with PublifyX. Faster market entry, higher margins, and stronger client retention — proven results.");
  }, []);

  const cases = [
    {
      icon: TrendingUp,
      title: "Independent Media Agency Brings Programmatic In-House",
      challenge: "A mid-sized independent media agency was paying significant technology fees to a third-party DSP, limiting their margins and forcing them to present clients with another company's platform.",
      solution: "The agency deployed PublifyX as a white label DSP under their own brand. They configured the platform with their domain, branding, and preferred SSP integrations.",
      results: [
        "Eliminated third-party DSP fees, increasing margins on programmatic campaigns",
        "Client retention improved as advertisers used the agency's branded platform",
        "Expanded service offering to include CTV and audio advertising",
      ],
    },
    {
      icon: Zap,
      title: "Ad Tech Startup Enters the Market in Two Weeks",
      challenge: "A startup team with ad tech experience wanted to launch their own DSP but lacked the capital and time to build technology from scratch.",
      solution: "They chose PublifyX's white label DSP to go to market quickly with a fully functional, branded programmatic platform.",
      results: [
        "Launched DSP within two weeks with display, video, and audio capabilities",
        "Onboarded first advertisers in the first month",
        "Reached profitability within the first quarter",
      ],
    },
    {
      icon: Users,
      title: "Ad Network Adds Self-Serve Programmatic",
      challenge: "An established ad network wanted to offer their advertiser base self-serve programmatic buying capabilities, but building internally would take too long.",
      solution: "The network integrated PublifyX as a white-labeled self-serve platform. The interface carried the network's branding, and campaigns ran through preferred supply partners.",
      results: [
        "Added new revenue stream through platform access fees",
        "Improved advertiser satisfaction with self-serve capabilities",
        "Differentiated offering from competing networks",
      ],
    },
  ];

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Case Studies" },
      ]}
      heroTitle="Case Studies — How Businesses Grow with PublifyX"
      heroSubtitle="Every PublifyX client has a unique story. What they share is a common outcome: faster market entry, increased margins, and stronger client relationships."
      ctaTitle="Write Your Own Success Story"
      ctaDescription="Join agencies, ad networks, and startups that have transformed their business with PublifyX."
    >
      <section className="space-y-10">
        {cases.map((cs, i) => (
          <div key={i} className="bg-white border border-navy-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-navy-50 px-6 py-5 flex items-center gap-4 border-b border-navy-100">
              <div className="w-10 h-10 bg-brand-orange-500 rounded-xl flex items-center justify-center">
                <cs.icon className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold text-navy-900">{cs.title}</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-400 mb-1">Challenge</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{cs.challenge}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-400 mb-1">Solution</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{cs.solution}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-400 mb-2">Results</h3>
                <ul className="space-y-1.5">
                  {cs.results.map((r, j) => (
                    <li key={j} className="text-sm text-navy-700 flex items-start gap-2">
                      <span className="text-brand-orange-500 font-bold">✓</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-navy-900 mb-3">Explore More</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
            <Link to="/dsp-for-agencies" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">DSP for Agencies</Link>
            <Link to="/pricing" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Pricing</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default CaseStudies;
