
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