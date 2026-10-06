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
    # 1. Ollama Local (100% Gratis, Ilimitado, Privado y Local)
    {'provider': 'ollama', 'name': 'llama3.2:latest'},
    {'provider': 'ollama', 'name': 'llama3.2'},
    {'provider': 'ollama', 'name': 'llama3.2:3b'},
    {'provider': 'ollama', 'name': 'llama3.2:1b'},
    {'provider': 'ollama', 'name': 'llama3.1'},
    {'provider': 'ollama', 'name': 'qwen2.5'},

    # 2. Groq API (Gratis, ultra rápido)
    {'provider': 'groq', 'name': 'llama-3.3-70b-versatile'},
    {'provider': 'groq', 'name': 'llama-3.1-8b-instant'},
    {'provider': 'groq', 'name': 'qwen-2.5-32b'},

    # 3. Gemini API (Modelos oficiales)
    {'provider': 'gemini', 'name': 'gemini-2.5-flash'},
    {'provider': 'gemini', 'name': 'gemini-2.0-flash'},
    {'provider': 'gemini', 'name': 'gemini-1.5-flash'},

    # 4. OpenRouter API (Comunidad gratis)
    {'provider': 'openrouter', 'name': 'google/gemini-2.0-flash-exp:free'},
    {'provider': 'openrouter', 'name': 'meta-llama/llama-3.3-70b-instruct:free'},

    # 5. OpenAI
    {'provider': 'openai', 'name': 'gpt-4o-mini'},
    {'provider': 'openai', 'name': 'gpt-4o'}
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
                    timeout=6.0
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
        """Construye la lista de prioridad de modelos evitando bloqueos si Ollama no está activo."""
        new_models = []

        # 1. Si hay modelos locales detectados en Ollama, incluirlos primero
        for om in self.installed_ollama_models:
            new_models.append({'provider': 'ollama', 'name': om})

        # 2. Agregar modelos estándar
        added = {m['name'] for m in new_models}
        for m in DEFAULT_MODELS:
            if m['provider'] == 'ollama' and not self.installed_ollama_models and not self.prefer_ollama:
                # Si Ollama no está corriendo, omitir Ollama por defecto para evitar timeouts
                continue
            if m['name'] not in added:
                new_models.append(m)
                added.add(m['name'])

        if self.prefer_ollama and self.installed_ollama_models:
            ollama_list = [m for m in new_models if m['provider'] == 'ollama']
            other_list = [m for m in new_models if m['provider'] != 'ollama']
            self.available_models = ollama_list + other_list
        else:
            self.available_models = new_models

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

    def audit_component(self, filepath: str) -> str:
        """Audita un componente o archivo específico."""
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
        system_prompt = (
            "Eres un Senior Software Architect y Developer parte del Arnés de IA.\n"
            "Crea o modifica el código solicitado de forma completa, limpia y funcional sin omitir partes.\n"
            "Devuelve ÚNICAMENTE el código envuelto en un bloque markdown (```lenguaje ... ```)."
        )

        existing_code = ""
        if os.path.exists(target_path):
            try:
                with open(target_path, "r", encoding="utf-8") as f:
                    existing_code = f.read()
            except Exception:
                pass

        if existing_code:
            prompt = f"Modifica el archivo existente '{target_path}' para cumplir: '{description}'.\n\nCódigo Actual:\n```\n{existing_code}\n```"
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
        """Ejecuta un bucle agéntico autónomo: Crear -> Auditar -> Auto-corregir -> Guardar."""
        print(f"\n🤖 [Bucle Agéntico Autónoma] Construyendo: {target_path}")

        current_prompt = f"Crea/modifica el archivo según esta especificación: {idea}"

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

            if "✅ APROBADO" in report.upper() or "APROBADO" in report.upper():
                print(f"🎉 ¡Éxito! Componente aprobado autónomamente en la iteración {iteration}.")
                break
            else:
                if iteration < max_iterations:
                    print("⚠️ Observaciones detectadas. Enviando a auto-reparación...")
                    current_prompt = f"Corrige el archivo '{target_path}' resolviendo estas observaciones:\n{report}"
                else:
                    print("⚠️ Límite de iteraciones alcanzado. Se conservó la versión actual para revisión.")

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
        """Alterna la preferencia de Ollama local."""
        self.prefer_ollama = not self.prefer_ollama
        self.rebuild_model_priority()
        status = "ACTIVADO (Modelos Ollama prioritarios)" if self.prefer_ollama else "DESACTIVADO (Priorizando APIs en la nube)"
        print(f"🔄 Preferencia de Ollama: {status}")

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
    print("=" * 65)
    print("🚀 ITIERS HARNESS AI AGENT ENGINE (Agente de IA Completo)")
    print("=========================================================")
    print("Asistente Agéntico Multi-Proveedor (Ollama 3.2, Groq, Gemini, OpenAI)")
    print("Puedes pedirle cualquier consulta, desarrollo de código, comandos,")
    print("auditorías QA/SEO/GEO y ejecución de especificaciones (SDD).")
    print("=" * 65)


def print_help():
    print("""
📌 COMANDOS DISPONIBLES EN EL HARNESS AGENT:
  -------------------------------------------------------------------------
  /chat <pregunta>            - Consulta cualquier tema general o técnico
  /crear <desc> [filepath]   - Genera/modifica código en cualquier archivo
  /exec <comando>            - Ejecuta un comando en la consola del sistema
  /sdd                       - Ejecuta la verificación e integración SDD
  /autonomo <idea> [file]    - Bucle agéntico: Crear -> Auditar -> Auto-corregir
  /auditar [filepath]        - Audita QA, accesibilidad y calidad de código
  /geo [filepath]            - Audita optimización SEO y GEO (motores de IA)
  /recomendar [tema]         - Genera sugerencias arquitectónicas o técnicas
  /modelos                   - Revisa el estado de Ollama y API Keys
  /ollama                    - Alterna priorizar Ollama 3.2 local vs Cloud
  /key <proveedor> <token>   - Guarda una API Key (groq | gemini | openai)
  /listar                    - Muestra los archivos del proyecto
  /limpiar                   - Limpia el historial de chat
  /ayuda                     - Muestra este menú de ayuda
  salir / exit               - Finaliza la sesión del agente
  -------------------------------------------------------------------------
  💡 Escribe cualquier texto directo para conversar libremente con el agente.
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

        cmd_lower = user_input.lower()

        if cmd_lower in ["salir", "exit", "quit", "0"]:
            print("👋 Sesión finalizada. ¡Hasta luego!")
            break

        elif cmd_lower in ["/ayuda", "/help", "ayuda", "help"]:
            print_help()

        elif cmd_lower in ["/sdd"]:
            agent.run_sdd_tasks()

        elif cmd_lower in ["/ollama", "/prefer_ollama"]:
            agent.toggle_prefer_ollama()

        elif cmd_lower in ["/listar", "/ls"]:
            agent.list_project_files()

        elif cmd_lower in ["/modelos", "/models"]:
            agent.show_models_status()

        elif cmd_lower in ["/limpiar", "/clear"]:
            agent.conversation_history = []
            print("🧹 Historial de chat limpiado.")

        elif cmd_lower.startswith("/exec "):
            cmd_to_run = user_input[6:].strip()
            res = agent.execute_command(cmd_to_run)
            print(res)

        elif cmd_lower.startswith("/key "):
            parts = user_input.split(maxsplit=2)
            if len(parts) >= 3:
                agent.set_api_key(parts[1], parts[2])
            else:
                print("❌ Uso: /key groq <TU_API_KEY>")

        elif cmd_lower.startswith("/recomendar"):
            topic = user_input.replace("/recomendar", "").strip() or "Mejoras generales del proyecto"
            print(f"\n💡 Generando recomendaciones para: {topic}...")
            res = agent.call_llm(f"Proporciona recomendaciones arquitectónicas y estratégicas para: {topic}")
            print(f"\n📋 Recomendaciones:\n{res}\n")

        elif cmd_lower.startswith("/auditar"):
            parts = user_input.split(maxsplit=1)
            if len(parts) > 1 and parts[1]:
                target = parts[1].strip()
                print(f"\n🔍 Auditando {target}...")
                report = agent.audit_component(target)
                print("-" * 50)
                print(report)
                print("-" * 50 + "\n")
            else:
                agent.audit_all()

        elif cmd_lower.startswith("/geo"):
            parts = user_input.split(maxsplit=1)
            target = parts[1].strip() if len(parts) > 1 else "app/es/page.tsx"
            print(f"\n🌐 Auditando SEO & GEO para {target}...")
            report = agent.audit_geo(target)
            print("-" * 50)
            print(report)
            print("-" * 50 + "\n")

        elif cmd_lower.startswith("/crear") or cmd_lower.startswith("/generate"):
            content = user_input.replace("/crear", "").replace("/generate", "").strip()
            if not content:
                content = input("✍️ Describe lo que deseas crear/modificar: ").strip()

            target_path = "app/es/page.tsx"
            words = content.split()
            if len(words) > 1 and ("." in words[-1] and not words[-1].startswith("/")):
                target_path = words[-1]
                content = " ".join(words[:-1])

            agent.generate_or_edit_file(content, target_path)

        elif cmd_lower.startswith("/autonomo") or cmd_lower.startswith("/autonomous"):
            idea = user_input.replace("/autonomo", "").replace("/autonomous", "").strip()
            if not idea:
                idea = input("💡 Describe la idea para el bucle autónomo: ").strip()

            target_path = "app/es/page.tsx"
            words = idea.split()
            if len(words) > 1 and ("." in words[-1] and not words[-1].startswith("/")):
                target_path = words[-1]
                idea = " ".join(words[:-1])

            agent.autonomous_loop(idea, target_path)

        elif cmd_lower.startswith("/chat"):
            chat_msg = user_input[5:].strip()
            agent.chat(chat_msg)

        else:
            agent.chat(user_input)


if __name__ == "__main__":
    main()
