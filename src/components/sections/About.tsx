'use client';

import { useEffect, useState } from 'react';

const pilares = ['Confianza', 'Colaboración', 'Alegría', 'Resiliencia', 'Eficiencia'];

// Sumé a los supervisores del documento y al equipo de ustedes como placeholders
const equipo = [
  { id: 1, nombre: 'Sonia Osay', rol: 'Supervisión' },
  { id: 2, nombre: 'Estefanía D.', rol: 'Marketing' },
  { id: 3, nombre: 'Luz', rol: 'Diseño & Assets' },
  { id: 4, nombre: 'Stefano', rol: 'Harness / AI' },
  { id: 5, nombre: 'Tomás', rol: 'SEO / GEO' },
  { id: 6, nombre: 'Enzo', rol: 'Diseño UX/UI' },
];

export const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica del carrusel: Rota automáticamente cada 3 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % equipo.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="nosotros" className="w-full py-20 bg-surface-background border-t border-semantic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-[32px] sm:text-[40px] font-bold text-semantic-text mb-4">
            Quiénes Somos
          </h2>
          <p className="font-body text-brand-gray max-w-2xl mx-auto">
            Somos un equipo multidisciplinario enfocado en gobernar la información. 
            Nuestros valores son el motor que impulsa cada solución de datos que construimos.
          </p>
        </div>

        {/* Pilares Corporativos: Sobrios, compactos y sin cajas gigantes (como pide el DoD) */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-20">
          {pilares.map((pilar, index) => (
            <div 
              key={index}
              className="px-6 py-2 rounded-full border border-semantic-border bg-surface-card text-semantic-text font-body font-medium shadow-sm hover:border-brand-primary transition-colors"
            >
              {pilar}
            </div>
          ))}
        </div>

        {/* Carrusel de Equipo */}
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-md bg-surface-card border border-semantic-border p-8">
          <h3 className="font-heading text-xl text-center text-semantic-text mb-8">
            Conocé a los especialistas
          </h3>
          
          <div className="relative h-[200px] w-full flex justify-center items-center">
            {equipo.map((miembro, index) => {
              // Calculamos la posición para hacer un efecto de fade/slide limpio
              const isActive = index === currentIndex;
              
              return (
                <div 
                  key={miembro.id}
                  className={`absolute transition-all duration-700 ease-in-out flex flex-col items-center
                    ${isActive ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95 pointer-events-none'}`}
                >
                  {/* Avatar Placeholder (Respeta la forma de círculo del manual) */}
                  <div className="w-24 h-24 rounded-full bg-brand-gray flex items-center justify-center text-surface-background font-heading text-3xl font-bold mb-4">
                    {miembro.nombre.charAt(0)}
                  </div>
                  <h4 className="font-body font-bold text-semantic-text text-lg">{miembro.nombre}</h4>
                  <p className="font-body text-brand-primary">{miembro.rol}</p>
                </div>
              );
            })}
          </div>

          {/* Indicadores (Puntos del carrusel) */}
          <div className="flex justify-center gap-2 mt-6">
            {equipo.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-brand-primary' : 'w-2 bg-semantic-border'
                }`}
                aria-label={`Ver miembro ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};