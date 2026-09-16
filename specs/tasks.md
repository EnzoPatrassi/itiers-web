# Lista de Tareas (tasks.md) - Sección de Servicios ITIERS

Esta lista de tareas guía al agente implementador paso a paso. Cada microtarea debe ser auto-contenida para optimizar la ventana de contexto.

- [ x ] **T1: Crear el componente modular `ServiceCard`**
  - Ubicación: `components/ServiceCard.tsx`
  - Definir la interfaz TypeScript para las propiedades (Props): `title` (string), `description` (string), `iconPath` (string) y `linkHref` (string).
  - Estructurar el componente usando la etiqueta semántica `<article>`.
  - Agregar estilos Tailwind CSS responsivos y de interacción (hover con sombras y transición de bordes).
  - **Accesibilidad WCAG AA**: Añadir `tabIndex={0}` para navegación por teclado y configurar un anillo de foco visualmente claro (`focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`).

- [ ] **T2: Crear la página de la ruta `/servicios`**
  - Ubicación: `app/servicios/page.tsx`
  - Estructurar el archivo como una página del App Router de Next.js.
  - El contenedor principal de la página debe ser un `<main>` con un encabezado `<h1>` semántico ("Nuestros Servicios").
  - Importar un objeto de datos estático que represente las cuatro áreas principales de ITIERS:
    1. Productos de Datos (enlace a `/contacto`)
    2. Proyectos de Datos (enlace a `/contacto`)
    3. Staffing de Datos (enlace a `/contacto`)
    4. Capacitaciones (enlace a `/contacto` o servicios de capacitación)
  - Diseñar el Grid de visualización responsivo con Tailwind CSS (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`) y renderizar un `<ServiceCard>` por cada uno de los elementos.

- [ ] **T3: Implementar optimización de imágenes (Next.js & WCAG AA)**
  - Ubicación: `app/servicios/page.tsx` y `components/ServiceCard.tsx`
  - Asegurar la importación y uso del componente nativo `Image` de `next/image` en lugar de la etiqueta `<img>` tradicional.
  - Pasar propiedades estables de `width` (ancho) y `height` (alto) al componente para evitar Cumulative Layout Shift (CLS).
  - Incluir el atributo `alt` descriptivo y dinámico para que los lectores de pantalla puedan detallar qué icono/imagen ilustra cada tarjeta de servicios.

- [ ] **T4: Ejecutar validación e integración en Next.js**
  - Ejecutar el comando local de construcción de la aplicación (`npm run build` o tu script `init.sh`) para certificar que no existen errores sintácticos, de TypeScript o de compilación general en el nuevo código de servicios.
