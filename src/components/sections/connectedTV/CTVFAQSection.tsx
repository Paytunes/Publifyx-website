import { useEffect } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { injectFaqPageSchema } from "@/utils/faqSchemaUtils";

const faqs = [
  {
    question: "What is the difference between CTV and OTT advertising?",
    answer: "CTV refers specifically to ads viewed on a television screen through an internet-connected device. OTT is a broader term that covers content and ads delivered via the internet across all devices including smartphones, tablets, laptops, and TVs. CTV is a subset of OTT.",
  },
  {
    question: "What video formats are supported for CTV ads?",
    answer: "PublifyX supports 15-second and 30-second video ad formats for CTV campaigns. Creatives should be in MP4 or MOV format, optimized for full-screen, high-definition television viewing.",
  },
  {
    question: "Can I target specific geographic areas with CTV advertising?",
    answer: "Yes. PublifyX supports geographic targeting at the country, state, city, DMA (designated market area), and zip code level for CTV campaigns.",
  },
  {
    question: "How is CTV advertising measured?",
    answer: "Key CTV metrics include impressions, video completion rate (VCR), unique household reach, frequency, and cost per completed view (CPCV). PublifyX also supports attribution measurement for website visits and conversions driven by CTV exposure.",
  },
  {
    question: "Is CTV advertising only for large brands?",
    answer: "No. CTV advertising is accessible to businesses of all sizes. With programmatic buying through PublifyX, you can start with flexible budgets and scale based on performance results.",
  },
];

const CTVFAQSection = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    };
    const script = injectFaqPageSchema(schema, "ctv-faq-schema");
    return () => { script.remove(); };
  }, []);

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

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="bg-navy-50 rounded-xl border border-navy-100 px-6 overflow-hidden hover:border-brand-orange-200 transition-colors duration-300"
              >
                <AccordionTrigger className="py-5 !text-[16px] text-left font-semibold text-navy-800 hover:no-underline hover:text-brand-orange-500 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-navy-400 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default CTVFAQSection;
