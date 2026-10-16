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
      
      {/* Trama corporativa */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none z-0 ${isDark ? 'text-white' : 'text-black'}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="test-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="currentColor" />
              <circle cx="80" cy="40" r="5" fill="currentColor" />
              <circle cx="40" cy="80" r="2" fill="currentColor" />
              <path d="M20,20 L80,40 L40,80 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#test-pattern)" />
        </svg>
      </div>

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
              {/* Marca de agua editorial gigante */}
              <div className={`absolute -bottom-10 -right-6 text-[12rem] font-serif font-black leading-none pointer-events-none select-none z-0 transition-colors duration-300 ${isDark ? 'text-[#ff4f00] opacity-5 group-hover:opacity-10' : 'text-[#ff4f00] opacity-[0.03] group-hover:opacity-[0.08]'}`}>
                "
              </div>

              <div className="mb-8 relative z-10">
                <svg className={`w-8 h-8 mb-6 opacity-40 transition-colors duration-300 group-hover:opacity-100 ${isDark ? 'text-white group-hover:text-[#ff4f00]' : 'text-[#ff4f00]'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
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