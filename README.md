# Itiers — Nueva Página Web Corporativa 🚀

¡Bienvenido al repositorio oficial del proyecto de desarrollo de la nueva página web corporativa de **Itiers**! 

Itiers es una consultora tecnológica especializada con 20 años de trayectoria, dedicada a transformar información cruda en inteligencia estratégica. Nos posicionamos como el puente entre estructuras de datos complejas y la gestión organizacional efectiva, sirviendo a clientes en toda América (con oficinas en Argentina, Chile y Estados Unidos) a través de productos de datos a medida, consultoría especializada, gestión de proyectos y entrenamiento técnico con herramientas de vanguardia como Inteligencia Artificial Generativa e IBM Watsonx [1].

Este proyecto web está diseñado e implementado por un equipo de 3 practicantes a lo largo de un programa estructurado de 10 semanas (del 18 de agosto al 27 de octubre de 2026) [2], combinando desarrollo moderno, diseño responsivo y optimizaciones de vanguardia para motores de búsqueda tradicionales y basados en IA.

---

## 👥 Estructura del Equipo y Roles

El desarrollo del proyecto se divide en tres áreas de especialidad que colaboran de manera estrecha [2]:

1. **Practicante 1 — Contenido, SEO & GEO**: Responsable de la arquitectura de la información, redacción técnica y comercial bajo el enfoque *"answer-first"*, y de la optimización tanto para motores de búsqueda tradicionales (SEO) como para generadores de respuesta de IA (Generative Engine Optimization - GEO) [2].
2. **Practicante 2 — Desarrollo Web & UX/UI (Tú)**: Encargado de la implementación del código frontend, diseño UX/UI interactivo, responsividad, accesibilidad (WCAG AA), optimización de rendimiento (Core Web Vitals) y automatización del pipeline de despliegue [2].
3. **Practicante 3 — Harness & AI Engineering**: Responsable del diseño y desarrollo de los agentes inteligentes que interactuarán con la web o aportarán valor a los procesos de Itiers bajo la premisa de "Agente = Modelo + Harness" [2].

---

## 🛠️ Stack Tecnológico Seleccionado

* **Framework Frontend**: [Next.js](https://nextjs.org/) (React framework para producción)
* **Estilos**: [Tailwind CSS](https://tailwindcss.com/) (para desarrollo rápido de interfaces responsivas y consistentes)
* **Hosting y Despliegue Continuo (CI/CD)**: [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)
* **Control de Versiones**: Git & GitHub

---

## 📁 Arquitectura del Proyecto (Estructura de Directorios)

```text
itiers-corporate-web/
├── public/              # Archivos públicos estáticos (imágenes, fuentes, logos de Itiers)
├── src/
│   ├── app/             # Rutas y páginas de la aplicación (App Router de Next.js)
│   │   ├── layout.js    # Plantilla de layout global (Navbar y Footer compartidos)
│   │   ├── page.js      # Página de inicio (Landing Page)
│   │   ├── servicios/   # Ruta de la sección de servicios (Consultoría, Data, IA, Capacitación)
│   │   ├── casos/       # Ruta de casos de éxito y credenciales comerciales
│   │   └── contacto/    # Formulario de contacto funcional
│   ├── components/      # Componentes de UI reutilizables y modulares (Button, Card, Form)
│   ├── styles/          # Estilos globales y configuraciones de Tailwind
│   └── utils/           # Utilidades y lógica de ayuda (validadores, conectores de API para IA)
├── tailwind.config.js   # Configuración de diseño de Tailwind CSS
├── jsconfig.json        # Configuración de paths absolutos
├── package.json         # Dependencias y scripts del proyecto
└── README.md            # Este archivo de documentación
```

---

## 🚀 Empezando en Local

Sigue estos pasos para levantar el entorno de desarrollo localmente:

### Prerrequisitos
* Tener instalado [Node.js](https://nodejs.org/) (versión 18.x o superior recomendada).
* Tener instalado Git en tu máquina local.

### Instalación
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/itiers-web.git
   cd itiers-web
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Ver el sitio localmente:**
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación funcionando.

---

## ⚙️ Flujo de Trabajo en Git

Para asegurar un desarrollo ordenado y evitar conflictos al fusionar cambios, seguiremos las siguientes directrices de ramas:

* `main` / `master`: Contiene únicamente código estable que está en producción. Nunca se empuja directamente a esta rama.
* `develop`: Rama de integración donde se consolidan las funcionalidades probadas antes de pasar a producción.
* `feature/nombre-de-feature`: Ramas individuales creadas para el desarrollo de tareas específicas (ej. `feature/formulario-contacto`, `feature/maquetacion-landing`). Se integran a `develop` mediante Pull Requests evaluados por el equipo.

---

## ⚡ Estándares de Performance y Accesibilidad (Metas del Proyecto)

Para alinearnos con las directrices de calidad de Itiers, todo componente que agregues al repositorio debe cumplir con:

### ♿ Accesibilidad (WCAG AA)
* **HTML Semántico**: Usa elementos de estructura nativos (`<nav>`, `<main>`, `<section>`, `<footer>`) para permitir que las tecnologías asistenciales y los rastreadores GEO de IA comprendan la jerarquía de la información.
* **Foco y Teclado**: Todo botón, enlace y entrada de formulario debe tener un estado `:focus` claro y visible, y permitir navegación secuencial mediante la tecla Tab.
* **Textos Alternativos**: Todas las imágenes de contenido deben incluir un atributo `alt` descriptivo.

### ⚡ Rendimiento (Core Web Vitals)
* **Optimización de Recursos**: Utilizar el componente `<Image />` de Next.js para compresión automática y carga diferida (*lazy loading*) de imágenes debajo del primer scroll (*below the fold*).
* **Fuentes y Layout Shifts**: Evitar saltos de contenido definiendo dimensiones estables para contenedores multimedia y tipografías que eviten el Cumulative Layout Shift (CLS).

---

## 🗓️ Cronograma General de Entregas (10 Semanas) [2]

* **Semanas 1-3 — Fundamentos y Diagnóstico**: Alineación técnica, definición del stack, creación de este repositorio y diseño de la arquitectura básica de la web [2].
* **Semanas 4-8 — Desarrollo Aplicado**: Construcción iterativa de las secciones (Landing page, Servicios, Casos, Contacto) e integración inicial del puente para los agentes del Practicante 3 [2].
* **Semanas 9-10 — Ajustes Finales y Producción**: Pruebas integrales de accesibilidad y velocidad, optimizaciones SEO/GEO de contenido, y despliegue final en producción [2].
