import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} - Gorras personalizadas para empresas`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#17130f",
          backgroundImage:
            "radial-gradient(circle at 22% 25%, rgba(197,160,89,0.35), transparent 45%), radial-gradient(circle at 80% 85%, rgba(197,160,89,0.2), transparent 40%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 96,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -2,
          }}
        >
          Orion
          <span style={{ color: "#c5a059", marginLeft: 4 }}>Caps</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 32,
            color: "#a39a86",
          }}
        >
          Gorras personalizadas para empresas
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            padding: "12px 28px",
            borderRadius: 999,
            backgroundColor: "#a37e36",
            color: "#17130f",
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          Calidad premium · Precios de mayoreo
        </div>
      </div>
    ),
    { ...size }
  );
}
