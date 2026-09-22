"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { productConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Laura Martínez",
    role: "Dueña, Tienda Urbana",
    quote: `El ${productConfig.name} es de lo mejor que hemos vendido. El bordado 3D se nota apenas lo ves, y la calidad se mantiene pedido tras pedido.`,
  },
  {
    name: "Carlos Ramírez",
    role: "Distribuidor regional",
    quote: `El programa de distribuidor con el ${productConfig.name} cambió nuestro margen. Precios netos claros y un asesor que responde rápido.`,
  },
  {
    name: "Andrea Gómez",
    role: "Marca de streetwear",
    quote: `Personalizamos el ${productConfig.name} con nuestro logo y quedó exactamente como lo diseñamos. Ahora es nuestra gorra insignia.`,
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonios" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Con la confianza de tiendas y distribuidores
          </h2>
        </motion.div>

        {/* Grid escalonado: la tarjeta del medio sube un poco para romper
            la rígidez de tres columnas iguales */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "relative overflow-hidden rounded-3xl bg-surface/60 p-8",
                i === 1 && "md:-translate-y-6"
              )}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 text-7xl font-bold leading-none text-gold-500/10 select-none"
              >
                “
              </span>

              <div className="relative flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-sm font-semibold text-accent">
                  {initials(t.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>

              <div className="relative mt-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>

              <p className="relative mt-4 text-sm leading-relaxed text-foreground/90">
                {t.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
