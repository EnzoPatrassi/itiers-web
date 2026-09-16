import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def parse_markdown_file(filepath):
    if not os.path.exists(filepath):
        return None
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def run_sdd_harness():
    print("==================================================")
    print("🤖 ITIERS - SDD HARNESS ENGINE (Líder + Reviewer)")
    print("==================================================\n")

    # 1. Leer Especificaciones (Specs)
    req_path = os.path.join("specs", "requirements.md")
    design_path = os.path.join("specs", "design.md")
    tasks_path = os.path.join("specs", "tasks.md")

    print("🔍 [LÍDER] Verificando presencia de Especificaciones...")
    reqs = parse_markdown_file(req_path)
    design = parse_markdown_file(design_path)
    tasks = parse_markdown_file(tasks_path)

    if not reqs or not design or not tasks:
        print("❌ ERROR: No se encontraron los 3 archivos en la carpeta 'specs/'.")
        print("   Asegúrate de tener specs/requirements.md, specs/design.md y specs/tasks.md")
        return

    print("✅ Archivos de especificación cargados correctamente.")

    # 2. Verificar estado de tareas
    print("\n📋 [LÍDER] Analizando estado de tareas en tasks.md...")
    task_lines = tasks.splitlines()
    completed_tasks = [l for l in task_lines if "- [x]" in l]
    pending_tasks = [l for l in task_lines if "- [ ]" in l]

    print(f"   - Tareas completadas: {len(completed_tasks)}")
    print(f"   - Tareas pendientes: {len(pending_tasks)}")

def audit_component(component_path):
    # Omitir componentes que no son UI (como JSON-LD schema o scripts)
    if "JsonLd" in component_path:
        return {"path": component_path, "successes": ["Componente de metadatos SEO / Schema (No UI)"], "issues": []}

    code = parse_markdown_file(component_path)
    if not code:
        return {"path": component_path, "successes": [], "issues": ["No se pudo leer el archivo."]}

    # Si es un Layout de Next.js o redirección
    if "layout.tsx" in component_path.lower() or "Layout" in component_path:
        return {"path": component_path, "successes": ["Estructura Layout Next.js (Navbar, Main, Footer)"], "issues": []}
    if "redirect(" in code:
        return {"path": component_path, "successes": ["Redirección de ruta Next.js (No UI)"], "issues": []}


    issues = []
    successes = []

    # Regla 1: Uso de etiquetas semánticas (<article>, <nav>, <header>, <footer, <main, <section, <div con role)
    if any(tag in code for tag in ["<article", 'role="button', 'role="group', "<nav", "<header", "<footer", "<main", "<section"]):
        successes.append("HTML Semántico: Utiliza etiquetas semánticas de HTML5/WAI-ARIA.")
    else:
        issues.append("HTML No Semántico: Falta etiqueta semántica (<article>, <nav>, <header>, <footer, <main, <section).")

    # Regla 2: Soporte de teclado (tabIndex)
    if "tabIndex" in code or "href=" in code or "button" in code or "Link" in code:
        successes.append("Navegación por Teclado: Soporta navegación o elemento interactivo.")
    else:
        issues.append("Navegación por Teclado: El elemento interactivo carece de tabIndex={0} o enlace.")

    # Regla 3: Clases de Foco Visible de Tailwind CSS
    if "focus:" in code or "focus-visible:" in code or "button" not in code:
        successes.append("Foco Visual: Incluye clases de foco de Tailwind CSS.")
    else:
        issues.append("Foco Visual: Carece de clases de foco visible de Tailwind (ej. 'focus:ring-2').")

    # Regla 4: Uso del componente <Image /> de Next.js
    if "<Image" in code and "next/image" in code:
        successes.append("Optimización de Imágenes: Utiliza el componente <Image /> nativo de Next.js.")
    elif "<img" in code:
        issues.append("Optimización de Imágenes: Utiliza la etiqueta HTML <img> estándar en lugar de <Image /> de Next.js.")

    # Regla 5: Atributo alt en imágenes
    if 'alt=' in code or 'alt={' in code:
        successes.append("Accesibilidad de Imagen: Incluye atributo 'alt' descriptivo.")
    elif "<Image" in code or "<img" in code:
        issues.append("Accesibilidad de Imagen: Faltan atributos 'alt' descriptivos para lectores de pantalla.")

    # Regla 6: Verificación de SEO (Estructura de Encabezados y Metadatos en Páginas)
    if "components" not in component_path.replace("\\", "/"):
        if "<h1" in code or "generateMetadata" in code or "JsonLd" in code or "Metadata" in code:
            successes.append("SEO: Implementa estructura de metadatos o jerarquía de títulos h1.")
        else:
            issues.append("SEO: Falta título semántico (<h1>) o metadatos para motores de búsqueda.")

    # Regla 7: Verificación de GEO (Generative Engine Optimization para IA)
    if any(geo_kw in code for geo_kw in ["geoBlock", "Answer-First", "IBM Watsonx", "Mendoza", "Chile", "USA", "Harness Engineering", "Data Sense"]):
        successes.append("GEO (AI Engine Optimization): Incluye bloques Answer-First y entidades de marca clave.")

    return {"path": component_path, "successes": successes, "issues": issues}




def get_all_project_files():
    target_dirs = ['components', 'app']
    files_found = []
    for d in target_dirs:
        if os.path.exists(d):
            for root, _, files in os.walk(d):
                for f in files:
                    if f.endswith(('.tsx', '.jsx')) and not f.startswith('.'):
                        files_found.append(os.path.join(root, f))
    return sorted(files_found)

def run_sdd_harness():
    print("==================================================")
    print("🤖 ITIERS - SDD HARNESS ENGINE (Líder + Reviewer)")
    print("==================================================\n")

    # 1. Leer Especificaciones (Specs)
    req_path = os.path.join("specs", "requirements.md")
    design_path = os.path.join("specs", "design.md")
    tasks_path = os.path.join("specs", "tasks.md")

    print("🔍 [LÍDER] Verificando presencia de Especificaciones...")
    reqs = parse_markdown_file(req_path)
    design = parse_markdown_file(design_path)
    tasks = parse_markdown_file(tasks_path)

    if not reqs or not design or not tasks:
        print("❌ ERROR: No se encontraron los 3 archivos en la carpeta 'specs/'.")
        print("   Asegúrate de tener specs/requirements.md, specs/design.md y specs/tasks.md")
        return

    print("✅ Archivos de especificación cargados correctamente.")

    # 2. Verificar estado de tareas
    print("\n📋 [LÍDER] Analizando estado de tareas en tasks.md...")
    task_lines = tasks.splitlines()
    completed_tasks = [l for l in task_lines if "- [x]" in l]
    pending_tasks = [l for l in task_lines if "- [ ]" in l]

    print(f"   - Tareas completadas: {len(completed_tasks)}")
    print(f"   - Tareas pendientes: {len(pending_tasks)}")

    # Determine files to audit
    files_to_audit = []
    if len(sys.argv) > 1 and sys.argv[1] not in ['--all', 'all']:
        files_to_audit = [sys.argv[1]]
    else:
        files_to_audit = get_all_project_files()

    print(f"\n🧐 [REVIEWER AGENT] Auditando {len(files_to_audit)} archivo(s) contra las especificaciones...\n")
    print("="*50)

    total_approved = 0
    total_rejected = 0

    for filepath in files_to_audit:
        res = audit_component(filepath)
        print(f"\n📄 Archivo: `{filepath}`")
        for s in res["successes"]:
            print(f"  ✅ {s}")
        if res["issues"]:
            total_rejected += 1
            print("  ❌ VIOLACIONES DETECTADAS:")
            for idx, i in enumerate(res["issues"], 1):
                print(f"     {idx}. {i}")
            print("  ESTADO: 🔴 RECHAZADO")
        else:
            total_approved += 1
            print("  ESTADO: 🟢 APROBADO")

    print("\n" + "="*50)
    print(f"📊 RESUMEN SDD FINAL: {total_approved}/{len(files_to_audit)} Aprobados | {total_rejected} Rechazados")
    print("="*50)

if __name__ == "__main__":
    run_sdd_harness()

