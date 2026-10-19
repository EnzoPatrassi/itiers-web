'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';

interface CareersSectionProps {
  currentLang: Locale;
  theme?: ThemeMode;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ currentLang, theme = 'light' }) => {
  const isDark = theme === 'dark';
  
  const content = {
    es: {
      badge: 'Postulaciones',
      title: 'Trabaja con nosotros',
      desc: 'Súmate a nuestro equipo. Completá el formulario de postulación.',
      cta: 'Completar formulario',
    },
    en: {
      badge: 'Join Us',
      title: 'Work with us',
      desc: 'Join our team. Complete the application form.',
      cta: 'Complete application',
    },
  }[currentLang];

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfN5I8_vgDeYfihh_3rPSb1tOVSbf3yUgNWgGD-77aLlLWKbA/viewform?pli=1";

  return (
    <section className={`py-24 border-t relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] text-white border-[#333333]' : 'bg-[#FAFAFA] text-[#1C1917] border-[#b2b2b2]/30'}`}>

      {/* NUEVO: Contenedor con efecto Glassmorphism (backdrop-blur-xl y fondos semitransparentes) */}
      <div className={`max-w-4xl mx-auto px-4 sm:px-8 lg:px-10 text-center border rounded-[2rem] p-10 sm:p-14 relative z-10 overflow-hidden transition-colors duration-300 shadow-xl hover:shadow-2xl backdrop-blur-xl ${
        isDark ? 'bg-[#1A1A1A]/80 border-[#333333]' : 'bg-white/80 border-[#b2b2b2]/40'
      }`}>
        <span className="text-[#ff4f00] font-bold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full">
          {content.badge}
        </span>
        <h2 className={`mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>{content.title}</h2>
        <p className={`mt-4 text-base sm:text-lg max-w-xl mx-auto ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
          {content.desc}
        </p>
        <div className="mt-8">
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-bold text-sm md:text-base px-8 py-4 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#ff4f00] bg-[#ff4f00] hover:bg-[#e04500] text-white shadow-lg shadow-[#ff4f00]/20 hover:-translate-y-1"
          >
            {content.cta} ↗
          </a>
        </div>
      </div>
    </section>
  );
};