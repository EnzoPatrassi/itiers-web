<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Reglas de Comportamiento Estricto para Agentes (AGENTS.md)

1. **Fuente de Verdad Única**: Toda generación de código o contenido debe basarse EXCLUSIVAMENTE en las especificaciones contenidas en `specs/` (`requirements.md`, `design.md`, `i18n.md`, `tasks.md`).
2. **Cero Lorem Ipsum**: Queda estrictamente prohibido incluir textos ficticios o de relleno ("Lorem Ipsum", "dolor sit amet").
3. **Cero Parches Superficiales**: No tragues excepciones ni devuelvas fallbacks vacíos. Toda modificación debe resolver la causa raíz comprobada.
4. **Accesibilidad WCAG AA Obligatoria**: Todo componente interactivo debe incluir `tabIndex`, etiquetas semánticas HTML5 (`<main>`, `<article>`, `<section>`, `<nav>`), contrastes adecuados y foco visual claro (`focus:ring-2`).
5. **Validación con Guardrails Zod**: Todo formulario, canalización a WhatsApp y marcado JSON-LD Schema.org debe validarse mediante los esquemas en `lib/harness/guardrails.ts`.
6. **Compilación Limpia**: No se aceptan cambios que rompan el chequeo de tipos de TypeScript (`npx tsc --noEmit`) o la compilación en producción (`npm run build`).
