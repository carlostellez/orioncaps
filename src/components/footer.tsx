export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-muted md:flex-row">
        <p className="text-foreground">
          Orion<span className="text-gold-500">Caps</span>
        </p>
        <div className="flex gap-6">
          <a href="#productos" className="hover:text-foreground">Productos</a>
          <a href="#mayoreo" className="hover:text-foreground">Mayoreo</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Orion Caps. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
