'use client';

import React, { useState } from 'react';
import { Locale } from '@/data/i18n';
import { SERVICIOS_ITIERS } from '@/data/mockData';
import { ThemeMode } from './Header';

interface ServicesProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const Services: React.FC<ServicesProps> = ({ currentLang, theme }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const isDark = theme === 'dark';

  const headerText = {
    es: {
      badge: 'Nuestros Servicios',
      title: 'Soluciones especializadas alineadas a objetivos de negocio',
      subtitle: 'Diseñamos e implementamos capacidades analíticas y tecnológicas que resuelven cuellos de botella clave en organizaciones exigentes.',
      ctaText: 'Hablemos sobre tu proyecto',
    },
    en: {
      badge: 'Our Services',
      title: 'Specialized solutions aligned with enterprise business goals',
      subtitle: 'We engineer analytical & technological capabilities that eliminate operational bottlenecks in demanding organizations.',
      ctaText: 'Discuss your project',
    },
  }[currentLang];

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="servicios"
      className={`py-24 relative transition-colors duration-300 ${
        isDark ? 'bg-[#0F0F0F] text-white' : 'bg-white text-[#1C1917]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full">
            {headerText.badge}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {headerText.title}
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
            {headerText.subtitle}
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICIOS_ITIERS.map((servicio, index) => {
            const isSelected = activeCard === servicio.id;

            return (
              <div
                key={servicio.id}
                onMouseEnter={() => setActiveCard(servicio.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(isSelected ? null : servicio.id)}
                className={`group relative rounded-3xl p-8 border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isSelected
                    ? 'border-[#ff4f00] shadow-2xl shadow-[#ff4f00]/15 -translate-y-2'
                    : isDark
                    ? 'bg-[#1F1F1F]/80 border-[#333333] hover:border-[#ff4f00]/60 hover:-translate-y-1'
                    : 'bg-[#FAFAFA] border-[#b2b2b2]/40 hover:border-[#ff4f00]/60 hover:-translate-y-1'
                }`}
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4f00]/10 blur-3xl pointer-events-none rounded-full group-hover:bg-[#ff4f00]/20 transition-all" />

                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className={`text-4xl p-3 border rounded-2xl group-hover:scale-110 transition-transform ${
                      isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-white border-[#b2b2b2]/40'
                    }`}>
                      {servicio.icono}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-[#ff4f00] uppercase tracking-wider">
                        0{index + 1} · Servicio
                      </span>
                      <h3 className={`text-2xl font-bold group-hover:text-[#ff4f00] transition-colors ${
                        isDark ? 'text-white' : 'text-[#1C1917]'
                      }`}>
                        {servicio.titulo}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
                  {servicio.descripcion}
                </p>

                {/* Features details list */}
                <div className={`border-t pt-6 mb-6 ${isDark ? 'border-[#333333]' : 'border-[#b2b2b2]/30'}`}>
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
                    {currentLang === 'es' ? 'Capacidades Clave:' : 'Key Capabilities:'}
                  </h4>
                  <ul className="space-y-2.5">
                    {servicio.detalles.map((detalle, idx) => (
                      <li key={idx} className={`flex items-start text-sm ${isDark ? 'text-gray-300' : 'text-[#1C1917]'}`}>
                        <svg
                          className="w-4 h-4 text-[#ff4f00] mr-2.5 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{detalle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA inside card */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleScroll('#contacto');
                    }}
                    className="inline-flex items-center text-sm font-bold text-[#ff4f00] hover:text-[#e04500] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    {headerText.ctaText} →
                  </button>
                  <span className="text-xs text-gray-400 font-mono">Itiers Data Sense</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
