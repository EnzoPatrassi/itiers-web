'use client';

import React from 'react';
import Image from 'next/image';
import { Locale } from '@/data/i18n';
import { ThemeMode } from '@/components/Header';

interface StageItem {
  title: string;
  image: string;
}

interface DataAISectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const DataAISection: React.FC<DataAISectionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      title: 'Entrenar, transformar, guiar y globalizar.',
      subtitle: 'Itiers Data Sense tiene como propósito entrenar, transformar, guiar y globalizar los datos de tu organización de manera eficiente y efectiva.',
      stages: [
        { title: 'Analítica & Pipelines', image: '/Gráfico - Proceso a data driven-1.svg' },
        { title: 'Insights de Datos & Causa Raíz', image: '/Gráfico - Proceso a data driven-2.svg' },
        { title: 'Predictivo & Machine Learning', image: '/Gráfico - Proceso a data driven-3.svg' },
        { title: 'Prescriptivo & Optimización', image: '/Gráfico - Proceso a data driven-4.svg' },
        { title: 'Cultura Data-Driven', image: '/Gráfico - Proceso a data driven-5.svg' },
        { title: 'IA & Automatización', image: '/Gráfico - Proceso a data driven-6.svg' },
      ] as StageItem[],
    },
    en: {
      title: 'Train, transform, guide, and globalize.',
      subtitle: 'Itiers Data Sense aims to train, transform, guide, and globalize your organization\'s data efficiently and effectively.',
      stages: [
        { title: 'Analytics & Pipelines', image: '/Gráfico - Proceso a data driven-1.svg' },
        { title: 'Data Insights & Root Cause', image: '/Gráfico - Proceso a data driven-2.svg' },
        { title: 'Predictive & Machine Learning', image: '/Gráfico - Proceso a data driven-3.svg' },
        { title: 'Prescriptive & Optimization', image: '/Gráfico - Proceso a data driven-4.svg' },
        { title: 'Data-Driven Culture', image: '/Gráfico - Proceso a data driven-5.svg' },
        { title: 'IA & Automation', image: '/Gráfico - Proceso a data driven-6.svg' },
      ] as StageItem[],
    },
  }[currentLang];

  return (
    <section
      id="data-ai"
      className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#1A1A1A]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 animate-fade-in-up">
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 ${isDark ? 'text-white' : 'text-[#4d4d4d]'}`}>
            {content.title}
          </h2>
          <p className={`text-xs sm:text-base font-medium max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-[#b2b2b2]' : 'text-[#898a8d]'}`}>
            {content.subtitle}
          </p>
        </div>

        <div className="relative">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 relative">
            
            <div className="hidden lg:block absolute top-[168px] -translate-y-1/2 left-[8%] right-[8%] h-[3px] bg-[#ff4f00] z-0"></div>

            {content.stages.map((stage, index) => (
              <div 
                key={stage.title} 
                className="flex flex-col items-center text-center relative z-10 group animate-fade-in-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-8 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 96px, 112px"
                  />
                </div>

                <div className="w-12 h-12 rounded-full bg-[#ff4f00] shadow-md mb-6 relative z-10"></div>

                <h3 className={`text-xs sm:text-sm font-extrabold tracking-wider uppercase leading-snug max-w-[160px] ${
                  isDark ? 'text-white' : 'text-[#4d4d4d]'
                }`}>
                  {stage.title}
                </h3>
                
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};