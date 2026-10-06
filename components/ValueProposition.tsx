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
      title: 'Diferenciación fundada en ingeniería rigurosa e impacto directo',
      items: [
        {
          num: '01',
          tag: 'DATA',
          title: 'Información Accionable',
          desc: 'Transformamos volúmenes de datos dispersos e inestructurados en métricas e insights útiles para la toma de decisiones estratégicas.',
          icon: (
            <svg className="w-6 h-6 text-[#ff4f00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
        {
          num: '02',
          tag: 'AI',
          title: 'IA Aplicada a Negocio',
          desc: 'Implementamos IA Generativa, modelos predictivos y agentes inteligentes enfocados en resolver cuellos de botella reales.',
          icon: (
            <svg className="w-6 h-6 text-[#ff4f00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
        },
        {
          num: '03',
          tag: 'TECHNOLOGY',
          title: 'Soluciones a Producción',
          desc: 'Construimos arquitecturas robustas y pipelines ETL escalables diseñados para operar de forma contínua y confiable.',
          icon: (
            <svg className="w-6 h-6 text-[#ff4f00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
        },
        {
          num: '04',
          tag: 'IMPACT',
          title: 'Resultados Medibles',
          desc: 'Medimos el éxito en retornos concretos de inversión (ROI), eficiencia operativa y velocidad de ejecución.',
          icon: (
            <svg className="w-6 h-6 text-[#ff4f00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
      ],
    },
    en: {
      badge: 'Why Itiers?',
      title: 'Differentiation rooted in rigorous engineering and real business impact',
      items: [
        {
          num: '01',
          tag: 'DATA',
          title: 'Actionable Intelligence',
          desc: 'We transform dispersed, unstructured data into clear metrics and insights for executive decision-making.',
          icon: (
            <svg className="w-6 h-6 text-[#ff4f00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
        {
          num: '02',
          tag: 'AI',
          title: 'Applied Enterprise AI',
          desc: 'We deploy generative AI, predictive models, and agentic workflows built specifically for your business logic.',
          icon: (
            <svg className="w-6 h-6 text-[#ff4f00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
        },
        {
          num: '03',
          tag: 'TECHNOLOGY',
          title: 'Production-Ready Stack',
          desc: 'We build robust data engineering architectures and pipelines designed for high-availability production.',
          icon: (
            <svg className="w-6 h-6 text-[#ff4f00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
        },
        {
          num: '04',
          tag: 'IMPACT',
          title: 'Measurable Outcomes',
          desc: 'Our work is benchmarked directly against tangible financial return, process speed, and operational growth.',
          icon: (
            <svg className="w-6 h-6 text-[#ff4f00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
      ],
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.items.map((item) => (
            <div
              key={item.num}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#ff4f00]/10 flex flex-col justify-between ${
                isDark
                  ? 'bg-[#1F1F1F]/60 border-[#333333] hover:border-[#ff4f00]/50'
                  : 'bg-white border-[#b2b2b2]/40 hover:border-[#ff4f00]/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#ff4f00]/10 border border-[#ff4f00]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className={`text-xs font-bold tracking-widest ${isDark ? 'text-gray-500' : 'text-[#4d4d4d]'}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-3 group-hover:text-[#ff4f00] transition-colors ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
                  {item.desc}
                </p>
              </div>

              <div className={`mt-6 pt-4 border-t flex justify-end ${isDark ? 'border-[#333333]/40' : 'border-[#b2b2b2]/20'}`}>
                <span className="text-2xl font-black text-[#ff4f00]/20 group-hover:text-[#ff4f00]/50 transition-colors">
                  {item.num}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
