# Itiers Data Sense — Plataforma Web Corporativa & AI Harness 🚀

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.4-black?logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-blue?logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Zod Guardrails](https://img.shields.io/badge/Validation-Zod_4.x-3068b7)](https://zod.dev/)
[![WCAG AA](https://img.shields.io/badge/Accessibility-WCAG_AA-green)](#-accesibilidad-wcag-aa-y-performance)
[![Deploy with Vercel](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)](https://vercel.com/)

Bienvenido al repositorio oficial de la plataforma web corporativa de **Itiers Data Sense**.

**Itiers Data Sense** es una consultora tecnológica con más de 20 años de trayectoria dedicada a transformar el caos de datos en decisiones estratégicas de alto impacto. Brindamos acompañamiento 100% personalizado para desbloquear el valor de la información en toda América, con sedes corporativas en **Mendoza (Argentina)**, **Santiago (Chile)** y **Delaware (Estados Unidos)**.

Este desarrollo integra una interfaz web bilingüe moderna y accesible (WCAG AA), arquitectura de datos desacoplada, marcado semántico JSON-LD para SEO/GEO y un motor **AI Harness Engine** basado en el principio *"Agente = Modelo + Harness"*, desarrollado bajo la metodología de **Desarrollo Guiado por Especificaciones (Specification-Driven Development - SDD)**.

---

## 👥 Estructura del Equipo y Especialidades

El proyecto fue desarrollado de manera colaborativa integrando tres áreas de especialidad técnica:

1. **Practicante 1 — Contenido, SEO & GEO**: **Martín Tomás**  
   * Arquitectura de la información, redacción técnica y comercial bajo el estándar *"answer-first"*.
   * Optimización para motores de búsqueda tradicionales (SEO) y motores generativos de IA (Generative Engine Optimization - GEO).
   * Generación de esquemas de datos estructurados JSON-LD (`ProfessionalService`, sedes multirregionales).

2. **Practicante 2 — Desarrollo Web & UX/UI**: **Enzo Patrassi**  
   * Implementación de la arquitectura frontend con Next.js 16 (App Router) y React 19.
   * Sistema de diseño responsive y fluido con Tailwind CSS v4, tipografías corporativas (*Comfortaa* y *Nunito*) y modo claro/oscuro.
   * Accesibilidad universal (WCAG AA), navegación por teclado y optimización de Core Web Vitals.

3. **Practicante 3 — Harness & AI Engineering**: **Stefano Ferro**  
   * Diseño e integración del motor **AI Harness Engine** en Python (`harness_engine.py`, `sdd_harness.py`, `harness_qa.py`, `recommender_harness.py`).
   * Implementación de Guardrails con esquemas Zod (`lib/harness/guardrails.ts`) para validación de datos de entrada, canalización a WhatsApp y feedback.
   * Automatización del ciclo de desarrollo con suites de verificación y desarrollo guiado por especificaciones (SDD).

---

## 🛠️ Stack Tecnológico

### Frontend & Core
* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) con React 19 y TypeScript 5 en modo estricto.
* **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) con motor CSS `@theme`, soporte completo de variables corporativas (naranja `#ff4f00`, grises de marca) y paleta para modo oscuro (`dark mode`).
* **Tipografías**: Google Fonts integradas (`Comfortaa` para títulos y logomarca, `Nunito` para textos de interfaz).
* **Validación**: [Zod 4](https://zod.dev/) para guardrails de seguridad y tipado en tiempo de ejecución.
* **Renderizado Markdown**: `react-markdown` para contenido dinámico de respuestas del asistente.

### AI Engineering & Harness
* **AI Harness Engine**: Motor Python desacoplado (`harness_engine.py`) con soporte multimodelo (Google Gemini, OpenAI, Groq, Ollama 3.2 local, OpenRouter).
* **SDD Harness**: Pipeline de validación de tareas frente a especificaciones técnicas (`specs/`).
* **Chatbot Asistente**: Componente interactivo integrado para consultas corporativas y recomendación de servicios.

### Infraestructura & Despliegue
* **Alojamiento y CI/CD**: [Vercel](https://vercel.com/) con despliegue continuo en la rama `main`.
* **Auditoría & Calidad**: Suite de verificación propia (`scripts/verify-harness.js`) para compilación estricta, comprobación de esquemas Zod y regla estricta de *Cero Lorem Ipsum*.

---

## 📁 Arquitectura del Proyecto (Estructura de Directorios)

```text
itiers-web/
├── app/                        # Rutas y páginas de la aplicación (Next.js App Router)
│   ├── es/                     # Experiencia principal localizada en español
│   │   ├── layout.tsx          # Metadatos específicos y estructura de la landing
│   │   └── page.tsx            # Landing Page interactiva modular de Itiers
│   ├── servicios/              # Ruta dedicada para el catálogo de servicios
│   │   └── page.tsx            # Vista de servicios con ServiceCard accesible
│   ├── globals.css             # Estilos globales, variables de color y tokens Tailwind v4
│   ├── layout.tsx              # Root Layout, tipografías (Comfortaa/Nunito) y JSON-LD
│   ├── page.tsx                # Redirección inicial hacia /es
│   ├── robots.ts               # Configuración dinámica de indexación y agentes de IA
│   └── sitemap.ts              # Sitemap XML dinámico multilingüe
├── components/                 # Componentes modulares reutilizables (WCAG AA)
│   ├── Header.tsx              # Barra de navegación, cambio de idioma (ES/EN) y tema
│   ├── Hero.tsx                # Sección principal con propuesta de valor y CTAs
│   ├── IntroSection.tsx        # Presentación institucional "Data Sense"
│   ├── DataAISection.tsx       # Sector infográfico y ciclo de madurez de datos
│   ├── Services.tsx            # Grid interactivo de las 3 líneas de servicio
│   ├── ServiceCard.tsx         # Tarjeta semántica accesible para servicios (<article>)
│   ├── TechnologySection.tsx   # Carrusel visual de tecnologías y plataformas
│   ├── ImpactCounters.tsx      # Indicadores de trayectoria y proyectos
│   ├── Testimonials.tsx        # Sección de testimonios y validación comercial
│   ├── ClientLogos.tsx         # Muestra de clientes y sectores atendidos
│   ├── ValueProposition.tsx    # Pilares corporativos y filosofía de trabajo
│   ├── TeamSection.tsx         # Equipo profesional y cultura Itiers
│   ├── TeamCarousel.tsx        # Carrusel visual de integrantes y roles
│   ├── ContactSection.tsx      # Formulario de contacto con validación de datos
│   ├── CareersSection.tsx      # Sección de talento y enlace "Trabajá con nosotros"
│   ├── CTASection.tsx          # Bloques de llamada a la acción
│   ├── CtaBanner.tsx           # Banners de conversión hacia WhatsApp y contacto
│   ├── Chatbot.tsx             # Asistente virtual corporativo interactivo
│   ├── JsonLd.tsx              # Inyección de Schema.org ProfessionalService
│   └── Footer.tsx              # Pie de página con información de sedes y contacto
├── data/                       # Contenidos y localización desacoplados del código
│   ├── i18n.ts                 # Diccionario completo bilingüe (ES / EN) y tipos
│   └── mockData.ts             # Almacén de sedes, servicios, testimonios y enlaces
├── lib/
│   └── harness/                # Capa de seguridad y contratos de datos
│       └── guardrails.ts       # Esquemas de validación Zod (Leads, WhatsApp, JSON-LD)
├── specs/                      # Fuente única de verdad (Specification-Driven Development)
│   ├── requirements.md         # Requerimientos funcionales y de contenido
│   ├── design.md               # Sistema de diseño, contrastes y tokens de marca
│   ├── i18n.md                 # Matriz de traducción y paridad lingüística
│   ├── tasks.md                # Lista de tareas y progreso del desarrollo
│   └── history.md              # Registro cronológico de iteraciones e hitos
├── scripts/                    # Scripts de soporte y auditoría del sistema
│   ├── verify-harness.js       # Script Node.js de validación estricta y auditoría
│   └── verify-harness.sh       # Runner bash para integración en CI/CD
├── harness_engine.py           # Motor central del AI Harness Agent
├── harness_qa.py               # Runner de preguntas y respuestas automatizadas
├── sdd_harness.py              # Validador de tareas SDD previas al build
├── recommender_harness.py      # Motor de recomendación inteligente de servicios
├── public/                     # Recursos estáticos (logos, isotipos, favicon)
├── package.json                # Dependencias, metadatos y scripts npm
├── tsconfig.json               # Configuración de compilación TypeScript estricta
├── next.config.ts              # Parámetros y optimizaciones de Next.js
└── README.md                   # Documentación principal del repositorio
```

---

## 🌟 Funcionalidades Principales

### 1. Internacionalización Bilingüe Completa (ES / EN)
* Soporte nativo para Español e Inglés gestionado mediante el almacén tipado en `data/i18n.ts`.
* Selector de idioma dinámico en el encabezado con detección automática basada en el navegador y persistencia de preferencia mediante cookies (`itiers_lang`).

### 2. Modo Oscuro / Modo Claro (Dark & Light Theme)
* Soporte completo de alternancia de tema visual con transición suave.
* Paleta calibrada para garantizar contrastes superiores al estándar WCAG AA en ambos modos, preservando la identidad del naranja Itiers (`#ff4f00`).

### 3. Las Tres Líneas de Servicio Estratégicas
Presentadas de forma estructurada según la especificación en `specs/requirements.md`:
* **Ingeniería de Datos**: Arquitectura de datos moderna, Big Data & Data Engineering, Modern Data Warehouse & Data Lakes, modelos de analítica avanzada e Inteligencia Artificial, evolución y mantenimiento de soluciones BI.
* **Capacitaciones**: Formación práctica en herramientas de BI, interpretación de métricas de negocio, alfabetización digital, Data Storytelling y adopción responsable de IA generativa.
* **Staffing Especializado**: Asignación ágil on-demand de perfiles técnicos calificados (Data Engineers, Data Analysts, Data Scientists, especialistas BI y arquitectos IA) en células dedicadas o modelos por proyecto.

### 4. Asistente Virtual Inteligente (Chatbot)
* Asistente conversacional interactivo integrado en la interfaz.
* Asesora sobre servicios corporativos, orienta a potenciales clientes y canaliza consultas estratégicas hacia el equipo comercial.

### 5. Validación con Guardrails Zod
* Todos los formularios y transferencias de información se validan estrictamente mediante los esquemas de `lib/harness/guardrails.ts`:
  * Validación de leads y mensajes de contacto (`LeadContactSchema`).
  * Validación de canales de WhatsApp con parámetros sanitizados (`WhatsAppChannelSchema`).
  * Validación estructural del marcado Schema.org (`JsonLdSchema`).

### 6. SEO & GEO Avanzado
* Marcado semántico JSON-LD `ProfessionalService` estructurado para las 3 sedes internacionales:
  * **Argentina**: Mendoza (Casa Matriz).
  * **Chile**: Región Metropolitana, Santiago.
  * **Estados Unidos**: Wilmington, Delaware.
* Metadatos dinámicos OpenGraph, Twitter Cards, `robots.ts` adaptado a rastreadores tradicionales y agentes de IA, y `sitemap.ts` multilingüe.

---

## ⚡ Accesibilidad (WCAG AA) y Performance

El desarrollo adhiere de forma obligatoria a los siguientes estándares de calidad:

* **HTML5 Semántico**: Empleo de elementos semánticos precisos (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
* **Navegación por Teclado**: Todo elemento interactivo cuenta con `tabIndex`, estados de foco visual de alto contraste (`focus:ring-2 focus:ring-[#ff4f00]`) y soporte para saltos de contenido accesible.
* **Cero Lorem Ipsum**: Todo texto e información desplegada en el sitio es verídica, aprobada y proviene de las fuentes corporativas documentadas en `specs/`.
* **Optimización de Medios**: Carga optimizada de imágenes mediante `next/image` con atributos estables de dimensiones y textos alternativos descriptivos para evitar saltos de diseño (CLS).

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
* [Node.js](https://nodejs.org/) v18.x o superior instalado.
* [Git](https://git-scm.com/) configurado en tu equipo.
* (Opcional para el módulo AI Harness) [Python 3.10+](https://www.python.org/).

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/EnzoPatrassi/itiers-web.git
   cd itiers-web
   ```

2. **Instalar dependencias del proyecto:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Acceder a la aplicación:**
   Abre tu navegador e ingresa a [http://localhost:3000](http://localhost:3000).

---

## 📜 Scripts Disponibles

El proyecto cuenta con un conjunto de comandos configurados en `package.json`:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local de Next.js en el puerto 3000. |
| `npm run build` | Ejecuta la verificación previa de tareas SDD y compila la versión optimizada para producción. |
| `npm run start` | Levanta el servidor de producción compilado localmente. |
| `npm run lint` | Ejecuta el análisis estático de código con ESLint. |
| `npm run verify:harness` | Ejecuta la suite de verificación estricta: chequeo de tipos TypeScript (`tsc --noEmit`), escaneo de ausencia de Lorem Ipsum y validación de esquemas Zod. |
| `npm run harness:sdd` | Ejecuta la verificación de tareas de desarrollo guiado por especificaciones con Python. |
| `npm run harness:qa` | Ejecuta la suite de preguntas y respuestas automatizadas del agente Harness. |
| `npm run harness:recommender` | Ejecuta el módulo de recomendación inteligente de servicios de Itiers. |

---

## 🛡️ Flujo de Trabajo y Calidad (SDD)

El repositorio sigue la filosofía de **Specification-Driven Development (SDD)**:

1. **Especificación Primero**: Cualquier cambio funcional o de diseño debe registrarse previamente en la carpeta `specs/` (`requirements.md`, `design.md`, `i18n.md`, `tasks.md`).
2. **Chequeo de Tipos y Guardrails**: Antes de cualquier fusión o despliegue, el código debe aprobar `npm run verify:harness` sin emitir errores de TypeScript ni textos no autorizados.
3. **Despliegue Continuo**: Las integraciones aprobadas y fusionadas a la rama principal (`main`) se despliegan automáticamente a producción a través de la infraestructura de **Vercel**.

---

<p align="center">
  <b>Itiers Data Sense</b> — <i>Transformando el caos de datos en decisiones estratégicas.</i><br>
  © 2026 Itiers. Todos los derechos reservados.
</p>
