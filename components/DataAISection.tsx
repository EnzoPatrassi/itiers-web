'use client';

import React from 'react';
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
    },
    en: {
      badge: 'What we do',
      title: 'Train, Transform, Guide, and Globalize',
      subtitle: 'Itiers Data Sense aims to TRAIN, TRANSFORM, GUIDE, and GLOBALIZE your organizations data efficiently and effectively.',
      stages: ['Descriptive', 'Diagnosis', 'Predictive', 'Prescriptive', 'Data-Driven Business'],
    },
  }[currentLang];

  const renderStepIcon = (index: number) => {
    const iconClass = "w-5 h-5";
    switch (index) {
      case 0:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="4" y="16" width="4" height="4" rx="1" />
            <rect x="10" y="10" width="4" height="10" rx="1" />
            <rect x="16" y="4" width="4" height="16" rx="1" />
          </svg>
        );
      case 1:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3" />
          </svg>
        );
      case 2:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-5 5-4-4-3 3" />
          </svg>
        );
      case 3:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M2 14h4M10 8h4M18 16h4" />
          </svg>
        );
      case 4:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="data-ai"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
          <span className="text-[#ff4f00] font-bold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full inline-block mb-6">
            {content.badge}
          </span>
          <h2 className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8 ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {content.title}.
          </h2>
          <p className={`text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
          {content.stages.map((stage, index) => (
            <div key={stage} className="flex flex-col relative group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              
              <div className="flex items-center w-full mb-6">
                <span className="text-5xl md:text-6xl font-black text-[#ff4f00] tracking-tighter mr-4">
                  0{index + 1}
                </span>

                <div className={`flex-1 h-[2px] transition-colors duration-300 group-hover:bg-[#ff4f00] ${
                  isDark ? 'bg-[#333333]' : 'bg-gray-200'
                }`}></div>
              </div>

              <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[#ff4f00] group-hover:text-[#ff4f00] group-hover:-translate-y-1 ${
                isDark ? 'border-[#333333] text-gray-400 bg-[#1A1A1A]' : 'border-gray-200 text-gray-400 bg-[#FAFAFA]'
              }`}>
                {renderStepIcon(index)}
              </div>

              <h3 className={`text-lg font-bold tracking-wide transition-colors ${
                isDark ? 'text-white' : 'text-[#1C1917]'
              }`}>
                {stage}
              </h3>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};