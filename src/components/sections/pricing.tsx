"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { productConfig } from "@/lib/site-config";

const priceFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: productConfig.currency,
  maximumFractionDigits: 0,
});

const tiers = [
  {
    name: "Detal",
    range: "1 - 11 unidades",
    price: productConfig.priceDetal,
    description: `Precio unitario del ${productConfig.name} para compra individual.`,
    features: ["Precio de lista", "Sin mínimo de compra", "Envío estándar"],
    highlighted: false,
  },
  {
    name: "Mayoreo",
    range: "12 - 99 unidades",
    price: productConfig.priceMayoreoDesde,
    priceLabel: "desde",
    description: "Para tiendas y negocios que reabastecen con frecuencia.",
    features: [
      "Hasta 20% de descuento",
      "Bordado personalizado incluido",
      "Envío prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Distribuidor",
    range: "100+ unidades",
    price: productConfig.priceDistribuidorDesde,
    priceLabel: "desde",
    description: "Para distribuidores y marcas con pedidos recurrentes.",
    features: [
      "Precio neto por volumen",
      "Colores exclusivos por pedido",
      "Asesor de cuenta dedicado",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="mayoreo" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Precios del {productConfig.name} según tu volumen
          </h2>
          <p className="mt-4 text-muted">
            Entre más compres, más bajo es tu costo por unidad. Precios de
            referencia, sujetos a confirmación.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "flex flex-col rounded-2xl border p-8",
                tier.highlighted
                  ? "border-gold-500/50 bg-gold-500/[0.06] shadow-xl shadow-gold-500/10"
                  : "border-border bg-surface/60"
              )}
            >
              {tier.highlighted && (
                <span className="mb-4 w-fit rounded-full bg-gold-600 px-3 py-1 text-xs font-semibold text-black-900">
                  Más elegido
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
              <span className="mt-1 inline-block w-fit rounded-full bg-gold-500/15 px-2 py-0.5 text-xs font-semibold text-foreground">
                {tier.range}
              </span>

              <p className="mt-4 text-2xl font-semibold text-foreground">
                {tier.priceLabel ? `${tier.priceLabel} ` : ""}
                {priceFormatter.format(tier.price)}
                <span className="text-sm font-normal text-muted"> / unidad</span>
              </p>
              <p className="mt-3 text-sm text-muted">{tier.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8"
                variant={tier.highlighted ? "default" : "outline"}
                asChild
              >
                <a href="#cotizar">Cotizar {tier.name.toLowerCase()}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
