# Manual Oficial de Usuario — Itiers AI Harness & Copilot Suite

**Plataforma Corporativa Itiers Data Sense (Pasantías 2026)**  
**Módulo:** Suite de Harness, Gobernanza e Ingeniería de IA

---

## 1. Resumen General del Harness

El **AI Harness** es la infraestructura de control, validación continua y asistencia inteligente diseñada para gobernar el desarrollo del proyecto web de Itiers. Su premisa fundamental es:

$$\text{Agente} = \text{Modelo de Lenguaje (LLM)} + \text{Harness (Arnés de Control y Validación)}$$

Permite a los desarrolladores y supervisores realizar ediciones con absoluta libertad (texto, imágenes, carruseles, tablas, estilos y componentes), mientras que el motor verifica en tiempo real la compilación global con TypeScript (`npx tsc --noEmit`) para evitar errores en producción.

---

## 2. Características Principales

- **Libertad Total de Edición:** Edita, agrega o elimina textos, imágenes, tamaños, carruseles y gráficos con comandos naturales.
- **Edición Contextual Conectada:** Permite modificar archivos relacionados o dependencias (como interfaces de tipo y archivos de datos) si la tarea lo requiere, validando el ecosistema completo.
- **Carga Automática de Credenciales (`.env.local`):** Las API Keys se leen de forma segura desde el archivo de entorno. El modal de configuración en la interfaz solo permite alternar qué modelo o proveedor utilizar al instante.
- **Transparencia de Errores:** Si una solicitud de edición genera un conflicto de tipos o sintaxis, el sistema detiene el cambio (_Rollback de Seguridad_) e informa detalladamente en la interfaz la traza del error de forma amigable.
- **Explorador Interactivo Rediseñado:** Panel lateral moderno con árbol de archivos colapsables, iconos distintivos y resaltado del objetivo actual.

---

## 3. Guía de Instalación y Puesta en Marcha

### Prerrequisitos

- **Node.js** (v18.x o superior).
- **Python** (v3.10 o superior).
- **Ollama** (Opcional, para ejecución 100% offline y privada).

### Pasos de Instalación

1. **Instalar dependencias de Node:**

   ```bash
   npm install
   ```

2. **Instalar dependencias de Python para el Harness:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Instalar Zod (Guardrails):**
   ```bash
   npm install zod
   ```

---

## 4. Configuración de Credenciales y Modelos

El Harness detecta automáticamente las claves API desde un archivo llamado `.env.local` ubicado en la raíz del proyecto.

1. **Copia la plantilla de ejemplo:**

   ```bash
   cp .env.local.example .env.local
   ```

2. **Abre `.env.local` e introduce tu clave principal:**
   ```env
   GEMINI_API_KEY=tu_clave_real_aqui
   ```

### Uso Local con Ollama (Sin Internet / Gratis)

1. Instala Ollama.
2. Ejecuta en tu terminal para descargar un modelo compatible:
   ```bash
   ollama run llama3.2
   ```
3. En la interfaz de escritorio de Itiers Copilot, haz clic en **⚙️ Seleccionar Proveedor** y elige **Ollama Local**.

---

## 5. Modos de Operación y Comandos

### A. Interfaz de Escritorio (Itiers Copilot UI)

Inicia la app gráfica ejecutando:

```bash
npm run copilot
```

_(O directamente: `python itiers_copilot.py`)_. Esto abrirá una ventana de escritorio independiente en `http://localhost:8765`.

- **Modo Consulta (Sólo Lectura):** Analiza el archivo seleccionado y responde preguntas técnicas o contextuales sobre el código de manera segura.
- **Modo Edición (Escritura Activa):** Aplica modificaciones directamente sobre el archivo seleccionado (y sus dependencias conectadas si fuera necesario), guardando cambios y validando TypeScript automáticamente.

### B. Consola Interactiva (CLI)

Para trabajar directamente desde la terminal:

```bash
python harness_engine.py
```

**Comandos disponibles:** `/auditar`, `/reparar`, `/geo`, `/sdd`, `/ollama`.

---

## 6. Resolución de Problemas (Troubleshooting)

- **El chat muestra un Rollback de Seguridad:** Significa que el cambio propuesto generó un error de compilación. El sistema habrá restaurado la versión anterior intacta de forma automática para proteger el proyecto.
- **No se conecta al servidor de desarrollo:** Haz clic en el botón superior **"🌐 Iniciar y Abrir Web"** para encender automáticamente Next.js en el puerto 3000.
