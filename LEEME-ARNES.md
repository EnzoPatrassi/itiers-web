# ITIERS AI HARNESS & COPILOT — SUITE DE GOBERNANZA Y QA
**Desarrollado para:** Itiers Data Sense (Pasantías 2026)  
**Módulo:** Suite de Harness & AI Engineering (Itiers Data Sense)  

Este paquete contiene la suite completa del **Arnés de Inteligencia Artificial, Auditoría QA/GEO y Copilot de Escritorio** para ser integrado sobre el repositorio de producción de Itiers.

---

## Instalación y Puesta en Marcha

### 1. Copiar los archivos
Descomprime el contenido de este paquete directamente en la **raíz de tu proyecto** (donde se encuentra `package.json`).
*No sobreescribirá tus componentes de React ni páginas existentes.*

### 2. Instalar dependencias de Python
En una terminal en la raíz del proyecto, ejecuta:
```bash
pip install -r requirements.txt
```

### 3. Instalar Zod (para los Guardrails)
Si aún no tienes `zod` instalado en tu proyecto de Node:
```bash
npm install zod
```

### 4. Configurar tu clave de IA en `.env.local`
Copia el archivo `.env.local.example` y renómbralo como `.env.local`:
```bash
cp .env.local.example .env.local
```
Abre `.env.local` y añade tu clave API de Gemini (`GEMINI_API_KEY=...`) o de Groq (`GROQ_API_KEY=...`). El harness cargará estas credenciales de forma automática y segura al iniciar.
*(También puedes usar Ollama localmente si lo tienes instalado).*

### 5. Añadir los comandos al `package.json`
En tu archivo `package.json`, añade estos scripts dentro del bloque `"scripts"`:
```json
  "scripts": {
    "dev": "next dev",
    "build": "python sdd_harness.py && next build",
    "start": "next start",
    "lint": "eslint",
    "harness:qa": "python harness_qa.py",
    "harness:sdd": "python sdd_harness.py",
    "harness:recommender": "python recommender_harness.py",
    "verify:harness": "node scripts/verify-harness.js",
    "copilot": "python itiers_copilot.py"
  }
```

---

## Cómo usar el Arnés y Copilot

### Opción A: Interfaz de Escritorio (Itiers Copilot UI)
- Ejecuta en consola:
  ```bash
  python itiers_copilot.py
  ```
  O desde npm:
  ```bash
  npm run copilot
  ```
- **Funcionalidades de la interfaz:**
  - **Selector de Objetivo:** Permite elegir qué archivo o carpeta analizar o editar.
  - **Interruptor de Modo (Consulta vs. Edición):** Alterna entre análisis seguro (sólo lectura) y escritura directa en el código con auto-guardado.
  - **Servidor Dev (localhost:3000):** Control de encendido/apagado del servidor local Next.js desde la barra superior.
  - **Auditar QA / Auto-Reparar / Deshacer:** Suite de gobernanza para mantener la calidad y revertir cambios si es necesario.

### Opción B: Consola Interactiva (CLI)
Ejecuta:
```bash
python harness_engine.py
```
Dispones de comandos directos como `/auditar`, `/reparar`, `/deshacer`, `/geo`, `/sdd` y `/crear`.

---

## Estructura de los Archivos Incluidos

- `harness_engine.py`: Motor central con auto-reparación, reversión/undo, validación TypeScript y conexión multi-LLM.
- `itiers_copilot.py`: Servidor HTTP y frontend web/app para la interfaz de escritorio.
- `sdd_harness.py`, `harness_qa.py`, `recommender_harness.py`: Scripts de validación continua y CI/CD.
- `lib/harness/guardrails.ts`: Esquemas de validación Zod (WhatsApp, Contact Form, Schema.org).
- `scripts/verify-harness.js`: Validador de entorno y guardrails Zod.
- `specs/`: Especificaciones formales del sistema (`requirements.md`, `design.md`, `tasks.md`, `i18n.md`).
- `requirements.txt`: Dependencias mínimas (`google-genai`, `openai`).
- `.env.local.example`: Plantilla de variables de entorno.