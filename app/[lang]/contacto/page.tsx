"use client";

import React, { useState } from "react";
import Image from "next/image";
import { dictionaries, Locale } from "@/data/i18n";

interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  servicio?: string;
  mensaje?: string;
}

export default function ContactoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // Resolver los parámetros de la ruta de manera segura para Next.js App Router
  const [lang, setLang] = useState<Locale>('es');

  React.useEffect(() => {
    params.then((resolved) => {
      if (resolved.lang === 'en') {
        setLang('en');
      } else {
        setLang('es');
      }
    });
  }, [params]);

  const t = dictionaries[lang];

  const [formData, setFormData] = useState<FormState>({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const validarFormulario = (): boolean => {
    const nuevosErrores: FormErrors = {};
    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = lang === 'es' ? "El nombre completo es obligatorio." : "Full name is required.";
    }
    if (!formData.email.trim()) {
      nuevosErrores.email = lang === 'es' ? "El correo electrónico es obligatorio." : "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nuevosErrores.email = lang === 'es' ? "Por favor, introduce un correo válido." : "Please enter a valid email.";
    }
    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = lang === 'es' ? "El mensaje no puede estar vacío." : "Message cannot be empty.";
    }
    setErrors(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    setIsSubmitting(true);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          servicio: formData.servicio,
          mensaje: formData.mensaje,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ nombre: "", email: "", telefono: "", servicio: "", mensaje: "" });
      } else {
        setSubmitSuccess(false);
      }
    } catch (error) {
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            {t.nav.contacto} | Mendoza, Argentina
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            {lang === 'es' ? 'Hablemos de tus Datos e Inteligencia Artificial' : 'Let’s Talk About Your Data & Artificial Intelligence'}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {lang === 'es' 
              ? 'Ponte en contacto con nuestro equipo de consultores especialistas para diseñar la estrategia ideal para tu organización.'
              : 'Get in touch with our team of expert consultants to design the ideal strategy for your organization.'}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Información de Contacto */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Itiers Data Sense</h2>
              <p className="text-slate-400 text-sm">{t.footer.tagline}</p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <span className="font-bold text-white block">{lang === 'es' ? 'Sede Mendoza, Argentina:' : 'Mendoza HQ, Argentina:'}</span>
                  <p>Av. Perú 1841, Ciudad de Mendoza, Argentina</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">📩</span>
                <div>
                  <span className="font-bold text-white block">Email:</span>
                  <p>hola@itiers.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <span className="font-bold text-white block">WhatsApp / {lang === 'es' ? 'Teléfono:' : 'Phone:'}</span>
                  <p>+54 9 261 417-1612</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
              <Image
                src="/globe.svg"
                alt={lang === 'es' ? 'Ubicación global de Itiers Data Sense' : 'Global presence of Itiers Data Sense'}
                fill
                className="object-contain p-4 opacity-80"
              />
            </div>
          </div>

          {/* Formulario de Contacto */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-10 shadow-md border border-slate-200 space-y-6" noValidate>
            {submitSuccess === true && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm">
                <span className="font-bold">{lang === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!'}</span> {lang === 'es' ? 'Nos pondremos en contacto a la brevedad.' : 'We will get in touch shortly.'}
              </div>
            )}
            {submitSuccess === false && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">
                {lang === 'es' ? 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.' : 'There was an error sending the message. Please try again.'}
              </div>
            )}

            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-slate-900 mb-2">
                {lang === 'es' ? 'Nombre Completo *' : 'Full Name *'}
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border outline-none transition ${errors.nombre ? "border-red-500" : "border-slate-300 focus:ring-2 focus:ring-blue-600"}`}
                placeholder={lang === 'es' ? 'Ej. Juan Pérez' : 'E.g. John Smith'}
              />
              {errors.nombre && <p className="text-xs text-red-600 mt-1">{errors.nombre}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                {lang === 'es' ? 'Correo Electrónico Corporativo *' : 'Corporate Email *'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border outline-none transition ${errors.email ? "border-red-500" : "border-slate-300 focus:ring-2 focus:ring-blue-600"}`}
                placeholder="ejemplo@empresa.com"
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-900 mb-2">
                {lang === 'es' ? 'Mensaje o Consulta *' : 'Message or Inquiry *'}
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border outline-none transition ${errors.mensaje ? "border-red-500" : "border-slate-300 focus:ring-2 focus:ring-blue-600"}`}
                placeholder={lang === 'es' ? 'Cuéntanos sobre los objetivos de tu empresa...' : 'Tell us about your organization goals...'}
              ></textarea>
              {errors.mensaje && <p className="text-xs text-red-600 mt-1">{errors.mensaje}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
            >
              {isSubmitting ? (lang === 'es' ? 'Enviando...' : 'Sending...') : (lang === 'es' ? 'Enviar Mensaje' : 'Send Message')}
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}