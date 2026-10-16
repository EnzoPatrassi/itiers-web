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
    es: { badge: 'El Equipo', title: 'Fotos de Equipos' },
    en: { badge: 'The Team', title: 'Team Photos' },
  }[currentLang];

  return (
    <section id="equipo" className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#0F0F0F] border-[#333333]/50' : 'bg-[#FAFAFA] border-[#b2b2b2]/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full inline-block">
            {content.badge}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {content.title}
          </h2>
        </div>
        <TeamCarousel theme={theme} />
      </div>
    </section>
  );
};