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
    <div className={`relative w-full max-w-[90rem] mx-auto overflow-hidden py-12 transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F]' : 'bg-[#FAFAFA]'}`}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollTeam {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * 4)); }
        }
        .animate-scroll-team {
          display: flex;
          width: max-content;
          animation: scrollTeam 25s linear infinite;
        }
        .animate-scroll-team:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Degradés laterales adaptados al tema claro u oscuro */}
      <div className={`absolute top-0 left-0 w-32 h-full z-10 pointer-events-none transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-[#0F0F0F] to-transparent' : 'bg-gradient-to-r from-[#FAFAFA] to-transparent'}`}></div>
      <div className={`absolute top-0 right-0 w-32 h-full z-10 pointer-events-none transition-colors duration-300 ${isDark ? 'bg-gradient-to-l from-[#0F0F0F] to-transparent' : 'bg-gradient-to-l from-[#FAFAFA] to-transparent'}`}></div>

      <div className="animate-scroll-team gap-6 px-4">
        {[...TEAM_IMAGES, ...TEAM_IMAGES, ...TEAM_IMAGES].map((member, index) => (
          <div key={index} className="w-[320px] sm:w-[380px] flex-shrink-0">
             <div className={`w-full h-[320px] rounded-[2.5rem] overflow-hidden relative border shadow-xl transition-all duration-300 group ${
               isDark ? 'bg-[#1A1A1A] border-[#333333]' : 'bg-white border-[#b2b2b2]/40'
             }`}>
                <img 
                  src={member.src} 
                  alt={member.name} 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
                {/* Overlay inferior para asegurar legibilidad del nombre */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 text-white font-bold text-lg tracking-wide">
                  {member.name}
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};