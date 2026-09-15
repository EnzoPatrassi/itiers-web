import os
import re

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

    # 3. Preguntar por el componente a auditar
    component_path = input("\n📥 Ingrese la ruta del componente a validar (ej: components/ServiceCard.tsx): ").strip()

    if not os.path.exists(component_path):
        print(f"\n❌ [ERROR] El archivo '{component_path}' no existe en tu computadora.")
        print("   Crea el archivo o verifica la ruta antes de volver a ejecutar.")
        return

    code = parse_markdown_file(component_path)

    # 4. REVIEWER: Auditar código contra specs y WCAG AA
    print(f"\n🧐 [REVIEWER AGENT] Auditando '{component_path}' contra design.md y requirements.md...\n")

    issues = []
    successes = []

    # Regla 1: Uso de etiquetas semánticas (<article> o role="button")
    if "<article" in code or 'role="button"' in code:
        successes.append("HTML Semántico: Utiliza la etiqueta <article> o role='button'.")
    else:
        issues.append("HTML No Semántico: Falta la etiqueta <article> o el atributo role='button' especificado en design.md.")

    # Regla 2: Soporte de teclado (tabIndex)
    if "tabIndex" in code or "href=" in code:
        successes.append("Navegación por Teclado: Soporta tabIndex o enlace nativo.")
    else:
        issues.append("Navegación por Teclado: El elemento interactivo carece de tabIndex={0} para foco por teclado.")

    # Regla 3: Clases de Foco Visible de Tailwind CSS
    if "focus:ring" in code or "focus:outline" in code:
        successes.append("Foco Visual: Incluye clases de anillo de foco de Tailwind CSS (focus:ring-2).")
    else:
        issues.append("Foco Visual: Carece de clases de foco visible de Tailwind (ej. 'focus:ring-2 focus:ring-blue-500').")

    # Regla 4: Uso del componente <Image /> de Next.js
    if "<Image" in code and "next/image" in code:
        successes.append("Optimización de Imágenes: Utiliza el componente <Image /> nativo de Next.js.")
    elif "<img" in code:
        issues.append("Optimización de Imágenes: Utiliza la etiqueta HTML <img> estándar en lugar de <Image /> de Next.js.")

    # Regla 5: Atributo alt en imágenes
    if 'alt=' in code or 'alt={' in code:
        successes.append("Accesibilidad de Imagen: Incluye atributo 'alt' descriptivo.")
    else:
        issues.append("Accesibilidad de Imagen: Faltan atributos 'alt' descriptivos para lectores de pantalla.")

    # 5. Generar Reporte Final
    print("="*50)
    print("📊 RESULTADO DE LA EVALUACIÓN SDD")
    print("="*50)

    for s in successes:
        print(f"  ✅ {s}")

    if issues:
        print("\n  ❌ VIOLACIONES DETECTADAS:")
        for idx, i in enumerate(issues, 1):
            print(f"     {idx}. {i}")
        print("\n  ESTADO: 🔴 RECHAZADO")
        print("  Acción recomendada: Corrige las violaciones antes de marcar la tarea como completada en tasks.md.")
    else:
        print("\n  ESTADO: 🟢 APROBADO")
        print("  ¡El componente cumple con todas las especificaciones técnicas y de accesibilidad de ITIERS!")

if __name__ == "__main__":
    run_sdd_harness()
