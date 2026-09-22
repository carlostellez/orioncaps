import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";

import { productConfig, siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "#producto", label: "El producto" },
  { href: "#mercado", label: "Mercado" },
  { href: "#mayoreo", label: "Mayoreo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#ubicacion", label: "Ubícanos" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

const contactLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Escríbenos directo",
    href: `https://wa.me/${siteConfig.contact.whatsapp}`,
  },
  {
    icon: Mail,
    label: "Correo",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: siteConfig.contact.address,
    href: "#ubicacion",
  },
];

const socialLinks = [
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: siteConfig.social.instagram, label: "Instagram", icon: Instagram },
  { href: siteConfig.social.facebook, label: "Facebook", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 border-b border-border pb-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black-900 text-sm font-black text-gold-500">
                O
              </span>
              Orion<span className="text-gold-500">Caps</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {productConfig.name} — diseño premium de gorras para venta al detal, mayoreo y
              distribución en toda Colombia.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-gold-500 hover:text-gold-500"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Navegación</p>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-gold-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-xs">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Contacto</p>
            <div className="mt-4 flex flex-col gap-4">
              {contactLinks.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background text-gold-500">
                    <contact.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted">{contact.label}</span>
                    <span className="block text-sm text-foreground/80 transition-colors group-hover:text-gold-500">
                      {contact.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Orion Caps. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            Hecho con
            <span className="text-gold-500">&#9733;</span>
            en Bogotá, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
