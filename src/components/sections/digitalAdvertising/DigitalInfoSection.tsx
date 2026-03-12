import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const infoSections = [
  {
    title: "The best Approach for Digital Advertising",
    content: "Digital advertising offers unparalleled opportunities to reach your target audience with precision and measurability. Our platform provides access to premium digital inventory across India's leading platforms, ensuring your brand message reaches the right people at the right time. With advanced targeting capabilities and real-time analytics, you can optimize your campaigns for maximum ROI."
  },
  {
    title: "What is Digital Advertising?",
    content: "Digital advertising refers to promotional content delivered through digital channels such as streaming music services, podcasts, internet radio, social media platforms, search engines, and display networks. Unlike traditional advertising, digital ads leverage user data and behavior patterns to deliver highly targeted messages to specific audience segments. This includes audio ads, display banners, video ads, social media posts, search ads, and native advertising formats."
  },
  {
    title: "What are the different types of Digital Ad formats?",
    content: "Digital advertising encompasses various formats including: Audio Spots (15-30 second ads in streaming content), Display Banners (visual ads on websites and apps), Video Ads (pre-roll, mid-roll, and post-roll video content), Native Ads (content that matches platform appearance), Social Media Ads (sponsored posts and stories), Search Ads (text ads in search results), and Programmatic Display (automated banner placements). Each format serves different campaign objectives and audience engagement strategies."
  },
  {
    title: "What are the costs involved in Digital Advertising?",
    content: "Digital advertising costs vary based on platform, targeting parameters, ad format, and campaign duration. Pricing models include CPM (Cost Per Mille/Thousand Impressions), CPC (Cost Per Click), CPA (Cost Per Action), and CPV (Cost Per View). Minimum budgets typically start from ₹25,000 and can scale based on your reach requirements. Factors affecting cost include audience size, geographic targeting, time of day, device type, and competition for ad inventory. Our platform provides transparent pricing and flexible budget options."
  },
  {
    title: "How does Digital Advertising targeting work?",
    content: "Digital advertising targeting uses multiple data points to reach your ideal audience. This includes demographic targeting (age, gender, income level), geographic targeting (country, state, city, pin code), behavioral targeting (browsing history, purchase patterns), contextual targeting (content relevance), device targeting (mobile, desktop, tablet, smart speakers), and time-based targeting (day of week, time of day). Advanced platforms also offer lookalike audiences and retargeting capabilities to maximize campaign effectiveness."
  },
  {
    title: "What are the benefits of Digital Advertising?",
    content: "Digital advertising offers numerous advantages: Precise audience targeting ensures your message reaches the right people; real-time analytics provide immediate performance insights; flexible budgets accommodate businesses of all sizes; quick campaign launch and optimization capabilities; measurable ROI through detailed tracking; geographic flexibility from local to national reach; creative format variety to match campaign goals; and the ability to A/B test different approaches. Additionally, digital campaigns can be adjusted in real-time based on performance data."
  },
  {
    title: "How do I measure Digital Advertising campaign success?",
    content: "Campaign success is measured through multiple KPIs including: Impressions (total ad views), Reach (unique users exposed), Click-Through Rate (CTR), Conversion Rate (desired actions completed), Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Engagement Rate (interactions with ads), Brand Lift (awareness increase), and Attribution Modeling (customer journey analysis). Our platform provides comprehensive dashboards with real-time data, custom reports, and actionable insights to optimize your campaigns continuously."
  },
  {
    title: "What platforms are available for Digital Advertising?",
    content: "Our network provides access to India's leading digital platforms including streaming audio services (JioSaavn, Gaana), video platforms (YouTube, Zee5), social media networks (Facebook, Instagram, LinkedIn), search engines (Google Search), display networks (Google Display Network), news portals (Times of India, Hindustan Times, Economic Times), e-commerce platforms (Amazon), entertainment apps (BookMyShow, Cricbuzz), and utility apps (TrueCaller, OLA, Swiggy). Each platform offers unique audience demographics and engagement patterns."
  },
  {
    title: "How long does it take to launch a Digital Advertising campaign?",
    content: "Campaign launch timelines typically range from 48 hours to 1 week, depending on complexity and platform requirements. The process includes: Initial consultation and strategy development (1-2 days), creative submission and approval (1-3 days), platform integration and setup (1-2 days), and campaign activation. Simple campaigns with ready creatives can launch within 48 hours, while complex multi-platform campaigns may require additional time for coordination and testing."
  },
  {
    title: "What creative formats are required for Digital Advertising?",
    content: "Creative requirements vary by platform and format. Audio ads typically need MP3 files (15-30 seconds, 320kbps). Display ads require JPG/PNG images in various sizes (300x250, 728x90, 160x600, etc.). Video ads need MP4 files (1080p, H.264 codec). Social media ads require platform-specific dimensions and formats. All creatives must comply with platform guidelines regarding content, file size, and technical specifications. Our team can assist with creative production and optimization for different platforms."
  }
];

const DigitalInfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Know About Digital Advertising
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive information about digital advertising platforms, formats, costs, and best practices
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {infoSections.map((section, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-50 border border-gray-200 rounded-lg px-6 hover:border-purple-primary transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-purple-primary">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                {section.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default DigitalInfoSection;
