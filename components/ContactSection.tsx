'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from '@/components/Header';

interface ContactSectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang, theme }) => {
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
          'Staffing de Datos'
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
          'Data Staffing'
        ],
        message: 'Message',
        submit: 'Send Message',
      }
    }
  }[currentLang];

  return (
    <section id="contacto" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#1A1A1A]' : 'bg-[#4d4d4d]'}`}>
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-[#ff4f00] rounded-full blur-[180px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#ff4f00] rounded-full blur-[200px] opacity-10"></div>
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
            <div className="w-12 h-1 bg-[#ff4f00] mb-6"></div>
            <p className="text-[#b2b2b2] text-sm sm:text-base max-w-md font-medium leading-relaxed">
              {content.description}
            </p>
          </div>

          <div className={`lg:col-span-7 rounded-2xl p-8 sm:p-12 shadow-xl transition-colors duration-300 ${isDark ? 'bg-[#2A2A2A] border border-[#4d4d4d]' : 'bg-white'}`}>
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-[#898a8d]' : 'text-[#898a8d]'}`}>{content.form.name}</label>
                  <input type="text" className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent transition-colors text-sm ${isDark ? 'bg-[#1A1A1A] border-[#4d4d4d] text-white' : 'bg-[#f9f9f9] border-[#b2b2b2] text-[#4d4d4d]'}`} />
                </div>
                <div>
                  <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-[#898a8d]' : 'text-[#898a8d]'}`}>{content.form.company}</label>
                  <input type="text" className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent transition-colors text-sm ${isDark ? 'bg-[#1A1A1A] border-[#4d4d4d] text-white' : 'bg-[#f9f9f9] border-[#b2b2b2] text-[#4d4d4d]'}`} />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-[#898a8d]' : 'text-[#898a8d]'}`}>{content.form.service}</label>
                <select className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent transition-colors text-sm appearance-none ${isDark ? 'bg-[#1A1A1A] border-[#4d4d4d] text-[#b2b2b2]' : 'bg-[#f9f9f9] border-[#b2b2b2] text-[#4d4d4d]'}`}>
                  {content.form.options.map((opt, i) => (
                    <option key={i} value={i === 0 ? '' : opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-[#898a8d]' : 'text-[#898a8d]'}`}>{content.form.message}</label>
                <textarea rows={4} className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent transition-colors text-sm resize-none ${isDark ? 'bg-[#1A1A1A] border-[#4d4d4d] text-white' : 'bg-[#f9f9f9] border-[#b2b2b2] text-[#4d4d4d]'}`}></textarea>
              </div>

              <div className="pt-4">
                <button type="button" className="bg-[#ff4f00] hover:bg-[#e04500] text-white text-sm font-bold px-8 py-4 rounded-lg uppercase tracking-wider transition-all w-full sm:w-auto">
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