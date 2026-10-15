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
      {/* Botón flotante para abrir/cerrar */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative group bg-[#ff4f00] hover:bg-[#e04500] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
          aria-label={currentLang === 'es' ? 'Abrir opciones de contacto por WhatsApp' : 'Open WhatsApp contact options'}
          aria-expanded={isOpen}
          aria-controls="whatsapp-contact-panel"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}

      {/* Panel flotante de la ventana de chat */}
      {isOpen && (
        <section id="whatsapp-contact-panel" aria-label={content.botName} className="w-[calc(100vw-2rem)] max-w-[380px] bg-[#1F1F1F] border border-[#ff4f00]/40 rounded-[16px] shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Encabezado */}
          <div className="bg-[#0F0F0F] p-4 border-b border-[#333333] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#ff4f00] flex items-center justify-center text-white font-bold text-xs">
                IT
              </div>
              <div>
                <h2 className="text-sm font-bold text-white">{content.botName}</h2>
                <p className="text-xs text-gray-400">{INFO_ITIERS.whatsapp}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
              aria-label="Cerrar chat"
            >
              ✕
            </button>
          </div>

          {/* Cuerpo */}
          <div className="p-5 max-h-[min(70vh,420px)] overflow-y-auto space-y-4 text-xs">
            <div className="bg-[#0F0F0F] border border-[#333333] p-3.5 rounded-2xl rounded-tl-none text-gray-200 leading-relaxed">
              {content.intro}
            </div>

            <nav aria-label={currentLang === 'es' ? 'Temas de consulta' : 'Inquiry topics'} className="space-y-2 pt-2">
              {content.options.map((option) => (
                <a
                  key={option.label}
                  href={getWhatsAppUrl(option.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left p-3 rounded-[12px] bg-[#0F0F0F] border border-[#333333] hover:border-[#ff4f00] text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
                >
                  {option.label} →
                </a>
              ))}
              <a
                href={getWhatsAppUrl(content.otherMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left p-3 rounded-[12px] border border-[#ff4f00] text-[#ff4f00] hover:bg-[#ff4f00] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
              >
                {content.other} →
              </a>
            </nav>
          </div>
        </section>
      )}
    </div>
  );
};