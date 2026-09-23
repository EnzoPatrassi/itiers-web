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
    inicio: { title: string; description: string };
    servicios: { title: string; description: string };
    nosotros: { title: string; description: string };
    contacto: { title: string; description: string };
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
      title: '20 años de maestría en datos evolucionados hacia la Ingeniería de Arneses.',
      subtitle: 'Transformamos el potencial de su organización mediante el análisis estratégico y la orquestación de agentes de IA. No construimos chatbots que hablan; diseñamos agentes que producen resultados determinísticos.',
      primaryCta: 'Descubre nuestra metodología SDD',
      secondaryCta: 'Agenda una consultoría técnica',
    },
    geoBlock: {
      badge: 'Resumen Ejecutivo | Answer-First',
      title: '¿Qué es Itiers?',
      description: 'Itiers es una consultora especializada en analítica de datos e inteligencia artificial. Ayudamos a organizaciones a estructurar, analizar e integrar soluciones avanzadas de IA para optimizar la toma de decisiones estratégicas.',
    },
    servicesSection: {
      badge: 'Nuestras Especialidades',
      title: 'Consultoría de Datos y Data Products',
      subtitle: 'Ingeniería avanzada: RAG con Embeddings, MCP y Data Products para escala global.',
      ctaButton: 'Consultar por este servicio →',
      items: [
        {
          id: 'productos',
          title: 'Productos de Datos',
          description: 'Data Products by Itiers son activos analíticos integrales que transforman datos crudos fragmentados en inteligencia de negocio organizada, accionable y lista para la planeación de gestión competitiva.',
          icon: '📦',
          features: [
            'Automatización del ciclo de vida del dato',
            'Diferencial competitivo mediante interpretación directa',
            'Anticipación proactiva a las demandas del mercado'
          ]
        },
        {
          id: 'proyectos',
          title: 'Proyectos de Datos',
          description: 'Data Projects son implementaciones de ingeniería avanzada que integran arquitecturas RAG con Embeddings y el protocolo MCP (Model Context Protocol) para que la IA interactúe de forma segura con sus herramientas locales y bases de datos corporativas.',
          icon: '⚙️',
          features: [
            'Reducción de errores mediante MCP',
            'Arquitecturas robustas sin degradación de contexto',
            'Implementación de modelos líderes (IBM Watsonx, OpenAI)'
          ]
        },
        {
          id: 'staffing',
          title: 'Staffing de Datos',
          description: 'Data Staffing es el suministro de talento técnico especializado en ingeniería de datos e IA, capaz de integrar capacidades de automatización directamente en los equipos internos de su organización.',
          icon: '👥',
          features: [
            'Gestión de ciclos de vida de datos',
            'Escalabilidad técnica sin fricción operativa',
            'Células ágiles de trabajo en IA'
          ]
        },
        {
          id: 'capacitaciones',
          title: 'Capacitaciones',
          description: 'Capacitaciones Itiers son programas de formación profesional diseñados para eliminar el "VibeCoding" mediante la enseñanza de metodologías rigurosas como Spec-Driven Development (SDD) y el bucle RPL (Read-Eval-Print-Loop).',
          icon: '🎓',
          features: [
            'Dominio técnico de ventana de contexto',
            'Flujos TDD asistidos por IA',
            'Formación en Loop Engineering'
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
      inicio: { 
        title: 'Itiers: IA Generativa e IBM Watsonx', 
        description: 'Liderando la ingeniería de datos y la IA Generativa con 20 años de maestría técnica.' 
      },
      servicios: { 
        title: 'Consultoría de Datos y Data Products', 
        description: 'Ingeniería avanzada: RAG con Embeddings, MCP y Data Products para escala global.' 
      },
      nosotros: { 
        title: 'Expertos en Productos de Datos e IA', 
        description: 'De la consultoría tradicional a la analítica avanzada e IA Generativa: liderando la transformación de datos.' 
      },
      contacto: { 
        title: 'Sedes Globales y Consultoría Técnica', 
        description: 'Contacto estratégico en Argentina, Chile y USA. Cumplimiento normativo internacional.' 
      }
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
      badge: '20 Years of Experience | Data Sense & AI Consulting', // <- Traducido al inglés
      title: '20 Years of Data Mastery Meets the Future of AI & Data Engineering.', // <- Traducido al inglés
      subtitle: 'We transform your organization’s potential through strategic analysis and AI agent orchestration. We don’t build chatbots that talk; we design agents that deliver deterministic results.', // <- Traducido al inglés[cite: 11]
      primaryCta: 'Explore our SDD Methodology',
      secondaryCta: 'Schedule a Technical Consultation',
    },
    geoBlock: {
      badge: 'Executive Summary | Answer-First',
      title: 'What is Itiers?',
      description: 'Itiers is a consulting firm specializing in data analytics and artificial intelligence. We help organizations structure, analyze, and deploy advanced AI solutions to optimize strategic decision-making.',
    },
    servicesSection: {
      badge: 'Our Specialties',
      title: 'Data Consulting and Data Products',
      subtitle: 'Advanced Engineering: RAG with Embeddings, MCP, and Data Products at scale.',
      ctaButton: 'Inquire about this service →',
      items: [
        {
          id: 'productos',
          title: 'Data Products',
          description: 'Data Products by Itiers are comprehensive analytical assets that transform fragmented raw data into organized, actionable business intelligence ready for competitive management planning.',
          icon: '📦',
          features: [
            'Automation of the data lifecycle',
            'Competitive advantage through direct interpretation',
            'Proactive anticipation of market demands'
          ]
        },
        {
          id: 'proyectos',
          title: 'Data Projects',
          description: 'Data Projects are advanced engineering implementations that integrate RAG architectures with Embeddings and the MCP (Model Context Protocol) so AI can securely interact with your local tools and corporate databases.',
          icon: '⚙️',
          features: [
            'Error reduction through MCP',
            'Robust architectures without context degradation',
            'Implementation of leading models (IBM Watsonx, OpenAI)'
          ]
        },
        {
          id: 'staffing',
          title: 'Data Staffing',
          description: 'Data Staffing is the provision of specialized technical talent in data engineering and AI, capable of integrating automation capabilities directly into your organization\'s internal teams.',
          icon: '👥',
          features: [
            'Data lifecycle management',
            'Technical scalability without operational friction',
            'Agile AI work cells'
          ]
        },
        {
          id: 'capacitaciones',
          title: 'Training',
          description: 'Itiers Training are professional programs designed to eliminate "VibeCoding" by teaching rigorous methodologies such as Spec-Driven Development (SDD) and the RPL (Read-Eval-Print-Loop).',
          icon: '🎓',
          features: [
            'Technical mastery of context windows',
            'AI-assisted TDD workflows',
            'Loop Engineering training'
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
      inicio: { 
        title: 'Itiers: Generative AI & IBM Watsonx', 
        description: 'Leading Data Engineering and GenAI with 20 years of technical mastery.' 
      },
      servicios: { 
        title: 'Data Consulting and Data Products', 
        description: 'Advanced Engineering: RAG with Embeddings, MCP, and Data Products at scale.' 
      },
      nosotros: { 
        title: 'Data & AI Engineering Experts', 
        description: 'From traditional consulting to Data Engineering and AI: leading data-driven transformation.' 
      },
      contacto: { 
        title: 'Global Offices & Technical Consulting', 
        description: 'Strategic contact in Argentina, Chile, and USA. International compliance.' 
      }
    }
  }
};