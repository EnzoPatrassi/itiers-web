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
  const content = {
    es: { 
      titlePrefix: 'Así se vive ',
      titleHighlight: 'itiers',
    },
    en: { 
      titlePrefix: 'This is life at ',
      titleHighlight: 'itiers',
    },
  }[currentLang];

  return (
    <section id="equipo" className="relative w-full overflow-hidden border-y border-gray-200 dark:border-[#333333] bg-black">
      
      <TeamCarousel theme={theme} />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 pointer-events-none">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-center drop-shadow-2xl max-w-4xl leading-tight text-white">
          {content.titlePrefix} 
          <span className="text-[#ff4f00] font-extrabold">{content.titleHighlight}</span>
        </h2>
      </div>

    </section>
  );
};