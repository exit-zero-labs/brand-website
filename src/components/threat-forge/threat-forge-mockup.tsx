"use client";

/**
 * Visual mockup of ThreatForge UI — built in HTML/CSS/SVG.
 * No external assets required.
 */
export function ThreatForgeMockup() {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-forge/30 bg-zero shadow-2xl shadow-forge/10"
      aria-hidden="true"
      style={{ transform: "rotate(1deg)" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.transform = "rotate(0deg)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.transform = "rotate(1deg)")
      }
      role="presentation"
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-white/5 bg-dusk px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="font-mono text-xs text-forge font-medium tracking-wide ml-2">
          ThreatForge
        </span>
        <span className="font-mono text-[10px] text-mist/40 ml-auto">
          cloud-microservices.thf
        </span>
      </div>

      <div className="flex" style={{ minHeight: "280px" }}>
        {/* Left toolbar */}
        <div className="flex flex-col gap-4 border-r border-white/5 bg-dusk/60 px-3 py-4">
          {["⬡", "↗", "⊞", "☰"].map((icon, i) => (
            <span
              key={i}
              className="font-mono text-base text-mist/40 hover:text-mist cursor-pointer"
            >
              {icon}
            </span>
          ))}
        </div>

        {/* Canvas area */}
        <div className="relative flex-1 overflow-hidden bg-zero/80 p-4">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* DFD Nodes */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ overflow: "visible" }}
          >
            {/* Connections */}
            <defs>
              <marker
                id="arrow"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(255,255,255,0.15)" />
              </marker>
              <marker
                id="arrow-warn"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(239,68,68,0.5)" />
              </marker>
            </defs>

            {/* Browser → API */}
            <line
              x1="110"
              y1="52"
              x2="210"
              y2="52"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
              markerEnd="url(#arrow)"
            />
            {/* API → Auth (warning) */}
            <line
              x1="290"
              y1="52"
              x2="380"
              y2="52"
              stroke="rgba(239,68,68,0.4)"
              strokeWidth="1.5"
              markerEnd="url(#arrow-warn)"
              strokeDasharray="4 2"
            />
            {/* Auth → DB */}
            <line
              x1="290"
              y1="100"
              x2="220"
              y2="140"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
              markerEnd="url(#arrow)"
            />
          </svg>

          {/* Node: Browser Client */}
          <div
            className="absolute top-6 left-4 rounded border border-white/10 bg-dusk/80 px-2.5 py-1.5 text-center"
            style={{ width: "106px" }}
          >
            <div className="font-mono text-[9px] text-mist/50 uppercase tracking-wider">
              client
            </div>
            <div className="font-mono text-[11px] text-white/80 font-medium">
              Browser
            </div>
          </div>

          {/* Node: API Gateway */}
          <div
            className="absolute top-6 rounded border border-white/10 bg-dusk/80 px-2.5 py-1.5 text-center"
            style={{ left: "210px", width: "80px" }}
          >
            <div className="font-mono text-[9px] text-mist/50 uppercase tracking-wider">
              gateway
            </div>
            <div className="font-mono text-[11px] text-white/80 font-medium">
              API
            </div>
          </div>

          {/* Node: Auth Service — WARNING */}
          <div
            className="absolute top-6 rounded border border-red-500/50 bg-red-950/40 px-2.5 py-1.5 text-center"
            style={{ left: "378px", width: "90px" }}
          >
            <div className="font-mono text-[9px] text-red-400/80 uppercase tracking-wider">
              ⚠ stride
            </div>
            <div className="font-mono text-[11px] text-red-300 font-medium">
              Auth Svc
            </div>
          </div>

          {/* Node: Database */}
          <div
            className="absolute rounded border border-white/10 bg-dusk/80 px-2.5 py-1.5 text-center"
            style={{ top: "120px", left: "160px", width: "80px" }}
          >
            <div className="font-mono text-[9px] text-mist/50 uppercase tracking-wider">
              storage
            </div>
            <div className="font-mono text-[11px] text-white/80 font-medium">
              Database
            </div>
          </div>

          {/* Trust boundary */}
          <div
            className="absolute border border-dashed border-forge/20 rounded-lg"
            style={{
              top: "12px",
              left: "200px",
              width: "290px",
              height: "80px",
              pointerEvents: "none",
            }}
          >
            <span className="absolute -top-2.5 left-2 font-mono text-[9px] text-forge/40 bg-zero px-1">
              trust boundary
            </span>
          </div>
        </div>

        {/* Right panel — threats */}
        <div className="flex w-44 flex-col border-l border-white/5 bg-dusk/40">
          <div className="border-b border-white/5 px-3 py-2">
            <span className="font-mono text-[10px] text-mist/60 uppercase tracking-wider">
              Threats (3)
            </span>
          </div>
          <div className="space-y-0 overflow-hidden">
            {/* Threat 1 */}
            <div className="border-b border-white/[0.04] px-3 py-2.5">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[9px] text-red-400 uppercase tracking-wide">
                  HIGH
                </span>
                <span className="font-mono text-[9px] text-mist/40">S</span>
              </div>
              <div className="font-mono text-[10px] text-white/70 leading-tight">
                Spoofing: Unauthed access via JWT bypass
              </div>
            </div>
            {/* Threat 2 */}
            <div className="border-b border-white/[0.04] px-3 py-2.5">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[9px] text-yellow-400 uppercase tracking-wide">
                  MED
                </span>
                <span className="font-mono text-[9px] text-mist/40">T</span>
              </div>
              <div className="font-mono text-[10px] text-white/70 leading-tight">
                Tampering: CSRF on state-changing endpoints
              </div>
            </div>
            {/* Threat 3 */}
            <div className="px-3 py-2.5">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[9px] text-yellow-400 uppercase tracking-wide">
                  MED
                </span>
                <span className="font-mono text-[9px] text-mist/40">I</span>
              </div>
              <div className="font-mono text-[10px] text-white/70 leading-tight">
                Info Disc: API leaks stack traces in 500s
              </div>
            </div>
          </div>
          {/* AI assist hint */}
          <div className="mt-auto border-t border-white/5 px-3 py-2">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
              <span className="font-mono text-[9px] text-signal/70">
                AI ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
