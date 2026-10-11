import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Impact } from "@/components/sections/Impact";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col scroll-smooth">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 pt-24 pb-32 text-center max-w-4xl mx-auto">
        <h1 className="font-heading text-[50px] leading-[56px] tracking-[-0.02em] text-semantic-text font-medium mb-6">
          Convertimos el caos de datos en <br className="hidden sm:block"/>
          <span className="text-brand-primary font-bold">decisiones estratégicas</span>
        </h1>
        
        <p className="font-body text-lg text-brand-gray mb-10 max-w-2xl">
          Acompañamos a organizaciones líderes a desbloquear el valor de su información con un enfoque 100% personalizado. Tus datos, ordenados y listos para decidir.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contacto">
            <Button>Agendar una llamada</Button>
          </a>
        </div>
      </section>

      {/* Sección Quiénes Somos (Pilares y Equipo) */}
      <About />

      {/* Sección Qué Hacemos (Workflow y Servicios) */}
      <Services />

      {/* Sección Stack Tecnológico y Cifras de Impacto */}
      <Impact />

      {/* Sección Testimonios y Contacto */}
      <Contact />

      {/* Footer */}
      <Footer />

    </main>
  );
}