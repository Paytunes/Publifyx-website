
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTVFAQSection = () => {
  const faqs = [
    {
      question: "Can I target specific cities or regions?",
      answer: "Absolutely. Use geo-targeting to show ads in specific states, cities—even pin codes."
    },
    {
      question: "What's the minimum budget to start?",
      answer: "Flexible options available—whether you're a startup or enterprise, Publify X tailor to your needs."
    },
    {
      question: "What ad formats are supported?",
      answer: "Primarily video ads (15s/30s), but we also support interactive and sequential storytelling."
    },
    {
      question: "Can I retarget users across devices?",
      answer: "Yes! Combine CTV with mobile/desktop retargeting for cross-device continuity."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-6">FAQs</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default CTVFAQSection;
