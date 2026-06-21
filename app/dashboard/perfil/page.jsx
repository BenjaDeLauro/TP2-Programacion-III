export default function PerfilPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold text-cyan-300">
          Perfil de usuario
        </p>

        <h1 className="mb-3 text-4xl font-black">Mi perfil</h1>

        <p className="max-w-2xl text-slate-300">
          Información general del usuario dentro de la plataforma GameHub.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6">
          <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 text-4xl font-black text-slate-950 shadow-lg shadow-cyan-500/30">
            GH
          </div>

          <h2 className="text-center text-2xl font-bold">Usuario GameHub</h2>

          <p className="mt-2 text-center text-slate-400">
            Explorador de videojuegos
          </p>

          <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-center">
            <p className="text-sm text-slate-400">Estado</p>
            <p className="font-bold text-cyan-300">Activo</p>
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6">
          <h2 className="mb-5 text-2xl font-bold">Datos principales</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-slate-900/80 p-4">
              <p className="text-sm text-slate-400">Nombre</p>
              <p className="font-bold">Usuario Demo</p>
            </div>

            <div className="rounded-xl bg-slate-900/80 p-4">
              <p className="text-sm text-slate-400">Rol</p>
              <p className="font-bold">Jugador</p>
            </div>

            <div className="rounded-xl bg-slate-900/80 p-4">
              <p className="text-sm text-slate-400">Género favorito</p>
              <p className="font-bold">Acción / Aventura</p>
            </div>

            <div className="rounded-xl bg-slate-900/80 p-4">
              <p className="text-sm text-slate-400">Plataforma principal</p>
              <p className="font-bold">PC</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-xl font-bold">Preferencias</h3>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                Mundo abierto
              </span>

              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                Competitivo
              </span>

              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                RPG
              </span>

              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                Carreras
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6">
        <h2 className="mb-4 text-2xl font-bold">Actividad reciente</h2>

        <div className="space-y-3">
          <div className="rounded-xl bg-slate-900/80 p-4">
            <p className="font-bold">Exploró el catálogo de videojuegos</p>
            <p className="text-sm text-slate-400">Hace unos minutos</p>
          </div>

          <div className="rounded-xl bg-slate-900/80 p-4">
            <p className="font-bold">Visitó la sección de favoritos</p>
            <p className="text-sm text-slate-400">Actividad guardada localmente</p>
          </div>

          <div className="rounded-xl bg-slate-900/80 p-4">
            <p className="font-bold">Consultó detalles de juegos destacados</p>
            <p className="text-sm text-slate-400">Catálogo GameHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}