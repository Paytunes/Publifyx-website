import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronRight, Star, Target, Zap, ArrowRight, Sparkles, Rocket, Shield } from "lucide-react";
import { useState } from "react";
import GetStartedModal from "@/components/GetStartedModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WhiteLabelDSP = () => {
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

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

  const comparison = [
    {
      feature: "Time to Launch",
      buildOwn: "12–18 months",
      whiteLabel: "Under 2 weeks"
    },
    {
      feature: "Upfront Investment",
      buildOwn: "$250K+",
      whiteLabel: "Fraction of the cost"
    },
    {
      feature: "Maintenance & Infrastructure",
      buildOwn: "Your responsibility",
      whiteLabel: "Fully managed for you"
    },
    {
      feature: "Custom Branding",
      buildOwn: "Yes (complex setup)",
      whiteLabel: "Yes (easy setup)"
    },
    {
      feature: "Programmatic Access",
      buildOwn: "Requires integrations",
      whiteLabel: "Built-in SSP access"
    },
    {
      feature: "Scalability",
      buildOwn: "Hard without dev team",
      whiteLabel: "Instantly scalable"
    }
  ];

  const features = [
    {
      title: "Real-Time Bidding Engine",
      description: "Advanced RTB technology for optimal performance",
      icon: Zap
    },
    {
      title: "Self-Serve and Managed Campaign Modes",
      description: "Flexible campaign management options",
      icon: Target
    },
    {
      title: "Customizable UI with Your Branding",
      description: "Complete white-label customization",
      icon: Sparkles
    },
    {
      title: "Advanced Targeting & Reporting Tools",
      description: "Precision targeting with detailed analytics",
      icon: ChevronRight
    },
    {
      title: "Multi-Format Support: Display, Video, Audio, Native, CTV",
      description: "Comprehensive ad format coverage",
      icon: Star
    },
    {
      title: "API Access for Deep Integrations",
      description: "Complete API access for custom integrations",
      icon: Shield
    },
    {
      title: "24/7 Tech Support & Dedicated Onboarding",
      description: "Full support and seamless onboarding",
      icon: Rocket
    }
  ];

  const faqs = [
    {
      question: "How fast can I go live with my own DSP?",
      answer: "Most customers launch within 5-7 business days after onboarding."
    },
    {
      question: "Do I need a dev team?",
      answer: "No. The platform is fully managed — you just focus on growing your business."
    },
    {
      question: "Can I set my own margins?",
      answer: "Yes, you control pricing, client billing, and revenue."
    },
    {
      question: "What ad formats are supported?",
      answer: "Display, native, video, mobile, and connected TV."
    },
    {
      question: "How is this different from a reseller model?",
      answer: "You own the customer experience. Everything runs under your brand."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-orange-100/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Star className="w-5 h-5 mr-2 fill-current" />
            White Label DSP Solution
          </div>
          <h1 className="mb-6 max-w-5xl mx-auto text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent leading-tight">
            White Labelled Platform for <span className="text-orange-500">Programmatic Ad Buying</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
            Launch your own ad tech business with our white label DSP for programmatic ad buying for Display, Video, Audio, Native, and CTV ads.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-semibold">
            Easy setup | Full control | Powerful performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => setIsGetStartedModalOpen(true)}
              className="btn-primary text-lg px-10 py-6 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Start Your Free Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-gray-500">No commitment required</p>
          </div>
        </div>
      </section>

      {/* What is White Label Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              White Label DSP
            </div>
            <h2 className="mb-6 max-w-4xl mx-auto text-4xl md:text-5xl font-bold text-gray-900">
              The Smartest White Label DSP for Programmatic Ad Buying
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to run a powerful, scalable ad platform — without the time, cost, or hassle of building it yourself.
            </p>
          </div>

          <Card className="max-w-6xl mx-auto mb-16 border-0 shadow-2xl bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
            <CardHeader className="pb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle className="text-3xl md:text-4xl text-center font-bold">What is a White Labelled Platform?</CardTitle>
            </CardHeader>
            <CardContent className="px-8 md:px-12 py-10">
              <p className="text-gray-700 mb-6 leading-relaxed text-lg md:text-xl">
                A white label platform is a ready-made SaaS product that businesses can rebrand as their own by customising the name, logo, and design. It lets companies launch quickly without building from scratch, saving time, development costs, and maintenance efforts.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg md:text-xl">
                In short, it's our tech and your brand. You get the power of a full-scale white label demand side platform, branded as your own, with zero development time.
              </p>
              <div className="bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 p-8 rounded-2xl border-2 border-orange-200">
                <p className="font-bold text-orange-700 text-xl md:text-2xl text-center">
                  No need to build. No need to manage servers. Just plug in and launch.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Benefits and Target Audience */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 md:p-10 rounded-3xl border-2 border-green-200 shadow-xl">
              <h3 className="mb-8 text-gray-800 text-center text-2xl md:text-3xl font-bold">Key Benefits</h3>
              <ul className="space-y-5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Check className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700 text-lg font-medium leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 md:p-10 rounded-3xl border-2 border-blue-200 shadow-xl">
              <h3 className="mb-8 text-gray-800 text-center text-2xl md:text-3xl font-bold">Who's It For?</h3>
              <div className="space-y-5">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-start group hover:transform hover:scale-105 transition-all duration-300">
                    <div className={`bg-gradient-to-r ${audience.gradient} rounded-full p-2.5 mr-4 mt-1 flex-shrink-0 shadow-lg`}>
                      <audience.icon className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg mb-1">{audience.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-base">{audience.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Comparison
            </div>
            <h2 className="mb-6 max-w-4xl mx-auto text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose a White Label DSP Over Building Your Own?
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white">
                  <tr>
                    <th className="px-6 md:px-8 py-6 text-left font-bold text-lg md:text-xl">Feature</th>
                    <th className="px-6 md:px-8 py-6 text-left font-bold text-lg md:text-xl">Build Your Own DSP</th>
                    <th className="px-6 md:px-8 py-6 text-left font-bold text-lg md:text-xl">Our White Labelled Platform</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className={`border-b-2 border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors duration-300`}>
                      <td className="px-6 md:px-8 py-6 font-bold text-gray-800 text-lg md:text-xl">{row.feature}</td>
                      <td className="px-6 md:px-8 py-6 text-red-600 font-semibold text-base md:text-lg">{row.buildOwn}</td>
                      <td className="px-6 md:px-8 py-6 text-green-600 font-bold text-base md:text-lg">{row.whiteLabel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-semibold mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Features
            </div>
            <h2 className="mb-6 max-w-4xl mx-auto text-4xl md:text-5xl font-bold text-gray-900">
              Features You'll Love
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white hover:scale-105 overflow-hidden">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <feature.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-xl mb-3 leading-tight">{feature.title}</h4>
                  <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="mb-6 text-white text-4xl md:text-6xl font-bold">
            Ready to Launch Your DSP?
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-orange-100 leading-relaxed font-medium">
            Why wait months and spend thousands when you can launch your white label DSP for programmatic ad buying this week?
          </p>
          <p className="text-lg md:text-xl mb-10 text-orange-200 font-semibold">
            Zero coding | Full control | Enterprise-grade tools
          </p>
          <Button 
            onClick={() => setIsGetStartedModalOpen(true)}
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg md:text-xl px-12 py-6 font-bold hover:scale-105 transition-all duration-300 shadow-2xl rounded-2xl"
          >
            Book Your Free Demo Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              FAQs
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 text-left font-bold text-gray-800 hover:no-underline text-lg md:text-xl hover:bg-gray-50 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed text-lg md:text-xl">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <GetStartedModal 
        isOpen={isGetStartedModalOpen} 
        onClose={() => setIsGetStartedModalOpen(false)} 
      />
    </Layout>
  );
};

export default WhiteLabelDSP;
