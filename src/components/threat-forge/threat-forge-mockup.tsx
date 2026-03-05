"use client";

/**
 * Visual mockup of ThreatForge UI — built in HTML/CSS/SVG.
 * Colors derived from ThreatForge's actual Midnight theme (styles.css):
 *   Background: oklch(0.145 0 0)  ≈ #1a1a1a
 *   Surface:    oklch(0.269 0 0)  ≈ #3a3a3a
 *   Signal:     #00d97e  (AI ready, active states)
 *   Ember:      #f97316  (warnings)
 *   Mist:       #94a3b8  (secondary text)
 *   Forge cyan: #00c4ff  (brand accent for website representation)
 */

const TF = {
  bg: "#111111",        // oklch(0.145 0 0) — Midnight background
  surface: "#252525",   // oklch(0.269 0 0) — card/surface
  surfaceAlt: "#1c1c1c",// slightly darker variant
  border: "#2e2e2e",    // borders (oklch(0.269 0 0))
  text: "rgba(255,255,255,0.85)",
  textMuted: "#94a3b8", // tf-mist
  signal: "#00d97e",    // tf-signal — AI ready / active
  ember: "#f97316",     // tf-ember — warnings
  red: "rgba(239,68,68,0.9)",
  yellow: "rgba(234,179,8,0.9)",
  cyan: "#00c4ff",      // forge brand accent (website only)
};

export function ThreatForgeMockup() {
  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-2xl"
      style={{
        border: `1px solid rgba(0,196,255,0.2)`,
        background: TF.bg,
        boxShadow: `0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,196,255,0.1)`,
        transform: "rotate(1deg)",
      }}
      aria-hidden="true"
      onMouseEnter={(e) => {
        if (window.innerWidth >= 768) {
          (e.currentTarget as HTMLElement).style.transform = "rotate(0deg)";
        }
      }}
      onMouseLeave={(e) => {
        if (window.innerWidth >= 768) {
          (e.currentTarget as HTMLElement).style.transform = "rotate(1deg)";
        }
      }}
      role="presentation"
    >
      {/* Title bar — macOS-style, dark like the actual Tauri app */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          borderBottom: `1px solid ${TF.border}`,
          background: TF.surfaceAlt,
          padding: "8px 16px",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          <span style={{ height: "10px", width: "10px", borderRadius: "50%", background: "rgba(239,68,68,0.7)", display: "inline-block" }} />
          <span style={{ height: "10px", width: "10px", borderRadius: "50%", background: "rgba(234,179,8,0.7)", display: "inline-block" }} />
          <span style={{ height: "10px", width: "10px", borderRadius: "50%", background: "rgba(34,197,94,0.7)", display: "inline-block" }} />
        </div>
        {/* App title */}
        <span style={{ fontFamily: "monospace", fontSize: "11px", color: TF.cyan, fontWeight: 600, letterSpacing: "0.05em", marginLeft: "8px" }}>
          ThreatForge
        </span>
        <span style={{ fontFamily: "monospace", fontSize: "10px", color: TF.textMuted, opacity: 0.4, marginLeft: "auto" }}>
          cloud-microservices.thf
        </span>
      </div>

      <div style={{ display: "flex", minHeight: "280px" }}>
        {/* Left sidebar — toolbar icons */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          borderRight: `1px solid ${TF.border}`,
          background: TF.surfaceAlt,
          padding: "16px 12px",
        }}>
          {["⬡", "↗", "⊞", "☰"].map((icon, i) => (
            <span
              key={i}
              style={{ fontFamily: "monospace", fontSize: "14px", color: TF.textMuted, opacity: 0.4, cursor: "pointer" }}
            >
              {icon}
            </span>
          ))}
        </div>

        {/* Canvas — DFD diagram area */}
        <div style={{ position: "relative", flex: 1, overflow: "hidden", background: TF.bg, padding: "16px" }}>
          {/* Subtle dot grid — matches the actual app's canvas */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.04,
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* SVG connections */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
            <defs>
              <marker id="tf-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(255,255,255,0.15)" />
              </marker>
              <marker id="tf-arrow-warn" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(239,68,68,0.5)" />
              </marker>
            </defs>
            {/* Browser → API */}
            <line x1="110" y1="52" x2="210" y2="52" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" markerEnd="url(#tf-arrow)" />
            {/* API → Auth (warning, dashed) */}
            <line x1="290" y1="52" x2="378" y2="52" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#tf-arrow-warn)" />
            {/* Auth → DB */}
            <line x1="290" y1="100" x2="220" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" markerEnd="url(#tf-arrow)" />
          </svg>

          {/* Node: Browser Client */}
          <div style={{
            position: "absolute", top: "24px", left: "16px",
            background: TF.surface, border: `1px solid ${TF.border}`,
            borderRadius: "4px", padding: "6px 10px", width: "106px", textAlign: "center",
          }}>
            <div style={{ fontFamily: "monospace", fontSize: "9px", color: TF.textMuted, opacity: 0.5, textTransform: "uppercase", letterSpacing: "0.08em" }}>client</div>
            <div style={{ fontFamily: "monospace", fontSize: "11px", color: TF.text, fontWeight: 500 }}>Browser</div>
          </div>

          {/* Node: API Gateway */}
          <div style={{
            position: "absolute", top: "24px", left: "210px",
            background: TF.surface, border: `1px solid ${TF.border}`,
            borderRadius: "4px", padding: "6px 10px", width: "80px", textAlign: "center",
          }}>
            <div style={{ fontFamily: "monospace", fontSize: "9px", color: TF.textMuted, opacity: 0.5, textTransform: "uppercase", letterSpacing: "0.08em" }}>gateway</div>
            <div style={{ fontFamily: "monospace", fontSize: "11px", color: TF.text, fontWeight: 500 }}>API</div>
          </div>

          {/* Node: Auth Service — STRIDE WARNING */}
          <div style={{
            position: "absolute", top: "24px", left: "378px",
            background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.4)",
            borderRadius: "4px", padding: "6px 10px", width: "90px", textAlign: "center",
          }}>
            <div style={{ fontFamily: "monospace", fontSize: "9px", color: TF.red, textTransform: "uppercase", letterSpacing: "0.08em" }}>⚠ STRIDE</div>
            <div style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(252,165,165,0.9)", fontWeight: 500 }}>Auth Svc</div>
          </div>

          {/* Node: Database */}
          <div style={{
            position: "absolute", top: "120px", left: "160px",
            background: TF.surface, border: `1px solid ${TF.border}`,
            borderRadius: "4px", padding: "6px 10px", width: "80px", textAlign: "center",
          }}>
            <div style={{ fontFamily: "monospace", fontSize: "9px", color: TF.textMuted, opacity: 0.5, textTransform: "uppercase", letterSpacing: "0.08em" }}>storage</div>
            <div style={{ fontFamily: "monospace", fontSize: "11px", color: TF.text, fontWeight: 500 }}>Database</div>
          </div>

          {/* Trust boundary box */}
          <div style={{
            position: "absolute", top: "12px", left: "200px",
            width: "290px", height: "80px",
            border: `1px dashed rgba(0,196,255,0.18)`,
            borderRadius: "6px",
            pointerEvents: "none",
          }}>
            <span style={{
              position: "absolute", top: "-9px", left: "8px",
              fontFamily: "monospace", fontSize: "9px",
              color: "rgba(0,196,255,0.4)",
              background: TF.bg, padding: "0 4px",
            }}>
              trust boundary
            </span>
          </div>
        </div>

        {/* Right panel — threats list */}
        <div style={{
          display: "flex", flexDirection: "column",
          width: "176px",
          borderLeft: `1px solid ${TF.border}`,
          background: TF.surfaceAlt,
        }}>
          <div style={{ borderBottom: `1px solid ${TF.border}`, padding: "8px 12px" }}>
            <span style={{ fontFamily: "monospace", fontSize: "10px", color: TF.textMuted, opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Threats (3)
            </span>
          </div>

          {/* Threat 1 — HIGH */}
          <div style={{ borderBottom: `1px solid rgba(255,255,255,0.04)`, padding: "10px 12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
              <span style={{ fontFamily: "monospace", fontSize: "9px", color: TF.red, textTransform: "uppercase", letterSpacing: "0.06em" }}>HIGH</span>
              <span style={{ fontFamily: "monospace", fontSize: "9px", color: TF.textMuted, opacity: 0.4 }}>S</span>
            </div>
            <div style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(255,255,255,0.65)", lineHeight: "1.4" }}>
              Spoofing: Unauthed access via JWT bypass
            </div>
          </div>

          {/* Threat 2 — MED */}
          <div style={{ borderBottom: `1px solid rgba(255,255,255,0.04)`, padding: "10px 12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
              <span style={{ fontFamily: "monospace", fontSize: "9px", color: TF.yellow, textTransform: "uppercase", letterSpacing: "0.06em" }}>MED</span>
              <span style={{ fontFamily: "monospace", fontSize: "9px", color: TF.textMuted, opacity: 0.4 }}>T</span>
            </div>
            <div style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(255,255,255,0.65)", lineHeight: "1.4" }}>
              Tampering: CSRF on state-changing endpoints
            </div>
          </div>

          {/* Threat 3 — MED */}
          <div style={{ padding: "10px 12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
              <span style={{ fontFamily: "monospace", fontSize: "9px", color: TF.yellow, textTransform: "uppercase", letterSpacing: "0.06em" }}>MED</span>
              <span style={{ fontFamily: "monospace", fontSize: "9px", color: TF.textMuted, opacity: 0.4 }}>I</span>
            </div>
            <div style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(255,255,255,0.65)", lineHeight: "1.4" }}>
              Info Disc: API leaks stack traces in 500s
            </div>
          </div>

          {/* AI ready indicator — matches actual app's signal-green pulse */}
          <div style={{ marginTop: "auto", borderTop: `1px solid ${TF.border}`, padding: "8px 12px", display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{
              height: "6px", width: "6px", borderRadius: "50%",
              background: TF.signal, display: "inline-block",
              animation: "pulse 2s infinite",
            }} />
            <span style={{ fontFamily: "monospace", fontSize: "9px", color: TF.signal, opacity: 0.8 }}>
              AI ready
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
