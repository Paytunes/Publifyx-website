import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is digital audio advertising?",
    answer:
      "Digital audio advertising is a form of online advertising delivered through music streaming services, podcasts, and internet radio platforms. It allows advertisers to reach engaged listeners with targeted audio messages, often accompanied by visual display ads.",
  },
  {
    question: "How does pricing work for digital audio campaigns?",
    answer:
      "Pricing is typically based on CPM (Cost Per Mille - cost per 1,000 impressions). The final cost depends on factors like platform choice, targeting parameters, campaign duration, and ad format. Minimum budgets vary by platform, starting from ₹35,000 for basic campaigns.",
  },
  {
    question: "What targeting options are available?",
    answer:
      "Our platforms offer comprehensive targeting including demographic (age, gender, income), geographic (country, state, city, pin code), device type, time of day, content genre, listening behavior, and custom audience segments based on your requirements.",
  },
  {
    question: "How long does it take to launch a campaign?",
    answer:
      "Once creative assets are approved and campaign parameters are finalized, most digital audio campaigns can go live within 48-72 hours. The timeline may vary slightly depending on platform-specific approval processes.",
  },
  {
    question: "What ad formats are supported?",
    answer:
      "We support multiple formats including audio spots (15-30 seconds), companion display banners, video ads, and sponsored sessions. Each format has specific specifications that we'll guide you through during campaign setup.",
  },
  {
    question: "Can I track campaign performance?",
    answer:
      "Yes, we provide detailed analytics including impressions delivered, click-through rates, completion rates, geographic distribution, demographic breakdown, and time-based performance metrics. Reports are available in real-time through our dashboard.",
  },
  {
    question: "What is the minimum campaign duration?",
    answer:
      "Most platforms require a minimum campaign duration of 7-14 days to gather meaningful performance data. However, we can accommodate shorter durations for time-sensitive campaigns or longer durations for brand awareness initiatives.",
  },
  {
    question: "Do you provide creative production services?",
    answer:
      "Yes, we offer full creative production services including scriptwriting, voice-over talent, audio production, and companion banner design. Our in-house team can handle everything from concept to final delivery.",
  },
  {
    question: "Which platforms are best for my brand?",
    answer:
      "Platform selection depends on your target audience, budget, and campaign objectives. Our team analyzes your requirements and recommends optimal platforms based on audience demographics, reach, engagement rates, and cost-efficiency.",
  },
  {
    question: "Are there any volume discounts?",
    answer:
      "Yes, we offer competitive discounts for campaigns exceeding ₹5 lakhs in total spend. Long-term partnerships and multi-platform campaigns also qualify for preferential rates. Contact our team for customized pricing.",
  },
];

const DigitalFAQSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white  faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about digital audio advertising</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-white hover:border-purple-accent transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default DigitalFAQSection;
