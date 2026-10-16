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
    <section className={`py-16 border-t transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] text-white border-[#333333]/50' : 'bg-[#FAFAFA] text-[#1C1917] border-[#b2b2b2]/30'}`}>
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center border rounded-3xl p-8 sm:p-10 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#1F1F1F]/60 border-[#333333]' : 'bg-white border-[#b2b2b2]/40 shadow-sm'}`}>
        <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-3.5 py-1 rounded-full">
          {content.badge}
        </span>
        <h2 className={`mt-4 text-3xl font-bold ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>{content.title}</h2>
        <p className={`mt-3 text-base max-w-xl mx-auto ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
          {content.desc}
        </p>
        <div className="mt-6">
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center font-semibold text-sm px-6 py-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#ff4f00] border border-[#ff4f00] ${isDark ? 'bg-[#1F1F1F] hover:bg-[#ff4f00] text-[#ff4f00] hover:text-white' : 'bg-white hover:bg-[#ff4f00] text-[#ff4f00] hover:text-white'}`}
          >
            {content.cta} ↗
          </a>
        </div>
      </div>
    </section>
  );
};