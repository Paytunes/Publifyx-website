import { Monitor, Globe, Smartphone, LayoutGrid } from "lucide-react";


const publishers = [
  { name: "Times Network", fill: 82, impressions: "4.2M" },
  { name: "Hindustan Digital", fill: 67, impressions: "3.1M" },
  { name: "News18 Group", fill: 54, impressions: "2.8M" },
  { name: "India Today", fill: 41, impressions: "1.9M" },
];

const DisplayMockup = () => (
  <div className="grid md:grid-cols-3 gap-4">
    {/* Website Preview with Banner Zones */}
    <div className="md:col-span-2 rounded-xl border border-navy-100 bg-white p-4 space-y-3">
      <div className="flex items-center gap-2 text-xs font-semibold text-navy-400 mb-2">
        <Globe className="w-3.5 h-3.5" /> Website Preview — Ad Placement Zones
      </div>
      {/* Simulated webpage */}
      <div className="border border-navy-100 rounded-lg overflow-hidden">
        {/* Nav bar */}
        <div className="bg-navy-800 h-8 flex items-center px-3 gap-2">
          <div className="w-16 h-3 rounded bg-navy-600" />
          <div className="flex gap-2 ml-auto">
            <div className="w-10 h-2.5 rounded bg-navy-600" />
            <div className="w-10 h-2.5 rounded bg-navy-600" />
            <div className="w-10 h-2.5 rounded bg-navy-600" />
          </div>
        </div>
        {/* Leaderboard */}
        <div className="mx-auto my-2 w-[90%] h-10 rounded border-2 border-dashed border-brand-orange-300 bg-brand-orange-50 flex items-center justify-center">
          <span className="text-[10px] font-bold text-brand-orange-500 tracking-wide">LEADERBOARD 728×90</span>
        </div>
        {/* Content + sidebar */}
        <div className="flex gap-2 px-3 pb-3">
          <div className="flex-1 space-y-2">
            <div className="h-3 w-3/4 rounded bg-navy-100" />
            <div className="h-2 w-full rounded bg-navy-50" />
            <div className="h-2 w-5/6 rounded bg-navy-50" />
            <div className="h-2 w-full rounded bg-navy-50" />
            {/* In-content ad */}
            <div className="w-full h-16 rounded border-2 border-dashed border-brand-orange-300 bg-brand-orange-50 flex items-center justify-center">
              <span className="text-[10px] font-bold text-brand-orange-500">NATIVE AD 300×250</span>
            </div>
            <div className="h-2 w-full rounded bg-navy-50" />
            <div className="h-2 w-2/3 rounded bg-navy-50" />
          </div>
          <div className="w-28 space-y-2 hidden sm:block">
            <div className="w-full h-32 rounded border-2 border-dashed border-brand-orange-300 bg-brand-orange-50 flex items-center justify-center">
              <span className="text-[9px] font-bold text-brand-orange-500 text-center leading-tight">SKY<br />160×600</span>
            </div>
            <div className="h-2 w-full rounded bg-navy-50" />
            <div className="h-2 w-3/4 rounded bg-navy-50" />
          </div>
        </div>
      </div>
    </div>

    {/* Inventory Overview Panel */}
    <div className="space-y-4">
      {/* Format Stats */}
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <LayoutGrid className="w-3.5 h-3.5" /> Inventory Overview
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "SSPs Connected", value: "40+", icon: Monitor },
            { label: "Ad Formats", value: "12", icon: LayoutGrid },
            { label: "Desktop", value: "62%", icon: Monitor },
            { label: "Mobile", value: "38%", icon: Smartphone },
          ].map((s) => (
            <div key={s.label} className="rounded-lg bg-navy-50 p-2.5 text-center">
              <s.icon className="w-3.5 h-3.5 text-brand-orange-500 mx-auto mb-1" />
              <p className="text-sm font-bold text-navy-800">{s.value}</p>
              <p className="text-[10px] text-navy-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Publisher fill rates */}
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3">Top Publishers</div>
        <div className="space-y-2.5">
          {publishers.map((p) => (
            <div key={p.name}>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-navy-700 font-medium">{p.name}</span>
                <span className="text-navy-400">{p.impressions}</span>
              </div>
              <div className="h-1.5 rounded-full bg-navy-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-orange-400 to-brand-orange-500"
                  style={{ width: `${p.fill}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DisplayMockup;
