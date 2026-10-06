'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Locale } from '@/data/i18n';

interface ImpactCountersProps {
  currentLang: Locale;
}

interface CounterItem {
  id: string;
  target: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
}

export const ImpactCounters: React.FC<ImpactCountersProps> = ({ currentLang }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    exp: 0,
    records: 0,
    reduction: 0,
    projects: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const content = {
    es: {
      badge: 'Impacto Cuantificable',
      title: 'Cifras que respaldan nuestro compromiso y excelencia técnica',
      subtitle: 'Medimos el verdadero éxito en resultados operativos y eficiencia financiera para nuestros clientes.',
      counters: [
        {
          id: 'exp',
          target: 20,
          prefix: '+',
          suffix: ' Años',
          label: 'Trayectoria Analítica',
          sublabel: 'Liderando proyectos de datos y arquitectura avanzada.',
        },
        {
          id: 'records',
          target: 10,
          prefix: '+',
          suffix: 'M',
          label: 'Registros Procesados/Día',
          sublabel: 'En pipelines de alta concurrencia y tolerancia a fallos.',
        },
        {
          id: 'reduction',
          target: 18,
          prefix: '',
          suffix: '%',
          label: 'Reducción de Costos',
          sublabel: 'Optimización de quiebres de stock en clientes retail.',
        },
        {
          id: 'projects',
          target: 100,
          prefix: '+',
          suffix: '%',
          label: 'Retorno Orientado a ROI',
          sublabel: 'Soluciones alineadas directamente a KPIs estratégicos.',
        },
      ],
    },
    en: {
      badge: 'Quantifiable Impact',
      title: 'Metrics that prove our engineering excellence & commitment',
      subtitle: 'We measure true success in operational ROI and financial acceleration for our partners.',
      counters: [
        {
          id: 'exp',
          target: 20,
          prefix: '+',
          suffix: ' Years',
          label: 'Analytical Expertise',
          sublabel: 'Leading enterprise data architecture and AI integration.',
        },
        {
          id: 'records',
          target: 10,
          prefix: '+',
          suffix: 'M',
          label: 'Daily Processed Records',
          sublabel: 'Across high-availability real-time ETL pipelines.',
        },
        {
          id: 'reduction',
          target: 18,
          prefix: '',
          suffix: '%',
          label: 'Stock Loss Reduction',
          sublabel: 'Automated predictive inventory replenishment.',
        },
        {
          id: 'projects',
          target: 100,
          prefix: '+',
          suffix: '%',
          label: 'ROI Driven Approach',
          sublabel: 'All deliverables tied directly to strategic business metrics.',
        },
      ],
    },
  }[currentLang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              exp: Math.floor(easeProgress * 20),
              records: Math.floor(easeProgress * 10),
              reduction: Math.floor(easeProgress * 18),
              projects: Math.floor(easeProgress * 100),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-[#0F0F0F] text-white border-t border-[#333333]/60 relative">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.counters.map((counter) => (
            <div
              key={counter.id}
              className="p-8 rounded-3xl bg-[#1F1F1F]/70 border border-[#333333] hover:border-[#ff4f00]/60 transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#ff4f00] tracking-tight group-hover:scale-105 transition-transform">
                {counter.prefix}
                {counts[counter.id] !== undefined ? counts[counter.id] : counter.target}
                {counter.suffix}
              </div>
              <h3 className="mt-4 text-lg font-bold text-white group-hover:text-[#ff4f00] transition-colors">
                {counter.label}
              </h3>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                {counter.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
