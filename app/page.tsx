import Link from "next/link";

export default function Home() {
  return (
    <div className="py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[80vh] flex-grow">
      {/* 1. Etiqueta de trayectoria (Aparece primero con float continuo) */}
      <span className="animate-fade-in text-blue-600 font-semibold tracking-wider uppercase text-sm mb-6 bg-blue-50 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
        20 años de experiencia | Data Sense
      </span>

      {/* 2. Título Principal (Entrada con retraso sutil para jerarquía visual) */}
      <h1 className="animate-fade-in-up text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight max-w-4xl leading-tight">
        Refinamos información compleja en{" "}<br className="hidden sm:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800">
          inteligencia estratégica
        </span>
      </h1>

      {/* 3. Copia de soporte (Animación fade-in más suave) */}
      <p className="animate-fade-in [animation-delay:200ms] opacity-0 mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
        Ayudamos a las organizaciones a navegar las demandas del mercado y establecer
        ventajas competitivas utilizando inteligencia artificial generativa.
      </p>

      {/* 4. Botones de acción con microinteracciones en Hover */}
      <div className="animate-fade-in [animation-delay:400ms] opacity-0 mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/servicios"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Explorar Servicios
        </Link>
        <Link
          href="/contacto"
          className="px-8 py-4 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-medium rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Contactar un Consultor
        </Link>
      </div>
    </div>
  );
}