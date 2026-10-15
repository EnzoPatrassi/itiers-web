'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';

interface TeamSectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      badge: 'Nosotros',
      title: 'Datos ordenados para decidir mejor',
      subtitle: 'En Itiers Data Sense convertimos el caos de datos en decisiones estratégicas. Acompañamos a organizaciones líderes a desbloquear el valor de su información con un enfoque 100% personalizado.',
    },
    en: {
      badge: 'About Us',
      title: 'Organized data for better decisions',
      subtitle: 'At Itiers Data Sense, we turn data chaos into strategic decisions. We help leading organizations unlock the value of their information through a fully tailored approach.',
    },
  }[currentLang];

  return (
    <section
      id="equipo"
      className={`py-24 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#0F0F0F] text-white border-[#333333]/60' : 'bg-white text-[#1C1917] border-[#b2b2b2]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full">
            {content.badge}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {content.title}
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
            {content.subtitle}
          </p>
        </div>

      </div>
    </section>
  );
};
