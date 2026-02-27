import { ReactNode } from "react";
import Layout from "@/components/Layout";
import { ArrowLeft, Twitter, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import ReadingProgressBar from "./ReadingProgressBar";
import RelatedArticlesSection from "./RelatedArticlesSection";
import { getRelatedArticles } from "@/data/blogPosts";
import PageBreadcrumb from "@/components/PageBreadcrumb";

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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-navy-800">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          {/* Breadcrumb */}
          <PageBreadcrumb
            variant="dark"
            items={[
              { label: "Home", path: "/" },
              { label: "Blog", path: "/blog" },
              { label: title },
            ]}
          />

          {/* Back + Share Row */}
          <div className="flex justify-between items-center mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-navy-300 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              All Articles
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-navy-400 text-xs uppercase tracking-wider hidden sm:inline">Share</span>
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

          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <span className="text-sm font-medium text-brand-orange-400">{category}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6 max-w-4xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-3xl">
              {subtitle}
            </p>
          )}

          {/* Meta Line */}
          <div className="flex items-center gap-4 text-navy-300">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <time>{date}</time>
            </div>
            <span className="text-navy-500">·</span>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {featuredImage && (
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <figure>
              <img
                src={featuredImage}
                alt={featuredImageAlt || title}
                className="w-full rounded-lg object-cover max-h-[500px]"
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
