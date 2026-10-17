# Progreso del proyecto

## Estado de referencia

Este banco registra el estado inicial observado en el repositorio, no el avance de los sistemas históricos de la empresa. Leer junto con [projectbrief.md](projectbrief.md) y [techContext.md](techContext.md). La plantilla declara que aún no incluye aplicaciones de negocio: [README.es.md, estado actual](../README.es.md).

> **Hito actual:** Web pública (landing page + formulario de contacto). Requisitos definidos en [docs/context/web-hito-1.md](../docs/context/web-hito-1.md). Pendiente de implementar.

## Qué existe ya

- Briefing completo de TrackFlow en [CONTEXT.md](../CONTEXT.md). La indicación de que sigue siendo un placeholder en [README.es.md](../README.es.md) está desactualizada.
- Una propuesta personal de agente Director de operaciones en [company-choice.md](../company-choice.md). Es una idea de proyecto, no una implementación ni una fuente adicional de hechos sobre la empresa; sus prioridades deben confirmarse antes de fijar el alcance.
- Estructura y guías del monorepo para interfaces, servicios, datos, IA, automatización, reutilización y operaciones. Fuente: [README.es.md](../README.es.md) y los README por carpeta.
- Configuración de contenedor y script de preparación, con dependencias de proyecto todavía incompletas. Fuentes: [devcontainer.json](../.devcontainer/devcontainer.json), [post-create.sh](../.devcontainer/post-create.sh) y el diagnóstico en [techContext.md](techContext.md).
- Metadata y tipos genéricos del paquete compartido; plantilla de agente aún vacía; plantilla de skill y ejemplo de limpieza con pandas. Fuentes: [package.json](../packages/shared/package.json), [index.ts](../packages/shared/types/index.ts), [agent.py](../agents/_template/agent.py), [SKILL.md](../skills/_template/SKILL.md) y [pandas_clean.py](../skills/data-analysis/scripts/pandas_clean.py).
- Banco de memoria compuesto únicamente por [projectbrief.md](projectbrief.md), [techContext.md](techContext.md) y este archivo. Contiene contexto, fuentes, dudas y siguientes pasos.
- Manual para agentes en [AGENTS.md](../AGENTS.md), con lecturas de inicio, separación de responsabilidades, flujo previo al commit y protección de archivos. El mecanismo de lectura al iniciar sesión está resuelto: el manual indica qué leer y el usuario ha comprobado que Copilot lo carga automáticamente en un chat nuevo.
- Tres reglas de desarrollo en `.agents/rules/`: [frontend-coherente.md](../.agents/rules/frontend-coherente.md), [limites-ia.md](../.agents/rules/limites-ia.md) y [verdad-negocio.md](../.agents/rules/verdad-negocio.md). Cubren el stack y la separación del frontend, los permisos y límites de la IA, y la fidelidad a las fuentes del negocio.
- Skill de desarrollo [implementar-flujo-ui](../.agents/skills/implementar-flujo-ui/SKILL.md), para implementar un flujo acordado en una aplicación React + Vite + TypeScript existente. No inicializa aplicaciones ni implementa APIs o automatizaciones; su existencia no implica que haya interfaces implementadas.
- ~~Tecnología de frontend aprobada el 13-oct-2026: React + Vite + TypeScript~~ **SUSTITUIDO.** Tecnología de frontend aprobada el 17 de octubre de 2026: HTML + Tailwind CSS v4 (por CDN) + Javascript (solo validación en `validation.js`) para `uis/website`; mismo stack (sin `validation.js`) para `uis/backoffice`. Los requisitos del proyecto están en [docs/context/web-hito-1.md](../docs/context/web-hito-1.md). Registro de la decisión y su origen: [techContext.md, decisiones de arquitectura](techContext.md).

## Qué falta

Los siguientes puntos distinguen los destinos previstos por las guías de su implementación, ausente en el inventario actual:

- Acordar el caso de uso inicial, su alcance y sus criterios de aceptación. Para aplicar la skill de interfaz también deben concretarse la persona usuaria, el flujo, los datos o contrato de API y el contenido de negocio confirmado. Fuente: [implementar-flujo-ui](../.agents/skills/implementar-flujo-ui/SKILL.md).
- Implementar la web pública y el backoffice con HTML + Tailwind CSS v4 por CDN + Javascript (validación en `validation.js` solo en `uis/website`). La tecnología está aprobada según los requisitos de [docs/context/web-hito-1.md](../docs/context/web-hito-1.md), pero los archivos todavía no existen. Fuentes: [uis/README.es.md](../uis/README.es.md) y [techContext.md, decisiones de arquitectura](techContext.md).
- API de negocio, integraciones, modelos de dominio y workers cuando sean necesarios. Fuentes: [README.es.md, services](../README.es.md) y [services/README.es.md](../services/README.es.md).
- Datos de ejemplo, pipelines y conjuntos de evaluación de TrackFlow. Fuentes: [data/raw/README.es.md](../data/raw/README.es.md), [data/pipelines/README.es.md](../data/pipelines/README.es.md), [data/process/README.es.md](../data/process/README.es.md) y [data/eval/README.es.md](../data/eval/README.es.md).
- Agentes funcionales, conectores, conocimiento para RAG, automatizaciones y pruebas ejecutables. Fuentes: [agents/README.es.md](../agents/README.es.md), [agents/tools/README.es.md](../agents/tools/README.es.md), [mcps/README.es.md](../mcps/README.es.md), [workflows/README.es.md](../workflows/README.es.md) y [CONTEXT.md, necesidades de CX](../CONTEXT.md).
- Configuración de dependencias y ejecución de las futuras aplicaciones, despliegue, observabilidad y criterios de validación. Fuentes: [README.es.md, estado actual](../README.es.md), [post-create.sh](../.devcontainer/post-create.sh), [infra/README.es.md](../infra/README.es.md) y [CONTEXT.md, Tecnología](../CONTEXT.md).

## Bloqueos y cuestiones abiertas

- Aclarar la contradicción Thomas Harry / Daniel Espinoza en [CONTEXT.md](../CONTEXT.md). No resolverla por suposición.
- Acordar el alcance mínimo y qué departamento se atiende primero. Las necesidades de [CONTEXT.md](../CONTEXT.md) abarcan muchas áreas; la idea de [company-choice.md](../company-choice.md) no constituye un plan aprobado.
- ~~Concretar versiones y configuración de las interfaces con el stack ya aprobado~~ **SUSTITUIDO.** El stack (HTML + Tailwind v4 CDN + JS) está definido. Pendiente: acordar versión de Tailwind CSS v4, diseño visual, paleta de colores, tipografía y contenido gráfico. El resto de decisiones de arquitectura sigue pendiente. Fuente: [techContext.md, decisiones de arquitectura](techContext.md) y [docs/context/web-hito-1.md](../docs/context/web-hito-1.md).
- Resolver, cuando se prepare la implementación, el setup Python incompleto y la ruta de entrada del paquete compartido. Fuentes: [post-create.sh](../.devcontainer/post-create.sh), [package.json](../packages/shared/package.json) y [index.ts](../packages/shared/types/index.ts). No se modifican en esta tarea.

## Próximos pasos previstos

Esta secuencia es una propuesta para acordar, no un calendario. ~~La elección de React + Vite + TypeScript ya está aprobada~~ **SUSTITUIDO.** La elección de HTML + Tailwind CSS v4 por CDN + Javascript (solo validación en `validation.js`) está aprobada según los requisitos del proyecto en [docs/context/web-hito-1.md](../docs/context/web-hito-1.md); los demás pasos no implican decisiones adicionales aprobadas:

1. Aclarar la identidad del CEO y confirmar el caso de uso inicial, su alcance y sus criterios de aceptación a partir de [CONTEXT.md](../CONTEXT.md) y la propuesta de [company-choice.md](../company-choice.md).
2. Inicializar las aplicaciones `uis/website` y `uis/backoffice` con HTML + Tailwind CSS v4 por CDN + Javascript (`validation.js` solo en `uis/website`), siguiendo los requisitos de [docs/context/web-hito-1.md](../docs/context/web-hito-1.md) y el stack aprobado en [techContext.md](techContext.md). Destino de las interfaces: [uis/README.es.md](../uis/README.es.md). La skill de interfaz implementar-flujo-ui no aplica a este stack (está diseñada para React + Vite + TypeScript).
3. Preparar dependencias y comandos reproducibles del stack aprobado, atendiendo a los problemas existentes del setup y del paquete compartido. Fuentes: [post-create.sh](../.devcontainer/post-create.sh) y [package.json](../packages/shared/package.json).
4. Definir contratos de datos y muestras sintéticas o anonimizadas para el caso de uso, documentando origen y evaluación. Fuentes: [data/raw/README.es.md](../data/raw/README.es.md), [data/eval/README.es.md](../data/eval/README.es.md) y [packages/README.es.md](../packages/README.es.md).
5. Implementar una primera funcionalidad de extremo a extremo, con interfaz, API y pruebas, siguiendo la separación del [README.es.md](../README.es.md). Para la parte de interfaz, usar [implementar-flujo-ui](../.agents/skills/implementar-flujo-ui/SKILL.md) una vez exista la aplicación y estén acordados el flujo, los datos o contrato de API y el contenido de negocio; añadir IA o workflows según el caso acordado, no por defecto.
6. Actualizar este banco con avances verificables, decisiones aprobadas y pendientes, siguiendo [AGENTS.md](../AGENTS.md). La lectura al iniciar sesiones ya está resuelta y no requiere una tarea adicional.
