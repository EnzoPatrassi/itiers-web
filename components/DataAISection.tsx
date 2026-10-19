'use client';

import React from 'react';
import Image from 'next/image';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';

interface DataAISectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const DataAISection: React.FC<DataAISectionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      badge: 'Qué hacemos',
      title: 'Entrenar, Transformar, Guiar y Globalizar',
      subtitle: 'Itiers Data Sense tiene como propósito ENTRENAR, TRANSFORMAR, GUIAR y GLOBALIZAR los datos de tu organización de manera eficiente y efectiva.',
      stages: ['Descriptiva', 'Diagnóstico', 'Predictiva', 'Prescriptiva', 'Data-Driven Business'],
      imageAlt: 'Flujo de datos: Descriptiva, Diagnóstico, Predictiva, Prescriptiva y Data-Driven Business.',
    },
    en: {
      badge: 'What we do',
      title: 'Train, Transform, Guide, and Globalize',
      subtitle: 'Itiers Data Sense aims to TRAIN, TRANSFORM, GUIDE, and GLOBALIZE your organizations data efficiently and effectively.',
      stages: ['Descriptive', 'Diagnosis', 'Predictive', 'Prescriptive', 'Data-Driven Business'],
      imageAlt: 'Data flow: Descriptive, Diagnosis, Predictive, Prescriptive, and Data-Driven Business.',
    },
  }[currentLang];

  return (
    <section
      id="data-ai"
      className={`py-24 relative border-t overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0F0F0F] text-white border-[#333333]' : 'bg-[#FAFAFA] text-[#1C1917] border-[#b2b2b2]/30'
      }`}
    >
      {/* Trama corporativa de fondo */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none z-0 ${isDark ? 'text-white' : 'text-black'}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="data-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="currentColor" />
              <circle cx="80" cy="40" r="5" fill="currentColor" />
              <circle cx="40" cy="80" r="2" fill="currentColor" />
              <path d="M20,20 L80,40 L40,80 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#data-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#ff4f00] font-bold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full">
            {content.badge}
          </span>
          <h2 className={`mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {content.title}
          </h2>
          <p className={`mt-6 text-base sm:text-lg font-medium max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
            {content.subtitle}
          </p>
        </div>

        {/* Tarjeta con Glassmorphism */}
        <div className={`rounded-[2rem] border p-6 sm:p-10 shadow-xl backdrop-blur-xl ${
          isDark ? 'bg-[#1A1A1A]/80 border-[#333333]' : 'bg-white/80 border-[#b2b2b2]/40'
        }`}>
          <figure className="rounded-[1rem] overflow-hidden border border-[#b2b2b2]/20 mb-12">
            <Image 
              src="/flujo-de-datos.jpg" 
              alt="Flujo de datos" 
              width={800} 
              height={600} 
              className="w-full h-auto object-cover rounded-2xl" 
            />
          </figure>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-6 left-0 w-full h-1 bg-gradient-to-r from-[#ff4f00]/20 via-[#ff4f00]/50 to-[#ff4f00]/20 rounded-full"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-0 relative z-10">
              {content.stages.map((stage, index) => (
                <div key={stage} className="flex flex-col items-center lg:items-start relative group">
                  <div className="flex justify-center w-full lg:w-auto lg:justify-start mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-transform duration-300 group-hover:scale-110 shadow-lg ${
                      isDark ? 'bg-[#141414] border-[#ff4f00]' : 'bg-white border-[#ff4f00]'
                    }`}>
                      <span className="text-sm font-black text-[#ff4f00]">0{index + 1}</span>
                    </div>
                  </div>

                  <div className={`text-center lg:text-left px-2 w-full ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
                    <h3 className={`text-sm font-bold tracking-wide uppercase transition-colors group-hover:text-[#ff4f00] ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
                      {stage}
                    </h3>
                  </div>

                  {index < content.stages.length - 1 && (
                    <div className="block lg:hidden w-1 h-8 bg-[#ff4f00]/30 my-2 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};