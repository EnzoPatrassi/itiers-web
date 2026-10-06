'use client';

import React, { useState } from 'react';
import { Locale } from '@/data/i18n';
import { Header, ThemeMode } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ValueProposition } from '@/components/ValueProposition';
import { TeamSection } from '@/components/TeamSection';
import { DataAISection } from '@/components/DataAISection';
import { Services } from '@/components/Services';
import { TechnologySection } from '@/components/TechnologySection';
import { ImpactCounters } from '@/components/ImpactCounters';
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
      {/* 1. Header / Navbar Fijo con Selector de Tema & Idioma */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        theme={theme}
        onThemeChange={setTheme}
      />

      <main>
        {/* 2. Hero Section: Value Proposition & Pilares Compactos */}
        <Hero currentLang={currentLang} theme={theme} />
        <ValueProposition currentLang={currentLang} theme={theme} />

        {/* 3. Sección Quiénes Somos & Carrusel de Equipo */}
        <TeamSection currentLang={currentLang} theme={theme} />

        {/* 4. Sección Qué Hacemos: Workflow Interactivo de Datos & IA */}
        <DataAISection currentLang={currentLang} theme={theme} />

        {/* 5. Cards de Servicios: Data Eng, Capacitaciones, Staffing, Soluciones IA */}
        <Services currentLang={currentLang} theme={theme} />

        {/* 6. Tech Stack & Alianzas: Logos Monocromáticos */}
        <TechnologySection currentLang={currentLang} theme={theme} />

        {/* 7. Cifras de Impacto: Contadores Numéricos Animados */}
        <ImpactCounters currentLang={currentLang} />

        {/* 8. Testimonios de Clientes: Social Proof */}
        <Testimonials currentLang={currentLang} />

        {/* 9. Canales de Conversión: Chatbot / Formulario a Email */}
        <ContactSection currentLang={currentLang} />
        <CareersSection currentLang={currentLang} />
      </main>

      {/* Chatbot Flotante */}
      <Chatbot currentLang={currentLang} />

      {/* 10. Footer: Legal, i18n & Trabaja con Nosotros */}
      <Footer currentLang={currentLang} onLanguageChange={setCurrentLang} />
    </div>
  );
}