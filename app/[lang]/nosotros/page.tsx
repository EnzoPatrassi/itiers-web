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
        
        {/* 1. CABECERA INSTITUCIONAL */}
        <header className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            {t.nav.nosotros} | 20 {lang === 'es' ? 'Años de Trayectoria' : 'Years of History'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            {lang === 'es' ? 'De la Analítica a la Inteligencia Artificial' : 'From Analytics to Artificial Intelligence'}
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {lang === 'es'
              ? 'La confianza humana es el núcleo de la automatización. Transformamos información cruda en inteligencia estratégica y productos de datos de alto valor.'
              : 'Human trust is the core of automation. We refine raw information into strategic intelligence and high-value data products.'}
          </p>
        </header>

        {/* 2. TRAYECTORIA Y MISIÓN */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              {lang === 'es' ? 'Evolución Técnica' : 'Technical Evolution'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              {lang === 'es' ? 'Construyendo los entornos donde la IA produce' : 'Building environments where AI produces'}
            </h2>
            <p className="text-slate-700 leading-relaxed font-normal">
              {lang === 'es'
                ? 'Con 20 años de historia, hemos evolucionado para dominar la Ingeniería de Datos y la IA Generativa. Nuestra misión es ser el puente entre estructuras de datos complejas y la gestión organizacional efectiva. Ofrecemos arquitecturas robustas y resilientes que garantizan la calidad del software y la integridad de los datos.'
                : 'With 20 years of history, we have evolved to master Data Engineering and Generative AI. Our mission is to bridge complex data structures and effective organizational management with robust, resilient architectures.'}
            </p>
          </div>
          <div className="lg:col-span-4 bg-slate-900 text-white p-6 rounded-xl space-y-3 shadow-md">
            <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
              {lang === 'es' ? 'Enfoque Central de Itiers' : 'Itiers Core Focus'}
            </div>
            <div className="text-lg font-bold">
              {lang === 'es' ? 'Agentes de IA Determinísticos' : 'Deterministic AI Agents'}
            </div>
            <p className="text-xs text-slate-300">
              {lang === 'es' ? 'Correcteza y trazabilidad en cada ciclo de negocio.' : 'Correctness and traceability in every business cycle.'}
            </p>
          </div>
        </div>

        {/* 3. METODOLOGÍA DE TRABAJO: EL HUMANO EN EL BUCLE */}
        <section className="space-y-8" aria-labelledby="methodology-title">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              {lang === 'es' ? 'Metodología Spec-Driven (SDD)' : 'Spec-Driven Methodology (SDD)'}
            </span>
            <h2 id="methodology-title" className="text-3xl font-bold text-slate-900 mt-3">
              {lang === 'es' ? 'El Humano en el Bucle' : 'The Human in the Loop'}
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              {lang === 'es'
                ? 'Garantizamos resultados predecibles mediante un flujo de trabajo inspirado en el desarrollo guiado por especificaciones (SDD), donde el humano actúa como tomador de decisiones.'
                : 'We guarantee predictable results through a workflow inspired by spec-driven development (SDD), where the human acts as a decision maker.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Leader/Orchestrator */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-blue-600 font-black text-2xl block mb-2">01</span>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  {lang === 'es' ? 'Líder / Orquestador' : 'Leader / Orchestrator'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {lang === 'es'
                    ? 'El ente estratégico que define el flujo y supervisa la orquestación global del proyecto.'
                    : 'The strategic entity that defines the workflow and oversees global project orchestration.'}
                </p>
              </div>
            </div>

            {/* 2. Spec-Author */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-blue-600 font-black text-2xl block mb-2">02</span>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  {lang === 'es' ? 'Autor de Especificaciones' : 'Spec-Author'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {lang === 'es'
                    ? 'Formalizamos sus requerimientos en especificaciones técnicas ejecutables y claras.'
                    : 'We formalize your requirements into clear, executable technical specifications.'}
                </p>
              </div>
            </div>

            {/* 3. Implementer */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-blue-600 font-black text-2xl block mb-2">03</span>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  {lang === 'es' ? 'Agente Implementador' : 'Implementer Agent'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {lang === 'es'
                    ? 'La IA genera código basado estrictamente en la "fuente de verdad" de la especificación, eliminando improvisaciones.'
                    : 'AI generates code based strictly on the "source of truth" of the specification, eliminating improvisations.'}
                </p>
              </div>
            </div>

            {/* 4. Reviewer */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-blue-600 font-black text-2xl block mb-2">04</span>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  {lang === 'es' ? 'Agente Revisor' : 'Reviewer Agent'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {lang === 'es'
                    ? 'Un agente especializado que valida la trazabilidad, la arquitectura y el cumplimiento de los tests antes de cualquier entrega.'
                    : 'A specialized agent that validates traceability, architecture, and test compliance before any delivery.'}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 4. SEDES GLOBALES */}
        <section className="space-y-6 pt-4">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {lang === 'es' ? 'Nuestra Presencia Internacional' : 'Our International Presence'}
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              {lang === 'es' ? 'Soporte localizado y cumplimiento normativo internacional (GDPR y regulaciones locales).' : 'Localized support and international regulatory compliance (GDPR and local regulations).'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Argentina</span>
              <h3 className="text-xl font-bold text-slate-950 mt-1 mb-2">Mendoza</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Av. Perú 1841, Ciudad de Mendoza, Argentina</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Chile</span>
              <h3 className="text-xl font-bold text-slate-950 mt-1 mb-2">Santiago</h3>
              <p className="text-slate-500 text-sm leading-relaxed">General del Canto 421, piso 6, Providencia, Santiago de Chile</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">USA</span>
              <h3 className="text-xl font-bold text-slate-950 mt-1 mb-2">Delaware</h3>
              <p className="text-slate-500 text-sm leading-relaxed">651 North Broad Street, Middletown, DE 19709, USA</p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <div className="text-center pt-4">
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