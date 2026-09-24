// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/data/i18n';
import { dictionaries } from '@/data/i18n';

interface FooterProps {
  lang?: Locale;
}

export default function Footer({ lang = 'es' }: FooterProps) {
  const t = dictionaries[lang];
  
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t.nav.inicio, href: `/${lang}` },
    { name: t.nav.nosotros, href: `/${lang}/nosotros` },
    { name: t.nav.servicios, href: `/${lang}/servicios` },
    { name: t.nav.queHacemos, href: `/${lang}/que-hacemos` },
    { name: t.nav.soluciones, href: `/${lang}/soluciones` },
    { name: t.nav.casos, href: `/${lang}/casos` },
    { name: t.nav.contacto, href: `/${lang}/contacto` },
  ];

  const offices = [
    {
      country: 'Argentina',
      address: 'Av. Perú 1841, Mendoza, Argentina',
    },
    {
      country: 'Chile',
      address: 'General del Canto 421, piso 6, Providencia, Santiago de Chile',
    },
    {
      country: lang === 'en' ? 'United States' : 'Estados Unidos',
      address: '651 North Broad Street, Middletown, DE 19709, USA',
    },
  ];

  const services = t.servicesSection.items.map(s => ({
    name: s.title,
    href: `/${lang}/servicios#${s.id}`
  }));

  return (
    <footer className="bg-[#1f1f1f] text-[#f2f2f2] border-t border-[#333333]" aria-label="Pie de página corporativo">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Columna 1: Marca y Propuesta de Valor */}
          <div className="space-y-4">
            <Link 
              href={`/${lang}`} 
              onClick={handleNavClick}
              className="focus:outline-none focus:ring-2 focus:ring-[#ff4f00] inline-block p-2 rounded-[12px]"
            >
              <Image
                src="/itiers.png"
                alt={lang === 'es' ? "Logotipo corporativo oficial de Itiers Data Sense" : "Official Corporate Itiers Data Sense Logo"}
                width={160}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#f2f2f2]">
              {t.footer.tagline}
            </p>
            
            {/* Identidad e Ingeniería de IA */}
            <div className="pt-2 border-t border-[#333333] space-y-1">
              <span className="text-xs text-[#b2b2b2] block">
                {lang === 'es' ? 'Identidad Corporativa' : 'Corporate Identity'}
              </span>
              <p className="text-xs text-[#f2f2f2]">
                {lang === 'es' 
                  ? 'Expertos en Data Analytics e Ingeniería de Inteligencia Artificial.' 
                  : 'Experts in Data Analytics and Artificial Intelligence Engineering.'}
              </p>
            </div>

            {/* Alianza IBM Watsonx */}
            <div>
              <span className="text-xs text-[#b2b2b2] block">Socio Tecnológico / Tech Partner</span>
              <span className="text-sm font-semibold text-[#ff4f00]">IBM Watsonx Global Partner</span>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">{t.footer.quickLinks}</h3>
            <ul role="list" className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-sm text-[#b2b2b2] hover:text-[#ff4f00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4f00] rounded px-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios Principales */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">{t.footer.servicesTitle}</h3>
            <ul role="list" className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    onClick={handleNavClick}
                    className="text-sm text-[#b2b2b2] hover:text-[#ff4f00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4f00] rounded px-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Sedes de Itiers */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">{t.footer.headquarters}</h3>
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.country} className="text-xs text-[#b2b2b2] leading-relaxed">
                  <span className="font-bold text-[#f2f2f2] block mb-0.5">{office.country}</span>
                  {office.address}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sección de contacto rápido e íconos sociales */}
        <div className="mt-8 pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#b2b2b2]">
            <a href="mailto:hola@itiers.com" className="hover:text-[#ff4f00] focus:outline-none focus:ring-2 focus:ring-[#ff4f00] px-1 rounded">
              📩 hola@itiers.com
            </a>
            <a href="tel:+5492614171612" className="hover:text-[#ff4f00] focus:outline-none focus:ring-2 focus:ring-[#ff4f00] px-1 rounded">
              📞 +54 9 261 417-1612 (Mendoza, Argentina)
            </a>
          </div>

          {/* Enlaces a Redes Sociales Oficiales */}
          <div className="flex space-x-6 text-sm">
            <a
              href="https://ar.linkedin.com/company/itiers"
              className="text-[#b2b2b2] hover:text-[#ff4f00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4f00] p-1 rounded"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Itiers en LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/itiersds/"
              className="text-[#b2b2b2] hover:text-[#ff4f00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4f00] p-1 rounded"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Itiers en Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCrWeQoKi3bM8JtVYVG-44VA"
              className="text-[#b2b2b2] hover:text-[#ff4f00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4f00] p-1 rounded"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Itiers en YouTube"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-[#333333] pt-8 text-center md:text-left flex justify-between flex-col md:flex-row text-xs text-[#b2b2b2]">
          <p>Copyright © 2026 Itiers – Data Sense. {t.footer.rights}</p>
          <p className="mt-2 md:mt-0">{t.footer.locationMendoza}</p>
        </div>

      </div>
    </footer>
  );
}