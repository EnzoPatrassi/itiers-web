import React from 'react';

// Datos del Workflow extraídos del Excel
const workflowSteps = [
  { id: '01', title: 'Entrenar', desc: 'Alfabetizamos y preparamos a tu equipo para la cultura de datos.' },
  { id: '02', title: 'Transformar', desc: 'Convertimos datos dispersos y caóticos en activos estratégicos.' },
  { id: '03', title: 'Guiar', desc: 'Acompañamos la toma de decisiones con analítica precisa.' },
  { id: '04', title: 'Globalizar', desc: 'Escalamos la gobernanza de datos a toda tu organización.' },
];

// Datos de Servicios extraídos del Excel
const services = [
  {
    title: 'Ingeniería de Datos',
    desc: 'Diseñamos e implementamos la arquitectura que convierte tus datos en activos estratégicos. Construcción de pipelines automatizados, Modern Data Warehouses y Data Lakes.',
    icon: '⚙️', // Placeholder visual hasta que Luz pase los SVGs
  },
  {
    title: 'Soluciones de IA',
    desc: 'Integración de Inteligencia Artificial (predictiva y generativa) y analítica avanzada para potenciar la toma de decisiones y automatizar procesos complejos.',
    icon: '🧠',
  },
  {
    title: 'Capacitaciones',
    desc: 'Formación práctica en herramientas de BI, Data Storytelling y adopción responsable de IA para equipos. Fortalecemos las habilidades técnicas de tu empresa.',
    icon: '📈',
  },
  {
    title: 'Staffing Especializado',
    desc: 'Perfiles On-Demand: Data Engineers, Analysts, y Scientists listos para sumar valor desde el día uno. Flexibilidad operativa para tus proyectos de gran envergadura.',
    icon: '👥',
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="w-full py-24 bg-surface-card border-t border-semantic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-[32px] sm:text-[40px] font-bold text-semantic-text mb-4">
            Qué Hacemos
          </h2>
          <p className="font-body text-brand-gray max-w-2xl mx-auto text-lg">
            Soluciones integrales diseñadas para resolver problemas reales. 
            Te acompañamos en cada etapa de madurez de tus datos.
          </p>
        </div>

        {/* Workflow Interactivo (Pasos) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-24">
          {workflowSteps.map((step) => (
            <div 
              key={step.id} 
              className="group relative p-6 border-l-2 border-semantic-border hover:border-brand-primary transition-colors duration-300"
            >
              <span className="font-heading text-4xl font-light text-brand-secondary mb-2 block group-hover:text-brand-primary transition-colors">
                {step.id}
              </span>
              <h3 className="font-body font-bold text-semantic-text text-xl mb-2">{step.title}</h3>
              <p className="font-body text-brand-gray text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Cards de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-md bg-surface-background border border-semantic-border transition-all duration-300 hover:border-brand-primary group cursor-default"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold text-semantic-text mb-3 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-brand-gray leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};