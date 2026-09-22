"use client";

import { motion } from "framer-motion";
import { Building2, Clock, ShieldCheck, Truck } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Bordado 3D propio",
    description:
      "Control de calidad en cada lote, sobre el mismo molde en todos los pedidos.",
  },
  {
    icon: Clock,
    title: "Respuesta en menos de 24h",
    description: "Cotización directa, sin intermediarios ni formularios que nadie responde.",
  },
  {
    icon: Truck,
    title: "Envíos a toda Colombia",
    description: "Desde Bogotá, con despacho a nivel nacional para pedidos de cualquier tamaño.",
  },
];

// TODO: reemplazar por los logos reales de empresas/agencias que ya
// compran, apenas existan. Mientras tanto se muestra como espacio
// reservado (no se inventan nombres de clientes ni logos falsos).
const CLIENT_LOGO_SLOTS = 6;

export function About() {
  return (
    <section id="nosotros" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Nosotros
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Hecho para equipos que no pueden fallar
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              En {siteConfig.name} diseñamos y producimos gorras premium
              pensadas para empresas, agencias y marcas que necesitan quedar
              bien con cada entrega. Bordado propio, control de calidad en
              cada lote y atención directa con quien está detrás del pedido
              — sin intermediarios ni sorpresas de última hora.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {differentiators.map((item) => (
                <div key={item.title}>
                  <item.icon className="h-6 w-6 text-accent" />
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-border bg-surface/60 p-8"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Building2 className="h-4 w-4 text-accent" />
              Marcas que confían en {siteConfig.name}
            </div>
            <p className="mt-1 text-xs text-muted">
              Este espacio está listo para tus logos reales — se agregan
              apenas los tengas.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {Array.from({ length: CLIENT_LOGO_SLOTS }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-16 items-center justify-center rounded-xl border border-dashed border-border-strong text-[10px] font-medium uppercase tracking-wide text-muted"
                >
                  Logo
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
