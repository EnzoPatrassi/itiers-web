'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, dictionaries } from '@/data/i18n';
import { INFO_ITIERS } from '@/data/mockData';

interface FooterProps {
  currentLang: Locale;
  onLanguageChange: (lang: Locale) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onLanguageChange }) => {
  const t = dictionaries[currentLang].footer;

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
            <div className="text-xs text-[#ff4f00] font-mono font-bold">
              {INFO_ITIERS.trayectoria} de maestría analítica
            </div>
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
                <a href="#data-ai" onClick={(e) => handleScroll(e, '#data-ai')} className="hover:text-[#ff4f00] transition-colors">
                  Data & AI
                </a>
              </li>
              <li>
                <a href="#tecnologia" onClick={(e) => handleScroll(e, '#tecnologia')} className="hover:text-[#ff4f00] transition-colors">
                  Tecnología
                </a>
              </li>
              <li>
                <a href="#equipo" onClick={(e) => handleScroll(e, '#equipo')} className="hover:text-[#ff4f00] transition-colors">
                  Equipo
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
              <li>Email: <a href={`mailto:${INFO_ITIERS.email}`} className="text-white hover:text-[#ff4f00]">{INFO_ITIERS.email}</a></li>
              <li>WhatsApp: <a href={`https://wa.me/${INFO_ITIERS.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff4f00]">{INFO_ITIERS.whatsapp}</a></li>
              <li className="pt-2 text-gray-400 flex items-center space-x-2">
                <span>Sedes:</span>
                <span className="inline-flex items-center gap-1"><Image src="/bandera-arg.png" alt="AR" width={16} height={10} className="w-4 h-2.5 object-cover rounded-xs" /> AR</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1"><Image src="/bandera-chile.png" alt="CL" width={16} height={10} className="w-4 h-2.5 object-cover rounded-xs" /> CL</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1"><Image src="/bandera-usa.png" alt="USA" width={16} height={10} className="w-4 h-2.5 object-cover rounded-xs" /> USA</span>
              </li>
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
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  currentLang === 'es' ? 'bg-[#ff4f00] text-white' : 'bg-[#0F0F0F] text-gray-400 hover:text-white'
                }`}
              >
                <Image src="/bandera-espana.svg" alt="España" width={16} height={12} className="w-4 h-3 object-cover rounded-xs" />
                <span>Español</span>
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
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
                className="inline-block text-xs font-bold text-[#ff4f00] hover:underline"
              >
                Postulaciones de Empleo ↗
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
