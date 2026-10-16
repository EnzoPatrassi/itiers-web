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
    <section className={`py-24 relative border-t overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/30'}`}>
      
      {/* Trama corporativa de fondo */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none z-0 ${isDark ? 'text-white' : 'text-black'}`}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="impact-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="currentColor" />
              <circle cx="80" cy="40" r="5" fill="currentColor" />
              <circle cx="40" cy="80" r="2" fill="currentColor" />
              <path d="M20,20 L80,40 L40,80 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#impact-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-[#ff4f00] font-bold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full inline-block">
            {content.badge}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`relative overflow-hidden text-center flex flex-col items-center justify-center p-8 rounded-[2rem] border transition-all duration-300 hover:-translate-y-1 backdrop-blur-xl animate-fade-in-up ${
                isDark ? 'bg-[#1A1A1A]/80 border-[#333333] hover:border-[#ff4f00]/50 hover:shadow-2xl' : 'bg-white/80 border-[#b2b2b2]/40 hover:border-[#ff4f00]/50 hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Marca geométrica sutil de fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none text-current">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,0 L100,0 L100,100 Z" />
                </svg>
              </div>

              <div className="relative z-10 text-5xl md:text-6xl font-black tracking-tight mb-3 text-[#ff4f00] drop-shadow-sm">
                <AnimatedNumber end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className={`relative z-10 text-xs md:text-sm font-bold tracking-widest uppercase mt-2 ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};