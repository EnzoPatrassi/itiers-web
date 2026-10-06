PROMPT MAESTRO: CONSTRUCCIÓN COMPLETA DE LA LANDING PAGE DE ITIERS DATA SENSE
🎯 ROL Y OBJETIVO

Actúa como un Lead Fullstack Developer & AI Engineer ejecutando bajo la metodología Spec-Driven Development (Harness Engineering).

Tu objetivo es construir la nueva página web corporativa comercial de Itiers Data Sense en Next.js (App Router) y TypeScript, de manera totalmente modular, bilingüe y optimizada para conversión comercial, SEO tradicional y GEO (Generative Engine Optimization).

📚 FUENTES DE VERDAD Y DOCUMENTACIÓN DE REFERENCIA

Queda estrictamente prohibido inventar contenido o utilizar información del sitio web antiguo.

Todo el desarrollo debe estar fundamentado en los siguientes archivos dentro del repositorio:

specs/requirements.md / Landing_Itiers.pdf: Definición de estructura, secciones, textos y criterios de aceptación (DoD).

specs/design.md: Variables de diseño, paleta de colores, tipografías y componentes UI.

specs/i18n.md: Diccionario bilingüe (Español /es e Inglés /en) estructurado con técnica Answer-First.

agents.md: Reglas de comportamiento y estándares de calidad para agentes de código.

🏗️ ARQUITECTURA DE PRODUCTO: LANDING PAGE "ONE-PAGER" (SÁBANA CONTINUA)

La web debe ser una Landing Page de desplazamiento continuo, fluida, ultra rápida y Mobile-First, dividida en los siguientes 10 bloques:

1. Header / Navbar Fijo

Logo de Itiers Data Sense.

Menú por anclas.

Selector de idioma (ES / EN).

Botón CTA "Contactanos".

2. Hero Section

Propuesta de valor: "Convertimos datos en decisiones inteligentes".

Badge de alianza: "ITIERS + IBM WATSONX".

Botones de acción.

3. Sección Quiénes Somos & Equipo

20 años de trayectoria.

Los 5 pilares corporativos.

Carrusel dinámico de fotos del equipo.

Estilo visual inspirado en Lovelytics.

4. Sección Qué Hacemos

Diagrama interactivo del flujo de trabajo de datos e IA:

Descriptiva → Diagnóstico → Predictiva → Prescriptiva → Data-Driven Business

5. Cards de Servicios (4 Pilares Interactivos)
Productos de Datos

Dashboards.

Reportes ejecutivos.

Modern Data Warehouse.

Proyectos de Datos

Big Data.

Data Engineering.

Modelos de IA.

Staffing de Datos

Talento especializado On-Demand.

Capacitaciones Corporativas

Business Intelligence (BI).

Data Storytelling.

Adopción de IA.

6. Tech Stack & Alianzas

Logos de partners en formato monocromático, utilizando tonos grises elegantes.

7. Cifras de Impacto

Contadores numéricos animados que destaquen métricas relevantes, incluyendo:

20 años de experiencia.

Otros indicadores de impacto definidos en las fuentes de verdad.

8. Testimonios & Social Proof

Citas y reseñas comerciales de clientes.

Utilizar únicamente contenido respaldado por las fuentes de verdad del proyecto.

No inventar testimonios, nombres de clientes ni métricas.

9. Canales de Contacto

Implementar:

Formulario de contacto validado con Zod.

Canalización a WhatsApp.

Canalización a Email.

Tarjetas informativas de las 3 sedes físicas:

Mendoza.

Santiago de Chile.

Delaware.

10. Footer

Incluir:

Botón "Trabaja con nosotros" redirigido al Google Form oficial.

Enlaces legales.

Copyright.

⚡ SEO TÉCNICO, GEO E INTERNACIONALIZACIÓN (i18n)
i18n

Implementar enrutamiento bilingüe:

/es

/en

Configurar correctamente las etiquetas hreflang:

es-AR

en-US

x-default

La arquitectura debe permitir mantener el contenido y las traducciones de forma modular, evitando duplicación innecesaria de componentes.

GEO (Generative Engine Optimization)

Cada servicio debe comenzar con una definición directa siguiendo el enfoque Answer-First.

Las respuestas iniciales deben tener aproximadamente 1-2 oraciones, ser claras, específicas y autosuficientes.

El objetivo es facilitar que motores y sistemas de IA como:

ChatGPT.

Gemini.

Perplexity.

puedan identificar, comprender y citar directamente a Itiers como fuente relevante sobre sus servicios y áreas de conocimiento.

Datos Estructurados

Crear un componente:

JsonLd.tsx

Utilizar el esquema:

ProfessionalService

de Schema.org.

El marcado estructurado debe registrar:

Las 3 sedes físicas.

Mendoza.

Santiago de Chile.

Delaware.

Las áreas de conocimiento mediante knowsAbout.

Todos los datos utilizados en el JSON-LD deben provenir de las fuentes de verdad del proyecto.

Rastreo Automático

Implementar generación dinámica de:

sitemap.ts

robots.ts

La configuración debe contemplar correctamente las rutas /es y /en.

🎨 PRINCIPIOS DE DISEÑO Y EXPERIENCIA DE USUARIO

La implementación debe respetar estrictamente specs/design.md.

Priorizar:

Mobile-First.

Diseño responsive.

Alto rendimiento.

Accesibilidad.

Jerarquía visual clara.

Animaciones sutiles y orientadas a mejorar la experiencia.

Componentes reutilizables.

Código mantenible.

Carga rápida.

Buenas prácticas de UX/UI.

Conversión comercial.

No agregar elementos visuales, colores, tipografías o componentes que contradigan las especificaciones de diseño.

🧩 PRINCIPIOS DE ARQUITECTURA DE CÓDIGO

La aplicación debe desarrollarse utilizando:

Next.js.

App Router.

TypeScript.

Componentes React reutilizables.

Arquitectura modular.

Server Components cuando corresponda.

Client Components únicamente cuando sean necesarios para interactividad.

Validación con Zod para formularios.

Buenas prácticas de SEO técnico.

Buenas prácticas de accesibilidad.

Evitar:

Código duplicado.

Componentes monolíticos innecesariamente grandes.

Datos hardcodeados cuando deban provenir de archivos de configuración o diccionarios.

Dependencias innecesarias.

Soluciones improvisadas que contradigan las especificaciones.

🌍 ESTRUCTURA INTERNACIONALIZADA

La estructura final debe soportar como mínimo:

/es
/en


Los contenidos deben estar desacoplados de los componentes siempre que sea posible.

El diccionario definido en:

specs/i18n.md


es la fuente de verdad para los textos traducibles.

No inventar traducciones cuando el contenido oficial no esté definido.

📋 REGLAS DE CONTENIDO

Estas reglas son obligatorias:

No inventar información.

No utilizar información del sitio web antiguo.

No inventar clientes.

No inventar testimonios.

No inventar cifras.

No inventar nombres de empleados.

No inventar alianzas.

No inventar certificaciones.

No inventar ubicaciones.

No inventar servicios que no estén definidos en las especificaciones.

Si existe información faltante, consultar primero los archivos definidos como fuentes de verdad.

Si la información necesaria no existe en las fuentes disponibles, no asumirla ni inventarla.

📁 FUENTES DE VERDAD

Antes de comenzar el desarrollo, leer y analizar obligatoriamente:

specs/requirements.md
Landing_Itiers.pdf
specs/design.md
specs/i18n.md
agents.md


El orden de prioridad para resolver conflictos será:

specs/requirements.md

Landing_Itiers.pdf

specs/design.md

specs/i18n.md

agents.md

Si existe una contradicción entre documentos, no inventar una solución silenciosamente. Identificar el conflicto y resolverlo siguiendo las reglas de prioridad anteriores.

🧪 CRITERIOS DE ACEPTACIÓN Y VERIFICACIÓN AUTOMÁTICA (Definition of Done - DoD)

Al finalizar la maquetación y generación de archivos, debes ejecutar automáticamente el script de verificación del Harness:

npm run verify:harness


o:

bash scripts/verify-harness.sh


La implementación no debe considerarse terminada hasta comprobar que el proceso de verificación fue ejecutado.

✅ DEFINITION OF DONE

La tarea se considera terminada únicamente cuando:

 La landing page está implementada en Next.js.

 Se utiliza App Router.

 El código está escrito en TypeScript.

 La arquitectura es modular.

 La landing funciona como One-Pager.

 El Header/Navbar está implementado.

 El Hero está implementado.

 La sección Quiénes Somos & Equipo está implementada.

 La sección Qué Hacemos está implementada.

 Los 4 pilares de servicios están implementados.

 Tech Stack & Alianzas está implementado.

 Las cifras de impacto están implementadas.

 Testimonios & Social Proof está implementado.

 El formulario de contacto está implementado.

 El formulario utiliza validación con Zod.

 Los canales WhatsApp/Email están correctamente configurados según las especificaciones.

 Las 3 sedes están representadas.

 El Footer está implementado.

 El botón "Trabaja con nosotros" utiliza el Google Form oficial definido en las fuentes de verdad.

 /es funciona correctamente.

 /en funciona correctamente.

 Las etiquetas hreflang están configuradas.

 JsonLd.tsx está implementado.

 El esquema ProfessionalService está configurado.

 knowsAbout está correctamente configurado.

 sitemap.ts está implementado.

 robots.ts está implementado.

 El contenido GEO utiliza metodología Answer-First.

 No se inventó contenido.

 No se utilizó contenido del sitio web antiguo.

 Se respetan las especificaciones de specs/design.md.

 Se respetan las traducciones de specs/i18n.md.

 Se respetan los requisitos de specs/requirements.md.

 Se respetan las reglas de agents.md.

 Se ejecutó npm run verify:harness o bash scripts/verify-harness.sh.

 La verificación finaliza sin errores bloqueantes.

🚀 EJECUCIÓN

Antes de escribir código:

Inspeccionar la estructura actual del repositorio.

Leer todas las fuentes de verdad.

Analizar los requisitos funcionales.

Analizar las especificaciones de diseño.

Analizar la estrategia de internacionalización.

Analizar las reglas de los agentes.

Identificar dependencias existentes.

Identificar componentes reutilizables existentes.

Identificar posibles conflictos o información faltante.

Después:

Diseñar la arquitectura de componentes.

Implementar la estructura base.

Implementar el sistema i18n.

Implementar cada sección de la landing.

Implementar SEO técnico.

Implementar GEO.

Implementar JSON-LD.

Implementar sitemap y robots.

Implementar formulario y validación.

Optimizar responsive/mobile.

Ejecutar verificaciones.

Corregir errores.

Ejecutar nuevamente las verificaciones.

Confirmar que se cumple el Definition of Done.

⚠️ REGLA FUNDAMENTAL

NO DES POR FINALIZADO EL TRABAJO SIMPLEMENTE PORQUE LA PÁGINA COMPILE.

La compilación exitosa es solamente una parte de la validación.

La implementación final debe cumplir simultáneamente:

Requisitos funcionales.

Especificaciones de diseño.

Internacionalización.

SEO.

GEO.

Accesibilidad.

Performance.

Arquitectura modular.

Calidad de código.

Definition of Done.

Verificación automática del Harness.

Si alguna validación falla, corregirla antes de considerar finalizada la tarea.

🎯 RESULTADO ESPERADO

El resultado final debe ser una landing page corporativa moderna, profesional, rápida, responsive, bilingüe y orientada a conversión para Itiers Data Sense, construida exclusivamente a partir de las fuentes de verdad proporcionadas.

La aplicación debe estar preparada para:

Usuarios humanos.

Motores de búsqueda tradicionales.

Motores de respuesta generativa.

Sistemas de inteligencia artificial.

Indexación internacional.

Conversión de visitantes en potenciales clientes.

La prioridad absoluta es respetar las especificaciones existentes, evitar cualquier contenido inventado y entregar una implementación técnicamente sólida y verificable mediante el Harness.