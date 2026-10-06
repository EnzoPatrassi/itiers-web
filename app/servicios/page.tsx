import React from 'react';
import { Metadata } from 'next';
import ServiceCard from '../../components/ServiceCard';

export const metadata: Metadata = {
  title: 'Servicios de Datos e IA | ITIERS Data Sense',
  description: 'Catálogo de servicios de Itiers Data Sense: Productos de Datos, Proyectos de Datos, Staffing de Datos y Capacitaciones Corporativas con IA e IBM Watsonx en Mendoza, Chile y USA.',
  alternates: {
    canonical: 'https://www.itiers.com/servicios',
    languages: {
      'es-AR': 'https://www.itiers.com/es/servicios',
      'en-US': 'https://www.itiers.com/en/servicios',
      'x-default': 'https://www.itiers.com/servicios',
    },
  },
  openGraph: {
    title: 'Servicios de Datos e IA | ITIERS Data Sense',
    description: 'Productos de Datos, Proyectos de Datos, Staffing de Datos y Capacitaciones en IA Generativa e IBM Watsonx.',
    url: 'https://www.itiers.com/servicios',
    siteName: 'Itiers Data Sense',
    locale: 'es_AR',
    type: 'website',
    images: [{ url: 'https://www.itiers.com/og-image.png', width: 1200, height: 630, alt: 'Servicios de Datos e IA - ITIERS Data Sense' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Datos e IA | ITIERS Data Sense',
    description: 'Productos, Proyectos, Staffing y Capacitaciones Corporativas en IA e IBM Watsonx.',
    images: ['https://www.itiers.com/og-image.png'],
  },
};

const servicesData = [
  {
    title: 'Productos de Datos',
    description: 'Productos de Datos de Itiers Data Sense es un servicio especializado de arquitectura e implementación de Modern Data Warehouses, Data Lakehouses y dashboards interactivos para la toma de decisiones ejecutivas inteligentes.',
    iconPath: '/icons/products.svg',
    linkHref: '/contacto',
    badge: 'Enterprise'
  },
  {
    title: 'Proyectos de Datos',
    description: 'Proyectos de Datos de Itiers Data Sense brinda desarrollo integral end-to-end de Big Data, ingeniería de datos, analítica avanzada y despliegue de modelos de IA Generativa adaptados a cada industria.',
    iconPath: '/icons/projects.svg',
    linkHref: '/contacto',
    badge: 'Custom'
  },
  {
    title: 'Staffing de Datos',
    description: 'Staffing de Datos de Itiers Data Sense provee talento técnico On-Demand de elite (Data Engineers, Data Scientists, BI/IA Engineers) listo para integrarse de forma ágil e inmediata a equipos corporativos.',
    iconPath: '/icons/staffing.svg',
    linkHref: '/contacto',
    badge: 'Agile'
  },
  {
    title: 'Capacitaciones Corporativas',
    description: 'Capacitaciones Corporativas de Itiers Data Sense ofrece programas de entrenamiento ejecutivo y técnico en adopción de IA Generativa, IBM Watsonx y Data Storytelling respaldados por 20 años de experiencia.',
    iconPath: '/icons/training.svg',
    linkHref: '/contacto',
    badge: 'Certified'
  }
];

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-background text-accent px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Resumen Ejecutivo Answer-First para Optimización GEO & SEO */}
        <section aria-labelledby="servicios-heading" className="space-y-4 text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            20 Años de Experiencia • Argentina | Chile | USA
          </span>

          <h1 id="servicios-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Nuestros Servicios de Datos, IA Generativa e Ingeniería de Arneses
          </h1>

          <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
            <strong>Resumen Ejecutivo (Answer-First):</strong> <strong>Itiers Data Sense</strong> es una consultora especializada en convertir datos complejos en decisiones estratégicas inteligentes. Con 20 años de experiencia, sede corporativa en <strong>Mendoza (Argentina)</strong>, <strong>Santiago (Chile)</strong> y <strong>Delaware (USA)</strong>, y alianza estratégica con <strong>IBM Watsonx</strong>, aplicamos metodologías avanzadas de <strong>Ingeniería de Arneses (Harness Engineering)</strong> para garantizar la máxima calidad, gobernanza y gobernabilidad en proyectos de IA y analítica.
          </p>
        </section>

        {/* Services Grid (Task T2 requirement) */}
        <section aria-label="Catálogo de Servicios" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconPath={service.iconPath}
              linkHref={service.linkHref}
              badge={service.badge}
            />
          ))}
        </section>

        {/* Contact Banner */}
        <section className="bg-surface border border-border rounded-lg p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl font-bold text-accent">¿Listo para impulsar la madurez analítica de tu empresa?</h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-sm sm:text-base">
            Contáctanos hoy para agendar una consultoría estratégica con nuestros especialistas en Argentina, Chile o USA.
          </p>
          <a
            href="/contacto"
            className="inline-block px-8 py-3.5 bg-primary text-white font-semibold rounded-md shadow hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Hablar con un Especialista
          </a>
        </section>

      </div>
    </main>
  );
}
