"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
          <Badge>Mayoreo y detal en toda la república</Badge>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
            Gorras de calidad premium,{" "}
            <span className="text-gold-500">al precio de mayoreo</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            En Orion Caps confeccionamos y distribuimos gorras para tiendas,
            distribuidores y marcas. Compra por unidad o por volumen, con
            personalización y bordado incluidos.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#cotizar">
                Solicitar cotización <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#productos">Ver catálogo</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold-500" />
              Calidad garantizada
            </div>
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-gold-500" />
              Envíos a todo el país
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
            <span className="text-8xl">{"🧢"}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
