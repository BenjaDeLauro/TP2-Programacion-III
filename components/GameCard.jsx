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
    <article className="group overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/70 shadow-xl shadow-slate-950/40 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/60">
      <div className="relative">
        <img
          src={juego.background_image || "/placeholder.jpg"}
          alt={juego.name}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

        <span className="absolute right-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-sm font-bold text-cyan-300 backdrop-blur">
          ⭐ {juego.rating || "N/D"}
        </span>
      </div>

      <div className="p-5">
        <h2 className="mb-2 text-xl font-black">{juego.name}</h2>

        <p className="mb-4 text-sm text-slate-400">
          Lanzamiento: {juego.released || "No disponible"}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/juegos/${juego.id}`}
            className="flex-1 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-center font-semibold text-cyan-200 hover:bg-cyan-400/20"
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