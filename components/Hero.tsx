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
    <section id="inicio" className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden transition-colors duration-300 animate-fade-in-up ${isDark ? 'bg-[#0F0F0F]' : 'bg-[#FAFAFA]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            
            {/* Etiquetas Superiores (Experiencia + Partner) */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-3 mb-8">
              <span className="inline-flex items-center gap-2 text-[#ff4f00] font-bold text-[10px] sm:text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full">
                {content.badge}
              </span>
              <span className={`inline-flex items-center gap-2 font-bold text-[10px] sm:text-xs tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm border ${isDark ? 'bg-[#1A1A1A] text-white border-[#333333]' : 'bg-white text-[#1C1917] border-[#b2b2b2]/40'}`}>
                {/* Puntito azul palpitante (simulando tecnología/conexión) */}
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                {content.partnerBadge}
              </span>
            </div>

            {/* Título de Alto Impacto (Estilo Rockborne) */}
            <h1 className={`text-4xl sm:text-5xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.1] mb-6 ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
              {content.titleFirstPart} <br className="hidden sm:block" />
              <span className="text-[#ff4f00] relative inline-block group">
                {content.titleHighlight}
                {/* Subrayado de arco que se ilumina al pasar el mouse */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#ff4f00]/30 group-hover:text-[#ff4f00]/70 transition-colors duration-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>

            <p className={`text-lg sm:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
              {content.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contacto" className="inline-flex justify-center items-center px-8 py-3.5 text-base font-bold text-white bg-[#ff4f00] hover:bg-[#e04500] rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#ff4f00]/20">
                {content.primaryCta}
              </a>
              <a href="#servicios-cards" className={`inline-flex justify-center items-center px-8 py-3.5 text-base font-bold border rounded-xl transition-all ${isDark ? 'text-white border-[#333333] hover:bg-[#1A1A1A]' : 'text-[#1C1917] border-[#b2b2b2] hover:bg-white shadow-sm'}`}>
                {content.secondaryCta}
              </a>
            </div>
          </div>
          
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-[#333333]/30 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Image
              src="/hero-banner-itiers.jpg"
              alt="Itiers Data Sense Hero Banner"
              width={2400}
              height={1235}
              priority
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};