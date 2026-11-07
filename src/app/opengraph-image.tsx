import { ImageResponse } from "next/og";

export const alt = "Webtextit — software your company can run";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3efe6",
          color: "#1a1612",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 32 }}>Webtextit</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1, letterSpacing: -2, maxWidth: 920 }}>
            Software your company can actually run.
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#5c564e" }}>
            Apps, websites, custom software, ERP, CMS, and SaaS.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
