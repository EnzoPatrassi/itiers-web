'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';
import { TeamCarousel } from './TeamCarousel';

interface TeamSectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';
  
  const content = {
    es: { 
      title: 'El Equipo',
      button: 'Sobre nosotros'
    },
    en: { 
      title: 'The Team',
      button: 'About us'
    },
  }[currentLang];

  return (
    <section id="equipo" className={`relative w-full overflow-hidden border-y transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-white border-gray-200'}`}>
      
      {/* 1. Carrusel operando en el fondo */}
      <TeamCarousel theme={theme} />

      {/* 2. Texto y Botón Central Estáticos Flotantes */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 pointer-events-none">
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-serif text-center mb-8 drop-shadow-2xl max-w-4xl leading-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
          {content.title}
        </h2>
        
        <a 
          href="#nosotros" 
          className="pointer-events-auto bg-[#ff4f00] hover:bg-[#e04500] text-white font-bold text-sm sm:text-base rounded-full px-8 py-3 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,79,0,0.4)]"
        >
          {content.button}
        </a>
      </div>

    </section>
  );
};