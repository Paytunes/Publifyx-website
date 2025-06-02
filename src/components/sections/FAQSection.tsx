
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
              Publifyx provides comprehensive support to clients throughout the advertising process. From initial setup and implementation to ongoing optimization and performance monitoring, our team is available to offer guidance, assistance, and troubleshooting as needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              How does Publifyx ensure data privacy and security?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              Publifyx takes data privacy and security seriously. We adhere to industry best practices and comply with relevant regulations to safeguard client data and ensure confidentiality. Our platform employs robust security measures to protect against unauthorized access and data breaches.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              Is Publifyx suitable for businesses of all sizes?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              Yes, Publifyx is designed to accommodate businesses of all sizes, from small startups to large enterprises. Our scalable solutions and flexible pricing options make digital advertising accessible and affordable for businesses across various industries and verticals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              What kind of results can clients expect from using Publifyx?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              Clients can expect to see improved ad performance, higher engagement rates, and increased ROI from using Publifyx. Our AI-driven solutions and optimization tools are designed to maximize the effectiveness of advertising campaigns and deliver measurable results for clients.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              How can I get started with Publifyx?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              Getting started with Publifyx is easy! Simply reach out to our team to schedule a consultation and discuss your advertising needs and objectives. From there, we'll work with you to develop a customized solution and guide you through the implementation process to ensure a seamless experience.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
