
import { Check, Target, Zap, Star, ChevronRight, Rocket, Shield } from "lucide-react";

const BenefitsAndAudienceSection = () => {
  const benefits = [
    "Use your own domain and logo",
    "Set your own pricing and margins",
    "Keep full control of customer relationships",
    "Access real-time programmatic bidding",
    "Full support, no technical team required",
    "Enterprise-grade tools and infrastructure"
  ];

  const targetAudience = [
    {
      title: "Ad Agencies",
      description: "Offer clients a scalable, branded DSP solution",
      icon: Target,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Ad Networks",
      description: "Centralise and optimise buying across inventory",
      icon: Zap,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Startups",
      description: "Jumpstart your ad tech venture without dev costs",
      icon: Star,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Media Buyers",
      description: "Run campaigns under your brand with pro tools",
      icon: ChevronRight,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Publishers",
      description: "Monetize inventory with advanced bidding tech",
      icon: Rocket,
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "Consultants",
      description: "Deliver white-label solutions to your clients",
      icon: Shield,
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 md:p-10 rounded-3xl border-2 border-green-200 shadow-xl h-full flex flex-col">
        <h2 className="mb-8 text-gray-800 text-center text-2xl md:text-3xl font-bold">Key Benefits</h2>
        <div className="flex-1 flex flex-col justify-between">
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center group min-h-[3.5rem]">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2.5 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <Check className="text-white" size={18} />
                </div>
                <h3 className="text-gray-700 text-lg font-medium leading-relaxed flex-1">{benefit}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 md:p-10 rounded-3xl border-2 border-blue-200 shadow-xl h-full flex flex-col">
        <h2 className="mb-8 text-gray-800 text-center text-2xl md:text-3xl font-bold">Who's It For?</h2>
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-6">
            {targetAudience.map((audience, index) => (
              <div key={index} className="flex items-center group hover:transform hover:scale-105 transition-all duration-300 min-h-[3.5rem]">
                <div className={`bg-gradient-to-r ${audience.gradient} rounded-full p-2.5 mr-4 flex-shrink-0 shadow-lg`}>
                  <audience.icon className="text-white" size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{audience.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsAndAudienceSection;
