import { productConfig, siteConfig } from "@/lib/site-config";

// Datos estructurados (schema.org) para mejorar cómo Google y las redes
// sociales interpretan el negocio y el producto protagonista de la landing.
export function StructuredData() {
  const store = {
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

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productConfig.name,
    description: productConfig.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    image: `${siteConfig.url}/opengraph-image`,
    color: productConfig.colors,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: productConfig.currency,
      lowPrice: productConfig.priceDistribuidorDesde,
      highPrice: productConfig.priceDetal,
      offerCount: 3,
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/#producto`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(store) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
    </>
  );
}
