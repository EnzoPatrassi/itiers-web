'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from '@/components/Header';

interface ImpactCountersProps {
  currentLang: Locale;
  theme?: ThemeMode;
}

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

  return <div ref={ref} className="flex items-center">{prefix}{count}{suffix}</div>;
};

export const ImpactCounters: React.FC<ImpactCountersProps> = ({ currentLang, theme = 'light' }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      stats: [
        { id: 1, end: 20, prefix: '+', suffix: '', label: 'Años de Trayectoria' },
        { id: 2, end: 1000, prefix: '+', suffix: '', label: 'Proyectos' },
        { id: 3, end: 5000, prefix: '+', suffix: '', label: 'Tableros' },
        { id: 4, end: 900, prefix: '+', suffix: '', label: 'Personas capacitadas en Datos & IA' },
      ]
    },
    en: {
      stats: [
        { id: 1, end: 20, prefix: '+', suffix: '', label: 'Years of Experience' },
        { id: 2, end: 1000, prefix: '+', suffix: '', label: 'Projects' },
        { id: 3, end: 5000, prefix: '+', suffix: '', label: 'Dashboards' },
        { id: 4, end: 900, prefix: '+', suffix: '', label: 'People trained in Data & AI' },
      ]
    }
  }[currentLang];

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#1A1A1A]' : 'bg-[#f9f9f9]'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {content.stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`group flex flex-col justify-center items-center text-center p-8 h-64 sm:h-72 rounded-[2rem] transition-all duration-500 cursor-default animate-fade-in-up shadow-sm
                ${isDark ? 'bg-[#2A2A2A] border border-[#4d4d4d]' : 'bg-white border border-[#b2b2b2]'}
                hover:bg-[#ff4f00] hover:border-[#ff4f00] hover:-translate-y-2 hover:shadow-2xl
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl md:text-6xl font-extrabold tracking-tight transition-colors duration-500 group-hover:text-white text-[#ff4f00] mb-4">
                <AnimatedNumber end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
              </div>

              <div className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-500 group-hover:text-white max-w-[200px]
                ${isDark ? 'text-[#b2b2b2]' : 'text-[#4d4d4d]'}
              `}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};