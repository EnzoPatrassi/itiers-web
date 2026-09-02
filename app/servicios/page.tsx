"use client";

import Link from "next/link";
// Importas el arreglo de servicios y la info de la alianza desde la base de datos simulada
import { SERVICIOS_ITIERS, INFO_ITIERS } from "@/data/mockData";

export default function ServiciosPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto animate-fade-in">

        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">
            Servicios | {INFO_ITIERS.trayectoria}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4">
            Nuestros Pilares de Solución
          </h1>
        </header>

        {/* Cuadrícula dinámica usando mockData */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICIOS_ITIERS.map((servicio, index) => (
            <article
              key={servicio.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{servicio.icono}</div>
              <h3 className="text-2xl font-bold text-slate-950 mb-3">{servicio.titulo}</h3>
              <p className="text-slate-600 mb-6">{servicio.descripcion}</p>

              <ul className="space-y-3 mb-8">
                {servicio.detalles.map((detalle, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700">
                    <span className="text-blue-500 mr-2">✓</span>
                    {detalle}
                  </li>
                ))}
              </ul>

              <Link
                href={`/contacto?servicio=${encodeURIComponent(servicio.titulo)}`}
                className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center"
              >
                Consultar por este servicio →
              </Link>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}