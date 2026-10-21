'use client';

import React from 'react';
import Image from 'next/image';
import { Locale } from '@/data/i18n';
import { INFO_ITIERS } from '@/data/mockData';
import { validateWhatsAppConfig } from '@/lib/harness/guardrails';
import { ThemeMode } from '@/components/Header';

interface HeroProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, theme }) => {
  const content = {
    es: {
      line1: 'Convertimos el caos de datos en',
      highlight: 'decisiones estratégicas.',
      description: 'Acompañamos a organizaciones líderes a desbloquear el valor de su información con un enfoque 100% personalizado.',
      cta: 'Hablemos por WhatsApp',
    },
    en: {
      line1: 'We turn data chaos into',
      highlight: 'strategic decisions.',
      description: 'We help leading organizations unlock the value of their information with a 100% personalized approach.',
      cta: "Let's talk on WhatsApp",
    },
  }[currentLang];

  const whatsappChannel = validateWhatsAppConfig(INFO_ITIERS.whatsapp, 'Hola!');

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black sm:bg-gradient-to-r sm:from-black sm:via-black/70 sm:to-transparent"></div>
      </div>

      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-40 relative z-10 py-12 sm:py-20">
        
        <div className="w-full text-left mt-8 sm:mt-0">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            <span className="block md:whitespace-nowrap">{content.line1}</span>
            <span className="block md:whitespace-nowrap text-[#ff4f00]">
              {content.highlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 max-w-xl font-medium leading-relaxed">
            {content.description}
          </p>

          <div>
            <a
              href={whatsappChannel.success ? whatsappChannel.url : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#ff4f00] hover:bg-[#e04500] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all hover:scale-105"
            >
              {content.cta}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};