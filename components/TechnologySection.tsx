'use client';

import React from 'react';
import Image from 'next/image';

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

export const TechnologySection: React.FC = () => {
  return (
    <section className="py-6 border-t overflow-hidden bg-white border-[#b2b2b2]/30">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { display: flex; width: max-content; animation: marquee 40s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}} />

      <div className="relative w-full flex overflow-hidden group">
        <div className="absolute top-0 left-0 w-24 md:w-36 h-full z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-36 h-full z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        <div className="animate-marquee flex items-center gap-6 md:gap-10 px-6">
          {[...TECH_LOGOS, ...TECH_LOGOS].map((tech, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-20 md:w-64 md:h-28 relative hover:scale-105 transition-all duration-300 opacity-80 hover:opacity-100">
              <Image src={tech.src} alt={tech.alt} fill className="object-contain" sizes="(max-width: 768px) 192px, 256px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};