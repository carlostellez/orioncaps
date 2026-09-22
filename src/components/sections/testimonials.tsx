"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Laura Martínez",
    role: "Dueña, Tienda Urbana",
    quote:
      "Llevamos dos años comprando por mayoreo con Orion Caps. La calidad es constante y los tiempos de entrega siempre se cumplen.",
  },
  {
    name: "Carlos Ramírez",
    role: "Distribuidor regional",
    quote:
      "El programa de distribuidor cambió nuestro margen. Precios netos claros y un asesor que responde rápido.",
  },
  {
    name: "Andrea Gómez",
    role: "Marca de streetwear",
    quote:
      "El bordado personalizado quedó exactamente como lo diseñamos. Ahora es nuestro proveedor fijo de gorras.",
  },
];

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

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </p>
                <p className="mt-6 text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
