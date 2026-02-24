import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

const About = () => {
  useEffect(() => {
    document.title = "About PublifyX | White Label Programmatic Technology Company";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "PublifyX is a programmatic advertising technology company providing white label DSP solutions for agencies, ad networks, and startups worldwide.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "About" },
      ]}
      heroTitle="About PublifyX — Powering the Next Generation of Programmatic Advertising"
      heroSubtitle="We build and operate white-labeled demand side platform technology that enables agencies, ad networks, and startups to launch their own branded programmatic advertising platforms."
      ctaTitle="Partner with PublifyX"
      ctaDescription="Ready to explore how we can power your programmatic advertising business?"
    >
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What We Do</h2>
          <p className="text-navy-600 leading-relaxed">We provide a fully functional, white-labeled demand side platform that supports programmatic ad buying across display, video, audio, Connected TV (CTV), and Over-the-Top (OTT) channels. Our clients deploy the platform under their own brand, operate it with their pricing structure, and manage their client relationships independently — while we handle the infrastructure, bidding technology, supply integrations, and platform updates.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Our Mission</h2>
          <p className="text-navy-600 leading-relaxed">To democratize access to programmatic advertising technology. We believe that the tools to buy and optimize digital media should not be restricted to companies with million-dollar engineering budgets. PublifyX makes enterprise-grade ad tech accessible, affordable, and deployable in days.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Who We Serve</h2>
          <p className="text-navy-600 leading-relaxed">Our clients include independent media agencies looking to bring programmatic in-house, ad networks seeking self-serve capabilities, performance marketing companies, and startups entering the ad tech space. We serve businesses across the United States, India, Southeast Asia, and other markets worldwide.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Our Approach</h2>
          <p className="text-navy-600 leading-relaxed">We combine deep ad tech expertise with a commitment to transparency and client success. Our platform is built on robust, scalable infrastructure designed to handle high-volume programmatic buying. Our support team brings hands-on experience in campaign strategy, optimization, and agency operations.</p>
        </div>

        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-navy-900 mb-3">Learn More</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/how-it-works" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">How It Works</Link>
            <Link to="/case-studies" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Case Studies</Link>
            <Link to="/contact" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default About;
