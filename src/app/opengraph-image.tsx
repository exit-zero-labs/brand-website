import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Exit Zero Labs — Ship clean. Build forward.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0A0F1E",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        gap: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "8px",
            background: "#00D97E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: 700,
            color: "#0A0F1E",
          }}
        >
          {"0"}
        </div>
        <span
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#94A3B8",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Exit Zero Labs
        </span>
      </div>
      <div
        style={{
          fontSize: "64px",
          fontWeight: 700,
          color: "#FAFAF8",
          lineHeight: 1.1,
          maxWidth: "900px",
        }}
      >
        Ship clean. <span style={{ color: "#00D97E" }}>Build forward.</span>
      </div>
      <div
        style={{
          fontSize: "24px",
          color: "#94A3B8",
          lineHeight: 1.5,
          maxWidth: "700px",
        }}
      >
        Indie software, made with care. Makers of Threat Forge, Kinnections, and
        Geo Spot.
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
