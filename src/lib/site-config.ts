// Configuración central del sitio: un solo lugar para actualizar dominio,
// contacto, redes sociales y datos del producto cuando existan los
// definitivos.
export const siteConfig = {
  name: "Orion Caps",
  // TODO: reemplazar por el dominio real cuando esté comprado/apuntado
  url: "https://orioncaps.com",
  description:
    "Gorras personalizadas y bordadas para empresas, agencias de marketing y startups. Calidad premium, precios de mayoreo y detal, despacho a toda Colombia.",
  keywords: [
    "Orion Cap",
    "Orion Caps",
    "gorras personalizadas para empresas",
    "gorras corporativas Colombia",
    "gorras publicitarias",
    "merchandising corporativo gorras",
    "regalos corporativos gorras",
    "gorras con logo bordado",
    "gorras para agencias de marketing",
    "gorras para eventos corporativos",
    "dotación empresarial gorras",
    "gorras al por mayor Bogotá",
    "proveedor de gorras al por mayor Colombia",
    "gorra premium urbana",
    "gorras bordado 3D",
    "gorras al detal",
  ],
  locale: "es_CO",
  contact: {
    // TODO: reemplazar por el número real de WhatsApp (formato internacional, sin +)
    whatsapp: "573000000000",
    email: "ventas@orioncaps.com",
    address: "Calle 151 # 11 - 86, Bogotá, Colombia",
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
    "Diseño premium de inspiración urbana con acabado texturizado mate, logo bordado en relieve (puff 3D) y construcción de alta durabilidad — ideal para dotar equipos, agencias y marcas que buscan calidad en cada detalle.",
  // TODO: precio de referencia, confirmar antes de publicar
  priceDetal: 89900,
  priceMayoreoDesde: 65000,
  priceDistribuidorDesde: 52000,
  currency: "COP",
  colors: ["Negro Onix", "Gris Grafito", "Azul Marino", "Verde Militar"],
  // Tonos aproximados solo para el selector visual del hero; ajustar cuando
  // haya fotografía real del producto.
  colorSwatches: [
    { name: "Negro Onix", hex: "#111214" },
    { name: "Gris Grafito", hex: "#4b4d52" },
    { name: "Azul Marino", hex: "#1c2a4a" },
    { name: "Verde Militar", hex: "#3f4a34" },
  ],
  fit: "Ajuste snapback (talla única ajustable)",
} as const;

// Modelos que se muestran en el carrusel del hero. Son productos DISTINTOS
// (no colores del mismo producto) — el primero es el producto insignia
// (mismo nombre/precio/descripción que productConfig, arriba). Los otros
// tres son modelos de EJEMPLO: nombres, descripciones y precios
// placeholder, fáciles de reemplazar por el catálogo real.
export const heroProducts = [
  {
    slug: "snapback-classic",
    name: productConfig.name,
    tagline: "Diseño urbano, calidad premium",
    description: productConfig.description,
    price: productConfig.priceDetal,
    accentHex: "#111214", // Negro Onix
  },
  {
    slug: "trucker",
    name: "Orion Cap Trucker",
    tagline: "Frescura para el día a día",
    description:
      "Panel frontal estructurado y malla trasera transpirable, ideal para climas cálidos y uso diario.",
    price: 79900,
    accentHex: "#1c2a4a", // Azul Marino
  },
  {
    slug: "dad-hat",
    name: "Orion Cap Dad Hat",
    tagline: "Ajuste relajado, estilo desenfadado",
    description:
      "Corte bajo desestructurado en algodón lavado, para un calce cómodo desde el primer uso.",
    price: 69900,
    accentHex: "#4b4d52", // Gris Grafito
  },
  {
    slug: "bordado-premium",
    name: "Orion Cap Bordado Premium",
    tagline: "La edición más exclusiva",
    description:
      "Bordado 3D XL y detalles en cuero genuino en la correa trasera, para quienes buscan un extra de exclusividad.",
    price: 109900,
    accentHex: "#3f4a34", // Verde Militar
  },
] as const;

// Preguntas frecuentes, reutilizadas tanto en la sección visual (FAQ) como
// en el JSON-LD de FAQPage para SEO (rich snippets en resultados de Google).
export const faqs = [
  {
    question: `¿Qué tallas o ajuste tiene el ${productConfig.name}?`,
    answer: productConfig.fit,
  },
  {
    question: "¿En qué colores está disponible?",
    answer: `Actualmente en ${productConfig.colors.join(", ")}. Consulta disponibilidad de cada color al momento de cotizar.`,
  },
  {
    question: "¿Cuál es la cantidad mínima para comprar al por mayor?",
    answer:
      "El precio de mayoreo aplica desde 12 unidades. Para el nivel distribuidor, el mínimo es de 100 unidades.",
  },
  {
    question: "¿Hacen bordado personalizado sobre este modelo?",
    answer:
      "Sí, podemos bordar tu logo sobre el mismo molde desde 12 unidades. Envíanos tu diseño y te confirmamos el costo.",
  },
  {
    question: "¿Cuáles son los tiempos de entrega?",
    answer:
      "Pedidos en stock se despachan en 24-48 horas. Pedidos con bordado personalizado tardan entre 5 y 8 días hábiles.",
  },
  {
    question: "¿Hacen pedidos para empresas, agencias o eventos corporativos?",
    answer:
      "Sí, es uno de nuestros principales enfoques: dotamos equipos, campañas y activaciones de agencias de marketing, startups y empresas con gorras personalizadas y facturación empresarial.",
  },
] as const;
