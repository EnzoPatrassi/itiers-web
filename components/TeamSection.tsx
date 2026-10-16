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
    es: { badge: 'El Equipo'},
    en: { badge: 'The Team'},
  }[currentLang];

  return (
    <section id="equipo" className={`py-24 relative border-t overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/30'
    }`}>
      
      {/* Trama corporativa */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none z-0 ${isDark ? 'text-white' : 'text-black'}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="team-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="currentColor" />
              <circle cx="80" cy="40" r="5" fill="currentColor" />
              <circle cx="40" cy="80" r="2" fill="currentColor" />
              <path d="M20,20 L80,40 L40,80 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#team-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-[#ff4f00] font-bold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full inline-block">
            {content.badge}
          </span>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <TeamCarousel theme={theme} />
        </div>
      </div>
    </section>
  );
};