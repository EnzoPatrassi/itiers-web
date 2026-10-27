'use client';

import React from 'react';
import Image from 'next/image';
import { ThemeMode } from '@/components/Header';

interface TechnologySectionProps {
  theme?: ThemeMode; 
}

const TECH_LOGOS = [
  { src: '/Mesa de trabajo 6 copiaLogos tecnologías.png', alt: 'n8n' },
  { src: '/Mesa de trabajo 7Logos tecnologías.png', alt: 'Strategy' },
  { src: '/Mesa de trabajo 8Logos tecnologías.png', alt: 'IBM Watson' },
  { src: '/Mesa de trabajo 9Logos tecnologías.png', alt: 'Databricks' },
  { src: '/Mesa de trabajo 10Logos tecnologías.png', alt: 'Google AI Studio' },
  { src: '/Mesa de trabajo 12Logos tecnologías.png', alt: 'Google Data Studio' },
  { src: '/Mesa de trabajo 13Logos tecnologías.png', alt: 'Python' },
  { src: '/Mesa de trabajo 14Logos tecnologías.png', alt: 'Microsoft Azure' },
  { src: '/Mesa de trabajo 15Logos tecnologías.png', alt: 'Microsoft SQL Server' },
  { src: '/Mesa de trabajo 16Logos tecnologías.png', alt: 'Pentaho' },
  { src: '/Mesa de trabajo 17 copia 2Logos tecnologías.png', alt: 'Tableau' },
  { src: '/Mesa de trabajo 17 copia 3Logos tecnologías.png', alt: 'Qlik' },
  { src: '/Mesa de trabajo 17 copiaLogos tecnologías.png', alt: 'R' },
  { src: '/Mesa de trabajo 17Logos tecnologías.png', alt: 'Microsoft Power BI' },
];

export const TechnologySection: React.FC<TechnologySectionProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`py-12 border-y relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#1A1A1A] border-[#4d4d4d]' : 'bg-white border-[#b2b2b2]'}`}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { display: flex; width: max-content; animation: marquee 40s linear infinite; }
      `}} />

      <div className="relative w-full flex overflow-hidden group z-10">

        <div className={`absolute top-0 left-0 w-24 md:w-48 h-full z-10 pointer-events-none transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-[#1A1A1A] to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`}></div>
        <div className={`absolute top-0 right-0 w-24 md:w-48 h-full z-10 pointer-events-none transition-colors duration-300 ${isDark ? 'bg-gradient-to-l from-[#1A1A1A] to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`}></div>

        <div className="animate-marquee flex items-center gap-12 md:gap-20 px-6 md:px-10">
          {[...TECH_LOGOS, ...TECH_LOGOS].map((tech, index) => (
            <div 
              key={index} 
              className={`relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0 transition-all duration-300 hover:scale-105 cursor-pointer ${
                isDark 
                  ? 'opacity-60 hover:opacity-100 brightness-0 invert'
                  : 'opacity-60 hover:opacity-100 grayscale hover:grayscale-0'
              }`}
            >
              <Image src={tech.src} alt={tech.alt} fill className="object-contain" sizes="(max-width: 768px) 128px, 192px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};