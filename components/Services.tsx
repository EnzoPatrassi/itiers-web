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

  // Función para reemplazar visualmente los emojis por SVGs corporativos
  const renderCorporateIcon = (originalIcon: string, index: number) => {
    switch (index) {
      case 0: // Ingeniería de Datos
        return (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        );
      case 1: // IA & Automatizaciones (Reemplaza al 🤖)
        return (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 2: // Capacitaciones
        return (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 3: // Staffing
        return (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      default:
        return <span className="text-2xl">{originalIcon}</span>;
    }
  };

  return (
    <section id="servicios-cards" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] text-white' : 'bg-[#FAFAFA] text-[#1C1917]'}`}>
      
      {/* Trama de nodos de fondo institucional */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none z-0 ${isDark ? 'text-white' : 'text-black'}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="currentColor" />
              <circle cx="80" cy="40" r="5" fill="currentColor" />
              <circle cx="40" cy="80" r="2" fill="currentColor" />
              <path d="M20,20 L80,40 L40,80 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#services-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff4f00] font-bold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full">
            {headerText.badge}
          </span>
          <h2 className={`mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {headerText.title}
          </h2>
          <p className={`mt-6 text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
            {headerText.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICIOS_ITIERS.map((servicio, index) => {
            const copy = currentLang === 'es' ? servicio.es : servicio.en;
            
            return (
              <article key={servicio.id} className={`group relative overflow-hidden flex flex-col rounded-[2rem] p-8 sm:p-10 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#ff4f00]/50 ${isDark ? 'bg-[#1A1A1A] border-[#333333]' : 'bg-white border-[#b2b2b2]/40'}`}>
                
                {/* Gráfico Dashboard Analítico (Fondo SVG revelado en Hover) */}
                <div className="absolute top-10 right-0 w-64 h-64 opacity-5 pointer-events-none group-hover:opacity-[0.15] transition-opacity duration-500 z-0">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={isDark ? 'text-white' : 'text-black'}>
                    <rect x="20" y="100" width="30" height="80" rx="4" fill="currentColor" opacity="0.3"/>
                    <rect x="70" y="60" width="30" height="120" rx="4" fill="currentColor" opacity="0.6"/>
                    <rect x="120" y="20" width="30" height="160" rx="4" fill="#ff4f00"/>
                    <path d="M35 80 L85 40 L135 10" stroke="#ff4f00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="35" cy="80" r="6" fill="#ff4f00"/>
                    <circle cx="85" cy="40" r="6" fill="#ff4f00"/>
                    <circle cx="135" cy="10" r="6" fill="#ff4f00"/>
                  </svg>
                </div>

                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="flex items-center space-x-5">
                    {/* Contenedor de ícono con estilo geométrico corporativo reemplazando el emoji */}
                    <span className={`flex items-center justify-center w-14 h-14 text-2xl font-semibold rounded-[1rem] transition-colors duration-300 ${isDark ? 'bg-[#141414] border border-[#333333] text-[#ff4f00] group-hover:border-[#ff4f00]/50' : 'bg-white border border-[#b2b2b2]/30 text-[#ff4f00] shadow-sm group-hover:border-[#ff4f00]/50'}`} aria-hidden="true">
                      {renderCorporateIcon(servicio.icono || '', index)}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-[#ff4f00] uppercase tracking-wider">
                        0{index + 1} · {headerText.serviceLabel}
                      </span>
                      <h3 className={`text-2xl font-bold mt-1 group-hover:text-[#ff4f00] transition-colors ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
                        {copy.titulo}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <p className={`text-base leading-relaxed mb-8 relative z-10 ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
                  {copy.descripcion}
                </p>
                
                <div className={`border-t pt-6 mt-auto relative z-10 ${isDark ? 'border-[#333333]' : 'border-[#b2b2b2]/40'}`}>
                  <ul className="space-y-4">
                    {copy.detalles.map((detalle) => (
                      <li key={detalle} className={`flex items-start text-sm font-medium ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
                        <svg className="w-5 h-5 text-[#ff4f00] mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detalle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`pt-6 mt-6 border-t relative z-10 ${isDark ? 'border-[#333333]' : 'border-[#b2b2b2]/40'}`}>
                  <a href="#contacto" className="inline-flex items-center text-sm font-bold text-[#ff4f00] hover:underline group-hover:translate-x-1 transition-transform">
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