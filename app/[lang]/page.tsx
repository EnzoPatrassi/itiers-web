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
    <div className="flex flex-col gap-16 pb-20">
      
      {/* 1. HERO SECTION (Unico <h1> por página) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-20 px-6 sm:px-12">
        {/* Glow Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/60 backdrop-blur-md mb-8 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            {t.hero.badge}
          </span>

          {/* Único H1 de la Landing Page */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.1] text-white">
            {lang === 'es' ? (
              <>
                Transformamos Datos en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                  Decisiones Inteligentes
                </span>
              </>
            ) : (
              <>
                We Transform Data into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                  Intelligent Decisions
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link
              href={`/${lang}/contacto`}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {t.hero.secondaryCta}
            </Link>
            <Link
              href={`/${lang}/servicios`}
              className="px-8 py-4 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold rounded-xl backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {t.hero.primaryCta}
            </Link>
          </div>

        </div>
      </section>

      {/* 2. BLOQUE GEO (Answer-First) - Inmediatamente debajo del Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 -mt-8 relative z-20 w-full" aria-labelledby="geo-answer-first">
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-blue-100/80 relative overflow-hidden backdrop-blur-sm">
          {/* Subtle Accent Edge */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-indigo-600"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pl-2">
            <div className="space-y-3 max-w-4xl">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full border border-blue-100">
                {t.geoBlock.badge}
              </span>
              
              {/* GEO H2 Title */}
              <h2 id="geo-answer-first" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {t.geoBlock.title}
              </h2>
              
              {/* GEO Answer-First Description (Exact Text requested) */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                {t.geoBlock.description}
              </p>
            </div>

            {/* Direct CTA */}
            <div className="flex-shrink-0">
              <Link
                href={`/${lang}/contacto`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <span>{t.nav.ctaButton}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE SERVICIOS (Tarjetas con <h2>) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block mb-3">
            {t.servicesSection.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.servicesSection.title}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {t.servicesSection.subtitle}
          </p>
        </div>

        {/* Tarjetas de Servicios con <h2> por cada servicio solicitado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.servicesSection.items.map((servicio) => (
            <article
              key={servicio.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                  <span>{servicio.icon}</span>
                </div>

                {/* H2 para cada Tarjeta de Servicio */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {servicio.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {servicio.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {servicio.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <span className="text-blue-600 font-bold mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/${lang}/contacto?servicio=${encodeURIComponent(servicio.title)}`}
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors pt-4 border-t border-slate-100 group-hover:translate-x-1 transition-transform"
              >
                {t.servicesSection.ctaButton}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 4. SECCIÓN DE CASOS DE ÉXITO (Estructura de 3 puntos: Desafío, Solución, Resultado) */}
      <section className="bg-slate-900 text-white py-20 px-6 sm:px-12 my-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-xs bg-blue-950 px-3 py-1.5 rounded-full border border-blue-800 inline-block mb-3">
              {t.casesSection.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {t.casesSection.title}
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg">
              {t.casesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.casesSection.items.map((caso) => (
              <article
                key={caso.id}
                className="bg-slate-800/90 rounded-2xl p-8 border border-slate-700/80 hover:border-blue-500/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{caso.icon}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-950 text-blue-300 border border-blue-800/50">
                      {caso.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {caso.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mb-6">
                    {caso.client}
                  </p>

                  {/* Estructura requerida de 3 Puntos: Desafío, Solución, Resultado */}
                  <div className="space-y-4 text-xs sm:text-sm border-t border-slate-700/60 pt-4">
                    <div>
                      <span className="font-bold text-red-400 uppercase text-[11px] tracking-wider block mb-1">
                        📌 {lang === 'es' ? 'Desafío' : 'Challenge'}:
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {caso.challenge}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-blue-400 uppercase text-[11px] tracking-wider block mb-1">
                        💡 {lang === 'es' ? 'Solución' : 'Solution'}:
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {caso.solution}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-emerald-400 uppercase text-[11px] tracking-wider block mb-1">
                        🚀 {lang === 'es' ? 'Resultado' : 'Result'}:
                      </span>
                      <p className="text-emerald-300 font-medium leading-relaxed bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/30">
                        {caso.result}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-700/60">
                  <Link
                    href={`/${lang}/casos`}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{t.casesSection.ctaButton}</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN FINAL CTA CON IMAGEN ACCESIBLE <Image/> */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-6 w-full">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl space-y-4 z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {lang === 'es' 
                ? '¿Listo para transformar tus datos en decisiones estratégicas?' 
                : 'Ready to transform your data into strategic decisions?'}
            </h2>
            <p className="text-slate-300 text-base">
              {lang === 'es'
                ? 'Agenda una sesión de consultoría inicial con nuestros expertos en Mendoza y Latinoamérica.'
                : 'Schedule an initial consulting session with our experts in Mendoza and Latin America.'}
            </p>
            <div className="pt-2">
              <Link
                href={`/${lang}/contacto`}
                className="inline-block px-8 py-4 bg-white hover:bg-slate-100 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                {t.hero.secondaryCta}
              </Link>
            </div>
          </div>

          {/* Next.js Image component with localized alt text */}
          <div className="relative w-full md:w-72 h-48 md:h-64 rounded-2xl overflow-hidden shadow-xl border border-white/10 flex-shrink-0 z-10 bg-slate-800 flex items-center justify-center">
            <Image
              src="/globe.svg"
              alt={
                lang === 'es'
                  ? "Representación global de análisis de datos e inteligencia artificial Itiers Data Sense"
                  : "Global representation of data analytics and artificial intelligence by Itiers Data Sense"
              }
              fill
              className="object-contain p-6 opacity-90 hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
