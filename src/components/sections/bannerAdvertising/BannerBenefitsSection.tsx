import { useEffect, useState } from "react";
import { TrendingUp, Eye, MousePointer, DollarSign, Users, BarChart3 } from "lucide-react";

const BannerBenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const benefits = [
    {
      icon: Eye,
      title: "Increase Brand Awareness",
      description:
        "Strategically placed ads on high-traffic websites capture vast audiences and reinforce brand identity.",
      color: "bg-blue-500",
      metric: "85%",
      metricLabel: "Brand Recall",
    },
    {
      icon: BarChart3,
      title: "Measurable Results",
      description: "Track impressions, clicks, and conversions to evaluate campaign performance effectively.",
      color: "bg-green-500",
      metric: "95%",
      metricLabel: "Tracking Accuracy",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Targeting",
      description: "Reach specific audiences based on demographics, location, and interests to maximize ROI.",
      color: "bg-orange-500",
      metric: "300%",
      metricLabel: "Average ROI",
    },
    {
      icon: MousePointer,
      title: "Enhanced Engagement",
      description: "Visually appealing and interactive experiences that encourage user interaction and drive traffic.",
      color: "bg-purple-500",
      metric: "45%",
      metricLabel: "Click-Through Rate",
    },
    {
      icon: Users,
      title: "Audience Reach",
      description: "Connect with millions of potential customers across multiple high-traffic platforms.",
      color: "bg-teal-500",
      metric: "2M+",
      metricLabel: "Daily Reach",
    },
    {
      icon: TrendingUp,
      title: "Sales Growth",
      description: "Drive traffic to your website and increase sales opportunities through targeted banner campaigns.",
      color: "bg-red-500",
      metric: "60%",
      metricLabel: "Sales Increase",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("benefits-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % benefits.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, benefits.length]);

  return (
    <section id="benefits-section" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Benefits of Banner Advertising</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Banner advertising offers a multitude of advantages that make it a vital component of a successful digital
            marketing strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isActive = index === activeCard;

            return (
              <div
                key={index}
                className={`
                  relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  ${isActive ? "ring-2 ring-orange-500 transform scale-105" : ""}
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setActiveCard(index)}
              >
                {/* Icon */}
                <div className={`${benefit.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>

                  {/* Metric */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#ff7200] mb-1">{benefit.metric}</div>
                    <div className="text-sm text-gray-500">{benefit.metricLabel}</div>
                  </div>
                </div>

                {/* Animated Border */}
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 opacity-20 animate-pulse"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-orange-50 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Experience These Benefits?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of brands already maximizing their advertising ROI with PublifyX.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>✓ No setup fees</span>
              <span>✓ 30-day free trial</span>
              <span>✓ 24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBenefitsSection;
