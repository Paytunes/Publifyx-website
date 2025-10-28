import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, TrendingUp } from "lucide-react";

const platforms = [
  {
    name: "Spotify",
    category: "Music Streaming",
    users: "8M+ Monthly Users",
    pricing: "Starting ₹50,000",
    logo: "🎵",
  },
  {
    name: "JioSaavn",
    category: "Audio Streaming",
    users: "15M+ Monthly Users",
    pricing: "Starting ₹35,000",
    logo: "🎼",
  },
  {
    name: "Gaana",
    category: "Music Platform",
    users: "12M+ Monthly Users",
    pricing: "Starting ₹40,000",
    logo: "🎶",
  },
  {
    name: "Wynk Music",
    category: "Streaming Service",
    users: "10M+ Monthly Users",
    pricing: "Starting ₹45,000",
    logo: "🎧",
  },
  {
    name: "Amazon Music",
    category: "Digital Streaming",
    users: "6M+ Monthly Users",
    pricing: "Starting ₹55,000",
    logo: "🎸",
  },
  {
    name: "YouTube Music",
    category: "Video & Audio",
    users: "20M+ Monthly Users",
    pricing: "Starting ₹60,000",
    logo: "▶️",
  },
];

const PlatformGridSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Digital Advertising Platforms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from India's leading audio streaming platforms to reach your target audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 bg-white"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{platform.logo}</div>
                  <span className="text-xs font-medium px-3 py-1 bg-purple-100 text-purple-primary rounded-full">
                    {platform.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {platform.name}
                </h3>
                
                <div className="space-y-2 mb-4 flex-grow">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-purple-accent" />
                    <span>{platform.users}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 text-purple-accent" />
                    <span>{platform.pricing}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-purple-primary hover:bg-purple-primary/90 text-white font-semibold"
                >
                  Get Rates
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformGridSection;
