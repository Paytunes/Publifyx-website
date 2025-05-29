
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Check, Play, Pause } from "lucide-react";
import { useState } from "react";

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
                Targeted Audio Advertising That Actually Works
              </h1>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">AI-Powered Creative Optimization</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Real-Time Campaign Analytics</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Cross-Platform Reach</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Why Choose PublifyX?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with deep market insights to deliver audio advertising that drives results.
            </p>
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
                Our AI algorithms optimize your audio creatives in real-time for maximum engagement and conversion rates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-red-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4">OTT Simplification</h3>
              <p className="text-gray-600">
                Streamlined over-the-top advertising with simplified campaign management and automated optimization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-4">White-Labeled DSP</h3>
              <p className="text-gray-600">
                Complete demand-side platform solution that can be white-labeled for agencies and media companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-yellow-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-white">Our Product Suite</h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Choose the right solution for your advertising needs, from startup-friendly options to enterprise-grade platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="mb-4 text-yellow-secondary">ShoutL Lite</h3>
              <p className="text-gray-600 mb-6">
                Perfect for small to medium businesses looking to get started with targeted audio advertising.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Up to 10 active campaigns</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic analytics dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Email support</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary w-full text-center inline-block">
                Get Started
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="mb-4 text-yellow-secondary">ShoutL Enterprise</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive solution for large agencies and enterprises with advanced features and dedicated support.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Unlimited campaigns</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Advanced AI optimization</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 dedicated support</span>
                </li>
              </ul>
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
    </Layout>
  );
};

export default Index;
