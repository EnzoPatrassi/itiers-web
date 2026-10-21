'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from '@/components/Header';

interface DataAISectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const DataAISection: React.FC<DataAISectionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      title: 'Entrenar, Transformar, Guiar y Globalizar',
      subtitle: 'Itiers Data Sense tiene como propósito ENTRENAR, TRANSFORMAR, GUIAR y GLOBALIZAR los datos de tu organización de manera eficiente y efectiva.',
      stages: [
        'Analytics & Pipelines', 
        'Data Insights & Root Cause', 
        'Predictive & Machine Learning', 
        'Prescriptive & Optimization', 
        'Data-Driven Culture',
        'IA & Automation'
      ],
    },
    en: {
      title: 'Train, Transform, Guide, and Globalize',
      subtitle: 'Itiers Data Sense aims to TRAIN, TRANSFORM, GUIDE, and GLOBALIZE your organization\'s data efficiently and effectively.',
      stages: [
        'Analytics & Pipelines', 
        'Data Insights & Root Cause', 
        'Predictive & Machine Learning', 
        'Prescriptive & Optimization', 
        'Data-Driven Culture',
        'AI & Automation'
      ],
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
      case 5:
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
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
        isDark ? 'bg-[#1A1A1A] border-[#4d4d4d]' : 'bg-white border-[#b2b2b2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.1] mb-6 ${isDark ? 'text-white' : 'text-[#4d4d4d]'}`}>
            {content.title}.
          </h2>
          <p className={`text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-[#b2b2b2]' : 'text-[#898a8d]'}`}>
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 relative z-10">
          {content.stages.map((stage, index) => (
            <div key={stage} className="flex flex-col relative group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              
              <div className="flex items-center w-full mb-6">
                <span className="text-4xl md:text-5xl font-black text-[#ff4f00] tracking-tighter mr-3">
                  0{index + 1}
                </span>

                <div className={`flex-1 h-[2px] transition-colors duration-300 group-hover:bg-[#ff4f00] ${
                  isDark ? 'bg-[#4d4d4d]' : 'bg-[#b2b2b2]'
                }`}></div>
              </div>

              <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-5 transition-all duration-300 group-hover:border-[#ff4f00] group-hover:text-[#ff4f00] group-hover:-translate-y-1 ${
                isDark ? 'border-[#4d4d4d] text-[#b2b2b2] bg-[#1A1A1A]' : 'border-[#b2b2b2] text-[#898a8d] bg-[#f9f9f9]'
              }`}>
                {renderStepIcon(index)}
              </div>

              <h3 className={`text-sm sm:text-base font-bold tracking-wide transition-colors leading-snug pr-2 ${
                isDark ? 'text-white' : 'text-[#4d4d4d]'
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