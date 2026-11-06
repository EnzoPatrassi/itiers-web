'use client';

import React, { useState, useEffect } from 'react';
import { Locale } from '@/data/i18n';
import { Header, ThemeMode } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { IntroSection } from '@/components/IntroSection';
import { ValueProposition } from '@/components/ValueProposition';
import { TeamSection } from '@/components/TeamSection';
import { DataAISection } from '@/components/DataAISection';
import { Services } from '@/components/Services';
import { TechnologySection } from '@/components/TechnologySection';
import { ImpactCounters } from '@/components/ImpactCounters';
import { Testimonials } from '@/components/Testimonials';
import { ClientLogos } from '@/components/ClientLogos';
import { ContactSection } from '@/components/ContactSection';
import { CareersSection } from '@/components/CareersSection';
import { Chatbot } from '@/components/Chatbot';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  const [currentLang, setCurrentLang] = useState<Locale>('es');
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const savedLang = document.cookie
      .split('; ')
      .find((row) => row.startsWith('itiers_lang='))
      ?.split('=')[1] as Locale;

    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setCurrentLang(savedLang);
    } else {
      const browserLang = navigator.language || navigator.languages?.[0];
      const detectedLang: Locale = browserLang && browserLang.toLowerCase().startsWith('es') ? 'es' : 'en';
      setCurrentLang(detectedLang);
    }
  }, []);

  const handleLanguageChange = (newLang: Locale) => {
    setCurrentLang(newLang);
    document.cookie = `itiers_lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen font-sans antialiased overflow-x-hidden selection:bg-[#ff4f00] selection:text-white transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] text-white' : 'bg-white text-gray-900'}`}>
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} theme={theme} onThemeChange={setTheme} />

      <main>
        {/* Título principal accesible con tipografía Comfortaa y paleta de marca (#ff4f00) */}
        <h1 className="sr-only font-['Comfortaa',sans-serif] text-[#ff4f00] font-medium text-[50px] leading-[56px] tracking-[-0.02em]">
          Hacemos que los datos impulsen mejores decisiones y acciones
        </h1>

        {/* 1. Hero banner */}
        <Hero currentLang={currentLang} theme={theme} />
        
        {/* 2. Texto introductorio */}
        <IntroSection currentLang={currentLang} theme={theme} />
        
        {/* 3. Sector Gráfico */}
        <DataAISection currentLang={currentLang} theme={theme} />
        
        {/* 4. Servicios */}
        <Services currentLang={currentLang} theme={theme} />
        
        {/* 5. Carrusel Tecnologías */}
        <TechnologySection theme={theme}/>
        
        {/* 6. Cifras */}
        <ImpactCounters currentLang={currentLang} theme={theme} /> 
        
        {/* 7. Testimonios */}
        <Testimonials currentLang={currentLang} theme={theme} />
        
        {/* 8. Carrusel de clientes */}
        <ClientLogos currentLang={currentLang} theme={theme} />
        
        {/* 9. Nosotros y Pilares */}
        <ValueProposition currentLang={currentLang} theme={theme} />
        
        {/* 10. Carrusel Equipo */}
        <TeamSection currentLang={currentLang} theme={theme} />
        
        {/* 11. Contacto */}
        <ContactSection currentLang={currentLang} theme={theme} />
        
        {/* 12. Banner CTA y Trabaja con nosotros (unificados) */}
        <CareersSection currentLang={currentLang} theme={theme} />
      </main>

      {/* Chatbot */}
      <Chatbot currentLang={currentLang} theme={theme} />
      
      {/* 13. Footer */}
      <Footer currentLang={currentLang} theme={theme} />
    </div>
  );
}