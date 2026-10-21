'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from '@/components/Header';
import { TeamCarousel } from './TeamCarousel';

interface TeamSectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const content = {
    es: { 
      title: 'Así se vive itiers',
    },
    en: { 
      title: 'This is life at itiers',
    },
  }[currentLang];

  return (
    <section id="equipo" className={`relative w-full overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#1A1A1A]' : 'bg-[#4d4d4d]'}`}>
      
      <TeamCarousel theme={theme} />

      <div className="absolute inset-0 z-10 bg-black/60 pointer-events-none"></div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 pointer-events-none">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-center drop-shadow-2xl max-w-4xl leading-tight text-white">
          {content.title}
        </h2>
      </div>

    </section>
  );
};