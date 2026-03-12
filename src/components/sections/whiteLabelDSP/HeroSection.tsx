import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroDashboard from "@/assets/white-label-dsp/hero-dashboard.webp";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useServiceBreadcrumbs } from "@/hooks/useServiceBreadcrumbs";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const breadcrumbs = useServiceBreadcrumbs("White Label DSP");

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-800">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-brand-orange-500 rounded-full blur-[200px] opacity-10" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-orange-300 rounded-full blur-[160px] opacity-[0.06]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-28 md:pb-16">
        <PageBreadcrumb items={breadcrumbs} />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-brand-orange-400" />
              <span className="text-sm font-medium text-white/80">
                White Label DSP Platform
              </span>
            </div>

            <h1 className="mb-6 !text-white leading-[1.1] text-3xl md:text-4xl lg:text-[2.75rem] xl:text-4xl">
              White Label DSP — Launch Your Own Branded
              <span className="block text-brand-orange-400">
                Demand Side Platform
              </span>
            </h1>

            <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
              Launching a demand side platform from scratch used to mean years
              of development, massive engineering costs, and complex exchange
              integrations. With PublifyX, it doesn't.
            </p>

            <p className="text-base text-navy-300 mb-4 leading-relaxed max-w-xl">
              Our white label DSP gives agencies, ad networks, and startups the
              ability to launch a fully branded programmatic platform in 15
              minutes, not days, without writing a single line of code. Your
              logo. Your domain. Your pricing. Your client relationships. Our
              DSP.
            </p>

            <p className="text-base text-navy-300 mb-10 font-semibold">
              Your logo · Your domain · Your pricing · Our infrastructure
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
              <Button
                onClick={onGetStarted}
                className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group"
              >
                Book a Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-sm text-navy-300">
              No commitment required · Launch in under 15 minutes
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-orange-500/10 rounded-3xl blur-2xl" />
              <img
                src={heroDashboard}
                alt="Ad-tech programmatic advertising dashboard with real-time bidding analytics and campaign metrics"
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-black/40 border border-white/10"
                width={1024}
                height={1024}
                fetchPriority="high"
                decoding="sync"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
