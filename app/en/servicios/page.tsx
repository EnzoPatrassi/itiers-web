import React from 'react';
import { Metadata } from 'next';
import ServiceCard from '../../../components/ServiceCard';

export const metadata: Metadata = {
  title: 'Data & AI Services | ITIERS Data Sense',
  description: 'Catalog of Data Products, Data Projects, Specialized Data Staffing, and Corporate Training in AI and IBM Watsonx in Mendoza, Chile, and Delaware.',
  alternates: {
    canonical: 'https://www.itiers.com/en/servicios',
    languages: {
      'es-AR': 'https://www.itiers.com/es/servicios',
      'en-US': 'https://www.itiers.com/en/servicios',
      'x-default': 'https://www.itiers.com/servicios',
    },
  },
  openGraph: {
    title: 'Data & AI Services | ITIERS Data Sense',
    description: 'Data Products, Data Projects, Data Staffing, and Corporate Training in Generative AI and IBM Watsonx.',
    url: 'https://www.itiers.com/en/servicios',
    siteName: 'Itiers Data Sense',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://www.itiers.com/og-image.png', width: 1200, height: 630, alt: 'Data & AI Services - ITIERS Data Sense' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data & AI Services | ITIERS Data Sense',
    description: 'Data Products, Projects, Staffing, and Corporate Training in AI.',
    images: ['https://www.itiers.com/og-image.png'],
  },
};

const servicesData = [
  {
    title: 'Data Products',
    description: 'Data Products by Itiers Data Sense is a specialized architecture and implementation service for Modern Data Warehouses, Data Lakehouses, and executive interactive dashboards.',
    iconPath: '/icons/products.svg',
    linkHref: '/en#contact',
    badge: 'Enterprise'
  },
  {
    title: 'Data Projects',
    description: 'Data Projects by Itiers Data Sense provides end-to-end development in Big Data, Data Engineering, advanced analytics, and custom Generative AI model deployments.',
    iconPath: '/icons/projects.svg',
    linkHref: '/en#contact',
    badge: 'Custom'
  },
  {
    title: 'Data Staffing',
    description: 'Data Staffing by Itiers Data Sense delivers elite On-Demand technical talent (Data Engineers, Data Scientists, BI/AI Engineers) ready for immediate integration.',
    iconPath: '/icons/staffing.svg',
    linkHref: '/en#contact',
    badge: 'Agile'
  },
  {
    title: 'Corporate Training',
    description: 'Corporate Training by Itiers Data Sense offers executive and technical training in Generative AI adoption, IBM Watsonx, and Data Storytelling backed by 20 years of mastery.',
    iconPath: '/icons/training.svg',
    linkHref: '/en#contact',
    badge: 'Certified'
  }
];

export default function ServicesPageEN() {
  return (
    <main className="min-h-screen bg-background text-accent px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Answer-First Executive Summary for SEO & GEO */}
        <section aria-labelledby="services-heading" className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            20 Years of Data & AI Excellence
          </span>

          <h1 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Data & Artificial Intelligence Services
          </h1>

          <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
            At <strong>Itiers Data Sense</strong> we convert complex data into intelligent strategic decisions through four core value pillars backed by global alliances such as <strong>IBM Watsonx</strong>.
          </p>
        </section>

        {/* Services Grid */}
        <section aria-label="Services Catalog" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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

      </div>
    </main>
  );
}
