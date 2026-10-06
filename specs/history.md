# Memoria de Avance y Registro de Tareas (specs/history.md)

Este documento registra la evolución, auditorías y estado de progreso del desarrollo en el repositorio ITIERS Data Sense.

---

## Historial de Iteraciones y Hitos

### Hito 1: Creación e Infraestructura del AI Harness Engine
- **Estado**: ✅ COMPLETADO
- **Descripción**: Configuración inicial de `harness_engine.py` compatible con Ollama 3.2 local, Groq, Gemini, OpenRouter y OpenAI.
- **Artefactos**:
  - `harness_engine.py`
  - `sdd_harness.py`
  - `harness_qa.py`
  - `recommender_harness.py`

### Hito 2: Desarrollo de Componentes Base y Rutas Next.js
- **Estado**: ✅ COMPLETADO
- **Descripción**: Creación del componente `ServiceCard.tsx` (WCAG AA, Tailwind v4) y páginas `/es` y `/servicios`.
- **Artefactos**:
  - `components/ServiceCard.tsx`
  - `app/es/page.tsx`
  - `app/servicios/page.tsx`
  - `data/mockData.ts`

### Hito 3: Implementación de Guardrails Zod e i18n Bilingüe
- **Estado**: 🔄 EN PROGRESO
- **Descripción**: Definición de guardrails con esquemas Zod en `lib/harness/guardrails.ts`, marcado JSON-LD `ProfessionalService` para 3 sedes (Mendoza, Santiago, Delaware), diccionario i18n bilingüe ES/EN y script de verificación automática (`verify-harness`).
