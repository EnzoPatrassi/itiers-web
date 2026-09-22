import { NextResponse } from 'next/server';

// 1. EL CONTEXTO (Mismo que en tu Python)
const ITIERS_DB = `
Catálogo Oficial de Servicios de Itiers:
1. Productos de Datos: creación de dashboards interactivos, herramientas de visualización, modelos predictivos y KPIs.
2. Proyectos de Datos: ingeniería de datos, arquitecturas ETL, gobierno de la información, migración y estructuración de bases de datos.
3. Staffing de Datos: integración de talento especializado (ingenieros de datos, analistas BI, científicos de datos) para potenciar equipos internos existentes.
4. Capacitaciones Especializadas: entrenamientos corporativos, workshops en IA y programas de alfabetización de datos.
`;

// 2. SYSTEM PROMPT
const SYSTEM_PROMPT = `
Eres el Agente Recomendador Oficial de Itiers | Data Sense.
Tu objetivo es actuar como un consultor experto para perfilar al usuario y guiarlo hacia el servicio adecuado.

Catálogo disponible:
${ITIERS_DB}

Instrucciones:
1. Si la necesidad del usuario es ambigua, hazle UNA pregunta clara de seguimiento.
2. Si tienes información suficiente, recomienda el servicio adecuado explicando por qué.
3. No inventes servicios fuera del catálogo.
4. Cierra tus recomendaciones finales con el lema: 'Refinamos información compleja en inteligencia estratégica para organizaciones.'
`;

// 3. EL "ARNÉS" WEB (Equivalente a tu función tool_chat_with_llm)
export async function POST(request: Request) {
  try {
    // Recibimos el historial de mensajes que nos mandará la interfaz web
    const body = await request.json();
    const userMessages = body.messages || [];

    // Construimos el historial completo inyectando las reglas al principio
    const fullHistory = [
      { role: "system", content: SYSTEM_PROMPT },
      ...userMessages
    ];

    // Llamamos a Ollama que está corriendo en tu computadora
    const ollamaResponse = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: "llama3.1",
        messages: fullHistory,
        stream: false
      })
    });

    const data = await ollamaResponse.json();
    
    // Le devolvemos la respuesta de la IA a la página web
    return NextResponse.json({ 
      reply: data.message.content 
    });

  } catch (error) {
    console.error("Error conectando con Ollama:", error);
    return NextResponse.json(
      { error: "Error de conexión con el cerebro del Agente." }, 
      { status: 500 }
    );
  }
}