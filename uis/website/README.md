# Website público de TrackFlow

Landing page de TrackFlow (hito 1). Requisitos en [docs/context/web-hito-1.md](../../docs/context/web-hito-1.md).

## Tecnología

- HTML5 semántico.
- Tailwind CSS v4 por CDN (`@tailwindcss/browser@4`).
- Sin JavaScript propio en la landing. `validation.js` se añadirá solo para el formulario.

## Archivos

| Archivo            | Estado                                         |
| ------------------ | ---------------------------------------------- |
| `index.html`       | Landing page (hecha)                           |
| `application.html` | Formulario de solicitud de información (pendiente) |
| `validation.js`    | Validación del formulario (pendiente)          |
| `styles.css`       | Solo si Tailwind por CDN no basta (pendiente)  |

## Ejecutar en local

Desde la raíz del repositorio:

```bash
npx http-server uis/website -p 3000 -a 0.0.0.0
```

Abre `http://localhost:3000`.

> El botón "Solicitar información" enlaza a `application.html`, que aún no existe.
