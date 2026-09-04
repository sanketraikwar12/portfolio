import {ImageResponse} from "next/og";

import {portfolioData} from "@/data/portfolio";

export const size = {
  width: 1200,
  height: 600
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "72px",
          background:
            "linear-gradient(135deg, #091120 0%, #111827 48%, #0f172a 100%)",
          color: "white"
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#67e8f9"
          }}
        >
          {portfolioData.title}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 70,
            fontWeight: 700,
            maxWidth: 920
          }}
        >
          {portfolioData.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            lineHeight: 1.35,
            color: "#cbd5e1",
            maxWidth: 980
          }}
        >
          {portfolioData.description}
        </div>
      </div>
    ),
    size
  );
}
