### ♿ REPORTE DE ACCESIBILIDAD WCAG AA - ITIERS

**[ESTADO]**: **RECHAZADO** ❌

Se han detectado los siguientes problemas que violan las pautas de calidad del proyecto:

#### 🔍 Fallos Detectados:
- [FALLO] Uso de <div> con interacción onClick sin atributos de accesibilidad (role/tabIndex). Debe ser un <button> o <Link>.
- [FALLO] Se detectó la etiqueta HTML básica <img>. En Next.js se debe utilizar el componente <Image /> para optimizar rendimiento.
- [FALLO] Elemento de imagen detectado sin el atributo 'alt' descriptivo. Los lectores de pantalla no podrán leerlo.
- [FALLO] Se detectaron elementos interactivos (botones/enlaces) sin clases de foco de Tailwind CSS (focus:ring, focus:outline-none).

#### 🛠️ Recomendación General:
Reescribe el componente reemplazando los contenedores interactivos por etiquetas semánticas de React o Next.js (`<Link>`, `<button>`) y asegúrate de darles estilos de foco claros con Tailwind CSS.
