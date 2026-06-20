"use client";

import GameCard from "@/components/GameCard";
import { useFavoritos } from "@/context/FavoritosContext";

export default function FavoritosPage() {
  const { favoritos } = useFavoritos();

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">Mis favoritos</h1>

      <p className="text-zinc-400 mb-8">
        Estos juegos se guardan en el estado global y en localStorage.
      </p>

      {favoritos.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-zinc-300">
            Todavía no agregaste juegos a favoritos.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoritos.map((juego) => (
            <GameCard key={juego.id} juego={juego} />
          ))}
        </div>
      )}
    </section>
  );
}