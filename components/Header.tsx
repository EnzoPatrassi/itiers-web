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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: t.inicio },
    { href: '#servicios', label: t.servicios },
    { href: '#data-ai', label: 'Data & AI' },
    { href: '#tecnologia', label: 'Tecnología' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#contacto', label: t.contacto },
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
          {/* Logo - itiers.png */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#ff4f00] rounded-md p-1"
          >
            <div className="relative w-36 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/itiers.png"
                alt="Itiers Data Sense"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label={t.ariaNav} className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-semibold transition-colors duration-200 focus:outline-none ${
                  isDark
                    ? 'text-gray-300 hover:text-[#ff4f00]'
                    : 'text-[#1C1917] hover:text-[#ff4f00]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Switch + Lang Switch + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={() => onThemeChange(isDark ? 'light' : 'dark')}
              className={`p-2 rounded-full border transition-all duration-200 text-sm ${
                isDark
                  ? 'bg-[#1F1F1F] border-[#333333] text-yellow-400 hover:bg-[#2A2A2A]'
                  : 'bg-[#FAFAFA] border-[#b2b2b2]/50 text-[#1F1F1F] hover:bg-gray-200'
              }`}
              title={isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
              aria-label="Toggle Theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* ES / EN Toggle */}
            <div
              className={`flex items-center border rounded-full p-1 text-xs ${
                isDark
                  ? 'bg-[#1F1F1F] border-[#333333]'
                  : 'bg-[#FAFAFA] border-[#b2b2b2]/50'
              }`}
            >
              <button
                type="button"
                onClick={() => onLanguageChange('es')}
                className={`px-3 py-1 rounded-full font-bold transition-all duration-200 ${
                  currentLang === 'es'
                    ? 'bg-[#ff4f00] text-white shadow-sm'
                    : isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-[#4d4d4d] hover:text-[#1C1917]'
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-full font-bold transition-all duration-200 ${
                  currentLang === 'en'
                    ? 'bg-[#ff4f00] text-white shadow-sm'
                    : isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-[#4d4d4d] hover:text-[#1C1917]'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Primary CTA */}
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className="bg-[#ff4f00] hover:bg-[#e04500] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-[#ff4f00]/20 hover:shadow-[#ff4f00]/40 focus:ring-2 focus:ring-[#ff4f00]"
            >
              {t.ctaButton}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <button
              type="button"
              onClick={() => onThemeChange(isDark ? 'light' : 'dark')}
              className={`p-1.5 rounded-full border text-xs ${
                isDark
                  ? 'bg-[#1F1F1F] border-[#333333] text-yellow-400'
                  : 'bg-[#FAFAFA] border-[#b2b2b2]/50 text-[#1F1F1F]'
              }`}
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* ES / EN Toggle Mobile */}
            <div
              className={`flex items-center border rounded-full p-0.5 text-xs ${
                isDark ? 'bg-[#1F1F1F] border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/50'
              }`}
            >
              <button
                type="button"
                onClick={() => onLanguageChange('es')}
                className={`px-2 py-0.5 rounded-full font-bold ${
                  currentLang === 'es'
                    ? 'bg-[#ff4f00] text-white'
                    : isDark
                    ? 'text-gray-400'
                    : 'text-[#4d4d4d]'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded-full font-bold ${
                  currentLang === 'en'
                    ? 'bg-[#ff4f00] text-white'
                    : isDark
                    ? 'text-gray-400'
                    : 'text-[#4d4d4d]'
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                isDark ? 'text-gray-300 hover:bg-[#1F1F1F]' : 'text-[#1C1917] hover:bg-gray-100'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-2 pb-6 space-y-3 shadow-lg ${
            isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-white border-[#b2b2b2]/40'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block text-base font-semibold py-2 transition-colors ${
                isDark
                  ? 'text-gray-300 hover:text-[#ff4f00]'
                  : 'text-[#1C1917] hover:text-[#ff4f00]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleLinkClick(e, '#contacto')}
            className="block text-center bg-[#ff4f00] hover:bg-[#e04500] text-white text-base font-bold px-4 py-3 rounded-xl transition-all shadow-md mt-4"
          >
            {t.ctaButton}
          </a>
        </div>
      )}
    </header>
  );
};
