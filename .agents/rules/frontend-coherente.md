- descripción: Mantener las interfaces en el stack aprobado, separadas del backend y verificadas.
- alcance: por patrón de archivo
- archivos: uis/**

## Qué pide la regla

1. Usa HTML + Tailwind CSS v4 (cargado por CDN) + Javascript (exclusivamente para validación del formulario en `validation.js`) para `uis/website`. Para `uis/backoffice` usa el mismo stack HTML + Tailwind CSS v4 por CDN, sin `validation.js` (la validación del backoffice se definirá cuando se implemente). La decisión aprobada está en el banco de memoria.
2. Mantén la web pública y el backoffice en sus ubicaciones respectivas y sigue el README de la aplicación que estés modificando.
3. Consume las APIs desde la interfaz, pero coloca las integraciones con transportistas, las credenciales privadas y la lógica de backend en services/. No incluyas secretos en código ni en variables que se publiquen en el navegador.
4. Sirve la aplicación con `npx http-server uis/website -p 3000 -a 0.0.0.0` (o el puerto correspondiente para backoffice, pendiente de definir) para verificar que el sitio se visualiza correctamente. Comprueba que no hay errores de consola, que el Schema.org markup está presente en la landing page, y que la validación del formulario funciona. No hay package.json en este stack; la verificación es visual y funcional.

## Por qué existe

[techContext.md](../../memory-bank/techContext.md) registra HTML + Tailwind CSS v4 por CDN + Javascript (solo validación en `validation.js`) como stack aprobado para `uis/website`, y el mismo stack (sin `validation.js`) para `uis/backoffice`, según los requisitos del proyecto definidos en [docs/context/web-hito-1.md](../../docs/context/web-hito-1.md). La especificación del formulario y sus validaciones se detallan en ese mismo documento. [uis/README.es.md](../../uis/README.es.md) distingue la web pública del backoffice y [AGENTS.md](../../AGENTS.md) sitúa las APIs en services/ y exige comprobar las aplicaciones antes de preparar un commit.

[CONTEXT.md](../../CONTEXT.md) contempla integrar el seguimiento de varios transportistas. Sin esta regla, se podría crear el backoffice con un stack diferente o exponer una credencial de transportista en el código descargado por el navegador.

## Cómo comprobar que se cumple

1. Revisa que los archivos son HTML plano con Tailwind CSS v4 cargado por CDN, que la validación JS está en `validation.js` (solo en `uis/website`), y que no hay dependencias npm ni toolchain de framework.
2. Revisa los cambios del frontend para comprobar que consumen APIs sin contener credenciales privadas ni implementar integraciones de backend.
3. Ejecuta `npx http-server uis/website -p 3000 -a 0.0.0.0` y verifica que el sitio se visualiza correctamente, que no hay errores de consola, que el Schema.org markup está presente y que la validación del formulario funciona. Para backoffice, el comando está pendiente de definir. Si no puedes ejecutar las comprobaciones, registra esa limitación en la respuesta al desarrollador.