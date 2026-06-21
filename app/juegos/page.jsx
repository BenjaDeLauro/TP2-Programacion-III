import GameCard from "@/components/GameCard";
import SearchBar from "@/components/SearchBar";
import juegosLocales from "@/data/juegos";

export default async function JuegosPage({ searchParams }) {
  const params = await searchParams;
  const busqueda = params?.busqueda || "";

  const juegos = busqueda
    ? juegosLocales.filter((juego) =>
        juego.name.toLowerCase().includes(busqueda.toLowerCase())
      )
    : juegosLocales;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-4 text-4xl font-black">Videojuegos</h1>

      <p className="mb-8 max-w-2xl text-slate-300">
        Explorá una selección de videojuegos, consultá sus detalles y guardá tus
        favoritos.
      </p>

      <SearchBar />

      {juegos.length === 0 ? (
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6">
          <p className="text-slate-300">
            No se encontraron juegos con esa búsqueda.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {juegos.map((juego) => (
            <GameCard key={juego.id} juego={juego} />
          ))}
        </div>
      )}
    </section>
  );
} 