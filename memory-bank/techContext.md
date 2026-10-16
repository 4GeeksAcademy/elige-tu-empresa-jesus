# Contexto técnico

## Cómo interpretar este documento

Se distingue entre archivos existentes, orientación de la plantilla y necesidades futuras. Las fuentes se enlazan en cada apartado. No confundir los sistemas actuales de la empresa descritos en [CONTEXT.md](../CONTEXT.md) con software implementado en este repositorio.

## Qué hay ahora en el repositorio

- Monorepo de inicio del programa AI Engineering, organizado por responsabilidad. Predominan las guías y plantillas; no hay aplicaciones de negocio implementadas. Fuente: [README.es.md, propósito y estado actual](../README.es.md), contrastado con los archivos actuales de las carpetas.
- Interfaces previstas: web pública y backoffice, aún sin aplicaciones implementadas. React + Vite + TypeScript está aprobado para ambas; la decisión se registra en la sección «Decisiones de arquitectura» de este archivo. Fuente del papel de las interfaces: [uis/README.es.md](../uis/README.es.md), contrastado con el contenido actual de la carpeta.
- Backend previsto: una API FastAPI centralizada, con módulos por dominio y workers separados solo cuando sean necesarios. Es orientación de la plantilla, no una API existente ni una nueva decisión tomada por este banco. Fuentes: [README.es.md, services](../README.es.md) y [services/README.es.md](../services/README.es.md).
- Paquete privado `@repo/shared-types`, versión `0.0.1`, sin scripts ni dependencias declaradas. Incluye tipos TypeScript genéricos `Id` y `BaseEntity`, no modelos de TrackFlow. Fuentes: [packages/shared/package.json](../packages/shared/package.json) y [packages/shared/types/index.ts](../packages/shared/types/index.ts).
- Hay una inconsistencia en ese paquete: los campos `main` y `types` apuntan a `index.ts`, pero el archivo existente está en `types/index.ts`. No se corrige en esta tarea. Fuentes: [packages/shared/package.json](../packages/shared/package.json) y [packages/shared/types/index.ts](../packages/shared/types/index.ts).
- La plantilla de agente tiene un archivo Python vacío y guías para pruebas; no contiene un agente funcional ni pruebas ejecutables. Fuentes: [agents/_template/agent.py](../agents/_template/agent.py), [agents/_template/README.es.md](../agents/_template/README.es.md) y [agents/_template/tests/README.es.md](../agents/_template/tests/README.es.md).
- Existe un ejemplo Python de limpieza con pandas: lee `data.csv`, elimina columnas totalmente nulas, normaliza nombres y elimina duplicados. Requiere pandas y un CSV que no se suministran como aplicación configurada. Fuente: [skills/data-analysis/scripts/pandas_clean.py](../skills/data-analysis/scripts/pandas_clean.py).
- Hay una plantilla de skill, recursos de análisis y carpetas preparadas para revisión e investigación; esto no equivale a un catálogo completo de skills operativas. Fuentes: [skills/README.es.md](../skills/README.es.md), [skills/_template/SKILL.md](../skills/_template/SKILL.md) y [skills/data-analysis/resources/common_metrics.md](../skills/data-analysis/resources/common_metrics.md), contrastadas con las carpetas actuales.
- No hay runner de workspace en raíz. La inspección actual tampoco encuentra `pyproject.toml`, `uv.lock` ni `docker-compose.yml`: no asumir que el entorno de aplicaciones esté configurado. Fuente documental: [README.es.md, estado actual y archivos de raíz](../README.es.md), contrastada con el inventario actual; el comando que requiere proyecto Python está en [post-create.sh](../.devcontainer/post-create.sh).

## Stack y entorno declarados

| Elemento | Qué declara el repositorio | Fuente |
| --- | --- | --- |
| Contenedor de desarrollo | Imagen `mcr.microsoft.com/devcontainers/universal:2`, feature SSH y usuario remoto `codespace`; no fija las versiones de Python o Node | [devcontainer.json](../.devcontainer/devcontainer.json) |
| Python | Intérprete configurado en `/usr/local/python/current/bin/python`; el setup actualiza pip e instala uv, y ejecuta `uv sync` | [devcontainer.json](../.devcontainer/devcontainer.json), [post-create.sh](../.devcontainer/post-create.sh) |
| JavaScript / TypeScript | El setup intenta habilitar Corepack y activar `pnpm@latest`; ambas operaciones pueden fallar sin detener el script. No hay versión de pnpm fijada | [post-create.sh](../.devcontainer/post-create.sh) |
| Editor | Extensiones para Python, Pylance, Jupyter, Docker, Prettier, ESLint, Error Lens, GitLens y 4Geeks; formato al guardar. Instalar una extensión no configura sus reglas | [devcontainer.json](../.devcontainer/devcontainer.json) |
| Docker | Monta el socket del host y configura un cambio de permisos al iniciar; no define un despliegue de aplicaciones | [devcontainer.json](../.devcontainer/devcontainer.json) |
| Puertos | Reenvía `3000`, `8000` y `5678`; esto no prueba que existan servicios escuchando ni impone una tecnología de frontend | [devcontainer.json](../.devcontainer/devcontainer.json) |
| Automatizaciones y conectores | Las guías contemplan n8n u otras herramientas y servidores MCP, sin implementaciones actuales | [workflows/README.es.md](../workflows/README.es.md), [mcps/README.es.md](../mcps/README.es.md) |

El setup ejecuta `uv sync` con `set -euo pipefail`, pero falta el manifiesto de proyecto Python mencionado arriba. Por ello su preparación de dependencias está incompleta; no se ha vuelto a ejecutar el setup para este trabajo. Fuente: [post-create.sh](../.devcontainer/post-create.sh), contrastada con el inventario actual.

## Restricciones y convenciones existentes

- Respetar la separación: interfaces en `uis/`, APIs en `services/`, datos en `data/`, agentes en `agents/`, automatización en `workflows/`. No acumular implementaciones en raíz. Fuente: [README.es.md, guía de carpetas](../README.es.md).
- Crear cada aplicación, servicio, agente o pipeline en su ubicación correspondiente y documentar objetivo, tecnología y ejecución con su README. Fuentes: [README.es.md](../README.es.md), [uis/README.es.md](../uis/README.es.md), [services/README.es.md](../services/README.es.md) y [data/pipelines/README.es.md](../data/pipelines/README.es.md).
- La orientación de backend es empezar centralizado y evitar microservicios prematuros. Fuente: [README.es.md, services](../README.es.md).
- Usar `packages/` para código empaquetado reutilizable y `shared/` para esquemas, plantillas y recursos no empaquetados. Fuentes: [packages/README.es.md](../packages/README.es.md) y [shared/README.es.md](../shared/README.es.md).
- Documentar procedencia y privacidad de los datos crudos; evitar datos sensibles en evaluación y usar datos sintéticos o anonimizados cuando corresponda. Documentar esquemas y validación de las salidas. Fuentes: [data/raw/README.es.md](../data/raw/README.es.md), [data/eval/README.es.md](../data/eval/README.es.md) y [data/process/README.es.md](../data/process/README.es.md).
- Documentar herramientas de agentes, permisos y límites; definir pruebas y criterios de aceptación. Fuentes: [agents/tools/README.es.md](../agents/tools/README.es.md) y [agents/_template/tests/README.es.md](../agents/_template/tests/README.es.md).
- Mantener arquitectura transversal en `docs/`, infraestructura en `infra/` y la futura orquestación local `docker-compose.yml` en raíz. Fuentes: [docs/README.es.md](../docs/README.es.md), [infra/README.es.md](../infra/README.es.md) y [README.es.md](../README.es.md).

## Decisiones de arquitectura

### Frontend aprobado

- **Decisión:** usar React + Vite + TypeScript tanto en `uis/website` como en `uis/backoffice`.
- **Origen:** aprobación explícita del usuario el 13 de octubre de 2026: «Usemos react + vite + typescript para ambas como recomiendas». Este archivo registra la decisión; no procede de la plantilla original.
- **Motivo:** mantener una base tecnológica común y facilitar la reutilización de componentes y tipos. El repo ya incluye tipos TypeScript de ejemplo en [packages/shared/types/index.ts](../packages/shared/types/index.ts).
- **Estado:** aprobado, pendiente de implementación. No se han creado las aplicaciones ni instalado dependencias. El papel de ambas interfaces está descrito en [uis/README.es.md](../uis/README.es.md).

### Decisiones pendientes

**PENDIENTE:** versiones de las herramientas, configuración de las aplicaciones, base de datos, proveedor cloud, autenticación, modelo de IA y despliegue. La aprobación del frontend no decide estos aspectos.