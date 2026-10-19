'use client';

import React from 'react';
import Image from 'next/image';
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
      badge: '20 años de experiencia | Data Sense',
      partnerBadge: 'Partner Tecnológico de IBM Watsonx',
      titleFirstPart: 'Convertimos el caos de datos en',
      titleHighlight: 'decisiones estratégicas.',
      subtitle: 'Acompañamos a organizaciones líderes a desbloquear el valor de su información con un enfoque 100% personalizado.',
      primaryCta: 'Hablemos por WhatsApp',
      secondaryCta: 'Ver servicios',
    },
    en: {
      badge: '20 Years of Experience | Data Sense',
      partnerBadge: 'Technology Partner of IBM Watsonx',
      titleFirstPart: 'We turn data chaos into',
      titleHighlight: 'strategic decisions.',
      subtitle: 'We help leading organizations unlock the value of their information with a 100% personalized approach.',
      primaryCta: 'Talk on WhatsApp',
      secondaryCta: 'View services',
    },
  }[currentLang];

  return (
    <section id="inicio" className="relative w-full min-h-[100svh] flex items-center justify-start pt-28 pb-16 overflow-hidden bg-black">
      
      {/* Imagen de fondo adaptativa */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner-itiers.jpg"
          alt="Itiers Data Sense Hero Banner"
          fill
          priority
          className="object-cover object-[75%_center] sm:object-center"
          sizes="100vw"
        />
        {/* Degradé responsivo: Envolvente en móvil para legibilidad, lateral en PC */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black sm:bg-gradient-to-r sm:from-black/90 sm:via-black/50 sm:to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 sm:py-20">
        
        {/* Contenido alineado a la izquierda */}
        <div className="max-w-3xl text-left mt-8 sm:mt-0">
          
          <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 text-[#ff4f00] font-bold text-[10px] sm:text-xs tracking-wider uppercase bg-[#ff4f00]/20 border border-[#ff4f00]/40 px-3 sm:px-4 py-1.5 rounded-full backdrop-blur-md">
              {content.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6 text-white">
            {content.titleFirstPart} <br />
            <span className="text-[#ff4f00] relative inline-block mt-1 sm:mt-2">
              {content.titleHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-200 max-w-xl leading-relaxed mb-8 sm:mb-10 font-normal">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#contacto" className="inline-flex justify-center items-center px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#ff4f00] hover:bg-[#e04500] rounded-full transition-all hover:scale-105 shadow-xl shadow-[#ff4f00]/30 w-full sm:w-auto">
              {content.primaryCta}
            </a>
            <a href="#servicios-cards" className="inline-flex justify-center items-center px-8 py-4 text-sm sm:text-base font-bold text-white border border-white/40 hover:bg-white/10 rounded-full transition-all backdrop-blur-sm w-full sm:w-auto">
              {content.secondaryCta}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};