'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Qué hacemos', href: '/que-hacemos' },
    { name: 'Soluciones', href: '/soluciones' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Navegación principal de Itiers"
      >
        {/* Logotipo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md">
            <span className="sr-only">Itiers - Transformamos datos en decisiones inteligentes</span>
            <div className="h-8 w-auto font-bold text-xl tracking-tight text-slate-900 flex items-center">
              ITIERS <span className="text-blue-600 ml-1">DATA SENSE</span>
            </div>
          </Link>
        </div>

        {/* Botón de Menú Móvil */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Abrir menú principal</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Enlaces de Escritorio */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:rounded-sm px-2 py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA (Llamado a la acción) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contacto"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Contáctanos
          </Link>
        </div>
      </nav>

      {/* Menú Móvil Desplegable */}
      <div
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
        role="region"
        aria-label="Menú de navegación móvil"
      >
        <div className="space-y-1 px-4 pb-4 pt-2 border-t border-gray-100 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/contacto"
              className="block w-full text-center rounded-md bg-blue-600 px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}