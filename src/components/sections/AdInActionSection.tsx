
import { useState } from "react";
import { Check, Play, Pause, SkipBack, SkipForward } from "lucide-react";

const AdInActionSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <div className="w-16 h-16 bg-blue-primary rounded-lg flex items-center justify-center mb-6">
                <img 
                  src="/lovable-uploads/e599af68-d851-4a21-8101-acc73bd1a68a.png" 
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
  );
};

export default AdInActionSection;
