import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FavoritosProvider } from "@/context/FavoritosContext";

export const metadata = {
  title: "GameHub",
  description: "Plataforma de videojuegos con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-zinc-950 text-white min-h-screen flex flex-col">
        <FavoritosProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </FavoritosProvider>
      </body>
    </html>
  );
}