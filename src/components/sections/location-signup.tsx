"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.contact.address
)}&output=embed`;

type FormState = {
  nombre: string;
  negocio: string;
  ciudad: string;
  cantidad: string;
  telefono: string;
};

const initialState: FormState = {
  nombre: "",
  negocio: "",
  ciudad: "",
  cantidad: "",
  telefono: "",
};

export function LocationSignup() {
  const [form, setForm] = useState<FormState>(initialState);

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      "Hola, quiero registrarme como distribuidor/mayorista de Orion Caps.",
      `Nombre: ${form.nombre}`,
      `Negocio/Tienda: ${form.negocio}`,
      `Ciudad: ${form.ciudad}`,
      `Cantidad estimada mensual: ${form.cantidad}`,
      `Teléfono de contacto: ${form.telefono}`,
    ].join("\n");

    const href = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(href, "_blank", "noreferrer");
  };

  return (
    <section id="ubicacion" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            ¿Dónde nos pueden ubicar?
          </h2>
          <p className="mt-4 text-muted">
            Visítanos, o regístrate como distribuidor y te contactamos por
            WhatsApp.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-border bg-surface/60"
          >
            <iframe
              src={mapSrc}
              title={`Ubicación de ${siteConfig.name}`}
              loading="lazy"
              className="h-64 w-full border-0 grayscale-[20%]"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="space-y-3 p-6">
              <div className="flex items-start gap-3 text-sm text-foreground/90">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                {siteConfig.contact.address}
              </div>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-foreground/90 hover:text-gold-500"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold-500" />
                +{siteConfig.contact.whatsapp}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-sm text-foreground/90 hover:text-gold-500"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold-500" />
                {siteConfig.contact.email}
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 rounded-3xl border border-border bg-surface/60 p-8"
          >
            <p className="text-sm font-semibold text-foreground">
              Regístrate como distribuidor/mayorista
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Nombre completo"
                value={form.nombre}
                onChange={update("nombre")}
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <input
                required
                placeholder="Negocio o tienda"
                value={form.negocio}
                onChange={update("negocio")}
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <input
                required
                placeholder="Ciudad"
                value={form.ciudad}
                onChange={update("ciudad")}
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <input
                placeholder="Cantidad estimada / mes"
                value={form.cantidad}
                onChange={update("cantidad")}
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            <input
              required
              type="tel"
              placeholder="Teléfono / WhatsApp de contacto"
              value={form.telefono}
              onChange={update("telefono")}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold-500"
            />

            <Button type="submit" size="lg" className="w-full">
              Enviar por WhatsApp <Send className="h-4 w-4" />
            </Button>

            <p className="text-xs text-muted">
              Al enviar se abre WhatsApp con tus datos ya escritos, listos
              para confirmar el envío.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
