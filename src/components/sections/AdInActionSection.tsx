
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
              <div className="w-16 h-16 bg-blue-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
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
          
          {/* Right Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative m-auto">
              <div className="container">
                <div id="data-div" className="data-div-modal">
                  <div className="data-div-modal-content">
                    <div className="wrapper">
                      <div className="outer-border relative bg-black rounded-[3rem] p-1 shadow-2xl max-w-sm">
                        {/* Phone edges */}
                        <hr className="mute absolute left-0 top-20 w-1 h-8 bg-gray-600 border-0" />
                        <hr className="vol-up absolute left-0 top-32 w-1 h-12 bg-gray-600 border-0" />
                        <hr className="vol-down absolute left-0 top-48 w-1 h-12 bg-gray-600 border-0" />
                        <hr className="lock absolute right-0 top-32 w-1 h-12 bg-gray-600 border-0" />
                        
                        <div className="player bg-white rounded-[2.5rem] overflow-hidden relative">
                          {/* Notch */}
                          <hr className="notch_top absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black border-0 rounded-b-lg" />
                          
                          {/* Front microphone */}
                          <div className="front-mic absolute top-4 left-1/2 transform -translate-x-1/2">
                            <svg width="85" height="8" viewBox="0 0 711 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="711" height="107" rx="53.5" fill="#2B2B2B"></rect>
                            </svg>
                          </div>
                          
                          {/* Front camera */}
                          <div className="front-camera absolute top-2 right-8">
                            <svg width="18" height="18" viewBox="0 0 133 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <ellipse cx="66.5" cy="62.5" rx="66.5" ry="62.5" fill="#2B2B2B"></ellipse>
                            </svg>
                          </div>
                          
                          {/* Content */}
                          <div className="pt-8 pb-4">
                            <div className="pt-2 text-center leading-tight">
                              <p className="text-xs">Advertisement</p>
                              <p className="font-semibold">AMFI</p>
                            </div>
                            
                            <div className="px-4">
                              <div>
                                <img 
                                  className="mt-4 h-56 w-full text-white object-cover rounded-lg" 
                                  src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                  alt="audio advertisement" 
                                  height="100%" 
                                  width="100%" 
                                />
                                <audio src="https://publifyx-web-static.s3.ap-south-1.amazonaws.com/media/public/Mama+Earth+rev+30+sec+%282%29.mp3" preload="metadata"></audio>
                                
                                <div className="mt-6 text-center" id="know_more_button">
                                  <a 
                                    id="id_click_through_url" 
                                    href="/" 
                                    target="_blank" 
                                    className="rounded-full bg-white border border-gray-300 px-4 py-1 text-black no-underline"
                                  >
                                    Know More
                                  </a>
                                </div>
                                
                                <div className="mt-4">
                                  <input 
                                    type="range" 
                                    className="progressBar cursor-pointer w-full" 
                                    defaultValue="0" 
                                    max="30"
                                  />
                                </div>
                                
                                <div className="flex justify-between text-sm">
                                  <div className="currentTime">00:00</div>
                                  <div className="duration">00:30</div>
                                </div>
                                
                                <div className="mt-4 flex justify-center items-center space-x-4" id="play-pause-button">
                                  <div className="prev-track">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className="text-black">
                                      <path d="M7.917 31.25V8.75h3.708v22.5Zm24.166 0L15.583 20l16.5-11.25Z" fill="currentColor"></path>
                                    </svg>
                                  </div>
                                  
                                  <button 
                                    aria-label="play-pause-ad"
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="bg-black rounded-full p-2"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-12 w-12 text-white">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                                    </svg>
                                  </button>
                                  
                                  <div className="next-track">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className="text-black">
                                      <path d="M28.375 31.25V8.75h3.708v22.5Zm-20.458 0V8.75L24.417 20Z" fill="currentColor"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-5 text-center pb-4">
                                <p className="text-xs">Powered by</p>
                                <img 
                                  className="logo mx-auto my-1.5 w-28" 
                                  src="/logo/PublifyXDarkLogo.png" 
                                  alt="advertisement is playing"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
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
