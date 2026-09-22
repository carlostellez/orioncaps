"use client";

import { motion } from "framer-motion";
import { Layers, Ruler, Settings2, Stamp } from "lucide-react";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Materiales y construcción del {productConfig.name}
          </h2>
          <p className="mt-4 text-muted">
            Cada detalle está pensado para que la gorra se vea igual de bien
            el primer día que después de meses de uso.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((detail, i) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <detail.icon className="h-8 w-8 text-gold-500" />
                <CardTitle className="mt-4">{detail.title}</CardTitle>
                <CardDescription>{detail.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 rounded-2xl border border-border bg-surface/60 p-8"
        >
          <p className="text-sm font-semibold text-foreground">
            Colores disponibles
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {productConfig.colors.map((color) => (
              <span
                key={color}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/90"
              >
                {color}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
