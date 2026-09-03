'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/data/i18n';
import { dictionaries } from '@/data/i18n';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  lang?: Locale;
}

export default function Navbar({ lang = 'es' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = dictionaries[lang].nav;

  const navLinks = [
    { name: t.inicio, href: `/${lang}` },
    { name: t.nosotros, href: `/${lang}/nosotros` },
    { name: t.servicios, href: `/${lang}/servicios` },
    { name: t.queHacemos, href: `/${lang}/que-hacemos` },
    { name: t.soluciones, href: `/${lang}/soluciones` },
    { name: t.casos, href: `/${lang}/casos` },
    { name: t.contacto, href: `/${lang}/contacto` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label={t.ariaNav}
      >
        {/* Logotipo */}
        <div className="flex lg:flex-1">
          <Link 
            href={`/${lang}`} 
            className="-m-1.5 p-1.5 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md"
          >
            <span className="sr-only">Itiers Data Sense</span>
            <div className="h-8 w-auto font-bold text-xl tracking-tight text-slate-900 flex items-center">
              ITIERS <span className="text-blue-600 ml-1">DATA SENSE</span>
            </div>
          </Link>
        </div>

        {/* Selector de idioma y Botón de Menú Móvil */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher currentLang={lang} />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Menú</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Enlaces de Escritorio */}
        <div className="hidden lg:flex lg:gap-x-6">
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

        {/* Selector de Idioma Persistente & CTA (Escritorio) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <LanguageSwitcher currentLang={lang} />
          <Link
            href={`/${lang}/contacto`}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {t.ctaButton}
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
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link
              href={`/${lang}/contacto`}
              className="block w-full text-center rounded-md bg-blue-600 px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {t.ctaButton}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}