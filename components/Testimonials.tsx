'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { TESTIMONIOS_ITIERS } from '@/data/mockData';
import { ThemeMode } from './Header';

interface TestimonialsProps {
  currentLang: Locale;
  theme?: ThemeMode;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang, theme = 'light' }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      badge: 'Testimonios',
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'Así transformamos la complejidad de datos en ventajas competitivas reales para nuestros clientes.',
    },
    en: {
      badge: 'Testimonials',
      title: 'What our clients say',
      subtitle: 'Here is how we turn data complexity into real competitive advantages for our partners.',
    },
  }[currentLang];

  return (
    <section className={`py-24 border-t relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] text-white border-[#333333]' : 'bg-[#FAFAFA] text-[#1C1917] border-[#b2b2b2]/30'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-[#ff4f00] font-bold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full">
            {content.badge}
          </span>
          <h2 className={`mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {content.title}
          </h2>
          <p className={`mt-6 text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIOS_ITIERS.map((testimonio, index) => (
            <div
              key={testimonio.id}
              className={`p-10 rounded-[2rem] border hover:border-[#ff4f00]/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group flex flex-col justify-between animate-fade-in-up backdrop-blur-xl ${
                isDark ? 'bg-[#1A1A1A]/80 border-[#333333]' : 'bg-white/80 border-[#b2b2b2]/40'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-8 relative z-10">
                <p className={`text-base leading-relaxed italic font-medium ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
                  "{testimonio.cita}"
                </p>
              </div>

              <div className={`p-5 rounded-2xl border flex items-center space-x-4 mt-auto transition-colors relative z-10 ${isDark ? 'bg-[#0F0F0F] border-[#333333] group-hover:border-[#ff4f00]/30' : 'bg-white border-[#b2b2b2]/30 group-hover:border-[#ff4f00]/30'}`}>
                <div>
                  <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>{testimonio.autor}</div>
                  <div className="text-xs text-[#ff4f00] font-black uppercase tracking-widest mt-1">{testimonio.empresa}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};