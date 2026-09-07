import Image from "next/image";
import { dictionaries, Locale } from "@/data/i18n";

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang: Locale = resolvedParams.lang === 'en' ? 'en' : 'es';
  const t = dictionaries[lang];

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            {t.nav.contacto} | Mendoza, Argentina
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            {lang === 'es' ? 'Hablemos de tus Datos e Inteligencia Artificial' : 'Let’s Talk About Your Data & Artificial Intelligence'}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {lang === 'es' 
              ? 'Ponte en contacto con nuestro equipo de consultores especialistas para diseñar la estrategia ideal para tu organización.'
              : 'Get in touch with our team of expert consultants to design the ideal strategy for your organization.'}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Información de Contacto */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Itiers Data Sense</h2>
              <p className="text-slate-400 text-sm">{t.footer.tagline}</p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <span className="font-bold text-white block">{lang === 'es' ? 'Sede Mendoza, Argentina:' : 'Mendoza HQ, Argentina:'}</span>
                  <p>Av. Belgrano 1234, Ciudad de Mendoza, Argentina</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">📩</span>
                <div>
                  <span className="font-bold text-white block">Email:</span>
                  <p>contacto@itiers.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <span className="font-bold text-white block">WhatsApp / {lang === 'es' ? 'Teléfono:' : 'Phone:'}</span>
                  <p>+54 9 261 000-0000</p>
                </div>
              </div>
            </div>

            {/* Imagen Accesible Next.js */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
              <Image
                src="/globe.svg"
                alt={lang === 'es' ? 'Ubicación global de Itiers Data Sense' : 'Global presence of Itiers Data Sense'}
                fill
                className="object-contain p-4 opacity-80"
              />
            </div>
          </div>

          {/* Formularios de Contacto */}
          <form className="bg-white rounded-2xl p-8 sm:p-10 shadow-md border border-slate-200 space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-slate-900 mb-2">
                {lang === 'es' ? 'Nombre Completo' : 'Full Name'}
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder={lang === 'es' ? 'Ej. Juan Pérez' : 'E.g. John Smith'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                {lang === 'es' ? 'Correo Electrónico Corporativo' : 'Corporate Email'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="ejemplo@empresa.com"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-900 mb-2">
                {lang === 'es' ? 'Mensaje o Consulta' : 'Message or Inquiry'}
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder={lang === 'es' ? 'Cuéntanos sobre los objetivos de tu empresa...' : 'Tell us about your organization goals...'}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}
