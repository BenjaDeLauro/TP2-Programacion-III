import Link from "next/link";

async function obtenerDetalleJuego(id) {
  const apiKey = process.env.RAWG_API_KEY;

  if (!apiKey) {
    return null;
  }

  const respuesta = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${apiKey}`,
    {
      cache: "no-store",
    }
  );

  if (!respuesta.ok) {
    return null;
  }

  return respuesta.json();
}

export default async function JuegoDetallePage({ params }) {
  const { id } = await params;
  const juego = await obtenerDetalleJuego(id);

  if (!juego) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">Juego no encontrado</h1>

        <p className="text-zinc-400 mb-6">
          No se pudo cargar el detalle del juego. Revisá la API key.
        </p>

        <Link
          href="/juegos"
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
        >
          Volver a juegos
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <Link href="/juegos" className="text-purple-400 hover:text-purple-300">
        ← Volver a juegos
      </Link>

      <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
        <img
          src={juego.background_image}
          alt={juego.name}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{juego.name}</h1>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-zinc-950 p-4 rounded-xl">
              <p className="text-zinc-400">Rating</p>
              <p className="text-xl font-bold">{juego.rating}</p>
            </div>

            <div className="bg-zinc-950 p-4 rounded-xl">
              <p className="text-zinc-400">Lanzamiento</p>
              <p className="text-xl font-bold">{juego.released}</p>
            </div>

            <div className="bg-zinc-950 p-4 rounded-xl">
              <p className="text-zinc-400">Metacritic</p>
              <p className="text-xl font-bold">{juego.metacritic || "N/D"}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-3">Descripción</h2>

          <p className="text-zinc-300 leading-relaxed">
            {juego.description_raw || "No hay descripción disponible."}
          </p>
        </div>
      </div>
    </section>
  );
}