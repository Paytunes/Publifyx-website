import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast can I go live with my own DSP?",
    answer: "With PublifyX, your white-labelled DSP can go live in under 2 weeks with complete setup and support.",
  },
  {
    question: "Do I need a dev team?",
    answer: "No. Our platform is fully managed and requires zero coding or technical setup on your part.",
  },
  {
    question: "Can I set my own margins?",
    answer: "Yes, you control pricing, margins, and customer relationships fully.",
  },
  {
    question: "What ad formats are supported?",
    answer: "The platform supports Display, Video, Audio, Native, and CTV ad formats for end-to-end buying.",
  },
  {
    question: "How is this different from a reseller model?",
    answer:
      "Unlike a reseller setup, a white-label DSP gives you full branding, pricing control, bidding access, and customer ownership.",
  },
];

const WhiteLabelFAQSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
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
            Frequently Asked Questions
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

export default WhiteLabelFAQSection;
