'use client';

import React from 'react';
import Image from 'next/image';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';

interface HeroProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, theme }) => {
  const content = {
    es: {
      line1: 'Tus datos',
      line2: 'ordenados, listos',
      line3: 'para ',
      highlight: 'decidir',
    },
    en: {
      line1: 'Your organized',
      line2: 'data, ready for',
      line3: '',
      highlight: 'decisions',
    },
  }[currentLang];

  return (
    <section id="inicio" className="relative w-full min-h-[100svh] flex items-center justify-start pt-32 pb-16 overflow-hidden bg-black">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner-itiers.jpg"
          alt="Itiers Data Sense Hero Banner"
          fill
          priority
          className="object-cover object-[75%_center] sm:object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black sm:bg-gradient-to-r sm:from-black/90 sm:via-black/50 sm:to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 sm:py-20">
        
        <div className="max-w-3xl text-left mt-8 sm:mt-0">
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            {content.line1} <br />
            {content.line2} <br />
            {content.line3}
            <span className="text-[#ff4f00] relative inline-block">
              {content.highlight}
            </span>
          </h1>

        </div>

      </div>
    </section>
  );
};