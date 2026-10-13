# TrackFlow: briefing del proyecto

## Uso y fuente de verdad

Leer este archivo, [techContext.md](techContext.md) y [progress.md](progress.md) al comenzar una sesión. Los datos de la empresa proceden exclusivamente de [CONTEXT.md](../CONTEXT.md). Las necesidades descritas no deben interpretarse como funcionalidades ya implementadas.

## Qué es TrackFlow

TrackFlow es una empresa de logística de última milla y gestión de almacenes, fundada en 2009 en Los Ángeles. Opera en Estados Unidos y España, con almacenes en Los Ángeles y Zaragoza, unos 130 empleados y una facturación anual aproximada de 9 millones de euros. Para marcas de comercio electrónico almacena inventario, prepara y empaqueta pedidos, coordina su envío y gestiona las devoluciones. Fuente: [CONTEXT.md, presentación](../CONTEXT.md).

## Departamentos, responsables y problemas

Todos los datos de esta tabla proceden de [CONTEXT.md, organización y departamentos](../CONTEXT.md).

| Departamento | Responsable y equipo | Problemas principales | Necesidades descritas |
| --- | --- | --- | --- |
| Operaciones de almacén | Ana Whitfield; unos 70 operarios y 2 responsables de almacén | Dos sistemas de almacén distintos, sin inventario global en tiempo real; pedidos por email transcritos manualmente; picking en papel y discrepancias detectadas tarde | API de inventario unificada, ingesta automática de pedidos, panel operativo y alertas de stock bajo |
| Última milla y gestión de transportistas | Carlos Vega; 6 coordinadores | Asignación manual entre 8 transportistas, seguimiento en portales separados y ausencia de históricos estructurados de rendimiento | Selección de transportista según destino, peso y urgencia; tracking unificado, portal público y panel de rendimiento |
| Logística inversa | Sofía Ramos; 5 personas | Devoluciones entre el 18% y el 25% del volumen; revisión manual, inspección inconsistente y falta de análisis de motivos | Reglas de aprobación por cliente, recogida automatizada, inspección asistida por IA y análisis de patrones |
| Atención al cliente / experiencia del cliente | Valentina Cruz; 15 agentes en ambos países | Email, WhatsApp y teléfono sin tickets unificados; consultas repetitivas, sin base de conocimiento ni cobertura fuera de horario; el briefing estima automatizable el 80% | Agente de primera línea, conocimiento semántico para RAG, tickets, panel de CX y análisis de sentimiento; español e inglés opcionales pero recomendados |
| Comercial y relación con clientes | Miguel Torres; 4 account managers y 4 personas de desarrollo de negocio | Sin CRM, cuentas en hojas y emails, informes manuales y riesgo de no renovación sin visibilidad | Perfil unificado, informes PDF automáticos, puntuación de salud, alertas de renovación a 90 y 30 días y agente comercial |
| Tecnología | Andrés Kim, CTO; 7 personas en Zaragoza | Sistemas fragmentados, ERP antiguo, scripts e integraciones poco documentados, dos proveedores cloud sin identificar, sin telemetría centralizada; despliegues de 1 a 2 semanas | Logging y telemetría centralizados, pipeline para dashboards, monitorización y alertas, documentación asistida y automatización operativa |
| Dirección ejecutiva | Identidad del CEO pendiente de aclaración | Informes manuales que consumen 3 o 4 horas por director, datos de hasta dos días de antigüedad y visión parcial del negocio | Panel global de KPIs y comparativas por país, informe automático los lunes a las 7, alertas y asistente en lenguaje natural |

## Inconsistencia que no debe resolverse por suposición

[CONTEXT.md](../CONTEXT.md) presenta a **Thomas Harry** como fundador y CEO en la organización inicial, pero identifica a **Daniel Espinoza** como CEO en Dirección Ejecutiva y atribuye a Daniel la creación de TrackFlow Tech. Hasta que se aclare el documento, no asignar de forma definitiva el cargo a ninguno de los dos.

## Problema que resuelve el proyecto

La operación de dos países depende de sistemas separados y trabajo manual. Esto provoca lentitud, errores, falta de visibilidad y menor rentabilidad. TrackFlow Tech tiene el mandato de construir sistemas, integraciones y automatizaciones inteligentes para modernizar esa operación. Fuente: [CONTEXT.md, situación actual](../CONTEXT.md).

## Objetivos

Los siguientes objetivos sintetizan las necesidades de [CONTEXT.md](../CONTEXT.md); no son compromisos de implementación de todas las funcionalidades ni un calendario aprobado:

- Unificar la visibilidad del inventario, los pedidos y el seguimiento de envíos entre ambos países.
- Reducir tareas manuales en pedidos, selección de transportistas, devoluciones, atención e informes.
- Dar a operaciones, comercial y dirección información actualizada y comparable para decidir.
- Mejorar la fiabilidad mediante monitorización, alertas y documentación de integraciones.
- Aplicar IA a soporte, conocimiento, inspección de devoluciones y recomendaciones explicables.
- Atender la necesidad de disponibilidad continua del agente de CX, el portal de seguimiento y el panel operativo, descrita en el briefing.

El alcance inicial, sus prioridades y sus criterios de aceptación quedan por acordar. La tecnología y el estado de implementación se documentan por separado en [techContext.md](techContext.md) y [progress.md](progress.md).