"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { productConfig } from "@/lib/site-config";

const priceFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: productConfig.currency,
  maximumFractionDigits: 0,
});

// Fondo decorativo que se desplaza más lento que las tarjetas
// (la diferencia de velocidad es lo que crea la sensación de profundidad).
function ParallaxBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-30"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, rgba(197,160,89,0.18), transparent 40%), radial-gradient(circle at 75% 70%, rgba(197,160,89,0.12), transparent 40%)",
          }}
        />
      </motion.div>
    </div>
  );
}

// Cada color se desplaza a una velocidad distinta al hacer scroll
// (parallax): las columnas pares suben más rápido que las impares.
function ColorCard({
  swatch,
  speed,
}: {
  swatch: (typeof productConfig.colorSwatches)[number];
  speed: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <motion.div ref={ref} style={{ y }} className="group">
      <div
        className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl border border-border p-6 transition-transform duration-300 group-hover:-translate-y-1"
        style={{ backgroundColor: swatch.hex }}
      >
        <span
          className="absolute inset-0 flex items-center justify-center text-7xl opacity-90"
          role="img"
          aria-label={`${productConfig.name} en color ${swatch.name}`}
        >
          {"🧢"}
        </span>

        {/* Degradado de legibilidad para que la tarjeta de info siempre
            contraste, sin depender de color-mix() */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 55%)",
          }}
        />

        <div className="relative rounded-2xl bg-background/90 p-4 backdrop-blur">
          <p className="text-sm font-semibold text-foreground">{swatch.name}</p>
          <p className="mt-1 text-xs text-muted">
            Desde {priceFormatter.format(productConfig.priceDistribuidorDesde)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductShowcase() {
  return (
    <section id="colores" className="relative px-6 py-32">
      <ParallaxBackdrop />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            El {productConfig.name} en cada color
          </h2>
          <p className="mt-4 text-muted">
            La misma construcción premium, en los {productConfig.colorSwatches.length}{" "}
            tonos disponibles. Desplaza la página para verlos en movimiento.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {productConfig.colorSwatches.map((swatch, i) => (
            <ColorCard
              key={swatch.name}
              swatch={swatch}
              speed={i % 2 === 0 ? 36 : -36}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
