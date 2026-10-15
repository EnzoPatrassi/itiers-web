'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { TESTIMONIOS_ITIERS } from '@/data/mockData';

interface TestimonialsProps {
  currentLang: Locale;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
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
    <section className="py-24 bg-[#0F0F0F] text-white border-t border-[#333333]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full">
            {content.badge}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {content.title}
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIOS_ITIERS.map((testimonio) => (
            <div
              key={testimonio.id}
              className="p-8 rounded-3xl bg-[#1F1F1F]/70 border border-[#333333] hover:border-[#ff4f00]/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between"
            >
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{testimonio.cita}"
              </p>

              <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-[#333333] flex items-center space-x-3 mt-auto">
                <div>
                  <div className="text-sm font-semibold text-white">{testimonio.autor}</div>
                  <div className="text-xs text-[#ff4f00] font-bold uppercase tracking-wider">{testimonio.empresa}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};