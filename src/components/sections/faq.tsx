"use client";

import { motion } from "framer-motion";
import { MessageCircleQuestion } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { productConfig, siteConfig } from "@/lib/site-config";

const faqs = [
  {
    question: `¿Qué tallas o ajuste tiene el ${productConfig.name}?`,
    answer: productConfig.fit,
  },
  {
    question: "¿En qué colores está disponible?",
    answer: `Actualmente en ${productConfig.colors.join(", ")}. Consulta disponibilidad de cada color al momento de cotizar.`,
  },
  {
    question: "¿Cuál es la cantidad mínima para comprar al por mayor?",
    answer:
      "El precio de mayoreo aplica desde 12 unidades. Para el nivel distribuidor, el mínimo es de 100 unidades.",
  },
  {
    question: "¿Hacen bordado personalizado sobre este modelo?",
    answer:
      "Sí, podemos bordar tu logo sobre el mismo molde desde 12 unidades. Envíanos tu diseño y te confirmamos el costo.",
  },
  {
    question: "¿Cuáles son los tiempos de entrega?",
    answer:
      "Pedidos en stock se despachan en 24-48 horas. Pedidos con bordado personalizado tardan entre 5 y 8 días hábiles.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,300px)_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <MessageCircleQuestion className="h-9 w-9 text-gold-500" />
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-sm text-muted">
              ¿No encuentras lo que buscas? Escríbenos directamente y te
              respondemos.
            </p>
            <Button variant="outline" size="sm" className="mt-5" asChild>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                Preguntar por WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
