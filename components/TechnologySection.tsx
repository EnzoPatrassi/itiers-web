'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { INFO_ITIERS } from '@/data/mockData';
import { ThemeMode } from './Header';

interface TechnologySectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      badge: 'Ecosistema & Alianzas',
      title: 'Respaldo tecnológico global para arquitecturas de alta exigencia',
      subtitle: 'Trabajamos con las mejores tecnologías del mercado y contamos con alianzas globales para entregar infraestructura robusta.',
      allianceTitle: 'Socio Tecnológico Global de IBM Watsonx',
      allianceDesc: 'Acceso directo a capacidades avanzadas de IA empresarial, gobernanza de modelos y aceleración de despliegue en entornos híbridos.',
      techCategories: [
        {
          category: 'AI & Machine Learning',
          stack: ['IBM Watsonx', 'PyTorch', 'TensorFlow', 'LangChain', 'Scikit-Learn'],
        },
        {
          category: 'Data Engineering & ETL',
          stack: ['Apache Spark', 'Snowflake', 'Databricks', 'dbt', 'Airflow'],
        },
        {
          category: 'Cloud & Infrastructure',
          stack: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes'],
        },
        {
          category: 'Analytics & Visualization',
          stack: ['PowerBI', 'Tableau', 'Metabase', 'Custom React BI'],
        },
      ],
    },
    en: {
      badge: 'Ecosystem & Partnerships',
      title: 'Global tech foundation for high-availability architectures',
      subtitle: 'We leverage enterprise-grade technologies and strategic partnerships to engineer reliable, scalable platforms.',
      allianceTitle: 'IBM Watsonx Global Tech Partner',
      allianceDesc: 'Direct access to enterprise AI models, model governance, and hybrid cloud deployment speed.',
      techCategories: [
        {
          category: 'AI & Machine Learning',
          stack: ['IBM Watsonx', 'PyTorch', 'TensorFlow', 'LangChain', 'Scikit-Learn'],
        },
        {
          category: 'Data Engineering & ETL',
          stack: ['Apache Spark', 'Snowflake', 'Databricks', 'dbt', 'Airflow'],
        },
        {
          category: 'Cloud & Infrastructure',
          stack: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes'],
        },
        {
          category: 'Analytics & Visualization',
          stack: ['PowerBI', 'Tableau', 'Metabase', 'Custom React BI'],
        },
      ],
    },
  }[currentLang];

  return (
    <section
      id="tecnologia"
      className={`py-24 border-t relative transition-colors duration-300 ${
        isDark
          ? 'bg-[#0F0F0F] text-white border-[#333333]/60'
          : 'bg-[#FAFAFA] text-[#1C1917] border-[#b2b2b2]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full">
            {content.badge}
          </span>
          <h2 className={`mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {content.title}
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
            {content.subtitle}
          </p>
        </div>

        {/* Global IBM Alliance Banner */}
        <div className="mb-16 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#1F1F1F] via-[#261810] to-[#1F1F1F] text-white border border-[#ff4f00]/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center font-black text-2xl shadow-lg shrink-0 grayscale hover:grayscale-0 transition-all">
              IBM
            </div>
            <div>
              <span className="text-xs font-bold text-[#ff4f00] uppercase tracking-wider">
                STRATEGIC ALLIANCE
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {content.allianceTitle}
              </h3>
              <p className="text-gray-300 text-sm mt-2 max-w-2xl leading-relaxed">
                {content.allianceDesc}
              </p>
            </div>
          </div>
          <div className="px-5 py-2.5 rounded-xl bg-[#0F0F0F] border border-[#ff4f00]/30 text-xs font-mono text-[#ff4f00] shrink-0">
            {INFO_ITIERS.alianzaAI}
          </div>
        </div>

        {/* Monochromatic Tech Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.techCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#1F1F1F]/60 border-[#333333] hover:border-[#ff4f00]/40'
                  : 'bg-white border-[#b2b2b2]/40 hover:border-[#ff4f00]/60'
              }`}
            >
              <h4 className="text-xs font-bold text-[#ff4f00] uppercase tracking-widest mb-4 border-b pb-3 border-[#b2b2b2]/20">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.stack.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors grayscale hover:grayscale-0 ${
                      isDark
                        ? 'bg-[#0F0F0F] border-[#333333] text-gray-400 hover:text-white'
                        : 'bg-[#FAFAFA] border-[#b2b2b2]/50 text-[#4d4d4d] hover:text-[#1C1917]'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
