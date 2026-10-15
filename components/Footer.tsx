'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, dictionaries } from '@/data/i18n';
import { INFO_ITIERS } from '@/data/mockData';
import { validateWhatsAppConfig } from '@/lib/harness/guardrails';

interface FooterProps {
  currentLang: Locale;
  onLanguageChange: (lang: Locale) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onLanguageChange }) => {
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

  return (
    <footer className="bg-[#1F1F1F] text-white border-t border-[#333333] pt-16 pb-12">
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
            <p className="text-gray-400 text-xs leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff4f00] mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="hover:text-[#ff4f00] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => handleScroll(e, '#servicios')} className="hover:text-[#ff4f00] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#equipo" onClick={(e) => handleScroll(e, '#equipo')} className="hover:text-[#ff4f00] transition-colors">
                  {currentLang === 'es' ? 'Nosotros' : 'About us'}
                </a>
              </li>
              <li>
                <a href="#data-ai" onClick={(e) => handleScroll(e, '#data-ai')} className="hover:text-[#ff4f00] transition-colors">
                  {currentLang === 'es' ? 'Qué hacemos' : 'What we do'}
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => handleScroll(e, '#servicios')} className="hover:text-[#ff4f00] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={(e) => handleScroll(e, '#contacto')} className="hover:text-[#ff4f00] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff4f00] mb-4">
              {t.contactTitle}
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>WhatsApp: <a href={whatsappChannel.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff4f00] focus:outline-none focus:ring-2 focus:ring-[#ff4f00]">{INFO_ITIERS.whatsapp}</a></li>
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
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4f00] ${
                  currentLang === 'es' ? 'bg-[#ff4f00] text-white' : 'bg-[#0F0F0F] text-gray-400 hover:text-white'
                }`}
              >
                <Image src="/bandera-espana.svg" alt="España" width={16} height={12} className="w-4 h-3 object-cover rounded-xs" />
                <span>Español</span>
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4f00] ${
                  currentLang === 'en' ? 'bg-[#ff4f00] text-white' : 'bg-[#0F0F0F] text-gray-400 hover:text-white'
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
        <div className="pt-8 border-t border-[#333333] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <div>© {new Date().getFullYear()} Itiers Data Sense. Todos los derechos reservados.</div>
          <div className="mt-2 sm:mt-0 font-mono text-[#ff4f00]">Data · AI · Technology</div>
        </div>
      </div>
    </footer>
  );
};
