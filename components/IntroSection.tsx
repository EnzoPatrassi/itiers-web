import React from 'react';
import Image from 'next/image';
import { Locale } from '@/data/i18n';
import { ThemeMode } from '@/components/Header';

export interface IntroSectionProps {
  currentLang: Locale;
  theme: ThemeMode;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ currentLang, theme }) => {
  const isDark = theme === 'dark';

  const contentEs = {
    eyebrow: 'Historia y Fundación',
    mainTitle: 'Club Atlético River Plate',
    introText:
      'El Club Atlético River Plate es una de las instituciones deportivas más grandes y laureadas del fútbol argentino y mundial.',
    sections: [
      {
        title: 'Fundación y Origen',
        badge: '1901',
        items: [
          {
            label: 'Fecha de fundación',
            text: '25 de mayo de 1901, en el barrio porteño de La Boca.',
          },
          {
            label: 'Origen',
            text: 'Nació de la fusión de dos equipos locales, Santa Rosa y La Rosales.',
          },
          {
            label: 'El nombre',
            text: 'Proviene de la inscripción "The River Plate" (término con el que los británicos denominaban al Río de la Plata), visto en unos cajones de madera descargados en el puerto.',
          },
          {
            label: 'Apodo ("Los Millonarios")',
            text: 'Se ganó en la década de 1930 debido a las altas sumas de dinero que el club invirtió en fichajes importantes, como el de Carlos Peucelle y Bernabé Ferreyra.',
          },
        ],
      },
      {
        title: 'Estadios e Identidad',
        badge: 'Monumental',
        items: [
          {
            label: 'Evolución del estadio',
            text: 'Pasó por varios campos de juego (Dársena Sur, Sarandí, Alvear y Tagle en Recoleta) hasta que el 26 de mayo de 1938 inauguró su emblemático estadio: el Mâs Monumental (Antonio Vespucio Liberti), ubicado en el barrio de Núñez.',
          },
          {
            label: 'Camiseta tradicional',
            text: 'Es blanca con una banda roja cruzada en diagonal.',
          },
        ],
      },
      {
        title: 'Épocas Doradas y Hitos Deportivos',
        badge: 'Gloria',
        items: [
          {
            label: '"La Máquina" (1940s)',
            text: 'Una de las delanteras más célebres de la historia del fútbol argentino, integrada por Juan Carlos Muñoz, José Manuel Moreno, Adolfo Pedernera, Ángel Labruna y Félix Loustau.',
          },
          {
            label: 'Títulos locales',
            text: 'Es el máximo campeón de la Primera División de Argentina, con 38 títulos oficiales de liga.',
          },
          {
            label: 'Copa Libertadores',
            text: 'Ha conquistado el máximo torneo continental de América en 4 oportunidades (1986, 1996, 2015 y 2018).',
          },
          {
            label: 'Copa Intercontinental',
            text: 'Ganada en 1986 frente al Steaua de Bucarest en Japón.',
          },
          {
            label: 'La final de Madrid (2018)',
            text: 'El 9 de diciembre de 2018 venció a su clásico rival, Boca Juniors, por 3-1 en el Estadio Santiago Bernabéu de Madrid, consagrándose campeón de la Copa Libertadores en una final histórica.',
          },
        ],
      },
      {
        title: 'Máximos Ídolos',
        badge: 'Leyendas',
        items: [
          {
            label: 'Ángel Labruna',
            text: 'Máximo goleador e ícono histórico del club.',
          },
          {
            label: 'Amadeo Carrizo',
            text: 'Pionero de la arquería moderna y leyenda millonaria.',
          },
          {
            label: 'Norberto "Beto" Alonso',
            text: 'Emblema y referente de las gestas de 1975 y 1986.',
          },
          {
            label: 'Enzo Francescoli',
            text: 'Símbolo de clase y multicampeón nacional e internacional.',
          },
          {
            label: 'Ariel "Burrito" Ortega',
            text: 'Genio del gambeteo y referente de los años 90 y 2000.',
          },
          {
            label: 'Ramón Díaz',
            text: 'Multicampeón como jugador y uno de los DTs más ganadores.',
          },
          {
            label: 'Marcelo Gallardo',
            text: 'El técnico más ganador de la historia del club.',
          },
          {
            label: 'Leonardo Ponzio',
            text: 'Uno de los jugadores con más títulos en la institución.',
          },
        ],
      },
    ],
    stats: [
      { label: 'Año de Fundación', value: '1901' },
      { label: 'Inauguración Monumental', value: '1938' },
      { label: 'Títulos de Liga', value: '38' },
      { label: 'Copas Libertadores', value: '4' },
    ],
    imageAlt: 'Estadio Mâs Monumental y el Club Atlético River Plate',
  };

  const contentEn = {
    ...contentEs,
    eyebrow: 'History & Foundation',
  };

  const content = currentLang === 'es' ? contentEs : contentEn;

  return (
    <section
      id="nosotros"
      aria-label={content.mainTitle}
      className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-300 border-b ${
        isDark ? 'bg-[#0F0F0F] border-[#333333]' : 'bg-white border-[#b2b2b2]/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera con imagen vertical en grid responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Texto principal e introducción */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#ff4f00] bg-[#ff4f00]/10 px-4 py-1.5 rounded-full border border-[#ff4f00]/30 mb-4">
              {content.eyebrow}
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight font-['Comfortaa',sans-serif] leading-tight mb-6">
              <span className={isDark ? 'text-white' : 'text-[#1C1917]'}>
                {content.mainTitle}
              </span>
            </h2>

            <p className={`text-lg sm:text-xl leading-relaxed font-medium mb-8 ${isDark ? 'text-[#b2b2b2]' : 'text-[#1C1917]'}`}>
              {content.introText}
            </p>

            {/* Métricas en 2x2 para acomodar con la vertical */}
            <div className="grid grid-cols-2 gap-4">
              {content.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-xl border text-center transition-transform hover:-translate-y-1 ${
                    isDark ? 'bg-[#1A1A1A] border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/40 shadow-sm'
                  }`}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-[#ff4f00] font-['Comfortaa',sans-serif]">
                    {stat.value}
                  </p>
                  <p className={`text-xs sm:text-sm font-medium mt-1 ${isDark ? 'text-[#b2b2b2]' : 'text-[#4d4d4d]'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen destacada VERTICAL */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden border shadow-xl border-[#b2b2b2]/40">
              <Image
                src="/river-plate.jpg"
                alt={content.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
              <div
                className={`absolute inset-0 pointer-events-none mix-blend-multiply ${
                  isDark
                    ? 'bg-gradient-to-t from-[#0F0F0F]/90 via-transparent to-transparent'
                    : 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                }`}
              />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-semibold bg-black/70 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 text-center">
                Núñez, Buenos Aires • El Mâs Monumental
              </div>
            </div>
          </div>

        </div>

        {/* Secciones de Información centradas en contenedor */}
        <div className="max-w-4xl mx-auto space-y-8">
          {content.sections.map((section, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 border transition-all ${
                isDark
                  ? 'bg-[#1A1A1A] border-[#333333]'
                  : 'bg-[#FAFAFA] border-[#b2b2b2]/40 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 pb-4 border-b border-[#b2b2b2]/20 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold font-['Comfortaa',sans-serif] text-[#ff4f00]">
                  {section.title}
                </h3>
                <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-[#ff4f00]/10 text-[#ff4f00] border border-[#ff4f00]/20 shrink-0">
                  {section.badge}
                </span>
              </div>

              <ul className="space-y-4 text-left">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="text-[#ff4f00] mt-1 text-lg font-bold shrink-0">•</span>
                    <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-[#b2b2b2]' : 'text-[#1C1917]'}`}>
                      <strong className={isDark ? 'text-white font-semibold' : 'text-[#1C1917] font-semibold'}>
                        {item.label}:
                      </strong>{' '}
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Badge de Marca itiers Centrado */}
        <div className="max-w-md mx-auto mt-12">
          <div
            className={`p-4 rounded-xl border text-center ${
              isDark ? 'bg-[#1A1A1A] border-[#333333]' : 'bg-[#FAFAFA] border-[#b2b2b2]/40'
            }`}
          >
            <span className="text-xs uppercase tracking-widest text-[#4d4d4d] font-semibold block mb-1">
              itiers • Data Sense
            </span>
            <span className="text-xs text-[#ff4f00] font-bold">
              Historia y Documentación de Organizaciones
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};