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
    { href: '#inicio', label: t.inicio || 'Servicios' },
    { href: '#nosotros', label: t.nosotros || 'Nosotros' }, 
    { href: '#servicios-cards', label: t.servicios || 'Casos de Éxito' },
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
        ? 'bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#333333]' 
        : 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="relative w-36 h-10">
              <Image src="/itiers.png" alt="Itiers Data Sense" fill className="object-contain object-left" priority />
            </div>
          </a>

          {/* Navegación Centrada (Exacto a la captura de referencia) */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-semibold transition-colors ${
                  isDark ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controles de la derecha (Tema + Botón Llamada a la acción naranja) */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => onThemeChange(isDark ? 'light' : 'dark')}
              className={`p-2 rounded-full border transition-colors ${
                isDark ? 'bg-[#1A1A1A] border-[#333333] text-yellow-400' : 'bg-gray-100 border-gray-200 text-gray-800'
              }`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            <a
              href="#contacto"
              className="bg-[#ff4f00] hover:bg-[#e04500] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-md hover:scale-105"
            >
              {currentLang === 'es' ? 'Hablemos' : 'Let\'s talk'}
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};