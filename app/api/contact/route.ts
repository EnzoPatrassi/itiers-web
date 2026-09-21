import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, mensaje } = body;

    // Validación básica de campos requeridos
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { success: false, error: 'Faltan campos obligatorios (nombre, email, mensaje).' },
        { status: 400 }
      );
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Formato de correo electrónico inválido.' },
        { status: 400 }
      );
    }

    // Si existe una clave de Web3Forms o un Webhook de Agentes, enviar notificación
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || 'f07c21f7-e7ba-4b72-a7f4-d5f0b8d23456';
    
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3Key,
          name: nombre,
          email,
          phone: telefono || 'No proporcionado',
          subject: `Nueva Consulta Web Itiers: ${nombre}`,
          message: mensaje,
        }),
      });
    } catch (e) {
      console.warn('⚠️ Web3Forms forwarding warning:', e);
      // Continuar retornando éxito localmente
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Consulta recibida correctamente. Nuestro equipo se pondrá en contacto a la brevedad.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error en /api/contact:', error);
    return NextResponse.json(
      { success: false, error: 'Ocurrió un error interno al procesar el mensaje.' },
      { status: 500 }
    );
  }
}
