import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Monitor, Tv, Radio, Video, PlayCircle, Users } from "lucide-react";

const services = [
  {
    title: "White Label DSP",
    description: "Launch your own branded DSP in 15 minutes. Full control over branding, pricing, and client access.",
    icon: Monitor,
    path: "/white-label-dsp",
  },
  {
    title: "CTV Advertising",
    description: "Reach audiences on Connected TV with programmatic precision across premium streaming content.",
    icon: Tv,
    path: "/ctv-advertising",
  },
  {
    title: "OTT Advertising",
    description: "Deliver targeted ads across OTT platforms with real-time performance tracking.",
    icon: PlayCircle,
    path: "/ott-advertising",
  },
  {
    title: "Programmatic Audio",
    description: "Run audio ads on streaming, podcast, and digital radio platforms programmatically.",
    icon: Radio,
    path: "/programmatic-audio-advertising",
  },
  {
    title: "Programmatic Video",
    description: "Engage audiences with pre-roll, mid-roll, and outstream video ads across premium inventory.",
    icon: Video,
    path: "/programmatic-video-advertising",
  },
  {
    title: "DSP for Agencies",
    description: "Purpose-built programmatic platform for agencies seeking margin control and brand ownership.",
    icon: Users,
    path: "/dsp-for-agencies",
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Services — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Explore PublifyX services: White Label DSP, CTV, OTT, Audio, Video, and Display programmatic advertising solutions.");
  }, []);

  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Multi-channel programmatic advertising solutions built for agencies, ad networks, and startups.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={service.path}
                  className="block p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow group no-underline"
                >
                  <service.icon className="w-10 h-10 text-brand-orange-500 mb-4" />
                  <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-brand-orange-500 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
