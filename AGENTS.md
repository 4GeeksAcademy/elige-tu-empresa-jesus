# Manual para agentes de IA

## 1. Al empezar cada sesión

Antes de modificar archivos, sigue estos pasos en orden:

1. Lee `memory-bank/projectbrief.md` para entender el propósito y el dominio del proyecto.
2. Lee `memory-bank/techContext.md` para conocer el estado técnico y las decisiones de arquitectura aprobadas.
3. Lee `memory-bank/progress.md` para conocer lo que existe, lo que falta y los próximos pasos.
4. Si existen, lee las reglas de `.agents/rules/` y las skills de `.agents/skills/` que correspondan a la tarea.
5. Lee el README de la carpeta en la que vayas a trabajar y sigue sus convenciones.
6. Trata `CONTEXT.md` como la fuente de verdad del negocio de TrackFlow. No inventes ni contradigas sus datos; si encuentras inconsistencias, señálalas y pregunta.

## 2. Dónde va cada cosa

1. Coloca las interfaces de usuario en `uis/`: la web pública en `uis/website/` y el backoffice en `uis/backoffice/`. La guía raíz describe estas ubicaciones en [README.es.md, líneas 74–84](README.es.md#L74-L84).
2. Coloca el backend, las APIs y los workers en `services/`. La guía recomienda una API FastAPI centralizada y evitar microservicios prematuros en [README.es.md, líneas 88–97](README.es.md#L88-L97).
3. Mantén la separación general de responsabilidades descrita en [README.es.md, líneas 40–48](README.es.md#L40-L48).
4. Trata `.agents/` como configuración del agente de desarrollo: sus reglas e instrucciones guían el trabajo en el repositorio.
5. Trata `agents/` y `skills/` como componentes del producto de TrackFlow: allí se desarrollan los agentes de IA del producto y las capacidades reutilizables que estos usan, según [README.es.md, líneas 116–134](README.es.md#L116-L134). No mezcles estos componentes con la configuración de `.agents/`.

## 3. Flujo obligatorio antes de cada commit

Antes de preparar un commit, completa estos pasos en orden:

1. Comprueba que el cambio cumple las decisiones registradas en `memory-bank/techContext.md` y las reglas aplicables de `.agents/rules/`, si existen.
2. Si modificaste una aplicación dentro de `uis/`, ejecuta desde su carpeta los comandos de comprobación definidos en su `package.json`. Confirma que todos terminan sin errores. Si no hay comandos apropiados, informa de ello.
3. Ejecuta `git status` y revisa todos los cambios. Confirma que solo afectan archivos relacionados con la tarea y que no incluyen contraseñas, claves, secretos ni archivos generados.
4. Actualiza `memory-bank/progress.md` con lo realizado y lo que aún falta.
5. Explica al desarrollador qué archivos y cambios se guardarían y espera su confirmación explícita antes de hacer el commit. No hagas el commit sin esa confirmación.
6. Tras recibir la confirmación, escribe un mensaje de commit con el formato `tipo: descripción` que resuma el cambio.

## 4. Archivos y carpetas protegidos

No modifiques estos archivos o carpetas sin confirmación explícita del desarrollador:

1. `CONTEXT.md`.
2. `AGENTS.md`.
3. `.agents/`, incluidas sus reglas y skills.
4. `memory-bank/projectbrief.md` y `memory-bank/techContext.md`. Puedes actualizar `memory-bank/progress.md` siguiendo el flujo de este manual.
5. `.devcontainer/`.
6. `company-choice.md`.
7. `README.md` y `README.es.md` de la raíz del repositorio.

La instrucción explícita de crear este `AGENTS.md` autoriza su creación para esta tarea; cualquier modificación posterior queda protegida por esta regla.

## 5. Cuándo parar y preguntar

1. Para y pregunta si la tarea contradice `CONTEXT.md` o una decisión del banco de memoria.
2. Para y pregunta si necesitas tomar una decisión de arquitectura que aún no está registrada en `memory-bank/techContext.md`.
3. Para y pide confirmación explícita antes de modificar cualquier archivo o carpeta protegidos.