"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const links = [
  { href: "#productos", label: "Productos" },
  { href: "#mayoreo", label: "Mayoreo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black-700/80 bg-black-900/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-bold tracking-tight text-white">
          Orion<span className="text-gold-500">Caps</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-black-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button size="sm" asChild>
            <a href="#cotizar">Cotiza al por mayor</a>
          </Button>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black-700 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-black-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" asChild>
              <a href="#cotizar">Cotiza al por mayor</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
