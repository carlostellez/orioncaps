"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

// Navegación principal: solo las paradas que de verdad ayudan a decidir
// una compra. "Colores" y "Mercado" siguen siendo secciones completas de
// la página (y están en el footer), pero no compiten por espacio aquí —
// un menú con 8 ítems apretados se ve amateur; uno con 6 bien espaciados
// se ve profesional.
const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#producto", label: "Producto" },
  { href: "#mayoreo", label: "Precios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#faq", label: "Preguntas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observerRef.current?.observe(section));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 py-3 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-md"
          : "border-b border-transparent bg-background/40 py-5 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight text-foreground"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black-900 text-xs font-black text-gold-500 transition-transform group-hover:rotate-12">
            O
          </span>
          Orion<span className="text-gold-500">Caps</span>
        </a>

        <div className="hidden flex-1 items-center justify-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-2 text-sm font-medium transition-colors ${
                active === link.href
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-active-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-gold-500"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle />

          <div className="hidden md:block">
            <Button size="sm" asChild>
              <a href="#cotizar">Cotiza al por mayor</a>
            </Button>
          </div>

          <button
            className="text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  <span className="text-xs text-gold-500/70">{String(i + 1).padStart(2, "0")}</span>
                  {link.label}
                </a>
              ))}
              <Button size="sm" className="mt-2" asChild>
                <a href="#cotizar">Cotiza al por mayor</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
