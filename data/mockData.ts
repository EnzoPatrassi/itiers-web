export interface Servicio {
  id: string;
  icono: string;
  es: {
    titulo: string;
    descripcion: string;
    detalles: string[];
  };
  en: {
    titulo: string;
    descripcion: string;
    detalles: string[];
  };
}

export interface CasoExito {
  id: string;
  titulo: string;
  cliente: string;
  servicioId: string;
  descripcion: string;
  impacto: string;
  icono: string;
}

export interface Testimonio {
  id: string;
  cita: string;
  autor: string;
  empresa: string;
}

export interface Sede {
  pais: string;
  ciudad: string;
  direccion: string;
}

export interface InfoCorporativa {
  nombre: string;
  trayectoria: string;
  lema: string;
  alianzaAI: string;
  whatsapp: string;
  email: string;
  googleFormWorkWithUs?: string;
  sedes: Sede[];
}

export const INFO_ITIERS: InfoCorporativa = {
  nombre: "Itiers | Data Sense",
  trayectoria: "20 años",
  lema: "En Itiers Data Sense convertimos el caos de datos en decisiones estratégicas. Acompañamos a organizaciones líderes a desbloquear el valor de su información con un enfoque 100% personalizado.",
  alianzaAI: "Socio Tecnológico Global de IBM Watsonx",
  whatsapp: "+5492614171612",
  email: "hola@itiers.com",
  googleFormWorkWithUs: "https://docs.google.com/forms/d/e/1FAIpQLSfN5I8_vgDeYfihh_3rPSb1tOVSbf3yUgNWgGD-77aLlLWKbA/viewform?pli=1",
  sedes: [
    { pais: "Argentina", ciudad: "Mendoza", direccion: "Mendoza, Argentina" },
    { pais: "Chile", ciudad: "Santiago", direccion: "Providencia, Santiago de Chile" },
    { pais: "Estados Unidos", ciudad: "Delaware", direccion: "Delaware, USA" }
  ]
};

export const SERVICIOS_ITIERS: Servicio[] = [
  {
    id: "ingenieria-datos",
    icono: "⌁",
    es: {
      titulo: "Ingeniería de Datos",
      descripcion: "Diseñamos e implementamos la arquitectura que convierte tus datos dispersos en activos estratégicos.",
      detalles: [
        "Big Data & Data Engineering: Construcción de pipelines y flujos de datos automatizados, limpios y seguros.",
        "Modern Data Warehouse & Lakes: Centralización y gobierno de datos en la nube para una única fuente de verdad.",
        "Modelos de IA & Analítica Avanzada: Integración de Inteligencia Artificial (predictiva y generativa) para potenciar la toma de decisiones.",
        "Evolución & Mantenimiento de BI: Optimización continua y desarrollo de tableros de control (dashboards) ejecutivos y operativos."
      ]
    },
    en: {
      titulo: "Data Engineering",
      descripcion: "We design and implement the architecture that turns your scattered data into strategic assets.",
      detalles: [
        "Big Data & Data Engineering: Building automated, clean, and secure data pipelines.",
        "Modern Data Warehouse & Lakes: Centralizing and governing cloud data for a single source of truth.",
        "AI Models & Advanced Analytics: Integrating predictive and generative AI to empower decision making.",
        "BI Evolution & Maintenance: Continuous optimization of executive and operational dashboards."
      ]
    }
  },
  {
    id: "ia-automatizaciones",
    icono: "🤖",
    es: {
      titulo: "IA & Automatizaciones",
      descripcion: "Acompañamos a tu empresa a adoptar IA con criterio estratégico. Diseñamos tu hoja de ruta y creamos entornos a medida para hacer más eficiente tu organización.",
      detalles: [
        "Agentes de IA & chatbots de negocio: Asistentes a medida integrados a tus sistemas para automatizar consultas de clientes o equipos y agilizar el análisis de información.",
        "Automatización Inteligente de procesos: Integración de sistemas y orquestación de flujos de trabajo para eliminar tareas repetitivas y operar sin fricciones.",
        "Entornos propios & soluciones de IA a medida: Desarrollo de entornos privados, seguros e integrados a tus datos para que tu organización opere con IA bajando costos y manteniendo el control de su información."
      ]
    },
    en: {
      titulo: "AI & Automations",
      descripcion: "We accompany your company in adopting AI with strategic criteria. We design your roadmap and create custom environments to make your organization more efficient.",
      detalles: [
        "AI Agents & business chatbots: Custom assistants integrated into your systems to automate customer or team queries and streamline information analysis.",
        "Intelligent process automation: System integration and workflow orchestration to eliminate repetitive tasks and operate seamlessly.",
        "Proprietary environments & custom AI solutions: Development of private, secure environments integrated with your data so your organization can operate with AI, lowering costs and maintaining control of its information."
      ]
    }
  },
  {
    id: "capacitaciones",
    icono: "◎",
    es: {
      titulo: "Capacitaciones",
      descripcion: "Nuestros servicios de capacitación están diseñados para fortalecer las habilidades de tu equipo y brindarles las herramientas necesarias para enfrentar los desafíos en el mundo de los datos.",
      detalles: [
        "Formación en Análisis de Datos: Capacitación práctica en herramientas de BI, interpretación de métricas e historia con datos (Data Storytelling).",
        "Adopción de IA para Equipos: Programas de alfabetización digital y uso responsable de IA aplicada a la productividad del negocio."
      ]
    },
    en: {
      titulo: "Trainings",
      descripcion: "Our training services are designed to strengthen your team's skills and provide them with the necessary tools to face challenges in the data world.",
      detalles: [
        "Data Analysis Training: Practical training in BI tools, metric interpretation, and Data Storytelling.",
        "AI Adoption for Teams: Digital literacy programs and responsible use of AI applied to business productivity."
      ]
    }
  },
  {
    id: "staffing",
    icono: "＋",
    es: {
      titulo: "Staffing - Talento especializado para tu equipo",
      descripcion: "El Staffing de Datos es una solución integral que te permite incorporar especialistas en datos calificados y experimentados a tu equipo, brindándote el apoyo y la experiencia que necesitas para alcanzar tus objetivos empresariales.",
      detalles: [
        "Perfiles On-Demand: Data Engineers, Data Analysts, Data Scientists y especialistas en BI o IA.",
        "Integración Ágil: Talento senior listo para sumar valor desde el día uno en la modalidad que tu operación requiera.",
        "Flexibilidad Operativa: Cobertura de trabajo, proyectos específicos o células de desarrollo dedicadas."
      ]
    },
    en: {
      titulo: "Staffing - Specialized talent for your team",
      descripcion: "Data Staffing is a comprehensive solution that allows you to incorporate qualified and experienced data specialists into your team, providing you with the support and expertise you need to achieve your business goals.",
      detalles: [
        "On-Demand Profiles: Data Engineers, Data Analysts, Data Scientists, and BI or AI specialists.",
        "Agile Integration: Senior talent ready to add value from day one in whatever capacity your operation requires.",
        "Operational Flexibility: Work coverage, specific projects, or dedicated development cells."
      ]
    }
  },
  {
    id: "gobernanza-datos",
    icono: "＋",
    es: {
      titulo: "Gobernanza de Datos",
      descripcion: "Diseñamos e implementamos marcos de gobierno de datos que definen políticas, roles, procesos y arquitecturas de seguridad. Mejoramos la calidad, consistencia y trazabilidad de tu información para que tomes decisiones con confianza, reduzcas riesgos y escales con datos preparados para el futuro.",
      detalles: [
        "Calidad de Datos: Información limpia, consistente y lista para usar.",
        "Seguridad y Cumplimiento: Protección avanzada y alineación con normativas vigentes.",
        "Cultura Data-Driven: Roles, responsabilidades y accesos claramente definidos."
      ]
    },
    en: {
      titulo: "Data Governance",
      descripcion: "We design and implement data governance frameworks that define policies, roles, processes, and security architectures. We improve the quality, consistency, and traceability of your information so you can make decisions with confidence, reduce risks, and scale with future-ready data.",
      detalles: [
        "Data Quality: Clean, consistent, and ready-to-use information.",
        "Security and Compliance: Advanced protection and alignment with current regulations.",
        "Data-Driven Culture: Clearly defined roles, responsibilities, and access."
      ]
    }
  },
  {
    id: "diagnostico-consultoria",
    icono: "＋",
    es: {
      titulo: "Diagnóstico y Consultoría",
      descripcion: "Antes de automatizar, escalar o implementar IA, es necesario saber con precisión en qué punto se encuentra tu organización. Realizamos un diagnóstico integral de tus flujos de procesos, datos y arquitectura para entregar una hoja de ruta clara y priorizada. Analizamos el estado actual de tu información, sistemas y operación. Identificamos brechas y riesgos, y devolvemos un plan de acción concreto que te permite enfocar la inversión donde realmente genera valor.",
      detalles: [
        "Diagnóstico integral: Evaluación del estado de tus datos, procesos y sistemas.",
        "Hoja de ruta estratégica: Plan priorizado según impacto y esfuerzo.",
        "Enfoque de inversión: Recursos concentrados solo en lo que genera valor real."
      ]
    },
    en: {
      titulo: "Diagnosis and Consulting",
      descripcion: "Before automating, scaling, or implementing AI, you need to know exactly where your organization stands. We conduct a comprehensive diagnosis of your process flows, data, and architecture to deliver a clear and prioritized roadmap. We analyze the current state of your information, systems, and operations. We identify gaps and risks, and return a concrete action plan that allows you to focus investment where it truly generates value.",
      detalles: [
        "Comprehensive diagnosis: Assessment of the state of your data, processes, and systems.",
        "Strategic roadmap: Prioritized plan based on impact and effort.",
        "Investment focus: Resources concentrated only on what generates real value."
      ]
    }
  }
];

export const CASOS_ITIERS: CasoExito[] = [
  { id: "retail-dashboard", titulo: "Dashboard de Optimización de Stock en Tiempo Real", cliente: "Cadena de Supermercados Líder", servicioId: "productos", descripcion: "Implementamos un producto de datos que conecta los sistemas de inventario con análisis predictivos basados en IBM Watsonx.", impacto: "Reducción del 18% en pérdidas por falta de stock y automatización de reabastecimiento.", icono: "🛒" }
];

export const TESTIMONIOS_ITIERS: Testimonio[] = [
  {
    id: "testimonio-1",
    cita: "Pasamos de tomar decisiones con balances pasados a gestionar el negocio en tiempo real. Lo que marcó la diferencia no fue solo la tecnología, sino tener a nuestro lado a un equipo que responde, acompaña y garantiza que la información impulse nuestro día a día.",
    autor: "Analía de la Rosa - Consultora",
    empresa: "Canal 9"
  },
  {
    id: "testimonio-2",
    cita: "Junto con Itiers pudimos ordenar nuestra información para que todos hablemos el mismo idioma; su gestión empática y asesoramiento nos dieron un partner que construye y acompaña en nuestra transformación.",
    autor: "Alfredo Propsitti",
    empresa: "Enfer"
  },
  {
    id: "testimonio-3",
    cita: "Desde 2015 contamos con el respaldo de Itiers. El acompañamiento técnico y la disposición para trabajar en equipo han sido excelentes, generando un cambio muy significativo en nuestra visibilidad e información desde el primer día.",
    autor: "Nicolas Canto",
    empresa: "Farmacias del Plata"
  }
];