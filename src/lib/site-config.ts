// Configuración central del sitio: un solo lugar para actualizar dominio,
// contacto y redes sociales cuando existan las cuentas/número definitivos.
export const siteConfig = {
  name: "Orion Caps",
  // TODO: reemplazar por el dominio real cuando esté comprado/apuntado
  url: "https://orioncaps.com",
  description:
    "Orion Caps: gorras de calidad premium al por mayor y al detal, con personalización y bordado, y envíos a todo el país.",
  keywords: [
    "gorras al por mayor",
    "gorras personalizadas",
    "gorras al detal",
    "distribuidor de gorras",
    "gorras bordadas",
    "venta de gorras",
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
