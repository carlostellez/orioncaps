export function Footer() {
  return (
    <footer className="border-t border-black-700 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-black-400 md:flex-row">
        <p className="text-white">
          Orion<span className="text-gold-500">Caps</span>
        </p>
        <div className="flex gap-6">
          <a href="#productos" className="hover:text-white">Productos</a>
          <a href="#mayoreo" className="hover:text-white">Mayoreo</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Orion Caps. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
