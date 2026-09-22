"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroProducts, siteConfig } from "@/lib/site-config";

const priceFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

const AUTOPLAY_MS = 5500;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = heroProducts[index];

  const goTo = (i: number) => setIndex((i + heroProducts.length) % heroProducts.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Autoplay: avanza sola cada ~5.5s, se reinicia al navegar manualmente y
  // se detiene mientras el mouse está sobre el hero.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroProducts.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index, paused]);

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 transition-[background-image] duration-500"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, ${active.accentHex}33, transparent 40%), radial-gradient(circle at 80% 0%, rgba(197,160,89,0.1), transparent 35%)`,
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Izquierda: información del producto activo, cambia con cada slide */}
        <div>
          <Badge>Colección {siteConfig.name}</Badge>

          <div className="mt-6 min-h-[2.5em] overflow-hidden md:min-h-[2em]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={active.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl"
              >
                <span className="text-accent">{active.name}</span>
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="mt-4 h-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={active.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-medium text-accent"
              >
                {active.tagline}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-4 min-h-[5.5em]">
            <AnimatePresence mode="wait">
              <motion.p
                key={active.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-xl text-lg leading-relaxed text-muted"
              >
                {active.description}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <AnimatePresence mode="wait">
              <motion.span
                key={active.slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-semibold text-foreground"
              >
                {priceFormatter.format(active.price)}
              </motion.span>
            </AnimatePresence>
            <span className="text-sm text-muted">precio al detal · unidad</span>
          </div>

          {/* Miniaturas: funcionan como controles del carrusel */}
          <div className="mt-6">
            <p className="text-xs font-medium text-muted">Elige un modelo</p>
            <div className="mt-2 flex gap-2">
              {heroProducts.map((product, i) => (
                <button
                  key={product.slug}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ver ${product.name}`}
                  aria-pressed={index === i}
                  className="h-8 w-8 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background transition-transform hover:scale-110"
                  style={{
                    backgroundColor: product.accentHex,
                    outline: index === i ? "2px solid var(--color-gold-500)" : "none",
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
              <a href="#producto">Ver todos los modelos</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Bordado 3D incluido
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              {heroProducts.length} modelos disponibles
            </div>
          </div>
        </div>

        {/* Derecha: carrusel de imágenes, una por producto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-md md:justify-self-end"
        >
          <div
            className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-background transition-shadow duration-500"
            style={{
              boxShadow: `0 0 0 1px transparent, 0 40px 80px -20px ${active.accentHex}55`,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex h-full w-full items-center justify-center"
              >
                <span className="text-8xl" role="img" aria-label={active.name}>
                  {"🧢"}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Flechas del carrusel */}
            <button
              type="button"
              onClick={prev}
              aria-label="Modelo anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur transition-colors hover:bg-surface"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Siguiente modelo"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur transition-colors hover:bg-surface"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
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
                <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
              ))}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">4.9/5</p>
              <p className="text-[11px] text-muted">+120 pedidos*</p>
            </div>
          </motion.div>

          {/* Tarjeta flotante: precio del modelo más accesible */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-lg backdrop-blur"
          >
            <p className="text-[11px] text-muted">Modelo {index + 1} de {heroProducts.length}</p>
            <p className="text-lg font-semibold text-foreground">{active.name}</p>
          </motion.div>
        </motion.div>
      </div>

      <p className="mx-auto mt-6 max-w-6xl text-right text-[11px] text-muted md:pr-2">
        *Calificación y pedidos de ejemplo, pendientes de reemplazar por datos reales.
      </p>
    </section>
  );
}
