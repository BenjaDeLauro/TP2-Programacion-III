export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/20 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-slate-400 md:flex-row md:text-left">
        <div>
          <h2 className="text-xl font-black text-white">
            Game<span className="text-cyan-400">Hub</span>
          </h2>
          <p className="text-sm">
            Plataforma para descubrir, explorar y guardar videojuegos.
          </p>
        </div>

        <p className="text-sm">
          © 2026 GameHub. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}