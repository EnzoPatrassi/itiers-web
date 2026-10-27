'use client';

import React, { useState } from 'react';
import { Locale } from '@/data/i18n';
import { SERVICIOS_ITIERS } from '@/data/mockData';
import { ThemeMode } from '@/components/Header';

interface ServicesProps {
  currentLang: Locale;
  theme: ThemeMode;
}

const ExpandableServiceCard = ({ 
  servicio, 
  index, 
  currentLang, 
  isDark, 
  headerText, 
  renderCorporateIcon,
  isExpanded,
  onToggle
}: { 
  servicio: any, 
  index: number, 
  currentLang: Locale, 
  isDark: boolean, 
  headerText: any,
  renderCorporateIcon: (icon: string, index: number) => React.ReactNode,
  isExpanded: boolean,
  onToggle: () => void
}) => {
  const copy = currentLang === 'es' ? servicio.es : servicio.en;
  
  const viewMore = currentLang === 'es' ? 'Ver más' : 'See more';
  const viewLess = currentLang === 'es' ? 'Ver menos' : 'See less';

  return (
    <article 
      className={`relative h-full flex flex-col items-center text-center p-6 sm:p-8 rounded-[2rem] border transition-all duration-500 shadow-sm hover:shadow-xl hover:border-[#ff4f00]/40 ${
        isDark ? 'bg-[#2A2A2A] border-[#4d4d4d]' : 'bg-white border-[#b2b2b2]'
      }`}
    >
      <div className="flex flex-col items-center justify-center mb-4 shrink-0">
        <span className="text-[#ff4f00] mb-2 drop-shadow-sm">
          {renderCorporateIcon(servicio.icono || '', index)}
        </span>
        <span className="text-xs font-bold text-[#ff4f00] uppercase tracking-widest">
          0{index + 1} · {headerText.serviceLabel}
        </span>
      </div>
      
      <div className="my-auto flex flex-col items-center justify-center w-full">
        <h3 className={`text-xl sm:text-2xl font-bold mb-4 px-2 text-center ${isDark ? 'text-white' : 'text-[#4d4d4d]'}`}>
          {copy.titulo}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 max-w-sm sm:max-w-md mx-auto px-2 text-center ${isDark ? 'text-[#b2b2b2]' : 'text-[#898a8d]'}`}>
          {copy.descripcion}
        </p>
      </div>

      <button
        onClick={onToggle}
        className="mt-4 text-[#ff4f00] font-bold text-xs sm:text-sm uppercase tracking-wider hover:underline focus:outline-none transition-all duration-300 shrink-0 pt-2"
      >
        {isExpanded ? viewLess : viewMore}
      </button>

      <div 
        className={`w-full text-left overflow-hidden transition-all duration-500 ease-in-out shrink-0 ${
          isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className={`border-t pt-5 ${isDark ? 'border-[#4d4d4d]' : 'border-gray-200'}`}>
          <ul className="space-y-3">
            {copy.detalles.map((detalle: string, idx: number) => {
              const parts = detalle.split(':');
              return (
                <li key={idx} className={`flex items-start text-xs sm:text-sm font-medium leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#666666]'}`}>
                  <svg className="w-4 h-4 text-[#ff4f00] mr-2.5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    {parts.length > 1 ? (
                      <>
                        <strong className={isDark ? 'text-white' : 'text-[#4d4d4d]'}>{parts[0]}:</strong>
                        {parts.slice(1).join(':')}
                      </>
                    ) : (
                      detalle
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
};

export const Services: React.FC<ServicesProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
          <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        );
      case 1: 
        return (
          <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 2: 
        return (
          <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 3: 
        return (
          <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 4: 
        return (
          <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 5: 
        return (
          <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr max-w-7xl mx-auto">
          {SERVICIOS_ITIERS.map((servicio, index) => (
            <ExpandableServiceCard 
              key={servicio.id || index}
              servicio={servicio}
              index={index}
              currentLang={currentLang}
              isDark={isDark}
              headerText={headerText}
              renderCorporateIcon={renderCorporateIcon}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};