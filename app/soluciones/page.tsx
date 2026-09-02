"use client";

import Link from "next/link";
import { INFO_ITIERS } from "@/data/mockData";

interface Solucion {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  icono: string;
  beneficios: string[];
  etiqueta: string;
}

export default function SolucionesPage() {
  const soluciones: Solucion[] = [
    {
      titulo: "Enterprise AI & LLM integration",
      subtitulo: "Seguridad y control con modelos fundacionales",
      descripcion: "Impulsados por nuestra alianza con IBM Watsonx, integramos agentes de inteligencia artificial y Large Language Models de grado empresarial, respetando los más altos estándares de gobernanza, auditoría y propiedad de los datos.",
      icono: "🧠",
      beneficios: [
        "Automatización inteligente de atención al cliente y soporte",
        "Análisis semántico automatizado de documentos masivos",
        "Bucle de control seguro (sandbox privado de datos)"
      ],
      etiqueta: "Destacado AI"
    },
    {
      titulo: "Arquitectura Cloud Data Platform",
      subtitulo: "Infraestructura robusta para toma de decisiones",
      descripcion: "Centralizamos bases de datos desconectadas y creamos pipelines automáticos de ETL (Extracción, Transformación y Carga) para que tu información esté disponible en tiempo real y libre de redundancias.",
      icono: "☁️",
      beneficios: [
        "Reducción sustancial en costos de cómputo en la nube",
        "Gobernanza de datos unificada bajo un único esquema de calidad",
        "Acceso instantáneo para equipos analíticos internos"
      ],
      etiqueta: "Ingeniería de Datos"
    },
    {
      titulo: "Business Intelligence Corporativo",
      subtitulo: "Dashboards analíticos de auto-servicio",
      descripcion: "Convertimos los datos fríos en historias visuales altamente intuitivas. Creamos tableros dinámicos enfocados en la alta dirección y gerencias medias para facilitar la planeación táctica y operativa.",
      icono: "📊",
      beneficios: [
        "Métricas clave actualizadas al minuto",
        "Alertas automatizadas ante desvíos de metas",
        "Reportabilidad interactiva libre de consultas a sistemas de TI"
      ],
      etiqueta: "Analítica de Negocio"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Cabecera Soluciones */}
        <header className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">
            Nuestras Soluciones
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            Especialistas en resolver desafíos complejos
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Ofrecemos empaquetamientos tecnológicos estratégicos para agilizar la operación empresarial, anticiparnos a la demanda y potenciar tu ventaja competitiva.
          </p>
        </header>

        {/* Tarjetas de Soluciones Premium */}
        <section className="space-y-12 mb-16" aria-label="Estructura de soluciones corporativas de Itiers">
          {soluciones.map((sol, index) => (
            <article
              key={sol.titulo}
              style={{ animationDelay: `${200 + index * 150}ms` }}
              className="animate-fade-in-up opacity-0 bg-white rounded-2xl p-8 sm:p-12 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex flex-col lg:flex-row gap-8 items-start justify-between group"
            >
              {/* Contenido Izquierdo */}
              <div className="max-w-3xl">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {sol.etiqueta}
                </span>
                <div className="flex items-center gap-3 mt-4 mb-2">
                  <span className="text-3xl" role="img" aria-hidden="true">{sol.icono}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 group-hover:text-blue-900 transition-colors">
                    {sol.titulo}
                  </h2>
                </div>
                <h3 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">
                  {sol.subtitulo}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {sol.descripcion}
                </p>

                {/* Beneficios */}
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Impacto Directo
                </h4>
                <ul className="space-y-3">
                  {sol.beneficios.map((ben, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <span className="text-emerald-500 mr-2 font-bold" aria-hidden="true">✓</span>
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón de Acción Derecho */}
              <div className="w-full lg:w-auto pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-8 flex-shrink-0 flex items-center justify-center">
                <Link
                  href={`/contacto?asunto=Interés%20en%20${encodeURIComponent(sol.titulo)}`}
                  className="w-full sm:w-auto text-center px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Consultar Solución
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Cierre / Contacto */}
        <section className="text-center bg-blue-50 rounded-xl py-12 px-6" aria-labelledby="cta-soluciones-title">
          <h2 id="cta-soluciones-title" className="text-2xl font-bold text-slate-900">
            ¿Tu organización tiene un desafío particular?
          </h2>
          <p className="mt-2 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Diseñamos soluciones analíticas, células de staffing ágiles y capacitaciones a medida. Agenda una sesión técnica con nuestros consultores.
          </p>
          <div className="mt-8">
            <Link
              href="/contacto"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Contactar un Consultor
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}