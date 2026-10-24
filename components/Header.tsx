'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Locale, dictionaries } from '@/data/i18n';

export type ThemeMode = 'light' | 'dark';

interface HeaderProps {
  currentLang: Locale;
  onLanguageChange: (lang: Locale) => void;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  theme,
  onThemeChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = dictionaries[currentLang].nav;
  const isDark = theme === 'dark';

  const navLinks = [
    { href: '#inicio', label: t.inicio || 'Inicio' },
    { href: '#nosotros', label: t.nosotros || 'Nosotros' }, 
    { href: '#servicios-cards', label: t.servicios || 'Servicios' },
    { href: '#contacto', label: t.contacto || 'Contacto' }, 
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDark 
        ? 'bg-[#1A1A1A] border-b border-[#4d4d4d]' 
        : 'bg-white border-b border-[#b2b2b2]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="relative w-36 h-10">
              <Image 
                src={isDark ? "/itiers-blanco.png" : "/itiers.png"} 
                alt="Itiers Data Sense" 
                fill 
                sizes="200px" 
                className="object-contain object-left" 
                priority 
              />
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-semibold transition-colors ${
                  isDark ? 'text-[#b2b2b2] hover:text-white' : 'text-[#4d4d4d] hover:text-[#ff4f00]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4">
            
            <button
              type="button"
              onClick={() => onThemeChange(isDark ? 'light' : 'dark')}
              className={`p-2 rounded-full border transition-all ${
                isDark ? 'bg-[#1A1A1A] border-[#4d4d4d] text-[#b2b2b2] hover:text-white' : 'bg-white border-[#b2b2b2] text-[#4d4d4d] hover:text-[#ff4f00]'
              }`}
              aria-label="Cambiar tema"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </button>

            <a
              href="#contacto"
              className="bg-[#ff4f00] hover:bg-[#e04500] text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-full transition-all hover:scale-105"
            >
              {currentLang === 'es' ? 'Hablemos' : 'Let\'s talk'}
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl border transition-all ${
                isDark ? 'bg-[#1A1A1A] border-[#4d4d4d] text-[#b2b2b2]' : 'bg-white border-[#b2b2b2] text-[#4d4d4d]'
              }`}
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden border-b transition-colors ${
          isDark ? 'bg-[#1A1A1A] border-[#4d4d4d]' : 'bg-white border-[#b2b2b2]'
        }`}>
          <nav className="flex flex-col px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-base font-semibold py-2 transition-colors ${
                  isDark ? 'text-[#b2b2b2] hover:text-[#ff4f00]' : 'text-[#4d4d4d] hover:text-[#ff4f00]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};