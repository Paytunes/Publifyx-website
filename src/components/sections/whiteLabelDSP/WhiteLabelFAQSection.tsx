
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";

const WhiteLabelFAQSection = () => {
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
  );
};

export default WhiteLabelFAQSection;
