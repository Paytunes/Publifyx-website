import { Palette, Globe, Upload, Settings, Users, Shield } from "lucide-react";

const WhiteLabelMockup = () => (
  <div className="grid md:grid-cols-5 gap-4">
    {/* Branding Panel */}
    <div className="md:col-span-3 space-y-4">
      {/* Custom branding preview */}
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <Palette className="w-3.5 h-3.5" /> Brand Customization
        </div>
        <div className="rounded-lg border border-navy-100 overflow-hidden">
          <div className="bg-navy-800 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-orange-500 flex items-center justify-center">
                <span className="text-white text-xs font-black">YB</span>
              </div>
              <div>
                <span className="text-white text-xs font-bold">Your Brand DSP</span>
                <span className="block text-[9px] text-white/50">ads.yourbrand.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-navy-600" />
              <span className="text-[10px] text-white/70">Admin</span>
            </div>
          </div>
          <div className="p-3 bg-navy-50 flex gap-3">
            {["Dashboard", "Campaigns", "Reports", "Settings"].map((item, i) => (
              <span
                key={item}
                className={`text-[11px] font-medium px-2 py-1 rounded ${i === 0 ? "bg-white text-navy-800 shadow-sm" : "text-navy-400"}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Logo & Domain Settings */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-navy-100 bg-white p-4">
          <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
            <Upload className="w-3.5 h-3.5" /> Logo Upload
          </div>
          <div className="border-2 border-dashed border-navy-200 rounded-lg p-4 flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center">
              <Upload className="w-5 h-5 text-navy-300" />
            </div>
            <span className="text-[10px] text-navy-400">Drop logo here or click to upload</span>
            <span className="text-[9px] text-navy-300">SVG, PNG · Max 2MB</span>
          </div>
        </div>

        <div className="rounded-xl border border-navy-100 bg-white p-4">
          <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" /> Domain Settings
          </div>
          <div className="space-y-2.5">
            {[
              { label: "Platform URL", value: "ads.yourbrand.com" },
              { label: "Tracking Domain", value: "track.yourbrand.com" },
              { label: "SSL Certificate", value: "Auto-provisioned" },
            ].map((d) => (
              <div key={d.label} className="p-2 rounded-lg bg-navy-50">
                <span className="text-[10px] text-navy-500">{d.label}</span>
                <span className="block text-[11px] font-medium text-navy-700 font-mono">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Control Panel */}
    <div className="md:col-span-2 space-y-3">
      <div className="rounded-xl border border-navy-100 bg-white p-4">
        <div className="text-xs font-semibold text-navy-400 mb-3 flex items-center gap-1.5">
          <Settings className="w-3.5 h-3.5" /> Platform Controls
        </div>
        <div className="space-y-2.5">
          {[
            { label: "Custom Pricing Tiers", desc: "Set your own margins per client" },
            { label: "Role-Based Access", desc: "Admin, manager & viewer roles" },
            { label: "Branded Reporting", desc: "White-labeled reports for clients" },
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
          <Users className="w-3.5 h-3.5" /> User Management
        </div>
        <div className="space-y-2">
          {[
            { name: "Admin", color: "bg-brand-orange-500" },
            { name: "Manager", color: "bg-navy-600" },
            { name: "Viewer", color: "bg-navy-300" },
          ].map((role) => (
            <div key={role.name} className="flex items-center gap-2 p-2 rounded-lg bg-navy-50">
              <div className={`w-2 h-2 rounded-full ${role.color}`} />
              <span className="text-[11px] text-navy-600 flex-1">{role.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-brand-orange-200 bg-gradient-to-br from-brand-orange-50 to-white p-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-4 h-4 text-brand-orange-500" />
          <span className="text-xs font-bold text-navy-800">Zero Exposure</span>
        </div>
        <p className="text-[11px] text-navy-500 leading-relaxed">
          Your clients never see our brand. Every touchpoint — login, emails, reports — is 100% yours.
        </p>
      </div>
    </div>
  </div>
);

export default WhiteLabelMockup;
