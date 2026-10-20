'use client';

import React from 'react';
import { ThemeMode } from './Header';

interface TeamCarouselProps {
  theme?: ThemeMode;
}

const TEAM_IMAGES = [
  { src: '/Fotos itiers y equipo para web 2026-01.jpg', size: 'large' },
  { src: '/Fotos itiers y equipo para web 2026-02.jpg', size: 'small' },
  { src: '/Fotos itiers y equipo para web 2026-03.jpg', size: 'large' },
  { src: '/Fotos itiers y equipo para web 2026-04.jpg', size: 'small' },
  { src: '/Fotos itiers y equipo para web 2026-05.jpg', size: 'large' },
  { src: '/Fotos itiers y equipo para web 2026-06.jpg', size: 'small' },
  { src: '/Fotos itiers y equipo para web 2026-07.jpg', size: 'large' },
  { src: '/Fotos itiers y equipo para web 2026-08.jpg', size: 'small' },
  { src: '/Fotos itiers y equipo para web 2026-09.jpg', size: 'large' },
  { src: '/Fotos itiers y equipo para web 2026-10.jpg', size: 'small' },
  { src: '/Fotos itiers y equipo para web 2026-11.jpg', size: 'large' },
  { src: '/Fotos itiers y equipo para web 2026-12.jpg', size: 'small' },
  { src: '/Fotos itiers y equipo para web 2026-13.jpg', size: 'large' },
  { src: '/Fotos itiers y equipo para web 2026-14.jpg', size: 'small' },
  { src: '/Fotos itiers y equipo para web 2026-15.jpg', size: 'large' },
  { src: '/Fotos itiers y equipo para web 2026-16.jpg', size: 'small' },
  { src: '/Fotos itiers y equipo para web 2026-17.jpg', size: 'large' },
  { src: '/Fotos itiers y equipo para web 2026-18.jpg', size: 'small' },
  { src: '/Fotos itiers y equipo para web 2026-19.jpg', size: 'large' },
  { src: '/Fotos itiers y equipo para web 2026-20.jpg', size: 'small' },
  { src: '/Fotos itiers y equipo para web 2026-21.jpg', size: 'large' },
  { src: '/Fotos itiers y equipo para web 2026-22.jpg', size: 'small' },
  { src: '/Fotos itiers y equipo para web 2026-23.jpg', size: 'large' },
];

export const TeamCarousel: React.FC<TeamCarouselProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';
  
  const baseTrack = [...TEAM_IMAGES, ...TEAM_IMAGES];

  return (
    <div className={`relative w-full overflow-hidden py-16 sm:py-24 transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F]' : 'bg-white'}`}>
      
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
        <div className="animate-scroll-team-inf gap-6 sm:gap-10 px-4">
          {[...baseTrack, ...baseTrack].map((member, index) => {
            const isLarge = member.size === 'large';
            return (
              <div 
                key={index} 
                className={`flex-shrink-0 
                  ${isLarge ? 'w-[280px] sm:w-[400px] h-[380px] sm:h-[550px]' : 'w-[220px] sm:w-[300px] h-[300px] sm:h-[400px]'}
                `}
              >

                 <div className={`w-full h-full rounded-2xl sm:rounded-[2rem] overflow-hidden relative shadow-xl bg-black ${isDark ? 'border border-[#333333]' : 'border border-gray-200'}`}>
                    <img 
                      src={member.src}
                      className="object-cover w-full h-full opacity-75 brightness-90" 
                      onError={(e) => { e.currentTarget.style.display = 'none'; }} 
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