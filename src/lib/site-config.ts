// Configuración central del sitio: un solo lugar para actualizar dominio,
// contacto, redes sociales y datos del producto cuando existan los
// definitivos.
export const siteConfig = {
  name: "Orion Caps",
  // TODO: reemplazar por el dominio real cuando esté comprado/apuntado
  url: "https://orioncaps.com",
  description:
    "Orion Cap: la gorra insignia de Orion Caps. Diseño premium urbano, bordado 3D y materiales de alta durabilidad. Disponible al detal y por mayoreo.",
  keywords: [
    "Orion Cap",
    "gorra premium",
    "gorra urbana",
    "gorras al por mayor",
    "gorras personalizadas",
    "gorras al detal",
    "gorra bordada",
    "Orion Caps",
  ],
  locale: "es_CO",
  contact: {
    // TODO: reemplazar por el número real de WhatsApp (formato internacional, sin +)
    whatsapp: "573000000000",
    email: "ventas@orioncaps.com",
  },
  social: {
    // TODO: reemplazar por las URLs reales cuando existan las cuentas
    linkedin: "https://www.linkedin.com/company/orion-caps",
    instagram: "https://www.instagram.com/orioncaps",
    facebook: "https://www.facebook.com/orioncaps",
  },
} as const;

// Producto protagonista de la landing. Precio y detalles marcados como
// placeholder hasta que se confirmen los definitivos.
export const productConfig = {
  name: "Orion Cap",
  tagline: "La gorra insignia de Orion Caps",
  description:
    "Diseño premium de inspiración urbana, con acabado texturizado mate, logo bordado en relieve (puff 3D) y construcción de alta durabilidad.",
  // TODO: precio de referencia, confirmar antes de publicar
  priceDetal: 89900,
  priceMayoreoDesde: 65000,
  priceDistribuidorDesde: 52000,
  currency: "COP",
  colors: ["Negro Onix", "Gris Grafito", "Azul Marino", "Verde Militar"],
  fit: "Ajuste snapback (talla única ajustable)",
} as const;
