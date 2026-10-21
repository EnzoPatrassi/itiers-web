'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { SERVICIOS_ITIERS } from '@/data/mockData';
import { ThemeMode } from '@/components/Header';

interface ServicesProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const Services: React.FC<ServicesProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const headerText = {
    es: {
      title: '¿Por qué contratar Itiers?',
      subtitle: 'Descubre nuestros pilares de servicio diseñados para transformar tu organización.',
      serviceLabel: 'Servicio',
    },
    en: {
      title: 'Why hire Itiers?',
      subtitle: 'Discover our service pillars designed to transform your organization.',
      serviceLabel: 'Service',
    },
  }[currentLang];

  const renderCorporateIcon = (originalIcon: string, index: number) => {
    switch (index) {
      case 0: 
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        );
      case 1: 
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 2: 
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 3: 
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      default:
        return <span className="text-4xl">{originalIcon}</span>;
    }
  };

  return (
    <section id="servicios-cards" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#1A1A1A] text-white' : 'bg-[#f9f9f9] text-[#4d4d4d]'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#4d4d4d]'}`}>
            {headerText.title}
          </h2>
          <p className={`mt-6 text-base sm:text-lg ${isDark ? 'text-[#b2b2b2]' : 'text-[#898a8d]'}`}>
            {headerText.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICIOS_ITIERS.map((servicio, index) => {
            const copy = currentLang === 'es' ? servicio.es : servicio.en;
            
            return (
              <article 
                key={servicio.id} 
                className={`group relative overflow-hidden flex flex-col rounded-3xl border transition-all duration-500 h-[420px] lg:h-[480px] shadow-sm hover:shadow-2xl hover:border-[#ff4f00]/50 ${isDark ? 'bg-[#2A2A2A] border-[#4d4d4d]' : 'bg-white border-[#b2b2b2]'}`}
              >
                <div className="absolute inset-0 p-8 sm:p-10 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-8 z-10">
                  <span className="text-[#ff4f00] mb-6 drop-shadow-md">
                    {renderCorporateIcon(servicio.icono || '', index)}
                  </span>
                  <span className="text-xs font-bold text-[#ff4f00] uppercase tracking-widest mb-3">
                    0{index + 1} · {headerText.serviceLabel}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-[#4d4d4d]'}`}>
                    {copy.titulo}
                  </h3>
                </div>

                <div className={`absolute inset-0 p-8 sm:p-10 flex flex-col justify-center transition-all duration-500 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 z-20 ${isDark ? 'bg-[#2A2A2A]' : 'bg-white'}`}>
                  
                  <h3 className="text-xl font-bold text-[#ff4f00] mb-4">
                    {copy.titulo}
                  </h3>
                  
                  <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#898a8d]'}`}>
                    {copy.descripcion}
                  </p>
                  
                  <div className={`border-t pt-6 ${isDark ? 'border-[#4d4d4d]' : 'border-gray-200'}`}>
                    <ul className="space-y-3">
                      {copy.detalles.map((detalle, idx) => (
                        <li key={idx} className={`flex items-start text-xs sm:text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          <svg className="w-4 h-4 text-[#ff4f00] mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detalle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};