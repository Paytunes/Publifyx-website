import { TrendingUp, Eye, MousePointer, DollarSign, Activity } from "lucide-react";

const kpis = [
  { label: "Impressions", value: "12.4M", change: "+22%", icon: Eye, color: "text-brand-orange-500" },
  { label: "Clicks", value: "186K", change: "+15%", icon: MousePointer, color: "text-navy-600" },
  { label: "CTR", value: "1.52%", change: "+0.3%", icon: TrendingUp, color: "text-emerald-500" },
  { label: "Spend", value: "$24.8K", change: "-8%", icon: DollarSign, color: "text-brand-orange-500" },
];

const hourlyData = [18, 24, 32, 28, 45, 52, 68, 72, 65, 58, 74, 82, 78, 85, 72, 68, 54, 62, 48, 35, 28, 22, 15, 12];

const ReportingMockup = () => (
  <div className="space-y-4">
    {/* KPI row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {kpis.map((k) => (
        <div key={k.label} className="rounded-xl border border-navy-100 bg-white p-3.5">
          <div className="flex items-center justify-between mb-2">
            <k.icon className={`w-4 h-4 ${k.color}`} />
            <span className={`text-[10px] font-semibold ${k.change.startsWith('+') ? 'text-emerald-500' : 'text-red-400'}`}>
              {k.change}
            </span>
          </div>
          <p className="text-lg font-bold text-navy-800">{k.value}</p>
          <p className="text-[10px] text-navy-400">{k.label}</p>
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-5 gap-4">
      {/* Main chart */}
      <div className="md:col-span-3 rounded-xl border border-navy-100 bg-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-semibold text-navy-400 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" /> Hourly Performance
          </div>
          <div className="flex gap-1">
            {["1H", "6H", "24H", "7D"].map((t, i) => (
              <button key={t} className={`px-2 py-0.5 rounded text-[10px] font-medium ${i === 2 ? "bg-navy-800 text-white" : "text-navy-400 hover:bg-navy-50"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
        {/* Line chart simulation */}
        <div className="relative h-32">
          <svg viewBox="0 0 240 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(27 100% 50%)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(27 100% 50%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Area */}
            <path
              d={`M0,${100 - hourlyData[0]} ${hourlyData.map((v, i) => `L${(i / 23) * 240},${100 - v}`).join(' ')} L240,100 L0,100Z`}
              fill="url(#chartGrad)"
            />
            {/* Line */}
            <path
              d={`M0,${100 - hourlyData[0]} ${hourlyData.map((v, i) => `L${(i / 23) * 240},${100 - v}`).join(' ')}`}
              fill="none"
              stroke="hsl(27 100% 50%)"
              strokeWidth="2"
            />
            {/* Current point */}
            <circle cx={(14 / 23) * 240} cy={100 - hourlyData[14]} r="4" fill="hsl(27 100% 50%)" stroke="white" strokeWidth="2" />
          </svg>
          {/* Y axis labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none">
            <span className="text-[9px] text-navy-300">100K</span>
            <span className="text-[9px] text-navy-300">50K</span>
            <span className="text-[9px] text-navy-300">0</span>
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px] text-navy-300">12 AM</span>
          <span className="text-[9px] text-navy-300">6 AM</span>
          <span className="text-[9px] text-navy-300">12 PM</span>
          <span className="text-[9px] text-navy-300">6 PM</span>
          <span className="text-[9px] text-navy-300">Now</span>
        </div>
      </div>

      {/* Live feed */}
      <div className="md:col-span-2 rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Real-Time Feed
        </div>
        <div className="space-y-2 max-h-48 overflow-hidden">
          {[
            { time: "Just now", event: "Campaign 'Auto Q1' hit 1M impressions", type: "success" },
            { time: "2m ago", event: "CTR spike detected — +0.4% in Mumbai", type: "info" },
            { time: "5m ago", event: "Budget 80% utilized — $19.8K spent", type: "warning" },
            { time: "12m ago", event: "New creative approved — Video 30s", type: "success" },
            { time: "18m ago", event: "Viewability rate: 92.4% (above target)", type: "info" },
            { time: "25m ago", event: "Audience segment expanded +240K users", type: "success" },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 p-2 rounded-lg bg-navy-50">
              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                item.type === "success" ? "bg-emerald-500" : item.type === "warning" ? "bg-amber-500" : "bg-blue-500"
              }`} />
              <div>
                <p className="text-[11px] text-navy-700 leading-snug">{item.event}</p>
                <p className="text-[9px] text-navy-400 mt-0.5">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ReportingMockup;
