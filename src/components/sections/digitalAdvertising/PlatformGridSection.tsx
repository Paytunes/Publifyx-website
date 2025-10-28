import { Button } from "@/components/ui/button";
import { Users, Wallet } from "lucide-react";

const platforms = [
  {
    name: "JioSaavn",
    category: "Music",
    users: "100M Monthly Unique Users",
    minSpend: "₹3,00,000",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    name: "Gaana",
    category: "Entertainment",
    users: "185M Monthly Unique Users",
    minSpend: "₹50,000",
    gradient: "from-red-500 to-orange-500",
  },
  {
    name: "Wynk Music",
    category: "Music",
    users: "100M Monthly Unique Users",
    minSpend: "₹1,00,000",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    name: "Spotify",
    category: "Music Streaming",
    users: "8M+ Monthly Users",
    minSpend: "₹50,000",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    name: "YouTube Music",
    category: "Video & Audio",
    users: "491M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-red-600 to-red-700",
  },
  {
    name: "Amazon Music",
    category: "Digital Streaming",
    users: "6M+ Monthly Users",
    minSpend: "₹55,000",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Hungama",
    category: "Entertainment",
    users: "45M Monthly Unique Users",
    minSpend: "₹1,00,000",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    name: "Resso",
    category: "Music Streaming",
    users: "20M+ Monthly Users",
    minSpend: "₹25,000",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    name: "Apple Music",
    category: "Music Platform",
    users: "5M+ Monthly Users",
    minSpend: "₹75,000",
    gradient: "from-gray-700 to-gray-900",
  },
];

const PlatformGridSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Book Digital Advertisements
            </h2>
            <p className="text-gray-600">
              Choose from India's leading digital platforms to reach your target audience
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
            <span>Sort by:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-primary">
              <option>Top Searched</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Users: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Logo Area with Gradient */}
              <div className={`h-40 bg-gradient-to-br ${platform.gradient} flex items-center justify-center relative`}>
                <div className="text-white text-5xl font-bold">
                  {platform.name.charAt(0)}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {platform.name}
                    </h3>
                    <span className="text-sm font-medium text-gray-600">
                      {platform.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 mb-5">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Users className="w-4 h-4 text-purple-primary flex-shrink-0" />
                    <span>{platform.users}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                    <Wallet className="w-4 h-4 text-purple-primary flex-shrink-0" />
                    <span>{platform.minSpend} Min Spend</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-purple-primary hover:bg-purple-primary/90 text-white font-semibold h-11"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformGridSection;
