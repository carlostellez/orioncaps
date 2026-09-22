"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const links = [
  { href: "#producto", label: "El producto" },
  { href: "#colores", label: "Colores" },
  { href: "#mercado", label: "Mercado" },
  { href: "#mayoreo", label: "Mayoreo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#ubicacion", label: "Ubícanos" },
  { href: "#faq", label: "Preguntas frecuentes" },
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
          ? "border-b border-border bg-background/90 py-2 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-md"
          : "border-b border-transparent bg-background/40 py-4 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-2 text-lg font-bold tracking-tight text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black-900 text-xs font-black text-gold-500 transition-transform group-hover:rotate-12">
            O
          </span>
          Orion<span className="text-gold-500">Caps</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-surface/60 p-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-black-900"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 ${active === link.href ? "text-gold-500" : ""}`}
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>

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
