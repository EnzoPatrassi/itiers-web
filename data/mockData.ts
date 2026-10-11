// 1. Interfaces para asegurar un tipado estricto (TypeScript)

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

// 2. Base de Datos Centralizada de Itiers

export const INFO_ITIERS: InfoCorporativa = {
  nombre: "Itiers | Data Sense",
  trayectoria: "20 años",
  lema: "En Itiers Data Sense convertimos el caos de datos en decisiones estratégicas. Acompañamos a organizaciones líderes a desbloquear el valor de su información con un enfoque 100% personalizado.",
  alianzaAI: "Socio Tecnológico Global de IBM Watsonx",
  whatsapp: "+5492614171612",
  email: "hola@itiers.com",
  googleFormWorkWithUs: "https://docs.google.com/forms/d/e/1FAIpQLSfN5I8_vgDeYfihh_3rPSb1tOVSbf3yUgNWgGD-77aLlLWKbA/viewform?pli=1",
  sedes: [
    {
      pais: "Argentina",
      ciudad: "Mendoza",
      direccion: "Mendoza, Argentina"
    },
    {
      pais: "Chile",
      ciudad: "Santiago",
      direccion: "Providencia, Santiago de Chile"
    },
    {
      pais: "Estados Unidos",
      ciudad: "Delaware",
      direccion: "Delaware, USA"
    }
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
        "Modelos de IA & Analítica Avanzada: Integración de inteligencia artificial predictiva y generativa para potenciar la toma de decisiones.",
        "Evolución & Mantenimiento de BI: Optimización continua y desarrollo de tableros de control ejecutivos y operativos."
      ]
    },
    en: {
      titulo: "Data Engineering",
      descripcion: "We design and implement the architecture that turns your scattered data into strategic assets.",
      detalles: [
        "Big Data & Data Engineering: Building automated, clean, and secure data pipelines and flows.",
        "Modern Data Warehouse & Lakes: Centralizing and governing cloud data to create a single source of truth.",
        "AI Models & Advanced Analytics: Integrating predictive and generative AI to support decision-making.",
        "BI Evolution & Maintenance: Ongoing optimization and development of executive and operational dashboards."
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
      titulo: "Training",
      descripcion: "Our training services strengthen your team's skills and give them the tools to face challenges in the world of data.",
      detalles: [
        "Data Analytics Training: Practical training in BI tools, metric interpretation, and Data Storytelling.",
        "AI Adoption for Teams: Digital literacy programs and responsible use of AI for business productivity."
      ]
    }
  },
  {
    id: "staffing",
    icono: "＋",
    es: {
      titulo: "Staffing de Datos",
      descripcion: "El Staffing de Datos te permite incorporar especialistas calificados y experimentados a tu equipo para acompañar proyectos de datos y alcanzar tus objetivos empresariales.",
      detalles: [
        "Perfiles On-Demand: Data Engineers, Data Analysts, Data Scientists y especialistas en BI o IA.",
        "Integración Ágil: Talento senior listo para sumar valor desde el día uno en la modalidad que tu operación requiera.",
        "Flexibilidad Operativa: Cobertura de trabajo, proyectos específicos o células de desarrollo dedicadas."
      ]
    },
    en: {
      titulo: "Data Staffing",
      descripcion: "Data Staffing lets you add qualified, experienced data specialists to your team to support data projects and help achieve your business goals.",
      detalles: [
        "On-Demand Profiles: Data Engineers, Data Analysts, Data Scientists, and BI or AI specialists.",
        "Agile Integration: Senior talent ready to contribute from day one in the model your operations require.",
        "Operational Flexibility: Ongoing coverage, specific projects, or dedicated development teams."
      ]
    }
  }
];

export const CASOS_ITIERS: CasoExito[] = [
  {
    id: "retail-dashboard",
    titulo: "Dashboard de Optimización de Stock en Tiempo Real",
    cliente: "Cadena de Supermercados Líder",
    servicioId: "productos",
    descripcion: "Implementamos un producto de datos que conecta los sistemas de inventario con análisis predictivos basados en IBM Watsonx.",
    impacto: "Reducción del 18% en pérdidas por falta de stock y automatización de reabastecimiento.",
    icono: "🛒"
  },
  {
    id: "pipeline-finanzas",
    titulo: "Pipeline de Integración de Datos Financieros Multi-País",
    cliente: "Corporación de Servicios de Pago",
    servicioId: "proyectos",
    descripcion: "Diseñamos una arquitectura ETL automatizada y robusta para recolectar e interpretar transacciones complejas en tiempo real.",
    impacto: "Procesamiento diario de más de 10 millones de registros con cero errores de consistencia.",
    icono: "🏦"
  },
  {
    id: "staff-salud",
    titulo: "Célula Ágil de Machine Learning para Diagnóstico Médico",
    cliente: "Red de Clínicas Regional",
    servicioId: "staffing",
    descripcion: "Integramos de inmediato ingenieros de datos y científicos de datos expertos en el equipo de innovación tecnológica del cliente.",
    impacto: "Aceleración de 6 meses en el lanzamiento de su plataforma de predicción de tendencias de salud.",
    icono: "🏥"
  },
  {
    id: "training-banca",
    titulo: "Workshop de Data Literacy para Directores de Banca",
    cliente: "Banco Privado de Inversiones",
    servicioId: "capacitaciones",
    descripcion: "Dictamos un programa especializado de capacitación en interpretación de datos y uso estratégico de IA Generativa para la toma de decisiones corporativas.",
    impacto: "Capacitación de 45 ejecutivos clave, impulsando 5 nuevos proyectos de automatización interna.",
    icono: "📈"
  }
];