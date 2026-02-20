import { useState, useRef, useEffect } from "react";
import { Check, Play, Pause, SkipBack, SkipForward } from "lucide-react";

const AdInActionSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, []);

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
                        
                        <div className="player bg-black rounded-[2.5rem] overflow-hidden relative">
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
                              <p className="text-xs text-white">Advertisement</p>
                              <p className="font-semibold text-white">Mama Earth</p>
                            </div>
                            
                            <div className="px-4">
                              <div>
                                <img 
                                  className="mt-4 h-56 w-full text-white object-cover rounded-lg" 
                                  src="/lovable-uploads/f5ba6f65-20c4-464b-994f-bf7e067b8c11.png" 
                                  alt="Mama Earth Ubtan Face Wash advertisement" 
                                  height={224} 
                                  width={269} 
                                  loading="lazy"
                                  decoding="async"
                                />
                                <audio 
                                  ref={audioRef}
                                  src="https://publifyx-web-static.s3.ap-south-1.amazonaws.com/media/public/Mama+Earth+rev+30+sec+%282%29.mp3" 
                                  preload="metadata"
                                />
                                
                                <div className="mt-6 text-center" id="know_more_button">
                                  <a 
                                    id="id_click_through_url" 
                                    href="/" 
                                    target="_blank" 
                                    className="rounded-full bg-white border border-white px-4 py-1 text-black no-underline"
                                  >
                                    Know More
                                  </a>
                                </div>
                                
                                <div className="mt-4">
                                  <input 
                                    type="range" 
                                    className="progressBar cursor-pointer w-full accent-white" 
                                    value={currentTime} 
                                    max={duration}
                                    onChange={(e) => {
                                      if (audioRef.current) {
                                        audioRef.current.currentTime = Number(e.target.value);
                                      }
                                    }}
                                  />
                                </div>
                                
                                <div className="flex justify-between text-sm text-white">
                                  <div className="currentTime">{formatTime(currentTime)}</div>
                                  <div className="duration">{formatTime(duration)}</div>
                                </div>
                                
                                <div className="mt-4 flex justify-center items-center space-x-6" id="play-pause-button">
                                  <button className="text-white hover:text-gray-300 transition-colors" aria-label="Previous track">
                                    <SkipBack size={24} aria-hidden="true" />
                                  </button>
                                  
                                  <button 
                                    aria-label={isPlaying ? "Pause audio ad" : "Play audio ad"}
                                    onClick={handlePlayPause}
                                    className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
                                  >
                                    {isPlaying ? (
                                      <Pause size={24} className="text-black" />
                                    ) : (
                                      <Play size={24} className="text-black" />
                                    )}
                                  </button>
                                  
                                  <button className="text-white hover:text-gray-300 transition-colors" aria-label="Next track">
                                    <SkipForward size={24} aria-hidden="true" />
                                  </button>
                                </div>
                              </div>
                              
                              <div className="mt-5 text-center pb-4">
                                <p className="text-xs text-white">Powered by</p>
                                <img 
                                  className="logo mx-auto my-1.5 w-28" 
                                  src="/lovable-uploads/c51dbe32-20d8-4bf7-a697-3e8e02023a97.png" 
                                  alt="Publifyx Logo"
                                  width={112}
                                  height={21}
                                  loading="lazy"
                                  decoding="async"
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
