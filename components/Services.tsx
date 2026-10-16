'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { SERVICIOS_ITIERS } from '@/data/mockData';
import { ThemeMode } from './Header';

interface ServicesProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const Services: React.FC<ServicesProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const headerText = {
    es: {
      badge: 'Servicios',
      title: '¿Por qué contratar Itiers?',
      subtitle: 'Descubre nuestros pilares de servicio diseñados para transformar tu organización.',
      ctaText: 'Consultanos por WhatsApp',
      serviceLabel: 'Servicio',
    },
    en: {
      badge: 'Services',
      title: 'Why hire Itiers?',
      subtitle: 'Discover our service pillars designed to transform your organization.',
      ctaText: 'Contact us on WhatsApp',
      serviceLabel: 'Service',
    },
  }[currentLang];

  return (
    <section id="servicios-cards" className={`py-24 relative transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] text-white' : 'bg-white text-[#1C1917]'}`}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICIOS_ITIERS.map((servicio, index) => {

            const copy = currentLang === 'es' ? servicio.es : servicio.en;
            
            return (
              <article key={servicio.id} className={`flex flex-col rounded-[16px] p-6 border transition-colors ${isDark ? 'bg-[#1A1A1A] border-[#333333] hover:border-[#ff4f00]' : 'bg-[#FAFAFA] border-[#b2b2b2] hover:border-[#ff4f00]'}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className={`text-2xl font-semibold p-3 border rounded-[12px] ${isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-white border-[#b2b2b2]'}`} aria-hidden="true">
                      {servicio.icono}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-[#ff4f00] uppercase tracking-wider">
                        0{index + 1} · {headerText.serviceLabel}
                      </span>
                      <h3 className={`text-xl font-bold mt-1 ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>{copy.titulo}</h3>
                    </div>
                  </div>
                </div>
                <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>{copy.descripcion}</p>
                <div className={`border-t pt-5 mt-auto ${isDark ? 'border-[#333333]' : 'border-[#b2b2b2]'}`}>
                  <ul className="space-y-3">
                    {copy.detalles.map((detalle) => (
                      <li key={detalle} className={`flex items-start text-sm ${isDark ? 'text-gray-300' : 'text-[#1C1917]'}`}>
                        <svg className="w-4 h-4 text-[#ff4f00] mr-2.5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detalle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-5 mt-5 border-t border-[#b2b2b2]">
                  <a href="#contacto" className="inline-flex items-center text-sm font-bold text-[#ff4f00] hover:text-[#e04500]">
                    {headerText.ctaText} →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};