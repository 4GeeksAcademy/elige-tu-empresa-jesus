---
name: implementar-flujo-ui
description: Implementa un flujo de usuario acordado en una aplicación React, Vite y TypeScript existente de TrackFlow. Úsala al añadir una vista o capacidad de interfaz en uis/website o uis/backoffice; no la uses para inicializar una aplicación ni para implementar APIs o automatizaciones.
---

# Implementar un flujo de interfaz

## Objetivo

Implementar un único flujo de usuario acordado en una aplicación existente de `uis/`, desde su entrada en la interfaz hasta el resultado visible, sin inventar requisitos de negocio ni trasladar lógica o secretos del backend al navegador.

## Cuándo usarla

Usa esta skill cuando una tarea pida añadir o modificar un flujo de usuario en `uis/website` o `uis/backoffice`. Cada ejecución debe cubrir un objetivo de usuario concreto; divide solicitudes con varios flujos independientes en tareas separadas.

No la uses para crear la estructura inicial de una aplicación, implementar endpoints o integraciones de servidor, ni diseñar un agente que ejecute acciones operativas. Si la aplicación no existe todavía, detente y solicita primero su inicialización.

## Inputs necesarios

Antes de implementar, reúne:

1. **Aplicación y ubicación:** `uis/website` o `uis/backoffice`, y las rutas o pantallas afectadas.
2. **Persona y objetivo:** quién usa el flujo y qué resultado necesita obtener.
3. **Alcance y aceptación:** pasos del flujo, resultado esperado y casos que quedan fuera.
4. **Datos e integración:** contrato de API existente (entradas, respuestas y errores), o datos de prueba explícitamente aprobados si la API aún no existe.
5. **Contenido y reglas de negocio:** textos, estados y políticas confirmados que deben mostrarse o aplicarse.
6. **Diseño y ejecución:** convenciones visuales de la aplicación, vistas de referencia si las hay y comandos disponibles para comprobarla.

Si falta un input que pueda cambiar el comportamiento o una decisión de negocio, pregunta antes de implementarlo. No sustituyas una API pendiente por datos ficticios presentados como reales; si se acuerda un mock, debe identificarse claramente como tal.

## Procedimiento

1. Lee `AGENTS.md`, las reglas aplicables de `.agents/rules/`, los tres documentos de `memory-bank/` y el README de la aplicación. Usa `CONTEXT.md` como fuente de hechos del negocio y distingue las necesidades de las funciones que ya existen.
2. Comprueba que la aplicación existe y usa React, Vite y TypeScript. Revisa su estructura, estilos, rutas, componentes reutilizables, `package.json` y el lockfile antes de elegir cómo integrarte y ejecutar comandos.
3. Contrasta los inputs con el contexto y las decisiones aprobadas. Si hay contradicciones, políticas sin definir o decisiones técnicas pendientes que afecten al flujo, para y pregunta; no las resuelvas por suposición.
4. Traza el recorrido acordado: punto de entrada, acciones de la persona usuaria, datos mostrados y resultado. Identifica los estados normales, de carga, vacío y error que correspondan al flujo.
5. Implementa solo ese flujo con los patrones y dependencias existentes. Consume el contrato disponible desde la interfaz; deja las credenciales y la lógica de integración en `services/`. No añadas librerías ni decidas arquitectura sin necesidad y aprobación.
6. Añade o actualiza comprobaciones del flujo usando las herramientas de prueba que ya tenga la aplicación. Si aún no existe una herramienta de pruebas, prepara una comprobación manual reproducible sin añadir un framework por cuenta propia.
7. Ejecuta las comprobaciones disponibles declaradas en `package.json` desde la carpeta de la aplicación. Si el contrato, los datos o los comandos faltan, registra qué no pudo verificarse y por qué; no afirmes que el flujo está validado.
8. Revisa el diff para confirmar que el cambio sigue limitado al flujo, respeta la separación frontend/backend y no incluye secretos ni datos reales innecesarios.

## Criterios de aceptación

El flujo está listo cuando se pueden comprobar todos estos puntos:

1. Una prueba automatizada existente, o un procedimiento manual reproducible, recorre el objetivo acordado y verifica el resultado esperado sin depender de datos de producción.
2. Para los estados aplicables, la interfaz muestra el resultado normal y maneja carga, ausencia de datos y error sin presentar datos ficticios como reales ni dejar la acción bloqueada sin explicación.
3. La vista puede utilizarse en escritorio y móvil sin contenido cortado o superpuesto, y el flujo principal puede completarse con teclado.
4. Los comandos de comprobación configurados para la aplicación terminan sin errores. Si no hay comandos o no pueden ejecutarse, queda anotada explícitamente esa limitación y qué criterio sigue pendiente.
5. El diff no contiene credenciales, reglas de negocio inventadas ni implementación de endpoints o integraciones que pertenecen al backend.

## Entrega

Resume el flujo implementado, las comprobaciones ejecutadas con sus resultados y cualquier contrato, dato, comando o decisión pendiente. Separa claramente las limitaciones de las comprobaciones que sí pasaron.