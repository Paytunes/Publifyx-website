import { ReactNode } from "react";
import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { ArrowLeft, Twitter, Linkedin, Facebook, Sparkles, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReadingProgressBar from "./ReadingProgressBar";
import RelatedArticlesSection from "./RelatedArticlesSection";
import { getRelatedArticles } from "@/data/blogPosts";

interface BlogPostLayoutProps {
  currentSlug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  subtitle?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  imageCaption?: string;
  children: ReactNode;
}

const BlogPostLayout = ({
  currentSlug,
  category,
  date,
  readTime,
  title,
  subtitle,
  featuredImage,
  featuredImageAlt,
  imageCaption,
  children,
}: BlogPostLayoutProps) => {
  const pageUrl = encodeURIComponent(window.location.href);
  const encodedTitle = encodeURIComponent(title);
  const { sidebar } = getRelatedArticles(currentSlug);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
  };

  return (
    <Layout transparentHeader>
      <ReadingProgressBar />

      {/* Hero Section — DSP Style */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-navy-800">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-brand-orange-500 rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-orange-300 rounded-full blur-[160px] opacity-[0.06]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <PageBreadcrumb items={[{ label: "Home", path: "/" }, { label: "Blog", path: "/blog" }, { label: title.length > 40 ? title.substring(0, 40) + "…" : title }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                  <Sparkles className="w-4 h-4 text-brand-orange-400" />
                  <span className="text-sm font-medium text-white/80">{category}</span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold !text-white leading-[1.1] mb-5">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-navy-200 leading-relaxed mb-5 max-w-xl">
                  {subtitle}
                </p>
              )}
              <div className="flex items-center gap-4 text-sm text-navy-300 font-medium mb-8">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {readTime}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-navy-300 hover:text-brand-orange-400 transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-1.5" />
                  All Articles
                </Link>
                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-navy-500 text-xs uppercase tracking-wider hidden sm:inline">Share</span>
                  {[
                    { href: shareLinks.twitter, icon: Twitter, label: "Twitter" },
                    { href: shareLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
                    { href: shareLinks.facebook, icon: Facebook, label: "Facebook" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full text-navy-400 hover:text-brand-orange-400 hover:bg-white/10 transition-colors"
                      aria-label={`Share on ${label}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Featured Image as right-side card */}
            {featuredImage && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden lg:block">
                <figure className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <img
                    src={featuredImage}
                    alt={featuredImageAlt || title}
                    className="w-full object-cover max-h-[400px]"
                  />
                  {imageCaption && (
                    <figcaption className="text-xs text-navy-400 p-3 text-center italic">
                      {imageCaption}
                    </figcaption>
                  )}
                </figure>
              </motion.div>
            )}

            {/* If no featured image, show placeholder stat cards */}
            {!featuredImage && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden lg:grid grid-cols-2 gap-4">
                {[
                  { label: "Category", value: category },
                  { label: "Read Time", value: readTime },
                  { label: "Published", value: date },
                  { label: "Format", value: "Deep Dive" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-navy-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Featured Image */}
      {featuredImage && (
        <section className="lg:hidden bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <figure>
              <img
                src={featuredImage}
                alt={featuredImageAlt || title}
                className="w-full rounded-xl object-cover max-h-[400px]"
              />
              {imageCaption && (
                <figcaption className="text-xs text-navy-400 mt-2 text-center italic">
                  {imageCaption}
                </figcaption>
              )}
            </figure>
          </div>
        </section>
      )}

      {/* Article Body */}
      <article className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 article-content">
          {children}
        </div>
      </article>

      {/* Related Articles Section */}
      <RelatedArticlesSection posts={sidebar} />
    </Layout>
  );
};

export default BlogPostLayout;
