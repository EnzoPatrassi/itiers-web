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
    <div className="bg-white min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">

        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff4f00] font-semibold tracking-wider uppercase text-sm bg-[#fafafa] px-3.5 py-1 rounded-full border border-[#b2b2b2]">
            {t.casesSection.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-medium text-[#1c1917] mt-4 tracking-tight">
            {t.casesSection.title}
          </h1>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            {t.casesSection.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.casesSection.items.map((caso) => (
            <article
              key={caso.id}
              className="bg-[#fafafa] rounded-[16px] p-8 border border-[#b2b2b2] transition-colors duration-300 flex flex-col justify-between hover:border-[#ff4f00]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{caso.icon}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white text-[#ff4f00] border border-[#b2b2b2]">
                    {caso.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#1c1917] mb-1">
                  {caso.title}
                </h2>
                <p className="text-xs font-medium text-stone-600 mb-6">
                  {caso.client}
                </p>

                {/* 3 Puntos: Desafío, Solución y Resultado */}
                <div className="space-y-4 text-sm border-t border-[#b2b2b2] pt-4">
                  <div>
                    <span className="font-bold text-red-600 uppercase text-xs tracking-wider block mb-1">
                      📌 {lang === 'es' ? 'Desafío' : 'Challenge'}:
                    </span>
                    <p className="text-stone-800 leading-relaxed">
                      {caso.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#ff4f00] uppercase text-xs tracking-wider block mb-1">
                      💡 {lang === 'es' ? 'Solución' : 'Solution'}:
                    </span>
                    <p className="text-stone-800 leading-relaxed">
                      {caso.solution}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#0b6e4f] uppercase text-xs tracking-wider block mb-1">
                      🚀 {lang === 'es' ? 'Resultado' : 'Result'}:
                    </span>
                    <p className="text-[#0b6e4f] font-medium leading-relaxed bg-white p-3 rounded-[12px] border border-[#0b6e4f]">
                      {caso.result}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#b2b2b2]">
                <Link
                  href={`/${lang}/contacto?caso=${encodeURIComponent(caso.title)}`}
                  className="focus:outline-none focus:ring-2 focus:ring-[#ff4f00] text-sm font-bold text-[#ff4f00] hover:text-[#d94300] transition-colors inline-flex items-center gap-1"
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
