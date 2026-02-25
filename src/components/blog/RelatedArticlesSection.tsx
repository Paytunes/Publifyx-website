import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

/** Related Articles section — shown after article content */
const RelatedArticlesSection = ({ posts }: { posts: BlogPost[] }) => {
  if (!posts.length) return null;

  return (
    <section className="bg-gray-50 border-t border-gray-200 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#ff7200]">
                  {post.category}
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-2 mb-2 leading-snug group-hover:text-[#ff7200] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{post.excerpt}</p>
                <span className="inline-flex items-center text-sm font-semibold text-[#ff7200]">
                  Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticlesSection;
