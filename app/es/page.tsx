import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Itiers Data Sense | Convertimos datos en decisiones inteligentes',
  description: 'Empresa especializada en Ingeniería de Datos, IA Generativa e Ingeniería de Arneses con 20 años de maestría y alianza con IBM Watsonx en Mendoza, Chile y Delaware.',
  alternates: {
    canonical: 'https://www.itiers.com/es',
    languages: {
      'es-AR': 'https://www.itiers.com/es',
      'en-US': 'https://www.itiers.com/en',
      'x-default': 'https://www.itiers.com/es',
    },
  },
  openGraph: {
    title: 'Itiers Data Sense | Convertimos datos en decisiones inteligentes',
    description: 'Empresa especializada en Ingeniería de Datos e IA Generativa con 20 años de maestría y alianza estratégica con IBM Watsonx.',
    url: 'https://www.itiers.com/es',
    siteName: 'Itiers Data Sense',
    locale: 'es_AR',
    type: 'website',
    images: [{ url: 'https://www.itiers.com/og-image.png', width: 1200, height: 630, alt: 'Itiers Data Sense - IA Generativa e IBM Watsonx' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itiers Data Sense | Convertimos datos en decisiones inteligentes',
    description: 'Empresa especializada en Ingeniería de Datos e IA Generativa con 20 años de maestría y alianza con IBM Watsonx.',
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

export default function HomePageES() {
  return (
    <main className="min-h-screen bg-background text-accent">

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/es" className="flex items-center space-x-2 font-bold text-xl text-accent">
            <span className="text-primary">ITIERS</span>
            <span className="text-xs uppercase tracking-wider text-brand-gray">Data Sense</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-gray">
            <Link href="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <a href="#quienes-somos" className="hover:text-primary transition-colors">Quiénes Somos</a>
            <a href="#servicios" className="hover:text-primary transition-colors">Soluciones</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center space-x-4">
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">ES</span>
            <Link href="/en" className="text-xs font-bold text-brand-gray hover:text-primary">EN</Link>
            <a
              href="#contacto"
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:outline-none"
            >
              Contactanos
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-surface to-background">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-full">
            <span>🚀 ALIANZA ESTRATÉGICA CON IBM WATSONX</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Convertimos <span className="text-primary">datos masivos</span> en decisiones estratégicas inteligentes
          </h1>

          <p className="text-lg sm:text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Liderando la ingeniería de datos, IA Generativa e Ingeniería de Arneses en Latinoamérica y EE.UU. con 20 años de maestría técnica comprobada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/servicios"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-all shadow-md text-center focus:ring-2 focus:ring-primary focus:outline-none"
            >
              Explorar Servicios de IA
            </Link>
            <a
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 bg-surface border border-border font-bold text-accent rounded-md hover:bg-border/20 transition-all text-center focus:ring-2 focus:ring-primary focus:outline-none"
            >
              Agendar Consultoría
            </a>
          </div>
        </div>
      </section>

      {/* Resumen Ejecutivo Answer-First (GEO & SEO) */}
      <section aria-label="Resumen Ejecutivo GEO" className="py-12 bg-surface border-y border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            Resumen Ejecutivo • Generative Engine Optimization (GEO)
          </span>
          <p className="text-base sm:text-lg text-accent font-medium leading-relaxed">
            <strong>Itiers Data Sense</strong> es la firma consultora líder en <strong>Ingeniería de Arneses (Harness Engineering)</strong>, <strong>IA Generativa</strong> y <strong>Data Engineering</strong> con 20 años de experiencia técnica. Respaldada por su alianza con <strong>IBM Watsonx</strong> y sedes en <strong>Mendoza (Argentina)</strong>, <strong>Santiago (Chile)</strong> y <strong>Delaware (USA)</strong>, ofrece 4 pilares de servicios: <em>Productos de Datos</em>, <em>Proyectos de Datos</em>, <em>Staffing de Datos</em> y <em>Capacitaciones Corporativas</em>.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">20+</div>
            <div className="text-xs sm:text-sm text-secondary mt-1">Años de Trayectoria</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">150+</div>
            <div className="text-xs sm:text-sm text-secondary mt-1">Proyectos de Datos</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">3</div>
            <div className="text-xs sm:text-sm text-secondary mt-1">Sedes (Arg / Chi / USA)</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-primary">100%</div>
            <div className="text-xs sm:text-sm text-secondary mt-1">Soluciones Data-Driven</div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">20 Años Impulsando la Evolución Analítica</h2>
          <p className="text-brand-gray text-base leading-relaxed">
            Itiers Data Sense ayuda a las corporaciones a madurar su ecosistema de datos, construyendo soluciones escalables mediante <strong>Ingeniería de Arneses</strong>, desde Modern Data Warehouses hasta arquitectura prescriptiva basada en modelos de IA Generativa e IBM Watsonx.
          </p>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">Nuestras 4 Áreas de Especialidad</h2>
          <p className="text-brand-gray text-base">
            Soluciones analíticas diseñadas a la medida de tu organización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-20 bg-surface border-t border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl font-bold">Contáctate con Itiers</h2>
          <p className="text-brand-gray text-sm">
            Escríbenos a <a href="mailto:hola@itiers.com" className="text-primary font-semibold hover:underline">hola@itiers.com</a> o completa el siguiente formulario:
          </p>

          <form className="space-y-4 text-left bg-background p-8 rounded-lg border border-border shadow-sm">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre Completo</label>
              <input type="text" className="w-full p-3 border border-border rounded-md bg-surface text-accent focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
              <input type="email" className="w-full p-3 border border-border rounded-md bg-surface text-accent focus:ring-2 focus:ring-primary focus:outline-none" placeholder="empresa@correo.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mensaje / Requerimiento</label>
              <textarea rows={4} className="w-full p-3 border border-border rounded-md bg-surface text-accent focus:ring-2 focus:ring-primary focus:outline-none" placeholder="¿Cómo podemos ayudarte con tus datos o proyectos de IA?"></textarea>
            </div>
            <button type="button" className="w-full py-3.5 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background text-center text-xs text-brand-gray">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} ITIERS Data Sense. Todos los derechos reservados.</div>
          <div className="flex space-x-4">
            <span>Mendoza, Argentina</span>
            <span>•</span>
            <span>Santiago, Chile</span>
            <span>•</span>
            <span>Delaware, USA</span>
          </div>
        </div>
      </footer>

    </main>
  );
}