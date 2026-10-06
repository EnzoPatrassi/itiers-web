'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { CASOS_ITIERS } from '@/data/mockData';

interface TestimonialsProps {
  currentLang: Locale;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const content = {
    es: {
      badge: 'Social Proof & Casos de Éxito',
      title: 'Confianza demostrada en proyectos críticos de la industria',
      subtitle: 'Así transformamos la complejidad de datos en ventajas competitivas reales para nuestros clientes.',
    },
    en: {
      badge: 'Social Proof & Case Studies',
      title: 'Proven enterprise trust in mission-critical deployments',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASOS_ITIERS.map((caso) => (
            <div
              key={caso.id}
              className="p-8 rounded-3xl bg-[#1F1F1F]/70 border border-[#333333] hover:border-[#ff4f00]/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl p-3 bg-[#0F0F0F] border border-[#333333] rounded-2xl">
                    {caso.icono}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#ff4f00] uppercase tracking-wider">
                      {caso.cliente}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#ff4f00] transition-colors">
                      {caso.titulo}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{caso.descripcion}"
              </p>

              <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-[#333333] flex items-center space-x-3">
                <span className="text-[#ff4f00] font-bold text-lg">📈</span>
                <div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Impacto Obtenido:</div>
                  <div className="text-xs font-semibold text-white mt-0.5">{caso.impacto}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
