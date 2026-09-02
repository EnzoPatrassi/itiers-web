// 1. Interfaces para asegurar un tipado estricto (TypeScript)

export interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
  detalles: string[];
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
  sedes: Sede[];
}

// 2. Base de Datos Centralizada de Itiers

export const INFO_ITIERS: InfoCorporativa = {
  nombre: "Itiers | Data Sense",
  trayectoria: "20 años",
  lema: "Refinamos información compleja en inteligencia estratégica para organizaciones.",
  alianzaAI: "Socio Tecnológico Global de IBM Watsonx",
  whatsapp: "+54 9 261 000-0000",
  email: "contacto@itiers.com",
  sedes: [
    {
      pais: "Argentina",
      ciudad: "Mendoza",
      direccion: "Av. Belgrano 1234, Ciudad de Mendoza"
    },
    {
      pais: "Chile",
      ciudad: "Santiago",
      direccion: "Av. Providencia 567, Providencia"
    },
    {
      pais: "Estados Unidos",
      ciudad: "Delaware",
      direccion: "1209 North Orange St, Wilmington"
    }
  ]
};

export const SERVICIOS_ITIERS: Servicio[] = [
  {
    id: "productos",
    titulo: "Productos de Datos",
    descripcion: "Creación y desarrollo de soluciones y productos analíticos a medida de las necesidades específicas de tu organización.",
    icono: "📦",
    detalles: [
      "Desarrollo de Dashboards Inteligentes y de auto-servicio",
      "Herramientas de visualización personalizadas",
      "Modelos predictivos para decisiones de negocio",
      "Estructuración de KPIs clave alineados a objetivos comerciales"
    ]
  },
  {
    id: "proyectos",
    titulo: "Proyectos de Datos",
    descripcion: "Gestión estratégica integral de tus datos, desde la recolección inicial y depuración hasta su transformación en ventajas competitivas.",
    icono: "⚙️",
    detalles: [
      "Ingeniería de datos, pipelines y arquitecturas ETL robustas",
      "Modelado de datos y bases de datos estructuradas",
      "Ciencia de Datos avanzada aplicada a problemas complejos",
      "Gobierno y control de calidad de la información empresarial"
    ]
  },
  {
    id: "staffing",
    titulo: "Staffing de Datos",
    descripcion: "Fortalece tus capacidades integrando talento especializado de alto rendimiento directamente en los equipos internos de tu compañía.",
    icono: "👥",
    detalles: [
      "Ingenieros de Datos experimentados",
      "Analistas de Business Intelligence (BI) estratégicos",
      "Científicos de datos y especialistas en Machine Learning",
      "Garantía de adaptación técnica y cultural inmediata"
    ]
  },
  {
    id: "capacitaciones",
    titulo: "Capacitaciones Especializadas",
    descripcion: "Programas de entrenamiento y workshops a la medida de tu equipo para cerrar brechas analíticas y adoptar una cultura guiada por datos.",
    icono: "🎓",
    detalles: [
      "Capacitación en uso estratégico de IA Generativa",
      "Workshops de visualización y modelado de datos modernos",
      "Alfabetización de datos (Data Literacy) para líderes de negocio",
      "Entrenamientos técnicos adaptados al nivel actual de tu equipo"
    ]
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