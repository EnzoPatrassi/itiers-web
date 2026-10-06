'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Locale } from '@/data/i18n';
import { INFO_ITIERS } from '@/data/mockData';

interface ContactSectionProps {
  currentLang: Locale;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    empresa: '',
    telefono: '',
    necesidad: 'productos',
    mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const content = {
    es: {
      badge: 'Contacto Comercial',
      title: 'Transformemos tus desafíos de datos en soluciones de negocio',
      subtitle: 'Déjanos tus datos o contáctanos directamente. Un especialista técnico se pondrá en contacto en menos de 24 horas.',
      nameLabel: 'Nombre',
      lastNameLabel: 'Apellido',
      emailLabel: 'Email corporativo',
      companyLabel: 'Empresa / Organización',
      phoneLabel: 'Teléfono',
      needLabel: 'Tipo de solución',
      messageLabel: 'Mensaje / Detalles de la necesidad',
      submitBtn: 'Enviar consulta comercial',
      submittingBtn: 'Enviando consulta...',
      successTitle: '¡Consulta recibida con éxito!',
      successDesc: 'Gracias por ponerte en contacto. Nuestro equipo revisará tu mensaje y responderá a la brevedad.',
      errorTitle: 'Por favor completa todos los campos requeridos.',
      options: [
        { value: 'productos', label: 'Productos de Datos (Dashboards & Predictivo)' },
        { value: 'proyectos', label: 'Proyectos de Datos (ETL & Arquitectura)' },
        { value: 'staffing', label: 'Staffing de Talentos de Datos' },
        { value: 'capacitaciones', label: 'Capacitación en IA & Data' },
      ],
      headquarters: 'Sedes Internacionales:',
    },
    en: {
      badge: 'Commercial Contact',
      title: 'Let\'s turn your data challenges into scalable business solutions',
      subtitle: 'Fill out the form or reach out directly. A technical specialist will contact you within 24 hours.',
      nameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Corporate Email',
      companyLabel: 'Company / Organization',
      phoneLabel: 'Phone Number',
      needLabel: 'Solution Required',
      messageLabel: 'Message / Project Context',
      submitBtn: 'Submit Commercial Inquiry',
      submittingBtn: 'Sending inquiry...',
      successTitle: 'Inquiry received successfully!',
      successDesc: 'Thank you for reaching out. Our technical team will review your message and respond promptly.',
      errorTitle: 'Please fill out all required fields correctly.',
      options: [
        { value: 'productos', label: 'Data Products (Dashboards & Predictive)' },
        { value: 'proyectos', label: 'Data Projects (ETL & Architecture)' },
        { value: 'staffing', label: 'Data Talent Staffing' },
        { value: 'capacitaciones', label: 'AI & Data Executive Training' },
      ],
      headquarters: 'Global Offices:',
    },
  }[currentLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.nombre || !formData.email || !formData.empresa || !formData.mensaje) {
      setErrorMessage(content.errorTitle);
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate backend sending delay
    setTimeout(() => {
      setStatus('success');
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        empresa: '',
        telefono: '',
        necesidad: 'productos',
        mensaje: '',
      });
    }, 1200);
  };

  return (
    <section id="contacto" className="py-24 bg-[#0F0F0F] text-white border-t border-[#333333]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Info & Trust */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#ff4f00] font-semibold text-xs tracking-wider uppercase bg-[#ff4f00]/10 border border-[#ff4f00]/20 px-3.5 py-1.5 rounded-full">
                {content.badge}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {content.title}
              </h2>
              <p className="mt-4 text-gray-400 text-base leading-relaxed">
                {content.subtitle}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href={`mailto:${INFO_ITIERS.email}`}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-[#1F1F1F] border border-[#333333] hover:border-[#ff4f00]/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ff4f00]/10 flex items-center justify-center text-[#ff4f00] group-hover:scale-110 transition-transform">
                  ✉
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email Directo</div>
                  <div className="text-base font-bold text-white group-hover:text-[#ff4f00] transition-colors">{INFO_ITIERS.email}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${INFO_ITIERS.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-[#1F1F1F] border border-[#333333] hover:border-green-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  💬
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">WhatsApp Corporativo</div>
                  <div className="text-base font-bold text-white group-hover:text-green-400 transition-colors">{INFO_ITIERS.whatsapp}</div>
                </div>
              </a>
            </div>

            {/* Offices List */}
            <div className="pt-4 border-t border-[#333333]">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                {content.headquarters}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {INFO_ITIERS.sedes.map((sede, idx) => {
                  let flagImg = '/bandera-arg.png';
                  if (sede.pais.includes('Chile')) flagImg = '/bandera-chile.png';
                  if (sede.pais.includes('USA') || sede.pais.includes('Estados Unidos')) flagImg = '/bandera-usa.png';
                  return (
                    <div key={idx} className="flex items-center space-x-2.5 p-3 rounded-xl bg-[#1F1F1F]/50 border border-[#333333]/60 text-xs">
                      <Image src={flagImg} alt={sede.pais} width={24} height={16} className="w-6 h-4 object-cover rounded-xs" />
                      <div>
                        <div className="font-bold text-white">{sede.pais}</div>
                        <div className="text-gray-400">{sede.ciudad}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Validated Form */}
          <div className="lg:col-span-7 bg-[#1F1F1F] border border-[#333333] rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            {status === 'success' ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#ff4f00]/20 border-2 border-[#ff4f00] rounded-full flex items-center justify-center text-3xl mx-auto text-[#ff4f00]">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">{content.successTitle}</h3>
                <p className="text-gray-300 max-w-md mx-auto">{content.successDesc}</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 bg-[#ff4f00] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#e04500] transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
                    ⚠️ {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {content.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white focus:border-[#ff4f00] focus:ring-1 focus:ring-[#ff4f00] outline-none text-sm transition-colors"
                      placeholder="Juan"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {content.lastNameLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.apellido}
                      onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white focus:border-[#ff4f00] focus:ring-1 focus:ring-[#ff4f00] outline-none text-sm transition-colors"
                      placeholder="Pérez"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {content.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white focus:border-[#ff4f00] focus:ring-1 focus:ring-[#ff4f00] outline-none text-sm transition-colors"
                      placeholder="jperez@empresa.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {content.companyLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white focus:border-[#ff4f00] focus:ring-1 focus:ring-[#ff4f00] outline-none text-sm transition-colors"
                      placeholder="Empresa S.A."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {content.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white focus:border-[#ff4f00] focus:ring-1 focus:ring-[#ff4f00] outline-none text-sm transition-colors"
                      placeholder="+54 9 11 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {content.needLabel}
                    </label>
                    <select
                      value={formData.necesidad}
                      onChange={(e) => setFormData({ ...formData, necesidad: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white focus:border-[#ff4f00] focus:ring-1 focus:ring-[#ff4f00] outline-none text-sm transition-colors"
                    >
                      {content.options.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#0F0F0F] text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    {content.messageLabel} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white focus:border-[#ff4f00] focus:ring-1 focus:ring-[#ff4f00] outline-none text-sm transition-colors"
                    placeholder="Describe brevemente el objetivo o desafío de tu compañía..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#ff4f00] hover:bg-[#e04500] text-white font-bold text-base py-4 rounded-xl shadow-xl shadow-[#ff4f00]/20 hover:shadow-[#ff4f00]/40 transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? content.submittingBtn : `${content.submitBtn} →`}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
