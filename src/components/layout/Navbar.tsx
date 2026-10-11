import Link from 'next/link';
import { Button } from '../ui/Button';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface-background/95 backdrop-blur-sm border-b border-semantic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo (Placeholder que respeta el manual de marca) */}
          <Link href="/" className="flex flex-col justify-center min-w-[57px]">
            <span className="font-heading text-brand-gray font-bold text-3xl leading-none tracking-tighter">
              itiers
            </span>
            <span className="font-heading text-brand-primary font-bold text-[10px] tracking-widest mt-1">
              DATA SENSE
            </span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#nosotros" className="font-body text-semantic-text hover:text-brand-primary transition-colors">
              Quiénes Somos
            </Link>
            <Link href="#servicios" className="font-body text-semantic-text hover:text-brand-primary transition-colors">
              Qué Hacemos
            </Link>
            <Link href="#stack" className="font-body text-semantic-text hover:text-brand-primary transition-colors">
              Tecnologías
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <Button>Iniciá un proyecto</Button>
          </div>

          {/* Menú Hamburguesa Mobile (Placeholder) */}
          <div className="lg:hidden flex items-center">
            <button className="text-semantic-text hover:text-brand-primary">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};