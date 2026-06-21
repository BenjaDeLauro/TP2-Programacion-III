import Link from "next/link";
import juegosLocales from "@/data/juegos";

export default function DashboardPage() {
  const totalJuegos = juegosLocales.length;

  const plataformas = [
    ...new Set(juegosLocales.flatMap((juego) => juego.platforms || [])),
  ];

  const categorias = [...new Set(juegosLocales.map((juego) => juego.genre))];

  const mejorJuego = juegosLocales.reduce((mejor, juego) =>
    juego.rating > mejor.rating ? juego : mejor
  );

  const juegosDestacados = juegosLocales.slice(0, 4);

  return (
    <div>
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold text-cyan-300">
          Panel de control
        </p>

        <h1 className="mb-3 text-4xl font-black">Dashboard</h1>

        <p className="max-w-2xl text-slate-300">
          Administrá y visualizá la información principal de la plataforma:
          juegos disponibles, categorías, plataformas y accesos rápidos.
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-5">
          <p className="text-sm text-slate-400">Juegos cargados</p>
          <p className="mt-2 text-3xl font-black text-cyan-300">
            {totalJuegos}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-5">
          <p className="text-sm text-slate-400">Plataformas</p>
          <p className="mt-2 text-3xl font-black text-cyan-300">
            {plataformas.length}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-5">
          <p className="text-sm text-slate-400">Categorías</p>
          <p className="mt-2 text-3xl font-black text-cyan-300">
            {categorias.length}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-5">
          <p className="text-sm text-slate-400">Mejor rating</p>
          <p className="mt-2 text-3xl font-black text-cyan-300">
            ⭐ {mejorJuego.rating}
          </p>
        </div>
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Catálogo</p>
              <h2 className="text-2xl font-bold">Juegos destacados</h2>
            </div>

            <Link
              href="/juegos"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-200 hover:bg-cyan-400/20"
            >
              Ver todos
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {juegosDestacados.map((juego) => (
              <Link
                key={juego.id}
                href={`/juegos/${juego.id}`}
                className="group flex gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:border-cyan-400/50 hover:bg-slate-900"
              >
                <img
                  src={juego.background_image}
                  alt={juego.name}
                  className="h-20 w-24 rounded-xl object-cover"
                />

                <div>
                  <h3 className="font-bold group-hover:text-cyan-300">
                    {juego.name}
                  </h3>

                  <p className="text-sm text-slate-400">{juego.genre}</p>

                  <p className="mt-1 text-sm font-bold text-cyan-300">
                    ⭐ {juego.rating}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6">
          <p className="text-sm text-slate-400">Accesos rápidos</p>
          <h2 className="mb-5 text-2xl font-bold">Navegación</h2>

          <div className="flex flex-col gap-3">
            <Link
              href="/juegos"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-3 text-center font-bold text-slate-950 hover:scale-[1.02] transition"
            >
              Explorar juegos
            </Link>

            <Link
              href="/favoritos"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-center font-bold text-cyan-200 hover:bg-cyan-400/20"
            >
              Ver favoritos
            </Link>

            <Link
              href="/dashboard/perfil"
              className="rounded-xl border border-cyan-400/30 bg-white/5 px-4 py-3 text-center font-bold text-slate-200 hover:bg-white/10"
            >
              Mi perfil
            </Link>

            <Link
              href="/dashboard/configuracion"
              className="rounded-xl border border-cyan-400/30 bg-white/5 px-4 py-3 text-center font-bold text-slate-200 hover:bg-white/10"
            >
              Configuración
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6">
        <h2 className="mb-4 text-2xl font-bold">Categorías disponibles</h2>

        <div className="flex flex-wrap gap-3">
          {categorias.map((categoria) => (
            <span
              key={categoria}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200"
            >
              {categoria}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}