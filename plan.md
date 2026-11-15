# Plan — Portafolio personal

## Alcance e implementación

La web deja de ser una tienda y pasa a ser un portafolio personal. Mantendrá el stack actual React, Vite, TypeScript y Wouter, la publicación estática en GitHub Pages y la base `/kapponisoftware/`. La página principal tendrá navegación por anclas para Inicio, Proyectos, Perfil y Contacto; un encabezado editorial breve; una selección de tarjetas de proyecto; una sección de presentación y un bloque de contacto. El contenido personal y los proyectos se marcarán como ejemplos editables, sin inventar experiencia, clientes, métricas, precios ni resultados. No habrá carrito, checkout ni redirección de compra.

La estructura principal se conservará: `client/src/pages/Home.tsx` contiene la página y sus piezas de interfaz; `client/src/index.css` define el sistema visual responsive; `client/index.html` define idioma y metadatos; `client/public/manus-routes.json` declara las rutas; `vite.config.ts` conserva el prefijo de Pages; `.github/workflows/pages.yml` compila y publica `dist/public`.

## Dirección visual

- **Movimiento de diseño:** interfaz editorial de producto digital sobria, guiada por la captura de referencia, sin copiar su marca ni su contenido.
- **Principios:** jerarquía tipográfica clara; paneles finos y discretos; mucho espacio respirable; navegación simple y visible.
- **Color:** negro carbón como fondo, blanco cálido para texto y grises neutrales para bordes y texto secundario. El contraste prioriza lectura, no efectos luminosos.
- **Composición:** cabecera superior compacta, navegación horizontal por secciones, bloque de presentación y módulos rectangulares apilados; los proyectos se presentan en tarjetas simples.
- **Elementos distintivos:** etiquetas de sección pequeñas, separadores grises y superficies apenas contrastadas; imágenes o miniaturas reales se agregarán cuando el usuario las proporcione.
- **Interacción y movimiento:** anclas directas, menú móvil sencillo y estados hover breves; sin animaciones decorativas. Respetar `prefers-reduced-motion`.
- **Tipografía:** Inter o sans-serif del sistema para lectura; una mono discreta sólo para numeración o etiquetas técnicas.
- **Esencia de marca:** portafolio personal fácil de recorrer y actualizar; personalidad: sobria, clara y cercana.
- **Voz:** directa y humana. Ejemplos: «Una selección de proyectos y procesos.» y «¿Tienes una idea? Hablemos.»
- **Logotipo e icono:** marca tipográfica editable «TU NOMBRE» con monograma geométrico neutro; no asumir iniciales del usuario.
- **Color de marca:** blanco suave `#F3F3F3` sobre carbón `#0B0B0B`.
