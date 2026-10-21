'use client';

import React, { useState } from 'react';
import { Locale } from '@/data/i18n';
import { INFO_ITIERS } from '@/data/mockData';
import { validateWhatsAppConfig } from '@/lib/harness/guardrails';

interface ChatbotProps {
  currentLang: Locale;
}

export const Chatbot: React.FC<ChatbotProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    es: {
      botName: 'Consultas por WhatsApp',
      intro: 'Elegí el tema de tu consulta para continuar en WhatsApp.',
      options: [
        { label: 'Ingeniería de Datos', message: 'Hola, quiero consultar por Ingeniería de Datos.' },
        { label: 'IA y Automatizaciones', message: 'Hola, quiero consultar por IA y Automatizaciones.' },
        { label: 'Capacitaciones', message: 'Hola, quiero consultar por las capacitaciones.' },
        { label: 'Staffing de Datos', message: 'Hola, quiero consultar por Staffing de Datos.' },
      ],
      other: 'Otra consulta',
      otherMessage: 'Hola, quiero realizar una consulta sobre los servicios de Itiers.',
    },
    en: {
      botName: 'Contact on WhatsApp',
      intro: 'Choose a topic to continue your inquiry on WhatsApp.',
      options: [
        { label: 'Data Engineering', message: 'Hello, I have a question about Data Engineering.' },
        { label: 'AI and Automations', message: 'Hello, I have a question about AI and Automations.' },
        { label: 'Training', message: 'Hello, I have a question about training.' },
        { label: 'Data Staffing', message: 'Hello, I have a question about Data Staffing.' },
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
          className="relative group bg-[#ff4f00] hover:bg-[#e04500] text-white p-4 rounded-full shadow-[0_0_20px_rgba(255,79,0,0.4)] hover:shadow-[0_0_30px_rgba(255,79,0,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center focus:outline-none"
          aria-label={currentLang === 'es' ? 'Abrir opciones de contacto por WhatsApp' : 'Open WhatsApp contact options'}
          aria-expanded={isOpen}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <section id="whatsapp-contact-panel" aria-label={content.botName} className="w-[calc(100vw-2rem)] max-w-[360px] border border-[#333333] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 backdrop-blur-xl bg-[#1F1F1F]/95">
          
          <div className="bg-[#141414]/90 px-4 py-3 border-b border-[#333333] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-[#ff4f00] flex items-center justify-center text-white font-black text-xs shadow-inner">IT</div>
              <div>
                <h2 className="text-xs font-bold text-white">{content.botName}</h2>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-[#333333] transition-colors focus:outline-none">✕</button>
          </div>

          <div className="p-4 space-y-3 text-sm">
            <div className="bg-[#141414] border border-[#333333] p-3 rounded-2xl rounded-tl-none text-gray-300 text-xs leading-relaxed font-medium">
              {content.intro}
            </div>

            <nav aria-label={currentLang === 'es' ? 'Temas de consulta' : 'Inquiry topics'} className="space-y-2">
              {content.options.map((option) => (
                <a
                  key={option.label}
                  href={getWhatsAppUrl(option.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-3.5 py-2.5 rounded-xl bg-[#141414] border border-[#333333] hover:border-[#ff4f00] text-gray-200 hover:text-white transition-all focus:outline-none text-xs font-semibold hover:-translate-y-0.5"
                >
                  {option.label} <span className="float-right text-[#ff4f00]">→</span>
                </a>
              ))}
              <a
                href={getWhatsAppUrl(content.otherMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3.5 py-2.5 rounded-xl border border-[#ff4f00] bg-[#ff4f00]/10 text-[#ff4f00] hover:bg-[#ff4f00] hover:text-white transition-all focus:outline-none text-xs font-bold hover:-translate-y-0.5"
              >
                {content.other} <span className="float-right">→</span>
              </a>
            </nav>
          </div>

        </section>
      )}
    </div>
  );
};