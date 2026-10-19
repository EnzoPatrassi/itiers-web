'use client';

import React from 'react';
import { Locale } from '@/data/i18n';
import { ThemeMode } from './Header';

interface ContactSectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const content = {
    es: {
      badge: 'Contacto',
      title: 'Hablemos de tus datos',
      subtitle: 'Completá el formulario o contactanos por WhatsApp para empezar a diseñar tu solución.',
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
      badge: 'Contact',
      title: 'Let\'s talk about your data',
      subtitle: 'Fill out the form or contact us via WhatsApp to start designing your solution.',
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
    <section id="contacto" className={`py-24 border-t relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/30'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Estructura inspirada en la referencia de banner de contacto (Split Layout) */}
        <div className={`rounded-[2.5rem] border overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 transition-colors duration-300 backdrop-blur-xl ${
          isDark ? 'bg-[#1A1A1A]/80 border-[#333333]' : 'bg-white/90 border-[#b2b2b2]/40'
        }`}>
          
          {/* Columna Izquierda: Impacto visual oscuro con tipografía de referencia */}
          <div className="lg:col-span-5 bg-[#141414] text-white p-10 sm:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Orbe de luz de fondo */}
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#ff4f00] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10">
              <span className="text-[#ff4f00] font-bold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full inline-block mb-6">
                {content.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
                {content.title}
              </h2>
              <div className="w-16 h-1 bg-[#ff4f00] rounded-full mb-6"></div>
            </div>

            <div className="relative z-10 mt-8">
              <p className="text-gray-400 text-base leading-relaxed">
                {content.subtitle}
              </p>
            </div>
          </div>

          {/* Columna Derecha: Formulario limpio y moderno */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-[#1C1917]'}`}>{content.form.name}</label>
                  <input type="text" className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] transition-shadow ${isDark ? 'bg-[#0F0F0F]/50 border-[#333333] text-white' : 'bg-[#FAFAFA] border-[#b2b2b2]/50 text-[#1C1917]'}`} />
                </div>
                <div>
                  <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-[#1C1917]'}`}>{content.form.company}</label>
                  <input type="text" className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] transition-shadow ${isDark ? 'bg-[#0F0F0F]/50 border-[#333333] text-white' : 'bg-[#FAFAFA] border-[#b2b2b2]/50 text-[#1C1917]'}`} />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-[#1C1917]'}`}>{content.form.service}</label>
                <select className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] transition-shadow appearance-none ${isDark ? 'bg-[#0F0F0F]/50 border-[#333333] text-white' : 'bg-[#FAFAFA] border-[#b2b2b2]/50 text-[#1C1917]'}`}>
                  {content.form.options.map((opt, i) => <option key={i} value={i === 0 ? '' : opt} className={isDark ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#1C1917]'}>{opt}</option>)}
                </select>
              </div>

              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-[#1C1917]'}`}>{content.form.message}</label>
                <textarea rows={4} className={`w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] transition-shadow resize-none ${isDark ? 'bg-[#0F0F0F]/50 border-[#333333] text-white' : 'bg-[#FAFAFA] border-[#b2b2b2]/50 text-[#1C1917]'}`}></textarea>
              </div>

              <button type="button" className="w-full bg-[#ff4f00] hover:bg-[#e04500] text-white font-bold text-base py-4 rounded-xl transition-all hover:scale-[1.01] shadow-lg shadow-[#ff4f00]/20">
                {content.form.submit}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};