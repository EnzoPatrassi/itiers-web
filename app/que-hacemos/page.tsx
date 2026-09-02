"use client";

import Link from "next/link";

interface PasoMetodologia {
  paso: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

export default function QueHacemosPage() {
  const etapas: PasoMetodologia[] = [
    {
      paso: "01",
      titulo: "Recolección de Datos",
      descripcion: "Identificamos e ingestas de manera segura datos aislados o no estructurados de tu organización, sentando bases sólidas para el análisis corporativo.",
      icono: "📥"
    },
    {
      paso: "02",
      titulo: "Organización y ETL",
      descripcion: "Depuramos, estructuramos y transformamos la información dispersa mediante pipelines robustos de ingeniería de datos y almacenes centralizados en la nube.",
      icono: "🧱"
    },
    {
      paso: "03",
      titulo: "Interpretación Analítica",
      descripcion: "Construimos modelos matemáticos e interpretamos variables críticas de tu negocio para descifrar el significado real detrás de los números.",
      icono: "🧩"
    },
    {
      paso: "04",
      titulo: "Análisis y Modelado Predictivo",
      descripcion: "Utilizamos Ciencia de Datos avanzada e Inteligencia Artificial Generativa para anticiparnos a las demandas del mercado y proyectar escenarios futuros.",
      icono: "👁️‍🗨️"
    },
    {
      paso: "05",
      titulo: "Monitoreo y Dashboards",
      descripcion: "Entregamos tableros inteligentes y de auto-servicio para supervisar de manera constante tus indicadores clave, asegurando una planeación de gestión impecable.",
      icono: "📊"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Cabecera Metodología */}
        <header className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">
            Nuestra Metodología
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            La solución está en el ciclo inteligente de tus datos
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Creemos en el poder de una exitosa gestión organizacional. La cual es posible lograr por medio de la recolección, organización, interpretación, análisis y monitoreo constante de datos.
          </p>
        </header>

        {/* Línea de Tiempo del Ciclo de Datos */}
        <section className="mb-16 space-y-8" aria-label="Etapas del proceso metodológico de Itiers">
          {etapas.map((etapa, index) => (
            <article
              key={etapa.paso}
              style={{ animationDelay: `${200 + index * 100}ms` }}
              className="animate-fade-in-up opacity-0 bg-white rounded-xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="flex items-center gap-6">
                {/* Paso index */}
                <span className="text-4xl sm:text-5xl font-extrabold text-blue-100 group-hover:text-blue-600 transition-colors">
                  {etapa.paso}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" role="img" aria-hidden="true">{etapa.icono}</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{etapa.titulo}</h2>
                  </div>
                  <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                    {etapa.descripcion}
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-3 h-3 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors mr-4"></div>
            </article>
          ))}
        </section>

        {/* Beneficios de Negocio */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center animate-fade-in-up [animation-delay:700ms] opacity-0" aria-label="Beneficios corporativos">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-50">
            <span className="text-3xl inline-block mb-3" role="img" aria-hidden="true">🎯</span>
            <h3 className="font-bold text-slate-950 text-lg">Planeación de Gestión</h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">Mejoramos los marcos de administración interna mediante objetivos basados en métricas sólidas.</p>
          </div>
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-50">
            <span className="text-3xl inline-block mb-3" role="img" aria-hidden="true">🔮</span>
            <h3 className="font-bold text-slate-950 text-lg">Anticipo a la Demanda</h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">Identificamos tendencias de consumo para adaptar tus existencias y distribución con antelación.</p>
          </div>
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-50">
            <span className="text-3xl inline-block mb-3" role="img" aria-hidden="true">⚡</span>
            <h3 className="font-bold text-slate-950 text-lg">Diferencial Competitivo</h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">Establecemos barreras de entrada tecnológicas eficientes que potencian la escalabilidad de tu firma.</p>
          </div>
        </section>

        {/* CTA final */}
        <section className="text-center bg-blue-900 text-white rounded-2xl py-12 px-6" aria-labelledby="cta-metodo-title">
          <h2 id="cta-metodo-title" className="text-2xl sm:text-3xl font-bold">
            ¿Preparado para implementar este ciclo en tu negocio?
          </h2>
          <p className="mt-3 text-blue-100 max-w-xl mx-auto text-sm sm:text-base">
            No dejes tus datos en silos oscuros. Convirtámoslos hoy en tu mayor activo estratégico comercial.
          </p>
          <div className="mt-8">
            <Link
              href="/contacto"
              className="px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              Comenzar Auditoría de Datos
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}