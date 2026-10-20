'use client';

import React from 'react';
import Image from 'next/image';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';

interface ClientLogosProps {
  currentLang: Locale;
  theme?: ThemeMode;
}

const CLIENTES = [
  { src: '/Mesa de trabajo 1Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 2Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 3Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 5Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 6Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 7Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 8Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 9Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 10Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 11Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 12Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 13Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 14Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 15Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 16Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 17Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 18Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 19Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 20Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 21Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 22Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 23Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 24Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 25Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 26Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 27Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 28Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 29Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 30Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 31Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 32Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 33Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 34Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 35Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 36Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 38Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 39Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 40Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 41Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 42Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 43Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 44Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 45Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 46Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 47Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 48Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 49Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 50Logos clientes itiers.png' },
];

export const ClientLogos: React.FC<ClientLogosProps> = ({ currentLang, theme = 'light' }) => {
  const isDark = theme === 'dark';
  
  const content = {
    es: { badge: <><span className="font-black">Confían</span> en nosotros</> },
    en: { badge: <><span className="font-black">They trust</span> us</> }
  }[currentLang];

  const baseTrack = [...CLIENTES, ...CLIENTES];

  return (
    <section className={`py-16 border-y relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-white border-gray-200'}`}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-logos {
          display: flex;
          width: max-content;
          animation: scrollLogos 250s linear infinite;
        }
      `}} />

      <div className={`absolute top-0 left-0 w-24 md:w-48 h-full z-10 pointer-events-none transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-[#0F0F0F] to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`}></div>
      <div className={`absolute top-0 right-0 w-24 md:w-48 h-full z-10 pointer-events-none transition-colors duration-300 ${isDark ? 'bg-gradient-to-l from-[#0F0F0F] to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-20">
        {/* Quitamos font-bold del contenedor principal para que sólo aplique al <span> interno */}
        <div className="text-[#ff4f00] text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full inline-block">
          {content.badge}
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex z-0">
        <div className="animate-scroll-logos flex items-center gap-12 md:gap-20 px-6 md:px-10">
          {baseTrack.map((cliente, index) => (
            <div 
              key={index} 
              className="relative w-40 h-16 md:w-56 md:h-24 flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer"
            >
              <Image 
                src={cliente.src} 
                alt="" 
                fill 
                className="object-contain" 
                sizes="(max-width: 768px) 160px, 224px" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};