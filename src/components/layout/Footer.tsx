import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full bg-surface-background border-t border-semantic-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col min-w-[57px]">
            <span className="font-heading text-brand-gray font-bold text-2xl leading-none tracking-tighter">
              itiers
            </span>
            <span className="font-heading text-brand-primary font-bold text-[8px] tracking-widest mt-1">
              DATA SENSE
            </span>
          </Link>

          {/* Links y Trabaja con Nosotros */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link href="#contacto" className="font-body text-sm text-brand-gray hover:text-brand-primary transition-colors">
              Contacto
            </Link>
            <Link href="#" className="font-body text-sm text-brand-gray hover:text-brand-primary transition-colors">
              Términos Legales
            </Link>
            <a 
              href="https://forms.google.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-sm font-bold text-brand-primary hover:text-semantic-text transition-colors"
            >
              Trabaja con nosotros
            </a>
          </div>

          {/* Toggle de Idioma (Requerido por el DoD) */}
          <div className="flex items-center gap-2 font-body text-sm">
            <span className="text-semantic-text font-bold">ES</span>
            <span className="text-semantic-border">|</span>
            <button className="text-brand-gray hover:text-brand-primary transition-colors">
              EN
            </button>
          </div>

        </div>

        <div className="text-center border-t border-semantic-border pt-8">
          <p className="font-body text-xs text-brand-gray">
            © {new Date().getFullYear()} Itiers Data Sense. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};