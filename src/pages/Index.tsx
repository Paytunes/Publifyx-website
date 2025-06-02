
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Check, Play, Pause } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Digital Marketing Dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h1 className="mb-6">
                Publifyx pioneers innovative Ad-Tech solutions, transforming the digital advertising realm.
              </h1>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Leveraging AI for seamless, cost-effective audio and video creativity solutions.</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Simplify advertising with pre-packaged OTT as well as white-labeled DSP solutions.</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Empowering businesses to maximize ROI by optimizing ad completion rates and campaign performance</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Solutions offered</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-4">AI-Powered Creativity</h3>
              <p className="text-gray-600">
                Publifyx offers AI-driven creative solutions that enable businesses to effortlessly create captivating audio and video content. Leveraging advanced AI algorithms, our platform ensures natural and engaging content creation in seconds.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-red-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4">OTT Advertising Simplification</h3>
              <p className="text-gray-600">
                We simplify over-the-top (OTT) advertising by providing pre-packaged solutions that make platform selection easy and affordable. With guaranteed high ad completion rates, businesses can maximize their advertising ROI on OTT platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-4">White-Labeled DSP Solutions</h3>
              <p className="text-gray-600">
                Publifyx delivers white-labeled Demand Side Platform (DSP) solutions customized for corporate media agencies. These solutions include self-branded reporting portals and campaign management tools, empowering agencies to enhance their offerings and drive greater value for clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-yellow-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-white">Products offered</h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
             An evolved user experience that drives performance across channels with ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="mb-4 text-yellow-secondary">ShoutL Lite</h3>
              <p className="text-gray-600 mb-6">
                Drawing upon advanced AI technology, ShoutL Lite provides human-sounding audio and video creativity solutions at a fraction of traditional costs. Our pre-packaged OTT solutions simplify advertising processes, empowering businesses to optimize ROI through enhanced ad completion rates and campaign performance
              </p>
              <Link to="/contact" className="btn-primary w-full text-center inline-block">
                Get Started
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="mb-4 text-yellow-secondary">ShoutL Enterprise</h3>
              <p className="text-gray-600 mb-6">
                In addition to the comprehensive features of Shoutl Lite, Shoutl Enterprise introduces a White-Labeled DSP Platform designed specifically to cater to the distinctive requirements of corporate media agencies. These fully customizable platforms incorporate self-branded reporting portals and campaign management tools, enabling agencies to provide unparalleled services to their clients.
              </p>
              <Link to="/contact" className="btn-primary w-full text-center inline-block">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mock iPhone Ad Preview */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-12">See Your Ads in Action</h2>
          
          <div className="relative max-w-sm mx-auto">
            {/* iPhone Mockup */}
            <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-gray-900 h-8 flex items-center justify-center">
                  <div className="w-20 h-1 bg-white rounded-full"></div>
                </div>
                
                {/* Content Area */}
                <div className="p-4 h-96 bg-gradient-to-b from-blue-50 to-white">
                  {/* App Interface */}
                  <div className="mb-8">
                    <div className="h-40 bg-gradient-to-r from-blue-primary to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white font-semibold">Your Audio Ad Here</span>
                    </div>
                  </div>
                  
                  {/* Audio Player */}
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-semibold text-sm text-gray-800">Sample Audio Ad</div>
                        <div className="text-xs text-gray-500">PublifyX Campaign</div>
                      </div>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 bg-blue-primary rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      >
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-2">
                      <div className="bg-blue-primary h-1 rounded-full w-1/3"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>0:15</span>
                      <span>0:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
            Experience how your targeted audio ads will appear across mobile apps and streaming platforms with our realistic preview system.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-blue-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Ready to Transform Your Audio Advertising?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of brands already using PublifyX to reach their target audiences with precision and impact.
          </p>
          <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
            Request a Demo
          </Link>
        </div>
      </section>

      {/* Join Us Revolution Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h2 className="mb-6 text-left">Join Us in This Revolution</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-left">
                Are you ready to be a part of the future of digital advertising? Join Publifyx in revolutionizing the industry and shaping the way businesses connect with their audiences. Whether you're a creative thinker, a tech enthusiast, or a marketing expert, there's a place for you on our team. Together, we'll push the boundaries of what's possible, innovate relentlessly, and redefine the standards of excellence in digital advertising. Join us on this exciting journey as we transform the way businesses advertise and engage with their customers. Let's revolutionize digital advertising together.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105">
                <Link to="/contact" className="block w-full h-full">
                  Join us!
                </Link>
              </button>
            </div>
            <div className="order-2">
              <img
                src="/lovable-uploads/d0e4d426-d705-4d55-8135-97e8afdf1613.png"
                alt="Audio production equipment with mixing console"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">FAQs</p>
            <h2 className="mb-8">Got any Questions?</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border-0">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
                What is the main function of the demand-side platform?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                A demand-side platform (DSP) is a category of software that enables an advertiser to automate the purchase of advertising. DSPs are an effective marketing automation tool because they let mobile advertisers purchase high-quality traffic at scale with no hassle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border-0">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
                What kind of support does Publifyx provide to clients?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                Publifyx provides comprehensive support including dedicated account management, technical assistance, campaign optimization guidance, and 24/7 customer service to ensure our clients maximize their advertising ROI and achieve their marketing objectives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border-0">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
                How does Publifyx ensure data privacy and security?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                We implement industry-leading security measures including end-to-end encryption, GDPR compliance, regular security audits, and strict data access controls. All client data is protected with enterprise-grade security protocols and stored in secure, compliant data centers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border-0">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
                Is Publifyx suitable for businesses of all sizes?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                Yes, Publifyx offers scalable solutions for businesses of all sizes. From startups to enterprise corporations, our platform adapts to your budget and requirements with flexible pricing models and customizable features that grow with your business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border-0">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
                What kind of results can clients expect from using Publifyx?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                Clients typically see improved ad completion rates, higher ROI, increased brand awareness, and better targeting precision. Our AI-powered platform optimizes campaigns in real-time, resulting in cost-effective advertising with measurable performance improvements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border-0">
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
                How can I get started with Publifyx?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                Getting started is simple! Contact our sales team for a personalized demo, choose the right plan for your needs, and our onboarding specialists will help you set up your campaigns. We provide training and ongoing support to ensure your success.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
