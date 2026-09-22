"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section id="cotizar" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-br from-gold-500/10 via-black-800 to-black-800 p-10 text-center md:p-16"
      >
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          ¿Listo para surtir tu tienda?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-black-300">
          Escríbenos con la cantidad y los modelos que necesitas. Te
          respondemos con tu cotización en menos de 24 horas.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="https://wa.me/573000000000" target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:ventas@orioncaps.com">ventas@orioncaps.com</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
