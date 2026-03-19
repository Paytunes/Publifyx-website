import Layout from "@/components/Layout";
import { Calendar, Clock, Sparkles, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { blogPosts } from "@/data/blogPosts";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import MagneticCard from "@/components/effects/MagneticCard";

const Blog = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Programmatic Advertising Blog & Insights — PublifyX";
    return () => {
      document.title = prev;
    };
  }, []);

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <Layout transparentHeader>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-navy-800">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <PageBreadcrumb
            items={[{ label: "Home", path: "/" }, { label: "Blog" }]}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">
                  PublifyX Blog
                </span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                Ad Tech Insights &
                <span className="block text-brand-orange-400">
                  Industry Analysis
                </span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-10 leading-relaxed max-w-xl">
                Stay ahead with the latest trends, strategies, and deep dives in
                programmatic advertising, DSP technology, and digital media
                buying.
              </p>
              <div className="flex items-center gap-6 text-navy-300">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-brand-orange-400" />
                  <span className="text-sm font-semibold">
                    {blogPosts.length} Articles
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">Updated Weekly</span>
                </div>
              </div>
            </div>

            {/* Featured Post Card */}
            <div
              className="hidden lg:block"
            >
              <Link to={`/blog/${featured.slug}`} className="group block">
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-brand-orange-500/30 transition-all duration-300">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="p-6">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-orange-400 mb-3">
                      {featured.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-brand-orange-400 transition-colors line-clamp-2">
                      {featured.title}
                    </h3>
                    <p className="text-navy-300 text-sm leading-relaxed mb-4 line-clamp-2">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-navy-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span
              className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
            >
              Latest Articles
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-navy-800"
            >
              Explore Our Latest Content
            </h2>
          </div>

          {/* Mobile Featured Post */}
          <div className="lg:hidden mb-10">
            <Link to={`/blog/${featured.slug}`} className="group block">
              <div className="rounded-2xl overflow-hidden border border-navy-100 hover:shadow-lg transition-all">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-48 object-cover"
                  loading="eager"
                />
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange-500">
                    {featured.category}
                  </span>
                  <h3 className="text-lg font-bold text-navy-800 mt-2 mb-2 group-hover:text-brand-orange-500 transition-colors">
                    {featured.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-navy-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, index) => (
              <div
                key={post.id}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <MagneticCard className="bg-white rounded-2xl border border-navy-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-orange-500 mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-navy-800 mb-2 leading-snug group-hover:text-brand-orange-500 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-navy-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-navy-400 font-medium mt-auto">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                    </div>
                  </MagneticCard>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-800" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-500 rounded-full blur-[250px] opacity-10" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,114,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,114,0,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 !text-white">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-navy-300 mb-8 text-lg">
            Get the latest advertising insights delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              aria-label="Email address for newsletter"
              className="flex-1 px-4 py-3 rounded-xl text-navy-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange-500 border-0"
            />
            <div className="inline-flex items-center bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
              Subscribe
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
