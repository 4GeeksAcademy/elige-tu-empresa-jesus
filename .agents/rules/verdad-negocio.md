- descripción: Mantener los datos del negocio y el estado del proyecto fieles a sus fuentes.
- alcance: siempre activa

## Qué pide la regla

1. Usa [CONTEXT.md](../../CONTEXT.md) como fuente de los hechos sobre TrackFlow; no inventes personas, políticas ni cifras.
2. Consulta [projectbrief.md](../../memory-bank/projectbrief.md), [techContext.md](../../memory-bank/techContext.md) y [progress.md](../../memory-bank/progress.md) para distinguir necesidades, decisiones aprobadas y funcionalidades implementadas.
3. Presenta las propuestas y funcionalidades pendientes como tales. No describas una integración como operativa sin evidencia de su implementación y comprobación.
4. Si hay una contradicción que afecta a la tarea, explícala y pregunta antes de basar el trabajo en ella. Pide aprobación antes de tomar una decisión de arquitectura pendiente.

## Por qué existe

[AGENTS.md](../../AGENTS.md) exige respetar la fuente de verdad del negocio y consultar las decisiones registradas. [techContext.md](../../memory-bank/techContext.md) y [progress.md](../../memory-bank/progress.md) indican que todavía no hay aplicaciones de negocio implementadas: las necesidades no son funciones disponibles.

[CONTEXT.md](../../CONTEXT.md) identifica a Thomas Harry y a Daniel Espinoza como CEO en apartados distintos. Sin esta regla, se podría elegir uno por suposición o afirmar que el tracking unificado ya funciona cuando solo está solicitado.

## Cómo comprobar que se cumple

1. Contrasta los nombres, cifras y afirmaciones de negocio del cambio con CONTEXT.md.
2. Comprueba que cada afirmación de funcionalidad disponible tiene evidencia en el código y en las comprobaciones realizadas; etiqueta el resto como pendiente o propuesta.
3. Verifica que las decisiones técnicas usadas están aprobadas en techContext.md. Si una contradicción o decisión pendiente afecta al cambio, confirma que se ha consultado al desarrollador antes de continuar.