import Link from "next/link";
import juegosLocales from "@/data/juegos";

export default async function JuegoDetallePage({ params }) {
  const { id } = await params;

  const juego = juegosLocales.find((juego) => juego.id === id);

  if (!juego) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="mb-4 text-3xl font-black">Juego no encontrado</h1>

        <p className="mb-6 text-slate-300">
          No se pudo encontrar la información del juego seleccionado.
        </p>

        <Link
          href="/juegos"
          className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 font-bold text-slate-950"
        >
          Volver a juegos
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Link href="/juegos" className="text-cyan-300 hover:text-cyan-200">
        ← Volver a juegos
      </Link>

      <div className="mt-6 overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950/70 shadow-2xl shadow-slate-950/50 backdrop-blur">
        <div className="relative">
          <img
            src={juego.background_image}
            alt={juego.name}
            className="h-[420px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-8">
            <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300 backdrop-blur">
              {juego.genre}
            </p>

            <h1 className="text-5xl font-black">{juego.name}</h1>
          </div>
        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Descripción</h2>

            <p className="mb-8 leading-8 text-slate-300">
              {juego.description_raw}
            </p>

            <h2 className="mb-4 text-2xl font-bold">Características</h2>

            <div className="mb-8 flex flex-wrap gap-3">
              {juego.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="mb-4 text-2xl font-bold">Requisitos</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-5">
                <h3 className="mb-2 font-bold text-cyan-300">Mínimos</h3>
                <p className="text-slate-300">{juego.requirements.minimum}</p>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-5">
                <h3 className="mb-2 font-bold text-cyan-300">Recomendados</h3>
                <p className="text-slate-300">
                  {juego.requirements.recommended}
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-6">
            <h2 className="mb-5 text-2xl font-bold">Información</h2>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-slate-400">Rating</p>
                <p className="text-2xl font-black text-cyan-300">
                  ⭐ {juego.rating}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Lanzamiento</p>
                <p className="font-bold">{juego.released}</p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Desarrollador</p>
                <p className="font-bold">{juego.developer}</p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Distribuidor</p>
                <p className="font-bold">{juego.publisher}</p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Modo de juego</p>
                <p className="font-bold">{juego.mode}</p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Duración estimada</p>
                <p className="font-bold">{juego.duration}</p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Clasificación</p>
                <p className="font-bold">{juego.ageRating}</p>
              </div>

              <div>
                <p className="mb-2 text-sm text-slate-400">Plataformas</p>

                <div className="flex flex-wrap gap-2">
                  {juego.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="rounded-lg bg-slate-950 px-3 py-1 text-sm text-slate-300"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}