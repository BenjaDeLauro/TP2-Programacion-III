import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-[240px_1fr] gap-6">
        <aside className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 h-fit">
          <h2 className="text-xl font-bold mb-4">Panel</h2>

          <nav className="flex flex-col gap-3">
            <Link href="/dashboard" className="hover:text-purple-400">
              Inicio panel
            </Link>

            <Link href="/dashboard/perfil" className="hover:text-purple-400">
              Perfil
            </Link>

            <Link
              href="/dashboard/configuracion"
              className="hover:text-purple-400"
            >
              Configuración
            </Link>
          </nav>
        </aside>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          {children}
        </div>
      </div>
    </section>
  );
}