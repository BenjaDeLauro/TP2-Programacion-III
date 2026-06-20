import GameCard from "@/components/GameCard";
import SearchBar from "@/components/SearchBar";

async function obtenerJuegos(busqueda) {
  const apiKey = process.env.RAWG_API_KEY;

  if (!apiKey) {
    return [];
  }

  const url = busqueda
    ? `https://api.rawg.io/api/games?key=${apiKey}&search=${busqueda}&page_size=12`
    : `https://api.rawg.io/api/games?key=${apiKey}&page_size=12`;

  const respuesta = await fetch(url, {
    cache: "no-store",
  });

  if (!respuesta.ok) {
    return [];
  }

  const data = await respuesta.json();
  return data.results;
}

export default async function JuegosPage({ searchParams }) {
  const params = await searchParams;
  const busqueda = params?.busqueda || "";

  const juegos = await obtenerJuegos(busqueda);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">Videojuegos</h1>

      <p className="text-zinc-400 mb-8">
        Listado de videojuegos obtenido desde una API externa.
      </p>

      <SearchBar />

      {juegos.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-zinc-300">
            No se encontraron juegos o falta configurar la API key en el archivo
            <span className="text-purple-400"> .env.local</span>.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {juegos.map((juego) => (
            <GameCard key={juego.id} juego={juego} />
          ))}
        </div>
      )}
    </section>
  );
}