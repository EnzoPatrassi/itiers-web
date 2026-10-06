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
      className="group relative p-6 bg-surface border border-border rounded-md shadow-sm hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            {iconPath.endsWith('.svg') || iconPath.endsWith('.png') ? (
              <Image src={iconPath} alt={`Icono de ${title}`} width={28} height={28} className="w-7 h-7 object-contain" />
            ) : (
              <span className="text-xl font-bold">{title[0]}</span>
            )}
          </div>
          {badge && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-accent group-hover:text-primary transition-colors mb-3">
          {title}
        </h3>

        <p className="text-sm text-brand-gray leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-border/40">
        <Link
          href={linkHref}
          className="inline-flex items-center text-sm font-semibold text-primary hover:underline group-hover:translate-x-1 transition-transform focus:outline-none"
        >
          <span>Saber más</span>
          <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
