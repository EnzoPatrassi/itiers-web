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
      title: 'Del análisis de datos al Data-Driven Business',
      subtitle: 'Un recorrido que abarca el análisis descriptivo, el diagnóstico, la predicción y la prescripción.',
      stages: ['Descriptiva', 'Diagnóstico', 'Predictiva', 'Prescriptiva', 'Data-Driven Business'],
      imageAlt: 'Flujo de datos: Descriptiva, Diagnóstico, Predictiva, Prescriptiva y Data-Driven Business.',
    },
    en: {
      badge: 'What we do',
      title: 'From data analysis to a data-driven business',
      subtitle: 'A journey through descriptive analysis, diagnosis, prediction, and prescription.',
      stages: ['Descriptive', 'Diagnosis', 'Predictive', 'Prescriptive', 'Data-Driven Business'],
      imageAlt: 'Data flow: Descriptive, Diagnosis, Predictive, Prescriptive, and Data-Driven Business.',
    },
  }[currentLang];

  return (
    <section
      id="data-ai"
      className={`py-24 border-t relative overflow-hidden transition-colors duration-300 ${
        isDark
          ? 'bg-[#0F0F0F] text-white border-[#333333]/60'
          : 'bg-[#FAFAFA] text-[#1C1917] border-[#b2b2b2]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full">
            {content.badge}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {content.title}
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
            {content.subtitle}
          </p>
        </div>

        <div className={`rounded-[16px] border p-5 sm:p-8 ${
          isDark ? 'bg-[#1A1A1A] border-[#333333]' : 'bg-white border-[#b2b2b2]'
        }`}>
          <figure>
            <Image
              src="/flujo-de-datos.jpg"
              alt={content.imageAlt}
              width={907}
              height={302}
              className="mx-auto h-auto w-full max-w-[906px]"
            />
            <figcaption className={`mt-6 text-center text-sm ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
              {content.subtitle}
            </figcaption>
          </figure>
          <ol className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {content.stages.map((stage, index) => (
              <li key={stage} className={`border-t-2 border-[#ff4f00] pt-3 text-sm font-semibold ${
                isDark ? 'text-white' : 'text-[#1C1917]'
              }`}>
                <span className="mr-2 text-[#ff4f00]">0{index + 1}</span>
                {stage}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
