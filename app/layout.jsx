import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FavoritosProvider } from "@/context/FavoritosContext";

export const metadata = {
  title: "GameHub",
  description: "Plataforma moderna para descubrir videojuegos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-950 text-white">
        <FavoritosProvider>
          <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#0ea5e9_0,_transparent_35%),radial-gradient(circle_at_top_right,_#38bdf8_0,_transparent_30%),linear-gradient(135deg,_#020617_0%,_#082f49_45%,_#0f172a_100%)]">
            <Navbar />

            <main>{children}</main>

            <Footer />
          </div>
        </FavoritosProvider>
      </body>
    </html>
  );
}