import React from 'react';
import { Metadata } from 'next';
import { SERVICIOS_ITIERS, INFO_ITIERS } from '@/data/mockData';
import { validateWhatsAppConfig } from '@/lib/harness/guardrails';

export const metadata: Metadata = {
  title: 'Servicios | Itiers Data Sense',
  description: 'Ingeniería de Datos, capacitaciones y staffing para organizaciones.',
  alternates: {
    canonical: 'https://www.itiers.com/servicios',
    languages: {
      'es-AR': 'https://www.itiers.com/servicios',
      'x-default': 'https://www.itiers.com/servicios',
    },
  },
  openGraph: {
    title: 'Servicios de Datos e IA | ITIERS Data Sense',
    description: 'Ingeniería de Datos, capacitaciones y staffing para organizaciones.',
    url: 'https://www.itiers.com/servicios',
    siteName: 'Itiers Data Sense',
    locale: 'es_AR',
    type: 'website',
    images: [{ url: '/hero-banner-itiers.jpg', width: 1200, height: 630, alt: 'Servicios de Datos e IA - ITIERS Data Sense' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Datos e IA | ITIERS Data Sense',
    description: 'Data Engineering, training, and staffing for organizations.',
    images: ['/hero-banner-itiers.jpg'],
  },
};

const getWhatsAppUrl = (serviceName: string) => {
  const channel = validateWhatsAppConfig(
    INFO_ITIERS.whatsapp,
    `Hola, quiero realizar una consulta sobre ${serviceName}.`
  );
  if (!channel.success || !channel.url) {
    throw new Error(channel.error || 'La configuración del canal de WhatsApp no es válida.');
  }
  return channel.url;
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-background text-accent px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto space-y-12">

        <section aria-labelledby="servicios-heading" className="space-y-4 text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            Qué hacemos
          </span>
          <h1 id="servicios-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Entrenamos, transformamos, guiamos y globalizamos tus datos
          </h1>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
            Itiers Data Sense tiene como propósito entrenar, transformar, guiar y globalizar los datos de tu organización de manera eficiente y efectiva.
          </p>
        </section>

        <section aria-label="Catálogo de servicios" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICIOS_ITIERS.map((service) => (
            <article key={service.id} className="flex flex-col rounded-md border border-border bg-surface p-6">
              <h2 className="text-xl font-bold text-accent">{service.es.titulo}</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">{service.es.descripcion}</p>
              <ul className="mt-5 space-y-3 border-t border-border pt-5">
                {service.es.detalles.map((detail) => (
                  <li key={detail} className="text-sm leading-relaxed text-accent">{detail}</li>
                ))}
              </ul>
              <a
                href={getWhatsAppUrl(service.es.titulo)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-6 text-sm font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Consultar por WhatsApp →
              </a>
            </article>
          ))}
        </section>


      </div>
    </main>
  );
}
