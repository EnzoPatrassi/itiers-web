import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Metadatos esenciales para SEO y GEO que usará el Practicante 1
export const metadata: Metadata = {
  title: "Itiers | Data Sense - 20 años transformando datos en estrategia",
  description: "Consultora tecnológica especializada en refinar información compleja en inteligencia estratégica utilizando IA generativa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen">
        {/* La barra de navegación se muestra arriba en todo el sitio */}
        <Navbar />
        
        {/* El contenido de cada página se renderiza dinámicamente aquí */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* El pie de página se muestra abajo en todo el sitio */}
        <Footer />
      </body>
    </html>
  );
}