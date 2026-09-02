import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Qué hacemos', href: '/que-hacemos' },
    { name: 'Soluciones', href: '/soluciones' },
    { name: 'Contacto', href: '/contacto' },
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
      country: 'USA',
      address: '651 North Broad Street, Middletown, DE 19709, USA',
    },
  ];

  const services = [
    { name: 'Productos de Datos', href: '/servicios#productos' },
    { name: 'Proyectos de Datos', href: '/servicios#proyectos' },
    { name: 'Staffing de Datos', href: '/servicios#staffing' },
    { name: 'Capacitaciones', href: '/servicios#capacitaciones' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800" aria-label="Pie de página corporativo">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Columna 1: Marca y Propuesta de Valor */}
          <div className="space-y-4">
            <h2 className="text-white text-lg font-bold tracking-tight">ITIERS</h2>
            <p className="text-sm text-slate-400">
              Transformamos datos en decisiones inteligentes. Convertimos datos complejos en una ventaja competitiva para tu negocio.
            </p>
            <div className="pt-2 border-t border-slate-800">
              <span className="text-xs text-slate-500 block">Socio Tecnológico</span>
              <span className="text-sm font-semibold text-blue-400">IBM Watsonx Partner</span>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Navegación</h3>
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
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Servicios</h3>
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
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Nuestras Oficinas</h3>
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
            <a href="mailto:hola@itiers.com" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 px-1 rounded">
              📩 hola@itiers.com
            </a>
            <a href="tel:+5492614171612" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 px-1 rounded">
              📞 +54 9 261 417-1612
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
            <a
              href="https://www.instagram.com/itiersds/"
              className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 p-1 rounded"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Itiers en Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCrWeQoKi3bM8JtVYVG-44VA"
              className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 p-1 rounded"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Itiers en YouTube"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-800/50 pt-8 text-center md:text-left flex justify-between flex-col md:flex-row text-xs text-slate-500">
          <p>Copyright © 2026 Itiers - Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Proyecto de Prácticas de Desarrollo Web</p>
        </div>

      </div>
    </footer>
  );
}