"use client";

import { siteConfig } from "@/lib/site-config";

const DEFAULT_MESSAGE = "Hola, quiero información sobre Orion Caps.";

// Icono de WhatsApp: se reproduce el glifo estándar de la marca porque el
// botón enlaza directamente a un chat de WhatsApp (uso permitido por sus
// lineamientos de marca), no es una ilustración decorativa.
function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.236.616 4.328 1.687 6.125L4 29l8.094-1.652A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.354l-.355-.21-4.8.98.99-4.68-.232-.373A9.67 9.67 0 0 1 5.25 15c0-5.93 4.824-10.75 10.754-10.75S26.75 9.07 26.75 15 21.934 24.75 16.004 24.75Zm5.86-7.78c-.32-.16-1.895-.936-2.19-1.043-.294-.107-.508-.16-.722.16-.213.32-.827 1.043-1.014 1.257-.187.213-.373.24-.693.08-.32-.16-1.352-.498-2.575-1.588-.952-.85-1.595-1.9-1.782-2.22-.187-.32-.02-.492.14-.652.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.722-1.74-.99-2.383-.26-.626-.526-.54-.722-.55l-.615-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666s1.147 3.093 1.307 3.307c.16.213 2.257 3.446 5.467 4.833.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.895-.774 2.163-1.522.267-.747.267-1.387.187-1.522-.08-.133-.293-.213-.613-.373Z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="sr-only">Escribir por WhatsApp</span>
    </a>
  );
}
