import Link from "next/link";
import { dictionaries, Locale } from "@/data/i18n";

export default async function QueHacemosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang: Locale = resolvedParams.lang === 'en' ? 'en' : 'es';
  const t = dictionaries[lang];

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <header className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            {t.nav.queHacemos}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            {lang === 'es' ? 'Metodología y Procesos de Inteligencia' : 'Methodology & Intelligence Processes'}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {lang === 'es'
              ? 'Conoce cómo convertimos datos desestructurados en activos estratégicos accionables.'
              : 'Discover how we turn unstructured data into actionable strategic assets.'}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-blue-600 text-3xl font-black mb-4">01</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              {lang === 'es' ? 'Diagnóstico & Arquitectura' : 'Discovery & Architecture'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'es'
                ? 'Analizamos el estado actual de las fuentes de información y diseñamos la arquitectura ideal en la nube.'
                : 'We evaluate existing data sources and design the optimal cloud architecture for your needs.'}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-blue-600 text-3xl font-black mb-4">02</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              {lang === 'es' ? 'Integración de Agentes e IA' : 'AI & Agent Integration'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'es'
                ? 'Desplegamos modelos avanzados de IA y pipelines de datos para automatización de respuestas.'
                : 'We deploy state-of-the-art AI models and data pipelines for automated decision assistance.'}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-blue-600 text-3xl font-black mb-4">03</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              {lang === 'es' ? 'Optimización Continua' : 'Continuous Optimization'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'es'
                ? 'Supervisamos el rendimiento analítico para garantizar el máximo retorno de inversión.'
                : 'We monitor analytics performance to ensure maximum return on investment and compliance.'}
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href={`/${lang}/contacto`}
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            {t.hero.secondaryCta}
          </Link>
        </div>

      </div>
    </div>
  );
}
