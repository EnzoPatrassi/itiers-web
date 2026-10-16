'use client';

import React, { useState, useEffect } from 'react';
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
  onLanguageChange,
  theme,
  onThemeChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = dictionaries[currentLang].nav;
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: t.inicio || 'Inicio' },
    { href: '#nosotros', label: t.nosotros || 'Nosotros' }, 
    { href: '#servicios-cards', label: t.servicios || 'Servicios' },
    { href: '#contacto', label: t.contacto || 'Contacto' }, 
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Cierra el menú al hacer clic
    
    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? isDark
            ? 'bg-[#0F0F0F]/95 backdrop-blur-md shadow-lg border-b border-[#333333]'
            : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#b2b2b2]/30'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Usamos un poco menos de altura en móviles (h-16) para que entren todos los botones */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} className="flex items-center gap-3 group focus:outline-none shrink-0">
            <div className="relative w-24 sm:w-36 h-8 sm:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image src="/itiers.png" alt="Itiers Data Sense" fill className="object-contain" priority />
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isDark ? 'text-gray-300 hover:text-[#ff4f00]' : 'text-[#1C1917] hover:text-[#ff4f00]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controles a la derecha (Siempre visibles en Desktop y Mobile) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            
            {/* Botón Tema (☀️/🌙) */}
            <button
              type="button"
              onClick={() => onThemeChange(isDark ? 'light' : 'dark')}
              className={`p-1.5 sm:p-2 rounded-full border transition-all duration-200 text-xs sm:text-sm ${
                isDark ? 'bg-[#1F1F1F] border-[#333333] text-yellow-400' : 'bg-[#FAFAFA] border-[#b2b2b2]/50 text-[#1F1F1F]'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Switcher de Idiomas con Banderas */}
            <div className={`flex items-center border rounded-full p-0.5 sm:p-1 text-[10px] sm:text-xs ${isDark ? 'bg-[#1F1F1F] border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/50'}`}>
              <button onClick={() => onLanguageChange('es')} className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-full font-bold transition-all ${currentLang === 'es' ? 'bg-[#ff4f00] text-white' : isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
                <Image src="/bandera-espana.svg" alt="ES" width={16} height={12} className="w-3.5 h-2.5 sm:w-4 sm:h-3 object-cover rounded-xs" />
                <span>ES</span>
              </button>
              <button onClick={() => onLanguageChange('en')} className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-full font-bold transition-all ${currentLang === 'en' ? 'bg-[#ff4f00] text-white' : isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
                <Image src="/bandera-usa.png" alt="EN" width={16} height={12} className="w-3.5 h-2.5 sm:w-4 sm:h-3 object-cover rounded-xs" />
                <span>EN</span>
              </button>
            </div>

            {/* Botón Menú Hamburguesa (Solo se ve en Mobile) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4f00] transition-colors ml-1 ${
                isDark ? 'text-white hover:bg-[#1F1F1F]' : 'text-[#1C1917] hover:bg-gray-100'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable (Solo Mobile) - ÚNICAMENTE SECCIONES */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-6 pt-4 pb-6 shadow-xl animate-fade-in-up ${isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-white border-[#b2b2b2]/40'}`}>
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block text-lg font-bold py-4 transition-colors border-b ${
                  isDark ? 'text-gray-300 border-[#333333] hover:text-[#ff4f00]' : 'text-[#1C1917] border-[#b2b2b2]/20 hover:text-[#ff4f00]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};