import Link from "next/link";
import { dictionaries, Locale } from "@/data/i18n";

export default async function CasosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang: Locale = resolvedParams.lang === 'en' ? 'en' : 'es';
  const t = dictionaries[lang];

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">

        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            {t.casesSection.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            {t.casesSection.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {t.casesSection.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.casesSection.items.map((caso) => (
            <article
              key={caso.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{caso.icon}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                    {caso.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-950 mb-1">
                  {caso.title}
                </h2>
                <p className="text-xs font-medium text-slate-500 mb-6">
                  {caso.client}
                </p>

                {/* 3 Puntos: Desafío, Solución y Resultado */}
                <div className="space-y-4 text-sm border-t border-slate-100 pt-4">
                  <div>
                    <span className="font-bold text-red-600 uppercase text-xs tracking-wider block mb-1">
                      📌 {lang === 'es' ? 'Desafío' : 'Challenge'}:
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {caso.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-blue-600 uppercase text-xs tracking-wider block mb-1">
                      💡 {lang === 'es' ? 'Solución' : 'Solution'}:
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {caso.solution}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-emerald-600 uppercase text-xs tracking-wider block mb-1">
                      🚀 {lang === 'es' ? 'Resultado' : 'Result'}:
                    </span>
                    <p className="text-emerald-800 font-medium leading-relaxed bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                      {caso.result}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link
                  href={`/${lang}/contacto?caso=${encodeURIComponent(caso.title)}`}
                  className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                >
                  <span>{t.hero.secondaryCta}</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
