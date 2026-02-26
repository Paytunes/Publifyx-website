import { Play, BarChart3, Eye, Clock, TrendingUp } from "lucide-react";

const stats = [
  { label: "Total Views", value: "2.4M", change: "+18%", icon: Eye },
  { label: "Avg. VTR", value: "76.3%", change: "+4.2%", icon: TrendingUp },
  { label: "Completions", value: "1.8M", change: "+12%", icon: BarChart3 },
  { label: "Avg. Duration", value: "22.4s", change: "+1.8s", icon: Clock },
];

const quartiles = [
  { label: "25%", value: 92 },
  { label: "50%", value: 84 },
  { label: "75%", value: 71 },
  { label: "100%", value: 63 },
];

const VideoMockup = () => (
  <div className="grid md:grid-cols-5 gap-4">
    {/* Video Player */}
    <div className="md:col-span-3 space-y-4">
      <div className="relative rounded-xl overflow-hidden bg-navy-800 aspect-video flex items-center justify-center group cursor-pointer">
        {/* Simulated video frame */}
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
        <div className="absolute top-3 right-3 px-2 py-1 rounded bg-brand-orange-500/90 text-[10px] text-white font-bold">
          LIVE
        </div>
      </div>

      {/* Quartile completion chart */}
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5" /> Quartile Completion Rates
        </div>
        <div className="flex items-end gap-3 h-24">
          {quartiles.map((q) => (
            <div key={q.label} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold text-navy-700">{q.value}%</span>
              <div className="w-full rounded-t-md bg-gradient-to-t from-brand-orange-500 to-brand-orange-300" style={{ height: `${q.value}%` }} />
              <span className="text-[10px] text-navy-400">{q.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Stats Panel */}
    <div className="md:col-span-2 space-y-3">
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3">Campaign Performance</div>
        <div className="space-y-3">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 p-2.5 rounded-lg bg-navy-50">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                <s.icon className="w-4 h-4 text-brand-orange-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-navy-400">{s.label}</p>
                <p className="text-sm font-bold text-navy-800">{s.value}</p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-500">{s.change}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Format breakdown */}
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3">Format Breakdown</div>
        <div className="space-y-2">
          {[
            { name: "Pre-Roll", pct: 45 },
            { name: "Mid-Roll", pct: 28 },
            { name: "Outstream", pct: 18 },
            { name: "In-Banner", pct: 9 },
          ].map((f) => (
            <div key={f.name} className="flex items-center gap-2">
              <span className="text-[11px] text-navy-600 w-16">{f.name}</span>
              <div className="flex-1 h-2 rounded-full bg-navy-100 overflow-hidden">
                <div className="h-full rounded-full bg-navy-700" style={{ width: `${f.pct}%` }} />
              </div>
              <span className="text-[11px] font-medium text-navy-500">{f.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default VideoMockup;
