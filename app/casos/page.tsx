"use client";

import { useState } from "react";
import Link from "next/link";
// Importaciones dinámicas de la base de datos centralizada
import { CASOS_ITIERS, SERVICIOS_ITIERS, INFO_ITIERS, CasoExito } from "@/data/mockData";

export default function CasosPage() {
  const [filtro, setFiltro] = useState<string>("todos");

  // Mapear tecnologías de soporte según el servicio para mantener la estética visual del grid
  const obtenerTecnologiasSugeridas = (servicioId: string): string[] => {
    switch (servicioId) {
      case "productos":
        return ["IBM Watsonx", "Next.js", "Python", "FastAPI"];
      case "proyectos":
        return ["Engineering ETL", "Cloud DW", "SQL", "Airflow"];
      case "staffing":
        return ["Data Science", "BI Developers", "Agile Teams"];
      case "capacitaciones":
        return ["Data Literacy", "AI Strategy", "Workshops"];
      default:
        return ["Data Strategy"];
    }
  };

  // Filtrado de casos en base al estado de React
  const casosFiltrados = filtro === "todos"
    ? CASOS_ITIERS
    : CASOS_ITIERS.filter((caso) => caso.servicioId === filtro);

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Cabecera de la Sección (Animada) */}
        <header className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">
            Casos de Éxito | {INFO_ITIERS.trayectoria}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            Impacto real en números y estrategia
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Conoce cómo acompañamos a las organizaciones a estructurar su información compleja y transformarla
            en ventajas competitivas medibles de la mano de nuestros consultores.
          </p>
        </header>

        {/* Panel de Filtros Interactivos (Accesible por Teclado) */}
        <nav
          className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in [animation-delay:200ms] opacity-0"
          aria-label="Filtros de casos de éxito"
        >
          {/* Botón estático para "Todos" */}
          <button
            onClick={() => setFiltro("todos")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              filtro === "todos"
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            Todos los proyectos
          </button>

          {/* Botones dinámicos generados a partir de SERVICIOS_ITIERS */}
          {SERVICIOS_ITIERS.map((servicio) => (
            <button
              key={servicio.id}
              onClick={() => setFiltro(servicio.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                filtro === servicio.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {servicio.titulo}
            </button>
          ))}
        </nav>

        {/* Cuadrícula de Casos Filtrados de Forma Dinámica */}
        {casosFiltrados.length > 0 ? (
          <section
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            aria-label="Listado de proyectos y resultados de Itiers"
          >
            {casosFiltrados.map((caso, index) => {
              // Buscar el título del servicio correspondiente para la etiqueta
              const servicioAsociado = SERVICIOS_ITIERS.find(s => s.id === caso.servicioId);
              const categoriaLabel = servicioAsociado ? servicioAsociado.titulo : "Consultoría";
              const tecnologias = obtenerTecnologiasSugeridas(caso.servicioId);

              return (
                <article
                  key={caso.id}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                  className="animate-fade-in-up opacity-0 bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1.5 active:translate-y-0 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Cabecera del Caso */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-4xl transform group-hover:scale-110 transition-transform duration-200" role="img" aria-hidden="true">
                        {caso.icono}
                      </div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                        {categoriaLabel}
                      </span>
                    </div>

                    {/* Cliente e Identificación */}
                    <span className="text-xs text-slate-400 font-semibold tracking-wide uppercase">
                      {caso.cliente}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-950 mt-1 mb-3 group-hover:text-blue-900 transition-colors">
                      {caso.titulo}
                    </h2>

                    {/* Descripción del Desafío */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {caso.descripcion}
                    </p>

                    <hr className="border-slate-100 mb-6" />

                    {/* Resultados / Impacto (Estructurado Dinámicamente) */}
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Impacto del Proyecto
                    </h3>
                    <div className="flex items-start text-sm text-slate-700 mb-8 bg-emerald-50/50 border border-emerald-100 rounded-lg p-4">
                      <span className="text-emerald-500 mr-3 font-bold text-base" aria-hidden="true">✓</span>
                      <p className="leading-relaxed">
                        <strong>Logro clave:</strong> {caso.impacto}
                      </p>
                    </div>
                  </div>

                  {/* Pie de la Tarjeta: Tecnologías Usadas y Acción */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {tecnologias.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/contacto?asunto=Interés%20en%20${encodeURIComponent(caso.titulo)}`}
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:underline group/btn"
                    >
                      Consultar caso
                      <span className="ml-1 transform group-hover/btn:translate-x-1 transition-transform" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </section>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-100 shadow-sm mb-16">
            <p className="text-slate-500">No se encontraron casos para esta categoría.</p>
          </div>
        )}

        {/* Banner de Llamado a la Acción (CTA) */}
        <section className="text-center bg-blue-900 text-white rounded-2xl py-12 px-6 shadow-md" aria-labelledby="cta-casos-title">
          <h2 id="cta-casos-title" className="text-2xl sm:text-3xl font-bold">
            ¿Quieres lograr resultados similares en tu organización?
          </h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto text-sm sm:text-base">
            Conectemos tus fuentes de información complejas con el equipo de {INFO_ITIERS.nombre} y potenciemos tus decisiones operativas y estratégicas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              Iniciar mi Proyecto
            </Link>
            <Link
              href="/servicios"
              className="px-6 py-3 bg-blue-800 hover:bg-blue-700 text-white border border-blue-700 font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Ver Servicios Detallados
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}