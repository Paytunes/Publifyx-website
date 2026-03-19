const faqs = [
  {
    question:
      "How long does it take to launch a white label DSP with PublifyX?",
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
    question:
      "What is the difference between a white label DSP and a self-serve DSP?",
    answer:
      "A self-serve DSP is a SaaS tool where you sign up, deposit funds, and start buying media — but the platform carries the provider's branding. A white label DSP is fully rebranded as your own product, giving you control over branding, pricing, client access, and SSP partnerships.",
  },
];

const WhiteLabelFAQSection = () => {
  return (
    <section className="py-12 md:py-16 bg-navy-50/45 faq-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-brand-orange-700 uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-navy-50 rounded-xl border border-navy-100 px-6 overflow-hidden hover:border-brand-orange-200 transition-colors duration-300"
            >
              <summary className="py-5 text-[16px] text-left font-semibold text-navy-800 hover:text-brand-orange-700 transition-colors cursor-pointer list-none flex items-center justify-between [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg
                  className="w-4 h-4 shrink-0 ml-2 transition-transform duration-200 group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="pb-5 text-navy-400 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelFAQSection;
