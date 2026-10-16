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
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-start pt-24 pb-16 overflow-hidden bg-black">
      
      {/* Imagen de fondo panorámica clara y natural, con un degradé lateral suave solo para contraste del texto */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner-itiers.jpg"
          alt="Itiers Data Sense Hero Banner"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Degradé sutil lateral alineado a la izquierda */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        
        {/* Contenido alineado a la izquierda con tus textos originales */}
        <div className="max-w-3xl text-left">
          
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 text-[#ff4f00] font-bold text-xs tracking-wider uppercase bg-[#ff4f00]/20 border border-[#ff4f00]/40 px-4 py-1.5 rounded-full backdrop-blur-md">
              {content.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            {content.titleFirstPart} <br />
            <span className="text-[#ff4f00] relative inline-block mt-2">
              {content.titleHighlight}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 max-w-xl leading-relaxed mb-10 font-normal">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contacto" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-[#ff4f00] hover:bg-[#e04500] rounded-full transition-all hover:scale-105 shadow-xl shadow-[#ff4f00]/30">
              {content.primaryCta}
            </a>
            <a href="#servicios-cards" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white border border-white/40 hover:bg-white/10 rounded-full transition-all backdrop-blur-sm">
              {content.secondaryCta}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};