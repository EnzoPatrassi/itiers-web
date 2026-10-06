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
    <section className="py-20 bg-gradient-to-r from-[#1F1F1F] via-[#2A160F] to-[#1F1F1F] text-white border-y border-[#ff4f00]/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#ff4f00]/5 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {content.title}
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          {content.desc}
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => handleScroll('#contacto')}
            className="bg-[#ff4f00] hover:bg-[#e04500] text-white font-bold text-lg px-9 py-4 rounded-xl shadow-xl shadow-[#ff4f00]/30 hover:shadow-[#ff4f00]/50 transition-all hover:-translate-y-1 focus:outline-none"
          >
            {content.btn} →
          </button>
        </div>
      </div>
    </section>
  );
};
