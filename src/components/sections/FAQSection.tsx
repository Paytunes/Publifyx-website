import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="rounded-full inline-flex justify-center mb-4 border bg-[#ff7200] w-fit px-3 py-1 text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground">
            FAQs
          </p>
          <h2 className="mb-8">Have Questions? We've Got Answers</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              What is the main function of the on-demand DSP platform?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              PublifyX's on-demand DSP platform helps businesses launch multi-format ad campaigns (display, video,
              audio) with AI-powered optimization and no monthly commitments.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              What kind of support does PublifyX provide to clients?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              PublifyX provides campaign support, AI-powered creative tools, platform training, and real-time analytics
              to help clients maximize performance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              How does PublifyX ensure data privacy and security?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              PublifyX adheres to industry-standard data protection protocols, including user data encryption, access
              control, and GDPR compliance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              Is PublifyX suitable for businesses of all sizes?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              Yes, PublifyX is built for startups, agencies, and enterprise clients—offering flexible plans for every
              budget and goal.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              What kind of results can clients expect from using PublifyX?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              Clients see increased ad engagement, better media efficiency, and higher ROI thanks to PublifyX's
              AI-driven targeting and performance tracking.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border-0">
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
              How can I get started with PublifyX?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
              Simply request a demo from our website, and our team will help you onboard, set up campaigns, and start
              optimizing your ad strategy.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
