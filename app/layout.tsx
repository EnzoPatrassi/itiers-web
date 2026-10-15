import type { Metadata } from 'next';
import './globals.css';

// Metadatos globales y de la página de inicio (Definidos por Martín - SEO)
export const metadata: Metadata = {
  title: 'Itiers Data Sense | Decisiones estratégicas con datos',
  description: 'Convertimos el caos de datos en decisiones estratégicas con un enfoque personalizado.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}