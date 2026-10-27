import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Itiers Data Sense | Soluciones de Datos e Inteligencia Artificial',
  description: 'En Itiers Data Sense convertimos el caos de datos en decisiones estratégicas. Acompañamos a organizaciones líderes a desbloquear el valor de su información con un enfoque 100% personalizado.',
  alternates: {
    canonical: 'https://www.itiers.com/es',
    languages: {
      'es-AR': 'https://www.itiers.com/es',
      'x-default': 'https://www.itiers.com',
    },
  },
  openGraph: {
    title: 'Itiers Data Sense | Soluciones de Datos e Inteligencia Artificial',
    description: 'En Itiers Data Sense convertimos el caos de datos en decisiones estratégicas con más de 20 años de trayectoria.',
    url: 'https://www.itiers.com/es',
    siteName: 'Itiers Data Sense',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/hero-banner-itiers.jpg',
        width: 1200,
        height: 630,
        alt: 'Itiers Data Sense - Soluciones de Datos e Inteligencia Artificial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itiers Data Sense | Soluciones de Datos e IA',
    description: 'Convertimos el caos de datos en decisiones estratégicas con un enfoque 100% personalizado.',
    images: ['/hero-banner-itiers.jpg'],
  },
};

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
