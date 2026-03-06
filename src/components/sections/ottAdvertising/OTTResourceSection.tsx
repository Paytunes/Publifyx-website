import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const OTTResourceSection = () => {
  // Filter blog posts for OTT/CTV categories
  const ottBlogs = blogPosts
    .filter((post) => ["OTT Advertising", "CTV Advertising"].includes(post.category))
    .slice(0, 3);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6">
              Helpful OTT & CTV Content for Marketers
            </h2>
            <p className="text-lg text-navy-500">
              Boost your knowledge with our curated resources on the evolving landscape of streaming advertising.
            </p>
          </div>
          <Link
            to="/blog"
            className="text-brand-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all no-underline"
          >
            VIEW ALL RESOURCES
            <span className="text-xl">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ottBlogs.map((res, i) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${res.slug}`} className="no-underline block h-full">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-md transition-shadow group-hover:shadow-xl">
                  <img
                    src={res.image}
                    alt={res.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-bold tracking-widest text-navy-900 border border-white/20 uppercase">
                    {res.category.replace(" Advertising", "")}
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 mb-3 group-hover:text-brand-orange-600 transition-colors">
                  {res.title}
                </h3>
                <p className="text-navy-500 leading-relaxed mb-4 line-clamp-2">{res.excerpt}</p>
                <div className="text-navy-900 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <span className="text-brand-orange-500">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OTTResourceSection;
