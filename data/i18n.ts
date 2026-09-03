export type Locale = 'es' | 'en';

export interface TranslationDictionary {
  nav: {
    inicio: string;
    nosotros: string;
    servicios: string;
    queHacemos: string;
    soluciones: string;
    casos: string;
    contacto: string;
    ctaButton: string;
    ariaNav: string;
    ariaLangSwitch: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  geoBlock: {
    title: string;
    description: string;
    badge: string;
  };
  servicesSection: {
    badge: string;
    title: string;
    subtitle: string;
    ctaButton: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      icon: string;
      features: string[];
    }>;
  };
  casesSection: {
    badge: string;
    title: string;
    subtitle: string;
    ctaButton: string;
    filterAll: string;
    items: Array<{
      id: string;
      title: string;
      client: string;
      category: string;
      icon: string;
      challenge: string;
      solution: string;
      result: string;
    }>;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    headquarters: string;
    rights: string;
    locationMendoza: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export const dictionaries: Record<Locale, TranslationDictionary> = {
  es: {
    nav: {
      inicio: 'Inicio',
      nosotros: 'Nosotros',
      servicios: 'Servicios',
      queHacemos: 'Qué hacemos',
      soluciones: 'Soluciones',
      casos: 'Casos de Éxito',
      contacto: 'Contacto',
      ctaButton: 'Contáctanos',
      ariaNav: 'Navegación principal de Itiers',
      ariaLangSwitch: 'Cambiar idioma',
    },
    hero: {
      badge: '20 años de experiencia | Data Sense & AI Consulting',
      title: 'Transformamos Datos en Decisiones Inteligentes',
      subtitle: 'Ayudamos a las organizaciones a estructurar, analizar e integrar soluciones avanzadas de analítica e IA para generar ventajas competitivas medibles.',
      primaryCta: 'Explorar Servicios',
      secondaryCta: 'Contactar a un Consultor',
    },
    geoBlock: {
      badge: 'Resumen Ejecutivo | Answer-First',
      title: '¿Qué es Itiers?',
      description: 'Itiers es una consultora especializada en analítica de datos e inteligencia artificial. Ayudamos a organizaciones a estructurar, analizar e integrar soluciones avanzadas de IA para optimizar la toma de decisiones estratégicas.',
    },
    servicesSection: {
      badge: 'Nuestras Especialidades',
      title: 'Servicios de Analítica e Inteligencia Artificial',
      subtitle: 'Soluciones integrales de datos e IA diseñadas para potenciar el valor operativo y estratégico de tu empresa.',
      ctaButton: 'Consultar por este servicio →',
      items: [
        {
          id: 'analitica-avanzada',
          title: 'Analítica Avanzada & BI',
          description: 'Diseño e implementación de tableros ejecutivos de autoservicio, modelos predictivos y arquitecturas de Business Intelligence para visualización estratégica.',
          icon: '📊',
          features: [
            'Dashboards interactivos en tiempo real',
            'Modelos predictivos de comportamiento de negocio',
            'Visualización de KPIs estratégicos',
            'Analítica descriptiva y prescriptiva'
          ]
        },
        {
          id: 'ingenieria-datos',
          title: 'Ingeniería de Datos & Cloud',
          description: 'Arquitecturas de datos escalables, pipelines ETL/ELT automatizados y soluciones Cloud Data Warehouse diseñadas para soportar grandes volúmenes de información.',
          icon: '☁️',
          features: [
            'Pipelines ETL/ELT robustos y automatizados',
            'Arquitecturas Cloud Data Lake / Data Warehouse',
            'Gobierno y calidad de datos empresariales',
            'Integración de fuentes multi-sistema'
          ]
        },
        {
          id: 'ia-agentes',
          title: 'Implementación de IA & Agentes',
          description: 'Despliegue de agentes inteligentes autónomos, modelos de IA Generativa y LLMs personalizados integrados en los procesos corporativos clave.',
          icon: '🤖',
          features: [
            'Desarrollo de Agentes Inteligentes autónomos',
            'Integración de LLMs y RAG (Retrieval-Augmented Generation)',
            'Automatización de procesos cognitivos complejos',
            'Socio Tecnológico Global en ecosistemas de IA'
          ]
        }
      ]
    },
    casesSection: {
      badge: 'Casos de Éxito',
      title: 'Resultados y Proyectos Destacados',
      subtitle: 'Casos reales donde convertimos datos complejos en impacto financiero y operativo.',
      ctaButton: 'Ver Todos los Casos',
      filterAll: 'Todos los Casos',
      items: [
        {
          id: 'retail-optim',
          title: 'Optimización de Inventario y Cadena de Suministro',
          client: 'Cadena de Supermercados Líder',
          category: 'Analítica Avanzada & BI',
          icon: '🛒',
          challenge: 'Pérdidas constantes por quiebres de stock y falta de visibilidad en la demanda en más de 120 sucursales.',
          solution: 'Desarrollo de un modelo analítico predictivo en tiempo real con tableros ejecutivos integrados a sus sistemas de gestión.',
          result: 'Reducción del 18% en quiebres de stock y optimización del 25% en tiempos de reposición.'
        },
        {
          id: 'finanzas-cloud',
          title: 'Arquitectura de Datos Financieros Multi-País',
          client: 'Corporación de Servicios Financieros',
          category: 'Ingeniería de Datos & Cloud',
          icon: '🏦',
          challenge: 'Fragmentación de datos transaccionales en 4 países sin consolidación en tiempo real para reporte regulatorio.',
          solution: 'Diseño e implementación de un Data Warehouse en la nube con pipelines ETL automatizados de alta disponibilidad.',
          result: 'Procesamiento de +10M de registros diarios con 100% de consistencia y reducción del 60% en tiempos de reporte.'
        },
        {
          id: 'agentes-salud',
          title: 'Asistente Cognitivo de Atención Médica e IA',
          client: 'Red de Salud Regional',
          category: 'Implementación de IA & Agentes',
          icon: '🏥',
          challenge: 'Alta saturación en canales de atención al paciente y demora en la clasificación de solicitudes especializadas.',
          solution: 'Implementación de Agentes de IA conversacionales con integración RAG sobre historias clínicas estructuradas.',
          result: 'Automatización del 45% de consultas recurrentes y reducción del tiempo de espera asistencial a menos de 2 minutos.'
        }
      ]
    },
    footer: {
      tagline: 'Refinamos información compleja en inteligencia estratégica para organizaciones con visión de futuro.',
      quickLinks: 'Navegación',
      servicesTitle: 'Servicios Principales',
      contactTitle: 'Contacto Corporativo',
      headquarters: 'Sede Central',
      rights: 'Todos los derechos reservados.',
      locationMendoza: 'Mendoza, Argentina',
    },
    meta: {
      title: 'Itiers | Data Sense - Consultora de Analítica de Datos e Inteligencia Artificial',
      description: 'Itiers es una consultora especializada en analítica de datos e inteligencia artificial en Mendoza, Argentina. Estructuramos e integramos soluciones de IA para la toma de decisiones estratégicas.',
    }
  },
  en: {
    nav: {
      inicio: 'Home',
      nosotros: 'About Us',
      servicios: 'Services',
      queHacemos: 'What We Do',
      soluciones: 'Solutions',
      casos: 'Case Studies',
      contacto: 'Contact',
      ctaButton: 'Contact Us',
      ariaNav: 'Main navigation for Itiers',
      ariaLangSwitch: 'Switch language',
    },
    hero: {
      badge: '20 Years of Experience | Data Sense & AI Consulting',
      title: 'We Transform Data into Intelligent Decisions',
      subtitle: 'We help organizations structure, analyze, and integrate advanced analytics and AI solutions to generate measurable competitive advantages.',
      primaryCta: 'Explore Services',
      secondaryCta: 'Contact a Consultant',
    },
    geoBlock: {
      badge: 'Executive Summary | Answer-First',
      title: 'What is Itiers?',
      description: 'Itiers is a consulting firm specializing in data analytics and artificial intelligence. We help organizations structure, analyze, and deploy advanced AI solutions to optimize strategic decision-making.',
    },
    servicesSection: {
      badge: 'Our Specialties',
      title: 'Data & Artificial Intelligence Services',
      subtitle: 'End-to-end data and AI solutions designed to boost your organization’s operational and strategic value.',
      ctaButton: 'Inquire about this service →',
      items: [
        {
          id: 'analitica-avanzada',
          title: 'Advanced Analytics & BI',
          description: 'Design and implementation of self-service executive dashboards, predictive models, and Business Intelligence architectures for strategic visualization.',
          icon: '📊',
          features: [
            'Real-time interactive dashboards',
            'Predictive business behavior models',
            'Strategic KPI visualization',
            'Descriptive and prescriptive analytics'
          ]
        },
        {
          id: 'ingenieria-datos',
          title: 'Data Engineering & Cloud',
          description: 'Scalable data architectures, automated ETL/ELT pipelines, and Cloud Data Warehouse solutions designed to handle large enterprise data volumes.',
          icon: '☁️',
          features: [
            'Robust, automated ETL/ELT pipelines',
            'Cloud Data Lake / Data Warehouse architectures',
            'Enterprise data governance and quality',
            'Multi-system data integration'
          ]
        },
        {
          id: 'ia-agentes',
          title: 'AI Implementation & Agents',
          description: 'Deployment of autonomous intelligent agents, Generative AI models, and customized LLMs integrated into key business processes.',
          icon: '🤖',
          features: [
            'Autonomous AI Agent development',
            'LLM & RAG (Retrieval-Augmented Generation) integration',
            'Automation of complex cognitive processes',
            'Global Technology Partner in AI ecosystems'
          ]
        }
      ]
    },
    casesSection: {
      badge: 'Case Studies',
      title: 'Featured Results and Projects',
      subtitle: 'Real-world cases where we transformed complex data into financial and operational impact.',
      ctaButton: 'View All Cases',
      filterAll: 'All Cases',
      items: [
        {
          id: 'retail-optim',
          title: 'Inventory & Supply Chain Optimization',
          client: 'Leading Supermarket Chain',
          category: 'Advanced Analytics & BI',
          icon: '🛒',
          challenge: 'Constant stockout losses and lack of demand visibility across more than 120 stores.',
          solution: 'Development of a real-time predictive analytics model with executive dashboards connected to supply systems.',
          result: '18% reduction in stockouts and 25% replenishment time optimization.'
        },
        {
          id: 'finanzas-cloud',
          title: 'Multi-Country Financial Data Architecture',
          client: 'Financial Services Corporation',
          category: 'Data Engineering & Cloud',
          icon: '🏦',
          challenge: 'Transactional data fragmentation across 4 countries without real-time consolidation for regulatory reporting.',
          solution: 'Design and deployment of a cloud data warehouse with high-availability automated ETL pipelines.',
          result: 'Processing of +10M daily records with 100% data consistency and a 60% reduction in reporting cycles.'
        },
        {
          id: 'agentes-salud',
          title: 'Healthcare AI Cognitive Assistant',
          client: 'Regional Healthcare Network',
          category: 'AI Implementation & Agents',
          icon: '🏥',
          challenge: 'High saturation in patient service channels and delays in triaging specialized medical inquiries.',
          solution: 'Deployment of conversational AI Agents powered by RAG architecture over structured clinical records.',
          result: '45% automation of recurring inquiries and patient wait time reduced to under 2 minutes.'
        }
      ]
    },
    footer: {
      tagline: 'We refine complex information into strategic intelligence for forward-thinking organizations.',
      quickLinks: 'Navigation',
      servicesTitle: 'Core Services',
      contactTitle: 'Corporate Contact',
      headquarters: 'Headquarters',
      rights: 'All rights reserved.',
      locationMendoza: 'Mendoza, Argentina',
    },
    meta: {
      title: 'Itiers | Data Sense - Data Analytics & Artificial Intelligence Consulting',
      description: 'Itiers is a consulting firm specializing in data analytics and artificial intelligence based in Mendoza, Argentina. We structure and deploy AI solutions for strategic decision-making.',
    }
  }
};
