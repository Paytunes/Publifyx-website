import Layout from "@/components/Layout";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen, TrendingUp, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Programmatic Advertising Blog & Insights — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Stay updated with the latest trends, strategies, and deep dives in programmatic advertising, white label DSP, CTV, OTT, and ad tech.");
    return () => { document.title = prev; };
  }, []);

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);
  const categories = [...new Set(blogPosts.map(p => p.category))];

  return (
    <Layout transparentHeader>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy-800">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-brand-orange-500 rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-orange-300 rounded-full blur-[160px] opacity-[0.06]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <PageBreadcrumb items={[{ label: "Home", path: "/" }, { label: "Blog" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange-400" />
                <span className="text-sm font-medium text-white/80">PublifyX Blog</span>
              </div>
              <h1 className="mb-6 !text-white leading-[1.1]">
                Insights & Analysis for
                <span className="block text-brand-orange-400">Programmatic Advertising</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 mb-4 leading-relaxed max-w-xl">
                Stay updated with the latest trends, strategies, and deep dives in digital advertising and ad tech.
              </p>
              <p className="text-base text-navy-300 mb-10 font-semibold">
                White Label DSP · CTV · OTT · Programmatic Audio · Ad Tech
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button asChild className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25 group">
                  <a href="#articles">
                    Browse Articles <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { label: "Published Articles", value: String(blogPosts.length), icon: FileText },
                { label: "Topics Covered", value: String(categories.length), icon: BookOpen },
                { label: "Industry Insights", value: "Deep Dives", icon: TrendingUp },
                { label: "For Ad Tech Pros", value: "Free Access", icon: Users },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                  <stat.icon className="w-5 h-5 text-brand-orange-400 mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-navy-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section id="articles" className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange-500 mb-3 block">Featured Article</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Latest from the Blog</h2>
          </div>
          <Link to={`/blog/${featured.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl border border-navy-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-orange-500 mb-4">
                  {featured.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-900 leading-tight mb-3 group-hover:text-brand-orange-500 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-navy-500 leading-relaxed mb-4 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-navy-400 font-medium mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center text-brand-orange-500 font-semibold group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange-500 mb-3 block">All Articles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Browse Our Library</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                <article className="bg-navy-50 rounded-2xl border border-navy-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding={index < 3 ? "sync" : "async"}
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-orange-500">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-navy-900 mt-2 mb-2 leading-snug group-hover:text-brand-orange-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-navy-500 text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-navy-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 bg-navy-800 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange-500 rounded-full blur-[250px] opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange-400 mb-3 block">Stay Updated</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-navy-300 mb-8">Get the latest advertising insights delivered straight to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3.5 rounded-xl text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange-500 border-0"
            />
            <Button className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-orange-500/25">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
