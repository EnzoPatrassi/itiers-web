"use client";

import Link from "next/link";
import { INFO_ITIERS } from "@/data/mockData";

export default function NosotrosPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <header className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">
            Nuestra Trayectoria
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            20 años transformando datos en decisiones inteligentes
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Actuamos como un puente de confianza entre estructuras de datos complejas y una gestión organizacional altamente efectiva.
          </p>
        </header>

        {/* Misión y Visión Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" aria-label="Misión y Visión de Itiers">
          <article className="animate-fade-in-up [animation-delay:200ms] opacity-0 bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4" role="img" aria-hidden="true">🎯</div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Nuestra Misión</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Refinar información compleja en inteligencia estratégica para que las organizaciones naveguen las demandas del mercado con confianza, estableciendo ventajas competitivas medibles e incorporando tecnología de vanguardia.
            </p>
          </article>

          <article className="animate-fade-in-up [animation-delay:300ms] opacity-0 bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4" role="img" aria-hidden="true">👁️‍🗨️</div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Nuestra Visión</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Consolidarnos como el socio de datos líder en el continente americano, reconocidos por simplificar lo complejo, formar talento analítico de clase mundial y liderar la implementación ética de Inteligencia Artificial Generativa.
            </p>
          </article>
        </section>

        {/* Alianza IBM Watsonx */}
        <section
          className="mb-16 animate-fade-in-up [animation-delay:400ms] opacity-0 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl"
          aria-labelledby="alianza-nosotros-title"
        >
          <div className="max-w-3xl">
            <span className="bg-blue-500/20 text-blue-300 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">
              {INFO_ITIERS.alianzaAI}
            </span>
            <h2 id="alianza-nosotros-title" className="text-2xl sm:text-4xl font-bold mt-4 leading-tight">
              Llevando la IA Generativa al entorno empresarial
            </h2>
            <p className="mt-4 text-blue-100 text-sm sm:text-base leading-relaxed">
              Nuestra alianza estratégica con IBM Watsonx nos permite dotar a las corporaciones de un marco metodológico, tecnológico y ético para escalar soluciones de IA de forma segura, gobernada y adaptada a su realidad de negocio.
            </p>
          </div>
        </section>

        {/* Sedes Globales */}
        <section className="mb-16 animate-fade-in-up [animation-delay:500ms] opacity-0" aria-labelledby="sedes-title">
          <div className="text-center mb-10">
            <h2 id="sedes-title" className="text-3xl font-bold text-slate-900">Nuestra Presencia</h2>
            <p className="text-slate-600 mt-2">Operando de forma ágil e internacional para dar soporte a las Américas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INFO_ITIERS.sedes.map((sede, idx) => (
              <article
                key={sede.pais}
                className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{sede.pais}</span>
                  <h3 className="text-xl font-bold text-slate-950 mt-1 mb-2">{sede.ciudad}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{sede.direccion}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50 text-xs text-slate-400 font-medium">
                  Oficina Oficial de Itiers
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="text-center bg-blue-50 rounded-xl py-12 px-6" aria-labelledby="cta-nosotros-title">
          <h2 id="cta-nosotros-title" className="text-2xl font-bold text-slate-900">
            Únete a nuestra red de colaboradores
          </h2>
          <p className="mt-2 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Buscamos constantemente talento apasionado por los datos para sumarse a nuestros proyectos y seguir impulsando decisiones inteligentes.
          </p>
          <div className="mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfN5I8_vgDeYfihh_3rPSb1tOVSbf3yUgNWgGD-77aLlLWKbA/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Postularme para Proyectos
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}