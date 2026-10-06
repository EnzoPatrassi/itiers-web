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
      eyebrow: 'DATA · AI · TECHNOLOGY',
      title: 'Transformamos datos y tecnología en decisiones, eficiencia y resultados de alto impacto.',
      subtitle: 'Ayudamos a empresas a resolver desafíos complejos combinando análisis estratégico, ingeniería de datos y orquestación avanzada de Inteligencia Artificial.',
      primaryCta: 'Hablemos',
      secondaryCta: 'Conocé nuestras soluciones',
      metric1: '20+ años',
      metric1Label: 'de experiencia estratégica',
      metric2: 'IBM Watsonx',
      metric2Label: 'Global Tech Partner',
      metric3: '100%',
      metric3Label: 'orientados a ROI',
    },
    en: {
      eyebrow: 'DATA · AI · TECHNOLOGY',
      title: 'Transforming data and technology into decisions, efficiency, and high-impact results.',
      subtitle: 'We help enterprises solve complex business challenges by combining strategic analytics, data engineering, and advanced AI orchestration.',
      primaryCta: 'Let\'s talk',
      secondaryCta: 'Explore solutions',
      metric1: '20+ years',
      metric1Label: 'strategic expertise',
      metric2: 'IBM Watsonx',
      metric2Label: 'Global Tech Partner',
      metric3: '100%',
      metric3Label: 'ROI driven',
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
          {content.title.split('decisiones, eficiencia y resultados')[0]}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4f00] to-[#e04500]">
            decisiones, eficiencia y resultados
          </span>
          {content.title.split('decisiones, eficiencia y resultados')[1]}
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

        {/* Key Metrics strip */}
        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto border-t pt-8 ${
            isDark ? 'border-[#333333]/80' : 'border-[#b2b2b2]/30'
          }`}
        >
          <div
            className={`p-5 rounded-2xl border shadow-sm ${
              isDark ? 'bg-[#1F1F1F]/60 border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/40'
            }`}
          >
            <div className="text-2xl sm:text-3xl font-black text-[#ff4f00]">{content.metric1}</div>
            <div className={`text-xs font-semibold mt-1 ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
              {content.metric1Label}
            </div>
          </div>
          <div
            className={`p-5 rounded-2xl border shadow-sm ${
              isDark ? 'bg-[#1F1F1F]/60 border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/40'
            }`}
          >
            <div className={`text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-[#1F1F1F]'}`}>
              {content.metric2}
            </div>
            <div className={`text-xs font-semibold mt-1 ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
              {content.metric2Label}
            </div>
          </div>
          <div
            className={`p-5 rounded-2xl border shadow-sm ${
              isDark ? 'bg-[#1F1F1F]/60 border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/40'
            }`}
          >
            <div className="text-2xl sm:text-3xl font-black text-[#ff4f00]">{content.metric3}</div>
            <div className={`text-xs font-semibold mt-1 ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
              {content.metric3Label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
