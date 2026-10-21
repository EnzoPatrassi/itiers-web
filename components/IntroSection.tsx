'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from '@/components/Header';

interface IntroSectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      title: 'El poder transformador de los datos',
      p1: 'En Itiers Data Sense, nos define una profunda pasión por el poder transformador de los datos. Con más de 20 años de trayectoria, nos hemos consolidado como referentes en el mercado, destacándonos como una organización innovadora en el desarrollo de productos y servicios de inteligencia de datos.',
      p2: 'Nuestro propósito va más allá de ofrecer soluciones de gestión: nos apasiona acompañar a las organizaciones en la toma de decisiones estratégicas e informadas que impulsen su crecimiento, eficiencia y apertura a nuevas oportunidades.',
    },
    en: {
      title: 'The transformative power of data',
      p1: 'At Itiers Data Sense, we are defined by a deep passion for the transformative power of data. With over 20 years of experience, we have established ourselves as market leaders, standing out as an innovative organization in the development of data intelligence products and services.',
      p2: 'Our purpose goes beyond offering management solutions: we are passionate about guiding organizations in making strategic, informed decisions that drive their growth, efficiency, and openness to new opportunities.',
    },
  }[currentLang];

  return (
    <section className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#1A1A1A]' : 'bg-[#f9f9f9]'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-8 ${isDark ? 'text-white' : 'text-[#4d4d4d]'}`}>
          {content.title}
        </h2>
        <div className={`space-y-6 text-base sm:text-lg leading-relaxed ${isDark ? 'text-[#b2b2b2]' : 'text-[#898a8d]'}`}>
          <p>{content.p1}</p>
          <p>{content.p2}</p>
        </div>
      </div>
    </section>
  );
};