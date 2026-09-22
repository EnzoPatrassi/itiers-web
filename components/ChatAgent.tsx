"use client"; // Le dice a Next.js que este componente usa estado y eventos del navegador

import React, { useState } from 'react';

export default function ChatAgent() {
    // Estado para guardar el historial de la conversación
    const [messages, setMessages] = useState<{ role: string, content: string }[]>([]);
    // Estado para guardar lo que el usuario está escribiendo
    const [input, setInput] = useState("");
    // Estado para mostrar un indicador de carga mientras la IA "piensa"
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async () => {
        if (!input.trim()) return; // No enviar mensajes vacíos

        // 1. Agregamos el mensaje del usuario al historial visual
        const newMessages = [...messages, { role: "user", content: input }];
        setMessages(newMessages);
        setInput(""); // Limpiamos la caja de texto
        setIsLoading(true);

        try {
            // 2. Enviamos todo el historial a tu nueva ruta de API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages }),
            });

            const data = await response.json();

            // 3. Agregamos la respuesta de la IA al historial visual
            if (data.reply) {
                setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
            }
        } catch (error) {
            console.error("Error al conectar con el agente:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-12 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-blue-600 text-white p-4 text-center font-bold">
                🤖 Asesor IA Itiers
            </div>

            {/* Caja de mensajes */}
            <div className="p-4 h-80 overflow-y-auto bg-gray-50 flex flex-col gap-4">
                {messages.length === 0 ? (
                    <p className="text-gray-400 text-center mt-auto mb-auto">
                        Escribe tu necesidad de negocio y te recomendaremos el servicio ideal.
                    </p>
                ) : (
                    messages.map((msg, index) => (
                        <div key={index} className={`p-3 rounded-lg max-w-[80%] ${msg.role === 'user'
                            ? 'bg-blue-100 text-blue-900 self-end'
                            : 'bg-white text-gray-800 border border-gray-200 self-start'
                            }`}>
                            {msg.content}
                        </div>
                    ))
                )}
                {isLoading && (
                    <div className="text-gray-500 self-start animate-pulse">
                        El agente está pensando...
                    </div>
                )}
            </div>

            {/* Input de texto y botón */}
            <div className="p-4 bg-white border-t border-gray-200 flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ej: Necesito armar dashboards..."
                    className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSendMessage}
                    disabled={isLoading}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                    Enviar
                </button>
            </div>
        </div>
    );
}