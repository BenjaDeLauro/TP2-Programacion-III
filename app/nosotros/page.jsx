export default function NosotrosPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">Sobre el proyecto</h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
        <p className="text-zinc-300">
          GameHub es una plataforma de videojuegos creada como trabajo práctico
          para la materia Programación III.
        </p>

        <p className="text-zinc-300">
          La aplicación utiliza Next.js, Tailwind CSS, rutas dinámicas,
          componentes reutilizables, Context API, localStorage y consumo de una
          API externa de videojuegos.
        </p>

        <div>
          <h2 className="text-2xl font-bold mb-3">Integrantes</h2>

          <ul className="list-disc list-inside text-zinc-300">
            <li>Integrante 1</li>
            <li>Integrante 2</li>
            <li>Integrante 3</li>
            <li>Integrante 4</li>
          </ul>
        </div>
      </div>
    </section>
  );
}