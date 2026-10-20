import type { Metadata } from 'next';
import { Comfortaa, Nunito } from 'next/font/google';
import './globals.css';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-comfortaa',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Itiers Data Sense',
  icons: {
    icon: '/Icono.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${comfortaa.variable} ${nunito.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}