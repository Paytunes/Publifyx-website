import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

/** Related Articles section — shown after article content */
const RelatedArticlesSection = ({ posts }: { posts: BlogPost[] }) => {
  if (!posts.length) return null;

  return (
    <section className="py-16 bg-navy-50 border-t border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange-500 mb-3 block">
            Continue Reading
          </span>
          <h2 className="text-3xl font-bold text-navy-900">Related Articles</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-navy-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange-500">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mt-2 mb-2 leading-snug group-hover:text-brand-orange-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-navy-500 line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
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
                  <span className="inline-flex items-center text-sm font-semibold text-brand-orange-500">
                    Read <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticlesSection;
