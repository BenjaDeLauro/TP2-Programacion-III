export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-6 text-4xl font-black">Sobre el proyecto</h1>

      <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6 shadow-xl backdrop-blur">
        <p className="mb-6 leading-7 text-slate-300">
          La aplicación utiliza Next.js, Tailwind CSS, rutas dinámicas,
          componentes reutilizables, Context API, localStorage y consumo de una
          API externa de videojuegos.
        </p>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Integrantes</h2>

          <ul className="space-y-2 text-slate-300">
            <li className="rounded-xl bg-slate-900/80 px-4 py-3">
              Esteban Rodriguez
            </li>

            <li className="rounded-xl bg-slate-900/80 px-4 py-3">
              Benjamin Delauro
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}