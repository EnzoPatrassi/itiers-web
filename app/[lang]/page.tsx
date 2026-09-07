import Link from "next/link";
import Image from "next/image";
import { dictionaries, Locale } from "@/data/i18n";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang: Locale = resolvedParams.lang === 'en' ? 'en' : 'es';
  const t = dictionaries[lang];

  return (
    <div className="flex flex-col gap-12 bg-slate-50 text-slate-900 pb-16">
      
      {/* 1. HERO SECTION (Inspirado en www.itiers.com - Somos Itiers) */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-20 px-6 sm:px-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center z-10">
          {/* Badge IBM Watsonx */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800/60 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            ITIERS + IBM WATSONX PARTNER
          </span>

          {/* Único H1 de la Landing Page */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
            {lang === 'es' ? (
              <>
                Somos Itiers: <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                  Transformamos Datos en Decisiones Inteligentes
                </span>
              </>
            ) : (
              <>
                We are Itiers: <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                  We Transform Data into Intelligent Decisions
                </span>
              </>
            )}
          </h1>

          {/* Subtítulo alineado con itiers.com */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
            {lang === 'es'
              ? 'Creemos en el poder de una exitosa gestión organizacional lograda por medio de la recolección, organización, interpretación y análisis de datos.'
              : 'We believe in the power of successful organizational management achieved through data collection, organization, interpretation, and analytics.'}
          </p>

          {/* Botón CTA Principal */}
          <div className="mt-8">
            <Link
              href={`/${lang}/contacto`}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span>{t.nav.ctaButton}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. BLOQUE GEO (Answer-First) - "La solución en tus datos" */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 w-full" aria-labelledby="geo-title">
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full border border-blue-100">
              {lang === 'es' ? 'La solución en tus datos' : 'The solution in your data'}
            </span>
            
            {/* H2 GEO Title */}
            <h2 id="geo-title" className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              {t.geoBlock.title}
            </h2>
            
            {/* Texto GEO (Answer-First) exacto solicitado */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {t.geoBlock.description}
            </p>

            <div className="pt-2">
              <Link
                href={`/${lang}/que-hacemos`}
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center gap-1.5"
              >
                <span>{lang === 'es' ? 'Ver más sobre lo que hacemos' : 'Learn more about what we do'}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-slate-900 p-6 flex flex-col justify-between text-white shadow-md">
              <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Itiers Data Sense</div>
              <div className="text-lg font-bold">Data Architecture & AI</div>
              <div className="text-xs text-slate-400">Mendoza 🇦🇷 | Chile 🇨🇱 | USA 🇺🇸</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN DE SERVICIOS (Estilo itiers.com - 3 Tarjetas concisas con H2) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-4 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">
              {t.servicesSection.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
              {t.servicesSection.title}
            </h2>
          </div>
          <Link
            href={`/${lang}/servicios`}
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            {lang === 'es' ? 'Ver todos los servicios →' : 'View all services →'}
          </Link>
        </div>

        {/* Tarjetas de Servicios con H2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.servicesSection.items.map((servicio) => (
            <article
              key={servicio.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3">{servicio.icon}</div>
                <h2 className="text-xl font-bold text-slate-950 mb-2">
                  {servicio.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {servicio.description}
                </p>
              </div>

              <Link
                href={`/${lang}/contacto?servicio=${encodeURIComponent(servicio.title)}`}
                className="text-blue-600 hover:text-blue-800 font-semibold text-xs inline-flex items-center gap-1 pt-4 border-t border-slate-100"
              >
                <span>{t.servicesSection.ctaButton}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 4. CASOS DE ÉXITO (Compacto & Estructurado en 3 Puntos: Desafío, Solución, Resultado) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-4 w-full">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-blue-400 font-semibold text-xs uppercase tracking-wider">
                {t.casesSection.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {t.casesSection.title}
              </h2>
            </div>
            <Link
              href={`/${lang}/casos`}
              className="text-xs font-semibold text-blue-400 hover:text-blue-300"
            >
              {t.casesSection.ctaButton} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.casesSection.items.map((caso) => (
              <div
                key={caso.id}
                className="bg-slate-800/80 rounded-xl p-5 border border-slate-700 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{caso.icon}</span>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {caso.title}
                  </h3>
                </div>

                {/* 3 Puntos requeridos: Desafío, Solución, Resultado */}
                <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-700/80">
                  <p>
                    <strong className="text-red-400">📌 {lang === 'es' ? 'Desafío:' : 'Challenge:'}</strong> {caso.challenge}
                  </p>
                  <p>
                    <strong className="text-blue-400">💡 {lang === 'es' ? 'Solución:' : 'Solution:'}</strong> {caso.solution}
                  </p>
                  <p className="text-emerald-300 font-semibold bg-emerald-950/60 p-2 rounded border border-emerald-800/40">
                    <strong>🚀 {lang === 'es' ? 'Resultado:' : 'Result:'}</strong> {caso.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONFÍAN EN NOSOTROS / MARCAS (Como en www.itiers.com) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-4 w-full text-center">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-6">
          {lang === 'es' ? 'Confían en nosotros' : 'Trusted by market leaders'}
        </span>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all">
          <div className="bg-white px-6 py-3 rounded-lg border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
            IBM Watsonx Partner
          </div>
          <div className="bg-white px-6 py-3 rounded-lg border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
            Retail Supermarkets
          </div>
          <div className="bg-white px-6 py-3 rounded-lg border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
            Financial Services
          </div>
          <div className="bg-white px-6 py-3 rounded-lg border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
            Healthcare Network
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL CON IMAGEN ACCESIBLE <Image/> */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-4 w-full">
        <div className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl font-bold">
              {lang === 'es' ? '¿Listo para optimizar tus decisiones?' : 'Ready to optimize your decisions?'}
            </h2>
            <p className="text-slate-300 text-sm">
              {lang === 'es' 
                ? 'Habla con un consultor especializado en Mendoza, Chile o EE. UU.' 
                : 'Speak with a specialized consultant in Mendoza, Chile, or USA.'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-800 border border-white/20 hidden sm:block">
              <Image
                src="/globe.svg"
                alt={lang === 'es' ? 'Sede Itiers Mendoza' : 'Itiers Mendoza HQ'}
                fill
                className="object-contain p-2"
              />
            </div>
            <Link
              href={`/${lang}/contacto`}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg shadow transition-all whitespace-nowrap"
            >
              {t.nav.ctaButton}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
