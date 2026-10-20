'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, dictionaries } from '@/data/i18n';
import { INFO_ITIERS } from '@/data/mockData';
import { validateWhatsAppConfig } from '@/lib/harness/guardrails';
import { ThemeMode } from '@/components/Header';

interface FooterProps {
  currentLang: Locale;
  theme?: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, theme = 'light' }) => {
  const isDark = theme === 'dark';
  const t = dictionaries[currentLang].footer;
  
  // Usamos un saludo corto que cumple con el mínimo de 5 caracteres requerido por el validador
  const whatsappChannel = validateWhatsAppConfig(INFO_ITIERS.whatsapp, 'Hola!');
  
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
      servicios: 'Servicios',
      contacto: 'Contacto',
      ubicacion: 'Ubicación',
    },
    en: {
      inicio: 'Home',
      nosotros: 'About Us',
      servicios: 'Services',
      contacto: 'Contact',
      ubicacion: 'Locations',
    }
  }[currentLang];

  const locations = [
    { flag: '/bandera-arg.png', text: 'Av. Perú 1841, Mendoza, Argentina', alt: 'Argentina' },
    { flag: '/bandera-chile.png', text: 'General del Canto 421, piso 6, Providencia, Santiago de Chile', alt: 'Chile' },
    { flag: '/bandera-usa.png', text: '651 North Broad Street, Middletown, DE 19709, USA', alt: 'USA' },
  ];

  return (
    <footer className={`relative pt-20 pb-12 border-t overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#141414] text-white border-[#333333]' : 'bg-white text-[#1C1917] border-gray-200'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          <div className="space-y-6">
            <div className="relative w-40 h-14">
              <Image src="/itiers.png" alt="Itiers Data Sense" fill sizes="200px" className="object-contain object-left" />
            </div>
            <p className={`text-sm leading-relaxed max-w-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff4f00] mb-6">{t.quickLinks}</h4>
            <ul className={`space-y-3 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <li><a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="hover:text-[#ff4f00] transition-colors">{footerNav.inicio}</a></li>
              <li><a href="#nosotros" onClick={(e) => handleScroll(e, '#nosotros')} className="hover:text-[#ff4f00] transition-colors">{footerNav.nosotros}</a></li>
              <li><a href="#servicios-cards" onClick={(e) => handleScroll(e, '#servicios-cards')} className="hover:text-[#ff4f00] transition-colors">{footerNav.servicios}</a></li>
              <li><a href="#contacto" onClick={(e) => handleScroll(e, '#contacto')} className="hover:text-[#ff4f00] transition-colors">{footerNav.contacto}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff4f00] mb-6">
              {footerNav.ubicacion}
            </h4>
            <ul className={`space-y-4 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {locations.map((loc, index) => (
                <li key={index} className="flex items-start gap-3 leading-snug">
                  <Image src={loc.flag} alt={loc.alt} width={18} height={14} className="w-4.5 h-3.5 object-cover rounded-sm mt-0.5 shrink-0" />
                  <span>{loc.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff4f00] mb-6">
              {footerNav.contacto}
            </h4>
            
            <div className="mt-1">
              <a 
                href={whatsappChannel.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 text-sm font-bold transition-colors hover:text-[#ff4f00] ${isDark ? 'text-gray-200' : 'text-[#1C1917]'}`}
              >
                <span className="w-2 h-2 rounded-full bg-[#ff4f00]"></span>
                {INFO_ITIERS.whatsapp}
              </a>
            </div>
          </div>

        </div>

        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-xs font-medium ${isDark ? 'border-[#333333] text-gray-500' : 'border-gray-300 text-gray-500'}`}>
          <div>© {new Date().getFullYear()} Itiers Data Sense. {currentLang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</div>
        </div>
      </div>
    </footer>
  );
};