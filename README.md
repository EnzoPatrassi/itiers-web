# Itiers — Nueva Página Web Corporativa 🚀

¡Bienvenido al repositorio oficial del proyecto de desarrollo de la nueva página web corporativa de **Itiers**! 

Itiers es una consultora tecnológica especializada con 20 años de trayectoria, dedicada a transformar información cruda en inteligencia estratégica [1]. Nos posicionamos como el puente entre estructuras de datos complejas y la gestión organizacional efectiva, sirviendo a clientes en toda América (con oficinas físicas en Argentina, Chile y Estados Unidos) a través de un modelo de servicio integral que abarca desde productos de datos a medida, gestión de proyectos y staffing profesional, hasta capacitación especializada en tecnologías avanzadas e Inteligencia Artificial Generativa con IBM Watsonx [1].

Este proyecto web está diseñado e implementado por nuestro equipo de 3 practicantes a lo largo de un programa de entrenamiento e integración estructurado de 10 semanas (del 18 de agosto al 27 de octubre de 2026) [2], combinando desarrollo moderno de alto rendimiento, diseño responsivo y optimizaciones de vanguardia para motores de búsqueda tradicionales y basados en IA.

---

## 👥 Estructura del Equipo y Roles

El desarrollo del proyecto se divide en tres áreas de especialidad que colaboran de manera estrecha [2]:

1. **Practicante 1 — Contenido, SEO & GEO**: **Martín Tomás**  
   * *Responsabilidad:* Arquitectura de la información, redacción técnica y comercial bajo el enfoque *"answer-first"*, y optimización tanto para motores de búsqueda tradicionales (SEO) como para generadores de respuesta y agentes de IA (Generative Engine Optimization - GEO) [2].
2. **Practicante 2 — Desarrollo Web & UX/UI**: **Enzo Patrassi**  
   * *Responsabilidad:* Implementación del código frontend interactivo, diseño UX/UI accesible (WCAG AA), responsividad multidispositivo, optimización del rendimiento web (Core Web Vitals) y automatización del pipeline de despliegue continuo [2].
3. **Practicante 3 — Harness & AI Engineering**: **Stefano Ferro**  
   * *Responsabilidad:* Diseño y desarrollo de los agentes inteligentes que interactúan con la web o aportan valor a los procesos de Itiers bajo la premisa "Agente = Modelo + Harness" [2].

---

## 🛠️ Stack Tecnológico Seleccionado

* **Framework Frontend**: [Next.js](https://nextjs.org/) (React framework optimizado con TypeScript)
* **Estilos y Animaciones**: [Tailwind CSS v4](https://tailwindcss.com/) (motor nativo para desarrollo responsivo rápido e interacciones fluidas)
* **Hosting y Despliegue Continuo (CI/CD)**: [Vercel](https://vercel.com/) (sincronizado con nuestra rama principal)
* **Control de Versiones y Repositorio**: Git & GitHub

---

## 📁 Arquitectura del Proyecto (Estructura de Directorios)

```text
itiers-web/
├── public/                 # Archivos estáticos (logos oficiales, imágenes, iconos)
├── src/
│   ├── app/                # Rutas y páginas de la aplicación (App Router de Next.js)
│   │   ├── layout.tsx      # Estructura e inyección global de Navbar y Footer (con metadatos SEO)
│   │   ├── page.tsx        # Página de inicio animada (Landing Page de Itiers)
│   │   ├── nosotros/       # Ruta de la sección de identidad corporativa y sedes internacionales
│   │   ├── que-hacemos/    # Ruta de la metodología del ciclo de vida de los datos
│   │   ├── soluciones/     # Ruta de pilares de solución comercial (Enterprise AI, Cloud, BI)
│   │   ├── servicios/      # Ruta de servicios en cuadrícula dinámica (Productos, Proyectos, Staffing, Capacitación)
│   │   ├── casos/          # Ruta interactiva de casos de éxito filtrables
│   │   ├── contacto/       # Formulario interactivo con validación de datos en cliente
│   │   └── globals.css     # Estilos globales y registro de animaciones Tailwind v4 (@theme)
│   ├── components/         # Componentes modulares reutilizables
│   │   ├── Navbar.tsx      # Barra de navegación accesible
│   │   └── Footer.tsx      # Pie de página con información de sedes
│   └── data/               # Base de datos simulada para desacoplar contenido de código visual
│       └── mockData.ts     # Almacén central de información corporativa, servicios y casos de éxito
├── package.json            # Dependencias, scripts del entorno de desarrollo y metadatos de npm
├── next.config.ts          # Configuración específica de compilación del framework
└── README.md               # Este archivo de documentación
```

---

## 🚀 Empezando en Local

Sigue estos pasos para configurar y levantar el servidor de desarrollo en tu computadora:

### Prerrequisitos
* Tener instalado [Node.js](https://nodejs.org/) (versión 18.x o superior recomendada).
* Tener instalado Git en tu máquina local.

### Instalación
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/EnzoPatrassi/itiers-web.git
   cd itiers-web
   ```

2. **Instalar dependencias de npm:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```

4. **Ver el sitio localmente:**
   Abre tu navegador e ingresa a [http://localhost:3000](http://localhost:3000). ¡El servidor compilará los cambios en tiempo real!

---

## ⚙️ Flujo de Trabajo y Colaboración en Git

Para trabajar en perfecta sincronía, estructuraremos nuestro único repositorio de GitHub de la siguiente manera:

* **Rama `main`**: Contiene únicamente el código estable listo para el cliente final. Está directamente vinculada a **Vercel** para despliegues de producción automáticos. Nunca se empuja directamente a esta rama.
* **Rama `develop`**: Rama de integración donde consolidaremos y probaremos las funcionalidades del equipo antes de fusionarlas a la rama estable.
* **Ramas de funcionalidad (`feature/`)**: Cada integrante creará ramas específicas para desarrollar sus tareas individuales (ej. `feature/contenido-mockdata`, `feature/contacto-validacion`). Se integrarán a `develop` mediante Pull Requests que revisaremos en conjunto.

---

## ⚡ Estándares de Performance y Accesibilidad (Metas del Proyecto)

Para alinearnos con los estrictos estándares de Itiers, todos los componentes implementados en el proyecto deben cumplir con:

### ♿ Accesibilidad (WCAG AA)
* **HTML Semántico**: Uso riguroso de etiquetas estructurales de HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) para facilitar la navegación a usuarios con tecnologías asistenciales y optimizar el análisis por rastreadores de IA.
* **Foco y Teclado**: Estados visuales de foco muy visibles (`focus:ring-2`) para botones, enlaces y campos de formulario, asegurando la navegación completa por teclado usando la tecla *Tab*.
* **Descripciones Claras**: Formularios con etiquetas explícitas asociadas (`htmlFor`) y textos alternativos descriptivos en todas las imágenes de contenido.

### ⚡ Rendimiento (Core Web Vitals)
* **Optimización de Carga**: Uso del componente optimizado de Next.js para carga diferida de recursos debajo de la pantalla (*below-the-fold*).
* **Experiencia de Usuario Fluida**: Animaciones optimizadas en CSS con Tailwind CSS v4 para evitar brincos bruscos en el Cumulative Layout Shift (CLS) y ofrecer una respuesta visual elegante.

---

## 🗓️ Cronograma de Entregas y Objetivos Generales [2]

* **Semanas 1-3 — Fundamentos y Diagnóstico**: Alineación de equipo, definición de stack técnico, creación de este repositorio, maquetación de la arquitectura completa y despliegue del pipeline inicial en Vercel [2].
* **Semanas 4-8 — Desarrollo Aplicado**: Construcción iterativa de vistas detalladas, optimizaciones y desarrollo de integraciones para los agentes inteligentes del Practicante 3 [2].
* **Semanas 9-10 — Ajustes Finales y Producción**: Auditorías completas de velocidad y accesibilidad, refinamiento definitivo de contenidos SEO/GEO y entrega oficial del sitio en internet [2].
