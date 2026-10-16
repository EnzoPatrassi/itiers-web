'use client';

import React from 'react';
import { Locale } from '@/data/i18n';

interface CTASectionProps {
  currentLang: Locale;
}

export const CTASection: React.FC<CTASectionProps> = ({ currentLang }) => {
  const content = {
    es: {
      title: '¿Tenés un desafío complejo de datos o inteligencia artificial?',
      desc: 'Analizamos tus necesidades sin compromiso y te mostramos cómo acelerar tus proyectos analíticos en pocas semanas.',
      btn: 'Hablemos ahora',
    },
    en: {
      title: 'Facing a complex data or AI engineering challenge?',
      desc: 'We analyze your requirements with no obligation and demonstrate how to accelerate your analytics roadmap in weeks.',
      btn: 'Let\'s connect now',
    },
  }[currentLang];

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#141414] text-white border-y border-[#333333] relative overflow-hidden">
      
      {/* Trama corporativa Itiers */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 text-white">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="4" fill="currentColor" />
              <circle cx="90" cy="60" r="6" fill="currentColor" />
              <circle cx="50" cy="100" r="3" fill="currentColor" />
              <path d="M30,30 L90,60 L50,100 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      {/* Orbe de Luz IA (Efecto de resplandor tecnológico) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#ff4f00] rounded-full blur-[140px] opacity-20 pointer-events-none z-0"></div>

      {/* Acento naranja corporativo */}
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff4f00] to-transparent opacity-50"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {content.title}
        </h2>
        <p className="mt-6 text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          {content.desc}
        </p>
        <div className="mt-10">
          <button
            type="button"
            onClick={() => handleScroll('#contacto')}
            className="bg-[#ff4f00] hover:bg-[#e04500] text-white font-bold text-lg px-10 py-4 rounded-xl shadow-[0_0_20px_rgba(255,79,0,0.3)] hover:shadow-[0_0_40px_rgba(255,79,0,0.6)] transition-all hover:-translate-y-1 focus:outline-none"
          >
            {content.btn} →
          </button>
        </div>
      </div>
    </section>
  );
};