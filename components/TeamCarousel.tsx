'use client';

import React from 'react';
import { ThemeMode } from './Header';

interface TeamCarouselProps {
  theme?: ThemeMode;
}

// Simulamos las imágenes del equipo. REEMPLAZA ESTAS URLs CON LAS REALES
const TEAM_IMAGES = [
  '/equipo-1.jpg',
  '/equipo-2.jpg',
  '/equipo-3.jpg',
  '/equipo-4.jpg',
  '/equipo-5.jpg',
];

export const TeamCarousel: React.FC<TeamCarouselProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <div className={`relative w-full max-w-7xl mx-auto overflow-hidden py-12 ${isDark ? 'bg-[#0F0F0F]' : 'bg-white'}`}>
      
      {/* Estilos para la animación infinita */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 5)); } /* Ajusta el 5 por la cantidad de imágenes */
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="flex w-[calc(250px*10)] animate-scroll">
        {/* Duplicamos las imágenes para crear el efecto infinito */}
        {[...TEAM_IMAGES, ...TEAM_IMAGES].map((src, index) => (
          <div key={index} className="w-[250px] flex-shrink-0 px-4">
             {/* Usamos un div simulando la imagen por ahora */}
             <div className="w-full h-64 bg-gray-300 rounded-2xl flex items-center justify-center text-gray-500 overflow-hidden relative">
                <img src={src} alt={`Equipo Itiers ${index}`} className="object-cover w-full h-full" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <span className="absolute">Foto {index + 1}</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};