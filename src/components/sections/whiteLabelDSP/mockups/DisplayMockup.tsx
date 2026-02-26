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
              <span className="text-[9px] font-bold text-brand-orange-500 text-center leading-tight">
                SKY
                <br />
                160×600
              </span>
            </div>
            <div className="h-2 w-full rounded bg-navy-50" />
            <div className="h-2 w-3/4 rounded bg-navy-50" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DisplayMockup;
