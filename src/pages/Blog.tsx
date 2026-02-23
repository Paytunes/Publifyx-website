import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Ad Tech Trends Every Marketer Should Watch in 2026",
    excerpt:
      "The advertising ecosystem is entering a decisive phase. As privacy regulations tighten, consumer attention fragments across platforms, and automation becomes more intelligent, marketers can no longer rely on legacy tools.",
    category: "Ad Tech",
    date: "Dec 29, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "ad-tech-trends-2026",
  },
  {
    id: 2,
    title: "5 Reasons Agencies Should Consider a White-Label DSP",
    excerpt:
      "As digital advertising grows more complex, agencies are under increasing pressure to deliver measurable results, maintain transparency, and protect margins. White-label DSPs are redefining how agencies operate.",
    category: "White Label DSP",
    date: "Dec 29, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "white-label-dsp-reasons",
  },
  {
    id: 3,
    title: "The Complete Guide to High-Impact Online Banner Advertising in 2026",
    excerpt:
      "Online banner advertising has been a foundational pillar of digital marketing for nearly three decades, and in 2026, it remains one of the most versatile, measurable, and cost-efficient ways for brands to reach audiences across the open web.",
    category: "Banner Ads",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "online-banner-advertising-guide-2026",
  },
  {
    id: 4,
    title: "Connected TV Advertising: A Complete Guide",
    excerpt:
      "Learn how to leverage Connected TV advertising to reach cord-cutters and streaming audiences effectively.",
    category: "CTV Advertising",
    date: "Dec 8, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "connected-tv-advertising-guide",
  },
  {
    id: 5,
    title: "Maximizing ROI with Programmatic Advertising",
    excerpt: "Discover strategies to optimize your programmatic campaigns and achieve better returns on your ad spend.",
    category: "Programmatic",
    date: "Dec 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "maximizing-roi-programmatic-advertising",
  },
  {
    id: 6,
    title: "Targeting the Indian Digital Consumer in 2025",
    excerpt:
      "Insights into the evolving digital habits of Indian consumers and how advertisers can reach them effectively.",
    category: "Market Insights",
    date: "Nov 25, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&fm=webp&q=75",
    slug: "targeting-indian-digital-consumer",
  },
];

const Blog = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Digital Advertising Blog & Insights | PublifyX";
    return () => { document.title = prev; };
  }, []);

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <Layout>
      {/* Hero Section — editorial style */}
      <section className="bg-white border-b border-gray-200 pt-14 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ff7200] mb-4">
            PublifyX Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Insights & Analysis
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Stay updated with the latest trends, strategies, and deep dives in digital advertising and ad tech.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/blog/${featured.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-lg">
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
              <div>
                <Badge className="bg-[#ff7200] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider mb-4">
                  {featured.category}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-3 group-hover:text-[#ff7200] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-200" />
      </div>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                <article>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding={index === 0 ? "sync" : "async"}
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ff7200]">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 leading-snug group-hover:text-[#ff7200] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-3 text-white">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mb-8">Get the latest advertising insights delivered straight to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#ff7200] border-0"
            />
            <button className="bg-[#ff7200] hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
