
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">FAQs</p>
          <h2 className="mb-8">Got any Questions?</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              What is the main function of the demand-side platform?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              A demand-side platform (DSP) is a category of software that enables an advertiser to automate the purchase of advertising. DSPs are an effective marketing automation tool because they let mobile advertisers purchase high-quality traffic at scale with no hassle.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              What kind of support does Publifyx provide to clients?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              Publifyx provides comprehensive support including dedicated account management, technical assistance, campaign optimization guidance, and 24/7 customer service to ensure our clients maximize their advertising ROI and achieve their marketing objectives.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              How does Publifyx ensure data privacy and security?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              We implement industry-leading security measures including end-to-end encryption, GDPR compliance, regular security audits, and strict data access controls. All client data is protected with enterprise-grade security protocols and stored in secure, compliant data centers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              Is Publifyx suitable for businesses of all sizes?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              Yes, Publifyx offers scalable solutions for businesses of all sizes. From startups to enterprise corporations, our platform adapts to your budget and requirements with flexible pricing models and customizable features that grow with your business.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              What kind of results can clients expect from using Publifyx?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              Clients typically see improved ad completion rates, higher ROI, increased brand awareness, and better targeting precision. Our AI-powered platform optimizes campaigns in real-time, resulting in cost-effective advertising with measurable performance improvements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              How can I get started with Publifyx?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              Getting started is simple! Contact our sales team for a personalized demo, choose the right plan for your needs, and our onboarding specialists will help you set up your campaigns. We provide training and ongoing support to ensure your success.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
