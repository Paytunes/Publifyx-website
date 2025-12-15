import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to High-Impact Online Banner Advertising in 2025",
    excerpt: "Online banner advertising has been a foundational pillar of digital marketing for nearly three decades, and in 2025, it remains one of the most versatile, measurable, and cost-efficient ways for brands to reach audiences across the open web.",
    category: "Banner Ads",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    slug: "online-banner-advertising-guide-2025"
  },
  {
    id: 2,
    title: "The Future of Digital Advertising in 2025",
    excerpt: "Explore the emerging trends shaping the digital advertising landscape and how brands can stay ahead of the curve.",
    category: "Industry Trends",
    date: "Dec 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    slug: "future-digital-advertising-2025"
  },
  {
    id: 3,
    title: "Connected TV Advertising: A Complete Guide",
    excerpt: "Learn how to leverage Connected TV advertising to reach cord-cutters and streaming audiences effectively.",
    category: "CTV Advertising",
    date: "Dec 8, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop",
    slug: "connected-tv-advertising-guide"
  },
  {
    id: 4,
    title: "Maximizing ROI with Programmatic Advertising",
    excerpt: "Discover strategies to optimize your programmatic campaigns and achieve better returns on your ad spend.",
    category: "Programmatic",
    date: "Dec 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    slug: "maximizing-roi-programmatic-advertising"
  },
  {
    id: 5,
    title: "Understanding White Label DSP Solutions",
    excerpt: "A deep dive into white label DSP platforms and how they can empower your advertising business.",
    category: "White Label DSP",
    date: "Dec 2, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
    slug: "understanding-white-label-dsp"
  },
  {
    id: 6,
    title: "Targeting the Indian Digital Consumer in 2025",
    excerpt: "Insights into the evolving digital habits of Indian consumers and how advertisers can reach them effectively.",
    category: "Market Insights",
    date: "Nov 25, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop",
    slug: "targeting-indian-digital-consumer"
  }
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#2563EB] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            PublifyX Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and strategies in digital advertising
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-primary font-medium hover:text-orange-500 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#2563EB] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-8">
            Get the latest advertising insights delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
