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
    <div className="bg-slate-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto animate-fade-in">

        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            {t.servicesSection.badge} | 20 {lang === 'es' ? 'años' : 'years'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4">
            {t.servicesSection.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {t.servicesSection.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.servicesSection.items.map((servicio) => (
            <article
              id={servicio.id}
              key={servicio.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-4">{servicio.icon}</div>
                <h2 className="text-2xl font-bold text-slate-950 mb-3">{servicio.title}</h2>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{servicio.description}</p>

                <ul className="space-y-3 mb-8">
                  {servicio.features.map((detalle, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <span className="text-blue-500 mr-2 font-bold">✓</span>
                      {detalle}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/${lang}/contacto?servicio=${encodeURIComponent(servicio.title)}`}
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center pt-4 border-t border-slate-100"
              >
                {t.servicesSection.ctaButton}
              </Link>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
