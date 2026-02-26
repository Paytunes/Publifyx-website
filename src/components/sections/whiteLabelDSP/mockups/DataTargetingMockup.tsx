import { Target, Filter, Users, Globe, Smartphone, Layers, Zap } from "lucide-react";

const filters = [
  { icon: Globe, label: "Geo", values: ["Mumbai", "Delhi", "Bangalore"] },
  { icon: Smartphone, label: "Device", values: ["Mobile", "Desktop"] },
  { icon: Users, label: "Age", values: ["25-34", "35-44"] },
];

const segments = [
  { name: "In-Market: Auto", active: true },
  { name: "Tech Enthusiasts", active: true },
  { name: "Frequent Travelers", active: false },
  { name: "Premium Shoppers", active: true },
  { name: "Sports Fans", active: false },
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
              <span className="text-xs font-semibold text-navy-700 flex-1">{s.name}</span>
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${s.active ? "bg-brand-orange-100 text-brand-orange-600" : "bg-navy-100 text-navy-400"}`}>
                {s.active ? "Active" : "Inactive"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Features panel */}
    <div className="md:col-span-2 space-y-3">
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5" /> Data Capabilities
        </div>
        <div className="space-y-2.5">
          {[
            { label: "Multi-Provider Integration", desc: "Connect to leading data providers" },
            { label: "Custom Segment Builder", desc: "Create tailored audience groups" },
            { label: "Profile Matching", desc: "Cross-device identity resolution" },
            { label: "Real-Time Sync", desc: "Segments update dynamically" },
          ].map((item) => (
            <div key={item.label} className="p-2.5 rounded-lg bg-navy-50">
              <p className="text-[11px] font-semibold text-navy-700">{item.label}</p>
              <p className="text-[10px] text-navy-400 mt-0.5">{item.desc}</p>
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
          Machine learning adjusts bids in real time based on multiple signals per impression for peak performance.
        </p>
      </div>
    </div>
  </div>
);

export default DataTargetingMockup;
