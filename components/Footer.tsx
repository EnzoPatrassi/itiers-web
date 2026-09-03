import Link from 'next/link';
import type { Locale } from '@/data/i18n';
import { dictionaries } from '@/data/i18n';

interface FooterProps {
  lang?: Locale;
}

export default function Footer({ lang = 'es' }: FooterProps) {
  const t = dictionaries[lang];
  
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
      country: lang === 'en' ? 'Argentina' : 'Argentina',
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
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800" aria-label="Pie de página corporativo">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Columna 1: Marca y Propuesta de Valor */}
          <div className="space-y-4">
            <h2 className="text-white text-lg font-bold tracking-tight">ITIERS DATA SENSE</h2>
            <p className="text-sm text-slate-400">
              {t.footer.tagline}
            </p>
            <div className="pt-2 border-t border-slate-800">
              <span className="text-xs text-slate-500 block">Socio Tecnológico / Tech Partner</span>
              <span className="text-sm font-semibold text-blue-400">IBM Watsonx Global Partner</span>
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
                    className="text-sm text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
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
                    className="text-sm text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
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
                <div key={office.country} className="text-xs text-slate-400 leading-relaxed">
                  <span className="font-bold text-slate-300 block mb-0.5">{office.country}</span>
                  {office.address}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sección de contacto rápido e íconos sociales */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <a href="mailto:contacto@itiers.com" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 px-1 rounded">
              📩 contacto@itiers.com
            </a>
            <a href="tel:+5492610000000" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 px-1 rounded">
              📞 +54 9 261 000-0000 (Mendoza, Argentina)
            </a>
          </div>

          {/* Enlaces a Redes Sociales */}
          <div className="flex space-x-6">
            <a
              href="https://ar.linkedin.com/company/itiers"
              className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 p-1 rounded"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Itiers en LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-800/50 pt-8 text-center md:text-left flex justify-between flex-col md:flex-row text-xs text-slate-500">
          <p>Copyright © 2026 Itiers Data Sense - {t.footer.rights}</p>
          <p className="mt-2 md:mt-0">{t.footer.locationMendoza}</p>
        </div>

      </div>
    </footer>
  );
}