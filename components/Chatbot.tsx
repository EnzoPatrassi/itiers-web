'use client';

import React, { useState } from 'react';
import { Locale } from '@/data/i18n';
import { INFO_ITIERS } from '@/data/mockData';
import { validateWhatsAppConfig } from '@/lib/harness/guardrails';
import { ThemeMode } from '@/components/Header';

interface ChatbotProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const Chatbot: React.FC<ChatbotProps> = ({ currentLang, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';

  const content = {
    es: {
      botName: 'Consultas',
      intro: 'Elegí el tema de tu consulta para continuar en WhatsApp.',
      options: [
        { label: 'Ingeniería de Datos', message: 'Hola, quiero consultar por Ingeniería de Datos.' },
        { label: 'IA y Automatizaciones', message: 'Hola, quiero consultar por IA y Automatizaciones.' },
        { label: 'Capacitaciones', message: 'Hola, quiero consultar por las capacitaciones.' },
        { label: 'Staffing de Datos', message: 'Hola, quiero consultar por Staffing de Datos.' },
        { label: 'Gobernanza de Datos', message: 'Hola, quiero consultar por Gobernanza de Datos.' },
        { label: 'Diagnóstico y Consultoría', message: 'Hola, quiero consultar por Diagnóstico y Consultoría.' },
      ],
      other: 'Otra consulta',
      otherMessage: 'Hola, quiero realizar una consulta sobre los servicios de Itiers.',
    },
    en: {
      botName: 'Contact',
      intro: 'Choose a topic to continue your inquiry on WhatsApp.',
      options: [
        { label: 'Data Engineering', message: 'Hello, I have a question about Data Engineering.' },
        { label: 'AI and Automations', message: 'Hello, I have a question about AI and Automations.' },
        { label: 'Training', message: 'Hello, I have a question about training.' },
        { label: 'Data Staffing', message: 'Hello, I have a question about Data Staffing.' },
        { label: 'Data Governance', message: 'Hello, I have a question about Data Governance.' },
        { label: 'Diagnosis and Consulting', message: 'Hello, I have a question about Diagnosis and Consulting.' },
      ],
      other: 'Another inquiry',
      otherMessage: 'Hello, I would like to ask about Itiers services.',
    },
  }[currentLang];

  const getWhatsAppUrl = (message: string) => {
    const channel = validateWhatsAppConfig(INFO_ITIERS.whatsapp, message);
    if (!channel.success || !channel.url) {
      throw new Error(channel.error || 'La configuración del canal de WhatsApp no es válida.');
    }
    return channel.url;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative group bg-[#ff4f00] hover:bg-[#e04500] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none"
          aria-label={currentLang === 'es' ? 'Abrir opciones de contacto por WhatsApp' : 'Open WhatsApp contact options'}
          aria-expanded={isOpen}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <section id="whatsapp-contact-panel" aria-label={content.botName} className={`w-[calc(100vw-2rem)] max-w-[380px] border rounded-[2rem] shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 backdrop-blur-xl ${
          isDark ? 'bg-[#1F1F1F]/95 border-[#333333]' : 'bg-white/95 border-gray-200'
        }`}>
          
          <div className={`px-5 py-4 border-b flex items-center justify-between shrink-0 transition-colors ${
            isDark ? 'bg-[#141414]/90 border-[#333333]' : 'bg-gray-50/90 border-gray-200'
          }`}>
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#ff4f00] flex items-center justify-center text-white font-black text-sm shadow-inner">IT</div>
              <div>
                <h2 className={`text-sm font-bold transition-colors ${isDark ? 'text-white' : 'text-[#4d4d4d]'}`}>{content.botName}</h2>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className={`p-2 rounded-lg transition-colors focus:outline-none ${
              isDark ? 'text-gray-400 hover:text-white hover:bg-[#333333]' : 'text-gray-500 hover:text-black hover:bg-gray-200'
            }`}>✕</button>
          </div>

          <div className="p-5 flex flex-col max-h-[65vh]">
            
            <div className={`border p-3.5 rounded-2xl rounded-tl-none text-sm leading-relaxed font-medium mb-4 shrink-0 transition-colors ${
              isDark ? 'bg-[#141414] border-[#333333] text-gray-300' : 'bg-gray-50 border-gray-200 text-[#666666]'
            }`}>
              {content.intro}
            </div>

            <nav 
              aria-label={currentLang === 'es' ? 'Temas de consulta' : 'Inquiry topics'} 
              className={`space-y-2 overflow-y-auto pr-1.5 mb-2 shrink [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full ${
                isDark ? '[&::-webkit-scrollbar-thumb]:bg-[#333333]' : '[&::-webkit-scrollbar-thumb]:bg-gray-300'
              }`}
            >
              {content.options.map((option) => (
                <a
                  key={option.label}
                  href={getWhatsAppUrl(option.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-left px-4 py-3 rounded-xl border transition-all focus:outline-none text-sm font-semibold hover:-translate-y-0.5 hover:border-[#ff4f00] ${
                    isDark ? 'bg-[#141414] border-[#333333] text-gray-200 hover:text-white' : 'bg-white border-gray-200 text-[#4d4d4d] hover:text-black'
                  }`}
                >
                  {option.label} <span className="float-right text-[#ff4f00]">→</span>
                </a>
              ))}
            </nav>

            <div className={`pt-3 border-t shrink-0 mt-1 transition-colors ${isDark ? 'border-[#333333]' : 'border-gray-200'}`}>
              <a
                href={getWhatsAppUrl(content.otherMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-4 py-3 rounded-xl border border-[#ff4f00] bg-[#ff4f00]/10 text-[#ff4f00] hover:bg-[#ff4f00] hover:text-white transition-all focus:outline-none text-sm font-bold hover:-translate-y-0.5"
              >
                {content.other} <span className="float-right">→</span>
              </a>
            </div>

          </div>

        </section>
      )}
    </div>
  );
};