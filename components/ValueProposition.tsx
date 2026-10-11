'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';

interface ValuePropositionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      badge: '¿Por qué Itiers?',
      title: 'Entrenar, transformar, guiar y globalizar tus datos',
      purpose: 'Itiers Data Sense tiene como propósito entrenar, transformar, guiar y globalizar los datos de tu organización de manera eficiente y efectiva.',
      actions: ['Entrenar', 'Transformar', 'Guiar', 'Globalizar'],
    },
    en: {
      badge: 'Why Itiers?',
      title: 'We train, transform, guide, and globalize your data',
      purpose: 'Itiers Data Sense aims to train, transform, guide, and globalize your organization’s data efficiently and effectively.',
      actions: ['Train', 'Transform', 'Guide', 'Globalize'],
    },
  }[currentLang];

  return (
    <section
      className={`py-20 border-t transition-colors duration-300 ${
        isDark
          ? 'bg-[#0F0F0F] text-white border-[#333333]/50'
          : 'bg-[#FAFAFA] text-[#1C1917] border-[#b2b2b2]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-3.5 py-1 rounded-full">
            {content.badge}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {content.title}
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
            {content.purpose}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.actions.map((action, index) => (
            <div
              key={action}
              className={`p-6 rounded-[16px] border flex items-center gap-4 ${
                isDark
                  ? 'bg-[#1A1A1A] border-[#333333]'
                  : 'bg-white border-[#b2b2b2]'
              }`}
            >
              <span className="text-xs font-bold text-[#ff4f00]">0{index + 1}</span>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
                {action}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
