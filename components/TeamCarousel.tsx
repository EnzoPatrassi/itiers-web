'use client';

import React from 'react';
import { ThemeMode } from '@/components/Header';

interface TeamCarouselProps {
  theme?: ThemeMode;
}

const TEAM_IMAGES = [
  { src: '/Fotos itiers y equipo para web 2026-01.jpg', format: 'horizontal' },
  { src: '/Fotos itiers y equipo para web 2026-02.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-03.jpg', format: 'horizontal' },
  { src: '/Fotos itiers y equipo para web 2026-04.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-05.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-06.jpg', format: 'horizontal' },
  { src: '/Fotos itiers y equipo para web 2026-07.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-08.jpg', format: 'horizontal' },
  { src: '/Fotos itiers y equipo para web 2026-09.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-10.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-11.jpg', format: 'horizontal' },
  { src: '/Fotos itiers y equipo para web 2026-12.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-13.jpg', format: 'horizontal' },
  { src: '/Fotos itiers y equipo para web 2026-14.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-15.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-16.jpg', format: 'horizontal' },
  { src: '/Fotos itiers y equipo para web 2026-17.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-18.jpg', format: 'horizontal' },
  { src: '/Fotos itiers y equipo para web 2026-19.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-20.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-21.jpg', format: 'horizontal' },
  { src: '/Fotos itiers y equipo para web 2026-22.jpg', format: 'vertical' },
  { src: '/Fotos itiers y equipo para web 2026-23.jpg', format: 'horizontal' },
];

export const TeamCarousel: React.FC<TeamCarouselProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';
  
  const baseTrack = [...TEAM_IMAGES, ...TEAM_IMAGES];

  return (
    <div className={`relative w-full overflow-hidden py-16 sm:py-24 transition-colors duration-300 ${isDark ? 'bg-[#1A1A1A]' : 'bg-[#4d4d4d]'}`}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollTeamInf {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-team-inf {
          display: flex;
          width: max-content;
          animation: scrollTeamInf 400s linear infinite;
          align-items: center;
        }
      `}} />

      <div className="relative w-full overflow-hidden flex z-0">
        <div className="animate-scroll-team-inf gap-4 sm:gap-6 px-4">
          {[...baseTrack, ...baseTrack].map((member, index) => {
            const isHorizontal = member.format === 'horizontal';
            return (
              <div 
                key={index} 
                className={`flex-shrink-0 
                  ${isHorizontal ? 'w-[280px] sm:w-[420px] aspect-[4/3]' : 'w-[210px] sm:w-[315px] aspect-[3/4]'}
                `}
              >
                 <div className={`w-full h-full rounded-md overflow-hidden relative shadow-lg bg-black/20 ${isDark ? 'border border-[#333333]' : 'border border-[#b2b2b2]/20'}`}>
                    <img 
                      src={member.src}
                      className="object-cover w-full h-full" 
                      onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                      alt="Equipo Itiers"
                    />
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};