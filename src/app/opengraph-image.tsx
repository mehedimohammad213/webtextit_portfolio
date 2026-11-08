import { ImageResponse } from "next/og";

export const alt = "WebText IT — software your company can run";
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
          background: "linear-gradient(145deg, #f3f7fc 0%, #d8e0f0 55%, #c5d8f5 100%)",
          color: "#001848",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#001848",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4aa3ff",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            W
          </div>
          <span>
            WebText <span style={{ color: "#0060d8", fontStyle: "italic" }}>IT</span>
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1, letterSpacing: -2, maxWidth: 920 }}>
            Software your company can actually run.
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#4a5c78" }}>
            Apps, websites, custom software, ERP, CMS, and SaaS.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
