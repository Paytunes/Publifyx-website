import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the main function of the on-demand DSP platform?",
    a: "PublifyX's on-demand DSP platform helps businesses launch multi-format ad campaigns (display, video, audio) with AI-powered optimization and no monthly commitments.",
  },
  {
    q: "What kind of support does PublifyX provide to clients?",
    a: "PublifyX provides campaign support, AI-powered creative tools, platform training, and real-time analytics to help clients maximize performance.",
  },
  {
    q: "How does PublifyX ensure data privacy and security?",
    a: "PublifyX adheres to industry-standard data protection protocols, including user data encryption, access control, and GDPR compliance.",
  },
  {
    q: "Is PublifyX suitable for businesses of all sizes?",
    a: "Yes, PublifyX is built for startups, agencies, and enterprise clients—offering flexible plans for every budget and goal.",
  },
  {
    q: "What kind of results can clients expect from using PublifyX?",
    a: "Clients see increased ad engagement, better media efficiency, and higher ROI thanks to PublifyX's AI-driven targeting and performance tracking.",
  },
  {
    q: "How can I get started with PublifyX?",
    a: "Simply request a demo from our website, and our team will help you onboard, set up campaigns, and start optimizing your ad strategy.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
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
                <AccordionTrigger className="py-5 text-left font-semibold text-navy-800 hover:no-underline hover:text-brand-orange-500 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-navy-400 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
