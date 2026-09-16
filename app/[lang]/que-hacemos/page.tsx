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
            {lang === 'es' ? 'Metodología: El Humano en el Bucle' : 'Methodology: Human-in-the-Loop'}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {lang === 'es'
              ? 'Garantizamos resultados predecibles mediante un flujo de trabajo inspirado en el desarrollo guiado por especificaciones (SDD).'
              : 'We guarantee predictable results through a workflow inspired by Spec-Driven Development (SDD).'}
          </p>
        </header>

        {/* Fases de Metodología (El Humano en el Bucle) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-blue-600 text-2xl font-black mb-3">01</div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              {lang === 'es' ? 'Leader / Orchestrator' : 'Leader / Orchestrator'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'es'
                ? 'El ente estratégico que define el flujo y supervisa la orquestación global del proyecto.'
                : 'The strategic entity that defines the workflow and oversees global project orchestration.'}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-blue-600 text-2xl font-black mb-3">02</div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              {lang === 'es' ? 'Spec-Author' : 'Spec-Author'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'es'
                ? 'Formalizamos sus requerimientos en especificaciones técnicas ejecutables y claras.'
                : 'We formalize your requirements into clear, executable technical specifications.'}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-blue-600 text-2xl font-black mb-3">03</div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              {lang === 'es' ? 'Implementer' : 'Implementer'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'es'
                ? 'La IA genera soluciones basadas estrictamente en la "fuente de verdad" de la especificación.'
                : 'AI generates solutions based strictly on the "source of truth" of the specification.'}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-blue-600 text-2xl font-black mb-3">04</div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              {lang === 'es' ? 'Reviewer' : 'Reviewer'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'es'
                ? 'Un agente especializado que valida la trazabilidad, la arquitectura y el cumplimiento de los tests.'
                : 'A specialized agent that validates traceability, architecture, and test compliance.'}
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href={`/${lang}/contacto`}
            className="focus:outline-none focus:ring-2 focus:ring-blue-600 inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            {lang === 'es' ? 'Agenda una consultoría técnica' : 'Schedule a Technical Consultation'}
          </Link>
        </div>

      </div>
    </div>
  );
}