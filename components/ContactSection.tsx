'use client';

import React, { useState } from 'react';
import { Locale } from '@/data/i18n';
import { INFO_ITIERS } from '@/data/mockData';
import { ContactFormSchema, validateWhatsAppConfig } from '@/lib/harness/guardrails';

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
    necesidad: 'ingenieria',
    mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const content = {
    es: {
      badge: 'Contacto',
      title: 'Hablemos de tus datos',
      subtitle: 'Elegí el tema de tu consulta y continuá la conversación con Itiers por WhatsApp.',
      nameLabel: 'Nombre',
      lastNameLabel: 'Apellido',
      emailLabel: 'Email corporativo',
      companyLabel: 'Empresa / Organización',
      phoneLabel: 'Teléfono',
      needLabel: 'Tipo de solución',
      messageLabel: 'Mensaje / Detalles de la necesidad',
      submitBtn: 'Continuar por WhatsApp',
      successTitle: 'WhatsApp está listo',
      successDesc: 'Se abrió WhatsApp con tu consulta. Revisá el mensaje y envialo desde allí.',
      errorTitle: 'Revisá los datos ingresados antes de continuar.',
      options: [
        { value: 'ingenieria', label: 'Ingeniería de Datos' },
        { value: 'capacitaciones', label: 'Capacitaciones' },
        { value: 'staffing', label: 'Staffing de Datos' },
      ],
      directMessage: 'Hola, quiero realizar una consulta sobre los servicios de Itiers.',
      headquarters: 'Sedes Internacionales:',
    },
    en: {
      badge: 'Contact',
      title: 'Let\'s talk about your data',
      subtitle: 'Choose a topic for your inquiry and continue the conversation with Itiers on WhatsApp.',
      nameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Corporate Email',
      companyLabel: 'Company / Organization',
      phoneLabel: 'Phone Number',
      needLabel: 'Solution Required',
      messageLabel: 'Message / Project Context',
      submitBtn: 'Continue on WhatsApp',
      successTitle: 'WhatsApp is ready',
      successDesc: 'WhatsApp opened with your inquiry. Review the message and send it there.',
      errorTitle: 'Check the information entered before continuing.',
      options: [
        { value: 'ingenieria', label: 'Data Engineering' },
        { value: 'capacitaciones', label: 'Training' },
        { value: 'staffing', label: 'Data Staffing' },
      ],
      directMessage: 'Hello, I would like to ask about Itiers services.',
      headquarters: 'Global Offices:',
    },
  }[currentLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    const parsedContact = ContactFormSchema.safeParse({
      name: `${formData.nombre} ${formData.apellido}`.trim(),
      email: formData.email,
      company: formData.empresa,
      serviceOfInterest: formData.necesidad,
      message: formData.mensaje,
    });

    if (!parsedContact.success) {
      setErrorMessage(parsedContact.error.issues.map((issue) => issue.message).join(' '));
      setStatus('error');
      return;
    }

    const selectedService = content.options.find((option) => option.value === parsedContact.data.serviceOfInterest);
    if (!selectedService) {
      setErrorMessage(content.errorTitle);
      setStatus('error');
      return;
    }

    const message = [
      `Nombre: ${parsedContact.data.name}`,
      `Email: ${parsedContact.data.email}`,
      `Empresa: ${parsedContact.data.company || 'No indicada'}`,
      `Servicio: ${selectedService.label}`,
      `Consulta: ${parsedContact.data.message}`,
    ].join('\n');
    const channel = validateWhatsAppConfig(INFO_ITIERS.whatsapp, message);

    if (!channel.success || !channel.url) {
      setErrorMessage(channel.error || content.errorTitle);
      setStatus('error');
      return;
    }

    window.open(channel.url, '_blank', 'noopener,noreferrer');
    setStatus('success');
  };

  const directChannel = validateWhatsAppConfig(INFO_ITIERS.whatsapp, content.directMessage);
  if (!directChannel.success || !directChannel.url) {
    throw new Error(directChannel.error || 'La configuración del canal de WhatsApp no es válida.');
  }

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

            {/* Direct WhatsApp Channel */}
            <div className="space-y-4">
              <a
                href={directChannel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-[#1F1F1F] border border-[#333333] hover:border-green-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ff4f00]/10 flex items-center justify-center text-[#ff4f00] group-hover:scale-110 transition-transform">
                  💬
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">WhatsApp Corporativo</div>
                  <div className="text-base font-bold text-white group-hover:text-[#ff4f00] transition-colors">{INFO_ITIERS.whatsapp}</div>
                </div>
              </a>
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
                    <label htmlFor="contact-name" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {content.nameLabel} *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white focus:border-[#ff4f00] focus:ring-1 focus:ring-[#ff4f00] outline-none text-sm transition-colors"
                      placeholder="Juan"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-lastname" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {content.lastNameLabel}
                    </label>
                    <input
                      type="text"
                      id="contact-lastname"
                      value={formData.apellido}
                      onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white focus:border-[#ff4f00] focus:ring-1 focus:ring-[#ff4f00] outline-none text-sm transition-colors"
                      placeholder="Pérez"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {content.emailLabel} *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white focus:border-[#ff4f00] focus:ring-1 focus:ring-[#ff4f00] outline-none text-sm transition-colors"
                      placeholder="jperez@empresa.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {content.companyLabel} *
                    </label>
                    <input
                      type="text"
                      id="contact-company"
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
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {content.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#333333] text-white focus:border-[#ff4f00] focus:ring-1 focus:ring-[#ff4f00] outline-none text-sm transition-colors"
                      placeholder="+54 9 11 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                      {content.needLabel}
                    </label>
                    <select
                      id="contact-service"
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
                  <label htmlFor="contact-message" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    {content.messageLabel} *
                  </label>
                  <textarea
                    id="contact-message"
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
                  className="w-full bg-[#ff4f00] hover:bg-[#e04500] text-white font-bold text-base py-4 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#ff4f00]"
                >
                  {`${content.submitBtn} →`}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
