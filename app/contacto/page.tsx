"use client";

import React, { useState } from "react";

// Estructura de datos para el formulario
interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

// Estructura para capturar errores de validación
interface FormErrors {
  nombre?: string;
  email?: string;
  servicio?: string;
  mensaje?: string;
}

export default function ContactoPage() {
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

  // Validación de campos del lado del cliente
  const validarFormulario = (): boolean => {
    const nuevosErrores: FormErrors = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = "El nombre completo es obligatorio.";
    }

    if (!formData.email.trim()) {
      nuevosErrores.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nuevosErrores.email = "Por favor, introduce un correo electrónico válido.";
    }

    if (!formData.servicio) {
      nuevosErrores.servicio = "Debes seleccionar un servicio de interés.";
    }

    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje no puede estar vacío.";
    } else if (formData.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = "Por favor, escribe un mensaje más descriptivo (mínimo 10 caracteres).";
    }

    setErrors(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // Manejar el cambio de valores de los inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar el error de un campo cuando el usuario empieza a escribir en él
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(null);

    try {
      // Simulación de envío a un API o servicio de correo electrónico (vía Harness/IA en el futuro)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitSuccess(true);
      // Reiniciar formulario tras envío exitoso
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        servicio: "",
        mensaje: "",
      });
    } catch (error) {
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Cabecera de la página */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-xs bg-blue-50 px-3 py-1 rounded-full">
            Canal de Captación Oficial
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Contacta con un Especialista de Itiers
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Platícanos sobre tus desafíos organizacionales. Nuestro equipo de consultores te ayudará a refinar tus datos estructurados y no estructurados en inteligencia competitiva.
          </p>
        </div>

        {/* Contenido Principal en dos columnas para Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Columna de Información Corporativa (Accesibilidad y Contexto) */}
          <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2 border-slate-100">
                Información Corporativa
              </h2>
              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-800">Trayectoria:</p>
                  <p>20 años brindando soluciones de Data Sense.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Alianza Estratégica:</p>
                  <p>Socio oficial de IBM Watsonx para la integración de Inteligencia Artificial Generativa.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Sedes Principales:</p>
                  <ul className="list-disc pl-4 space-y-1 mt-1 text-xs">
                    <li>Mendoza, Argentina</li>
                    <li>Santiago, Chile</li>
                    <li>Delaware, Estados Unidos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-400">
              <p>Tu información está protegida bajo nuestras políticas de privacidad y protección de datos corporativos.</p>
            </div>
          </div>

          {/* Columna del Formulario */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100">

            {submitSuccess === true && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm flex flex-col gap-1">
                <span className="font-bold">¡Mensaje enviado con éxito!</span>
                <span>Gracias por contactarnos. Un especialista de nuestro equipo de consultoría se comunicará contigo a la brevedad.</span>
              </div>
            )}

            {submitSuccess === false && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">
                <span className="font-bold">Error al enviar el mensaje.</span> Por favor, inténtalo de nuevo o ponte en contacto por correo directo.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>

              {/* Campo Nombre completo */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-slate-700 mb-1">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                    errors.nombre ? "border-red-500 focus:ring-red-500" : "border-slate-300"
                  }`}
                  placeholder="Ej. Juan Pérez"
                  aria-required="true"
                  aria-invalid={errors.nombre ? "true" : "false"}
                  aria-describedby={errors.nombre ? "nombre-error" : undefined}
                />
                {errors.nombre && (
                  <p id="nombre-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.nombre}
                  </p>
                )}
              </div>

              {/* Fila de Email y Teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                      errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-300"
                    }`}
                    placeholder="ejemplo@correo.com"
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-600 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-slate-700 mb-1">
                    Teléfono <span className="text-slate-400 font-normal">(Opcional)</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>

              {/* Selección del Servicio de Interés */}
              <div>
                <label htmlFor="servicio" className="block text-sm font-semibold text-slate-700 mb-1">
                  Servicio de Interés <span className="text-red-500">*</span>
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-white text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                    errors.servicio ? "border-red-500 focus:ring-red-500" : "border-slate-300"
                  }`}
                  aria-required="true"
                  aria-invalid={errors.servicio ? "true" : "false"}
                  aria-describedby={errors.servicio ? "servicio-error" : undefined}
                >
                  <option value="">Selecciona una opción...</option>
                  <option value="productos">Productos de Datos personalizados</option>
                  <option value="proyectos">Proyectos de Datos integrales</option>
                  <option value="staffing">Staffing Profesional de Datos</option>
                  <option value="capacitaciones">Capacitaciones Especializadas</option>
                  <option value="otro">Consultoría General / Alianzas</option>
                </select>
                {errors.servicio && (
                  <p id="servicio-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.servicio}
                  </p>
                )}
              </div>

              {/* Mensaje de Consulta */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-700 mb-1">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 resize-none ${
                    errors.mensaje ? "border-red-500 focus:ring-red-500" : "border-slate-300"
                  }`}
                  placeholder="Detalla los requerimientos o dudas que tiene tu organización..."
                  aria-required="true"
                  aria-invalid={errors.mensaje ? "true" : "false"}
                  aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                />
                {errors.mensaje && (
                  <p id="mensaje-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.mensaje}
                  </p>
                )}
              </div>

              {/* Botón de Envío */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      {/* Animación básica de Spinner de Carga */}
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando consulta...
                    </>
                  ) : (
                    "Enviar Mensaje"
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}