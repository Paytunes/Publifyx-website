import { Eye, MousePointer, TrendingUp, Activity, BarChart3 } from "lucide-react";

const kpis = [
  { label: "Impressions", icon: Eye, color: "text-brand-orange-500" },
  { label: "Clicks", icon: MousePointer, color: "text-navy-600" },
  { label: "CTR", icon: TrendingUp, color: "text-emerald-500" },
  { label: "Spend", icon: BarChart3, color: "text-brand-orange-500" },
];

const ReportingMockup = () => (
  <div className="space-y-4">
    {/* KPI row — labels only, no values */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {kpis.map((k) => (
        <div key={k.label} className="rounded-xl border border-navy-100 bg-white p-3.5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center">
            <k.icon className={`w-4 h-4 ${k.color}`} />
          </div>
          <div>
            <p className="text-xs font-semibold text-navy-700">{k.label}</p>
            <div className="h-2 w-12 rounded bg-navy-100 mt-1" />
          </div>
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-5 gap-4">
      {/* Chart area — visual shape only */}
      <div className="md:col-span-3 rounded-xl border border-navy-100 bg-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-semibold text-navy-400 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" /> Performance Timeline
          </div>
          <div className="flex gap-1">
            {["1H", "6H", "24H", "7D"].map((t, i) => (
              <button key={t} className={`px-2 py-0.5 rounded text-[10px] font-medium ${i === 2 ? "bg-navy-800 text-white" : "text-navy-400 hover:bg-navy-50"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
        {/* Abstract chart shape */}
        <div className="relative h-32">
          <svg viewBox="0 0 240 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(27 100% 50%)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="hsl(27 100% 50%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,82 C20,70 40,55 60,48 C80,41 100,35 120,30 C140,25 160,22 180,28 C200,34 220,18 240,15 L240,100 L0,100Z"
              fill="url(#chartGrad)"
            />
            <path
              d="M0,82 C20,70 40,55 60,48 C80,41 100,35 120,30 C140,25 160,22 180,28 C200,34 220,18 240,15"
              fill="none"
              stroke="hsl(27 100% 50%)"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px] text-navy-300">Start</span>
          <span className="text-[9px] text-navy-300">Now</span>
        </div>
      </div>

      {/* Reporting features */}
      <div className="md:col-span-2 rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Reporting Features
        </div>
        <div className="space-y-2.5">
          {[
            { label: "Real-Time Dashboard", desc: "Live campaign performance visibility" },
            { label: "Custom Report Builder", desc: "Create tailored reports for clients" },
            { label: "Automated Alerts", desc: "Get notified on key events" },
            { label: "Exportable Data", desc: "Download reports in CSV or PDF" },
            { label: "Multi-Campaign View", desc: "Compare campaigns side-by-side" },
          ].map((item) => (
            <div key={item.label} className="p-2 rounded-lg bg-navy-50">
              <p className="text-[11px] font-semibold text-navy-700">{item.label}</p>
              <p className="text-[10px] text-navy-400 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ReportingMockup;
