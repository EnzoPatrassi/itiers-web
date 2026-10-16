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
    setMobileMenuOpen(false);
    
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
        isScrolled
          ? isDark
            ? 'bg-[#0F0F0F]/90 backdrop-blur-md shadow-lg border-b border-[#333333]'
            : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#b2b2b2]/30'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-36 h-12 transition-transform duration-300 group-hover:scale-105">
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

          {/* Botones: Tema -> Idioma -> Hablemos */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              onClick={() => onThemeChange(isDark ? 'light' : 'dark')}
              className={`p-2 rounded-full border transition-all duration-200 text-sm ${
                isDark ? 'bg-[#1F1F1F] border-[#333333] text-yellow-400' : 'bg-[#FAFAFA] border-[#b2b2b2]/50 text-[#1F1F1F]'
              }`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            <div className={`flex items-center border rounded-full p-1 text-xs ${isDark ? 'bg-[#1F1F1F] border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/50'}`}>
              <button onClick={() => onLanguageChange('es')} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold ${currentLang === 'es' ? 'bg-[#ff4f00] text-white' : isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
                <span>ES</span>
              </button>
              <button onClick={() => onLanguageChange('en')} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold ${currentLang === 'en' ? 'bg-[#ff4f00] text-white' : isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
                <span>EN</span>
              </button>
            </div>

            <a href="#contacto" onClick={(e) => handleLinkClick(e, '#contacto')} className="bg-[#ff4f00] hover:bg-[#e04500] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all">
              Hablemos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};