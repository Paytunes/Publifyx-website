import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import caseStudiesDashboard from "@/assets/case-studies/hero-dashboard.webp";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  Building2,
  Globe,
  Star,
  Target,
} from "lucide-react";
import MagneticCard from "@/components/effects/MagneticCard";
import EnergyButton from "@/components/effects/EnergyButton";

const cases = [
  {
    icon: TrendingUp,
    title: "Independent Media Agency Brings Programmatic In-House",
    challenge:
      "A mid-sized independent media agency was paying significant technology fees to a third-party DSP, limiting their margins and forcing them to present clients with another company's platform.",
    solution:
      "The agency deployed PublifyX as a white label DSP under their own brand with custom domain, branding, and preferred SSP integrations.",
    results: [
      "Eliminated third-party DSP fees, increasing margins",
      "Improved client retention with branded platform",
      "Expanded to include CTV and audio advertising",
    ],
  },
  {
    icon: Zap,
    title: "Ad Tech Startup Enters the Market in Two Weeks",
    challenge:
      "A startup team with ad tech experience wanted to launch their own DSP but lacked the capital and time to build from scratch.",
    solution:
      "They chose PublifyX's white label DSP to go to market quickly with a fully functional, branded programmatic platform.",
    results: [
      "Launched DSP within two weeks with display, video, and audio",
      "Onboarded first advertisers in the first month",
      "Reached profitability within the first quarter",
    ],
  },
  {
    icon: Users,
    title: "Ad Network Adds Self-Serve Programmatic",
    challenge:
      "An established ad network wanted to offer self-serve programmatic buying capabilities but building a DSP internally would take too long.",
    solution: "The network integrated PublifyX as a white-labeled self-serve platform accessible to their advertisers.",
    results: [
      "Added new revenue stream through platform fees",
      "Improved advertiser satisfaction with self-serve",
      "Differentiated from competing networks",
    ],
  },
];

const whoItsFor = [
  {
    title: "Media Agencies",
    description: "See how agencies eliminate third-party fees and present clients with their own branded platform.",
    icon: Building2,
  },
  {
    title: "Ad Networks",
    description: "Learn how networks add self-serve programmatic as a new revenue stream for their advertisers.",
    icon: Globe,
  },
  {
    title: "Startups",
    description: "Discover how startups launch profitable DSPs in weeks without millions in development costs.",
    icon: Star,
  },
  {
    title: "Performance Teams",
    description: "Explore how data-driven teams achieve better ROI with advanced targeting and optimization.",
    icon: Target,
  },
];

const CaseStudies = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "PublifyX Case Studies | Real Results from Real Clients";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "See how agencies, ad networks, and startups use PublifyX white label DSP to launch their own programmatic platforms.",
      );
    return () => {
      document.title = "PublifyX — Programmatic Advertising Platform";
    };
  }, []);

  const handleGetStarted = () => navigate("/contact");

  return (
    <Layout transparentHeader>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-800">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-brand-orange-500 rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-orange-300 rounded-full blur-[160px] opacity-[0.06]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <PageBreadcrumb items={[{ label: "Home", path: "/" }, { label: "Resources" }, { label: "Case Studies" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">Case Studies</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                Real Results from
                <span className="block text-brand-orange-400">Real Clients</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Every PublifyX client has a unique story. What they share is a common outcome: faster market entry,
                increased margins, and stronger client relationships.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                Agencies · Ad Networks · Startups · Proven results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
                <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
                  <Link to="/contact" className="flex items-center text-white no-underline group">
                    Write Your Success Story{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </EnergyButton>
              </div>
              <p className="text-sm text-navy-400">No commitment required · Schedule a consultation</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange-500/10 rounded-3xl blur-2xl" />
                <img
                  src={caseStudiesDashboard}
                  alt="Client success analytics dashboard showing ROI growth, campaign performance metrics, and margin improvements"
                  className="relative w-full h-auto rounded-2xl shadow-2xl shadow-black/40 border border-white/10"
                  width={1024}
                  height={1024}
                  fetchPriority="high"
                  decoding="sync"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              Client Stories
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              How Businesses Grow with PublifyX
            </motion.h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {cases.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-navy-50 border border-navy-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-navy-800 px-6 py-5 flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-orange-500 rounded-xl flex items-center justify-center">
                      <cs.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cs.title}</h3>
                  </div>
                  <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange-500 mb-2">
                        Challenge
                      </h4>
                      <p className="text-navy-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange-500 mb-2">
                        Solution
                      </h4>
                      <p className="text-navy-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-orange-500 mb-2">
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {cs.results.map((r, j) => (
                          <li key={j} className="text-sm text-navy-700 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 md:py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              Your Industry
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Results for Every Business Type
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whoItsFor.map((audience, i) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <MagneticCard className="bg-white rounded-2xl border border-navy-100 p-8 hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange-50 flex items-center justify-center mb-5 group-hover:bg-brand-orange-100 transition-colors">
                    <audience.icon className="w-6 h-6 text-brand-orange-500" />
                  </div>
                  <h3 className="font-bold text-navy-800 text-xl mb-2">{audience.title}</h3>
                  <p className="text-navy-400 leading-relaxed">{audience.description}</p>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50 rounded-2xl border border-navy-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Explore More</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/white-label-dsp"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                White Label DSP
              </Link>
              <Link
                to="/dsp-for-agencies"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                DSP for Agencies
              </Link>
              <Link
                to="/contact"
                className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-800" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-500 rounded-full blur-[250px] opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="mb-6 !text-white">Write Your Own Success Story</h2>
          <p className="text-xl text-navy-300 mb-4 leading-relaxed">
            Join agencies, ad networks, and startups that have transformed their business with PublifyX.
          </p>
          <p className="text-base text-navy-400 mb-10 font-semibold">
            No commitment required · Schedule a consultation
          </p>
          <EnergyButton className="inline-flex items-center btn-primary text-lg px-10 py-4">
            <Link to="/contact" className="flex items-center text-white no-underline group">
              Book a Call <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </EnergyButton>
        </motion.div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
