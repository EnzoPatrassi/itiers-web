'use client';

import React, { useState } from 'react';
import { Locale } from '@/data/i18n';
import { Header, ThemeMode } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ValueProposition } from '@/components/ValueProposition';
import { TeamSection } from '@/components/TeamSection';
import { DataAISection } from '@/components/DataAISection';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { CareersSection } from '@/components/CareersSection';
import { Chatbot } from '@/components/Chatbot';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  const [currentLang, setCurrentLang] = useState<Locale>('es');
  const [theme, setTheme] = useState<ThemeMode>('light');

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen font-sans antialiased overflow-x-hidden selection:bg-[#ff4f00] selection:text-white transition-colors duration-300 ${
        isDark ? 'bg-[#0F0F0F] text-white' : 'bg-white text-[#1C1917]'
      }`}
    >
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        theme={theme}
        onThemeChange={setTheme}
      />

      <main>
        <Hero currentLang={currentLang} theme={theme} />
        <ValueProposition currentLang={currentLang} theme={theme} />
        <TeamSection currentLang={currentLang} theme={theme} />
        <DataAISection currentLang={currentLang} theme={theme} />
        <Services currentLang={currentLang} theme={theme} />
        
        {/* Agregamos la sección de Testimonios aquí */}
        <Testimonials currentLang={currentLang} />

        <ContactSection currentLang={currentLang} />
        <CareersSection currentLang={currentLang} />
      </main>

      <Chatbot currentLang={currentLang} />
      <Footer currentLang={currentLang} onLanguageChange={setCurrentLang} />
    </div>
  );
}