# Requerimientos de la Sección de Servicios - ITIERS

Este documento define el comportamiento esperado de la sección de servicios en la nueva web corporativa, alineado con la trayectoria de 20 años de ITIERS en la toma de decisiones inteligentes.

## Requerimientos del Sistema (Notación EARS)

### 1. Visualización de Servicios (Ubicuidad)

- **Requerimiento**: El sistema debe renderizar de forma predeterminada cuatro tarjetas principales que representen las áreas de especialidad de la empresa:
  1. Productos de Datos
  2. Proyectos de Datos
  3. Staffing de Datos
  4. Capacitaciones

### 2. Interactividad y Navegación (Event-driven)

- **Requerimiento**: Cuando el usuario haga clic en la tarjeta de "Staffing de Datos", el sistema debe redirigir al usuario al formulario de reclutamiento o contacto de Itiers.
- **Requerimiento**: Cuando el usuario haga clic en la tarjeta de "Capacitaciones", el sistema debe mostrar el catálogo de entrenamiento técnico en tecnologías como IA Generativa e IBM Watsonx.

### 3. Accesibilidad de Interfaz (State-driven)

- **Requerimiento**: Mientras el usuario navegue por la página utilizando la tecla "Tab", el sistema debe resaltar visualmente el borde de la tarjeta activa utilizando un anillo de foco claro de Tailwind CSS.
