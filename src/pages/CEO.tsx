import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import founderImage from "@/assets/founder/saurabh-ceo.webp";
import { Linkedin, MapPin } from "lucide-react";

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
    document.title = "Capt. Saurabh Tiwari – CEO of PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Meet Capt. Saurabh Tiwari, Co-Founder & CEO of PublifyX – an AI-powered, white-labeled DSP platform powering programmatic advertising for brands and agencies.");
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
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <a href="/saurabh" className="text-sm text-primary font-medium tracking-wide uppercase">
              Meet the Founder
            </a>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Founder Image */}
            <img
              src={founderImage}
              alt="Capt. Saurabh Tiwari, CEO of PublifyX"
              loading="lazy"
              className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-lg"
            />

            {/* H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-3 text-center">
              Capt. Saurabh Tiwari
            </h1>

            {/* H2 subtitle */}
            <h2 className="text-lg md:text-xl text-primary font-semibold mb-8 text-center">
              Co-Founder &amp; CEO, PublifyX
            </h2>

            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Saurabh Tiwari is not your typical tech entrepreneur. Before building one of India's most innovative advertising platforms, he commanded ships across the world's oceans — a career that shaped his instinct for precision, his leadership under pressure, and his ability to navigate uncharted waters.
              </p>
              <p>
                Today, he channels that same boldness into PublifyX — an AI-powered, white-labeled DSP (Demand-Side Platform) designed to make digital advertising effortless for brands and agencies across India. Having established a strong foothold in India, Saurabh is now setting his sights on the United States, bringing PublifyX's next-generation adtech capabilities to one of the world's largest advertising markets.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-6">The Journey</h2>
              <p>
                From the deck of a vessel to the boardroom of a fast-growing adtech startup, Saurabh's career spans over a decade of diverse leadership. As a certified Captain with Anglo-Eastern Ship Management, he led complex maritime operations before pivoting into media and advertising — where he found a new kind of ocean to navigate.
              </p>
              <p>
                He went on to head regional sales for HIT 95 FM across West and South India, and co-founded Rids Media Pvt. Ltd., honing his expertise in business development and advertising sales. These experiences became the foundation for his boldest venture yet.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-6">Building PublifyX</h2>
              <p>
                In 2023, Saurabh co-founded PublifyX Tech Pvt. Ltd. with a clear mission: to become India's largest marketplace for all kinds of advertising. The platform empowers brands and agencies to plan and execute multi-format campaigns — including CTV, digital audio, podcasts, banners, video, and OTT — all from a single, unified interface, powered by AI.
              </p>
              <p>
                What sets PublifyX apart is its zero-upfront-cost, white-label model, which removes the traditional barriers for agencies looking to scale their media capabilities without heavy investment.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-6">Vision</h2>
              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80">
                "I believe in the power of learning, adapting, and innovating. The future of advertising is AI-driven — and we're building it."
                <br />
                <span className="not-italic font-semibold text-foreground">— Capt. Saurabh Tiwari</span>
              </blockquote>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-6">Expertise</h2>
              <ul className="list-disc list-inside space-y-1.5">
                <li>Programmatic &amp; CTV Advertising</li>
                <li>AI-Driven Marketing Automation</li>
                <li>Business Expansion &amp; Revenue Growth</li>
                <li>Digital Media Sales &amp; Strategy</li>
                <li>Multi-format Campaign Planning &amp; Execution</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-6">Let's Connect</h2>
              <p>
                Saurabh is always open to strategic collaborations, partnerships, and conversations about the future of AI-driven advertising in India.
              </p>
              <div className="flex flex-col gap-3 text-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Mumbai, Maharashtra, India
                </span>
                <a
                  href="https://www.linkedin.com/in/captainsaurabh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CEO;
