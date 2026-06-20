"use client";

import Link from "next/link";
import Button from "./Button";
import { useFavoritos } from "@/context/FavoritosContext";

export default function GameCard({ juego }) {
  const { agregarFavorito, eliminarFavorito, esFavorito } = useFavoritos();

  const favorito = esFavorito(juego.id);

  function manejarFavorito() {
    if (favorito) {
      eliminarFavorito(juego.id);
    } else {
      agregarFavorito(juego);
    }
  }

  return (
    <article className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg flex flex-col">
      <img
        src={juego.background_image || "/placeholder.jpg"}
        alt={juego.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-xl font-bold mb-2">{juego.name}</h2>

        <p className="text-zinc-400 mb-2">
          Rating: {juego.rating || "Sin calificación"}
        </p>

        <p className="text-zinc-400 mb-4">
          Lanzamiento: {juego.released || "No disponible"}
        </p>

        <div className="mt-auto flex gap-3">
          <Link
            href={`/juegos/${juego.id}`}
            className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg font-semibold"
          >
            Ver detalle
          </Link>

          <Button
            onClick={manejarFavorito}
            variant={favorito ? "danger" : "primary"}
          >
            {favorito ? "Quitar" : "Favorito"}
          </Button>
        </div>
      </div>
    </article>
  );
}