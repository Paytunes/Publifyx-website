import { Tv, Smartphone, Tablet, Monitor, Wifi, Users, MapPin, BarChart3 } from "lucide-react";

const devices = [
  { icon: Tv, label: "Smart TV" },
  { icon: Monitor, label: "Fire Stick" },
  { icon: Tablet, label: "Roku" },
  { icon: Smartphone, label: "Apple TV" },
];

const CTVMockup = () => (
  <div className="grid md:grid-cols-5 gap-4">
    {/* TV Mockup */}
    <div className="md:col-span-3 space-y-4 test-4">
      {/* Smart TV Frame */}
      <div className="rounded-xl border-2 border-navy-200 bg-navy-800 p-1 relative">
        <div className="rounded-lg overflow-hidden aspect-video relative">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900" />
          <div className="absolute inset-0 p-4 flex flex-col">
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
            <div className="flex gap-2 flex-1">
              <div className="flex-1 rounded-lg bg-gradient-to-br from-brand-orange-500/30 to-navy-700 border border-white/10 p-3 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-brand-orange-500 text-[8px] text-white font-bold">
                  AD
                </div>
                <div className="h-2 w-2/3 rounded bg-white/30 mb-1" />
                <div className="h-1.5 w-1/2 rounded bg-white/20" />
              </div>
              <div className="w-24 hidden sm:flex flex-col gap-1.5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1 rounded bg-navy-700 border border-white/5" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-1/3 h-1 bg-navy-300 rounded-b mt-1" />
      </div>

      {/* Cross-device targeting */}
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5" /> Cross-Device Targeting
        </div>
        <div className="flex items-center justify-between gap-2">
          {devices.map((d, i) => (
            <div key={d.label} className="flex flex-col items-center gap-1.5 flex-1">
              <div
                className={`w-10 h-10 rounded-xl ${i === 0 ? "bg-brand-orange-50" : "bg-navy-50"} flex items-center justify-center`}
              >
                <d.icon className={`w-5 h-5 ${i === 0 ? "text-brand-orange-500" : "text-navy-400"}`} />
              </div>
              <span className="text-[10px] font-medium text-navy-600">{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Features panel */}
    <div className="md:col-span-2 space-y-3">
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" /> Household Targeting
        </div>
        <div className="space-y-2.5">
          {[
            { label: "Household-Level Reach", desc: "Target entire households across devices" },
            { label: "Frequency Management", desc: "Control how often ads are shown" },
            { label: "Completion Tracking", desc: "Monitor full-view ad completions" },
            { label: "Brand Safety Controls", desc: "Ensure ads appear in safe environments" },
          ].map((item) => (
            <div key={item.label} className="p-2.5 rounded-lg bg-navy-50">
              <p className="text-[11px] font-semibold text-navy-700">{item.label}</p>
              <p className="text-[10px] text-navy-400 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5" /> Streaming Platforms
        </div>
        <p className="text-[11px] text-navy-500 leading-relaxed">
          Access premium inventory across top OTT and streaming platforms. Serve ads on connected TVs, streaming sticks,
          and smart devices.
        </p>
      </div>
    </div>
  </div>
);

export default CTVMockup;
