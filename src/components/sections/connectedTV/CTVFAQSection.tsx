import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I target specific cities or regions?",
    answer: "Absolutely. Use geo-targeting to show ads in specific states, cities—even pin codes.",
  },
  {
    question: "What's the minimum budget to start?",
    answer: "Flexible options available—whether you're a startup or enterprise, PublifyX tailors to your needs.",
  },
  {
    question: "What ad formats are supported?",
    answer: "Primarily video ads (15s/30s), but we also support interactive and sequential storytelling.",
  },
  {
    question: "Can I retarget users across devices?",
    answer: "Yes! Combine CTV with mobile/desktop retargeting for cross-device continuity.",
  },
];

const CTVFAQSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white faq-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-3"
          >
            FAQ
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Frequently Asked Questions About CTV Advertising
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-navy-50 rounded-xl border border-navy-100 px-6 overflow-hidden"
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-navy-800 hover:no-underline hover:text-brand-orange-500 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-navy-400 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default CTVFAQSection;
