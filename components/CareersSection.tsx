'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from '@/components/Header';

interface CareersSectionProps {
  currentLang: Locale;
  theme?: ThemeMode;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ currentLang, theme = 'light' }) => {
  
  const content = {
    es: {
      badge: 'POSTULACIONES',
      title: 'Trabaja con nosotros',
      desc: 'Súmate a nuestro equipo. Completá el formulario de postulación.',
      cta: 'COMPLETAR FORMULARIO',
    },
    en: {
      badge: 'APPLICATIONS',
      title: 'Work with us',
      desc: 'Join our team. Complete the application form.',
      cta: 'COMPLETE APPLICATION',
    },
  }[currentLang];

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfN5I8_vgDeYfihh_3rPSb1tOVSbf3yUgNWgGD-77aLlLWKbA/viewform?pli=1";

  return (
    <section className="relative w-full py-20 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-[#ff4f00] to-[#6a6969] z-0"></div>

      <div className="absolute inset-0 bg-black/10 mix-blend-overlay z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        <span className="text-white/90 font-bold text-xs tracking-widest uppercase mb-4">
          {content.badge}
        </span>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-md">
          {content.title}
        </h2>
        
        <p className="text-base sm:text-lg text-white/90 max-w-2xl mb-10 font-medium">
          {content.desc}
        </p>
        
        <a 
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold text-white bg-transparent hover:bg-white/10 rounded-lg transition-all uppercase tracking-widest border border-white/30"
        >
          {content.cta}
        </a>

      </div>
    </section>
  );
};