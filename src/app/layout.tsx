import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orion Caps | Gorras al por mayor y detal",
  description:
    "Orion Caps: gorras de calidad premium al por mayor y al detal, con personalización y envíos a todo el país.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="bg-black-900 text-white antialiased">{children}</body>
    </html>
  );
}
