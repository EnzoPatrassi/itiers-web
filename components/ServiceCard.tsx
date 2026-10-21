import React from 'react';
import Image from 'next/image';

export interface ServiceCardProps {
  title: string;
  description: string;
  iconPath?: string;
  badge?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconPath = '/icons/data.svg',
  badge
}) => {
  return (
    <article
      tabIndex={0}
      className="group relative p-8 bg-white dark:bg-[#2A2A2A] border border-[#b2b2b2] dark:border-[#4d4d4d] rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-[#ff4f00]/50 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:ring-offset-2 flex flex-col justify-between overflow-hidden"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="w-14 h-14 rounded-[1rem] bg-[#ff4f00]/10 flex items-center justify-center text-[#ff4f00] group-hover:scale-110 transition-transform shadow-inner">
            {iconPath.endsWith('.svg') || iconPath.endsWith('.png') ? (
              <Image src={iconPath} alt={`Icono de ${title}`} width={32} height={32} className="w-8 h-8 object-contain" />
            ) : (
              <span className="text-2xl font-bold">{title[0]}</span>
            )}
          </div>
          {badge && (
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#ff4f00]/10 text-[#ff4f00] border border-[#ff4f00]/20 uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-[#4d4d4d] dark:text-white group-hover:text-[#ff4f00] transition-colors mb-4">
          {title}
        </h3>

        <p className="text-sm text-[#898a8d] dark:text-[#b2b2b2] leading-relaxed mb-8">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;