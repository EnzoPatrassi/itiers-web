'use client';

import React from 'react';
import Image from 'next/image';
import { ThemeMode } from './Header';

interface TechnologySectionProps {
  theme?: ThemeMode; 
}

const TECH_LOGOS = [
  { src: '/Logo-n8n.png', alt: 'n8n' },
  { src: '/Logo-strategy.png', alt: 'Strategy' },
  { src: '/Logo-ibm-watson.png', alt: 'IBM Watson' },
  { src: '/Logo-databricks.png', alt: 'Databricks' },
  { src: '/Logo-google-ai-studio.png', alt: 'Google AI Studio' },
  { src: '/Logo-data-studio.png', alt: 'Google Data Studio' },
  { src: '/Logo-python.png', alt: 'Python' },
  { src: '/Logo-microsoft-azure.png', alt: 'Microsoft Azure' },
  { src: '/Logo-sql-server.png', alt: 'Microsoft SQL Server' },
  { src: '/Logo-pentaho.png', alt: 'Pentaho' },
  { src: '/Logo-tableau.png', alt: 'Tableau' },
  { src: '/Logo-qlik.png', alt: 'Qlik' },
  { src: '/Logo-r.png', alt: 'R' },
  { src: '/Logo-power-bi.png', alt: 'Microsoft Power BI' },
];

export const TechnologySection: React.FC<TechnologySectionProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`py-12 border-y relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#141414] border-[#333333]' : 'bg-white border-[#b2b2b2]/30'}`}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { display: flex; width: max-content; animation: marquee 60s linear infinite; }
      `}} />

      <div className="relative w-full flex overflow-hidden group z-10">

        <div className={`absolute top-0 left-0 w-24 md:w-40 h-full z-10 pointer-events-none transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-[#141414] to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`}></div>
        <div className={`absolute top-0 right-0 w-24 md:w-40 h-full z-10 pointer-events-none transition-colors duration-300 ${isDark ? 'bg-gradient-to-l from-[#141414] to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`}></div>

        <div className="animate-marquee flex items-center gap-10 md:gap-16 px-10">
          {[...TECH_LOGOS, ...TECH_LOGOS].map((tech, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 w-40 h-16 md:w-56 md:h-24 relative hover:scale-105 transition-all duration-300 ${
                isDark 
                  ? 'opacity-50 hover:opacity-100 brightness-0 invert'
                  : 'opacity-60 hover:opacity-100 grayscale hover:grayscale-0'
              }`}
            >
              <Image src={tech.src} alt={tech.alt} fill className="object-contain" sizes="(max-width: 768px) 160px, 224px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};