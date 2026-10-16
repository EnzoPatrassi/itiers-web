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
      badge: 'Nosotros',
      title: 'El poder transformador de los datos',
      p1: 'En Itiers Data Sense, nos define una profunda pasión por el poder transformador de los datos. Con más de 20 años de trayectoria, nos hemos consolidado como referentes en el mercado, destacándonos como una organización innovadora en el desarrollo de productos y servicios de inteligencia de datos.',
      p2: 'Nuestro propósito va más allá de ofrecer soluciones de gestión: nos apasiona acompañar a las organizaciones en la toma de decisiones estratégicas e informadas que impulsen su crecimiento, eficiencia y apertura a nuevas oportunidades.',
      p3: 'Trabajamos bajo tres pilares innegociables: integridad, transparencia y confidencialidad. Entendemos que cada dato que custodiamos y analizamos es el activo más valioso de nuestros clientes y la base de la confianza que depositan en nosotros. En Itiers Data Sense, convertimos los datos en la ventaja competitiva de su futuro.',
      actions: ['Confianza', 'Colaboración', 'Alegría', 'Resiliencia', 'Eficiencia'],
    },
    en: {
      badge: 'About Us',
      title: 'The transformative power of data',
      p1: 'At Itiers Data Sense, we are defined by a deep passion for the transformative power of data. With over 20 years of experience, we have established ourselves as market leaders, standing out as an innovative organization in the development of data intelligence products and services.',
      p2: 'Our purpose goes beyond offering management solutions: we are passionate about guiding organizations in making strategic, informed decisions that drive their growth, efficiency, and openness to new opportunities.',
      p3: 'We work under three non-negotiable pillars: integrity, transparency, and confidentiality. We understand that every piece of data we guard and analyze is our clients most valuable asset and the foundation of the trust they place in us. At Itiers Data Sense, we turn data into your competitive advantage for the future.',
      actions: ['Trust', 'Collaboration', 'Joy', 'Resilience', 'Efficiency'],
    },
  }[currentLang];

  return (
    <section id="nosotros" className={`py-20 border-t transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] text-white border-[#333333]/50' : 'bg-[#FAFAFA] text-[#1C1917] border-[#b2b2b2]/30'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-3.5 py-1 rounded-full">
            {content.badge}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {content.title}
          </h2>
          
          <div className={`mt-8 text-base sm:text-lg leading-relaxed text-left space-y-4 ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <p>{content.p3}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {content.actions.map((action, index) => (
            <div key={action} className={`p-5 rounded-[16px] border flex items-center gap-3 w-full sm:w-[calc(50%-1rem)] lg:w-auto min-w-[180px] ${isDark ? 'bg-[#1A1A1A] border-[#333333]' : 'bg-white border-[#b2b2b2]'}`}>
              <span className="text-xs font-bold text-[#ff4f00]">0{index + 1}</span>
              <h3 className={`text-md font-bold ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>{action}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};