'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';

interface ImpactCountersProps {
  currentLang: Locale;
  theme?: ThemeMode;
}

// Componente interno para animar el número
const AnimatedNumber = ({ end, prefix = '', suffix = '' }: { end: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return <div ref={ref}>{prefix}{count}{suffix}</div>;
};

export const ImpactCounters: React.FC<ImpactCountersProps> = ({ currentLang, theme = 'light' }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      badge: 'Cifras',
      stats: [
        { id: 1, end: 20, prefix: '+', suffix: '', label: 'Años de Trayectoria' },
        { id: 2, end: 150, prefix: '+', suffix: '', label: 'Proyectos Exitosos' },
        { id: 3, end: 50, prefix: '+', suffix: 'M', label: 'Registros Procesados diarios' },
        { id: 4, end: 98, prefix: '', suffix: '%', label: 'Retención de Clientes' },
      ]
    },
    en: {
      badge: 'Figures',
      stats: [
        { id: 1, end: 20, prefix: '+', suffix: '', label: 'Years of Experience' },
        { id: 2, end: 150, prefix: '+', suffix: '', label: 'Successful Projects' },
        { id: 3, end: 50, prefix: '+', suffix: 'M', label: 'Daily Processed Records' },
        { id: 4, end: 98, prefix: '', suffix: '%', label: 'Client Retention' },
      ]
    }
  }[currentLang];

  return (
    <section className={`py-20 border-t transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] border-[#333333]/50' : 'bg-[#FAFAFA] border-[#b2b2b2]/30'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full inline-block">
            {content.badge}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {content.stats.map((stat) => (
            <div key={stat.id} className={`text-center flex flex-col items-center p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-[#1A1A1A] border-[#333333] hover:border-[#ff4f00]/50' : 'bg-white border-[#b2b2b2]/40 hover:border-[#ff4f00]/50 shadow-sm'}`}>
              <div className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
                <AnimatedNumber end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm font-bold tracking-widest uppercase text-[#ff4f00]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};