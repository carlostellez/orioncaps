"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { productConfig, siteConfig } from "@/lib/site-config";

const perks = [
  { icon: Clock, label: "Respuesta en menos de 24h" },
  { icon: ShieldCheck, label: "Bordado 3D incluido" },
  { icon: Truck, label: "Envíos a todo el país" },
];

export function CallToAction() {
  return (
    <section id="cotizar" className="px-6 py-24">
      {/* Banda oscura fija (no sigue el tema claro/oscuro): un momento de
          cierre con más presencia que el resto de secciones */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-black-900 px-8 py-16 text-center md:px-16 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% -10%, rgba(197,160,89,0.25), transparent 55%)",
          }}
        />

        <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
          {siteConfig.name}
        </p>
        <h2 className="relative mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
          ¿Listo para pedir tu {productConfig.name}?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/60">
          Escríbenos con la cantidad, el color y la talla que necesitas. Te
          respondemos con tu cotización en menos de 24 horas.
        </p>

        <div className="relative mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
            asChild
          >
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          </Button>
        </div>

        <div className="relative mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8">
          {perks.map((perk) => (
            <div key={perk.label} className="flex items-center gap-2 text-sm text-white/60">
              <perk.icon className="h-4 w-4 text-gold-500" />
              {perk.label}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
