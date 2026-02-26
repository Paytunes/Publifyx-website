import { Tv, Smartphone, Tablet, Monitor, Wifi, Users, MapPin, BarChart3 } from "lucide-react";

const devices = [
  { icon: Tv, label: "Smart TV", pct: 52, color: "bg-brand-orange-500" },
  { icon: Monitor, label: "Fire Stick", pct: 24, color: "bg-navy-600" },
  { icon: Tablet, label: "Roku", pct: 14, color: "bg-brand-orange-300" },
  { icon: Smartphone, label: "Apple TV", pct: 10, color: "bg-navy-400" },
];

const CTVMockup = () => (
  <div className="grid md:grid-cols-5 gap-4">
    {/* TV Mockup */}
    <div className="md:col-span-3 space-y-4">
      {/* Smart TV Frame */}
      <div className="rounded-xl border-2 border-navy-200 bg-navy-800 p-1 relative">
        {/* Bezel */}
        <div className="rounded-lg overflow-hidden aspect-video relative">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900" />
          {/* Streaming UI */}
          <div className="absolute inset-0 p-4 flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-brand-orange-500 flex items-center justify-center">
                  <Tv className="w-3 h-3 text-white" />
                </div>
                <span className="text-[10px] text-white/80 font-medium">StreamView+</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3 h-3 text-white/50" />
                <span className="text-[9px] text-white/50">Connected</span>
              </div>
            </div>
            {/* Content row */}
            <div className="flex gap-2 flex-1">
              {/* Featured */}
              <div className="flex-1 rounded-lg bg-gradient-to-br from-brand-orange-500/30 to-navy-700 border border-white/10 p-3 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-brand-orange-500 text-[8px] text-white font-bold">AD</div>
                <div className="h-2 w-2/3 rounded bg-white/30 mb-1" />
                <div className="h-1.5 w-1/2 rounded bg-white/20" />
              </div>
              {/* Thumbnails */}
              <div className="w-24 hidden sm:flex flex-col gap-1.5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1 rounded bg-navy-700 border border-white/5" />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* TV Stand */}
        <div className="mx-auto w-1/3 h-1 bg-navy-300 rounded-b mt-1" />
      </div>

      {/* Cross-device targeting */}
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5" /> Cross-Device Targeting
        </div>
        <div className="flex items-center justify-between gap-2">
          {devices.map((d, i) => (
            <div key={d.label} className="flex flex-col items-center gap-1 flex-1">
              <div className={`w-10 h-10 rounded-xl ${i === 0 ? "bg-brand-orange-50" : "bg-navy-50"} flex items-center justify-center`}>
                <d.icon className={`w-5 h-5 ${i === 0 ? "text-brand-orange-500" : "text-navy-400"}`} />
              </div>
              <span className="text-[10px] font-medium text-navy-600">{d.label}</span>
              <span className="text-xs font-bold text-navy-800">{d.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Household panel */}
    <div className="md:col-span-2 space-y-3">
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" /> Household Targeting
        </div>
        <div className="space-y-3">
          {[
            { label: "Households Reached", value: "1.2M" },
            { label: "Avg. Frequency", value: "3.4×" },
            { label: "Completion Rate", value: "96.2%" },
            { label: "Brand Safety", value: "99.8%" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center p-2.5 rounded-lg bg-navy-50">
              <span className="text-[11px] text-navy-500">{item.label}</span>
              <span className="text-sm font-bold text-navy-800">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5" /> Streaming Platforms
        </div>
        <div className="space-y-2">
          {[
            { name: "JioHotstar", pct: 38 },
            { name: "Zee5", pct: 26 },
            { name: "SonyLIV", pct: 21 },
            { name: "MX Player", pct: 15 },
          ].map((p) => (
            <div key={p.name}>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-navy-600 font-medium">{p.name}</span>
                <span className="text-navy-400">{p.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-navy-100 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-navy-600 to-navy-800" style={{ width: `${p.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CTVMockup;
