"use client";

import Link from "next/link";
import { useFavoritos } from "@/context/FavoritosContext";

export default function Navbar() {
  const { favoritos } = useFavoritos();

  return (
    <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-400">
          GameHub
        </Link>

        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <Link href="/" className="hover:text-purple-400">
            Inicio
          </Link>

          <Link href="/juegos" className="hover:text-purple-400">
            Juegos
          </Link>

          <Link href="/favoritos" className="hover:text-purple-400">
            Favoritos ({favoritos.length})
          </Link>

          <Link href="/dashboard" className="hover:text-purple-400">
            Dashboard
          </Link>

          <Link href="/nosotros" className="hover:text-purple-400">
            Nosotros
          </Link>
        </div>
      </nav>
    </header>
  );
}