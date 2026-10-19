'use client';

import React from 'react';
import { ThemeMode } from './Header';

interface TeamCarouselProps {
  theme?: ThemeMode;
}

const TEAM_IMAGES = [
  { src: '/Pablo Rizzo.jpg', name: 'Pablo Rizzo' },
  { src: '/Matías García.jpg', name: 'Matías García' },
  { src: '/Juan Pablo Moldero.jpg', name: 'Juan Pablo Moldero' },
  { src: '/Evelina Valentini.jpg', name: 'Evelina Valentini' },
];

export const TeamCarousel: React.FC<TeamCarouselProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <div className={`relative w-full max-w-[100vw] mx-auto overflow-hidden py-10 transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F]' : 'bg-white'}`}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollTeam {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * 4)); }
        }
        .animate-scroll-team {
          display: flex;
          width: max-content;
          animation: scrollTeam 30s linear infinite;
        }
      `}} />

      {/* Degradés laterales adaptados al tema claro/oscuro */}
      <div className={`absolute top-0 left-0 w-32 md:w-64 h-full z-10 pointer-events-none transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-[#0F0F0F] to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`}></div>
      <div className={`absolute top-0 right-0 w-32 md:w-64 h-full z-10 pointer-events-none transition-colors duration-300 ${isDark ? 'bg-gradient-to-l from-[#0F0F0F] to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`}></div>

      <div className="animate-scroll-team gap-4 md:gap-6 px-4">
        {[...TEAM_IMAGES, ...TEAM_IMAGES, ...TEAM_IMAGES].map((member, index) => (
          <div key={index} className="w-[260px] sm:w-[350px] h-[320px] sm:h-[450px] flex-shrink-0">
             <div className="w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden relative shadow-2xl">
                <img 
                  src={member.src} 
                  alt={member.name} 
                  className={`object-cover w-full h-full transition-all duration-500 hover:opacity-100 ${isDark ? 'opacity-40' : 'opacity-80'}`} 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};