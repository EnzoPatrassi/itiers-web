'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';

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
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F]' : 'bg-white'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="text-[#ff4f00] font-bold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full inline-block">
            {content.badge}
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {content.stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`group flex flex-col justify-between items-start text-left p-8 h-64 sm:h-72 rounded-[2rem] transition-all duration-500 cursor-default animate-fade-in-up
                ${isDark ? 'bg-[#1A1A1A] border border-[#333333]' : 'bg-[#FAFAFA] border border-gray-200'}
                hover:bg-[#ff4f00] hover:border-[#ff4f00] hover:-translate-y-2 hover:shadow-2xl
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              <div className={`text-sm sm:text-base font-medium leading-snug transition-colors duration-500 group-hover:text-white w-3/4
                ${isDark ? 'text-gray-400' : 'text-gray-500'}
              `}>
                {stat.label}
              </div>

              <div className="text-5xl md:text-6xl font-light tracking-tight transition-colors duration-500 group-hover:text-white text-[#ff4f00]">
                <AnimatedNumber end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};