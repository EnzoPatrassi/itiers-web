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
    <section id="inicio" className={`relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F]' : 'bg-[#FAFAFA]'}`}>
      
      {/* Contenedor principal expandido para que la imagen sea bien ancha */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* --- ETIQUETAS (Flotando arriba, fuera de la imagen) --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-[#ff4f00] font-bold text-[10px] sm:text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full">
            {content.badge}
          </span>
          <span className={`inline-flex items-center gap-2 font-bold text-[10px] sm:text-xs tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm border ${
            isDark ? 'bg-[#1A1A1A] text-white border-[#333333]' : 'bg-white text-[#1C1917] border-[#b2b2b2]/40'
          }`}>
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            {content.partnerBadge}
          </span>
        </div>

        {/* --- CAJA PRINCIPAL CON IMAGEN DE FONDO (Panorámica) --- */}
        <div className={`relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl border mb-10 transition-colors duration-300 animate-fade-in-up ${
          isDark ? 'border-[#333333]/50' : 'border-[#b2b2b2]/30'
        }`} style={{ animationDelay: '0.1s' }}>
          
          {/* Imagen de fondo extendida */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-banner-itiers.jpg"
              alt="Itiers Data Sense Hero Banner"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
            {/* Overlay para mantener legibilidad */}
            <div className={`absolute inset-0 transition-colors duration-300 ${
              isDark ? 'bg-[#0F0F0F]/80' : 'bg-white/85'
            }`}></div>
          </div>

          {/* Texto restringido al centro para que no sea infinito de leer */}
          <div className="relative z-10 px-6 py-16 sm:px-12 md:py-28 max-w-5xl mx-auto">
            <h1 className={`text-4xl sm:text-5xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.15] md:leading-[1.1] mb-6 ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
              {content.titleFirstPart} <br className="hidden sm:block" />
              <span className="text-[#ff4f00] relative inline-block group mt-1 md:mt-2">
                {content.titleHighlight}
                <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-[#ff4f00]/30 group-hover:text-[#ff4f00]/70 transition-colors duration-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>

            <p className={`text-base sm:text-lg lg:text-2xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
              {content.subtitle}
            </p>
          </div>
        </div>

        {/* --- BOTONES (Abajo, fuera de la imagen) --- */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <a href="#contacto" className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 text-sm md:text-base font-bold text-white bg-[#ff4f00] hover:bg-[#e04500] rounded-xl transition-all md:hover:scale-105 shadow-lg shadow-[#ff4f00]/20">
            {content.primaryCta}
          </a>
          <a href="#servicios-cards" className={`w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 text-sm md:text-base font-bold border rounded-xl transition-all ${
            isDark ? 'text-white border-[#333333] hover:bg-[#1A1A1A]/80' : 'text-[#1C1917] border-[#b2b2b2] hover:bg-white shadow-sm'
          }`}>
            {content.secondaryCta}
          </a>
        </div>

      </div>
    </section>
  );
};