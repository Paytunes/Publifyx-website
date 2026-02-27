import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import founderImage from "@/assets/founder/saurabh-ceo.webp";

const ceoSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.publifyx.com/saurabh",
  "name": "Saurabh",
  "jobTitle": "CEO",
  "worksFor": {
    "@id": "https://www.publifyx.com/#organization"
  }
};

const CEO = () => {
  useEffect(() => {
    document.title = "Saurabh – CEO of PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Meet Saurabh, CEO and Founder of PublifyX – the white label DSP platform powering programmatic advertising for agencies and ad networks worldwide.");
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ceo-person-schema";
    script.textContent = JSON.stringify(ceoSchema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <img
              src={founderImage}
              alt="Saurabh – CEO of PublifyX"
              className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-lg"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
              Saurabh
            </h1>
            <p className="text-lg text-primary font-semibold mb-6">CEO & Founder, PublifyX</p>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Saurabh is the CEO and Founder of PublifyX, a white label DSP platform that enables agencies, ad networks, and startups to launch their own branded programmatic advertising business in minutes. Under his leadership, PublifyX has grown into a trusted platform powering multi-channel campaigns across Display, Video, Audio, CTV, and OTT.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CEO;
