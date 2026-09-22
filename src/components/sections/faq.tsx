"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuál es la cantidad mínima para comprar al por mayor?",
    answer:
      "El precio de mayoreo aplica desde 12 unidades por modelo. Para el nivel distribuidor, el mínimo es de 100 unidades.",
  },
  {
    question: "¿Hacen bordado o estampado personalizado?",
    answer:
      "Sí, ofrecemos bordado personalizado desde 12 unidades. Envíanos tu logo y te confirmamos el costo por unidad.",
  },
  {
    question: "¿A qué ciudades hacen envíos?",
    answer:
      "Realizamos envíos a todo el país a través de transportadoras aliadas, con número de seguimiento incluido.",
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
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
