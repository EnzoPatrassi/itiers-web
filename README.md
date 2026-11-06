# Itiers — Nueva Página Web Corporativa

¡Bienvenido al repositorio oficial del proyecto de desarrollo de la nueva página web corporativa de **Itiers**! 

Itiers es una consultora tecnológica especializada con 20 años de trayectoria, dedicada a transformar información cruda en inteligencia estratégica. Nos posicionamos como el puente entre estructuras de datos complejas y la gestión organizacional efectiva, sirviendo a clientes en toda América (con oficinas físicas en Argentina, Chile y Estados Unidos) a través de un modelo de servicio integral que abarca desde productos de datos a medida, gestión de proyectos y staffing profesional, hasta capacitación especializada en tecnologías avanzadas e Inteligencia Artificial Generativa con IBM Watsonx.

Este proyecto web está diseñado e implementado por nuestro equipo de 3 practicantes a lo largo de un programa de entrenamiento e integración estructurado de 10 semanas (del 18 de agosto al 27 de octubre de 2026), combinando desarrollo moderno de alto rendimiento, diseño responsivo y optimizaciones de vanguardia para motores de búsqueda tradicionales y basados en IA.

---

## Estructura del Equipo y Roles

El desarrollo del proyecto se divide en tres áreas de especialidad que colaboran de manera estrecha:

1. **Practicante 1 — Contenido, SEO & GEO**: **Martín Tomás**  
   * *Responsabilidad:* Arquitectura de la información, redacción técnica y comercial bajo el enfoque *"answer-first"*, y optimización tanto para motores de búsqueda tradicionales (SEO) como para generadores de respuesta y agentes de IA (Generative Engine Optimization - GEO).
2. **Practicante 2 — Desarrollo Web & UX/UI**: **Enzo Patrassi**  
   * *Responsabilidad:* Implementación del código frontend interactivo, diseño UX/UI accesible (WCAG AA), responsividad multidispositivo, optimización del rendimiento web (Core Web Vitals) y automatización del pipeline de despliegue continuo.
3. **Practicante 3 — Harness & AI Engineering**: **Stefano Ferro**  
   * *Responsabilidad:* Diseño y desarrollo de los agentes inteligentes que interactúan con la web o aportan valor a los procesos de Itiers bajo la premisa "Agente = Modelo + Harness".

---

## Stack Tecnológico Seleccionado

* **Framework Frontend**: [Next.js 16](https://nextjs.org/) (React 19 framework optimizado con TypeScript 5)
* **Estilos y Animaciones**: [Tailwind CSS v4](https://tailwindcss.com/) (motor nativo para desarrollo responsivo rápido e interacciones fluidas)
* **Validación y Guardrails**: [Zod](https://zod.dev/) (esquemas estrictos para runtime safety)
* **Hosting y Despliegue Continuo (CI/CD)**: [Vercel](https://vercel.com/) (sincronizado con nuestra rama principal)
* **Control de Versiones y Repositorio**: Git & GitHub

---

## Arquitectura del Proyecto (Estructura de Directorios)

```text
itiers-web/
├── app/                    # Rutas y páginas de la aplicación (App Router de Next.js)
│   ├── es/                 # Landing page principal corporativa (Español)
│   ├── servicios/          # Catálogo detallado de las 4 verticales de negocio
│   ├── layout.tsx          # Estructura e inyección global (con metadatos SEO)
│   └── page.tsx            # Redirección regional automática
├── components/             # Componentes modulares reutilizables
│   ├── Header.tsx          # Navegación y selector de idioma/tema
│   ├── Hero.tsx            # Portada principal con llamadas a la acción
│   ├── Chatbot.tsx         # Integración interactiva de WhatsApp con guardrails
│   ├── Footer.tsx          # Pie de página corporativo bilingüe y sedes
│   └── ...                 # Componentes visuales adicionales (MetricCard, Services, etc.)
├── data/                   # Información corporativa y diccionarios i18n
│   ├── i18n.ts             # Diccionarios bilingües (Español / Inglés)
│   └── mockData.ts         # Datos estáticos oficiales de Itiers Data Sense
├── lib/
│   └── harness/
│       └── guardrails.ts   # Esquemas de validación Zod (WhatsApp, Contact, Schema.org)
├── specs/                  # Fuente de verdad: especificaciones funcionales y de diseño
│   ├── requirements.md     # Requerimientos de negocio
│   ├── design.md           # Manual de marca y tokens de diseño
│   └── tasks.md            # Planificación y tareas SDD
├── harness_engine.py       # Motor principal de arnés, validación TypeScript y fallback LLM
├── itiers_copilot.py       # Interfaz gráfica de escritorio de Itiers Copilot
├── .env.local              # Archivo local de variables de entorno y API Keys
├── package.json            # Dependencias, scripts del entorno y metadatos
└── README.md               # Documentación principal del repositorio
```

---

## Empezando en Local

Sigue estos pasos para configurar y levantar el proyecto y la suite de Harness en tu equipo:

### Prerrequisitos
* **Node.js** (v18.x o superior recomendada).
* **Python** (v3.10 o superior) con dependencias instaladas (`google-genai`, `openai`).
* Git configurado en tu máquina local.

### Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ITiers/itiers-landing.git
   cd itiers-web
   ```

2. **Instalar dependencias de Node.js:**
   ```bash
   npm install
   ```

3. **Instalar dependencias de Python para el Harness:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configurar el archivo de entorno `.env.local`:**
   Copia el archivo de plantilla `.env.local.example` a `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
   Agrega tu clave API de Google Gemini en la variable `GEMINI_API_KEY`:
   ```env
   GEMINI_API_KEY=tu_clave_real_aqui
   ```

5. **Iniciar el servidor de desarrollo de Next.js:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000] en tu navegador para ver la web en vivo.

6. **Lanzar la interfaz gráfica de Itiers Copilot:**
   En una terminal paralela ejecuta:
   ```bash
   npm run copilot
   ```
   O bien: `python itiers_copilot.py`.

---

## Estándares de Performance y Accesibilidad (Metas del Proyecto)

Todos los componentes del proyecto deben cumplir estrictamente con los siguientes lineamientos:

### Accesibilidad (WCAG AA)
* **HTML Semántico**: Uso de etiquetas de HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) para optimizar tecnologías asistenciales y rastreadores de IA.
* **Foco y Navegación por Teclado**: Estados de foco claramente visibles (`focus:ring-2`) para botones, enlaces y campos de formulario.
* **Textos Alternativos y Atributos ARIA**: Descripciones detalladas en imágenes y etiquetas `aria-*` en elementos interactivos.

### Rendimiento (Core Web Vitals)
* **Next.js Image Optimization**: Carga optimizada de imágenes con propiedades `fill` o `width/height` declaradas explícitamente.
* **Animaciones Fluida**: Transiciones ligeras en Tailwind CSS v4 diseñadas para evitar brincos de maquetación (CLS).

---

## Suite de Harness & AI Engineering

Bajo la premisa **"Agente = Modelo + Harness"**, el Harness actúa como la infraestructura de control, validación determinista, auditoría continua de calidad y soporte agéntico para todo el equipo.

### Pilares del Harness de Itiers

1. **Runtime Safety & Guardrails (Zod)**:
   * Esquemas estrictos en `lib/harness/guardrails.ts`.
   * Validación automática en runtime de formularios, enlaces a WhatsApp y marcado estructurado JSON-LD Schema.org.

2. **Spec-Driven Development (SDD) & Pre-Build Gate**:
   * Motor de validación (`sdd_harness.py`) conectado al ciclo de build (`npm run build`).
   * Valida la sincronización con las especificaciones (`specs/`) y evita que lleguen discrepancias o textos de prueba a producción.

3. **AI QA & Compliance Auditor**:
   * Auditoría automatizada (`harness_qa.py` y `harness_engine.py`) con soporte multi-proveedor: Google Gemini 3.5 Flash, Groq, OpenAI y Ollama local.
   * Chequeos de accesibilidad WCAG AA, auditoría SEO/GEO y verificación estricta de "Cero Lorem Ipsum".

4. **Gestión de Modos de Operación**:
   * **Modo Consulta (Sólo Lectura)**: Permite analizar código y realizar preguntas sobre componentes sin riesgo de alterarlos.
   * **Modo Edición (Escritura Activa)**: Permite la creación y modificación directa de código con auto-guardado, verificación estricta de TypeScript (`npx tsc --noEmit`) y rollback de seguridad automático.

---

### Tabla de Scripts de Verificación del Harness

| Comando | Función |
| :--- | :--- |
| `npm run verify:harness` | Ejecuta la suite de verificación estricta: TypeScript (`tsc --noEmit`), Cero Lorem Ipsum y Guardrails Zod. |
| `npm run harness:sdd` | Audita el cumplimiento de especificaciones y tareas pendientes (Spec-Driven Development). |
| `npm run harness:qa` | Ejecuta la auditoría automatizada de accesibilidad, calidad y SEO/GEO en los componentes. |
| `npm run harness:recommender` | Genera recomendaciones arquitectónicas y estratégicas para el proyecto. |
| `npm run copilot` | Inicia la interfaz gráfica de escritorio de Itiers Copilot (`http://localhost:8765`). |
| `python harness_engine.py` | Inicia la CLI interactiva del Harness Agent Engine (`/auditar`, `/reparar`, `/geo`, `/sdd`, `/deshacer`). |

---

## Cronograma de Entregas y Objetivos Generales

* **Semanas 1-3 — Fundamentos y Diagnóstico**: Alineación de equipo, definición de stack técnico, maquetación de la arquitectura y despliegue inicial en Vercel.
* **Semanas 4-8 — Desarrollo Aplicado**: Construcción iterativa de vistas detalladas, optimizaciones y desarrollo de integraciones para los agentes inteligentes.
* **Semanas 9-10 — Ajustes Finales y Producción**: Auditorías completas de velocidad y accesibilidad, refinamiento de contenidos SEO/GEO y entrega oficial del sitio.

---

<p align="center">
  <b>Itiers Data Sense — Plataforma Web Corporativa & AI Harness Suite</b><br>
  <i>20 Años de Maestría convirtiendo datos complejos en decisiones estratégicas.</i><br>
  © 2026 Itiers Data Sense. Todos los derechos reservados.
</p>