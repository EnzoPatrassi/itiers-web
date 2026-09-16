#!/usr/bin/env python3
import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# =====================================================================
# ARNÉS DE ACCESIBILIDAD PARA ITIERS - IMPLEMENTACIÓN MÍNIMA VIABLE
# =====================================================================
# Este script implementa un bucle RPL (Read, Eval, Print, Loop) local.
# Cuenta con un modo simulado (reglas locales) y está preparado para
# conectarse a una API de Inteligencia Artificial (OpenAI / Gemini / Anthropic).
# =====================================================================

SYSTEM_PROMPT = """
Eres el Agente de QA de Accesibilidad de ITIERS. Tu misión es auditar componentes 
de código de Next.js y Tailwind CSS para garantizar que cumplen con la norma WCAG AA.
Reglas clave:
1. HTML Semántico: Usar <nav>, <main>, <section> en lugar de <div> para estructuras.
2. Foco y Teclado: Elementos interactivos deben ser accesibles con Tab y tener estados focus: en Tailwind.
3. Imágenes: Usar <Image /> de Next.js y siempre incluir el atributo 'alt' descriptivo.
"""

def read_component(file_path):
    """Herramienta del Arnés: Lee el archivo del componente local"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        print(f"❌ Error: El archivo '{file_path}' no existe.")
        return None
    except Exception as e:
        print(f"❌ Error al leer el archivo: {e}")
        return None

def write_report(report_content, output_path="progress/accessibility-report.md"):
    """Herramienta del Arnés: Guarda el reporte de accesibilidad"""
    try:
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(report_content)
        print(f"💾 Reporte guardado con éxito en: '{output_path}'")
    except Exception as e:
        print(f"❌ Error al guardar el reporte: {e}")

def local_eval_engine(code):
    """
    Motor de Evaluación Local (Simulado)
    Analiza el código usando reglas estáticas simples para emular al agente de IA
    sin necesidad de llamadas de red ni API Keys.
    """
    issues = []
    
    # 1. Verificar HTML Semántico
    if "<div" in code and "onClick" in code and not ("role=" in code or "tabIndex" in code):
        issues.append("- [FALLO] Uso de <div> con interacción onClick sin atributos de accesibilidad (role/tabIndex). Debe ser un <button> o <Link>.")
    
    # 2. Verificar Imágenes
    if "<img" in code:
        issues.append("- [FALLO] Se detectó la etiqueta HTML básica <img>. En Next.js se debe utilizar el componente <Image /> para optimizar rendimiento.")
    if "src=" in code and not "alt=" in code:
        issues.append("- [FALLO] Elemento de imagen detectado sin el atributo 'alt' descriptivo. Los lectores de pantalla no podrán leerlo.")
        
    # 3. Verificar Estados de Foco
    if "focus:" not in code and ("button" in code or "Link" in code or "href" in code):
        issues.append("- [FALLO] Se detectaron elementos interactivos (botones/enlaces) sin clases de foco de Tailwind CSS (focus:ring, focus:outline-none).")

    # 4. Verificar SEO básico (Metadata / JsonLd / Encabezado)
    # (Solo aplica para componentes de página o layout)
    if ("export default async function" in code or "export default function" in code) and ("page.tsx" in code or "layout.tsx" in code):
        if not any(k in code for k in ["generateMetadata", "Metadata", "JsonLd", "<h1", "<main"]):
            issues.append("- [SEO] La página carece de estructura de metadatos (generateMetadata/JsonLd) o etiqueta semántica principal (<main>/<h1>).")

    # 5. Verificar GEO (Generative Engine Optimization para IA)
    if "page.tsx" in code and not any(geo_kw in code for geo_kw in ["geoBlock", "Answer-First", "IBM Watsonx", "Mendoza", "Harness Engineering", "Data Sense"]):
        issues.append("- [GEO] La página no incluye bloques Answer-First ni mención de entidades clave de marca para optimización en motores de IA (ChatGPT, Gemini, Perplexity).")

    if not issues:
        report = """### ♿ REPORTE DE ACCESIBILIDAD WCAG AA - ITIERS

**[ESTADO]**: **APROBADO** 🎉

El componente analizado cumple satisfactoriamente con los criterios de HTML Semántico, estados de foco para teclado y uso correcto de atributos en imágenes. ¡Excelente trabajo de desarrollo!
"""
    else:
        report = f"""### ♿ REPORTE DE ACCESIBILIDAD WCAG AA - ITIERS

**[ESTADO]**: **RECHAZADO** ❌

Se han detectado los siguientes problemas que violan las pautas de calidad del proyecto:

#### 🔍 Fallos Detectados:
{chr(10).join(issues)}

#### 🛠️ Recomendación General:
Reescribe el componente reemplazando los contenedores interactivos por etiquetas semánticas de React o Next.js (`<Link>`, `<button>`) y asegúrate de darles estilos de foco claros con Tailwind CSS.
"""
    return report

def get_all_project_files():
    """Busca automáticamente todos los componentes y páginas (.tsx, .jsx) del proyecto"""
    target_dirs = ['components', 'app']
    files_found = []
    for d in target_dirs:
        if os.path.exists(d):
            for root, _, files in os.walk(d):
                for f in files:
                    if f.endswith(('.tsx', '.jsx')) and not f.startswith('.'):
                        files_found.append(os.path.join(root, f))
    return sorted(files_found)

def auto_fix_file(file_path):
    """Intenta corregir automáticamente problemas comunes de accesibilidad"""
    code = read_component(file_path)
    if not code:
        return False
    
    modified = False
    new_code = code

    # 1. Inyectar clases de foco a <Link> o <button> que no tengan focus:
    import re
    def add_focus_to_tag(match):
        tag_content = match.group(0)
        if "focus:" not in tag_content and "focus-visible:" not in tag_content:
            if 'className="' in tag_content:
                return tag_content.replace('className="', 'className="focus:outline-none focus:ring-2 focus:ring-blue-600 ')
            elif "className='" in tag_content:
                return tag_content.replace("className='", "className='focus:outline-none focus:ring-2 focus:ring-blue-600 ")
            else:
                return tag_content.rstrip('>') + ' className="focus:outline-none focus:ring-2 focus:ring-blue-600">'
        return tag_content

    # Aplicar a etiquetas <Link y <button
    new_code = re.sub(r'<(Link|button)\b[^>]*>', add_focus_to_tag, new_code)
    
    if new_code != code:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_code)
            return True
        except Exception as e:
            print(f"  ⚠️ Error al escribir {file_path}: {e}")
            return False
    return False

def audit_entire_project(should_fix=False):
    """Audita todos los archivos del proyecto y genera un reporte global"""
    files = get_all_project_files()
    if not files:
        print("❌ No se encontraron componentes o páginas en 'components/' o 'app/'.")
        return

    if should_fix:
        print(f"\n🛠️ [AUTO-FIX] Intentando corregir problemas en {len(files)} archivos...")
        fixed_count = 0
        for f in files:
            if auto_fix_file(f):
                fixed_count += 1
                print(f"  🔧 Corrección de accesibilidad aplicada en: {f}")
        print(f"✨ Correcciones completadas en {fixed_count} archivos.\n")

    print(f"\n🚀 [AUDITORÍA GLOBAL] Escaneando {len(files)} archivos en el proyecto...")
    
    total_approved = 0
    total_rejected = 0
    detailed_reports = []

    for file_path in files:
        code = read_component(file_path)
        if code is None:
            continue
        
        report = local_eval_engine(code)
        is_approved = "APROBADO" in report
        
        if is_approved:
            total_approved += 1
            status_icon = "✅"
        else:
            total_rejected += 1
            status_icon = "❌"

        print(f"  {status_icon} [{os.path.basename(file_path)}]: {'APROBADO' if is_approved else 'RECHAZADO'}")
        
        detailed_reports.append(f"### Archivo: `{file_path}`\n\n{report}\n---\n")

    summary = f"""# 📊 REPORTE GLOBAL DE ACCESIBILIDAD WCAG AA - ITIERS

**Total de Archivos Auditados:** {len(files)}  
**✅ Aprobados:** {total_approved}  
**❌ Rechazados:** {total_rejected}  

---

## 🔍 Detalle por Componente:

{"".join(detailed_reports)}
"""
    write_report(summary, "progress/accessibility-report.md")
    print(f"\n=========================================================")
    print(f"📊 RESUMEN GLOBAL: {total_approved}/{len(files)} Aprobados | {total_rejected} Rechazados")
    print(f"=========================================================")

def run_harness():
    print("=========================================================")
    print("      Harness de IA - Evaluador de Accesibilidad (RPL)    ")
    print("=========================================================")
    print("1. Auditar TODO el proyecto automáticamente")
    print("2. Auditar y Auto-Corregir (Auto-Fix) todo el proyecto")
    print("3. Auditar un archivo específico")
    print("=========================================================")
    
    args = [a.lower() for a in sys.argv[1:]]
    if '--fix' in args or 'fix' in args:
        audit_entire_project(should_fix=True)
        return
    if '--all' in args or 'all' in args:
        audit_entire_project(should_fix=False)
        return

    try:
        opcion = input("Selecciona una opción (1, 2 o 3) [por defecto 1]: ").strip()
    except (EOFError, KeyboardInterrupt):
        opcion = "1"

    if opcion == "2" or "fix" in opcion:
        audit_entire_project(should_fix=True)
    elif opcion in ["1", "all", ""]:
        audit_entire_project(should_fix=False)
    else:
        file_path = input("Introduce la ruta del archivo a evaluar: ").strip()
        if file_path:
            code = read_component(file_path)
            if code:
                report = local_eval_engine(code)
                print("\n================== REPORTE GENERADO ==================")
                print(report)
                print("======================================================")
                write_report(report)

if __name__ == "__main__":
    run_harness()


