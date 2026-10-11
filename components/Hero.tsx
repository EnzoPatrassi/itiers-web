'use client';

import React from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';

interface HeroProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      eyebrow: 'ITIERS DATA SENSE',
      title: 'Convertimos el caos de datos en decisiones estratégicas.',
      subtitle: 'Acompañamos a organizaciones líderes a desbloquear el valor de su información con un enfoque 100% personalizado.',
      primaryCta: 'Hablemos por WhatsApp',
      secondaryCta: 'Conocé qué hacemos',
      values: ['Confianza', 'Colaboración', 'Alegría', 'Resiliencia', 'Eficiencia'],
    },
    en: {
      eyebrow: 'ITIERS DATA SENSE',
      title: 'We turn data chaos into strategic decisions.',
      subtitle: 'We help leading organizations unlock the value of their information through a fully tailored approach.',
      primaryCta: 'Let\'s talk',
      secondaryCta: 'What we do',
      values: ['Trust', 'Collaboration', 'Joy', 'Resilience', 'Efficiency'],
    },
  }[currentLang];

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className={`relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0F0F0F] text-white' : 'bg-white text-[#1C1917]'
      }`}
    >
      <AnimatedBackground theme={theme} />

      {/* Subtle orange radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff4f00]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff4f00]/10 border border-[#ff4f00]/25 text-[#ff4f00] text-xs font-bold tracking-wider uppercase mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-[#ff4f00]" />
          {content.eyebrow}
        </div>

        {/* Headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto ${
            isDark ? 'text-white' : 'text-[#1C1917]'
          }`}
        >
          {content.title}
        </h1>

        {/* Subheadline */}
        <p
          className={`mt-6 text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-[#4d4d4d]'
          }`}
        >
          {content.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => handleScroll('#contacto')}
            className="w-full sm:w-auto bg-[#ff4f00] hover:bg-[#e04500] text-white text-base font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#ff4f00]/25 hover:shadow-[#ff4f00]/40 hover:-translate-y-0.5 focus:outline-none"
          >
            {content.primaryCta} →
          </button>
          <button
            type="button"
            onClick={() => handleScroll('#servicios')}
            className={`w-full sm:w-auto text-base font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none border ${
              isDark
                ? 'bg-[#1F1F1F] hover:bg-[#2A2A2A] text-white border-[#333333]'
                : 'bg-[#FAFAFA] hover:bg-gray-100 text-[#1F1F1F] border-[#b2b2b2]/60'
            }`}
          >
            {content.secondaryCta}
          </button>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-3" aria-label={currentLang === 'es' ? 'Pilares de Itiers' : 'Itiers values'}>
          {content.values.map((value) => (
            <span key={value} className={`rounded-full border px-4 py-2 text-sm ${
              isDark ? 'border-[#333333] bg-[#1A1A1A] text-[#f2f2f2]' : 'border-[#b2b2b2] bg-[#FAFAFA] text-[#1C1917]'
            }`}>
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
