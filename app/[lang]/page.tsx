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
    <div className="flex flex-col gap-16 bg-slate-50 text-slate-900 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 px-6 sm:px-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center z-10">
          
          {/* Badge corporativo dinámico (Lee correctamente del diccionario i18n) */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800/60 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            {t.hero.badge}
          </span>

          {/* Titular H1 Oficial */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
            {lang === 'es' ? (
              <>
                20 años de maestría en datos evolucionados hacia la <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                  Inteligencia Artificial y Productos de Datos.
                </span>
              </>
            ) : (
              <>
                20 Years of Data Mastery Meets the Future of <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                  Data Products & Generative AI.
                </span>
              </>
            )}
          </h1>

          {/* Subtitular Oficial */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl font-light leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/que-hacemos`}
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
            >
              <span>{t.hero.primaryCta}</span>
              <span>→</span>
            </Link>

            <Link
              href={`/${lang}/contacto`}
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-medium rounded-lg shadow-md transition-all inline-flex items-center justify-center"
            >
              <span>{t.hero.secondaryCta}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ALIANZA ESTRATÉGICA: ITIERS + IBM WATSONX */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 w-full" aria-labelledby="ibm-watsonx-title">
        <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 rounded-2xl p-8 sm:p-12 text-white shadow-xl border border-blue-800/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-900/50 rounded-full border border-blue-700/50">
              {lang === 'es' ? 'Socio Tecnológico Global' : 'Global Tech Partner'}
            </span>
            
            <h2 id="ibm-watsonx-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {lang === 'es' 
                ? 'Escale su negocio con IA Generativa de grado empresarial' 
                : 'Scale your business with enterprise-grade Generative AI'}
            </h2>
            
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-light">
              {lang === 'es'
                ? 'La sinergia entre Itiers e IBM Watsonx permite llevar las capacidades de IA al nivel de producción real. Al combinar dos décadas de experiencia en gestión organizacional con la arquitectura de vanguardia de Watsonx, eliminamos la fricción en la toma de decisiones. Esta alianza no solo facilita la implementación de IA generativa a escala, sino que garantiza que cada modelo sea seguro, trazable y esté alineado con los objetivos de crecimiento de su empresa.' 
                : 'The synergy between Itiers and IBM Watsonx brings AI capabilities to real production level. By combining two decades of organizational management experience with Watsonx cutting-edge architecture, we eliminate friction in decision-making. This alliance not only facilitates generative AI implementation at scale, but also ensures each model is secure, traceable, and aligned with your enterprise growth goals.'}
            </p>

            <div className="pt-2">
              <Link
                href={`/${lang}/contacto?asunto=IBM_Watsonx`}
                className="focus:outline-none focus:ring-2 focus:ring-blue-600 inline-flex items-center gap-2 font-semibold text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <span>{lang === 'es' ? 'Conoce más sobre la alianza con IBM Watsonx' : 'Learn more about the IBM Watsonx partnership'}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full bg-blue-900/40 border border-blue-700/40 rounded-xl p-6 text-center space-y-3 backdrop-blur-sm">
              <span className="text-4xl">🧠</span>
              <div className="text-lg font-bold text-white">IBM Watsonx + Itiers</div>
              <p className="text-xs text-blue-200">
                {lang === 'es' ? 'Seguridad, trazabilidad y producción real garantizada.' : 'Security, traceability, and guaranteed real-world production.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BLOQUE GEO (Answer-First) - Resumen Ejecutivo */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 w-full" aria-labelledby="geo-title">
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full border border-blue-100">
              {lang === 'es' ? 'Resumen Ejecutivo | Answer-First' : 'Executive Summary | Answer-First'}
            </span>
            
            <h2 id="geo-title" className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              {t.geoBlock.title}
            </h2>
            
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {t.geoBlock.description}
            </p>

            <div className="pt-2">
              <Link
                href={`/${lang}/que-hacemos`}
                className="focus:outline-none focus:ring-2 focus:ring-blue-600 text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center gap-1.5"
              >
                <span>{lang === 'es' ? 'Ver más sobre nuestra metodología' : 'Learn more about our methodology'}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-slate-900 p-6 flex flex-col justify-between text-white shadow-md">
              <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Itiers Data Sense</div>
              <div className="text-lg font-bold">Data Sense & Analytics</div>
              <div className="text-xs text-slate-400">Mendoza 🇦🇷 | Chile 🇨🇱 | USA 🇺🇸</div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECCIÓN DE SERVICIOS RESUMIDA EN EL HOME */}
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
            className="focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-semibold text-blue-600 hover:underline"
          >
            {lang === 'es' ? 'Ver todos los servicios →' : 'View all services →'}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.servicesSection.items.map((servicio) => (
            <article
              key={servicio.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3">{servicio.icon}</div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">
                  {servicio.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {servicio.description}
                </p>
              </div>

              <Link
                href={`/${lang}/contacto?servicio=${encodeURIComponent(servicio.title)}`}
                className="focus:outline-none focus:ring-2 focus:ring-blue-600 text-blue-600 hover:text-blue-800 font-semibold text-xs inline-flex items-center gap-1 pt-4 border-t border-slate-100"
              >
                <span>{t.servicesSection.ctaButton}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 5. SECCIÓN DE CASOS DE ÉXITO */}
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
              className="focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs font-semibold text-blue-400 hover:text-blue-300"
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

    </div>
  );
}