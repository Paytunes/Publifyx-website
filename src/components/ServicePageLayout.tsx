import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "./Layout";
import { useState } from "react";
import GetStartedModal from "./GetStartedModal";
import { blogPosts } from "@/data/blogPosts";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroSubtitle: string;
  children: React.ReactNode;
  faqs?: FAQItem[];
  relatedArticleSlug?: string;
  ctaTitle?: string;
  ctaDescription?: string;
}

const ServicePageLayout = ({
  breadcrumbs,
  heroTitle,
  heroSubtitle,
  children,
  faqs,
  relatedArticleSlug,
  ctaTitle = "Ready to Get Started?",
  ctaDescription = "Schedule a personalized demo to see how PublifyX can power your programmatic advertising business.",
}: ServicePageLayoutProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const relatedArticle = relatedArticleSlug
    ? blogPosts.find((p) => p.slug === relatedArticleSlug)
    : null;

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-navy-50 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-navy-500">
            {breadcrumbs.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-navy-300" />}
                {item.path ? (
                  <Link to={item.path} className="hover:text-brand-orange-500 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-navy-800 font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-orange-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-navy-200 leading-relaxed max-w-3xl"
          >
            {heroSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary px-8 py-3.5 text-base font-semibold"
            >
              Book a Call
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors text-base"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {children}
      </div>

      {/* Inline Related Article */}
      {relatedArticle && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link
            to={`/blog/${relatedArticle.slug}`}
            className="block bg-navy-50 border border-navy-100 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange-500">
              Related Article
            </span>
            <h3 className="text-lg font-bold text-navy-900 mt-2 mb-1 group-hover:text-brand-orange-500 transition-colors">
              {relatedArticle.title}
            </h3>
            <p className="text-sm text-navy-500 line-clamp-2">{relatedArticle.excerpt}</p>
          </Link>
        </div>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="bg-navy-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQAccordionItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ctaTitle}</h2>
          <p className="text-lg text-white/90 mb-8">{ctaDescription}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-brand-orange-600 px-8 py-3.5 rounded-xl font-bold hover:bg-navy-50 transition-colors"
            >
              Book a Demo
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
};

/* Simple accordion for FAQs */
const FAQAccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-navy-100 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
      >
        <span className="font-semibold text-navy-900 pr-4">{question}</span>
        <ChevronRight className={`w-5 h-5 text-navy-400 flex-shrink-0 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-navy-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default ServicePageLayout;
