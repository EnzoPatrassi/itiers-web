import type { Metadata } from 'next';

// Metadatos globales y de la página de inicio (Definidos por Martín - SEO)
export const metadata: Metadata = {
  title: 'Itiers: IA Generativa e IBM Watsonx',
  description: 'Liderando la ingeniería de datos y la IA Generativa con 20 años de maestría técnica.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}