import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Threat Forge — Open-Source Threat Modeling by Exit Zero Labs";
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
            background: "#6366F1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: 700,
            color: "white",
          }}
        >
          {"⚒"}
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
          Threat Forge
        </span>
      </div>
      <div
        style={{
          fontSize: "56px",
          fontWeight: 700,
          color: "#FAFAF8",
          lineHeight: 1.1,
          maxWidth: "900px",
        }}
      >
        Model threats{" "}
        <span style={{ color: "#6366F1" }}>before they model you.</span>
      </div>
      <div
        style={{
          fontSize: "24px",
          color: "#94A3B8",
          lineHeight: 1.5,
          maxWidth: "700px",
        }}
      >
        Open-source threat modeling. STRIDE analysis, AI-assisted threats,
        git-friendly YAML. Free forever.
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
