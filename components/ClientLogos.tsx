'use client';

import React from 'react';
import Image from 'next/image';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';

interface ClientLogosProps {
  currentLang: Locale;
  theme?: ThemeMode;
}

const CLIENTES = [
  { src: '/canal-9.png', alt: 'Canal 9' },
  { src: '/enfer.png', alt: 'Enfer' },
  { src: '/farmacia.png', alt: 'Farmacias del Plata' },
];

export const ClientLogos: React.FC<ClientLogosProps> = ({ currentLang, theme = 'light' }) => {
  const isDark = theme === 'dark';
  
  const content = {
    es: { badge: 'Nuestros Clientes' },
    en: { badge: 'Our Clients' }
  }[currentLang];

  return (
    <section className={`py-16 border-y relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-white border-[#b2b2b2]/30'}`}>
      
      {/* NUEVO: Degradados laterales para fundir los logos con el fondo */}
      <div className={`absolute top-0 left-0 w-16 md:w-40 h-full z-10 pointer-events-none ${isDark ? 'bg-gradient-to-r from-[#0F0F0F] to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`}></div>
      <div className={`absolute top-0 right-0 w-16 md:w-40 h-full z-10 pointer-events-none ${isDark ? 'bg-gradient-to-l from-[#0F0F0F] to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-20">
        <span className="text-[#ff4f00] font-bold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full inline-block">
          {content.badge}
        </span>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 px-6 max-w-5xl mx-auto relative z-0">
        {CLIENTES.map((cliente, index) => (
          <div key={index} className="relative w-32 h-16 md:w-40 md:h-20 opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105">
            <Image src={cliente.src} alt={cliente.alt} fill className="object-contain" sizes="(max-width: 768px) 128px, 160px" />
          </div>
        ))}
      </div>
    </section>
  );
};