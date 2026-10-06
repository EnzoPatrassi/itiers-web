'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { TeamCarousel } from './TeamCarousel';
import { ThemeMode } from './Header';

interface TeamSectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      badge: 'Quiénes Somos',
      title: 'Maestría técnica en datos e Inteligencia Artificial',
      subtitle: 'Somos una consultora de ingeniería de datos y orquestación de IA con más de 20 años de trayectoria. Transformamos la información de organizaciones exigentes en ventajas competitivas determinísticas.',
      highlights: [
        { title: '+20 Años', desc: 'Liderando soluciones de datos en la región' },
        { title: 'Talento Senior', desc: 'Ingenieros, científicos y arquitectos dedicados' },
        { title: 'Enfoque B2B', desc: 'Soluciones a producción orientadas a ROI' },
      ],
    },
    en: {
      badge: 'About Us',
      title: 'Data engineering & Artificial Intelligence mastery',
      subtitle: 'We are a specialized data engineering & AI consulting firm with over 20 years of expertise. We turn enterprise information into deterministic competitive advantages.',
      highlights: [
        { title: '+20 Years', desc: 'Leading data architectures across the region' },
        { title: 'Senior Talent', desc: 'Dedicated data engineers & AI scientists' },
        { title: 'B2B Focus', desc: 'Production-ready solutions tied to financial ROI' },
      ],
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

        {/* 3 Quick Quiénes Somos highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {content.highlights.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border text-center ${
                isDark ? 'bg-[#1F1F1F]/60 border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/40'
              }`}
            >
              <div className="text-2xl font-black text-[#ff4f00]">{item.title}</div>
              <div className={`text-xs mt-1 ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Carrusel de Equipo */}
        <TeamCarousel theme={theme} />
      </div>
    </section>
  );
};
