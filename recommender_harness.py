import sys
import os

# Asegura encoding UTF-8
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

try:
    from harness_engine import HarnessAgent
    print("💡 [Harness Recommender] Generando recomendaciones arquitectónicas y técnicas...")
    agent = HarnessAgent()
    rec = agent.call_llm("Proporciona un reporte de recomendaciones de optimización técnica, SEO, GEO y diseño para el proyecto ITIERS.")
    print("\n--- RECOMENDACIONES DEL HARNESS ---")
    print(rec)
    print("----------------------------------\n")
    sys.exit(0)
except Exception as e:
    print(f"⚠️ [Harness Recommender Warning] {e}")
    sys.exit(0)
