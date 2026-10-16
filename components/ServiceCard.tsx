import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ServiceCardProps {
  title: string;
  description: string;
  iconPath?: string;
  linkHref?: string;
  badge?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconPath = '/icons/data.svg',
  linkHref = '/contacto',
  badge
}) => {
  return (
    <article
      tabIndex={0}
      className="group relative p-8 bg-surface border border-border rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-[#ff4f00]/50 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex flex-col justify-between overflow-hidden backdrop-blur-xl"
    >
      {/* Gráfico Dashboard Analítico (Fondo SVG revelado en Hover) */}
      <div className="absolute top-10 right-0 w-64 h-64 opacity-0 pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-500 z-0 text-foreground">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="100" width="30" height="80" rx="4" fill="currentColor" opacity="0.3"/>
          <rect x="70" y="60" width="30" height="120" rx="4" fill="currentColor" opacity="0.6"/>
          <rect x="120" y="20" width="30" height="160" rx="4" fill="#ff4f00"/>
          <path d="M35 80 L85 40 L135 10" stroke="#ff4f00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="35" cy="80" r="6" fill="#ff4f00"/>
          <circle cx="85" cy="40" r="6" fill="#ff4f00"/>
          <circle cx="135" cy="10" r="6" fill="#ff4f00"/>
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="w-14 h-14 rounded-[1rem] bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
            {iconPath.endsWith('.svg') || iconPath.endsWith('.png') ? (
              <Image src={iconPath} alt={`Icono de ${title}`} width={32} height={32} className="w-8 h-8 object-contain" />
            ) : (
              <span className="text-2xl font-bold">{title[0]}</span>
            )}
          </div>
          {badge && (
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-accent group-hover:text-primary transition-colors mb-4">
          {title}
        </h3>

        <p className="text-sm text-brand-gray leading-relaxed mb-8">
          {description}
        </p>
      </div>

      <div className="pt-5 border-t border-border/40 relative z-10">
        <Link
          href={linkHref}
          className="inline-flex items-center text-sm font-bold text-primary hover:text-[#e04500] group-hover:translate-x-1 transition-transform focus:outline-none"
        >
          <span>Saber más</span>
          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;