import { Button } from "@/components/ui/button";
import { Users, Wallet } from "lucide-react";

const platforms = [
  {
    name: "JioHotstar",
    category: "OTT/Hotstar",
    users: "300M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    name: "YouTube",
    category: "Video Marketing",
    users: "491M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-red-600 to-red-700",
  },
  {
    name: "Facebook",
    category: "Social Media Advertising",
    users: "239M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "Jio Saavn",
    category: "Music Streaming",
    users: "100M Monthly Unique Users",
    minSpend: "₹3,00,000",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    name: "Google Display",
    category: "SEM",
    users: "Display Advertising Network",
    minSpend: "₹10,000",
    gradient: "from-green-500 to-blue-500",
  },
  {
    name: "IndustryBuy",
    category: "B2B",
    users: "50M Monthly Unique Users",
    minSpend: "₹1,00,000",
    gradient: "from-red-500 to-pink-500",
  },
  {
    name: "Google Search",
    category: "SEM",
    users: "Search Advertising",
    minSpend: "₹5,000",
    gradient: "from-gray-100 to-gray-300",
  },
  {
    name: "Times of India",
    category: "News Publishing",
    users: "150M Monthly Unique Users",
    minSpend: "₹5,000",
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "Instagram",
    category: "Social Media Advertising",
    users: "239M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    name: "ICC Cricket Advertiser",
    category: "Sports Marketing",
    users: "200M+ Cricket Fans",
    minSpend: "₹10,000",
    gradient: "from-blue-700 to-blue-900",
  },
  {
    name: "Yourcabs",
    category: "Travel Advertising",
    users: "5M Monthly Unique Users",
    minSpend: "₹1,00,000",
    gradient: "from-red-600 to-red-800",
  },
  {
    name: "LinkedIn",
    category: "Business Marketing",
    users: "100M+ Professionals",
    minSpend: "₹10,000",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    name: "DailyHunt",
    category: "News & Content",
    users: "350M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "BookMyShow",
    category: "Entertainment Ticketing",
    users: "50M+ Monthly Users",
    minSpend: "₹1,00,000",
    gradient: "from-red-700 to-pink-600",
  },
  {
    name: "Amazon Ad Player OTT",
    category: "E-Commerce/OTT",
    users: "100M+ Monthly Users",
    minSpend: "₹10,000",
    gradient: "from-orange-400 to-yellow-600",
  },
  {
    name: "MoneyControl",
    category: "Finance & Market News",
    users: "45M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-green-600 to-green-800",
  },
  {
    name: "Gaana",
    category: "Music Streaming",
    users: "185M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-red-500 to-orange-500",
  },
  {
    name: "Swiggy",
    category: "Food Delivery",
    users: "70M+ Monthly Users",
    minSpend: "₹10,000",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Hindustan Times",
    category: "News Publishing",
    users: "120M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    name: "TrueCaller",
    category: "Mobile Advertising",
    users: "250M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Zee5",
    category: "OTT",
    users: "150M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-purple-600 to-indigo-700",
  },
  {
    name: "TikTok",
    category: "Social Media Video",
    users: "120M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-gray-900 to-pink-600",
  },
  {
    name: "Economic Times",
    category: "Business News",
    users: "80M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-pink-600 to-purple-600",
  },
  {
    name: "OLA",
    category: "Ride Sharing",
    users: "150M+ Users",
    minSpend: "₹10,000",
    gradient: "from-green-400 to-green-600",
  },
  {
    name: "Cricbuzz",
    category: "Cricket News",
    users: "100M+ Cricket Fans",
    minSpend: "₹10,000",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    name: "The Hindu",
    category: "News Publishing",
    users: "60M Monthly Unique Users",
    minSpend: "₹1,00,000",
    gradient: "from-gray-800 to-black",
  },
  {
    name: "Vogue",
    category: "Fashion & Lifestyle",
    users: "20M Monthly Unique Users",
    minSpend: "₹10,000",
    gradient: "from-gray-900 to-gray-700",
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
