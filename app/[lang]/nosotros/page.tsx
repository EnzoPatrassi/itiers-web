import Link from "next/link";
import { dictionaries, Locale } from "@/data/i18n";

export default async function NosotrosPage({
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
            {t.nav.nosotros} | 20 {lang === 'es' ? 'Años de Trayectoria' : 'Years Experience'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            {lang === 'es' ? 'Pioneros en Analítica e Inteligencia Artificial' : 'Pioneers in Data Analytics & Artificial Intelligence'}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {lang === 'es'
              ? 'Desde Mendoza, Argentina, acompañamos a las empresas líderes a transformar información en ventajas competitivas duraderas.'
              : 'From Mendoza, Argentina, we empower market leaders to turn complex information into lasting competitive advantages.'}
          </p>
        </header>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              🎯 {lang === 'es' ? 'Nuestra Misión' : 'Our Mission'}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {lang === 'es'
                ? 'Facilitar la adopción de analítica avanzada e IA generativa en las organizaciones, democratizando el acceso a hallazgos estratégicos precisos para la toma de decisiones.'
                : 'Accelerate the adoption of advanced analytics and generative AI across organizations, democratizing access to precise strategic insights for decision-making.'}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              🚀 {lang === 'es' ? 'Nuestra Visión' : 'Our Vision'}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {lang === 'es'
                ? 'Ser el referente regional y global en consultoría de datos e integración de Agentes de Inteligencia Artificial para el sector corporativo.'
                : 'To be the regional and global benchmark in data consulting and AI Agent integration for enterprise organizations.'}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
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
