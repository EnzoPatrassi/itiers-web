'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';

// Datos de testimonios (Social Proof)
const testimonials = [
  {
    quote: "Itiers nos ayudó a unificar datos de tres sistemas distintos en un solo mes. Por primera vez, el directorio toma decisiones viendo el mismo tablero.",
    author: "Director de Operaciones",
    company: "Logística Regional Sur"
  },
  {
    quote: "La capacitación en BI transformó a nuestro equipo. Pasamos de armar Excel manuales de 5 horas a ver las métricas actualizadas en tiempo real.",
    author: "Gerente de Finanzas",
    company: "RetailTech SA"
  }
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simulación del envío de formulario (para cumplir con el DoD de "captador de leads")
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Acá Stefano (Harness/Backend) conectará el endpoint real para el envío de mails
    setTimeout(() => {
      alert("¡Gracias! Tus datos fueron enviados. Nos contactaremos a la brevedad.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contacto" className="w-full bg-surface-card border-t border-semantic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Columna Izquierda: Testimonios (Social Proof) */}
          <div className="flex flex-col justify-center">
            <h2 className="font-heading text-[32px] sm:text-[40px] font-bold text-semantic-text mb-8">
              El impacto de tomar <br/>
              <span className="text-brand-primary">decisiones correctas</span>
            </h2>
            
            <div className="space-y-8">
              {testimonials.map((testimonio, index) => (
                <div key={index} className="p-8 rounded-md bg-surface-background border border-semantic-border">
                  <div className="text-brand-primary text-4xl font-heading mb-4">"</div>
                  <p className="font-body text-semantic-text text-lg italic mb-6">
                    {testimonio.quote}
                  </p>
                  <div>
                    <p className="font-body font-bold text-semantic-text">{testimonio.author}</p>
                    <p className="font-body text-brand-gray text-sm">{testimonio.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Formulario de Conversión */}
          <div className="bg-surface-background p-8 sm:p-12 rounded-md border border-semantic-border shadow-sm">
            <h3 className="font-heading text-2xl font-bold text-semantic-text mb-2">
              Iniciá la transformación
            </h3>
            <p className="font-body text-brand-gray mb-8">
              Dejanos tus datos y un especialista en datos se pondrá en contacto para evaluar tu caso.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-body text-sm font-medium text-semantic-text mb-2">
                  Nombre completo
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 rounded-sm border border-semantic-border bg-surface-background text-semantic-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-body text-sm font-medium text-semantic-text mb-2">
                  Correo electrónico corporativo
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-sm border border-semantic-border bg-surface-background text-semantic-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                  placeholder="juan@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-body text-sm font-medium text-semantic-text mb-2">
                  ¿En qué podemos ayudarte?
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-sm border border-semantic-border bg-surface-background text-semantic-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none"
                  placeholder="Contanos brevemente sobre tu proyecto o necesidad de datos..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Solicitar asesoramiento'}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};