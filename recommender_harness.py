import requests

# =====================================================================
# ARNÉS DEL AGENTE RECOMENDADOR CON MEMORIA CONVERSACIONAL - ITIERS
# =====================================================================

# 1. EL CONTEXTO DE DATOS
ITIERS_DB = """
Catálogo Oficial de Servicios de Itiers:
1. Productos de Datos: creación de dashboards interactivos, herramientas de visualización, modelos predictivos y KPIs.
2. Proyectos de Datos: ingeniería de datos, arquitecturas ETL, gobierno de la información, migración y estructuración de bases de datos.
3. Staffing de Datos: integración de talento especializado (ingenieros de datos, analistas BI, científicos de datos) para potenciar equipos internos existentes.
4. Capacitaciones Especializadas: entrenamientos corporativos, workshops en IA y programas de alfabetización de datos.
"""

# 2. SYSTEM PROMPT (Comportamiento de Consultor)
SYSTEM_PROMPT = f"""
Eres el Agente Recomendador Oficial de Itiers | Data Sense.
Tu objetivo es actuar como un consultor experto para perfilar al usuario y guiarlo hacia el servicio adecuado.

Catálogo disponible:
{ITIERS_DB}

Instrucciones de comportamiento:
1. Si la necesidad del usuario es ambigua o muy breve, hazle UNA pregunta clara de seguimiento para entender mejor sus objetivos antes de recomendar.
2. Una vez que tengas suficiente información, recomienda formalmente el servicio adecuado explicando brevemente por qué.
3. No inventes servicios fuera del catálogo.
4. Cierra TUS RECOMENDACIONES FINALES (y solo las recomendaciones finales) con el lema: 'Refinamos información compleja en inteligencia estratégica para organizaciones.'
"""

def tool_chat_with_llm(messages_history):
    """
    SKILL / HERRAMIENTA: Envía la conversación completa al modelo corriendo en Ollama.
    """
    url = "http://localhost:11434/api/chat"
    
    payload = {
        "model": "llama3.1",
        "messages": messages_history,
        "stream": False
    }
    
    try:
        response = requests.post(url, json=payload)
        response_data = response.json()
        return response_data.get("message", {}).get("content", "Error al procesar la respuesta.")
    except Exception as e:
        return f"Error de conexión con Ollama: {e}"

def agent_loop():
    print("=========================================================")
    print(" 🧠 AGENTE RECOMENDADOR ITIERS - MODO CONSULTOR (MEMORIA)")
    print("=========================================================\n")
    
    # Inicializamos el historial con las instrucciones del sistema
    history = [
        {"role": "system", "content": SYSTEM_PROMPT}
    ]
    
    while True:
        user_query = input("👤 Cliente: ¿En qué te podemos ayudar hoy? (o 'salir')")
        
        if user_query.lower() in ['salir', 'exit', 'q']:
            print("\nCerrando la sesión del arnés...")
            break
            
        # 1. Agregar el nuevo mensaje del usuario al historial
        history.append({"role": "user", "content": user_query})
        
        print("🤖 [PENSANDO] Evaluando historial de la conversación...")
        
        # 2. Consultar al modelo enviando TODO el historial acumulado
        respuesta_ia = tool_chat_with_llm(history)
        
        # 3. Guardar la respuesta de la IA en el historial para el siguiente turno
        history.append({"role": "assistant", "content": respuesta_ia})
        
        print("\n================== RESPUESTA DEL AGENTE ==================")
        print(respuesta_ia)
        print("==========================================================\n")

if __name__ == "__main__":
    agent_loop()