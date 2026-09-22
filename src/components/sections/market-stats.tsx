"use client";

import { motion } from "framer-motion";
import { Building2, PackageCheck, Quote, Repeat } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const SOURCE = "Fuente: El Colombiano, 2026";

// Meter (proporción única contra un límite): anillo relleno hasta el
// punto medio del rango 30-40%, con la misma rampa de color (dorado) en
// pista y relleno, tal como indica la guía de visualización de datos.
function ShareMeter() {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const value = 35; // punto medio del rango 30%-40%
  const offset = circumference * (1 - value / 100);

  return (
    <div className="flex items-center gap-5">
      <svg width="128" height="128" viewBox="0 0 128 128" className="shrink-0 -rotate-90">
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke="var(--color-gold-500)"
          strokeOpacity={0.18}
          strokeWidth="12"
        />
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke="var(--color-gold-500)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div>
        <p className="text-3xl font-semibold text-foreground">30–40%</p>
        <p className="mt-1 text-sm text-muted">
          de las ventas de muchas marcas de streetwear
        </p>
      </div>
    </div>
  );
}

const stats = [
  {
    icon: Building2,
    text: "Medellín se consolidó como referente de la moda urbana, impulsando fabricantes, marcas, diseñadores y creadores.",
  },
  {
    icon: Repeat,
    text: "Marcas locales exportan, se expanden y fortalecen la industria nacional.",
  },
  {
    icon: PackageCheck,
    text: "Empresas líderes importan hasta un millón de gorras al año, abasteciendo el mercado colombiano y regional.",
  },
];

export function MarketStats() {
  return (
    <section id="mercado" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge>Datos del sector</Badge>
          <h2 className="mt-6 text-3xl font-bold text-foreground md:text-4xl">
            El mercado habla por sí solo
          </h2>
          <p className="mt-4 text-muted">
            La industria de la gorra en Colombia vive un momento de
            crecimiento y consolidación.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <ShareMeter />
              <p className="mt-2 text-xs text-muted">{SOURCE}</p>
            </div>

            <ul className="space-y-6">
              {stats.map((stat) => (
                <li key={stat.text} className="flex gap-4">
                  <stat.icon className="h-6 w-6 shrink-0 text-gold-500" />
                  <div>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {stat.text}
                    </p>
                    <p className="mt-1 text-xs text-muted">{SOURCE}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center rounded-3xl border border-border bg-surface/60 p-10"
          >
            <Quote className="h-10 w-10 text-gold-500" />
            <p className="mt-6 text-2xl font-semibold leading-snug text-foreground">
              La <span className="text-gold-500">gorra</span> dejó de ser un
              accesorio para convertirse en un símbolo de identidad, estilo y
              cultura.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
