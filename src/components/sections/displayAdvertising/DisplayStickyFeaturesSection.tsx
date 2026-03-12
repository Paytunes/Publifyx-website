import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Globe, Layers, Target, Zap, RefreshCw, Shield, BarChart3 } from "lucide-react";

// ─────────────────────────────────────────────
// Feature data
// ─────────────────────────────────────────────
const features = [
  {
    title: "Massive Inventory Reach",
    description:
      "Access display inventory across hundreds of thousands of websites and mobile apps through our integrations with leading ad exchanges and SSPs.",
    icon: Globe,
  },
  {
    title: "Standard and Custom Ad Formats",
    description:
      "Support for all IAB standard banner sizes, native ad formats, expandable rich media, and interstitial placements.",
    icon: Layers,
  },
  {
    title: "Advanced Audience Targeting",
    description:
      "Target users based on demographics, interests, purchase behavior, browsing history, contextual relevance, device type, and geographic location.",
    icon: Target,
  },
  {
    title: "Real-Time Bidding Optimization",
    description:
      "Our bidding algorithms optimize in real time for your campaign goals, whether you are targeting CPM, CPC, CPA, or ROAS efficiency.",
    icon: Zap,
  },
  {
    title: "Retargeting and Prospecting",
    description:
      "Re-engage users who have previously visited your website or interacted with your brand. Use lookalike modeling to find new audiences that share characteristics with your best customers.",
    icon: RefreshCw,
  },
  {
    title: "Viewability and Brand Safety",
    description:
      "Ensure your ads are seen by real users in brand-safe environments with viewability verification, fraud detection, and domain-level exclusion controls.",
    icon: Shield,
  },
  {
    title: "Transparent Reporting",
    description:
      "Access real-time dashboards with metrics including impressions, clicks, CTR, conversions, viewability rate, and cost efficiency.",
    icon: BarChart3,
  },
];

// ─────────────────────────────────────────────
// Shared dark container for futuristic visuals
// ─────────────────────────────────────────────
const VizBase = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative w-full overflow-hidden flex items-center justify-center flex-shrink-0"
    style={{
      height: "188px",
      background: "linear-gradient(135deg, #040b18 0%, #081525 65%, #0c1d38 100%)",
    }}
  >
    {/* dot grid */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(249,115,22,0.38) 1px, transparent 0)",
        backgroundSize: "22px 22px",
        opacity: 0.22,
      }}
    />
    {children}
    {/* radial glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at 50% 60%, rgba(249,115,22,0.08) 0%, transparent 65%)",
      }}
    />
  </div>
);

// ── 1. Publisher network mesh ──────────────────
const NetworkViz = () => (
  <VizBase>
    <svg viewBox="0 0 300 170" width="300" height="170" className="relative z-10">
      {(
        [
          [55, 85, 150, 38],
          [150, 38, 245, 85],
          [245, 85, 150, 132],
          [150, 132, 55, 85],
          [55, 85, 150, 85],
          [150, 38, 150, 85],
          [245, 85, 150, 85],
          [150, 132, 150, 85],
          [105, 52, 150, 85],
          [195, 52, 150, 85],
          [105, 118, 150, 85],
          [195, 118, 150, 85],
        ] as [number, number, number, number][]
      ).map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#f97316"
          strokeOpacity="0.2"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      ))}
      {(
        [
          [55, 85],
          [150, 38],
          [245, 85],
          [150, 132],
          [105, 52],
          [195, 52],
          [105, 118],
          [195, 118],
        ] as [number, number][]
      ).map(([cx, cy], i) => (
        <g key={i}>
          <circle
            cx={cx}
            cy={cy}
            r="12"
            fill="rgba(249,115,22,0.07)"
            stroke="#f97316"
            strokeOpacity="0.32"
            strokeWidth="1"
          />
          <circle cx={cx} cy={cy} r="4" fill="#f97316" opacity="0.7" />
        </g>
      ))}
      <circle cx="150" cy="85" r="20" fill="rgba(249,115,22,0.1)" stroke="#f97316" strokeWidth="1.5" />
      <circle cx="150" cy="85" r="7" fill="#f97316" opacity="0.9" />
    </svg>
  </VizBase>
);

// ── 2. Stacked banner format shapes ───────────
const FormatsViz = () => (
  <VizBase>
    <svg viewBox="0 0 300 170" width="300" height="170" className="relative z-10">
      {/* Leaderboard 728×90 */}
      <rect
        x="20"
        y="20"
        width="260"
        height="36"
        rx="4"
        fill="none"
        stroke="#f97316"
        strokeOpacity="0.5"
        strokeWidth="1.5"
        strokeDasharray="6 3"
      />
      <text x="150" y="43" textAnchor="middle" fill="#f97316" fillOpacity="0.48" fontSize="9" fontFamily="monospace">
        728 × 90
      </text>
      {/* Medium rectangle */}
      <rect
        x="20"
        y="68"
        width="112"
        height="84"
        rx="4"
        fill="rgba(249,115,22,0.05)"
        stroke="#f97316"
        strokeOpacity="0.42"
        strokeWidth="1.5"
        strokeDasharray="6 3"
      />
      <text x="76" y="114" textAnchor="middle" fill="#f97316" fillOpacity="0.48" fontSize="9" fontFamily="monospace">
        300 × 250
      </text>
      {/* Skyscraper */}
      <rect
        x="146"
        y="68"
        width="58"
        height="84"
        rx="4"
        fill="rgba(249,115,22,0.05)"
        stroke="#f97316"
        strokeOpacity="0.38"
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />
      <text x="175" y="113" textAnchor="middle" fill="#f97316" fillOpacity="0.42" fontSize="8" fontFamily="monospace">
        160×600
      </text>
      {/* Mobile 320×50 */}
      <rect
        x="218"
        y="68"
        width="62"
        height="16"
        rx="3"
        fill="rgba(249,115,22,0.09)"
        stroke="#f97316"
        strokeOpacity="0.36"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <text x="249" y="80" textAnchor="middle" fill="#f97316" fillOpacity="0.4" fontSize="7.5" fontFamily="monospace">
        320×50
      </text>
      {/* 300×600 */}
      <rect
        x="218"
        y="92"
        width="62"
        height="60"
        rx="3"
        fill="rgba(249,115,22,0.04)"
        stroke="#f97316"
        strokeOpacity="0.3"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <text x="249" y="125" textAnchor="middle" fill="#f97316" fillOpacity="0.35" fontSize="7.5" fontFamily="monospace">
        300×600
      </text>
    </svg>
  </VizBase>
);

// ── 3. Radar / targeting rings ─────────────────
const TargetingViz = () => (
  <VizBase>
    <svg viewBox="0 0 300 170" width="300" height="170" className="relative z-10">
      {[72, 54, 36, 18].map((r, i) => (
        <circle
          key={i}
          cx="150"
          cy="85"
          r={r}
          fill="none"
          stroke="#f97316"
          strokeOpacity={0.1 + i * 0.07}
          strokeWidth="1.5"
          strokeDasharray={i % 2 === 0 ? "none" : "5 4"}
        />
      ))}
      <line x1="150" y1="8" x2="150" y2="60" stroke="#f97316" strokeOpacity="0.32" strokeWidth="1" />
      <line x1="150" y1="110" x2="150" y2="162" stroke="#f97316" strokeOpacity="0.32" strokeWidth="1" />
      <line x1="74" y1="85" x2="124" y2="85" stroke="#f97316" strokeOpacity="0.32" strokeWidth="1" />
      <line x1="176" y1="85" x2="226" y2="85" stroke="#f97316" strokeOpacity="0.32" strokeWidth="1" />
      {(
        [
          [108, 56],
          [192, 62],
          [212, 110],
          [95, 116],
        ] as [number, number][]
      ).map(([cx, cy], i) => (
        <g key={i}>
          <circle
            cx={cx}
            cy={cy}
            r="5.5"
            fill="rgba(249,115,22,0.14)"
            stroke="#f97316"
            strokeOpacity="0.55"
            strokeWidth="1"
          />
          <circle cx={cx} cy={cy} r="2" fill="#f97316" opacity="0.8" />
        </g>
      ))}
      <circle cx="150" cy="85" r="8" fill="rgba(249,115,22,0.2)" stroke="#f97316" strokeWidth="1.5" />
      <circle cx="150" cy="85" r="3.5" fill="#f97316" />
    </svg>
  </VizBase>
);

// ── 4. RTB bid auction bars ────────────────────
const RTBViz = () => (
  <VizBase>
    <svg viewBox="0 0 300 170" width="300" height="170" className="relative z-10">
      <line x1="28" y1="138" x2="272" y2="138" stroke="#f97316" strokeOpacity="0.18" strokeWidth="1" />
      {[38, 68, 98, 118].map((y, i) => (
        <line
          key={i}
          x1="28"
          y1={y}
          x2="272"
          y2={y}
          stroke="#f97316"
          strokeOpacity="0.07"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      ))}
      {[
        { x: 48, h: 78, label: "DSP A" },
        { x: 96, h: 102, label: "DSP B" },
        { x: 144, h: 58, label: "DSP C" },
        { x: 192, h: 92, label: "DSP D" },
        { x: 240, h: 118, label: "WIN", winner: true },
      ].map(({ x, h, label, winner }, i) => (
        <g key={i}>
          <rect
            x={x - 17}
            y={138 - h}
            width="34"
            height={h}
            rx="3"
            fill={winner ? "rgba(249,115,22,0.32)" : "rgba(249,115,22,0.09)"}
            stroke="#f97316"
            strokeOpacity={winner ? 0.75 : 0.28}
            strokeWidth={winner ? 1.5 : 1}
          />
          {winner && (
            <text
              x={x}
              y={138 - h - 7}
              textAnchor="middle"
              fill="#f97316"
              fontSize="8.5"
              fontFamily="monospace"
              fontWeight="bold"
            >
              ✓ WIN
            </text>
          )}
          <text x={x} y="153" textAnchor="middle" fill="#f97316" fillOpacity="0.38" fontSize="8" fontFamily="monospace">
            {label}
          </text>
        </g>
      ))}
      <rect
        x="108"
        y="8"
        width="84"
        height="18"
        rx="4"
        fill="rgba(249,115,22,0.09)"
        stroke="#f97316"
        strokeOpacity="0.32"
        strokeWidth="1"
      />
      <text
        x="150"
        y="20.5"
        textAnchor="middle"
        fill="#f97316"
        fillOpacity="0.65"
        fontSize="8.5"
        fontFamily="monospace"
      >
        100ms auction
      </text>
    </svg>
  </VizBase>
);

// ── 5. Retargeting flow ───────────────────────
const RetargetingViz = () => (
  <VizBase>
    <svg viewBox="0 0 300 170" width="300" height="170" className="relative z-10">
      <defs>
        <marker id="rt-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#f97316" opacity="0.65" />
        </marker>
      </defs>
      <circle
        cx="60"
        cy="85"
        r="30"
        fill="rgba(249,115,22,0.07)"
        stroke="#f97316"
        strokeOpacity="0.38"
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />
      <text x="60" y="82" textAnchor="middle" fill="#f97316" fillOpacity="0.6" fontSize="8.5" fontFamily="monospace">
        Site
      </text>
      <text x="60" y="94" textAnchor="middle" fill="#f97316" fillOpacity="0.6" fontSize="8.5" fontFamily="monospace">
        Visit
      </text>
      <path
        d="M94 72 Q150 36 206 72"
        stroke="#f97316"
        strokeOpacity="0.42"
        strokeWidth="1.5"
        fill="none"
        markerEnd="url(#rt-arrow)"
        strokeDasharray="5 4"
      />
      <circle
        cx="240"
        cy="85"
        r="30"
        fill="rgba(249,115,22,0.13)"
        stroke="#f97316"
        strokeOpacity="0.58"
        strokeWidth="1.5"
      />
      <text x="240" y="82" textAnchor="middle" fill="#f97316" fillOpacity="0.78" fontSize="8.5" fontFamily="monospace">
        Ad
      </text>
      <text x="240" y="94" textAnchor="middle" fill="#f97316" fillOpacity="0.78" fontSize="8.5" fontFamily="monospace">
        Served
      </text>
      <path
        d="M206 98 Q150 132 94 98"
        stroke="#f97316"
        strokeOpacity="0.28"
        strokeWidth="1.5"
        fill="none"
        markerEnd="url(#rt-arrow)"
        strokeDasharray="5 4"
      />
      <rect
        x="117"
        y="24"
        width="66"
        height="16"
        rx="3"
        fill="rgba(249,115,22,0.09)"
        stroke="#f97316"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <text x="150" y="36" textAnchor="middle" fill="#f97316" fillOpacity="0.55" fontSize="7.5" fontFamily="monospace">
        pixel tag
      </text>
      <rect
        x="117"
        y="130"
        width="66"
        height="16"
        rx="3"
        fill="rgba(249,115,22,0.07)"
        stroke="#f97316"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      <text x="150" y="142" textAnchor="middle" fill="#f97316" fillOpacity="0.45" fontSize="7.5" fontFamily="monospace">
        lookalike
      </text>
    </svg>
  </VizBase>
);

// ── 6. Brand safety shield ─────────────────────
const SafetyViz = () => (
  <VizBase>
    <svg viewBox="0 0 300 170" width="300" height="170" className="relative z-10">
      <path
        d="M150 16 L222 44 L222 96 Q222 136 150 158 Q78 136 78 96 L78 44 Z"
        fill="rgba(249,115,22,0.06)"
        stroke="#f97316"
        strokeOpacity="0.42"
        strokeWidth="1.5"
      />
      <path
        d="M150 32 L208 54 L208 96 Q208 128 150 146 Q92 128 92 96 L92 54 Z"
        fill="none"
        stroke="#f97316"
        strokeOpacity="0.18"
        strokeWidth="1"
        strokeDasharray="5 4"
      />
      {[64, 79, 94, 109, 124].map((y, i) => (
        <line key={i} x1="86" y1={y} x2="214" y2={y} stroke="#f97316" strokeOpacity="0.09" strokeWidth="1" />
      ))}
      <path
        d="M126 88 L142 106 L174 74"
        stroke="#f97316"
        strokeOpacity="0.88"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {(
        [
          [-78, 54],
          [78, 54],
          [-78, 102],
          [78, 102],
        ] as [number, number][]
      ).map(([dx, dy], i) => (
        <g key={i}>
          <rect
            x={150 + dx - 28}
            y={dy - 10}
            width="56"
            height="17"
            rx="3"
            fill="rgba(249,115,22,0.05)"
            stroke="#f97316"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
          <text
            x={150 + dx}
            y={dy + 3}
            textAnchor="middle"
            fill="#f97316"
            fillOpacity="0.32"
            fontSize="7.5"
            fontFamily="monospace"
          >
            {["safe.com", "trust.io", "news.co", "brand.xyz"][i]}
          </text>
        </g>
      ))}
    </svg>
  </VizBase>
);

// ── 7. Analytics dashboard ────────────────────
const ReportingViz = () => (
  <VizBase>
    <svg viewBox="0 0 300 170" width="300" height="170" className="relative z-10">
      <rect
        x="18"
        y="14"
        width="264"
        height="142"
        rx="6"
        fill="rgba(249,115,22,0.03)"
        stroke="#f97316"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      <rect x="18" y="14" width="264" height="22" rx="6" fill="rgba(249,115,22,0.07)" />
      <circle cx="32" cy="25" r="4" fill="#f97316" opacity="0.45" />
      <circle cx="47" cy="25" r="4" fill="#f97316" opacity="0.25" />
      <text x="165" y="29" textAnchor="middle" fill="#f97316" fillOpacity="0.38" fontSize="7.5" fontFamily="monospace">
        Campaign Analytics — Live
      </text>
      <line x1="32" y1="128" x2="175" y2="128" stroke="#f97316" strokeOpacity="0.14" strokeWidth="1" />
      {[
        { x: 48, h: 52 },
        { x: 70, h: 38 },
        { x: 92, h: 62 },
        { x: 114, h: 45 },
        { x: 136, h: 70, w: true },
        { x: 158, h: 55 },
      ].map(({ x, h, w }, i) => (
        <rect
          key={i}
          x={x - 8}
          y={128 - h}
          width="16"
          height={h}
          rx="2"
          fill={w ? "rgba(249,115,22,0.52)" : "rgba(249,115,22,0.16)"}
          stroke="#f97316"
          strokeOpacity={w ? 0.68 : 0.24}
          strokeWidth="1"
        />
      ))}
      {[
        { l: "CTR", v: "3.2%" },
        { l: "CPM", v: "$4.80" },
        { l: "VIEW", v: "82%" },
        { l: "CVR", v: "1.8%" },
      ].map(({ l, v }, i) => (
        <g key={i}>
          <rect
            x="188"
            y={42 + i * 25}
            width="76"
            height="20"
            rx="3"
            fill="rgba(249,115,22,0.06)"
            stroke="#f97316"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
          <text x="198" y={42 + i * 25 + 13} fill="#f97316" fillOpacity="0.42" fontSize="7.5" fontFamily="monospace">
            {l}
          </text>
          <text
            x="258"
            y={42 + i * 25 + 13}
            textAnchor="end"
            fill="#f97316"
            fillOpacity="0.78"
            fontSize="8"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {v}
          </text>
        </g>
      ))}
    </svg>
  </VizBase>
);

const CARD_VISUALS = [
  <NetworkViz key="net" />,
  <FormatsViz key="fmt" />,
  <TargetingViz key="tgt" />,
  <RTBViz key="rtb" />,
  <RetargetingViz key="ret" />,
  <SafetyViz key="safe" />,
  <ReportingViz key="rep" />,
];

// ─────────────────────────────────────────────
// Feature card
// ─────────────────────────────────────────────
interface CardProps {
  feature: (typeof features)[0];
  index: number;
}

const FeatureCard = ({ feature, index }: CardProps) => {
  const Icon = feature.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.24, ease: [0.33, 1, 0.68, 1] }}
      className="flex-shrink-0 flex flex-col rounded-2xl overflow-hidden w-full h-full"
      style={{
        background: "rgba(9, 20, 40, 0.92)",
        border: "1px solid rgba(249,115,22,0.17)",
        boxShadow: "0 8px 48px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(249,115,22,0.08) inset",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {/* futuristic visual */}
      {CARD_VISUALS[index]}

      {/* content */}
      <div className="flex flex-col flex-1 p-7">
        {/* badge row */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(249,115,22,0.13)",
              border: "1px solid rgba(249,115,22,0.32)",
            }}
          >
            <Icon className="w-4 h-4 text-brand-orange-400" />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-widest" style={{ color: "rgba(249,115,22,0.65)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-white mb-3 leading-snug">{feature.title}</h3>

        <p className="text-sm leading-relaxed" style={{ color: "rgba(175, 198, 228, 0.72)" }}>
          {feature.description}
        </p>
      </div>

      {/* bottom accent line */}
      <div
        className="h-px w-full flex-shrink-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.38) 50%, transparent 100%)",
        }}
      />
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// Section header (reused in desktop + mobile)
// ─────────────────────────────────────────────
const SectionHeader = ({ hint = false }: { hint?: boolean }) => (
  <div className="flex-shrink-0 pt-10 pb-6 px-4 text-center">
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="inline-block text-sm font-extrabold uppercase tracking-widest mb-3"
      style={{ color: "rgba(249,115,22,0.75)" }}
    >
      Platform Features
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white"
    >
      PublifyX Display Advertising Features
    </motion.h2>
    {hint && (
      <p className="mt-2 text-xs font-medium" style={{ color: "rgba(180,200,230,0.38)" }}>
        Scroll to explore all features →
      </p>
    )}
  </div>
);

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
const DisplayStickyFeaturesSection = () => {
  // Desktop refs
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    const container = containerRef.current;
    if (!outer || !track || !container) return;

    const setHeight = () => {
      if (outer.offsetParent === null) return;
      const containerWidth = container.offsetWidth;
      const maxTranslate = Math.max(0, track.scrollWidth - containerWidth);
      outer.style.height = `${window.innerHeight + maxTranslate}px`;
    };

    const onScroll = () => {
      if (outer.offsetParent === null) return;
      const rect = outer.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = outer.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = Math.min(1, scrolled / maxScroll);
      const containerWidth = container.offsetWidth;
      const maxTranslate = Math.max(0, track.scrollWidth - containerWidth);

      track.style.transform = `translateX(${-progress * maxTranslate}px)`;

      // Progress bar fill
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }

      // Dot indicators
      const activeIdx = Math.round(progress * (features.length - 1));
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const isActive = i === activeIdx;
        dot.style.backgroundColor = isActive ? "rgb(249,115,22)" : "rgba(255,255,255,0.16)";
        dot.style.transform = isActive ? "scaleX(2.6)" : "scaleX(1)";
      });
    };

    setHeight();
    // Remeasure after fonts/images settle
    const tid = setTimeout(setHeight, 150);

    window.addEventListener("resize", setHeight, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      clearTimeout(tid);
      window.removeEventListener("resize", setHeight);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const sectionBg = {
    background: "linear-gradient(180deg, #05101e 0%, #091628 100%)",
  };

  return (
    <>
      {/* ═══════════════════════════════════════
          DESKTOP (lg+) — sticky horizontal scroll
          ═══════════════════════════════════════ */}
      <div className="hidden lg:block" style={sectionBg}>
        {/* Outer tall div — captures vertical scroll distance */}
        <div ref={outerRef} className="relative">
          {/* Sticky container — pins to viewport for the entire scroll range */}
          <div className="sticky top-0 overflow-hidden flex flex-col" style={{ height: "100vh" }}>
            <div className="max-w-7xl mx-auto w-full px-4">
              <SectionHeader hint />
            </div>

            {/* Horizontal card track — constrained to 7xl */}
            <div ref={containerRef} className="flex-1 flex items-center overflow-hidden max-w-7xl mx-auto w-full px-4">
              <div
                ref={trackRef}
                className="flex flex-row items-stretch h-fit py-4"
                style={{
                  gap: "26px",
                  willChange: "transform",
                }}
              >
                {features.map((feature, i) => (
                  <div
                    key={feature.title}
                    style={{ minWidth: "clamp(280px, 85vw, 420px)", width: "420px", flexShrink: 0 }}
                  >
                    <FeatureCard feature={feature} index={i} />
                  </div>
                ))}
              </div>
            </div>

            {/* Progress bar + dot indicators */}
            <div className="flex-shrink-0 pb-7 max-w-7xl mx-auto w-full px-4 flex items-center gap-4">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {features.map((_, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: i === 0 ? "rgb(249,115,22)" : "rgba(255,255,255,0.16)",
                      transform: i === 0 ? "scaleX(2.6)" : "scaleX(1)",
                      transformOrigin: "left center",
                    }}
                  />
                ))}
              </div>
              {/* Track */}
              <div className="flex-1 rounded-full" style={{ height: "2px", background: "rgba(249,115,22,0.1)" }}>
                <div
                  ref={progressBarRef}
                  className="h-full rounded-full"
                  style={{
                    width: "0%",
                    background: "linear-gradient(90deg, rgba(249,115,22,0.72), rgba(249,115,22,0.36))",
                  }}
                />
              </div>
              <span className="text-xs font-mono flex-shrink-0" style={{ color: "rgba(249,115,22,0.4)" }}>
                {features.length} features
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          MOBILE / TABLET (<lg) — responsive grid
          ═══════════════════════════════════════ */}
      <div className="lg:hidden" style={sectionBg}>
        <SectionHeader />
        <div className="max-w-7xl mx-auto px-4 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayStickyFeaturesSection;
