import Link from "next/link";
import { dictionaries, Locale } from "@/data/i18n";
import ChatAgent from "@/components/ChatAgent";


export default async function ServiciosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang: Locale = resolvedParams.lang === 'en' ? 'en' : 'es';
  const t = dictionaries[lang];

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto animate-fade-in">

        {/* Cabecera de la Sección */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            {t.servicesSection.badge} | Harness Engineering
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4">
            {t.servicesSection.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {t.servicesSection.subtitle}
          </p>
        </header>

        {/* Alianza Estratégica IBM Watsonx */}
        <section className="mb-16 bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-blue-800/20">
          <div className="max-w-3xl space-y-4">
            <span className="bg-blue-500/20 text-blue-300 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider inline-block">
              Socio Tecnológico Global
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Itiers + IBM Watsonx
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
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
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="text-4xl mb-4" role="img" aria-hidden="true">
                  {servicio.icon}
                </div>
                
                {/* Título del Servicio (H2) */}
                <h2 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {servicio.title}
                </h2>
                
                {/* GEO Answer-First: Párrafo semántico inmediato con la respuesta directa */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {servicio.description}
                </p>
                
                <hr className="border-slate-100 mb-6" />
                
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {lang === 'es' ? 'Beneficios Clave:' : 'Key Benefits:'}
                </h3>
                
                {/* Lista de beneficios optimizada */}
                <ul className="space-y-3 mb-8">
                  {servicio.features.map((detalle, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <span className="text-blue-500 mr-2 font-bold" aria-hidden="true">✓</span>
                      <span>{detalle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón CTA Dinámico */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/${lang}/contacto?servicio=${encodeURIComponent(servicio.title)}`}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-600 text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center gap-1 group/link"
                >
                  <span>{t.servicesSection.ctaButton}</span>
                  <span className="transform group-hover/link:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>


        {/* Aquí agregamos el Agente Recomendador visual */}
        <section className="mt-16 mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            {lang === 'es' ? '¿No estás seguro de qué necesitas?' : 'Not sure what you need?'}
          </h2>
          <p className="text-center text-gray-600 mb-8">
            {lang === 'es' ? 'Habla con nuestro asesor de Inteligencia Artificial para perfilar tu caso.' : 'Talk to our AI advisor to profile your case.'}
          </p>
          <ChatAgent />
        </section>
      </div>
    </div>
  );
}