'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { INFO_ITIERS } from '@/data/mockData';

interface CareersSectionProps {
  currentLang: Locale;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ currentLang }) => {
  const content = {
    es: {
      badge: 'Unite a Itiers',
      title: 'Trabajá con nosotros',
      desc: 'Buscamos ingenieros de datos, analistas y entusiastas de la Inteligencia Artificial con pasión por resolver problemas de alto nivel.',
      cta: 'Ver oportunidades & Postularse',
    },
    en: {
      badge: 'Join Itiers',
      title: 'Work with us',
      desc: 'We are constantly seeking passionate data engineers, scientists, and AI architects looking to tackle enterprise challenges.',
      cta: 'View Opportunities & Apply',
    },
  }[currentLang];

  const googleFormUrl = INFO_ITIERS.googleFormWorkWithUs || '#';

  return (
    <section className="py-16 bg-[#0F0F0F] text-white border-t border-[#333333]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#1F1F1F]/60 border border-[#333333] rounded-3xl p-8 sm:p-10 relative overflow-hidden">
        <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-3.5 py-1 rounded-full">
          {content.badge}
        </span>
        <h2 className="mt-4 text-3xl font-bold text-white">{content.title}</h2>
        <p className="mt-3 text-gray-300 text-base max-w-xl mx-auto">
          {content.desc}
        </p>
        <div className="mt-6">
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#1F1F1F] hover:bg-[#ff4f00] text-[#ff4f00] hover:text-white border border-[#ff4f00] font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-md"
          >
            {content.cta} ↗
          </a>
        </div>
      </div>
    </section>
  );
};
