# Itiers Data Sense — Plataforma Web Corporativa & AI Harness Suite

Bienvenido al repositorio oficial de la plataforma web corporativa de **Itiers Data Sense**.

**Itiers Data Sense** es una consultora tecnológica con más de 20 años de trayectoria dedicada a transformar el caos de datos en decisiones estratégicas de alto impacto. Brindamos acompañamiento 100% personalizado para desbloquear el valor de la información en toda América, con sedes corporativas en **Mendoza (Argentina)**, **Santiago (Chile)** y **Delaware (Estados Unidos)**.

Este desarrollo integra una interfaz web bilingüe moderna y accesible (WCAG AA), arquitectura estática exportada para máximo rendimiento (`output: 'export'`), marcado semántico JSON-LD para SEO/GEO y un motor **AI Harness Engine** basado en el principio _"Agente = Modelo + Harness"_, pensado para permitir la edición de código libre de fricción y con cero mantenibilidad técnica requerida.

---

## Estructura del Equipo y Especialidades

El proyecto fue desarrollado de manera colaborativa integrando tres áreas de especialidad técnica:

1. **Practicante 1 — Contenido, SEO & GEO**: **Martín Tomás**
   - Arquitectura de la información, redacción técnica y comercial bajo el estándar _"answer-first"_.
   - Optimización para motores de búsqueda tradicionales (SEO) y motores generativos de IA (Generative Engine Optimization - GEO).
   - Generación de esquemas de datos estructurados JSON-LD (`ProfessionalService`, sedes multirregionales).

2. **Practicante 2 — Desarrollo Web & UX/UI**: **Enzo Patrassi**
   - Implementación de la arquitectura frontend con Next.js 16 (App Router) y React 19.
   - Configuración de despliegue estático desacoplado (`output: 'export'`) optimizado para GitHub Pages y GoDaddy.
   - Sistema de diseño responsive y fluido con Tailwind CSS v4, tipografías corporativas (_Comfortaa_ y _Nunito_) y modo claro/oscuro.
   - Accesibilidad universal (WCAG AA), navegación por teclado y optimización de Core Web Vitals.

3. **Practicante 3 — Harness & AI Engineering**: **Stefano Ferro**
   - Diseño e integración del motor **AI Harness Engine** y **Desktop Copilot** en Python (`itiers_copilot.py`, `harness_engine.py`, `sdd_harness.py`, `harness_qa.py`, `recommender_harness.py`).
   - Implementación del sistema de **Rollback de Seguridad Automático** y lenguaje amigable de errores.
   - Explorador de archivos interactivo con árbol compacto de carpetas colapsables y caja de chat dinámicamente auto-ajustable.
   - Creación del [Manual de Usuario del Harness](MANUAL-USUARIO-HARNESS.md) con guías paso a paso para la suite de control.

---

## Stack Tecnológico

### Frontend & Core

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) en modo Exportación Estática (`output: 'export'`) con React 19 y TypeScript 5 en modo estricto.
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) con motor CSS `@theme`, soporte completo de variables corporativas (naranja `#ff4f00`, grises de marca) y paleta para modo oscuro (`dark mode`).
- **Tipografías**: Google Fonts integradas (`Comfortaa` para títulos y logomarca, `Nunito` para textos de interfaz).
- **Validación**: [Zod](https://zod.dev/) para guardrails de seguridad y tipado en tiempo de ejecución.
- **Renderizado Markdown**: `react-markdown` para contenido dinámico de respuestas del asistente.

### AI Engineering & Harness

- **AI Harness Engine**: Motor Python desacoplado (`harness_engine.py`) con soporte multimodelo en cascada (Google Gemini 3.5 Flash, Groq, OpenAI, Ollama 3.2 local offline y OpenRouter).
- **Itiers AI Copilot & Desktop UI**: Aplicación de escritorio y servidor web local (`itiers_copilot.py` / `Iniciar-Itiers-Copilot.bat`) con interfaz intuitiva, explorador de archivos compacto, caja de entrada auto-expandible y validación TypeScript sin intervención manual.
- **Preservación de Imports & Componentes Nativos**: Reglas estrictas de IA para evitar la adición de librerías no instaladas y prevenir errores de compilación al crear carruseles, imágenes o tarjetas de estadísticas.
- **SDD Harness**: Pipeline de validación de tareas frente a especificaciones técnicas (`specs/`).
- **Manual de Usuario Dedicado**: Documentación operativa completa en [MANUAL-USUARIO-HARNESS.md](MANUAL-USUARIO-HARNESS.md).

### Infraestructura & Despliegue

- **Alojamiento & Hosting**: GitHub Pages integrado con dominio personalizado en GoDaddy (vía archivo `CNAME`).
- **Auditoría & Calidad**: Suite de verificación propia (`scripts/verify-harness.js`) para compilación estricta, comprobación de esquemas Zod y regla estricta de _Cero Lorem Ipsum_.

---

## Arquitectura del Proyecto (Estructura de Directorios)

```text
itiers-web/
├── app/                        # Rutas y páginas de la aplicación (Next.js App Router)
│   ├── es/                     # Experiencia principal localizada en español
│   │   ├── layout.tsx          # Metadatos específicos y estructura de la landing
│   │   └── page.tsx            # Landing Page interactiva modular de Itiers
│   ├── globals.css             # Estilos globales, variables de color y tokens Tailwind v4
│   ├── layout.tsx              # Root Layout, tipografías (Comfortaa/Nunito) y JSON-LD
│   ├── page.tsx                # Redirección inicial hacia /es
│   ├── robots.ts               # Configuración dinámica de indexación y agentes de IA
│   └── sitemap.ts              # Sitemap XML dinámico multilingüe
├── components/                 # Componentes modulares reutilizables (WCAG AA)
│   ├── Header.tsx              # Barra de navegación, cambio de idioma (ES/EN) y tema
│   ├── Hero.tsx                # Sección principal con propuesta de valor y CTAs
│   ├── IntroSection.tsx        # Presentación institucional y métricas de rendimiento
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
├── itiers_copilot.py           # Aplicación gráfica de escritorio y servidor local de Copilot
├── Iniciar-Itiers-Copilot.bat  # Acceso directo para iniciar Copilot en Windows
├── Iniciar-Itiers-Copilot.vbs  # Lanzador silencioso en segundo plano para Windows
├── harness_qa.py               # Runner de preguntas y respuestas automatizadas
├── sdd_harness.py              # Validador de tareas SDD previas al build
├── recommender_harness.py      # Motor de recomendación inteligente de servicios
├── requirements.txt            # Dependencias de Python para la suite de IA
├── public/                     # Recursos estáticos (logos, isotipos, imágenes corporativas)
├── package.json                # Dependencias, metadatos y scripts npm
├── tsconfig.json               # Configuración de compilación TypeScript estricta
├── next.config.ts              # Optimización y configuración `output: 'export'`
├── MANUAL-USUARIO-HARNESS.md           # Manual de usuario y guía operativa del AI Harness
└── README.md                   # Documentación principal del repositorio
```

---

## Funcionalidades Principales

### 1. Despliegue Estático & Exportación (`output: 'export'`)

- Configurado para generar un build 100% estático descargable en la carpeta `/out`.
- Optimizado para alojarse directamente en **GitHub Pages** y enlazado con el dominio corporativo gestionado en **GoDaddy**.

### 2. Edición sin Fricción para Usuarios No Técnicos

- La interfaz de escritorio de **Itiers Copilot** permite modificar cualquier archivo del sitio utilizando peticiones en español claro (textos, componentes, gráficos, imágenes).
- **Rollback de Seguridad Automático:** Ante cualquier inconveniente en la generación de código, el arnés restaura la versión previa del archivo de manera transparente e informa con un mensaje amigable sin romper la compilación.

### 3. Explorador de Archivos Interactivo & UI Optimizada

- Árbol de carpetas colapsables estilo acordeón para una navegación rápida.
- Caja de entrada de chat que ajusta su altura automáticamente al tamaño del mensaje, con botón de envío independiente y prominente en el margen derecho.

### 4. Internacionalización Bilingüe Completa (ES / EN)

- Soporte nativo para Español e Inglés gestionado mediante el almacén tipado en `data/i18n.ts`.
- Selector de idioma dinámico en el encabezado con detección automática basada en el navegador.

### 5. SEO & GEO Avanzado

- Marcado semántico JSON-LD `ProfessionalService` estructurado para las 3 sedes internacionales (Mendoza, Santiago y Delaware).
- Metadatos dinámicos OpenGraph, Twitter Cards y compatibilidad con rastreadores de IA.

---

## Instalación y Puesta en Marcha

### Prerrequisitos

- [Node.js](https://nodejs.org/) v18.x o superior instalado.
- [Git](https://git-scm.com/) configurado en tu equipo.
- [Python 3.10+](https://www.python.org/) para ejecutar la suite de IA.

### Pasos de Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/EnzoPatrassi/itiers-web.git
   cd itiers-web
   ```

2. **Instalar dependencias del frontend (Node.js):**

   ```bash
   npm install
   ```

3. **Instalar dependencias del AI Harness (Python):**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configurar variables de entorno:**
   Copia el archivo `.env.local.example` como `.env.local` y define tu clave de IA (`GEMINI_API_KEY`, `GROQ_API_KEY` o usa Ollama local sin clave):

   ```bash
   cp .env.local.example .env.local
   ```

5. **Iniciar el servidor web de desarrollo:**

   ```bash
   npm run dev
   ```

   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

6. **Iniciar Itiers AI Copilot (Suite de Escritorio):**
   ```bash
   npm run copilot
   ```
   _(O haz doble clic en `Iniciar-Itiers-Copilot.bat` en Windows. Abrirá automáticamente la interfaz de escritorio en [http://localhost:8765](http://localhost:8765))._

> Para una guía detallada paso a paso sobre el uso del arnés, consulta el [Manual de Usuario del Harness](MANUAL-USUARIO-HARNESS.md).

---

## Scripts Disponibles

El proyecto cuenta con un conjunto de comandos configurados en `package.json`:

| Comando                       | Descripción                                                                                                                                               |
| :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`                 | Inicia el servidor de desarrollo local de Next.js en el puerto 3000.                                                                                      |
| `npm run build`               | Compila la versión estática exportada para producción (`output: 'export'`).                                                                               |
| `npm run start`               | Levanta el servidor de producción compilado localmente.                                                                                                   |
| `npm run lint`                | Ejecuta el análisis estático de código con ESLint.                                                                                                        |
| `npm run verify:harness`      | Ejecuta la suite de verificación estricta: chequeo de tipos TypeScript (`tsc --noEmit`), escaneo de ausencia de Lorem Ipsum y validación de esquemas Zod. |
| `npm run copilot`             | Inicia la aplicación de escritorio de Itiers AI Copilot en `http://localhost:8765`.                                                                       |
| `npm run harness:sdd`         | Ejecuta la verificación de tareas de desarrollo guiado por especificaciones con Python.                                                                   |
| `npm run harness:qa`          | Ejecuta la suite de preguntas y respuestas automatizadas y auditoría de accesibilidad.                                                                    |
| `npm run harness:recommender` | Ejecuta el módulo de recomendación inteligente de servicios de Itiers.                                                                                    |

---

<p align="center">
  <b>Itiers Data Sense</b> — <i>Transformando el caos de datos en decisiones estratégicas.</i><br>
  © 2026 Itiers. Todos los derechos reservados.
</p>
