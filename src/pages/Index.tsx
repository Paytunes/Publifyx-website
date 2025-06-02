
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Check, Play, Pause, SkipBack, SkipForward } from "lucide-react";
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
                src="/lovable-uploads/bef683a7-f8ef-4723-b8b6-270b4e10a7c0.png"
                alt="Digital Advertising Solutions"
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/lovable-uploads/283b0e0e-7e0f-457e-9002-2c270f2cd928.png"
                  alt="AI-Powered Creativity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4">AI-Powered Creativity</h3>
                <p className="text-gray-600">
                  Publifyx offers AI-driven creative solutions that enable businesses to effortlessly create captivating audio and video content. Leveraging advanced AI algorithms, our platform ensures natural and engaging content creation in seconds.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="/lovable-uploads/f64cf965-b6ee-4102-9e75-6f5b1cbdf48b.png"
                  alt="OTT Advertising Simplification"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4">OTT Advertising Simplification</h3>
                <p className="text-gray-600">
                  We simplify over-the-top (OTT) advertising by providing pre-packaged solutions that make platform selection easy and affordable. With guaranteed high ad completion rates, businesses can maximize their advertising ROI on OTT platforms.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="White-Labeled DSP Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4">White-Labeled DSP Solutions</h3>
                <p className="text-gray-600">
                  Publifyx delivers white-labeled Demand Side Platform (DSP) solutions customized for corporate media agencies. These solutions include self-branded reporting portals and campaign management tools, empowering agencies to enhance their offerings and drive greater value for clients.
                </p>
              </div>
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

      {/* See Your Ads in Action Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <div className="w-16 h-16 bg-blue-primary rounded-lg flex items-center justify-center mb-6">
                  <img 
                    src="/lovable-uploads/fcc537b3-4a2a-486e-9a86-e6441eff9333.png" 
                    alt="Publifyx Icon" 
                    className="w-8 h-8"
                  />
                </div>
                <h2 className="mb-6 text-left">Publifyx employs AI for high-quality, engaging, seamless ad content</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Publifyx ensures seamless delivery with user-friendly pre-packaged solutions.
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    Maximizes ad completion rates, ensuring effective campaign delivery optimization.
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    Continuous refinement enhances advertising campaigns, ensuring optimal results for the clients.
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">
                    Timely customer support optimizes advertising campaigns, aiding clients to succeed
                  </span>
                </div>
              </div>
              
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center">
                Request a demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Right Mobile Mockup */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Blue decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-12 -right-16 w-48 h-48 bg-blue-300 rounded-full opacity-30"></div>
                <div className="absolute top-1/2 -right-24 w-24 h-24 bg-blue-400 rounded-full opacity-40"></div>
                
                {/* iPhone Mockup */}
                <div className="relative z-10 bg-black rounded-[3rem] p-2 shadow-2xl max-w-sm">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gray-900 h-8 flex items-center justify-center relative">
                      <div className="w-20 h-1 bg-white rounded-full"></div>
                      <div className="absolute top-2 left-4 text-white text-xs">Advertisement</div>
                      <div className="absolute top-2 right-4 text-white text-xs font-bold">AMFI</div>
                    </div>
                    
                    {/* Ad Content */}
                    <div className="h-96 bg-gradient-to-b from-orange-50 to-white relative">
                      {/* Mamaearth Ad */}
                      <div className="p-4">
                        <img
                          src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                          alt="Face wash product"
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        
                        <div className="text-center mb-4">
                          <div className="text-orange-500 font-bold text-lg">mamaearth</div>
                          <div className="text-sm text-gray-600">Vitamin C Daily Glow</div>
                          <div className="text-sm text-gray-600">Face Wash</div>
                          <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs mt-2 inline-block">
                            Ubtan Face Wash
                          </div>
                        </div>
                        
                        <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-full text-sm font-medium mb-4">
                          Know More
                        </button>
                      </div>
                      
                      {/* Audio Player Controls */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs">00:00</span>
                          <div className="flex-1 mx-3">
                            <div className="w-full bg-gray-600 rounded-full h-1">
                              <div className="bg-white h-1 rounded-full w-0"></div>
                            </div>
                          </div>
                          <span className="text-xs">00:30</span>
                        </div>
                        
                        <div className="flex items-center justify-center space-x-6">
                          <SkipBack className="w-6 h-6 text-white" />
                          <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black"
                          >
                            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                          </button>
                          <SkipForward className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="text-center mt-2">
                          <div className="text-blue-400 text-sm font-bold">PUBLIFYX</div>
                          <div className="text-xs text-gray-400">Powered by</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-blue-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-white">Target Audience without wasting resources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-600 p-8 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">12K+</div>
              <div className="text-blue-100 text-lg">Pincode</div>
            </div>

            <div className="bg-blue-600 p-8 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-100 text-lg">Publisher</div>
            </div>

            <div className="bg-blue-600 p-8 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10M+</div>
              <div className="text-blue-100 text-lg">Audience</div>
            </div>

            <div className="bg-blue-600 p-8 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10M+</div>
              <div className="text-blue-100 text-lg">Request</div>
            </div>
          </div>
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
                src="/lovable-uploads/378f516e-ced5-4d46-999b-0075f2957d7a.png"
                alt="Professional audio production setup with mixing console and microphone"
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
