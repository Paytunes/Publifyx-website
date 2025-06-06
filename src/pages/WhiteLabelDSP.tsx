
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";
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
      description: "Offer clients a scalable, branded DSP"
    },
    {
      title: "Ad Networks",
      description: "Centralise and optimise buying across inventory"
    },
    {
      title: "Startups",
      description: "Jumpstart your ad tech venture without millions in dev costs"
    },
    {
      title: "Media Buyers",
      description: "Run campaigns under your own brand with enterprise-grade tools"
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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">
            White Labelled Platform for <span className="text-blue-primary">Programmatic Ad Buying</span>
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto">
            Launch your own ad tech business with our white label DSP for programmatic ad buying for Display, Video, Audio, Native, and CTV ads.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Easy setup | Full control | Powerful performance
          </p>
          <Button 
            onClick={() => setIsGetStartedModalOpen(true)}
            className="btn-primary text-lg px-8 py-3"
          >
            Start Your Free Demo
          </Button>
        </div>
      </section>

      {/* What is White Label Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">White Label DSP</p>
            <h2 className="mb-6">
              The Smartest White Label DSP for Programmatic Ad Buying
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Everything you need to run a powerful, scalable ad platform — without the time, cost, or hassle of building it yourself.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">What is a White Labelled Platform?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A white label platform is a ready-made SaaS product that businesses can rebrand as their own by customising the name, logo, and design. It lets companies launch quickly without building from scratch, saving time, development costs, and maintenance efforts.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In short, it's our tech and your brand. You get the power of a full-scale white label demand side platform, branded as your own, with zero development time.
              </p>
              <p className="font-semibold text-blue-primary">
                No need to build. No need to manage servers. Just plug in and launch.
              </p>
            </CardContent>
          </Card>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="mb-6 text-gray-800">Key Benefits:</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="mb-4 text-gray-800">Who's It For?</h3>
              <div className="space-y-4">
                {targetAudience.map((audience, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-blue-primary">{audience.title}</h4>
                    <p className="text-gray-600">{audience.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Comparison</p>
            <h2 className="mb-6">
              Why Choose a White Label DSP Over Building Your Own?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-blue-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-medium">Feature</th>
                  <th className="px-6 py-4 text-left font-medium">Build Your Own DSP</th>
                  <th className="px-6 py-4 text-left font-medium">Our White Labelled Platform</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.feature}</td>
                    <td className="px-6 py-4 text-red-600">{row.buildOwn}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">{row.whiteLabel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Features</p>
            <h2 className="mb-6">
              Features You'll Love
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <ChevronRight className="text-blue-primary mr-3 flex-shrink-0" size={20} />
                    <span className="font-medium text-gray-800">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-primary to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">
            Ready to Launch Your DSP?
          </h2>
          <p className="text-xl mb-4 text-blue-50">
            Why wait months and spend thousands when you can launch your white label DSP for programmatic ad buying this week?
          </p>
          <p className="text-lg mb-8 text-blue-100">
            Zero coding | Full control | Enterprise-grade tools
          </p>
          <Button 
            onClick={() => setIsGetStartedModalOpen(true)}
            className="bg-white text-blue-primary hover:bg-gray-100 text-lg px-8 py-3 font-medium"
          >
            Book Your Free Demo Now
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">FAQs</p>
            <h2 className="mb-8">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
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
