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
      titleLine1: 'Cuéntanos cómo',
      titleLine2: 'podemos ayudarte',
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
      titleLine1: 'Tell us how',
      titleLine2: 'we can help you',
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
    <section id="contacto" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#050505]' : 'bg-[#111111]'}`}>
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-[#ff4f00] rounded-full blur-[180px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#ff4f00] rounded-full blur-[200px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Título Grande y Línea Naranja */}
          <div className="lg:col-span-5 text-left pt-10 lg:pt-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
              {content.titleLine1} <br />
              {content.titleLine2}
            </h2>
            <div className="w-24 h-1 bg-[#ff4f00]"></div>
          </div>

          {/* Columna Derecha: Tarjeta de Formulario Blanca/Clara */}
          <div className={`lg:col-span-7 rounded-lg p-8 sm:p-12 shadow-2xl transition-colors duration-300 ${isDark ? 'bg-[#141414] border border-[#333333]' : 'bg-white'}`}>
            <form className="space-y-6">
              
              {/* Fila 1: Nombre y Empresa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{content.form.name}</label>
                  <input type="text" className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent transition-colors text-sm ${isDark ? 'bg-[#0F0F0F] border-[#333333] text-white' : 'bg-[#FAFAFA] border-gray-300 text-gray-800'}`} />
                </div>
                <div>
                  <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{content.form.company}</label>
                  <input type="text" className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent transition-colors text-sm ${isDark ? 'bg-[#0F0F0F] border-[#333333] text-white' : 'bg-[#FAFAFA] border-gray-300 text-gray-800'}`} />
                </div>
              </div>

              {/* Fila 2: Tipo de Solución */}
              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{content.form.service}</label>
                <select className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent transition-colors text-sm appearance-none ${isDark ? 'bg-[#0F0F0F] border-[#333333] text-gray-300' : 'bg-[#FAFAFA] border-gray-300 text-gray-800'}`}>
                  {content.form.options.map((opt, i) => (
                    <option key={i} value={i === 0 ? '' : opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Fila 3: Mensaje */}
              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{content.form.message}</label>
                <textarea rows={4} className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent transition-colors text-sm resize-none ${isDark ? 'bg-[#0F0F0F] border-[#333333] text-white' : 'bg-[#FAFAFA] border-gray-300 text-gray-800'}`}></textarea>
              </div>

              {/* Fila 4: Botón Enviar */}
              <div className="pt-4">
                <button type="button" className="bg-[#ff4f00] hover:bg-[#e04500] text-white text-sm font-bold px-8 py-4 rounded uppercase tracking-wider transition-all w-full sm:w-auto shadow-lg shadow-[#ff4f00]/20">
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