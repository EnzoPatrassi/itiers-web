'use client';

import React, { useState } from 'react';
import { Locale } from '@/data/i18n';

interface ChatbotProps {
  currentLang: Locale;
}

export const Chatbot: React.FC<ChatbotProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'welcome' | 'form' | 'sent'>('welcome');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadQuery, setLeadQuery] = useState('');

  const content = {
    es: {
      botName: 'Itiers AI Assistant',
      onlineStatus: 'En línea',
      welcomeMsg: '¡Hola! 👋 Soy el asistente virtual de Itiers Data Sense. ¿En qué podemos ayudarte hoy?',
      opt1: '💡 Consultoría en Inteligencia Artificial',
      opt2: '📊 Productos & Dashboards de Datos',
      opt3: '👥 Staffing & Talentos de Datos',
      emailPlaceholder: 'Ingresa tu email corporativo...',
      queryPlaceholder: '¿Cómo podemos ayudarte?',
      sendBtn: 'Enviar consulta rápida',
      sentTitle: '¡Mensaje recibido!',
      sentDesc: 'Nos pondremos en contacto contigo a la brevedad.',
    },
    en: {
      botName: 'Itiers AI Assistant',
      onlineStatus: 'Online',
      welcomeMsg: 'Hello! 👋 I am the Itiers virtual assistant. How can we help your business today?',
      opt1: '💡 AI & Agentic Consulting',
      opt2: '📊 Data Products & Dashboards',
      opt3: '👥 Data Talent Staffing',
      emailPlaceholder: 'Enter your corporate email...',
      queryPlaceholder: 'How can we help?',
      sendBtn: 'Send quick inquiry',
      sentTitle: 'Message received!',
      sentDesc: 'We will reach out to you shortly.',
    },
  }[currentLang];

  const handleSelectOption = (optionText: string) => {
    setLeadQuery(optionText);
    setStep('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    setStep('sent');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative group bg-[#ff4f00] hover:bg-[#e04500] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
          aria-label="Abrir chat de asistencia"
        >
          <span className="w-3 h-3 rounded-full bg-green-400 absolute top-0 right-0 border-2 border-[#0F0F0F] animate-pulse" />
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

      {/* Floating Chat Window Panel */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] bg-[#1F1F1F] border border-[#ff4f00]/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#0F0F0F] p-4 border-b border-[#333333] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#ff4f00] flex items-center justify-center text-white font-bold text-xs">
                IT
              </div>
              <div>
                <div className="text-sm font-bold text-white">{content.botName}</div>
                <div className="flex items-center text-xs text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5" />
                  {content.onlineStatus}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-[#1F1F1F]"
              aria-label="Cerrar chat"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-5 max-h-[360px] overflow-y-auto space-y-4 text-xs">
            <div className="bg-[#0F0F0F] border border-[#333333] p-3.5 rounded-2xl rounded-tl-none text-gray-200 leading-relaxed">
              {content.welcomeMsg}
            </div>

            {step === 'welcome' && (
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => handleSelectOption(content.opt1)}
                  className="w-full text-left p-3 rounded-xl bg-[#0F0F0F] border border-[#333333] hover:border-[#ff4f00] text-gray-300 hover:text-white transition-colors"
                >
                  {content.opt1}
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectOption(content.opt2)}
                  className="w-full text-left p-3 rounded-xl bg-[#0F0F0F] border border-[#333333] hover:border-[#ff4f00] text-gray-300 hover:text-white transition-colors"
                >
                  {content.opt2}
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectOption(content.opt3)}
                  className="w-full text-left p-3 rounded-xl bg-[#0F0F0F] border border-[#333333] hover:border-[#ff4f00] text-gray-300 hover:text-white transition-colors"
                >
                  {content.opt3}
                </button>
              </div>
            )}

            {step === 'form' && (
              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Tu email</label>
                  <input
                    type="email"
                    required
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    placeholder={content.emailPlaceholder}
                    className="w-full p-2.5 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white text-xs focus:border-[#ff4f00] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Consulta</label>
                  <textarea
                    rows={2}
                    value={leadQuery}
                    onChange={(e) => setLeadQuery(e.target.value)}
                    placeholder={content.queryPlaceholder}
                    className="w-full p-2.5 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white text-xs focus:border-[#ff4f00] outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#ff4f00] hover:bg-[#e04500] text-white font-bold py-2.5 rounded-xl transition-colors text-xs shadow-md"
                >
                  {content.sendBtn}
                </button>
              </form>
            )}

            {step === 'sent' && (
              <div className="text-center py-4 space-y-2 bg-[#0F0F0F] p-4 rounded-2xl border border-green-500/30">
                <div className="text-green-400 font-bold text-sm">✓ {content.sentTitle}</div>
                <p className="text-gray-400 text-xs">{content.sentDesc}</p>
                <button
                  type="button"
                  onClick={() => setStep('welcome')}
                  className="text-xs text-[#ff4f00] underline mt-2"
                >
                  Reiniciar chat
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
