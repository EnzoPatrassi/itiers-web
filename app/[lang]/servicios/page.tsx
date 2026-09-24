import Link from "next/link";
import { dictionaries, Locale } from "@/data/i18n";

export default async function ServiciosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang: Locale = resolvedParams.lang === 'en' ? 'en' : 'es';
  const t = dictionaries[lang];

  return (
    <div className="bg-white min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto animate-fade-in">

        {/* Cabecera de la Sección */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff4f00] font-semibold tracking-wider uppercase text-sm bg-[#fafafa] px-3.5 py-1 rounded-full border border-[#b2b2b2]">
            {t.servicesSection.badge} | Data Sense & AI
          </span>
          <h1 className="text-4xl sm:text-5xl font-medium text-[#1c1917] mt-4">
            {t.servicesSection.title}
          </h1>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            {t.servicesSection.subtitle}
          </p>
        </header>

        {/* Alianza Estratégica IBM Watsonx */}
        <section className="mb-16 bg-[#1f1f1f] text-white rounded-[16px] p-8 sm:p-12 border border-[#333333]">
          <div className="max-w-3xl space-y-4">
            <span className="bg-[#333333] text-[#ff4f00] font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider inline-block">
              Socio Tecnológico Global
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Itiers + IBM Watsonx
            </h2>
            <p className="text-[#f2f2f2] text-sm sm:text-base leading-relaxed">
              {lang === 'es'
                ? 'Llevamos las capacidades de análisis de datos al nivel de producción real con IA generativa de grado empresarial, garantizando modelos seguros, trazables y alineados a los objetivos de crecimiento corporativo.'
                : 'We take data analysis capabilities to real production level with enterprise-grade generative AI, ensuring secure, traceable models aligned with corporate growth goals.'}
            </p>
          </div>
        </section>

        {/* Cuadrícula de Servicios con Maquetación GEO (Answer-First) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" aria-label="Listado de servicios de Itiers">
          {t.servicesSection.items.map((servicio) => (
            <article 
              key={servicio.id} 
              className="bg-[#fafafa] rounded-[16px] p-8 border border-[#b2b2b2] transition-colors duration-300 flex flex-col justify-between group hover:border-[#ff4f00]"
            >
              <div>
                <div className="text-4xl mb-4" role="img" aria-hidden="true">
                  {servicio.icon}
                </div>
                
                {/* Título del Servicio (H2) */}
                <h2 className="text-2xl font-bold text-[#1c1917] mb-3 group-hover:text-[#ff4f00] transition-colors duration-200">
                  {servicio.title}
                </h2>
                
                {/* GEO Answer-First: Párrafo semántico inmediato con la respuesta directa */}
                <p className="text-stone-800 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {servicio.description}
                </p>
                
                <hr className="border-[#b2b2b2] mb-6" />
                
                <h3 className="text-xs font-bold text-stone-600 uppercase tracking-wider mb-3">
                  {lang === 'es' ? 'Beneficios Clave:' : 'Key Benefits:'}
                </h3>
                
                {/* Lista de beneficios optimizada */}
                <ul className="space-y-3 mb-8">
                  {servicio.features.map((detalle, idx) => (
                    <li key={idx} className="flex items-start text-sm text-stone-800">
                      <span className="text-[#ff4f00] mr-2 font-bold" aria-hidden="true">✓</span>
                      <span>{detalle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón CTA Dinámico */}
              <div className="pt-4 border-t border-[#b2b2b2] flex items-center justify-between">
                <Link
                  href={`/${lang}/contacto?servicio=${encodeURIComponent(servicio.title)}`}
                  className="focus:outline-none focus:ring-2 focus:ring-[#ff4f00] text-[#ff4f00] hover:text-[#d94300] font-semibold text-sm inline-flex items-center gap-1 group/link"
                >
                  <span>{t.servicesSection.ctaButton}</span>
                  <span className="transform group-hover/link:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}