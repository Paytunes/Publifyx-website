import { useState, useRef, useEffect } from "react";
import { Check, Play, Pause, SkipBack, SkipForward, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
        if (audioRef.current.readyState === 0) {
          audioRef.current.load();
        }
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", updateDuration);
      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
      };
    }
  }, []);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-sm font-semibold text-brand-orange-500 uppercase tracking-widest mb-4">
              See It In Action
            </span>
            <h2 className="mb-6 text-left">AI-Powered Ad Content That Engages</h2>
            <p className="text-lg text-navy-400 mb-8 leading-relaxed">
              PublifyX ensures seamless delivery with user-friendly pre-packaged solutions.
            </p>

            <div className="space-y-5 mb-8">
              {[
                "Maximizes ad completion rates for effective campaign delivery",
                "Continuous refinement ensures optimal results for clients",
                "Timely customer support to help clients succeed",
              ].map((text) => (
                <div key={text} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-navy-500 leading-relaxed">{text}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center btn-primary group">
              Request a demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="bg-navy-900 rounded-[3rem] p-1 shadow-2xl max-w-[280px]">
                <hr className="absolute left-0 top-20 w-1 h-8 bg-navy-600 border-0" />
                <hr className="absolute left-0 top-32 w-1 h-12 bg-navy-600 border-0" />
                <hr className="absolute left-0 top-48 w-1 h-12 bg-navy-600 border-0" />
                <hr className="absolute right-0 top-32 w-1 h-12 bg-navy-600 border-0" />

                <div className="bg-navy-900 rounded-[2.5rem] overflow-hidden relative">
                  <hr className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-navy-900 border-0 rounded-b-lg" />

                  <div className="absolute top-4 left-1/2 -translate-x-1/2">
                    <svg width="85" height="8" viewBox="0 0 711 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="711" height="107" rx="53.5" fill="#2B2B2B" />
                    </svg>
                  </div>

                  <div className="absolute top-2 right-8">
                    <svg width="18" height="18" viewBox="0 0 133 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="66.5" cy="62.5" rx="66.5" ry="62.5" fill="#2B2B2B" />
                    </svg>
                  </div>

                  <div className="pt-8 pb-4">
                    <div className="pt-2 text-center leading-tight">
                      <p className="text-xs text-white/60">Advertisement</p>
                      <p className="font-semibold text-white">Mama Earth</p>
                    </div>

                    <div className="px-4">
                      <img
                        className="mt-4 h-56 w-full object-cover rounded-lg"
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
                        preload="none"
                      />

                      <div className="mt-6 text-center">
                        <a
                          href="/"
                          target="_blank"
                          className="rounded-full bg-white border border-white px-4 py-1 text-navy-800 no-underline text-sm font-medium"
                        >
                          Know More
                        </a>
                      </div>

                      <div className="mt-4">
                        <input
                          type="range"
                          className="cursor-pointer w-full accent-white"
                          value={currentTime}
                          max={duration}
                          onChange={(e) => {
                            if (audioRef.current) {
                              audioRef.current.currentTime = Number(e.target.value);
                            }
                          }}
                        />
                      </div>

                      <div className="flex justify-between text-sm text-white/70">
                        <div>{formatTime(currentTime)}</div>
                        <div>{formatTime(duration)}</div>
                      </div>

                      <div className="mt-4 flex justify-center items-center space-x-6">
                        <button
                          className="text-white/70 hover:text-white transition-colors"
                          aria-label="Previous track"
                        >
                          <SkipBack size={24} aria-hidden="true" />
                        </button>
                        <button
                          aria-label={isPlaying ? "Pause audio ad" : "Play audio ad"}
                          onClick={handlePlayPause}
                          className="bg-white rounded-full p-3 hover:bg-white/90 transition-colors"
                        >
                          {isPlaying ? (
                            <Pause size={24} className="text-navy-800" />
                          ) : (
                            <Play size={24} className="text-navy-800" />
                          )}
                        </button>
                        <button className="text-white/70 hover:text-white transition-colors" aria-label="Next track">
                          <SkipForward size={24} aria-hidden="true" />
                        </button>
                      </div>

                      <div className="mt-5 text-center pb-4">
                        <p className="text-xs text-white/50">Powered by</p>
                        <img
                          className="mx-auto my-1.5 w-28 brightness-0 invert"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdInActionSection;
