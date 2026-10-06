---
schema_version: 1
brand:
  name: "itiers"
  tagline: "Data Sense"
  locale: "es-AR"
  version: "1.0.0"
colors:
  primary:
    value: "#ff4f00"
    group: "brand"
    use: "La acción principal, los links y el estado activo. Es el color por el que se reconoce a itiers"
    never:
      - "Texto corriente sobre blanco: da 3.30:1 y no llega a AA"
      - "Fondos amplios: el naranja manda sobre superficie chica, no sobre bloques enteros"
  secondary:
    value: "#b2b2b2"
    group: "brand"
    use: "Gris secundario del manual (Pantone 412 C). Líneas divisorias, bordes de card y superficies neutras que acompañan sin competir"
    never:
      - "Texto: sobre blanco da 1.90:1 y no se lee"
    contrast: "2.12:1 sobre background (No cumple)"
  border:
    value: "#b2b2b2"
    dark: "#333333"
    group: "hairline"
    use: "La línea divisoria del sistema: bordes de card, separadores y contorno de input en reposo. Toma el gris secundario del manual, Pantone 412 C"
    never:
      - "Contorno de un control que necesite 3:1 por WCAG 1.4.11: sobre blanco este gris da 1.90:1"
  accent:
    value: "#1F1F1F"
    dark: "#F2F2F2"
    group: "brand"
    use: "Tinta de máximo contraste sobre superficies claras y sobre el naranja: 16.48:1 sobre blanco y 5.31:1 sobre #ff4f00. No es un color del manual, es una necesidad de interfaz"
    never:
      - "Ser un segundo naranja. La marca tiene uno solo: #ff4f00, Pantone Orange 021 C"
  background:
    value: "#FFFFFF"
    dark: "#0F0F0F"
    group: "surface"
    use: "El fondo general de la aplicación y de las páginas"
    never:
      - "Fondo de cards o bloques elevados, que van en surface"
    contrast_checked: true
  text:
    value: "#1C1917"
    dark: "#b2b2b2"
    group: "text"
    use: "El texto corriente y los títulos sobre superficie clara. 17.49:1 sobre blanco"
    never:
      - "Fondos: es tinta, no superficie"
  error:
    value: "#A6192E"
    dark: "#F2626E"
    group: "semantic"
    use: "Errores de validación y acciones destructivas. Fuera del manual: la marca no define paleta semántica"
    never:
      - "Pegado al naranja de marca: están a 13 grados de tono y se confunden. Un error nunca comparte encuadre con un CTA"
  success:
    value: "#0B6E4F"
    dark: "#3FBF95"
    group: "semantic"
    use: "Confirmaciones y estados resueltos. Fuera del manual: la marca no define paleta semántica"
  warning:
    value: "#8A6A14"
    dark: "#D9A62A"
    group: "semantic"
    use: "Avisos que no bloquean. Fuera del manual: la marca no define paleta semántica"
  brand-gray:
    value: "#4d4d4d"
    dark: "#898a8d"
    group: "brand"
    use: "El gris institucional del isologotipo. Acompaña al naranja en el logo y ordena la jerarquía de texto"
    never:
      - "Reemplazar al naranja como color de marca: el isologotipo lleva los dos, nunca uno solo"
  surface:
    value: "#FAFAFA"
    dark: "#1A1A1A"
    group: "surface"
    use: "La superficie que se apoya sobre el fondo: cards, paneles y filas de tabla. En oscuro es el K90 de la escala del manual"
typography:
  font_family_heading: "Arista Pro Trial Light, sans-serif"
  font_family_body: "Arial Rounded MT, Nunito, sans-serif"
  font_family_mono: "Geist Mono, monospace"
  weights:
    - "500"
    - "300"
    - "400"
    - "700"
  scale:
    titulo-1:
      size: "50px"
      weight: "500"
      line_height: "56px"
      letter_spacing: "-0.02em"
      use: "El título principal de cada pantalla, uno solo por vista. Va en la fuente de títulos"
    body:
      size: "16px"
      weight: "400"
      line_height: "24px"
      letter_spacing: "0"
      use: "Texto corriente y descripciones. Va en Arial Rounded"
  substitutes:
  - original: "Arista Pro Trial Light"
    substitute: "Comfortaa"
    weights: "300 / 400"
    reason: "Arista Pro es una licencia de prueba: no se puede publicar con ella. Comfortaa es geométrica y redondeada como la original y está en Google Fonts. Alternativa: Quicksand"
spacing:
  base_unit: "8px"
rounded:
  sm:
    value: "12px"
    use: "Botones CTAs"
  none:
    value: "0px"
    use: "Tablas, celdas y bloques de datos. Es el cuadrado del manual: la forma que no adorna"
  md:
    value: "16px"
    use: "Cards y bloques de contenido. Es el cuadrado con esquinas redondeadas del manual"
  full:
    value: "9999px"
    use: "Badges, chips y el avatar del isologotipo en redes. Es el círculo del manual"
elevation:
- level: "base"
  treatment: "Sin sombra. Borde de 1px en {colors.border}"
  use: "Cards, tablas y toda superficie que no tapa nada"
- level: "overlay"
  treatment: "0 4px 14px rgb(0 0 0 / 0.08)"
  use: "Menús, modales y popovers: lo único que tapa contenido"
breakpoints:
  sm:
    min: "640px"
    notes: "Se redistribuye la UI para abarcar los espacios de respiracion que habian en Desktop"
  lg:
    min: "1024px"
    notes: "Core Breakpoint"
responsive:
  approach: "Desktop-first"
  mobile: "Una columna, se toman los elementos de Desktop y se redistribuyen en una version mobile con un navbar minino representado con iconos en la parte superior"
  tablet: "Dos columnas, se redistribuyen los elementos de la version Desktop"
  desktop: "Contenido centrado con elementos que pueden respirar entre si, cuando se scrollea la nav bar se convierte en sticky y se integra a la UI"
  images: "Preferible squared composition. Si es AI generated que sea el texto en spanish y que se vea de acuerdo a los colores de la marca"
accessibility:
  contrast: "WCAG AAA (7:1)"
guardrails:
  forbidden:
  - rule: "No deformar el isologotipo: no angostarlo, no expandirlo, no inclinarlo, no rotarlo y no espejarlo. Se escala siempre en proporción"
    reason: "El manual lo prohibe de forma explicita. Un logo deformado deja de ser reconocible: ya no es la marca, es un parecido"
    scope: "Todo el producto"
  - rule: "No separar el isotipo del logotipo ni usar uno sin el otro: el isologotipo es una unidad"
    reason: "El manual los define como una unidad. El isotipo solo no dice el nombre, y el logotipo solo pierde la red de nodos, que es la idea de la marca: recibir datos y ordenarlos"
    scope: "Todo el producto"
  - rule: "No agregar sombras, bordes, contornos ni degradados al isologotipo, ni encerrarlo en ninguna forma"
    reason: "El manual lo prohíbe. Única excepción: el avatar de redes sociales, donde se permite círculo, cuadrado o cuadrado con esquinas redondeadas"
    scope: "Todo el producto"
  - rule: "No usar el isologotipo en un solo color. La única versión monocroma permitida es la blanca, y sólo sobre un color fuerte y contrastante que cubra toda la superficie"
    reason: "El manual es tajante: el logo siempre lleva naranja y gris. En un solo color se pierde la distinción entre la red de nodos y el nombre, que es lo que lo hace legible"
    scope: "Todo el producto"
  - rule: "No mostrar el isologotipo a menos de 57px de ancho, ni con menos del 10% de su ancho como aire libre alrededor"
    reason: "Son las dos medidas que fija el manual: 2cm o 57px de ancho mínimo, y 10% del ancho como área de reserva. Más chico los nodos del isotipo se empastan; sin el aire, el logo compite con lo que tenga al lado"
    scope: "Todo el producto, incluidos favicon, avatares y firmas de mail"
  - rule: "No apoyar texto sobre una fotografía sin un degradado blanco debajo que le garantice el contraste"
    reason: "El manual lo pide para toda pieza con foto. Hoy el hero de itiers.com lo incumple: texto blanco sobre una foto clara, sin degradado"
    scope: "Hero, banners y cualquier bloque con imagen de fondo"
principles:
  - "Toda acción importante necesita un estado claro"
  - "Decisiones sobrias sobre los datos"
component:
  button-primary:
    category: "buttons"
    description: "CTA de Landing, mantener consistencia"
    color: "{colors.primary}"
    behavior: "Cuando esta en el viewport, se percibe un breath que llama la atencion"
    tokens:
      - "{colors.primary}"
    states:
      hover: "Add some depth like apple buttons"
  isologotipo:
    description: "La marca en pantalla. Es una unidad indivisible y siempre lleva los dos colores del manual: naranja y gris"
    anatomy: "Isotipo de red de nodos a la izquierda, logotipo «itiers» en {colors.brand-gray}, y la bajada «DATA SENSE» en {colors.primary} debajo. Alrededor, un área de reserva libre del 10% del ancho del logo"
    tokens:
      - "{colors.brand-gray}"
      - "{colors.primary}"
    states:
      default: "Isotipo y logotipo juntos, en color, a 57px de ancho como mínimo. Sobre fotografía va con degradado blanco detrás; sobre un color fuerte que cubra toda la superficie se admite la versión en blanco"
---

# DESIGN.md — itiers

> Data Sense

## Identidad de marca

Empresa de BI and Data Analytics orientada a pymes que intenta transmitir la recepcion de la informacion y su posterior ordenamiento para la toma de decisiones inteligentes

### Qué queremos transmitir

- Capacidad de organizar datos
- Toma de decisiones inteligentes
- Tranquilidad al manejar grandes volúmenes de datos
- Vanguardia tecnológica sin perder calidez humana

### Qué no queremos transmitir

- Infantil
- Desorganizada
- Informal
- Complejidad técnica innecesaria
- Frialdad robótica (incluso si usamos IA)
- Falta de experiencia / Start-up inestable

### Valores

- Data Driven

### Personalidad de marca

- Serena
- Confiable
- Sobria
- Precisa
- Profesional
- Resolutiva

## Audiencia y posicionamiento

Pymes que quieran organizar datos y tomar decisiones consistentes

### Necesidades

- Organizar datos
- Gobernanza de datos
- Decisiones guiadas por datos

### Problemas que resolvemos

- Normalizacion de datos
- Organizacion de empresas en flujos de datos
- Unificacion y gobernanza de datos
- Integracion de IA de forma profesional
- Automatizaciones
- Silos de datos desconectados entre áreas
- Toma de decisiones basada en intuición en lugar de métricas
- Procesos manuales propensos a errores

### Diferenciadores

- Construir soluciones de la mano de las necesidades especificas de los clientes
- Soluciones personalizadas

### Nivel de conocimiento técnico

Intermedio a Avanzado

## Voz y contenido

- **Idioma:** Espanol Argentina
- **Trato:** vos
- **Tono general:** Preciso, Sobrio

### Tono según contexto

| Contexto | Tono |
| --- | --- |
| CTA de marketing | Brinda confianza para comunicarse y acceder a nuestros servicios |

### Ejemplos

- **Correcto:** Convertimos datos en decisiones inteligentes.
- **Evitar:** Somos líderes en soluciones integrales de vanguardia para tu empresa.

- **Correcto:** Vas a ver qué pasó, por qué, y qué conviene hacer.
- **Evitar:** Potenciamos tu negocio con tecnología de última generación.

- **Correcto:** Tus datos, ordenados y listos para decidir.
- **Evitar:** Una plataforma única y moderna para gestionar tu información.

## Sistema visual

### Colores

**Marca y acento**

| Token | Valor | Oscuro | Uso | Permitido | Nunca |
| --- | --- | --- | --- | --- | --- |
| primary | #ff4f00 | — | La acción principal, los links y el estado activo. Es el color por el que se reconoce a itiers | — | Texto corriente sobre blanco: da 3.30:1 y no llega a AA; Fondos amplios: el naranja manda sobre superficie chica, no sobre bloques enteros |
| secondary | #b2b2b2 | — | Gris secundario del manual (Pantone 412 C). Líneas divisorias, bordes de card y superficies neutras que acompañan sin competir | — | Texto: sobre blanco da 1.90:1 y no se lee |
| accent | #1F1F1F | #F2F2F2 | Tinta de máximo contraste sobre superficies claras y sobre el naranja: 16.48:1 sobre blanco y 5.31:1 sobre #ff4f00. No es un color del manual, es una necesidad de interfaz | — | Ser un segundo naranja. La marca tiene uno solo: #ff4f00, Pantone Orange 021 C |
| brand-gray | #4d4d4d | #898a8d | El gris institucional del isologotipo. Acompaña al naranja en el logo y ordena la jerarquía de texto | — | Reemplazar al naranja como color de marca: el isologotipo lleva los dos, nunca uno solo |

**Superficies**

| Token | Valor | Oscuro | Uso | Permitido | Nunca |
| --- | --- | --- | --- | --- | --- |
| background | #FFFFFF | #0F0F0F | El fondo general de la aplicación y de las páginas | — | Fondo de cards o bloques elevados, que van en surface |
| surface | #FAFAFA | #1A1A1A | La superficie que se apoya sobre el fondo: cards, paneles y filas de tabla. En oscuro es el K90 de la escala del manual | — | — |

**Líneas y bordes**

| Token | Valor | Oscuro | Uso | Permitido | Nunca |
| --- | --- | --- | --- | --- | --- |
| border | #b2b2b2 | #333333 | La línea divisoria del sistema: bordes de card, separadores y contorno de input en reposo. Toma el gris secundario del manual, Pantone 412 C | — | Contorno de un control que necesite 3:1 por WCAG 1.4.11: sobre blanco este gris da 1.90:1 |

**Texto**

| Token | Valor | Oscuro | Uso | Permitido | Nunca |
| --- | --- | --- | --- | --- | --- |
| text | #1C1917 | #b2b2b2 | El texto corriente y los títulos sobre superficie clara. 17.49:1 sobre blanco | — | Fondos: es tinta, no superficie |

**Semánticos**

| Token | Valor | Oscuro | Uso | Permitido | Nunca |
| --- | --- | --- | --- | --- | --- |
| error | #A6192E | #F2626E | Errores de validación y acciones destructivas. Fuera del manual: la marca no define paleta semántica | — | Pegado al naranja de marca: están a 13 grados de tono y se confunden. Un error nunca comparte encuadre con un CTA |
| success | #0B6E4F | #3FBF95 | Confirmaciones y estados resueltos. Fuera del manual: la marca no define paleta semántica | — | — |
| warning | #8A6A14 | #D9A62A | Avisos que no bloquean. Fuera del manual: la marca no define paleta semántica | — | — |

**Contraste**

- `secondary`: 2.12:1 sobre background (No cumple)
- `background`: verificado

### Tipografía

- **Familia para títulos:** Arista Pro Trial Light, sans-serif
- **Familia para texto:** Arial Rounded MT, Nunito, sans-serif
- **Familia monoespaciada:** Geist Mono, monospace
- **Pesos disponibles:** 500, 300, 400, 700

| Token | Tamaño | Peso | Interlineado | Tracking | Uso |
| --- | --- | --- | --- | --- | --- |
| titulo-1 | 50px | 500 | 56px | -0.02em | El título principal de cada pantalla, uno solo por vista. Va en la fuente de títulos |
| body | 16px | 400 | 24px | 0 | Texto corriente y descripciones. Va en Arial Rounded |

| Original | Sustituta | Pesos | Motivo |
| --- | --- | --- | --- |
| Arista Pro Trial Light | Comfortaa | 300 / 400 | Arista Pro es una licencia de prueba: no se puede publicar con ella. Comfortaa es geométrica y redondeada como la original y está en Google Fonts. Alternativa: Quicksand |

### Espaciado

- **Unidad base:** 8px

### Superficies, radios y sombras

| Nivel | Tratamiento | Uso |
| --- | --- | --- |
| base | Sin sombra. Borde de 1px en {colors.border} | Cards, tablas y toda superficie que no tapa nada |
| overlay | 0 4px 14px rgb(0 0 0 / 0.08) | Menús, modales y popovers: lo único que tapa contenido |

| Token | Valor | Uso |
| --- | --- | --- |
| sm | 12px | Botones CTAs |
| none | 0px | Tablas, celdas y bloques de datos. Es el cuadrado del manual: la forma que no adorna |
| md | 16px | Cards y bloques de contenido. Es el cuadrado con esquinas redondeadas del manual |
| full | 9999px | Badges, chips y el avatar del isologotipo en redes. Es el círculo del manual |

- **Bordes:** La marca separa con línea, no con sombra: las tramas institucionales son redes de nodos dibujadas a hairline. Divisores y contornos de 1px en {colors.border}. Nunca 2px salvo el anillo de foco
- **Sombras:** Sombra sólo en lo que se levanta por encima del contenido: menús, modales y popovers. Nunca en cards ni en superficies quietas, y nunca sobre el isologotipo, que el manual prohíbe expresamente
- **Desenfoque:** Sin glassmorphism ni transparencias. El manual pide que el logo se lea con claridad sobre lo que tenga detrás; una superficie translucida hace lo contrario. La única veladura aprobada es el degradado blanco sobre fotografía

## Componentes y patrones

### button-primary

CTA de Landing, mantener consistencia

- **Categoría:** Botones
- **Color:** {colors.primary}
- **Comportamiento:** Cuando esta en el viewport, se percibe un breath que llama la atencion
- **Tokens:** `{colors.primary}`

**Estados**

| Estado | Comportamiento |
| --- | --- |
| hover | Add some depth like apple buttons |

### isologotipo

La marca en pantalla. Es una unidad indivisible y siempre lleva los dos colores del manual: naranja y gris

- **Anatomía:** Isotipo de red de nodos a la izquierda, logotipo «itiers» en {colors.brand-gray}, y la bajada «DATA SENSE» en {colors.primary} debajo. Alrededor, un área de reserva libre del 10% del ancho del logo

**Estados**

| Estado | Comportamiento |
| --- | --- |
| default | Isotipo y logotipo juntos, en color, a 57px de ancho como mínimo. Sobre fotografía va con degradado blanco detrás; sobre un color fuerte que cubra toda la superficie se admite la versión en blanco |

## Responsive y accesibilidad

- **Enfoque:** Desktop-first

### Breakpoints

| Nombre | Desde | Notas |
| --- | --- | --- |
| sm | 640px | Se redistribuye la UI para abarcar los espacios de respiracion que habian en Desktop |
| lg | 1024px | Core Breakpoint |

### Comportamiento por tamaño

- **En móvil:** Una columna, se toman los elementos de Desktop y se redistribuyen en una version mobile con un navbar minino representado con iconos en la parte superior
- **En tablet:** Dos columnas, se redistribuyen los elementos de la version Desktop
- **En escritorio:** Contenido centrado con elementos que pueden respirar entre si, cuando se scrollea la nav bar se convierte en sticky y se integra a la UI
- **Comportamiento de imágenes:** Preferible squared composition. Si es AI generated que sea el texto en spanish y que se vea de acuerdo a los colores de la marca

### Accesibilidad

- **Contraste mínimo:** WCAG AAA (7:1)

## Guardarraíles

### Prohibido

- **No deformar el isologotipo: no angostarlo, no expandirlo, no inclinarlo, no rotarlo y no espejarlo. Se escala siempre en proporción**
  - *Motivo:* El manual lo prohibe de forma explicita. Un logo deformado deja de ser reconocible: ya no es la marca, es un parecido
  - *Alcance:* Todo el producto
- **No separar el isotipo del logotipo ni usar uno sin el otro: el isologotipo es una unidad**
  - *Motivo:* El manual los define como una unidad. El isotipo solo no dice el nombre, y el logotipo solo pierde la red de nodos, que es la idea de la marca: recibir datos y ordenarlos
  - *Alcance:* Todo el producto
- **No agregar sombras, bordes, contornos ni degradados al isologotipo, ni encerrarlo en ninguna forma**
  - *Motivo:* El manual lo prohíbe. Única excepción: el avatar de redes sociales, donde se permite círculo, cuadrado o cuadrado con esquinas redondeadas
  - *Alcance:* Todo el producto
- **No usar el isologotipo en un solo color. La única versión monocroma permitida es la blanca, y sólo sobre un color fuerte y contrastante que cubra toda la superficie**
  - *Motivo:* El manual es tajante: el logo siempre lleva naranja y gris. En un solo color se pierde la distinción entre la red de nodos y el nombre, que es lo que lo hace legible
  - *Alcance:* Todo el producto
- **No mostrar el isologotipo a menos de 57px de ancho, ni con menos del 10% de su ancho como aire libre alrededor**
  - *Motivo:* Son las dos medidas que fija el manual: 2cm o 57px de ancho mínimo, y 10% del ancho como área de reserva. Más chico los nodos del isotipo se empastan; sin el aire, el logo compite con lo que tenga al lado
  - *Alcance:* Todo el producto, incluidos favicon, avatares y firmas de mail
- **No apoyar texto sobre una fotografía sin un degradado blanco debajo que le garantice el contraste**
  - *Motivo:* El manual lo pide para toda pieza con foto. Hoy el hero de itiers.com lo incumple: texto blanco sobre una foto clara, sin degradado
  - *Alcance:* Hero, banners y cualquier bloque con imagen de fondo

## Principios rectores

1. Toda acción importante necesita un estado claro
2. Decisiones sobrias sobre los datos

## Metadatos del documento

- **Versión:** 1.0.0
- **Idioma del documento:** es-AR

*Generado con DESIGN.md Creator.*