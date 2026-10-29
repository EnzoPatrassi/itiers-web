# ITIERS AI HARNESS & COPILOT — SUITE DE GOBERNANZA Y QA
**Desarrollado para:** Itiers Data Sense (Pasantías 2026)  
**Autor:** Stefano Ferro (Practicante 3 - Harness & AI Engineering)  

Este paquete contiene la suite completa del **Arnés de Inteligencia Artificial, Auditoría QA/GEO y Copilot de Escritorio** para ser integrado sobre el repositorio de producción de Itiers.

---

## 🚀 Instalación y Puesta en Marcha (2 Minutos)

### 1. Copiar los archivos
Descomprime el contenido de este archivo ZIP directamente en la **raíz de tu proyecto** (donde se encuentra `package.json`).
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

### 4. Configurar tu clave de IA (API Key)
Copia el archivo `.env.local.example` y renómbralo como `.env.local`:
```bash
cp .env.local.example .env.local
```
Abre `.env.local` y añade tu clave API de Gemini (`GEMINI_API_KEY=...`) o de Groq (`GROQ_API_KEY=...`).
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

## 🖥️ Cómo usar el Arnés y Copilot

### Opción A: Interfaz de Escritorio (Estilo ChatGPT para Itiers)
- Haz doble clic en el archivo **`Iniciar-Itiers-Copilot.bat`** (o `Iniciar-Itiers-Copilot.vbs` para modo silencioso).
- O ejecuta en consola:
  ```bash
  python itiers_copilot.py
  ```
- **Funcionalidades de la interfaz:**
  - **Auditar QA:** Evalúa accesibilidad WCAG AA y estándares de diseño de cualquier componente seleccionado.
  - **Auto-Reparar:** Corrige automáticamente observaciones con verificación estricta de TypeScript.
  - **↩️ Deshacer Último Cambio:** Restaura cualquier archivo modificado con 1 solo clic.
  - **Chat Inteligente:** Puedes pedirle en lenguaje natural que cree o modifique componentes (ej: *"cambia el color a las tarjetas de métricas components/MetricCard.tsx"*).

### Opción B: Consola Interactiva (CLI)
Ejecuta:
```bash
python harness_engine.py
```
Dispones de comandos directos como `/auditar`, `/reparar`, `/deshacer`, `/geo`, `/sdd` y `/crear`.

---

## 📁 Estructura de los Archivos Incluidos

- `harness_engine.py`: Motor central con auto-reparación, reversión/undo, validación TypeScript y conexión multi-LLM.
- `itiers_copilot.py`: Servidor HTTP y frontend web/app para la interfaz de escritorio.
- `Iniciar-Itiers-Copilot.bat` & `.vbs`: Lanzadores para Windows.
- `sdd_harness.py`, `harness_qa.py`, `recommender_harness.py`: Scripts de validación continua y CI/CD.
- `lib/harness/guardrails.ts`: Esquemas de validación Zod (WhatsApp, Contact Form, Schema.org).
- `scripts/verify-harness.js` & `.sh`: Validadores de entorno y guardrails.
- `specs/`: Especificaciones formales del sistema (`requirements.md`, `design.md`, `tasks.md`, `i18n.md`, `prompt.md`, `history.md`).
- `progress/accessibility-report.md`: Registro de auditorías de calidad y accesibilidad.
- `AGENTS.md`: Reglas estrictas de desarrollo y no-regresión.
- `requirements.txt`: Dependencias mínimas (`google-genai`, `openai`).
- `.env.local.example`: Plantilla de variables de entorno.
