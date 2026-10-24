'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from '@/components/Header';

interface ContactSectionProps {
  currentLang: Locale;
  theme?: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang, theme = 'light' }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      tag: 'CONTACTO',
      titleLine1: 'Hablemos de tus',
      titleLine2: 'datos',
      description: 'Completa el formulario o contactanos por WhatsApp para empezar a diseñar tu solución.',
      form: {
        name: 'Nombre y Apellido',
        company: 'Empresa',
        service: 'Tipo de Solución',
        options: [
          'Seleccioná una opción',
          'Ingeniería de Datos',
          'IA & Automatizaciones',
          'Capacitaciones',
          'Staffing de Datos',
          'Gobernanza de Datos',
          'Diagnóstico y Consultoría'
        ],
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
      }
    },
    en: {
      tag: 'CONTACT',
      titleLine1: "Let's talk about",
      titleLine2: 'your data',
      description: 'Fill out the form or contact us via WhatsApp to start designing your solution.',
      form: {
        name: 'Full Name',
        company: 'Company',
        service: 'Type of Solution',
        options: [
          'Select an option',
          'Data Engineering',
          'AI & Automations',
          'Training',
          'Data Staffing',
          'Data Governance',
          'Diagnosis and Consulting'
        ],
        message: 'Message',
        submit: 'Send Message',
      }
    }
  }[currentLang];

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-[#161616]">
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[45rem] h-[45rem] bg-[#ff4f00] rounded-full blur-[200px] opacity-[0.12]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 text-left pt-10 lg:pt-0">
            <span className="text-[#ff4f00] text-xs font-bold uppercase tracking-widest mb-4 block">
              {content.tag}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
              {content.titleLine1} <br />
              {content.titleLine2}
            </h2>
            <div className="w-16 h-1 bg-[#ff4f00] mb-8"></div>
            <p className="text-[#b2b2b2] text-sm sm:text-base max-w-md font-medium leading-relaxed">
              {content.description}
            </p>
          </div>

          <div className={`lg:col-span-7 rounded-none p-8 sm:p-12 shadow-2xl border transition-colors duration-300 ${
            isDark ? 'bg-[#212121] border-[#333333]' : 'bg-white border-transparent'
          }`}>
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-[11px] font-bold mb-2 uppercase tracking-wider transition-colors ${isDark ? 'text-gray-300' : 'text-slate-500'}`}>
                    {content.form.name}
                  </label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-3.5 rounded-none border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent transition-colors text-sm ${
                      isDark ? 'bg-[#161616] border-[#333333] text-white' : 'bg-white border-gray-200 text-gray-800'
                    }`} 
                  />
                </div>
                <div>
                  <label className={`block text-[11px] font-bold mb-2 uppercase tracking-wider transition-colors ${isDark ? 'text-gray-300' : 'text-slate-500'}`}>
                    {content.form.company}
                  </label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-3.5 rounded-none border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent transition-colors text-sm ${
                      isDark ? 'bg-[#161616] border-[#333333] text-white' : 'bg-white border-gray-200 text-gray-800'
                    }`} 
                  />
                </div>
              </div>

              <div>
                <label className={`block text-[11px] font-bold mb-2 uppercase tracking-wider transition-colors ${isDark ? 'text-gray-300' : 'text-slate-500'}`}>
                  {content.form.service}
                </label>
                <select 
                  className={`w-full px-4 py-3.5 rounded-none border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent transition-colors text-sm appearance-none ${
                    isDark ? 'bg-[#161616] border-[#333333] text-white' : 'bg-white border-gray-200 text-slate-700'
                  }`}
                >
                  {content.form.options.map((opt, i) => (
                    <option key={i} value={i === 0 ? '' : opt} className={isDark ? 'bg-[#161616] text-white' : 'bg-white text-gray-800'}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`block text-[11px] font-bold mb-2 uppercase tracking-wider transition-colors ${isDark ? 'text-gray-300' : 'text-slate-500'}`}>
                  {content.form.message}
                </label>
                <textarea 
                  rows={4} 
                  className={`w-full px-4 py-3.5 rounded-none border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent transition-colors text-sm resize-none ${
                    isDark ? 'bg-[#161616] border-[#333333] text-white' : 'bg-white border-gray-200 text-gray-800'
                  }`}
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="button" 
                  className="bg-[#ff4f00] hover:bg-[#e04500] text-white text-[11px] sm:text-xs font-bold px-8 py-4 rounded-none uppercase tracking-wider transition-all w-full sm:w-auto"
                >
                  {content.form.submit}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};