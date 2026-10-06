'use client';

import React, { useState } from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';

interface DataAISectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const DataAISection: React.FC<DataAISectionProps> = ({ currentLang, theme }) => {
  const [activeStep, setActiveStep] = useState(0);
  const isDark = theme === 'dark';

  const content = {
    es: {
      badge: 'Nuestra Metodología SDD',
      title: 'De datos crudos a decisiones automatizadas de alto impacto',
      subtitle: 'Conectamos la fuente de tu información con modelos inteligentes y pipelines determinísticos sin fricción.',
      steps: [
        {
          id: 'data',
          label: '01 · DATA ENGINE',
          title: 'Ingesta & Gobierno de Datos',
          desc: 'Recolectamos, estructuramos y aseguramos la calidad de fuentes masivas de datos en tiempo real.',
          details: ['Pipelines ETL/ELT automatizados', 'Consolidación de Data Lakes', 'Gobierno y trazabilidad de datos'],
        },
        {
          id: 'processing',
          label: '02 · AI PROCESSING',
          title: 'Orquestación & Modelos IA',
          desc: 'Aplicamos modelos de Machine Learning e IA Generativa (IBM Watsonx & agentes) adaptados a tu lógica de negocio.',
          details: ['Agentes autónomos determinísticos', 'Fine-tuning de modelos LLM', 'Algoritmos predictivos de demanda'],
        },
        {
          id: 'insights',
          label: '03 · INSIGHTS',
          title: 'Visualización & Analítica',
          desc: 'Transformamos complejidad matemática en dashboards ejecutivos de autoservicio y métricas en tiempo real.',
          details: ['Dashboards en tiempo real', 'Alertas y analítica prescriptiva', 'Integración con plataformas existentes'],
        },
        {
          id: 'impact',
          label: '04 · BUSINESS IMPACT',
          title: 'Retorno & Eficiencia Operativa',
          desc: 'Medimos el impacto en ahorro de costos, reducción de pérdidas por stock y aceleración del ciclo de ventas.',
          details: ['Reducción de costos operativos', 'Automatización de decisiones', 'Medición continua del ROI'],
        },
      ],
      cta: '¿Quieres automatizar la inteligencia de tus datos?',
      ctaBtn: 'Agendá una consultoría técnica',
    },
    en: {
      badge: 'SDD Methodology',
      title: 'From raw data to automated high-impact business decisions',
      subtitle: 'We bridge data lakes with AI models and deterministic pipelines seamlessly.',
      steps: [
        {
          id: 'data',
          label: '01 · DATA ENGINE',
          title: 'Data Ingestion & Governance',
          desc: 'We collect, clean, and structure massive real-time data flows across enterprise systems.',
          details: ['Automated ETL/ELT pipelines', 'Data Lake consolidation', 'Governance & compliance'],
        },
        {
          id: 'processing',
          label: '02 · AI PROCESSING',
          title: 'AI Models & Orchestration',
          desc: 'We deploy custom Machine Learning models and generative AI agents (IBM Watsonx) tuned to your business logic.',
          details: ['Deterministic AI agents', 'Custom LLM fine-tuning', 'Predictive demand modeling'],
        },
        {
          id: 'insights',
          label: '03 · INSIGHTS',
          title: 'Visualization & Analytics',
          desc: 'We convert complex algorithms into self-serve executive dashboards and real-time alerts.',
          details: ['Real-time BI dashboards', 'Prescriptive analytical alerts', 'Platform ecosystem integrations'],
        },
        {
          id: 'impact',
          label: '04 · BUSINESS IMPACT',
          title: 'Tangible ROI & Operational Speed',
          desc: 'We benchmark success through operational cost savings, inventory optimization, and process speed.',
          details: ['Cost reduction', 'Decision automation', 'Continuous ROI tracking'],
        },
      ],
      cta: 'Ready to automate your data intelligence?',
      ctaBtn: 'Book a technical consult',
    },
  }[currentLang];

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="data-ai"
      className={`py-24 border-t relative overflow-hidden transition-colors duration-300 ${
        isDark
          ? 'bg-[#0F0F0F] text-white border-[#333333]/60'
          : 'bg-[#FAFAFA] text-[#1C1917] border-[#b2b2b2]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Process Flow Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left step selectors */}
          <div className="lg:col-span-5 space-y-4">
            {content.steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-[#1F1F1F] text-white border-[#ff4f00] shadow-xl shadow-[#ff4f00]/10 translate-x-2'
                      : isDark
                      ? 'bg-[#1F1F1F]/40 border-[#333333] hover:border-gray-600 hover:bg-[#1F1F1F]/70 text-gray-300'
                      : 'bg-white border-[#b2b2b2]/40 hover:border-[#ff4f00]/60 text-[#1C1917]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#ff4f00] tracking-wider uppercase">
                      {step.label}
                    </span>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff4f00] animate-ping" />
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                </button>
              );
            })}
          </div>

          {/* Right active step display panel */}
          <div className="lg:col-span-7 bg-[#1F1F1F] text-white border border-[#ff4f00]/40 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff4f00]/10 blur-3xl pointer-events-none rounded-full" />

            <span className="text-xs font-bold text-[#ff4f00] uppercase tracking-widest bg-[#ff4f00]/10 px-3 py-1 rounded-md border border-[#ff4f00]/20">
              {content.steps[activeStep].label}
            </span>

            <h3 className="text-3xl font-extrabold text-white mt-4 mb-4">
              {content.steps[activeStep].title}
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {content.steps[activeStep].desc}
            </p>

            <div className="border-t border-[#333333] pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                {currentLang === 'es' ? 'Componentes Clave:' : 'Key Components:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.steps[activeStep].details.map((detail, i) => (
                  <div key={i} className="flex items-center p-3 rounded-xl bg-[#0F0F0F] border border-[#333333]">
                    <span className="w-2 h-2 rounded-full bg-[#ff4f00] mr-3 shrink-0" />
                    <span className="text-sm font-medium text-gray-200">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA bar */}
            <div className="mt-10 pt-6 border-t border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm text-gray-400">{content.cta}</span>
              <button
                type="button"
                onClick={() => handleScroll('#contacto')}
                className="w-full sm:w-auto bg-[#ff4f00] hover:bg-[#e04500] text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-[#ff4f00]/20"
              >
                {content.ctaBtn} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
