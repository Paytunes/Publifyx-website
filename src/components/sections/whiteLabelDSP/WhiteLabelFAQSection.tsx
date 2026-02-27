import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to launch a white label DSP with PublifyX?",
    answer:
      "Most white label DSP deployments with PublifyX are completed within 15 minutes. This includes branding customization, domain setup, SSP integrations, and platform testing.",
  },
  {
    question: "Do I need technical expertise to operate a white label DSP?",
    answer:
      "No. PublifyX handles all technical infrastructure, server management, and platform updates. You and your team focus on client relationships, campaign strategy, and business development. We provide full onboarding training.",
  },
  {
    question: "What ad formats does PublifyX white label DSP support?",
    answer:
      "PublifyX supports display banners, native ads, video (pre-roll, mid-roll, outstream), audio ads (streaming, podcast, digital radio), Connected TV (CTV), and Over-the-Top (OTT) video formats.",
  },
  {
    question: "Can I set my own pricing and margins with a white label DSP?",
    answer:
      "Yes. You have full control over your pricing structure. You decide what to charge your advertisers and how to structure your margins. PublifyX operates transparently in the background.",
  },
  {
    question: "What is the difference between a white label DSP and a self-serve DSP?",
    answer:
      "A self-serve DSP is a SaaS tool where you sign up, deposit funds, and start buying media — but the platform carries the provider's branding. A white label DSP is fully rebranded as your own product, giving you control over branding, pricing, client access, and SSP partnerships.",
  },
];

const WhiteLabelFAQSection = () => {
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
            Frequently Asked Questions About White Label DSP
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
