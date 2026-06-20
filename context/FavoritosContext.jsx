"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosGuardados = localStorage.getItem("favoritos");

    if (favoritosGuardados) {
      setFavoritos(JSON.parse(favoritosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function agregarFavorito(juego) {
    const existe = favoritos.some((favorito) => favorito.id === juego.id);

    if (!existe) {
      setFavoritos([...favoritos, juego]);
    }
  }

  function eliminarFavorito(id) {
    const nuevosFavoritos = favoritos.filter((juego) => juego.id !== id);
    setFavoritos(nuevosFavoritos);
  }

  function esFavorito(id) {
    return favoritos.some((juego) => juego.id === id);
  }

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        agregarFavorito,
        eliminarFavorito,
        esFavorito,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}