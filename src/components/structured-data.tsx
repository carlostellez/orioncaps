import { siteConfig } from "@/lib/site-config";

// Datos estructurados (schema.org) para mejorar cómo Google y las redes
// sociales interpretan el negocio (rich results, panel de conocimiento).
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon`,
    image: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: `+${siteConfig.contact.whatsapp}`,
    priceRange: "$$",
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
