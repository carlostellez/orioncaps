"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { productConfig, siteConfig } from "@/lib/site-config";

const priceFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: productConfig.currency,
  maximumFractionDigits: 0,
});

export function Hero() {
  const [activeColor, setActiveColor] = useState<
    (typeof productConfig.colorSwatches)[number]
  >(productConfig.colorSwatches[0]);

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

          {/* Selector de color: interactivo, cambia el acento de la tarjeta de producto */}
          <div className="mt-6">
            <p className="text-xs font-medium text-muted">
              Color: <span className="text-foreground">{activeColor.name}</span>
            </p>
            <div className="mt-2 flex gap-2">
              {productConfig.colorSwatches.map((swatch) => (
                <button
                  key={swatch.name}
                  type="button"
                  onClick={() => setActiveColor(swatch)}
                  aria-label={swatch.name}
                  aria-pressed={activeColor.name === swatch.name}
                  className="h-8 w-8 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background transition-transform hover:scale-110"
                  style={{
                    backgroundColor: swatch.hex,
                    outline:
                      activeColor.name === swatch.name
                        ? "2px solid var(--color-gold-500)"
                        : "none",
                    outlineOffset: 2,
                  }}
                />
              ))}
            </div>
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
          className="relative mx-auto w-full max-w-md md:justify-self-end"
        >
          <div
            className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-background transition-colors duration-500"
            style={{
              boxShadow: `0 0 0 1px transparent, 0 40px 80px -20px ${activeColor.hex}55`,
            }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <span
                className="text-8xl"
                role="img"
                aria-label={`${productConfig.name} en color ${activeColor.name}`}
              >
                {"🧢"}
              </span>
            </div>
          </div>

          {/* Tarjeta flotante: reseñas (dato de ejemplo, pendiente de confirmar) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -top-4 -right-4 flex items-center gap-2 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-lg backdrop-blur"
          >
            <div className="flex -space-x-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">4.9/5</p>
              <p className="text-[11px] text-muted">+120 pedidos*</p>
            </div>
          </motion.div>

          {/* Tarjeta flotante: precio + disponibilidad */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-lg backdrop-blur"
          >
            <p className="text-[11px] text-muted">Desde</p>
            <p className="text-lg font-semibold text-foreground">
              {priceFormatter.format(productConfig.priceDistribuidorDesde)}
            </p>
          </motion.div>
        </motion.div>
      </div>

      <p className="mx-auto mt-6 max-w-6xl text-right text-[11px] text-muted md:pr-2">
        *Calificación y pedidos de ejemplo, pendientes de reemplazar por datos reales.
      </p>
    </section>
  );
}
