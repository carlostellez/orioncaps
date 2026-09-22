import { faqs, productConfig, siteConfig } from "@/lib/site-config";

// Datos estructurados (schema.org) para mejorar cómo Google y las redes
// sociales interpretan el negocio, el producto protagonista y las
// preguntas frecuentes de la landing (rich snippets de FAQ en resultados
// de búsqueda).
export function StructuredData() {
  const store = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon`,
    image: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: `+${siteConfig.contact.whatsapp}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 151 # 11 - 86",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Agencias de marketing, empresas, startups y emprendedores que buscan gorras personalizadas al por mayor",
    },
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

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
