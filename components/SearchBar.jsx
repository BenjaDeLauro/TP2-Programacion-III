"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";

export default function SearchBar() {
  const [busqueda, setBusqueda] = useState("");
  const router = useRouter();

  function manejarSubmit(e) {
    e.preventDefault();

    if (busqueda.trim() === "") {
      router.push("/juegos");
      return;
    }

    router.push(`/juegos?busqueda=${busqueda}`);
  }

  return (
    <form onSubmit={manejarSubmit} className="flex flex-col md:flex-row gap-3 mb-8">
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar videojuego..."
        className="flex-1 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-purple-500"
      />

      <Button type="submit">Buscar</Button>
    </form>
  );
}