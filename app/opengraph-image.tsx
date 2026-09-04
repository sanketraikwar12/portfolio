import {ImageResponse} from "next/og";

import {portfolioData} from "@/data/portfolio";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          background:
            "radial-gradient(circle at top, rgba(34,211,238,0.3), transparent 38%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.22), transparent 20%), linear-gradient(135deg, #07111f 0%, #0b1220 55%, #111827 100%)",
          color: "white"
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "14px",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#67e8f9"
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#22d3ee"
            }}
          />
          Recruiter-Ready Portfolio
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: 22}}>
          <div style={{fontSize: 74, fontWeight: 700}}>{portfolioData.name}</div>
          <div
            style={{
              fontSize: 40,
              lineHeight: 1.25,
              color: "#cbd5e1",
              maxWidth: 900
            }}
          >
            {portfolioData.headline}
          </div>
        </div>
      </div>
    ),
    size
  );
}
