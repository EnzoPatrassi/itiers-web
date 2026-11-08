import os
import sys
import glob
import time
import re
import json
import urllib.request
import subprocess
from typing import List, Dict, Any, Optional

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

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


def load_dotenv():
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
                            v = parts[1].strip().strip('"').strip("'")
                            if k and v and k not in os.environ:
                                os.environ[k] = v
            except Exception:
                pass

load_dotenv()

DEFAULT_MODELS = [
    {'provider': 'gemini', 'name': 'gemini-3.5-flash'},
    {'provider': 'groq', 'name': 'llama-3.3-70b-versatile'},
    {'provider': 'openai', 'name': 'gpt-4o-mini'},
    {'provider': 'ollama', 'name': 'llama3.2:latest'}
]

class HarnessAgent:
    def __init__(self):
        self.clients = {}
        self.design_specs = ""
        self.installed_ollama_models = []
        self.prefer_ollama = os.environ.get("PREFER_OLLAMA", "").lower() in ["true", "1", "yes"]
        self.available_models = []
        self.last_backups = {}
        self.last_modified_file = None
        self.current_directory = "."
        self.setup_clients()
        self.load_design_specs()

    def setup_clients(self):
        self.clients = {}
        load_dotenv() # Recargar .env.local actualizado
        ollama_base_url = os.environ.get("OLLAMA_BASE_URL", "http://localhost:11434").rstrip('/')
        ollama_api_url = f"{ollama_base_url}/v1"

        self.installed_ollama_models = self.detect_ollama_models(ollama_base_url)

        if HAS_OPENAI and (self.installed_ollama_models or self.prefer_ollama):
            try:
                self.clients['ollama'] = OpenAI(base_url=ollama_api_url, api_key="ollama", timeout=60.0)
            except Exception:
                pass

        gemini_key = os.environ.get("GEMINI_API_KEY")
        if gemini_key and HAS_GENAI:
            try:
                self.clients['gemini'] = genai.Client(api_key=gemini_key)
            except Exception:
                pass

        groq_key = os.environ.get("GROQ_API_KEY")
        if groq_key and HAS_OPENAI:
            try:
                self.clients['groq'] = OpenAI(base_url="https://api.groq.com/openai/v1", api_key=groq_key, timeout=15.0)
            except Exception:
                pass

        openai_key = os.environ.get("OPENAI_API_KEY")
        if openai_key and HAS_OPENAI:
            try:
                self.clients['openai'] = OpenAI(api_key=openai_key, timeout=15.0)
            except Exception:
                pass

    def detect_ollama_models(self, base_url: str) -> List[str]:
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

    def load_design_specs(self):
        paths = [os.path.join("specs", "design.md"), "design-md-itiers.md"]
        for path in paths:
            if os.path.exists(path):
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        self.design_specs = f.read()
                        return
                except Exception:
                    pass

    def read_path_content(self, target_path: str) -> str:
        resolved = self.resolve_project_path(target_path)
        if not resolved or not os.path.exists(resolved):
            return f"❌ La ruta '{target_path}' no existe."
        if os.path.isfile(resolved):
            try:
                with open(resolved, "r", encoding="utf-8") as f:
                    return f.read()
            except Exception as e:
                return f"❌ Error leyendo archivo: {e}"
        return ""

    def resolve_project_path(self, raw_path: str) -> str:
        if not raw_path or raw_path.strip() in ["", ".", "./"]:
            return ""
        p = raw_path.strip().strip("'").strip('"').replace("\\", "/").lstrip("/")
        if os.path.exists(p):
            return p
        target_name = os.path.basename(p).rstrip("/")
        for root, dirs, files in os.walk("."):
            dirs[:] = [d for d in dirs if d not in [".next", "node_modules", ".git", "__pycache__", "out", "build", ".harness_backups"]]
            for f in files:
                if f.lower() == target_name.lower():
                    return os.path.relpath(os.path.join(root, f), ".").replace("\\", "/")
        return p

    def call_llm(self, prompt: str, system_prompt: Optional[str] = None) -> str:
        base_system = (
            "Eres el motor central del Arnés de IA de Itiers.\n"
            "Tienes libertad total para editar texto, agregar/quitar imágenes, modificar tamaños, carruseles, gráficos y estilos.\n"
            "Si para cumplir la solicitud necesitas editar o proponer cambios en archivos conectados (como tipos, interfaces o datos), puedes hacerlo.\n"
            "Devuelve código limpio y estructurado."
        )
        final_system = f"{base_system}\n\n{system_prompt}" if system_prompt else base_system

        if not self.clients:
            return "❌ [Error del Arnés] No hay clientes de IA configurados. Verifica tus API Keys en .env.local o inicia Ollama."

        for model_info in DEFAULT_MODELS:
            prov = model_info['provider']
            name = model_info['name']
            if prov not in self.clients:
                continue
            try:
                if prov == 'gemini':
                    res = self.clients['gemini'].models.generate_content(
                        model=name, contents=prompt,
                        config=types.GenerateContentConfig(system_instruction=final_system, temperature=0.2)
                    )
                    if res and res.text: return res.text.strip()
                elif prov in ['openai', 'groq', 'ollama']:
                    res = self.clients[prov].chat.completions.create(
                        model=name,
                        messages=[{"role": "system", "content": final_system}, {"role": "user", "content": prompt}],
                        temperature=0.2
                    )
                    if res and res.choices: return res.choices[0].message.content.strip()
            except Exception:
                continue
        return "❌ [Error de Petición] Todos los modelos en cascada fallaron o agotaron el tiempo de respuesta."

    def clean_code(self, raw_code: str) -> str:
        match = re.search(r'```(?:tsx|typescript|jsx|javascript|python|html|css|json|sh|bash)?\n(.*?)\n```', raw_code, re.DOTALL | re.IGNORECASE)
        if match: return match.group(1).strip()
        return raw_code.replace("```tsx", "").replace("```", "").strip()

    def generate_or_edit_file(self, description: str, target_path: str) -> tuple[bool, str]:
        resolved_path = self.resolve_project_path(target_path)
        if not resolved_path:
            return False, "❌ No se especificó un archivo objetivo válido."

        existing_code = ""
        if os.path.exists(resolved_path):
            try:
                with open(resolved_path, "r", encoding="utf-8") as f:
                    existing_code = f.read()
                self.last_backups[resolved_path] = existing_code
                self.last_modified_file = resolved_path
                os.makedirs(".harness_backups", exist_ok=True)
                bak_name = resolved_path.replace("/", "_").replace("\\", "_") + ".bak"
                with open(os.path.join(".harness_backups", bak_name), "w", encoding="utf-8") as bf:
                    bf.write(existing_code)
            except Exception:
                pass

        # ─── PROMPT ESTRICTO DE PROTECCIÓN DE IMPORTS Y LIBERTAD DE CONTENIDO ───
        system_prompt = (
            "Eres un Senior Software Architect y Developer experto en Next.js (App Router), React 19 y Tailwind CSS.\n"
            "REGLAS ABSOLUTAS PARA GARANTIZAR CERO ERRORES:\n"
            "1. **PRESERVACIÓN DE IMPORTACIONES:** NO modifiques, elimines ni inventes líneas de importación (`import ...`). Copia exactamente el bloque de importación tal como viene en el código original.\n"
            "2. **CERO LIBRERÍAS EXTERNAS NUEVAS:** Para crear carruseles, gráficos, barras de progreso, sliders o pestañas, **utiliza exclusivamente Tailwind CSS, Flexbox, Grid y estados nativos de React (`useState`, `useRef`)**. Queda terminantemente prohibido importar librerías de terceros (como swiper, recharts, lucide-react, etc.) que no estén ya declaradas en el archivo original.\n"
            "3. **LIBERTAD TOTAL DE DISEÑO:** Tu jefe tiene absoluta libertad para pedir textos, imágenes (<Image />), tamaños, carruseles interactivos con botones de siguiente/anterior, gráficos de barras con anchos porcentuales dinámicos y tarjetas corporativas. Diseña todo eso dentro del cuerpo del componente usando Tailwind puro.\n"
            "Devuelve el archivo completo dentro de un bloque markdown (```tsx ... ```) asegurando que compile perfectamente."
        )

        prompt = f"Modifica el archivo '{resolved_path}' para cumplir exactamente con esta solicitud de diseño/edición: '{description}'.\n\nCódigo Actual:\n```\n{existing_code}\n```"
        
        raw_response = self.call_llm(prompt, system_prompt)
        if raw_response.startswith("❌"):
            return False, raw_response

        new_code = self.clean_code(raw_response)
        if not new_code.strip():
            return False, "❌ La IA devolvió un código vacío."

        try:
            with open(resolved_path, "w", encoding="utf-8") as f:
                f.write(new_code)
        except Exception as e:
            return False, f"❌ Error al escribir en disco: {e}"

        # Validar TypeScript global (protege el proyecto completo)
        ts_check = subprocess.run("npx tsc --noEmit", shell=True, capture_output=True, text=True)
        if ts_check.returncode != 0:
            # Rollback automático
            if resolved_path in self.last_backups:
                with open(resolved_path, "w", encoding="utf-8") as f:
                    f.write(self.last_backups[resolved_path])
            
            return False, (
                "🛡️ **¡Cuidado preventivo!**\n"
                "La IA intentó un cambio que no encajaba del todo con la estructura de la página.\n"
                "**No te preocupes:** restauramos tu archivo anterior exactamente como lo tenías para que nada se rompa.\n\n"
                "💡 *Consejo:* Prueba escribir tu petición de otra forma (por ejemplo, sé un poco más específico con lo que quieres agregar o cambiar)."
            )

        return True, f"✅ Modificación completada y validada con éxito en `{resolved_path}`."

    def apply_code_change(self, instruction: str, target_path: Optional[str] = None) -> tuple[bool, str]:
        if not target_path:
            return False, "⚠️ Selecciona un archivo en la barra lateral para aplicar cambios en Modo Edición."
        return self.generate_or_edit_file(instruction, target_path)

    def answer_query(self, user_message: str, selected_file: Optional[str] = None) -> str:
        if selected_file and os.path.exists(selected_file):
            content = self.read_path_content(selected_file)
            prompt = f"Analiza el archivo '{selected_file}':\n```tsx\n{content}\n```\n\nPregunta: {user_message}"
            return self.call_llm(prompt, "Analista de código experto.")
        return self.call_llm(user_message, "Asistente Corporativo de Itiers.")

    def process_chat(self, user_message: str, selected_file: Optional[str] = None, edit_mode: bool = False) -> tuple:
        if edit_mode:
            ok, msg = self.apply_code_change(user_message, target_path=selected_file)
            return msg, selected_file, self.current_directory
        else:
            reply = self.answer_query(user_message, selected_file=selected_file)
            return reply, selected_file, self.current_directory

    def set_api_key(self, key_type: str, key_value: str):
        # Actualiza el cliente en memoria sin exigir reingresar si está en .env.local
        self.setup_clients()