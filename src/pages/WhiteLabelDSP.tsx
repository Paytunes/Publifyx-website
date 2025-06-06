
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronRight, Star, Target, Zap } from "lucide-react";
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
    "Full support, no technical team required"
  ];

  const targetAudience = [
    {
      title: "Ad Agencies",
      description: "Offer clients a scalable, branded DSP",
      icon: Target
    },
    {
      title: "Ad Networks",
      description: "Centralise and optimise buying across inventory",
      icon: Zap
    },
    {
      title: "Startups",
      description: "Jumpstart your ad tech venture without millions in dev costs",
      icon: Star
    },
    {
      title: "Media Buyers",
      description: "Run campaigns under your own brand with enterprise-grade tools",
      icon: ChevronRight
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
    "Real-Time Bidding Engine",
    "Self-Serve and Managed Campaign Modes",
    "Customizable UI with Your Branding",
    "Advanced Targeting & Reporting Tools",
    "Multi-Format Support: Display, Video, Audio, Native, CTV",
    "API Access for Deep Integrations",
    "24/7 Tech Support & Dedicated Onboarding"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 md:py-28">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            White Label DSP Solution
          </div>
          <h1 className="mb-6 max-w-4xl mx-auto">
            White Labelled Platform for <span className="text-orange-500">Programmatic Ad Buying</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
            Launch your own ad tech business with our white label DSP for programmatic ad buying for Display, Video, Audio, Native, and CTV ads.
          </p>
          <p className="text-lg text-gray-700 mb-8 font-medium">
            Easy setup | Full control | Powerful performance
          </p>
          <Button 
            onClick={() => setIsGetStartedModalOpen(true)}
            className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-all duration-200"
          >
            Start Your Free Demo
          </Button>
        </div>
      </section>

      {/* What is White Label Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              White Label DSP
            </div>
            <h2 className="mb-6 max-w-4xl mx-auto">
              The Smartest White Label DSP for Programmatic Ad Buying
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to run a powerful, scalable ad platform — without the time, cost, or hassle of building it yourself.
            </p>
          </div>

          <Card className="max-w-5xl mx-auto mb-16 border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-gray-800 text-center">What is a White Labelled Platform?</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                A white label platform is a ready-made SaaS product that businesses can rebrand as their own by customising the name, logo, and design. It lets companies launch quickly without building from scratch, saving time, development costs, and maintenance efforts.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                In short, it's our tech and your brand. You get the power of a full-scale white label demand side platform, branded as your own, with zero development time.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                <p className="font-semibold text-orange-700 text-lg text-center">
                  No need to build. No need to manage servers. Just plug in and launch.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Benefits and Target Audience */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <h3 className="mb-8 text-gray-800 text-center">Key Benefits:</h3>
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-500 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                      <Check className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="mb-8 text-gray-800 text-center">Who's It For?</h3>
              <div className="space-y-6">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                      <audience.icon className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 text-lg">{audience.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{audience.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              Comparison
            </div>
            <h2 className="mb-6 max-w-4xl mx-auto">
              Why Choose a White Label DSP Over Building Your Own?
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left font-semibold text-lg">Feature</th>
                    <th className="px-8 py-6 text-left font-semibold text-lg">Build Your Own DSP</th>
                    <th className="px-8 py-6 text-left font-semibold text-lg">Our White Labelled Platform</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors`}>
                      <td className="px-8 py-6 font-semibold text-gray-800 text-lg">{row.feature}</td>
                      <td className="px-8 py-6 text-red-600 font-medium">{row.buildOwn}</td>
                      <td className="px-8 py-6 text-green-600 font-semibold">{row.whiteLabel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Features
            </div>
            <h2 className="mb-6 max-w-4xl mx-auto">
              Features You'll Love
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full p-2 mr-4 group-hover:scale-110 transition-transform">
                      <ChevronRight className="text-white" size={20} />
                    </div>
                    <span className="font-semibold text-gray-800 text-lg leading-relaxed">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="mb-6 text-white">
            Ready to Launch Your DSP?
          </h2>
          <p className="text-xl mb-4 text-orange-100 leading-relaxed">
            Why wait months and spend thousands when you can launch your white label DSP for programmatic ad buying this week?
          </p>
          <p className="text-lg mb-8 text-orange-200 font-medium">
            Zero coding | Full control | Enterprise-grade tools
          </p>
          <Button 
            onClick={() => setIsGetStartedModalOpen(true)}
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4 font-semibold hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Book Your Free Demo Now
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              FAQs
            </div>
            <h2 className="mb-8">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden">
                <AccordionTrigger className="px-8 py-6 text-left font-semibold text-gray-800 hover:no-underline text-lg hover:bg-gray-50 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed text-lg">
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
