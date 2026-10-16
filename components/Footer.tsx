'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, dictionaries } from '@/data/i18n';
import { INFO_ITIERS } from '@/data/mockData';
import { validateWhatsAppConfig } from '@/lib/harness/guardrails';
import { ThemeMode } from './Header';

interface FooterProps {
  currentLang: Locale;
  onLanguageChange: (lang: Locale) => void;
  theme?: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onLanguageChange, theme = 'light' }) => {
  const isDark = theme === 'dark';
  const t = dictionaries[currentLang].footer;
  
  const whatsappMessage = currentLang === 'es'
    ? 'Hola, quiero realizar una consulta sobre los servicios de Itiers.'
    : 'Hello, I would like to ask about Itiers services.';
  const whatsappChannel = validateWhatsAppConfig(INFO_ITIERS.whatsapp, whatsappMessage);
  
  if (!whatsappChannel.success || !whatsappChannel.url) {
    throw new Error(whatsappChannel.error || 'La configuración del canal de WhatsApp no es válida.');
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const footerNav = {
    es: {
      inicio: 'Inicio',
      nosotros: 'Nosotros',
      queHacemos: 'Qué hacemos',
      servicios: 'Servicios',
      contacto: 'Contacto',
    },
    en: {
      inicio: 'Home',
      nosotros: 'About Us',
      queHacemos: 'What we do',
      servicios: 'Services',
      contacto: 'Contact',
    }
  }[currentLang];

  return (
    <footer className={`pt-16 pb-12 border-t transition-colors duration-300 ${isDark ? 'bg-[#1F1F1F] text-white border-[#333333]' : 'bg-[#FAFAFA] text-[#1C1917] border-[#b2b2b2]/30'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Logo & Tagline */}
          <div className="space-y-4 md:col-span-1">
            <div className="relative w-36 h-12">
              <Image
                src="/itiers.png"
                alt="Itiers Data Sense"
                fill
                className="object-contain"
              />
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
              {t.tagline}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff4f00] mb-4">
              {t.quickLinks}
            </h4>
            <ul className={`space-y-2 text-xs ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
              <li>
                <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="hover:text-[#ff4f00] transition-colors">
                  {footerNav.inicio}
                </a>
              </li>
              <li>
                <a href="#nosotros" onClick={(e) => handleScroll(e, '#nosotros')} className="hover:text-[#ff4f00] transition-colors">
                  {footerNav.nosotros}
                </a>
              </li>
              <li>
                <a href="#data-ai" onClick={(e) => handleScroll(e, '#data-ai')} className="hover:text-[#ff4f00] transition-colors">
                  {footerNav.queHacemos}
                </a>
              </li>
              <li>
                <a href="#servicios-cards" onClick={(e) => handleScroll(e, '#servicios-cards')} className="hover:text-[#ff4f00] transition-colors">
                  {footerNav.servicios}
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={(e) => handleScroll(e, '#contacto')} className="hover:text-[#ff4f00] transition-colors">
                  {footerNav.contacto}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff4f00] mb-4">
              {t.contactTitle}
            </h4>
            <ul className={`space-y-2 text-xs ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
              <li>WhatsApp: <a href={whatsappChannel.url} target="_blank" rel="noopener noreferrer" className={`hover:text-[#ff4f00] focus:outline-none focus:ring-2 focus:ring-[#ff4f00] transition-colors ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>{INFO_ITIERS.whatsapp}</a></li>
            </ul>
          </div>

          {/* Col 4: Language & Career */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff4f00] mb-4">
              Idioma / Language
            </h4>
            <div className="flex items-center space-x-2 mb-6">
              <button
                type="button"
                onClick={() => onLanguageChange('es')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4f00] border ${
                  currentLang === 'es' 
                    ? 'bg-[#ff4f00] text-white border-[#ff4f00]' 
                    : isDark ? 'bg-[#0F0F0F] text-gray-400 border-[#333333] hover:text-white' : 'bg-white text-[#4d4d4d] border-[#b2b2b2] hover:text-[#1C1917]'
                }`}
              >
                <Image src="/bandera-espana.svg" alt="España" width={16} height={12} className="w-4 h-3 object-cover rounded-xs" />
                <span>Español</span>
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4f00] border ${
                  currentLang === 'en' 
                    ? 'bg-[#ff4f00] text-white border-[#ff4f00]' 
                    : isDark ? 'bg-[#0F0F0F] text-gray-400 border-[#333333] hover:text-white' : 'bg-white text-[#4d4d4d] border-[#b2b2b2] hover:text-[#1C1917]'
                }`}
              >
                <Image src="/bandera-usa.png" alt="USA" width={16} height={12} className="w-4 h-3 object-cover rounded-xs" />
                <span>English</span>
              </button>
            </div>

            {INFO_ITIERS.googleFormWorkWithUs && (
              <a
                href={INFO_ITIERS.googleFormWorkWithUs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-bold text-[#ff4f00] hover:underline focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
              >
                {currentLang === 'es' ? 'Trabajá con nosotros ↗' : 'Work with us ↗'}
              </a>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-xs ${isDark ? 'border-[#333333] text-gray-400' : 'border-[#b2b2b2]/40 text-[#4d4d4d]'}`}>
          <div>© {new Date().getFullYear()} Itiers Data Sense. {currentLang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</div>
        </div>
      </div>
    </footer>
  );
};