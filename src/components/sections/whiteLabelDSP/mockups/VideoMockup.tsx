import { Play, BarChart3, Film, Tv, MonitorPlay, Layers } from "lucide-react";

const VideoMockup = () => (
  <div className="grid md:grid-cols-5 gap-4">
    {/* Video Player */}
    <div className="md:col-span-3 space-y-4">
      <div className="relative rounded-xl overflow-hidden bg-navy-800 aspect-video flex items-center justify-center group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, hsl(27 100% 50% / 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, hsl(220 47% 30% / 0.5) 0%, transparent 50%)' }} />
        {/* Play button */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-brand-orange-500 flex items-center justify-center shadow-lg shadow-brand-orange-500/30 group-hover:scale-110 transition-transform">
          <Play className="w-7 h-7 text-white fill-white ml-1" />
        </div>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy-900/80 to-transparent">
          <div className="flex items-center gap-2 text-[10px] text-white/70">
            <span>0:15</span>
            <div className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden">
              <div className="w-[63%] h-full rounded-full bg-brand-orange-500" />
            </div>
            <span>0:30</span>
          </div>
        </div>
        {/* Format badge */}
        <div className="absolute top-3 left-3 px-2 py-1 rounded bg-navy-900/70 text-[10px] text-white font-medium">
          Pre-Roll · VAST 4.2
        </div>
      </div>

      {/* Quartile stages — visual only, no numbers */}
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5" /> Quartile Tracking
        </div>
        <div className="flex items-end gap-3 h-20">
          {["Start", "25%", "50%", "75%", "Complete"].map((label, i) => (
            <div key={label} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-brand-orange-500 to-brand-orange-300"
                style={{ height: `${100 - i * 15}%` }}
              />
              <span className="text-[10px] text-navy-400">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Features Panel */}
    <div className="md:col-span-2 space-y-3">
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3">Video Capabilities</div>
        <div className="space-y-2.5">
          {[
            { icon: Film, label: "Multiple Formats", desc: "Pre-roll, mid-roll, outstream & in-banner" },
            { icon: MonitorPlay, label: "VAST & VPAID Support", desc: "Industry-standard video ad serving" },
            { icon: Tv, label: "Cross-Screen Delivery", desc: "Desktop, mobile, tablet & CTV" },
            { icon: BarChart3, label: "Viewability Tracking", desc: "Monitor ad visibility in real time" },
            { icon: Layers, label: "Creative Management", desc: "Upload, preview & rotate creatives" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-navy-50">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 mt-0.5">
                <item.icon className="w-3.5 h-3.5 text-brand-orange-500" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-navy-700">{item.label}</p>
                <p className="text-[10px] text-navy-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default VideoMockup;
