import Link from "next/link";

export default function HomePage() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-purple-400 font-semibold mb-3">
            Trabajo Práctico N° 2 - Programación III
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenido a GameHub
          </h1>

          <p className="text-zinc-300 text-lg mb-8">
            Una plataforma de videojuegos desarrollada con Next.js, Tailwind,
            rutas dinámicas, componentes reutilizables, Context, localStorage
            y consumo de una API externa.
          </p>

          <div className="flex gap-4">
            <Link
              href="/juegos"
              className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-lg font-semibold"
            >
              Ver juegos
            </Link>

            <Link
              href="/nosotros"
              className="border border-zinc-700 hover:bg-zinc-900 px-5 py-3 rounded-lg font-semibold"
            >
              Sobre el proyecto
            </Link>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Requisitos cumplidos</h2>

          <ul className="space-y-3 text-zinc-300">
            <li>✅ Rutas base</li>
            <li>✅ Ruta dinámica</li>
            <li>✅ Ruta anidada</li>
            <li>✅ Layout principal y layout anidado</li>
            <li>✅ Componentes reutilizables</li>
            <li>✅ Context y localStorage</li>
            <li>✅ Consumo de API externa</li>
          </ul>
        </div>
      </div>
    </section>
  );
}