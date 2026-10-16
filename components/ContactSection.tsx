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
    <section id="contacto" className={`py-24 border-t transition-colors duration-300 ${isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-white border-[#b2b2b2]/30'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-4 py-1.5 rounded-full inline-block mb-4">
            {content.badge}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            {content.title}
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-[#4d4d4d]'}`}>
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className={`p-8 rounded-2xl border shadow-lg ${isDark ? 'bg-[#1A1A1A] border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/40'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-[#1C1917]'}`}>{content.form.name}</label>
                <input type="text" className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] ${isDark ? 'bg-[#0F0F0F] border-[#333333] text-white' : 'bg-white border-[#b2b2b2] text-[#1C1917]'}`} />
              </div>
              <div>
                <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-[#1C1917]'}`}>{content.form.company}</label>
                <input type="text" className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] ${isDark ? 'bg-[#0F0F0F] border-[#333333] text-white' : 'bg-white border-[#b2b2b2] text-[#1C1917]'}`} />
              </div>
            </div>
            <div className="mb-6">
              <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-[#1C1917]'}`}>{content.form.service}</label>
              <select className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] ${isDark ? 'bg-[#0F0F0F] border-[#333333] text-white' : 'bg-white border-[#b2b2b2] text-[#1C1917]'}`}>
                {content.form.options.map((opt, i) => <option key={i} value={i === 0 ? '' : opt}>{opt}</option>)}
              </select>
            </div>
            <div className="mb-8">
              <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-[#1C1917]'}`}>{content.form.message}</label>
              <textarea rows={4} className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#ff4f00] ${isDark ? 'bg-[#0F0F0F] border-[#333333] text-white' : 'bg-white border-[#b2b2b2] text-[#1C1917]'}`}></textarea>
            </div>
            <button type="button" className="w-full bg-[#ff4f00] hover:bg-[#e04500] text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02]">
              {content.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};