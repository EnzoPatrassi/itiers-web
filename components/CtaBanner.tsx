'use client';

import React from 'react';
import { Locale } from '@/data/i18n';

interface CtaBannerProps {
  currentLang: Locale;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ currentLang }) => {
  const content = {
    es: {
      title: 'Impulsa el éxito de tu negocio en la era de los datos.',
      subtitle: 'Descubre cómo Itiers Data Sense puede aplicar inteligencia de datos en las áreas de mayor impacto para tu empresa.',
      button: 'HABLEMOS AHORA',
    },
    en: {
      title: 'Achieve business success in the data and AI race.',
      subtitle: 'Know that you are applying data & AI to the areas that will be most impactful to your business.',
      button: 'CONTACT US NOW',
    }
  }[currentLang];

  return (
    <section className="relative w-full py-20 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-[#ff4f00] to-[#6a6969] z-0"></div>

      <div className="absolute inset-0 bg-black/10 mix-blend-overlay z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-md">
          {content.title}
        </h2>
        
        <p className="text-base sm:text-lg text-white/90 max-w-2xl mb-10 font-medium">
          {content.subtitle}
        </p>
        
        <a 
          href="#contacto" 
          className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold text-white bg-[#ff4f00] hover:bg-[#e04500] rounded-full transition-all hover:scale-105 shadow-xl uppercase tracking-widest border border-white/20"
        >
          {content.button}
        </a>

      </div>
    </section>
  );
};