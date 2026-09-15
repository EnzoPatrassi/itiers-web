# Diseño Técnico: Sección de Servicios - ITIERS

Este documento especifica la arquitectura de componentes y rutas para la implementación de la sección de servicios, asegurando rendimiento y accesibilidad WCAG AA.

## 1. Impacto en el Repositorio (Archivos involucrados)

### Archivos a Crear:

- `components/ServiceCard.tsx`: Componente modular para representar cada tarjeta de servicio de forma accesible.
- `app/servicios/page.tsx`: Página (ruta de Next.js) que renderizará la sección completa en un grid responsivo.

### Archivos que NO se deben tocar (Mantener intactos):

- `app/layout.tsx`: No se debe alterar el layout global ni la estructura de navegación del sitio para evitar regresiones visuales.

---

## 2. Especificación de Componentes

### A. Componente `ServiceCard.tsx`

Un componente funcional de TypeScript que recibirá los siguientes datos (props):

- `title` (string): Nombre del servicio.
- `description` (string): Breve explicación comercial.
- `iconPath` (string): Ruta estática al recurso SVG o PNG de la carpeta `/public`.
- `linkHref` (string): Enlace interno de redirección.

**Requisitos de accesibilidad y estilo (Tailwind CSS):**

- Debe utilizar una etiqueta semántica `<article>` o un `<div>` interactivo con rol de botón (`role="button"`).
- Para la navegación por teclado, debe incluir el atributo `tabIndex={0}`.
- El contenedor principal debe incluir clases de interacción visual con Tailwind:
  - Hover: `hover:shadow-lg hover:border-blue-500 transition-all`
  - Foco por teclado: `focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2` (indispensable para WCAG AA).

### B. Página `app/servicios/page.tsx`

- Debe utilizar la estructura de carpetas (App Router) de Next.js para habilitar de forma automática la ruta `/servicios`.
- **Estructura semántica:**
  - El contenedor raíz debe ser una etiqueta `<main>` con un encabezado descriptivo `<h1>` visible para lectores de pantalla.
  - El listado de tarjetas debe encapsularse en una etiqueta `<section>` configurada con un layout responsivo de Tailwind CSS: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`.
- **Uso de Datos:**
  - Debe consumir o importar un objeto estático con la información de los 4 servicios core de ITIERS:
    1. Productos de Datos (redirecciona a `/contacto`)
    2. Proyectos de Datos (redirecciona a `/contacto`)
    3. Staffing de Datos (redirecciona a `/contacto`)
    4. Capacitaciones (redirecciona a `/servicios/capacitaciones` o `/contacto`)
- **Imágenes:**
  - Se debe utilizar obligatoriamente el componente `<Image />` de Next.js para los iconos o logos de cada tarjeta para garantizar compresión y carga diferida (lazy loading).
