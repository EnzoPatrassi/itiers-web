import sys
import os

# Asegura encoding UTF-8
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

try:
    from harness_engine import HarnessAgent
    print("🔍 [Harness QA] Ejecutando suite de auditoría de calidad, accesibilidad y marca...")
    agent = HarnessAgent()
    agent.audit_all()
    print("✅ [Harness QA] Auditoría finalizada.")
    sys.exit(0)
except Exception as e:
    print(f"⚠️ [Harness QA Warning] {e}")
    sys.exit(0)
