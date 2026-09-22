import { Facebook, Instagram, Linkedin } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: siteConfig.social.instagram, label: "Instagram", icon: Instagram },
  { href: siteConfig.social.facebook, label: "Facebook", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-muted md:flex-row">
        <p className="text-foreground">
          Orion<span className="text-gold-500">Caps</span>
        </p>

        <div className="flex gap-6">
          <a href="#productos" className="hover:text-foreground">Productos</a>
          <a href="#mayoreo" className="hover:text-foreground">Mayoreo</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-muted hover:text-gold-500"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p>&copy; {new Date().getFullYear()} Orion Caps. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
