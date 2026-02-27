import { Monitor, Globe, Smartphone, LayoutGrid, Layers, MousePointer } from "lucide-react";

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

    {/* Capabilities Panel */}
    <div className="space-y-4">
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <LayoutGrid className="w-3.5 h-3.5" /> Supported Capabilities
        </div>
        <div className="space-y-2.5">
          {[
            { icon: Monitor, label: "Multi-SSP Access", desc: "Connect to premium supply sources" },
            { icon: LayoutGrid, label: "All Standard Formats", desc: "Banner, native, interstitial & more" },
            { icon: Smartphone, label: "Cross-Device Delivery", desc: "Desktop, mobile & tablet reach" },
            { icon: Layers, label: "Inventory Transparency", desc: "Full visibility into placements" },
            { icon: MousePointer, label: "Placement Control", desc: "Approve or block specific sites" },
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

export default DisplayMockup;
