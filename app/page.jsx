import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"></div>
      <div className="absolute right-10 top-60 h-80 w-80 rounded-full bg-blue-700/30 blur-3xl"></div>

      <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Tu portal gamer para descubrir nuevos títulos
          </div>

          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Descubrí juegos, explorá detalles y guardá tus favoritos.
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
            GameHub es una plataforma pensada para explorar videojuegos,
            consultar información relevante y armar tu propia lista de favoritos
            de manera rápida y simple.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/juegos"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-center font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:scale-105"
            >
              Explorar juegos
            </Link>

            <Link
              href="/favoritos"
              className="rounded-xl border border-cyan-400/30 bg-white/5 px-6 py-3 text-center font-bold text-cyan-100 backdrop-blur transition hover:bg-cyan-400/10"
            >
              Ver favoritos
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl border border-cyan-400/20 bg-white/10 p-6 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Ranking semanal</p>
                <h2 className="text-2xl font-bold">Juegos populares</h2>
              </div>

              <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-sm font-semibold text-cyan-300">
                Live
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">Cyberpunk 2077</h3>
                    <p className="text-sm text-slate-400">RPG / Acción</p>
                  </div>
                  <p className="font-bold text-cyan-300">9.1</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">Elden Ring</h3>
                    <p className="text-sm text-slate-400">
                      Aventura / Fantasía
                    </p>
                  </div>
                  <p className="font-bold text-cyan-300">9.5</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">GTA V</h3>
                    <p className="text-sm text-slate-400">Mundo abierto</p>
                  </div>
                  <p className="font-bold text-cyan-300">9.0</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-5 shadow-xl backdrop-blur">
              <p className="text-sm text-slate-400">Favoritos guardados</p>
              <p className="text-3xl font-black text-cyan-300">+120K</p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-5 shadow-xl backdrop-blur">
              <p className="text-sm text-slate-400">Juegos disponibles</p>
              <p className="text-3xl font-black text-cyan-300">+10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}