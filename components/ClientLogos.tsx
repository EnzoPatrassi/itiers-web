'use client';

import React from 'react';
import Image from 'next/image';
import { Locale } from '@/data/i18n';
import { ThemeMode } from '@/components/Header';

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
  { src: '/Mesa de trabajo 51Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 52Logos clientes itiers.png' },
  { src: '/Mesa de trabajo 53Logos clientes itiers.png' },
];

export const ClientLogos: React.FC<ClientLogosProps> = ({ currentLang, theme = 'light' }) => {
  const isDark = theme === 'dark';
  
  const content = {
    es: { title: 'Confían en nosotros' },
    en: { title: 'They trust us' }
  }[currentLang];

  const baseTrack = [...CLIENTES, ...CLIENTES];

  return (
    <section className={`py-24 border-y relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#1A1A1A] border-[#4d4d4d]' : 'bg-[#f9f9f9] border-[#b2b2b2]'}`}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-logos {
          display: flex;
          width: max-content;
          animation: scrollLogos 140s linear infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-20">
        <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-[#4d4d4d]'}`}>
          {content.title}
        </h2>
      </div>

      {/* Franja horizontal blanca con mayor altura interna */}
      <div className="relative w-full bg-white py-10 md:py-14 shadow-sm overflow-hidden flex z-0">
        
        {/* Degradados laterales */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

        <div className="animate-scroll-logos flex items-center gap-12 md:gap-20 px-6 md:px-10">
          {baseTrack.map((cliente, index) => (
            <div 
              key={index} 
              className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer flex items-center justify-center"
            >
              <Image 
                src={cliente.src} 
                alt="" 
                fill 
                className="object-contain" 
                sizes="(max-width: 768px) 128px, 192px" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};