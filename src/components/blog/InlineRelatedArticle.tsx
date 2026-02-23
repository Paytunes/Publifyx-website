import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

/** Inline related article card — inserted between paragraphs */
const InlineRelatedArticle = ({ post }: { post: BlogPost }) => (
  <div className="not-prose my-8 border-y border-gray-200 border-solid py-8">
    <Link
      to={`/blog/${post.slug}`}
      className="flex flex-col sm:flex-row !no-underline border border-gray-200 rounded-xl overflow-hidden group hover:shadow-lg transition-shadow"
    >
      <div className="sm:w-2/5 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ff7200] mb-2">{post.category}</span>
        <h4 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#ff7200] transition-colors">
          {post.title}
        </h4>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{post.excerpt}</p>
        <span className="inline-flex items-center text-sm font-semibold text-[#ff7200]">
          Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </span>
      </div>
    </Link>
  </div>
);

export default InlineRelatedArticle;
