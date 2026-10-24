'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from '@/components/Header';

interface ValuePropositionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      p3: 'Trabajamos bajo tres pilares innegociables: integridad, transparencia y confidencialidad. Entendemos que cada dato que custodiamos y analizamos es el activo más valioso de nuestros clientes y la base de la confianza que depositan en nosotros. En Itiers Data Sense, convertimos los datos en la ventaja competitiva de su futuro.',
      pillars: [
        { title: 'Confianza', desc: 'Construimos relaciones sólidas asegurando la integridad, privacidad y máxima seguridad en el manejo de cada dato.' },
        { title: 'Colaboración', desc: 'Trabajamos codo a codo con tu equipo, sumando talentos para alcanzar objetivos comunes y potenciar resultados.' },
        { title: 'Alegría', desc: 'Disfrutamos lo que hacemos. Fomentamos un ambiente positivo que inspira creatividad y excelencia en cada proyecto.' },
        { title: 'Resiliencia', desc: 'Nos adaptamos rápidamente a los desafíos tecnológicos, transformando los obstáculos en oportunidades de innovación.' },
        { title: 'Eficiencia', desc: 'Optimizamos procesos y recursos para entregar soluciones ágiles, precisas y de alto valor estratégico.' }
      ],
    },
    en: {
      p3: 'We work under three non-negotiable pillars: integrity, transparency, and confidentiality. We understand that every piece of data we guard and analyze is our clients most valuable asset and the foundation of the trust they place in us. At Itiers Data Sense, we turn data into your competitive advantage for the future.',
      pillars: [
        { title: 'Trust', desc: 'We build strong relationships by ensuring integrity, privacy, and maximum security in handling every piece of data.' },
        { title: 'Collaboration', desc: 'We work side-by-side with your team, combining talents to achieve common goals and boost results.' },
        { title: 'Joy', desc: 'We love what we do. We foster a positive environment that inspires creativity and excellence in every project.' },
        { title: 'Resilience', desc: 'We adapt quickly to technological challenges, transforming obstacles into opportunities for innovation.' },
        { title: 'Efficiency', desc: 'We optimize processes and resources to deliver agile, accurate, and highly strategic solutions.' }
      ],
    },
  }[currentLang];

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#141414] border-[#4d4d4d]' : 'bg-white border-[#b2b2b2]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className={`text-lg sm:text-xl font-semibold leading-relaxed ${isDark ? 'text-white' : 'text-[#4d4d4d]'}`}>
            {content.p3}
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-12 border-t ${isDark ? 'border-[#4d4d4d]' : 'border-[#b2b2b2]'}`}>
          {content.pillars.map((pillar, index) => (
            <div key={pillar.title} className="flex flex-col items-center text-center group">
              
              <div className="w-12 h-12 text-[#ff4f00] mb-5 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                 {index === 0 && (
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                )}
                {index === 1 && (
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                )}
                {index === 2 && (
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                )}
                {index === 3 && (
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                )}
                {index === 4 && (
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                )}
              </div>

              <h3 className={`text-lg font-bold tracking-wide mb-3 ${isDark ? 'text-white' : 'text-[#4d4d4d]'}`}>
                {pillar.title}
              </h3>
              
              <p className={`text-sm leading-relaxed ${isDark ? 'text-[#b2b2b2]' : 'text-[#898a8d]'}`}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};