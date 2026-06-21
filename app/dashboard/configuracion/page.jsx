"use client";

import { useEffect, useState } from "react";

export default function ConfiguracionPage() {
  const [configuracion, setConfiguracion] = useState({
    notificaciones: true,
    mostrarRatings: true,
    plataformaFavorita: "PC",
    categoriaFavorita: "Acción",
  });

  useEffect(() => {
    const configGuardada = localStorage.getItem("configuracionGameHub");

    if (configGuardada) {
      setConfiguracion(JSON.parse(configGuardada));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "configuracionGameHub",
      JSON.stringify(configuracion)
    );
  }, [configuracion]);

  function manejarCambio(e) {
    const { name, value, type, checked } = e.target;

    setConfiguracion({
      ...configuracion,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <div>
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold text-cyan-300">
          Ajustes de usuario
        </p>

        <h1 className="mb-3 text-4xl font-black">Configuración</h1>

        <p className="max-w-2xl text-slate-300">
          Personalizá algunas preferencias de la plataforma. Los cambios se
          guardan en el navegador usando localStorage.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6">
          <h2 className="mb-5 text-2xl font-bold">Preferencias generales</h2>

          <div className="space-y-5">
            <label className="flex items-center justify-between gap-4 rounded-xl bg-slate-900/80 p-4">
              <div>
                <p className="font-bold">Notificaciones</p>
                <p className="text-sm text-slate-400">
                  Recibir avisos sobre novedades y juegos destacados.
                </p>
              </div>

              <input
                type="checkbox"
                name="notificaciones"
                checked={configuracion.notificaciones}
                onChange={manejarCambio}
                className="h-5 w-5 accent-cyan-400"
              />
            </label>

            <label className="flex items-center justify-between gap-4 rounded-xl bg-slate-900/80 p-4">
              <div>
                <p className="font-bold">Mostrar ratings</p>
                <p className="text-sm text-slate-400">
                  Ver puntuaciones en las tarjetas de juegos.
                </p>
              </div>

              <input
                type="checkbox"
                name="mostrarRatings"
                checked={configuracion.mostrarRatings}
                onChange={manejarCambio}
                className="h-5 w-5 accent-cyan-400"
              />
            </label>

            <div className="rounded-xl bg-slate-900/80 p-4">
              <label className="mb-2 block font-bold">
                Plataforma favorita
              </label>

              <select
                name="plataformaFavorita"
                value={configuracion.plataformaFavorita}
                onChange={manejarCambio}
                className="w-full rounded-xl border border-cyan-400/20 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              >
                <option value="PC">PC</option>
                <option value="PlayStation">PlayStation</option>
                <option value="Xbox">Xbox</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>

            <div className="rounded-xl bg-slate-900/80 p-4">
              <label className="mb-2 block font-bold">
                Categoría favorita
              </label>

              <select
                name="categoriaFavorita"
                value={configuracion.categoriaFavorita}
                onChange={manejarCambio}
                className="w-full rounded-xl border border-cyan-400/20 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              >
                <option value="Acción">Acción</option>
                <option value="RPG">RPG</option>
                <option value="Carreras">Carreras</option>
                <option value="Terror">Terror</option>
                <option value="Simulación">Simulación</option>
                <option value="Puzzle">Puzzle</option>
              </select>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6">
          <h2 className="mb-5 text-2xl font-bold">Resumen</h2>

          <div className="space-y-4">
            <div className="rounded-xl bg-slate-900/80 p-4">
              <p className="text-sm text-slate-400">Notificaciones</p>
              <p className="font-bold text-cyan-300">
                {configuracion.notificaciones ? "Activadas" : "Desactivadas"}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/80 p-4">
              <p className="text-sm text-slate-400">Ratings</p>
              <p className="font-bold text-cyan-300">
                {configuracion.mostrarRatings ? "Visibles" : "Ocultos"}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/80 p-4">
              <p className="text-sm text-slate-400">Plataforma</p>
              <p className="font-bold text-cyan-300">
                {configuracion.plataformaFavorita}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/80 p-4">
              <p className="text-sm text-slate-400">Categoría</p>
              <p className="font-bold text-cyan-300">
                {configuracion.categoriaFavorita}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}