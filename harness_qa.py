#!/usr/bin/env python3
import os
import sys

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

def run_harness():
    print("=========================================================")
    print("      Harness de IA - Evaluador de Accesibilidad (RPL)    ")
    print("=========================================================")
    print("1. Modo Local Simulado (Sin API Key, funciona offline)")
    print("2. Modo Inteligencia Artificial (Requiere configuración de API)")
    print("=========================================================")
    
    modo = input("Selecciona un modo (1 o 2): ").strip()
    
    while True:
        print("\n--- NUEVO CICLO DE EVALUACIÓN (Bucle RPL) ---")
        file_path = input("Introduce la ruta del archivo a evaluar (o 'salir' para finalizar): ").strip()
        
        if file_path.lower() in ['salir', 'exit', 'q']:
            print("Saliendo del arnés. ¡Buen trabajo, Agente!")
            break
            
        if not file_path:
            continue
            
        # 1. READ (Fase de Lectura del Arnés)
        print(f"📖 [READ] Leyendo el archivo '{file_path}'...")
        code = read_component(file_path)
        
        if code is None:
            continue
            
        # 2. EVAL (Fase de Evaluación de la IA / Reglas)
        print("🧠 [EVAL] Analizando el código...")
        if modo == "1":
            report = local_eval_engine(code)
        else:
            # Plantilla para cuando decidan implementar una API real
            print("⚠️ Nota: El modo API de IA requiere configurar un SDK (ej. google-genai).")
            print("Ejecutando motor local por defecto para demostración...")
            report = local_eval_engine(code)
            
        # 3. PRINT (Fase de Retorno y Escritura)
        print("\n================== REPORTE GENERADO ==================")
        print(report)
        print("======================================================")
        
        # Guardar reporte en archivo de progreso
        write_report(report)

if __name__ == "__main__":
    run_harness()
