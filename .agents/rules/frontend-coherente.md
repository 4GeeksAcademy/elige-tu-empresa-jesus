- descripción: Mantener las interfaces en el stack aprobado, separadas del backend y verificadas.
- alcance: por patrón de archivo
- archivos: uis/**

## Qué pide la regla

1. Usa React, Vite y TypeScript para las aplicaciones uis/website y uis/backoffice, siguiendo la decisión aprobada en el banco de memoria.
2. Mantén la web pública y el backoffice en sus ubicaciones respectivas y sigue el README de la aplicación que estés modificando.
3. Consume las APIs desde la interfaz, pero coloca las integraciones con transportistas, las credenciales privadas y la lógica de backend en services/. No incluyas secretos en código ni en variables que se publiquen en el navegador.
4. Ejecuta desde la carpeta de la aplicación los comandos de comprobación pertinentes definidos en su package.json. Informa de los resultados y, si faltan comandos o no puedes ejecutarlos, indica qué queda sin verificar.

## Por qué existe

[techContext.md](../../memory-bank/techContext.md) registra React, Vite y TypeScript como stack aprobado para ambas interfaces, todavía pendientes de implementación. [uis/README.es.md](../../uis/README.es.md) distingue la web pública del backoffice y [AGENTS.md](../../AGENTS.md) sitúa las APIs en services/ y exige comprobar las aplicaciones antes de preparar un commit.

[CONTEXT.md](../../CONTEXT.md) contempla integrar el seguimiento de varios transportistas. Sin esta regla, se podría crear el backoffice con un stack diferente o exponer una credencial de transportista en el código descargado por el navegador.

## Cómo comprobar que se cumple

1. Revisa la ubicación, las dependencias y la configuración de la aplicación para confirmar el uso de React, Vite y TypeScript.
2. Revisa los cambios del frontend para comprobar que consumen APIs sin contener credenciales privadas ni implementar integraciones de backend.
3. Contrasta los comandos ejecutados con los scripts de package.json y confirma que terminaron sin errores. Si no hay comprobaciones disponibles, registra esa limitación en la respuesta al desarrollador.