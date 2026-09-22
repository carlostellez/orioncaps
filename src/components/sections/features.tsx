"use client";

import { motion } from "framer-motion";
import { Boxes, Palette, Truck, Users } from "lucide-react";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Boxes,
    title: "Stock permanente",
    description:
      "Más de 40 modelos disponibles en inventario, listos para envío inmediato sin esperar producción.",
  },
  {
    icon: Palette,
    title: "Personalización y bordado",
    description:
      "Bordamos tu logo o diseño desde 12 unidades. Ideal para marcas, equipos y eventos.",
  },
  {
    icon: Truck,
    title: "Envíos a todo el país",
    description:
      "Despachamos pedidos de mayoreo y detal con seguimiento, cubriendo todas las regiones.",
  },
  {
    icon: Users,
    title: "Precios por volumen",
    description:
      "Escalas de descuento según cantidad: entre más compras, menor es tu costo por unidad.",
  },
];

export function Features() {
  return (
    <section id="productos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Todo lo que necesitas para vender gorras
          </h2>
          <p className="mt-4 text-muted">
            Desde una tienda pequeña hasta un distribuidor nacional, tenemos
            un plan de suministro para tu negocio.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <feature.icon className="h-8 w-8 text-gold-500" />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
