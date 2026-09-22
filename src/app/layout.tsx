import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Analytics } from "@/components/analytics";
import { WhatsAppButton } from "@/components/whatsapp-button";

// Se ejecuta ANTES de pintar la página, para que el tema guardado por la
// persona con el interruptor (ThemeToggle) se aplique de inmediato y no
// haya parpadeo de claro→oscuro al cargar. Si nunca se eligió un tema
// manualmente, no toca nada y el sitio sigue la preferencia del sistema
// (como siempre, vía CSS). Next.js exige que un script "beforeInteractive"
// viva directamente en el root layout.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("orion-theme");
    var resolved =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", resolved === "dark" ? "#0c0a08" : "#fefdfb");
    }
  } catch (e) {}
})();
`;

// Valor por defecto (modo claro); ThemeInitScript y ThemeToggle mantienen
// esta etiqueta <meta name="theme-color"> sincronizada con el tema real
// (del sistema o elegido manualmente) apenas carga el JS.
export const viewport = {
  themeColor: "#fefdfb",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Gorras Personalizadas para Empresas y Eventos`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Moda y accesorios",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Gorras Personalizadas para Empresas y Eventos`,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Gorras personalizadas para empresas`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Gorras Personalizadas para Empresas y Eventos`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <Analytics />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
