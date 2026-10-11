'use client';

import React, { useEffect, useRef, useState } from 'react';

// Tecnologías / Partners (Placeholder)
const techStack = ['AWS', 'Snowflake', 'Power BI', 'Python', 'Databricks', 'OpenAI'];

// Datos de Impacto
const metrics = [
  { value: 50, suffix: '+', label: 'Proyectos de Datos Entregados' },
  { value: 10, suffix: 'M+', label: 'Filas de Datos Procesadas' },
  { value: 98, suffix: '%', label: 'Precisión en Modelos Predictivos' },
  { value: 24, suffix: '/7', label: 'Soporte y Monitoreo Activo' },
];

export const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer para disparar la animación de los números al scrollear
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Se dispara cuando el 20% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="stack" ref={sectionRef} className="w-full py-24 bg-surface-background border-t border-semantic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tech Stack & Alianzas */}
        <div className="text-center mb-24">
          <h3 className="font-heading text-xl text-semantic-text mb-10">
            Tecnologías y alianzas que potencian nuestras soluciones
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="font-body font-bold text-2xl text-brand-gray tracking-wider uppercase hover:text-brand-primary transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Cifras de Impacto (Contadores) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 text-center border-t-2 border-semantic-border pt-8"
            >
              <div className="flex items-baseline mb-2">
                <span className={`font-heading text-5xl font-bold text-brand-primary transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {isVisible ? (
                    <Counter end={metric.value} duration={2000} />
                  ) : '0'}
                </span>
                <span className={`font-heading text-3xl font-bold text-brand-primary transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  {metric.suffix}
                </span>
              </div>
              <p className="font-body text-brand-gray font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Subcomponente simple para animar números de 0 al valor final
const Counter = ({ end, duration }: { end: number, duration: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Usamos easeOutQuart para una animación más natural
      const easeProgress = 1 - Math.pow(1 - progress, 4); 
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}</>;
};