import { Target, Filter, Users, Globe, Smartphone, TrendingUp, Layers, Zap } from "lucide-react";

const segments = [
  { name: "In-Market: Auto", size: "2.4M", match: 89, active: true },
  { name: "Tech Enthusiasts", size: "5.1M", match: 76, active: true },
  { name: "Frequent Travelers", size: "1.8M", match: 64, active: false },
  { name: "Premium Shoppers", size: "3.2M", match: 71, active: true },
  { name: "Sports Fans", size: "6.7M", match: 58, active: false },
];

const filters = [
  { icon: Globe, label: "Geo", values: ["Mumbai", "Delhi", "Bangalore"] },
  { icon: Smartphone, label: "Device", values: ["Mobile", "Desktop"] },
  { icon: Users, label: "Age", values: ["25-34", "35-44"] },
];

const DataTargetingMockup = () => (
  <div className="grid md:grid-cols-5 gap-4">
    {/* Segmentation dashboard */}
    <div className="md:col-span-3 space-y-4">
      {/* Filter bar */}
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5" /> Active Filters
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <div key={f.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-50 border border-navy-100">
              <f.icon className="w-3 h-3 text-brand-orange-500" />
              <span className="text-[11px] font-medium text-navy-600">{f.label}:</span>
              {f.values.map((v) => (
                <span key={v} className="text-[10px] bg-brand-orange-50 text-brand-orange-600 px-1.5 py-0.5 rounded font-medium">{v}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Audience segments */}
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" /> Audience Segments
        </div>
        <div className="space-y-2">
          {segments.map((s) => (
            <div key={s.name} className={`flex items-center gap-3 p-2.5 rounded-lg border ${s.active ? "border-brand-orange-200 bg-brand-orange-50/50" : "border-navy-100 bg-navy-50"}`}>
              <div className={`w-2 h-2 rounded-full ${s.active ? "bg-brand-orange-500" : "bg-navy-300"}`} />
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-navy-700">{s.name}</span>
              </div>
              <span className="text-[10px] text-navy-400">{s.size} users</span>
              <div className="w-12 h-1.5 rounded-full bg-navy-100 overflow-hidden">
                <div className="h-full rounded-full bg-brand-orange-500" style={{ width: `${s.match}%` }} />
              </div>
              <span className="text-[10px] font-bold text-navy-600">{s.match}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Targeting graph */}
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5" /> Targeting Overlap Analysis
        </div>
        <div className="flex items-end gap-1.5 h-20">
          {[45, 72, 38, 85, 62, 51, 78, 44, 66, 55, 70, 48].map((v, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-orange-500 to-brand-orange-300 opacity-80" style={{ height: `${v}%` }} />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px] text-navy-300">Jan</span>
          <span className="text-[9px] text-navy-300">Dec</span>
        </div>
      </div>
    </div>

    {/* Stats panel */}
    <div className="md:col-span-2 space-y-3">
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5" /> Data Intelligence
        </div>
        <div className="space-y-3">
          {[
            { label: "Data Providers", value: "50+" },
            { label: "Custom Segments", value: "128" },
            { label: "Match Rate", value: "87.4%" },
            { label: "Unique Profiles", value: "42M" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center p-2.5 rounded-lg bg-navy-50">
              <span className="text-[11px] text-navy-500">{item.label}</span>
              <span className="text-sm font-bold text-navy-800">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-brand-orange-200 bg-gradient-to-br from-brand-orange-50 to-white p-4">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-4 h-4 text-brand-orange-500" />
          <span className="text-xs font-bold text-navy-800">AI Optimization</span>
        </div>
        <p className="text-[11px] text-navy-500 leading-relaxed">
          Machine learning adjusts bids in real time based on 200+ signals per impression for peak performance.
        </p>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-2 rounded-full bg-brand-orange-100 overflow-hidden">
            <div className="w-[87%] h-full rounded-full bg-brand-orange-500 animate-pulse" />
          </div>
          <span className="text-[10px] font-bold text-brand-orange-600">87%</span>
        </div>
      </div>
    </div>
  </div>
);

export default DataTargetingMockup;
