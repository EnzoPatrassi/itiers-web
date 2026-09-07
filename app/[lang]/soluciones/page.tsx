import Link from "next/link";
import { dictionaries, Locale } from "@/data/i18n";

export default async function SolucionesPage({
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
            {t.nav.soluciones}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            {lang === 'es' ? 'Soluciones Empresariales Adaptadas' : 'Tailored Enterprise Solutions'}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {lang === 'es'
              ? 'Paquetes y arquitecturas prediseñadas para acelerar la transformación de datos en tu industria.'
              : 'Pre-designed packages and architectures to accelerate data transformation in your industry.'}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              🏛️ {lang === 'es' ? 'Soluciones para Banca & Finanzas' : 'Banking & Finance Solutions'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {lang === 'es'
                ? 'Consolidación multi-país, scoring predictivo de riesgos y reporting regulatorio automatizado.'
                : 'Multi-country consolidation, predictive risk scoring, and automated regulatory reporting.'}
            </p>
            <Link
              href={`/${lang}/contacto?solucion=finanzas`}
              className="text-blue-600 font-semibold text-sm hover:underline"
            >
              {t.servicesSection.ctaButton}
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              🛍️ {lang === 'es' ? 'Soluciones para Retail & E-commerce' : 'Retail & E-commerce Solutions'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {lang === 'es'
                ? 'Predicción de demanda de stock en tiempo real y segmentación avanzada de clientes con IA.'
                : 'Real-time stock demand forecasting and AI-driven advanced customer segmentation.'}
            </p>
            <Link
              href={`/${lang}/contacto?solucion=retail`}
              className="text-blue-600 font-semibold text-sm hover:underline"
            >
              {t.servicesSection.ctaButton}
            </Link>
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
