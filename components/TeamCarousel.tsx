'use client';

import React, { useState, useEffect } from 'react';
import { ThemeMode } from './Header';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  avatarBg: string;
  initials: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Stefano & Equipo Director',
    role: 'Leadership & Data Strategy',
    specialty: '20+ años liderando proyectos de analítica avanzada e integración de IA.',
    avatarBg: 'bg-gradient-to-br from-[#ff4f00] to-[#b24f00]',
    initials: 'IT',
  },
  {
    id: '2',
    name: 'Célula de AI Engineering',
    role: 'AI Agents & LLM Fine-Tuning',
    specialty: 'Especialistas en la orquestación de agentes autónomos con IBM Watsonx.',
    avatarBg: 'bg-gradient-to-br from-[#1F1F1F] to-[#333333]',
    initials: 'AI',
  },
  {
    id: '3',
    name: 'Equipo de Data Engineering',
    role: 'Pipelines ETL & Data Architecture',
    specialty: 'Diseño de arquitecturas escalables de alta concurrencia.',
    avatarBg: 'bg-gradient-to-br from-[#ff4f00]/80 to-[#1F1F1F]',
    initials: 'DE',
  },
  {
    id: '4',
    name: 'Consultores BI & Analytics',
    role: 'Business Intelligence & Insights',
    specialty: 'Transformación de KPIs en productos de datos interactivos.',
    avatarBg: 'bg-gradient-to-br from-[#333333] to-[#1F1F1F]',
    initials: 'BI',
  },
];

interface TeamCarouselProps {
  theme?: ThemeMode;
}

export const TeamCarousel: React.FC<TeamCarouselProps> = ({ theme = 'light' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDark = theme === 'dark';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
  };

  const currentMember = TEAM_MEMBERS[currentIndex];

  return (
    <div
      className={`relative w-full max-w-4xl mx-auto rounded-3xl border p-8 sm:p-12 overflow-hidden shadow-2xl transition-colors duration-300 ${
        isDark ? 'bg-[#1F1F1F] border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/40'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Avatar badge visual */}
        <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-3xl ${currentMember.avatarBg} border-2 border-[#ff4f00]/40 flex items-center justify-center text-4xl sm:text-5xl font-black text-white shadow-xl shrink-0 transition-all duration-500`}>
          {currentMember.initials}
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <span className="text-xs font-bold text-[#ff4f00] uppercase tracking-widest bg-[#ff4f00]/10 px-3 py-1 rounded-full border border-[#ff4f00]/20">
            {currentMember.role}
          </span>
          <h3 className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {currentMember.name}
          </h3>
          <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#4d4d4d]'}`}>
            {currentMember.specialty}
          </p>
        </div>
      </div>

      {/* Controls & Dots */}
      <div className={`mt-8 pt-6 border-t flex items-center justify-between ${isDark ? 'border-[#333333]' : 'border-[#b2b2b2]/30'}`}>
        <div className="flex space-x-2">
          {TEAM_MEMBERS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-[#ff4f00]' : isDark ? 'w-2.5 bg-gray-600' : 'w-2.5 bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={handlePrev}
            className={`p-2.5 rounded-xl border text-sm transition-colors ${
              isDark
                ? 'bg-[#0F0F0F] border-[#333333] text-gray-300 hover:text-white'
                : 'bg-white border-[#b2b2b2]/40 text-[#1C1917] hover:border-[#ff4f00]'
            }`}
            aria-label="Previous team slide"
          >
            ←
          </button>
          <button
            type="button"
            onClick={handleNext}
            className={`p-2.5 rounded-xl border text-sm transition-colors ${
              isDark
                ? 'bg-[#0F0F0F] border-[#333333] text-gray-300 hover:text-white'
                : 'bg-white border-[#b2b2b2]/40 text-[#1C1917] hover:border-[#ff4f00]'
            }`}
            aria-label="Next team slide"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};
