"use client";

import Link from "next/link";
import { useFavoritos } from "@/context/FavoritosContext";

export default function Navbar() {
  const { favoritos } = useFavoritos();

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row">
        <Link href="/" className="group flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-700 shadow-lg shadow-cyan-500/30"></div>

          <span className="text-2xl font-black tracking-tight">
            Game<span className="text-cyan-400">Hub</span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-slate-300 md:gap-4 md:text-base">
          <Link
            href="/"
            className="rounded-full px-4 py-2 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Inicio
          </Link>

          <Link
            href="/juegos"
            className="rounded-full px-4 py-2 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Juegos
          </Link>

          <Link
            href="/favoritos"
            className="rounded-full px-4 py-2 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Favoritos ({favoritos.length})
          </Link>

          <Link
            href="/dashboard"
            className="rounded-full px-4 py-2 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Panel
          </Link>

          <Link
            href="/nosotros"
            className="rounded-full px-4 py-2 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Nosotros
          </Link>
        </div>
      </nav>
    </header>
  );
}