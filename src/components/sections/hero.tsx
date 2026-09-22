"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { productConfig, siteConfig } from "@/lib/site-config";

const priceFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: productConfig.currency,
  maximumFractionDigits: 0,
});

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(197,160,89,0.16), transparent 40%), radial-gradient(circle at 80% 0%, rgba(197,160,89,0.1), transparent 35%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge>Línea insignia {siteConfig.name}</Badge>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
            <span className="text-gold-500">{productConfig.name}</span>: diseño
            urbano, calidad premium
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {productConfig.description}
          </p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-semibold text-foreground">
              {priceFormatter.format(productConfig.priceDetal)}
            </span>
            <span className="text-sm text-muted">precio al detal · unidad</span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#cotizar">
                Consultar disponibilidad <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#producto">Ver detalles del producto</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold-500" />
              Bordado 3D incluido
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold-500" />
              {productConfig.colors.length} colores disponibles
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative aspect-square w-full max-w-md justify-self-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-background md:justify-self-end"
        >
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-8xl" role="img" aria-label={`${productConfig.name}, gorra premium de diseño urbano`}>
              {"🧢"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
