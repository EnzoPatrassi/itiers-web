import type { Metadata } from "next";
import { Comfortaa, Nunito } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  variable: '--font-comfortaa'
});

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  variable: '--font-nunito'
});

export const metadata: Metadata = {
  title: "Itiers Data Sense | Inicio",
  description: "En Itiers Data Sense convertimos el caos de datos en decisiones estratégicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${comfortaa.variable} ${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}