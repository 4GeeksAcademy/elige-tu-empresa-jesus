- descripción: Definir permisos, políticas y pruebas antes de automatizar acciones operativas con IA.
- alcance: solicitada por el agente

## Qué pide la regla

1. Consulta esta regla al diseñar o modificar agentes, herramientas o flujos que consulten datos o actúen sobre operaciones reales de TrackFlow.
2. Define qué datos puede consultar el agente, qué acciones puede ejecutar y cuáles requieren aprobación humana. Si esos permisos no están acordados, pregunta antes de habilitar acciones reales.
3. Usa únicamente políticas de negocio confirmadas. No inventes plazos de devolución, criterios de aprobación, precios ni permisos para completar una automatización.
4. Prueba los permisos y límites con datos sintéticos o anonimizados, incluyendo denegación de acciones no autorizadas, ausencia de una política y fallo de una herramienta. Ante esos casos, detén la acción y comunica el problema sin afirmar que se completó.

## Por qué existe

[CONTEXT.md](../../CONTEXT.md) solicita aprobación de devoluciones con reglas por cliente, recogidas automatizadas y recomendaciones comerciales, pero no define las políticas concretas para ejecutarlas. [techContext.md](../../memory-bank/techContext.md) recoge la necesidad de documentar herramientas, permisos, límites y criterios de aceptación, y de evitar datos sensibles en evaluación.

Sin esta regla, un agente podría inventar el plazo permitido para aprobar una devolución o programar una recogida sin autorización. La regla se consulta cuando la tarea implica estas capacidades, sin imponer ese análisis a cambios que no afectan a automatizaciones.

## Cómo comprobar que se cumple

1. Revisa que la documentación de la herramienta o del flujo enumera datos accesibles, acciones permitidas y casos de aprobación humana.
2. Comprueba que cada política aplicada tiene una fuente confirmada y que las políticas pendientes impiden ejecutar la acción correspondiente.
3. Ejecuta pruebas con datos sintéticos o anonimizados para una acción permitida, una no autorizada, una política ausente y una herramienta que falla. Verifica que los tres últimos casos no ejecutan la acción y comunican el motivo.
4. Si no hay herramientas implementadas o pruebas ejecutables, informa de qué límites siguen sin verificarse; no presentes el flujo como validado para operaciones reales.