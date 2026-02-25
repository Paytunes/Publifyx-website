import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import audioStreaming from "@/assets/audio/audio-streaming.webp";
import podcastRecording from "@/assets/audio/podcast-recording.webp";

const ProgrammaticAudioAdvertising = () => {
  useEffect(() => {
    document.title = "Programmatic Audio Advertising Platform | Audio DSP — PublifyX";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Run targeted audio ads on streaming music, podcasts, and digital radio with PublifyX's programmatic audio advertising platform. Reach listeners where screens cannot.");
  }, []);

  return (
    <ServicePageLayout
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Services" },
        { label: "Programmatic Audio Advertising" },
      ]}
      heroTitle="Programmatic Audio Advertising — Reach Listeners Across Streaming, Podcasts, and Digital Radio"
      heroSubtitle="Audio advertising is one of the fastest-growing channels in programmatic media buying. With hundreds of millions of listeners tuning into streaming music platforms, podcasts, and digital radio every day, audio offers advertisers a unique opportunity to reach audiences during screen-free moments — while commuting, exercising, cooking, or working. PublifyX provides a programmatic audio advertising platform that automates the buying and delivery of audio ads across premium streaming and podcast inventory. Target listeners based on demographics, interests, location, and listening behavior, and measure results with completion rate, reach, and frequency data — all within the same platform you use for display, video, and CTV campaigns."
      relatedArticleSlug="ad-tech-trends-2026"
      ctaTitle="Start Your Audio Campaign"
      ctaDescription="Reach listeners across streaming music, podcasts, and digital radio with precision targeting."
      faqs={[
        { question: "What is programmatic audio advertising?", answer: "Programmatic audio advertising uses automated, real-time bidding technology to buy and deliver audio ads across streaming music platforms, podcasts, and digital radio. It eliminates manual buying and enables precise audience targeting." },
        { question: "What platforms do programmatic audio ads run on?", answer: "Programmatic audio ads run across streaming music services, podcast networks, digital radio platforms, and smart speaker environments. Specific platform availability depends on SSP integrations and regional inventory." },
        { question: "How long are audio ads?", answer: "Standard programmatic audio ad lengths are 15 seconds and 30 seconds. Some platforms also support 6-second or 60-second formats depending on inventory availability." },
        { question: "Can I target specific audiences with audio advertising?", answer: "Yes. PublifyX supports targeting by demographics, geography, interests, listening behavior, content genre, device type, and time of day for audio campaigns." },
        { question: "How is audio advertising performance measured?", answer: "Key metrics include impressions, audio completion rate, unique listener reach, frequency, and cost per completed listen. Companion banner metrics include click-through rate and engagement." },
      ]}
    >
      <section className="space-y-12">
        <div className="rounded-2xl overflow-hidden mb-2">
          <img src={audioStreaming} alt="Person listening to streaming audio with headphones representing programmatic audio advertising" width={800} height={450} loading="eager" decoding="async" className="w-full h-auto object-cover" />
          <p className="text-xs text-navy-400 mt-2 italic">Programmatic audio reaches listeners during screen-free moments across streaming, podcasts, and digital radio.</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">What Is Programmatic Audio Advertising?</h2>
          <p className="text-navy-600 leading-relaxed mb-4">Programmatic audio advertising is the automated buying and selling of audio ad inventory using real-time bidding technology. When a listener streams music, a podcast, or digital radio content, an audio ad slot becomes available. A bid request is sent to demand-side platforms, where advertisers compete in a real-time auction based on targeting criteria. The winning ad is served seamlessly within the listener's stream.</p>
          <p className="text-navy-600 leading-relaxed mb-4">This process happens in milliseconds and eliminates the need for manual negotiations with individual publishers or radio stations. Advertisers gain access to vast audio inventory across multiple platforms and can manage targeting, budgets, pacing, and frequency from a single interface.</p>
          <p className="text-navy-600 leading-relaxed">Programmatic audio ads are typically 15 or 30 seconds in length and are often accompanied by a companion display banner shown in the app or player while the audio ad plays.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Why Audio Advertising Deserves a Place in Your Media Mix</h2>
          <p className="text-navy-600 leading-relaxed mb-4">Audio reaches audiences in moments where visual media cannot. Listeners engage with audio content during activities like driving, exercising, and working — moments when they are attentive but away from screens. This makes audio a powerful complement to visual channels like display, video, and CTV.</p>
          <p className="text-navy-600 leading-relaxed mb-4">Audio ads also benefit from high completion rates. Unlike display ads that can be scrolled past or video ads that can be skipped, audio ads are typically played in full. Listeners are invested in the content experience and are more receptive to the advertising that supports it.</p>
          <p className="text-navy-600 leading-relaxed">Furthermore, digital audio consumption continues to grow globally, driven by the expansion of streaming music services, the podcasting boom, and the proliferation of smart speakers. For advertisers, this means a growing pool of addressable, targetable listeners that can be reached programmatically.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">PublifyX Audio Advertising Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Cross-Platform Audio Inventory", desc: "Access audio ad inventory across streaming music services, podcast networks, digital radio stations, and smart speaker environments through our integrations with leading audio SSPs." },
              { title: "Precision Listener Targeting", desc: "Target audio audiences based on demographics, geographic location, interests, listening behavior, content genre, device type, and time of day." },
              { title: "Dynamic Creative Capabilities", desc: "Serve different audio ad creatives to different audience segments based on targeting criteria, enabling personalized messaging at scale." },
              { title: "Companion Display Banners", desc: "Pair your audio ad with a visual companion banner that appears in the listener's app, reinforcing your message with a clickable visual element." },
              { title: "Real-Time Reporting", desc: "Track audio campaign performance with metrics including impressions, completion rate, reach, frequency, and cost per completed listen." },
              { title: "Unified Platform Experience", desc: "Manage audio campaigns alongside display, video, CTV, and OTT within the PublifyX platform — no separate tools or logins required." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-50 border border-navy-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img src={podcastRecording} alt="Podcast recording studio microphone for programmatic audio ad delivery" width={800} height={450} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Audio Ad Formats Supported by PublifyX</h2>
          <div className="space-y-4">
            {[
              { title: "In-Stream Audio Ads", desc: "Short audio spots (15 or 30 seconds) that play before, during, or between songs, podcast episodes, or radio content." },
              { title: "Podcast Ads with Dynamic Insertion", desc: "Targeted audio ads dynamically inserted into podcast episodes at listen time, based on the listener's profile and targeting parameters." },
              { title: "Companion Display Banners", desc: "Visual banners that appear within the streaming app while the audio ad plays, providing a visual reinforcement and a clickable call-to-action." },
              { title: "Sequential Audio Messaging", desc: "Deliver a series of audio ads to the same listener over time, building a narrative or guiding them through a funnel with progressive messaging." },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-brand-orange-500 pl-5 py-2">
                <h3 className="font-bold text-navy-900">{item.title}</h3>
                <p className="text-sm text-navy-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-bold text-navy-900 mb-3">Explore Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/ott-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">OTT Advertising</Link>
            <Link to="/ctv-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">CTV Advertising</Link>
            <Link to="/programmatic-video-advertising" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">Video Advertising</Link>
            <Link to="/white-label-dsp" className="text-sm bg-white border border-navy-200 rounded-lg px-4 py-2 text-navy-700 hover:border-brand-orange-500 hover:text-brand-orange-500 transition-colors">White Label DSP</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default ProgrammaticAudioAdvertising;