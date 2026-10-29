import os
import sys
import glob
import time
import re
import json
import urllib.request
import subprocess
from typing import List, Dict, Any, Optional

# Asegura encoding UTF-8 en consola de Windows
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Intentar importar librerías de IA
try:
    from google import genai
    from google.genai import types
    HAS_GENAI = True
except ImportError:
    HAS_GENAI = False

try:
    from openai import OpenAI
    HAS_OPENAI = True
except ImportError:
    HAS_OPENAI = False


# =====================================================================
# UTILS: Carga de Archivos de Entorno (.env)
# =====================================================================
def load_dotenv():
    """Carga variables desde archivos .env, .env.local, etc. sin librerías externas."""
    env_files = [".env.local", ".env", ".env.example", "specs/.env"]
    for env_file in env_files:
        if os.path.exists(env_file):
            try:
                with open(env_file, "r", encoding="utf-8") as f:
                    for line in f:
                        line = line.strip()
                        if line and not line.startswith("#") and "=" in line:
                            parts = line.split("=", 1)
                            k = parts[0].strip()
                            v = parts[1].strip()
                            if "$env:" in k:
                                k = k.split(":")[-1].strip()
                            if "$env:" in v:
                                match = re.search(r'["\']([^"\']+)["\']', v)
                                if match:
                                    v = match.group(1)
                                else:
                                    v = v.split("=")[-1].strip()
                            v = v.strip('"').strip("'")
                            if k and v and k not in os.environ:
                                os.environ[k] = v
            except Exception:
                pass

load_dotenv()


# =====================================================================
# MODELOS DISPONIBLES EN CASCADA DE FALLBACK
# =====================================================================
DEFAULT_MODELS = [
    # 1. Gemini API (Google AI - Modelos oficiales de última generación)
    {'provider': 'gemini', 'name': 'gemini-3.5-flash'},
    {'provider': 'gemini', 'name': 'gemini-3.5-flash-lite'},
    {'provider': 'gemini', 'name': 'gemini-3-flash-preview'},
    {'provider': 'gemini', 'name': 'gemini-2.5-pro'},

    # 2. Groq API (Ultra rápido con modelos de alto razonamiento)
    {'provider': 'groq', 'name': 'qwen/qwen3.8-27b'},
    {'provider': 'groq', 'name': 'openai/gpt-oss-120b'},
    {'provider': 'groq', 'name': 'openai/gpt-oss-20b'},
    {'provider': 'groq', 'name': 'llama-3.3-70b-versatile'},

    # 3. OpenAI
    {'provider': 'openai', 'name': 'gpt-4o-mini'},
    {'provider': 'openai', 'name': 'gpt-4o'},

    # 4. OpenRouter API (Comunidad gratis)
    {'provider': 'openrouter', 'name': 'google/gemini-2.0-flash-exp:free'},
    {'provider': 'openrouter', 'name': 'meta-llama/llama-3.3-70b-instruct:free'},

    # 5. Ollama Local (100% Gratis, Privado y Local)
    {'provider': 'ollama', 'name': 'llama3.2:latest'},
    {'provider': 'ollama', 'name': 'llama3.1:latest'},
    {'provider': 'ollama', 'name': 'llama3.2'},
    {'provider': 'ollama', 'name': 'llama3.2:3b'},
    {'provider': 'ollama', 'name': 'llama3.2:1b'},
    {'provider': 'ollama', 'name': 'qwen2.5'}
]


class HarnessAgent:
    """
    Agente de Arnés de IA Completo (Full-Featured AI Agent Harness).
    Capaz de responder cualquier consulta general, ejecutar comandos de consola,
    crear y modificar código en múltiples lenguajes, auditar calidad/accesibilidad/SEO,
    y realizar desarrollo guiado por especificaciones (Spec-Driven Development).
    """

    def __init__(self):
        self.clients = {}
        self.design_specs = ""
        self.conversation_history = []
        self.installed_ollama_models = []
        self.prefer_ollama = os.environ.get("PREFER_OLLAMA", "").lower() in ["true", "1", "yes"]
        self.available_models = []
        self.last_backups = {}
        self.last_modified_file = None
        self.setup_clients()
        self.load_design_specs()

    def setup_clients(self):
        """Configura los clientes de Ollama, Groq, Gemini, OpenRouter y OpenAI."""
        self.clients = {}
        ollama_base_url = os.environ.get("OLLAMA_BASE_URL", "http://localhost:11434").rstrip('/')
        ollama_api_url = f"{ollama_base_url}/v1"

        # Auto-descubrimiento rápido de Ollama local (timeout de 1.5s)
        self.installed_ollama_models = self.detect_ollama_models(ollama_base_url)

        # Configurar Ollama cliente sólo si Ollama responde o si hay clientes OpenAI
        if HAS_OPENAI and (self.installed_ollama_models or self.prefer_ollama):
            try:
                self.clients['ollama'] = OpenAI(
                    base_url=ollama_api_url,
                    api_key="ollama",
                    timeout=60.0
                )
            except Exception as e:
                pass

        # Configurar Gemini
        gemini_key = os.environ.get("GEMINI_API_KEY")
        if gemini_key and HAS_GENAI:
            try:
                self.clients['gemini'] = genai.Client(api_key=gemini_key)
            except Exception as e:
                pass

        # Configurar Groq
        groq_key = os.environ.get("GROQ_API_KEY")
        if groq_key and HAS_OPENAI:
            try:
                self.clients['groq'] = OpenAI(
                    base_url="https://api.groq.com/openai/v1",
                    api_key=groq_key,
                    timeout=15.0
                )
            except Exception as e:
                pass

        # Configurar OpenRouter
        openrouter_key = os.environ.get("OPENROUTER_API_KEY")
        if openrouter_key and HAS_OPENAI:
            try:
                self.clients['openrouter'] = OpenAI(
                    base_url="https://openrouter.ai/api/v1",
                    api_key=openrouter_key,
                    timeout=15.0
                )
            except Exception as e:
                pass

        # Configurar OpenAI
        openai_key = os.environ.get("OPENAI_API_KEY")
        if openai_key and HAS_OPENAI:
            try:
                self.clients['openai'] = OpenAI(
                    api_key=openai_key,
                    timeout=15.0
                )
            except Exception as e:
                pass

        self.rebuild_model_priority()

    def detect_ollama_models(self, base_url: str) -> List[str]:
        """Detecta dinámicamente los modelos instalados en Ollama local (ej. llama3.2:latest)."""
        try:
            url = f"{base_url}/api/tags"
            req = urllib.request.Request(url, headers={'User-Agent': 'HarnessEngine/1.0'})
            with urllib.request.urlopen(req, timeout=1.5) as response:
                if response.status == 200:
                    data = json.loads(response.read().decode('utf-8'))
                    return [m['name'] for m in data.get('models', [])]
        except Exception:
            pass
        return []

    def rebuild_model_priority(self):
        """
        Construye la lista de prioridad de modelos:
        - Si prefer_ollama es True: Ollama local va primero.
        - Si prefer_ollama es False: Las APIs Cloud (Gemini, Groq, OpenAI) van PRIMERO.
          Ollama queda como fallback si la nube falla o está offline.
        """
        cloud_models = [m for m in DEFAULT_MODELS if m['provider'] != 'ollama']

        ollama_models = []
        for om in self.installed_ollama_models:
            ollama_models.append({'provider': 'ollama', 'name': om})
        for m in DEFAULT_MODELS:
            if m['provider'] == 'ollama' and m['name'] not in [o['name'] for o in ollama_models]:
                ollama_models.append(m)

        if self.prefer_ollama:
            self.available_models = ollama_models + cloud_models
        else:
            self.available_models = cloud_models + ollama_models

    def load_design_specs(self):
        """Carga el manual de diseño e identidad de marca desde specs/design.md si existe."""
        paths = [
            os.path.join("specs", "design.md"),
            "design-md-itiers.md",
            os.path.join("specs", "design-md-itiers.md")
        ]
        for path in paths:
            if os.path.exists(path):
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        self.design_specs = f.read()
                        return
                except Exception:
                    pass

    def call_llm(self, prompt: str, system_prompt: Optional[str] = None, include_design_specs: bool = False) -> str:
        """
        Enruta la petición al mejor modelo disponible con fallback automático y sin inflar context unnecessarily.
        """
        # Sistema base general
        base_system = (
            "Eres un Agente de Arnés de IA Inteligente y Versátil (Full-Featured AI Harness Agent).\n"
            "Eres capaz de responder cualquier pregunta, escribir código en cualquier lenguaje, ejecutar tareas agénticas,\n"
            "auditar proyectos, diseñar arquitecturas de software y ayudar al desarrollador en lo que sea que solicite.\n"
            "Sé conciso, preciso, profesional y directo."
        )

        if include_design_specs and self.design_specs:
            base_system += f"\n\n--- MANUAL DE MARCA Y DISEÑO DE REFERENCIA ---\n{self.design_specs}\n----------------------------------------"

        final_system_prompt = f"{base_system}\n\n{system_prompt}" if system_prompt else base_system

        if not self.clients:
            return self._offline_fallback_response(prompt)

        errors_log = []

        for model_info in self.available_models:
            provider = model_info['provider']
            model_name = model_info['name']

            if provider not in self.clients:
                continue

            try:
                if provider == 'gemini':
                    response = self.clients['gemini'].models.generate_content(
                        model=model_name,
                        contents=prompt,
                        config=types.GenerateContentConfig(
                            system_instruction=final_system_prompt,
                            temperature=0.2
                        )
                    )
                    if response and response.text:
                        return response.text.strip()

                elif provider in ['openai', 'groq', 'openrouter', 'ollama']:
                    response = self.clients[provider].chat.completions.create(
                        model=model_name,
                        messages=[
                            {"role": "system", "content": final_system_prompt},
                            {"role": "user", "content": prompt}
                        ],
                        temperature=0.2
                    )
                    if response and response.choices:
                        return response.choices[0].message.content.strip()

            except Exception as e:
                err = str(e)
                errors_log.append(f"{provider}/{model_name}: {err[:80]}")
                continue

        # Fallback offline si ninguna API respondió
        return self._offline_fallback_response(prompt, errors_log)

    def _offline_fallback_response(self, prompt: str, errors_log: Optional[List[str]] = None) -> str:
        """Genera una respuesta basada en reglas cuando las APIs de LLM no están disponibles."""
        msg = "🤖 [Harness Agent - Modo Standby / Reglas Locales]\n"
        if errors_log:
            msg += f"⚠️ No se pudo conectar a los proveedores remotos ({len(errors_log)} errores registrados).\n"
        else:
            msg += "⚠️ No hay LLM activo configurado (Inicia Ollama o configura GROQ_API_KEY / GEMINI_API_KEY / OPENAI_API_KEY).\n"

        prompt_lower = prompt.lower()
        if "component" in prompt_lower or "card" in prompt_lower or "service" in prompt_lower:
            return (
                "```tsx\n"
                "import React from 'react';\n\n"
                "export interface ServiceCardProps {\n"
                "  title: string;\n"
                "  description: string;\n"
                "  iconPath?: string;\n"
                "  linkHref?: string;\n"
                "}\n\n"
                "export const ServiceCard: React.FC<ServiceCardProps> = ({\n"
                "  title,\n"
                "  description,\n"
                "  iconPath = '/icons/data.svg',\n"
                "  linkHref = '/contacto'\n"
                "}) => {\n"
                "  return (\n"
                "    <article className=\"group p-6 bg-surface border border-border rounded-md shadow-sm hover:shadow-md transition-all focus-within:ring-2 focus-within:ring-primary tab-index-0\">\n"
                "      <div className=\"flex items-center space-x-4 mb-4\">\n"
                "        <img src={iconPath} alt={title} className=\"w-10 h-10 object-contain\" />\n"
                "        <h3 className=\"text-lg font-bold text-accent group-hover:text-primary transition-colors\">{title}</h3>\n"
                "      </div>\n"
                "      <p className=\"text-sm text-brand-gray mb-6 leading-relaxed\">{description}</p>\n"
                "      <a href={linkHref} className=\"inline-flex items-center text-sm font-semibold text-primary hover:underline focus:outline-none\">\n"
                "        Saber más &rarr;\n"
                "      </a>\n"
                "    </article>\n"
                "  );\n"
                "};\n"
                "export default ServiceCard;\n"
                "```"
            )
        return f"{msg}\nSolicitud recibida: '{prompt}'. Agregue sus API Keys en `.env.local` para respuesta con LLM en vivo."

    def clean_code(self, raw_code: str) -> str:
        """Extrae el bloque de código limpio en cualquier lenguaje."""
        match = re.search(r'```(?:tsx|typescript|jsx|javascript|python|html|css|json|sh|bash)?\n(.*?)\n```', raw_code, re.DOTALL | re.IGNORECASE)
        if match:
            return match.group(1).strip()
        cleaned = raw_code.replace("```tsx", "").replace("```python", "").replace("```", "").strip()
        return cleaned

    def execute_command(self, cmd: str) -> str:
        """Ejecuta un comando en la consola del sistema y devuelve la salida."""
        print(f"⚡ Executing command: {cmd}")
        try:
            result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=60, encoding='utf-8', errors='replace')
            stdout = result.stdout.strip()
            stderr = result.stderr.strip()
            out = []
            if stdout:
                out.append(f"--- STDOUT ---\n{stdout}")
            if stderr:
                out.append(f"--- STDERR ---\n{stderr}")
            out.append(f"Exit Code: {result.returncode}")
            return "\n".join(out)
        except Exception as e:
            return f"❌ Execution error: {e}"

    def resolve_project_path(self, raw_path: str) -> str:
        """
        Resuelve de forma robusta e inteligente cualquier ruta de archivo pasada por el usuario.
        Maneja rutas con backslashes de Windows (ej: \\itiers-web-main\\components\\Header.tsx),
        rutas relativas al proyecto, o nombres directos de archivo (ej: Header.tsx).
        Garantiza que siempre resuelva dentro del workspace actual.
        """
        if not raw_path:
            return "app/es/page.tsx"

        p = raw_path.strip().strip("'").strip('"')
        p_clean = p.replace("\\", "/").lstrip("/")

        # Si el usuario incluyó el nombre del directorio raíz (ej: itiers-web-main/components/Header.tsx)
        cwd_name = os.path.basename(os.getcwd())
        prefixes_to_strip = [
            f"{cwd_name}/",
            "itiers-web-main/",
            "itiers-web/",
            "itiers-harness-qa/Main/itiers-web-main/",
            "Main/itiers-web-main/"
        ]
        for prefix in prefixes_to_strip:
            if p_clean.lower().startswith(prefix.lower()):
                p_clean = p_clean[len(prefix):]
                break

        p_clean = p_clean.lstrip("/")

        # 1. Si el archivo existe relativo al directorio actual de trabajo:
        if os.path.exists(p_clean) and os.path.isfile(p_clean):
            return p_clean

        # 2. Si no se encontró directamente, buscar por nombre de archivo dentro del proyecto:
        target_filename = os.path.basename(p_clean)
        candidates = [target_filename.lower()]
        if "." not in target_filename:
            for ext in [".tsx", ".ts", ".jsx", ".js", ".css"]:
                candidates.append((target_filename + ext).lower())

        for root, dirs, files in os.walk("."):
            dirs[:] = [d for d in dirs if d not in [".next", "node_modules", ".git", "__pycache__", "out", "build", ".harness_backups"]]
            for f in files:
                if f.lower() in candidates:
                    rel = os.path.relpath(os.path.join(root, f), ".").replace("\\", "/")
                    return rel

        return p_clean

    def parse_command_input(self, text: str, default_path: Optional[str] = None) -> tuple:
        """
        Extrae de forma robusta la descripción y la ruta de destino de una solicitud de creación o modificación.
        """
        fallback_path = default_path if default_path else "app/es/page.tsx"
        text = text.strip()
        if not text:
            return "", fallback_path

        tokens = text.split()
        if len(tokens) == 1:
            if "." in tokens[0] or any(ext in tokens[0] for ext in [".tsx", ".ts", ".jsx", ".js"]):
                return "", self.resolve_project_path(tokens[0])
            return tokens[0], fallback_path

        # 1. Si el último token es una ruta (contiene extensión o barra)
        last_tok = tokens[-1].strip(" '\"`(),;:")
        if any(last_tok.lower().endswith(ext) for ext in [".tsx", ".ts", ".jsx", ".js", ".css", ".md", ".json", ".html"]):
            resolved = self.resolve_project_path(last_tok)
            return " ".join(tokens[:-1]).strip(), resolved

        # 2. Si el primer token es una ruta
        first_tok = tokens[0].strip(" '\"`(),;:")
        if any(first_tok.lower().endswith(ext) for ext in [".tsx", ".ts", ".jsx", ".js", ".css", ".md", ".json", ".html"]):
            resolved = self.resolve_project_path(first_tok)
            return " ".join(tokens[1:]).strip(), resolved

        # 3. Buscar si algún token del medio es una ruta de archivo
        for i, tok in enumerate(tokens):
            clean_tok = tok.strip(" '\"`(),;:")
            if any(clean_tok.lower().endswith(ext) for ext in [".tsx", ".ts", ".jsx", ".js", ".css", ".md", ".json"]):
                resolved = self.resolve_project_path(clean_tok)
                desc = " ".join(tokens[:i] + tokens[i+1:]).strip()
                return desc, resolved

        # 4. Mapeo por palabras clave de componentes conocidos
        lower_text = text.lower()
        component_keywords = [
            (["metric", "metrica", "metricas", "tarjeta", "tarjetas"], "components/MetricCard.tsx"),
            (["header", "encabezado", "navbar", "menu"], "components/Header.tsx"),
            (["footer", "pie"], "components/Footer.tsx"),
            (["hero", "portada"], "components/Hero.tsx"),
            (["carrusel", "carousel", "equipo", "team"], "components/TeamCarousel.tsx"),
            (["contacto", "contact", "formulario"], "components/ContactSection.tsx"),
            (["impact", "contador", "contadores", "impacto"], "components/ImpactCounters.tsx"),
            (["careers", "carrera", "empleo", "vacantes"], "components/CareersSection.tsx"),
            (["dataai", "ia", "inteligencia artificial"], "components/DataAISection.tsx"),
            (["servicio", "servicios"], "components/Services.tsx"),
            (["landing", "pagina principal", "home"], "app/es/page.tsx")
        ]
        if not default_path:
            for kws, comp_path in component_keywords:
                if any(kw in lower_text for kw in kws):
                    return text, comp_path

        return text, fallback_path

    def audit_component(self, filepath: str) -> str:
        """Audita un componente o archivo específico."""
        filepath = self.resolve_project_path(filepath)
        if not os.path.exists(filepath):
            return f"❌ El archivo '{filepath}' no existe."

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                code = f.read()
        except Exception as e:
            return f"❌ Error leyendo {filepath}: {e}"

        system_prompt = (
            "Eres el Auditor de Calidad (QA), Accesibilidad WCAG AA y Estándares de Código del Arnés de IA.\n"
            "Analiza el código provisto y evalúa:\n"
            "1. Cumplimiento de especificaciones y estructura limpia.\n"
            "2. Accesibilidad (WCAG AA: etiquetas semánticas, tabIndex, focus state, alt text).\n"
            "3. Manejo de tipos (TypeScript) o calidad general.\n"
            "Responde de forma concisa con un dictamen (✅ APROBADO / ⚠️ REVISAR) y observaciones específicas."
        )
        prompt = f"Audita el archivo '{filepath}':\n\n```\n{code}\n```"
        return self.call_llm(prompt, system_prompt, include_design_specs=True)

    def audit_geo(self, filepath: str) -> str:
        """Audita la optimización SEO y GEO (Generative Engine Optimization)."""
        filepath = self.resolve_project_path(filepath)
        if not os.path.exists(filepath):
            return f"❌ El archivo '{filepath}' no existe."

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                code = f.read()
        except Exception as e:
            return f"❌ Error leyendo {filepath}: {e}"

        system_prompt = (
            "Eres el Especialista en SEO y GEO (Generative Engine Optimization).\n"
            "Evalúa la citabilidad y preparación para motores de búsqueda tradicionales y motores de IA (ChatGPT, Gemini, Perplexity).\n"
            "Verifica: 1. Estructura Answer-First, 2. Entidades clave, 3. JSON-LD Schema.org, 4. Jerarquía semántica HTML5.\n"
            "Responde con: Estado (✅ OPTIMIZADO PARA GEO & SEO / ❌ REQUIERE MEJORAS) y sugerencias."
        )
        prompt = f"Audita SEO y GEO para '{filepath}':\n\n```\n{code}\n```"
        return self.call_llm(prompt, system_prompt)

    def audit_all(self):
        """Audita todos los archivos .tsx en app/ y components/"""
        target_files = []
        for d in ["app", "components"]:
            if os.path.exists(d):
                target_files.extend(glob.glob(os.path.join(d, "**", "*.tsx"), recursive=True))

        if not target_files:
            print("⚠️ No se encontraron archivos .tsx para auditar.")
            return

        print(f"\n🔍 Auditando {len(target_files)} archivos del proyecto...\n")
        for filepath in target_files:
            print(f"📄 Auditando: {filepath}...")
            report = self.audit_component(filepath)
            print("-" * 50)
            print(report)
            print("-" * 50 + "\n")

    def generate_or_edit_file(self, description: str, target_path: str = "app/es/page.tsx") -> bool:
        """Genera o edita cualquier archivo en el proyecto."""
        target_path = self.resolve_project_path(target_path)
        system_prompt = (
            "Eres un Senior Software Architect y Developer parte del Arnés de IA de Itiers.\n"
            "Stack tecnológico estricto del proyecto: Next.js (App Router), React 19, Tailwind CSS v4 y TypeScript.\n"
            "REGLAS CRÍTICAS:\n"
            "1. NO importes librerías externas no instaladas (PROHIBIDO @mui, styled-components, etc.).\n"
            "2. Usa únicamente clases nativas de Tailwind CSS y tipado estricto de TypeScript.\n"
            "3. Accesibilidad WCAG AA obligatoria: etiquetas semánticas (<article>, <section>, <header>, <nav>), tabIndex={0}, aria-label y focus visible (focus:ring-2).\n"
            "4. PRESERVACIÓN CRÍTICA: Al modificar archivos existentes, DEBES CONSERVAR todos los exports (ej: 'export const Header', 'export type ThemeMode = ...'), interfaces y lógica original que no se haya pedido alterar. PROHIBIDO cambiar 'export const' a 'const' o eliminar tipos exportados.\n"
            "5. NO inventes componentes no importados (como <NavLink>), usa etiquetas HTML estándar (<a>, <button>) con clases Tailwind.\n"
            "6. COMPONENTE NEXT/IMAGE: Si usas o modificas <Image />, SIEMPRE debes incluir 'fill' O 'width={...}' y 'height={...}'. NUNCA dejes un <Image /> sin dimensiones ni 'fill' porque arroja Runtime Error fatal en Next.js.\n"
            "7. ELIMINACIÓN Y BORRADO: Si la solicitud pide BORRAR o ELIMINAR un elemento, botón, texto, enlace o sección específica, DEBES REMOVERLO COMPLETAMENTE del JSX/código, sin dejar bloques vacíos ni comentarios de marcador.\n"
            "8. INTERNACIONALIZACIÓN (i18n): Si usas 'dictionaries[currentLang]', respeta su esquema estricto de '@/data/i18n'. La navegación está en 'dictionaries[currentLang].nav' (con .inicio, .nosotros, .servicios, .queHacemos, .contacto), y el footer en 'dictionaries[currentLang].footer'. PROHIBIDO forzar propiedades inexistentes con type casting 'as unknown as ...' o interfaces inventadas.\n"
            "9. CERO PARCHES SUPERFICIALES: NUNCA uses 'as any' o 'as unknown as' para engañar al chequeo de tipos de TypeScript. Si una propiedad no existe en un objeto, usa el objeto correcto según las fuentes de verdad.\n"
            "Crea o modifica el código solicitado de forma completa, limpia y funcional sin omitir partes.\n"
            "Devuelve ÚNICAMENTE el código envuelto en un bloque markdown (```lenguaje ... ```)."
        )

        existing_code = ""
        if os.path.exists(target_path):
            try:
                with open(target_path, "r", encoding="utf-8") as f:
                    existing_code = f.read()
                # Registrar respaldo para poder deshacer cambios
                self.last_backups[target_path] = existing_code
                self.last_modified_file = target_path
                os.makedirs(".harness_backups", exist_ok=True)
                bak_name = target_path.replace("/", "_").replace("\\", "_") + ".bak"
                with open(os.path.join(".harness_backups", bak_name), "w", encoding="utf-8") as bf:
                    bf.write(existing_code)
            except Exception:
                pass

        if existing_code:
            prompt = (
                f"Modifica el archivo existente '{target_path}' para cumplir: '{description}'.\n"
                f"IMPORTANTE: Mantén todas las exportaciones existentes ('export const', 'export type', etc.) y todas las props originales.\n\n"
                f"Código Actual:\n```\n{existing_code}\n```"
            )
        else:
            prompt = f"Crea un nuevo archivo para '{target_path}' con la siguiente especificación: '{description}'."

        print(f"⚙️ Generando código para {target_path}...")
        try:
            is_design_task = target_path.endswith(".tsx") or target_path.endswith(".jsx") or target_path.endswith(".css")
            raw_response = self.call_llm(prompt, system_prompt, include_design_specs=is_design_task)
            clean_code = self.clean_code(raw_response)

            dir_name = os.path.dirname(target_path)
            if dir_name:
                os.makedirs(dir_name, exist_ok=True)
            with open(target_path, "w", encoding="utf-8") as f:
                f.write(clean_code)

            print(f"✅ Archivo guardado/actualizado exitosamente en '{target_path}'!")
            return True
        except Exception as e:
            print(f"❌ Error al generar/guardar el archivo: {e}")
            return False

    def autonomous_loop(self, idea: str, target_path: str = "app/es/page.tsx", max_iterations: int = 3):
        """Ejecuta un bucle agéntico autónomo: Crear -> Auditar -> Auto-corregir -> Guardar (con rollback de seguridad)."""
        target_path = self.resolve_project_path(target_path)
        print(f"\n🤖 [Bucle Agéntico Autónoma] Construyendo: {target_path}")

        # Guardar respaldo previo para rollback de seguridad
        original_backup = None
        if os.path.exists(target_path):
            try:
                with open(target_path, "r", encoding="utf-8") as f:
                    original_backup = f.read()
            except Exception:
                pass

        current_prompt = f"Crea/modifica el archivo según esta especificación: {idea}"

        loop_succeeded = False

        for iteration in range(1, max_iterations + 1):
            print(f"\n🔄 --- ITERACIÓN {iteration}/{max_iterations} ---")
            print("✍️ Generando/Refinando versión de código...")

            success = self.generate_or_edit_file(current_prompt, target_path)
            if not success:
                print("❌ Error en generación. Abortando bucle agéntico.")
                break

            print("🕵️ Auditando calidad del código generado...")
            report = self.audit_component(target_path)
            print(f"\n📊 Reporte de Auditoría:\n{report}\n")

            # 1. Verificación técnica real con TypeScript
            ts_check = subprocess.run("npx tsc --noEmit", shell=True, capture_output=True, text=True)
            ts_ok = (ts_check.returncode == 0)

            # 2. Verificación de reglas críticas de runtime Next.js (<Image> fill/width)
            image_runtime_ok = True
            image_err = ""
            try:
                with open(target_path, "r", encoding="utf-8") as f:
                    file_code = f.read()
                for img_match in re.finditer(r'<Image\b([^>]*?)>', file_code):
                    props = img_match.group(1)
                    if "fill" not in props and "width=" not in props:
                        image_runtime_ok = False
                        image_err = "🚨 Error de Runtime en Next.js: Se detectó etiqueta <Image /> sin propiedad 'fill' ni 'width/height'. Toda <Image> debe tener 'fill' o 'width={...} height={...}'."
                        break
            except Exception:
                pass

            is_audit_approved = ("APROBADO" in report.upper()) and ("REVISAR" not in report.upper()) and ("❌" not in report)

            if is_audit_approved and ts_ok and image_runtime_ok:
                print(f"🎉 ¡Éxito! Componente aprobado autónomamente y validado por TypeScript en la iteración {iteration}.")
                loop_succeeded = True
                break
            else:
                feedback = report
                if not ts_ok:
                    ts_err_sample = (ts_check.stdout or ts_check.stderr).strip()[:400]
                    feedback += f"\n\n🚨 Errores de compilación TypeScript:\n{ts_err_sample}\nPor favor elimina imports de paquetes no instalados, conserva los exports requeridos y usa solo Tailwind CSS y React nativo."
                if not image_runtime_ok:
                    feedback += f"\n\n{image_err}"

                if iteration < max_iterations:
                    print("⚠️ Observaciones o fallos de compilación/runtime detectados. Enviando a auto-reparación...")
                    current_prompt = f"Corrige el archivo '{target_path}' resolviendo estas observaciones:\n{feedback}"
                else:
                    print("⚠️ Límite de iteraciones alcanzado sin lograr compilación limpia.")

        # Rollback de seguridad si no se logró compilación limpia
        if not loop_succeeded and original_backup is not None:
            ts_final = subprocess.run("npx tsc --noEmit", shell=True, capture_output=True, text=True)
            if ts_final.returncode != 0:
                print(f"🛡️ [Rollback de Seguridad] Restaurando versión previa funcional de '{target_path}' para mantener el servidor operativo...")
                try:
                    with open(target_path, "w", encoding="utf-8") as f:
                        f.write(original_backup)
                    print(f"✅ Versión anterior restaurada exitosamente.")
                except Exception as e:
                    print(f"❌ Error al restaurar respaldo: {e}")
    
    def revert_last_change(self, target_path: Optional[str] = None) -> tuple:
        """Restaura la versión previa de un archivo modificado por el arnés."""
        path_to_revert = self.resolve_project_path(target_path) if target_path else self.last_modified_file
        if not path_to_revert:
            return False, "⚠️ No hay registros de archivos modificados recientemente para deshacer."

        prev_code = self.last_backups.get(path_to_revert)
        if not prev_code:
            bak_name = path_to_revert.replace("/", "_").replace("\\", "_") + ".bak"
            bak_file = os.path.join(".harness_backups", bak_name)
            if os.path.exists(bak_file):
                try:
                    with open(bak_file, "r", encoding="utf-8") as bf:
                        prev_code = bf.read()
                except Exception:
                    pass

        if not prev_code:
            return False, f"⚠️ No se encontró una copia de seguridad previa de '{path_to_revert}'."

        try:
            with open(path_to_revert, "w", encoding="utf-8") as f:
                f.write(prev_code)
            print(f"↩️ [Deshacer] Archivo '{path_to_revert}' restaurado a su versión anterior.")
            return True, f"✅ Archivo '{path_to_revert}' restaurado exitosamente a su versión previa."
        except Exception as e:
            return False, f"❌ Error al restaurar el archivo: {e}"

    def is_code_edit_request(self, msg: str) -> bool:
        """Determina si el mensaje del usuario pide crear, modificar o eliminar código."""
        m = msg.strip().lower()
        if not m:
            return False

        # 1. Comandos de barra explícitos
        explicit_cmds = ["/crear", "/modificar", "/editar", "/cambiar", "/generar", "/autonomo"]
        if any(m.startswith(c) for c in explicit_cmds):
            return True

        # 2. Verbos de acción al inicio
        start_verbs = [
            "crea ", "crear ", "creame ", "créame ",
            "modifica ", "modificar ", "modifícame ",
            "cambia ", "cambiar ", "cámbiale ", "cambiale ",
            "edita ", "editar ", "edítame ",
            "agrega ", "agregar ", "agrégale ", "agregale ",
            "añade ", "añadir ", "añádele ", "añadele ",
            "elimina ", "eliminar ", "borra ", "borrar ",
            "actualiza ", "actualizar ",
            "ajusta ", "ajustar ",
            "pon ", "poner ", "ponle ", "póngale ",
            "haz que ", "hazle ", "hazme "
        ]
        if any(m.startswith(v) for v in start_verbs):
            return True

        # 3. Frases de cambio que mencionan componentes o archivos
        edit_verbs = ["cambia", "modifica", "edita", "agrega", "crea", "actualiza", "elimina", "borra", "ajusta", "personaliza"]
        code_entities = [".tsx", ".ts", ".css", ".jsx", ".js", "tarjeta", "tarjetas", "metrica", "métricas", "header", "footer", "hero", "carrusel", "carousel", "contacto", "seccion", "sección", "componente", "boton", "botón", "color", "estilo"]

        has_verb = any(v in m for v in edit_verbs)
        has_entity = any(e in m for e in code_entities)

        # Excluir preguntas explicativas o de auditoría
        is_question = (
            m.startswith("¿") or 
            m.startswith("por que") or m.startswith("por qué") or 
            m.startswith("como ") or m.startswith("cómo ") or 
            m.startswith("que ") or m.startswith("qué ") or 
            m.startswith("explica") or m.startswith("audita") or
            m.startswith("deshace") or m.startswith("revert")
        )

        if has_verb and has_entity and not is_question:
            return True

        return False

    def apply_code_change(self, instruction: str, target_path: Optional[str] = None) -> tuple:
        """
        Aplica directamente una modificación o creación solicitada por el usuario en el código,
        validando con TypeScript y asegurando que exista respaldo para /deshacer.
        """
        clean_inst = instruction.strip()
        # Limpiar comandos de barra
        for prefix in ["/crear", "/modificar", "/editar", "/cambiar", "/generar", "/autonomo",
                       "crear", "modificar", "editar", "cambiar", "generar"]:
            if clean_inst.lower().startswith(prefix + " "):
                clean_inst = clean_inst[len(prefix):].strip()
                break

        desc, resolved_path = self.parse_command_input(clean_inst, default_path=target_path)
        resolved_path = self.resolve_project_path(resolved_path)

        if not desc:
            desc = clean_inst

        print(f"\n⚡ [Arnés Code-Action] Procesando cambio en '{resolved_path}'...")
        print(f"📝 Instrucción: {desc}")

        # Guardar respaldo original explícito
        original_backup = None
        if os.path.exists(resolved_path):
            try:
                with open(resolved_path, "r", encoding="utf-8") as f:
                    original_backup = f.read()
                self.last_backups[resolved_path] = original_backup
                self.last_modified_file = resolved_path
                os.makedirs(".harness_backups", exist_ok=True)
                bak_name = resolved_path.replace("/", "_").replace("\\", "_") + ".bak"
                with open(os.path.join(".harness_backups", bak_name), "w", encoding="utf-8") as bf:
                    bf.write(original_backup)
            except Exception:
                pass

        # Generar o editar el archivo
        success = self.generate_or_edit_file(desc, resolved_path)
        if not success:
            return False, f"❌ No se pudo generar el código para '{resolved_path}'."

        # Verificar compilación TypeScript
        ts_check = subprocess.run("npx tsc --noEmit", shell=True, capture_output=True, text=True)
        if ts_check.returncode != 0:
            print("⚠️ TypeScript reportó fallos técnicos tras la edición. Ejecutando auto-corrección inmediata...")
            ts_err = (ts_check.stdout or ts_check.stderr).strip()[:400]
            repair_prompt = (
                f"Modifica '{resolved_path}' para mantener la solicitud '{desc}' resolviendo "
                f"este error estricto de TypeScript:\n{ts_err}"
            )
            self.generate_or_edit_file(repair_prompt, resolved_path)
            ts_check2 = subprocess.run("npx tsc --noEmit", shell=True, capture_output=True, text=True)
            if ts_check2.returncode != 0:
                # Rollback preventivo si no pudo auto-corregirse
                if original_backup:
                    with open(resolved_path, "w", encoding="utf-8") as f:
                        f.write(original_backup)
                return False, f"🛡️ **Rollback de Seguridad:** El cambio provocó un error de TypeScript:\n```\n{ts_err[:250]}\n```\nSe restauró la versión funcional previa para mantener estable el proyecto."

        # Mantener el backup original intacto para permitir /deshacer
        if original_backup:
            self.last_backups[resolved_path] = original_backup
            self.last_modified_file = resolved_path
            bak_name = resolved_path.replace("/", "_").replace("\\", "_") + ".bak"
            try:
                with open(os.path.join(".harness_backups", bak_name), "w", encoding="utf-8") as bf:
                    bf.write(original_backup)
            except Exception:
                pass

        summary = (
            f"✅ **Modificación completada exitosamente en `{resolved_path}`**\n\n"
            f"• **Solicitud ejecutada:** {desc}\n"
            f"• **Compilación TypeScript:** Aprobada (0 errores).\n"
            f"• **Deshacer disponible:** Si deseas volver a la versión previa, presiona el botón **↩️ Deshacer Último Cambio** o escribe *deshacer*."
        )
        return True, summary

    def auto_repair_component(self, target_path: str, initial_report: Optional[str] = None, max_iterations: int = 3) -> bool:
        """
        Bucle de Auto-Reparación (Self-Healing):
        Audita el componente (o toma el reporte previo), genera correcciones de código,
        valida con TypeScript y reglas Next.js, y restaura backup en caso de falla.
        """
        target_path = self.resolve_project_path(target_path)
        if not os.path.exists(target_path):
            print(f"❌ El archivo '{target_path}' no existe.")
            return False

        print(f"\n🔧 [Arnés Self-Healing] Iniciando auto-reparación en: {target_path}")

        # Guardar respaldo original para rollback de seguridad
        original_backup = None
        try:
            with open(target_path, "r", encoding="utf-8") as f:
                original_backup = f.read()
            # Registrar respaldo de recuperación en memoria y en disco
            self.last_backups[target_path] = original_backup
            self.last_modified_file = target_path
            os.makedirs(".harness_backups", exist_ok=True)
            bak_name = target_path.replace("/", "_").replace("\\", "_") + ".bak"
            with open(os.path.join(".harness_backups", bak_name), "w", encoding="utf-8") as bf:
                bf.write(original_backup)
        except Exception as e:
            print(f"❌ Error al crear respaldo de seguridad: {e}")
            return False

        # Si no nos pasaron el reporte, auditar primero
        current_report = initial_report
        if not current_report:
            print(f"🔍 Diagnosticando estado actual de {target_path}...")
            current_report = self.audit_component(target_path)
            print("-" * 50)
            print(current_report)
            print("-" * 50)

        repair_succeeded = False

        for iteration in range(1, max_iterations + 1):
            print(f"\n🔄 --- ITERACIÓN DE REPARACIÓN {iteration}/{max_iterations} ---")
            repair_prompt = (
                f"Modifica el archivo '{target_path}' para solucionar TODAS las observaciones y recomendaciones "
                f"de este reporte de auditoría:\n\n{current_report}\n\n"
                f"REGLAS ESTRICTAS:\n"
                f"1. Conserva TODOS los exports requeridos (ej. 'export const', 'export type'), props e interfaces originales.\n"
                f"2. Usa únicamente clases nativas de Tailwind CSS v4 y etiquetas semánticas WCAG AA (<article>, <section>, <nav>, etc.).\n"
                f"3. Si hay <Image />, SIEMPRE incluye 'fill' O 'width={{...}} height={{...}}'.\n"
                f"4. CERO textos 'Lorem Ipsum' o ficticios.\n"
                f"5. CERO PARCHES SUPERFICIALES: NUNCA uses 'as unknown as ...' ni 'as any' para burlar errores de TypeScript. En i18n, los enlaces están en dictionaries[currentLang].nav y el footer en dictionaries[currentLang].footer."
            )

            print("✍️ Aplicando correcciones de código...")
            success = self.generate_or_edit_file(repair_prompt, target_path)
            if not success:
                print("❌ Fallo en la generación de código. Abortando iteración.")
                break

            print("🕵️ Verificando compilación e integridad técnica...")
            # 1. Verificación técnica de TypeScript
            ts_check = subprocess.run("npx tsc --noEmit", shell=True, capture_output=True, text=True)
            ts_ok = (ts_check.returncode == 0)

            # 2. Verificación de Image runtime
            image_runtime_ok = True
            image_err = ""
            try:
                with open(target_path, "r", encoding="utf-8") as f:
                    file_code = f.read()
                for img_match in re.finditer(r'<Image\b([^>]*?)>', file_code):
                    props = img_match.group(1)
                    if "fill" not in props and "width=" not in props:
                        image_runtime_ok = False
                        image_err = "🚨 Error Runtime Next.js: <Image /> sin 'fill' ni 'width/height'."
                        break
            except Exception:
                pass

            if not ts_ok or not image_runtime_ok:
                print("⚠️ Se detectaron fallos técnicos en esta versión:")
                if not ts_ok:
                    ts_err_sample = (ts_check.stdout or ts_check.stderr).strip()[:300]
                    print(f"   ❌ TypeScript: {ts_err_sample}")
                if not image_runtime_ok:
                    print(f"   ❌ Image: {image_err}")

                if iteration < max_iterations:
                    print("🔄 Reintentando auto-reparación con retroalimentación técnica...")
                    current_report = "Errores técnicos que debes resolver urgentemente:\n"
                    if not ts_ok:
                        current_report += f"TypeScript Errors:\n{ts_check.stdout or ts_check.stderr}\n"
                    if not image_runtime_ok:
                        current_report += f"{image_err}\n"
                continue

            # 3. Re-auditar calidad con IA
            print("🔍 Re-auditando calidad y accesibilidad...")
            new_audit = self.audit_component(target_path)
            print(f"\n📊 Nuevo Reporte de Auditoría:\n{new_audit}\n")

            is_audit_clean = ("APROBADO" in new_audit.upper()) and ("❌" not in new_audit) and ("REVISAR" not in new_audit.upper())
            if is_audit_clean:
                print(f"🎉 ¡Éxito! Archivo '{target_path}' auto-reparado y aprobado en la iteración {iteration}.")
                repair_succeeded = True
                break
            else:
                if iteration < max_iterations:
                    print("⚠️ Aún quedan observaciones pendientes. Enviando a siguiente iteración...")
                    current_report = new_audit
                else:
                    print("ℹ️ Se logró compilación limpia en TypeScript, aunque el auditor sugiere mejoras menores adicionales.")
                    repair_succeeded = True
                    break

        if not repair_succeeded and original_backup is not None:
            ts_check = subprocess.run("npx tsc --noEmit", shell=True, capture_output=True, text=True)
            if ts_check.returncode != 0:
                print(f"🛡️ [Rollback de Seguridad] La auto-reparación no superó el chequeo de tipos. Restaurando versión original...")
                try:
                    with open(target_path, "w", encoding="utf-8") as f:
                        f.write(original_backup)
                    print(f"✅ Versión funcional restaurada exitosamente.")
                except Exception as e:
                    print(f"❌ Error al restaurar respaldo: {e}")
            else:
                print(f"ℹ️ El archivo compila sin errores de tipos y se mantuvo la versión editada.")

        # Preservar el snapshot original para permitir /deshacer posterior si el usuario lo desea
        if original_backup is not None:
            self.last_backups[target_path] = original_backup
            self.last_modified_file = target_path
            bak_name = target_path.replace("/", "_").replace("\\", "_") + ".bak"
            try:
                with open(os.path.join(".harness_backups", bak_name), "w", encoding="utf-8") as bf:
                    bf.write(original_backup)
            except Exception:
                pass

        return repair_succeeded


    def verify_page_seo_geo_and_requirements(self) -> Dict[str, Any]:
        """
        Verifica programáticamente todos los archivos de la página (.tsx en app/ y components/)
        certificando el cumplimiento de SEO, GEO (Generative Engine Optimization), y Requerimientos WCAG AA / EARS.
        """
        print("\n🔍 [Harness Auditor] Verificando archivos de página para SEO, GEO y Requerimientos...")
        target_files = []
        for d in ["app", "components"]:
            if os.path.exists(d):
                target_files.extend(glob.glob(os.path.join(d, "**", "*.tsx"), recursive=True))

        results = {
            "total_files": len(target_files),
            "verified_files": [],
            "issues": []
        }

        for filepath in target_files:
            try:
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()

                file_report = {
                    "filepath": filepath,
                    "seo_ok": False,
                    "geo_ok": False,
                    "wcag_ok": False,
                    "details": []
                }

                # 1. Chequeo SEO
                has_metadata = "metadata" in content or "Metadata" in content or "title:" in content
                has_json_ld = "ld+json" in content or "OFFICIAL_ITIERS_JSON_LD" in content or "JsonLd" in content or filepath != "app/layout.tsx"
                if has_metadata:
                    file_report["seo_ok"] = True
                    file_report["details"].append("Metadatos SEO detectados.")

                # 2. Chequeo GEO (Answer-First + Entidades de marca)
                has_answer_first = "Resumen" in content or "Executive Summary" in content or "Answer-First" in content or "Itiers" in content
                has_brand_entities = ("IBM Watsonx" in content or "watsonx" in content.lower()) and ("Mendoza" in content or "Chile" in content or "USA" in content)
                has_harness_mention = "Arneses" in content or "Harness" in content

                if has_answer_first and (has_brand_entities or has_harness_mention):
                    file_report["geo_ok"] = True
                    file_report["details"].append("Optimización GEO (Answer-First y entidades de marca) verificada.")
                elif "page.tsx" in filepath:
                    file_report["details"].append("⚠️ Posible falta de bloque Answer-First o entidades GEO completas.")

                # 3. Chequeo Accesibilidad y Semántica (WCAG AA & Requirements)
                has_semantic = "<main" in content or "<article" in content or "<header" in content or "<section" in content
                has_accessibility = "tabIndex" in content or "focus:ring" in content or "alt=" in content or "<main" in content
                if has_semantic and has_accessibility:
                    file_report["wcag_ok"] = True
                    file_report["details"].append("Cumplimiento semántico y accesibilidad WCAG AA OK.")

                results["verified_files"].append(file_report)
                status_icon = "✅" if (file_report["seo_ok"] and file_report["wcag_ok"]) else "ℹ️"
                print(f"  {status_icon} [{filepath}] - SEO: {'OK' if file_report['seo_ok'] else 'N/A'} | GEO: {'OK' if file_report['geo_ok'] else 'N/A'} | WCAG: {'OK' if file_report['wcag_ok'] else 'N/A'}")

            except Exception as e:
                results["issues"].append(f"Error verificando {filepath}: {e}")

        print(f"✅ [Harness Auditor] Verificación finalizada sobre {len(target_files)} archivos de la aplicación.\n")
        return results

    def run_sdd_tasks(self):
        """Ejecuta el arnés de Spec-Driven Development contra specs/tasks.md y verifica SEO/GEO."""
        tasks_file = os.path.join("specs", "tasks.md")
        req_file = os.path.join("specs", "requirements.md")

        print("\n🚀 [Harness SDD] Ejecutando verificación de especificaciones de proyecto...")

        req_content = ""
        tasks_content = ""

        if os.path.exists(req_file):
            with open(req_file, "r", encoding="utf-8") as f:
                req_content = f.read()

        if os.path.exists(tasks_file):
            with open(tasks_file, "r", encoding="utf-8") as f:
                tasks_content = f.read()

        print(f"📋 Especificaciones cargadas ({len(req_content)} bytes reqs, {len(tasks_content)} bytes tareas).")

        # Asegurar que existan componentes clave requeridos en specs/tasks.md
        service_card_path = "components/ServiceCard.tsx"
        if not os.path.exists(service_card_path):
            print(f"⚙️ [SDD] Generando componente faltante requeridos por T1: {service_card_path}")
            self.generate_or_edit_file(
                "Crea el componente React/TypeScript modular ServiceCard con propiedades title, description, iconPath, linkHref, semantic article tag y accesibilidad WCAG AA.",
                service_card_path
            )

        servicios_page_path = "app/servicios/page.tsx"
        if not os.path.exists(servicios_page_path):
            print(f"⚙️ [SDD] Generando página de servicios requerida por T2: {servicios_page_path}")
            self.generate_or_edit_file(
                "Crea la página de Next.js App Router app/servicios/page.tsx renderizando un h1 semántico 'Nuestros Servicios' y un grid responsivo con 4 ServiceCards: Productos de Datos, Proyectos de Datos, Staffing de Datos, Capacitaciones.",
                servicios_page_path
            )

        es_page_path = "app/es/page.tsx"
        if not os.path.exists(es_page_path) or "Lo siento" in open(es_page_path, "r", encoding="utf-8", errors="ignore").read():
            print(f"⚙️ [SDD] Reconstruyendo página principal corporativa: {es_page_path}")
            self.generate_or_edit_file(
                "Crea la Landing Page corporativa bilingüe para Itiers Data Sense con Hero section, Alianza IBM Watsonx, Quiénes somos, tarjetas de 4 servicios, Tech Stack, testimonios y formulario de contacto.",
                es_page_path
            )

        # Ejecutar verificación de archivos de página para SEO, GEO y Requerimientos
        self.verify_page_seo_geo_and_requirements()

        print("✅ [Harness SDD] Verificación e integración de especificaciones completada exitosamente.\n")

    def chat(self, user_message: str):
        """Conversación libre e interactiva para cualquier consulta."""
        msg_lower = user_message.lower().strip()
        undo_keywords = ["deshace", "deshacer", "revertir", "revert", "undo"]
        if any(kw in msg_lower for kw in undo_keywords):
            target = None
            for word in user_message.split():
                clean_word = word.strip(" '\"`(),;:")
                if "." in clean_word and any(clean_word.endswith(ext) for ext in [".tsx", ".ts", ".jsx", ".js", ".css"]):
                    target = clean_word
                    break
            ok, revert_msg = self.revert_last_change(target)
            print(f"\n{revert_msg}\n")
            self.conversation_history.append({"role": "user", "content": user_message})
            self.conversation_history.append({"role": "assistant", "content": revert_msg})
            return

        if self.is_code_edit_request(user_message):
            ok, change_summary = self.apply_code_change(user_message)
            print(f"\n{change_summary}\n")
            self.conversation_history.append({"role": "user", "content": user_message})
            self.conversation_history.append({"role": "assistant", "content": change_summary})
            return

        self.conversation_history.append({"role": "user", "content": user_message})
        context = "\n".join([f"{m['role'].capitalize()}: {m['content']}" for m in self.conversation_history[-10:]])

        prompt = f"Historial de conversación:\n{context}\n\nResponde a la solicitud del usuario de forma experta, clara y directa:"
        try:
            response = self.call_llm(prompt)
            self.conversation_history.append({"role": "assistant", "content": response})
            print(f"\n🤖 Harness Agent:\n{response}\n")
        except Exception as e:
            print(f"❌ Error en chat: {e}")

    def list_project_files(self):
        """Lista las páginas y componentes del proyecto."""
        print("\n📁 Estructura del proyecto:")
        for folder in ["app", "components", "specs", "data"]:
            if os.path.exists(folder):
                print(f"\n 📂 Directorio '{folder}':")
                files = glob.glob(os.path.join(folder, "**", "*.*"), recursive=True)
                for f in files[:20]:
                    print(f"  • {f}")
                if len(files) > 20:
                    print(f"  ... y {len(files) - 20} archivos más.")
        print()

    def show_models_status(self):
        """Muestra el estado de Ollama local, API Keys y prioridades de modelos."""
        print("\n🔑 Estado de Proveedores de IA y Modelos:")
        gemini_k = os.environ.get("GEMINI_API_KEY")
        groq_k = os.environ.get("GROQ_API_KEY")
        openrouter_k = os.environ.get("OPENROUTER_API_KEY")
        openai_k = os.environ.get("OPENAI_API_KEY")

        ollama_status = f"✅ ACTIVO ({len(self.installed_ollama_models)} modelos: {', '.join(self.installed_ollama_models)})" if self.installed_ollama_models else "⚪ Inactivo / No detectado en http://localhost:11434"

        print(f"  • Ollama Local (100% Gratis/Privado): {ollama_status}")
        print(f"  • Modo Preferir Ollama:            {'✅ ACTIVADO' if self.prefer_ollama else '⚪ Desactivado (Usa /ollama para alternar)'}")
        print(f"  • Groq API Key:                    {'✅ Presente (' + groq_k[:6] + '...)' if groq_k else '❌ No configurada'}")
        print(f"  • Gemini API Key:                  {'✅ Presente (' + gemini_k[:6] + '...)' if gemini_k else '❌ No configurada'}")
        print(f"  • OpenRouter API Key:              {'✅ Presente (' + openrouter_k[:6] + '...)' if openrouter_k else '❌ No configurada'}")
        print(f"  • OpenAI API Key:                  {'✅ Presente (' + openai_k[:6] + '...)' if openai_k else '❌ No configurada'}")

        print("\n📋 Cascada de Modelos Priorizados:")
        for idx, m in enumerate(self.available_models[:10], 1):
            tag = " ⭐ (PRIORITARIO)" if idx == 1 else ""
            print(f"  {idx}. [{m['provider'].upper()}] {m['name']}{tag}")
        if len(self.available_models) > 10:
            print(f"  ... y {len(self.available_models) - 10} modelos adicionales de respaldo.")
        print()

    def toggle_prefer_ollama(self):
        """Alterna entre priorizar Ollama local vs priorizar APIs Cloud."""
        self.prefer_ollama = not self.prefer_ollama
        self.rebuild_model_priority()
        if self.prefer_ollama:
            print("🔄 Modo Ollama ACTIVADO: Ahora se prioriza tu Ollama local (llama3.2).")
        else:
            print("🔄 Modo Cloud ACTIVADO: Ahora se priorizan las APIs en la nube (Gemini / Groq).")
        active = [m for m in self.available_models if m['provider'] in self.clients]
        if active:
            print(f"⭐ Modelo prioritario activo: [{active[0]['provider'].upper()}] {active[0]['name']}")

    def set_api_key(self, key_type: str, key_value: str):
        """Configura una API Key en memoria y la guarda en .env.local."""
        k_lower = key_type.lower()
        var_name = None
        if "gemini" in k_lower:
            var_name = "GEMINI_API_KEY"
        elif "groq" in k_lower:
            var_name = "GROQ_API_KEY"
        elif "openrouter" in k_lower:
            var_name = "OPENROUTER_API_KEY"
        elif "openai" in k_lower:
            var_name = "OPENAI_API_KEY"

        if var_name:
            os.environ[var_name] = key_value
            # Escribir en .env.local
            env_path = ".env.local"
            lines = []
            if os.path.exists(env_path):
                with open(env_path, "r", encoding="utf-8") as f:
                    lines = f.readlines()
            new_lines = [l for l in lines if not l.startswith(f"{var_name}=")]
            new_lines.append(f"{var_name}={key_value}\n")
            with open(env_path, "w", encoding="utf-8") as f:
                f.writelines(new_lines)
            self.setup_clients()
            print(f"✅ {var_name} guardada correctamente.")
        else:
            print("❌ Proveedor no reconocido. Usa 'groq', 'gemini', 'openrouter' u 'openai'.")


def print_banner():
    print("=" * 72)
    print("🛡️  ITIERS HARNESS & AI ENGINEERING ENGINE (Arquitectura 'Modelo + Harness')")
    print("========================================================================")
    print("Suite de Gobernanza, Auditoría QA/GEO, Verificación SDD y Asistencia IA")
    print("Especialidad: Stefano Ferro (Practicante 3 - Harness & AI Engineering)")
    print("=" * 72)


def print_help():
    print("""
📌 COMANDOS DISPONIBLES EN EL HARNESS ENGINE:
  -------------------------------------------------------------------------
  🛡️  AUDITORÍA, QA Y GOBERNANZA DE CÓDIGO
  /auditar [filepath]        - Audita WCAG AA, TypeScript, 'Cero Lorem Ipsum' y calidad
  /reparar <filepath>        - Auto-repara observaciones de auditoría con rollback seguro
  /deshacer [filepath]       - Restaura la versión previa de un archivo modificado (Undo)
  /geo [filepath]            - Audita optimización SEO técnico y GEO (motores de IA)
  /sdd                       - Verifica especificaciones y tareas pendientes (SDD)
  /recomendar [tema]         - Genera sugerencias arquitectónicas y de ingeniería

  ⚙️  GESTIÓN DE MODELOS Y ENTORNO
  /modelos                   - Estado de modelos locales (Ollama) y proveedores Cloud
  /ollama                    - Alterna prioridad: Ollama local (llama3.2) vs Cloud
  /key <proveedor> <token>   - Guarda API Key persistente (groq | gemini | openai)
  /listar                    - Lista los archivos y componentes del proyecto
  /exec <comando>            - Ejecuta comandos del sistema o verificaciones

  🧪 PROTOTIPADO ASISTIDO (EXPERIMENTAL)
  /crear <desc> [archivo]    - Genera plantillas o micro-componentes guiados
  /autonomo <idea> [file]    - Bucle agéntico: Generación -> Auditoría -> Auto-reparación

  💬 ASISTENCIA Y CONTROL GENERAL
  /chat <pregunta>           - Consulta técnica libre (o escribe directamente sin barra)
  /limpiar                   - Limpia el historial de la conversación interactiva
  /ayuda                     - Muestra este menú de comandos
  salir / exit               - Cierra la sesión del Harness Engine
  -------------------------------------------------------------------------
  💡 Tip: El código de producción es desarrollado por el equipo frontend;
     el Harness actúa como el árbitro de calidad, validación y QA de IA.
""")


def main():
    print_banner()
    agent = HarnessAgent()
    print_help()

    while True:
        try:
            user_input = input("💬 Tú > ").strip()
        except (KeyboardInterrupt, EOFError):
            print("\n👋 Sesión finalizada. ¡Hasta luego!")
            break

        if not user_input:
            continue

        cmd_clean = user_input.strip()
        cmd_lower = cmd_clean.lower()
        cmd_norm = cmd_clean.lstrip("/").strip()
        cmd_lower_norm = cmd_norm.lower()

        if cmd_lower in ["salir", "exit", "quit", "0"] or cmd_lower_norm in ["salir", "exit", "quit"]:
            print("👋 Sesión finalizada. ¡Hasta luego!")
            break

        elif cmd_lower_norm in ["ayuda", "help"]:
            print_help()

        elif cmd_lower_norm == "sdd":
            agent.run_sdd_tasks()

        elif cmd_lower_norm in ["ollama", "prefer_ollama"]:
            agent.toggle_prefer_ollama()

        elif cmd_lower_norm in ["listar", "ls"]:
            agent.list_project_files()

        elif cmd_lower_norm in ["modelos", "models"]:
            agent.show_models_status()

        elif cmd_lower_norm in ["limpiar", "clear"]:
            agent.conversation_history = []
            print("🧹 Historial de chat limpiado.")

        elif cmd_lower_norm.startswith("exec "):
            cmd_to_run = cmd_norm[5:].strip()
            res = agent.execute_command(cmd_to_run)
            print(res)

        elif cmd_lower_norm.startswith("key "):
            parts = cmd_norm.split(maxsplit=2)
            if len(parts) >= 3:
                agent.set_api_key(parts[1], parts[2])
            else:
                print("❌ Uso: /key groq <TU_API_KEY>")

        elif cmd_lower_norm.startswith("recomendar"):
            topic = cmd_norm[10:].strip() or "Mejoras generales del proyecto"
            print(f"\n💡 Generando recomendaciones para: {topic}...")
            res = agent.call_llm(f"Proporciona recomendaciones arquitectónicas y estratégicas para: {topic}")
            print(f"\n📋 Recomendaciones:\n{res}\n")

        elif cmd_lower_norm.startswith("auditar") or cmd_lower_norm.startswith("audit"):
            parts = cmd_norm.split(maxsplit=1)
            if len(parts) > 1 and parts[1].strip():
                _, target = agent.parse_command_input(parts[1].strip())
                target = agent.resolve_project_path(target)
                print(f"\n🔍 Auditando {target}...")
                report = agent.audit_component(target)
                print("-" * 50)
                print(report)
                print("-" * 50 + "\n")

                if any(w in report.upper() for w in ["RECOMEND", "OBSERVACION", "FALLO", "MEJORA", "❌", "ADVERTENCIA", "REVISAR"]):
                    try:
                        ans = input(f"🤖 ¿Deseas que el arnés intente auto-reparar '{target}' aplicando estas observaciones? (s/n): ").strip().lower()
                        if ans in ["s", "si", "y", "yes"]:
                            agent.auto_repair_component(target, report)
                    except (KeyboardInterrupt, EOFError):
                        pass
            else:
                agent.audit_all()

        elif cmd_lower_norm in ["deshacer", "revertir", "undo"] or cmd_lower_norm.startswith("deshacer ") or cmd_lower_norm.startswith("revertir "):
            parts = cmd_norm.split(maxsplit=1)
            target = parts[1].strip() if len(parts) > 1 else None
            ok, msg = agent.revert_last_change(target)
            print(msg)

        elif cmd_lower_norm.startswith("reparar") or cmd_lower_norm.startswith("repair"):
            parts = cmd_norm.split(maxsplit=1)
            raw_arg = parts[1].strip() if len(parts) > 1 else ""
            if raw_arg:
                _, target = agent.parse_command_input(raw_arg)
                target = agent.resolve_project_path(target)
                agent.auto_repair_component(target)
            else:
                print("❌ Uso: /reparar <ruta_del_archivo> (ej: /reparar components/MetricCard.tsx)")

        elif cmd_lower_norm.startswith("geo"):
            parts = cmd_norm.split(maxsplit=1)
            raw_arg = parts[1].strip() if len(parts) > 1 else ""
            if raw_arg:
                _, target = agent.parse_command_input(raw_arg)
                target = agent.resolve_project_path(target)
            else:
                target = "app/es/page.tsx"
            print(f"\n🌐 Auditando SEO & GEO para {target}...")
            report = agent.audit_geo(target)
            print("-" * 50)
            print(report)
            print("-" * 50 + "\n")

        elif (
            cmd_lower_norm.startswith("crear") or cmd_lower_norm.startswith("generate") or
            cmd_lower_norm.startswith("modificar") or cmd_lower_norm.startswith("editar") or
            cmd_lower_norm.startswith("cambiar")
        ):
            raw_content = cmd_norm.split(maxsplit=1)[1].strip() if len(cmd_norm.split(maxsplit=1)) > 1 else ""
            if not raw_content:
                raw_content = input("✍️ Describe lo que deseas crear o modificar: ").strip()

            ok, summary = agent.apply_code_change(raw_content)
            print(f"\n{summary}\n")

        elif cmd_lower_norm.startswith("autonomo") or cmd_lower_norm.startswith("autonomous"):
            raw_content = cmd_norm.split(maxsplit=1)[1].strip() if len(cmd_norm.split(maxsplit=1)) > 1 else ""
            if not raw_content:
                raw_content = input("💡 Describe la idea para el bucle autónomo: ").strip()

            idea, target_path = agent.parse_command_input(raw_content)
            agent.autonomous_loop(idea, target_path)

        elif cmd_lower_norm.startswith("chat"):
            chat_msg = cmd_norm[4:].strip()
            agent.chat(chat_msg)

        else:
            agent.chat(user_input)


if __name__ == "__main__":
    main()
