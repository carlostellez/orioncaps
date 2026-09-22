"use client";

import { motion } from "framer-motion";
import { Layers, Ruler, Settings2, Stamp } from "lucide-react";

import { productConfig } from "@/lib/site-config";

const details = [
  {
    icon: Layers,
    title: "Tejido premium",
    description:
      "Mezcla de algodón y ripstop, resistente al uso diario y transpirable para climas cálidos.",
  },
  {
    icon: Stamp,
    title: "Bordado 3D (puff)",
    description:
      "Logo en relieve bordado a mano, con acabado duradero que no se desgasta ni se decolora.",
  },
  {
    icon: Ruler,
    title: "Visera curva reforzada",
    description:
      "Estructura rígida que mantiene su forma con el tiempo y protege del sol sin perder estilo.",
  },
  {
    icon: Settings2,
    title: "Cierre ajustable snapback",
    description: productConfig.fit,
  },
];

export function ProductDetails() {
  return (
    <section id="producto" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Ficha técnica
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Materiales y construcción del {productConfig.name}
            </h2>
            <p className="mt-4 text-muted">
              Cada detalle está pensado para que la gorra se vea igual de
              bien el primer día que después de meses de uso.
            </p>
          </motion.div>

          {/* Lista tipo línea de tiempo: cada renglón numerado, conectado
              por una línea vertical — en vez del grid de tarjetas genérico */}
          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
            <ul className="space-y-10">
              {details.map((detail, i) => (
                <motion.li
                  key={detail.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex gap-6 pl-0"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/40 bg-background text-xs font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2">
                      <detail.icon className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">
                        {detail.title}
                      </h3>
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {detail.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 border-t border-border pt-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Colores disponibles
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            {productConfig.colorSwatches.map((swatch) => (
              <div key={swatch.name} className="flex items-center gap-3">
                <span
                  className="h-9 w-9 shrink-0 rounded-full ring-1 ring-border"
                  style={{ backgroundColor: swatch.hex }}
                />
                <span className="text-sm text-foreground/90">{swatch.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
