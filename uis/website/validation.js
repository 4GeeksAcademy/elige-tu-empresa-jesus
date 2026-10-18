const form = document.getElementById("application-form");
const summary = document.getElementById("resumen-errores");
const success = document.getElementById("exito");
const volumeWarning = document.getElementById("aviso-volumen");
const counter = document.getElementById("comentarios-contador");

const MAX_COMMENTS = 500;
const LOW_VOLUME_WARNING =
  "Para volúmenes menores a 100 envíos mensuales, nuestros servicios podrían no ser la solución más eficiente. ¿Seguro que quieres continuar?";

const isGroup = (name) => name === "servicios" || name === "tiene_3pl";

const validators = {
  nombre_empresa: (v) =>
    v.trim().length >= 2 ? "" : "El nombre de la empresa debe tener al menos 2 caracteres",
  persona_contacto: (v) =>
    v.trim().split(/\s+/).filter(Boolean).length >= 2 ? "" : "Ingresa nombre y apellido del contacto",
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
      ? ""
      : "Ingresa un email corporativo válido (ejemplo: nombre@empresa.com)",
  telefono: (v) => {
    const value = v.trim();
    const digits = value.replace(/\D/g, "").length;
    const ok = /^\+\d{1,3}[\s-]?\d[\d\s-]*$/.test(value) && digits >= 8 && digits <= 15;
    return ok ? "" : "El teléfono debe incluir código de país (ejemplo: +1 213 555 0147)";
  },
  sitio_web: (v) => {
    const value = v.trim();
    if (!value) return "";
    try {
      const url = new URL(value);
      const ok = ["http:", "https:"].includes(url.protocol) && url.hostname.includes(".");
      return ok ? "" : "Si incluyes sitio web, debe ser una URL válida";
    } catch {
      return "Si incluyes sitio web, debe ser una URL válida";
    }
  },
  pais: (v) => (v ? "" : "Selecciona el país de operación principal"),
  tipo_producto: (v) => (v ? "" : "Selecciona el tipo de producto que manejas"),
  volumen_mensual: (v) => (v ? "" : "Selecciona el volumen mensual estimado"),
  servicios: () =>
    form.querySelector('input[name="servicios"]:checked') ? "" : "Selecciona al menos un servicio de interés",
  tiene_3pl: () =>
    form.querySelector('input[name="tiene_3pl"]:checked')
      ? ""
      : "Indica si actualmente trabajas con otro proveedor logístico",
  comentarios: (v) => {
    const remaining = MAX_COMMENTS - v.length;
    return remaining >= 0 ? "" : `Los comentarios no pueden exceder 500 caracteres (quedan ${remaining})`;
  },
  acepta_privacidad: () =>
    form.elements.acepta_privacidad.checked ? "" : "Debes aceptar la política de privacidad para continuar",
};

const touched = new Set();

function swapClasses(node, remove, add) {
  node.classList.remove(...remove);
  node.classList.add(...add);
}

function setError(name, message) {
  const errorNode = document.getElementById(`${name}-error`);
  const container = isGroup(name) ? document.getElementById(name) : form.elements[name];

  errorNode.replaceChildren();
  if (message) {
    const icon = document.createElement("span");
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "⚠ ";
    errorNode.append(icon, message);
  }
  errorNode.hidden = !message;

  if (isGroup(name)) {
    if (message) swapClasses(container, ["ring-slate-200", "ring-1"], ["ring-red-700", "ring-2"]);
    else swapClasses(container, ["ring-red-700", "ring-2"], ["ring-slate-200", "ring-1"]);
  } else if (name === "acepta_privacidad") {
    container.setAttribute("aria-invalid", message ? "true" : "false");
  } else {
    container.setAttribute("aria-invalid", message ? "true" : "false");
    if (message) swapClasses(container, ["border-slate-500"], ["border-red-700", "bg-red-50"]);
    else swapClasses(container, ["border-red-700", "bg-red-50"], ["border-slate-500"]);
  }
}

function validateField(name) {
  const message = validators[name](isGroup(name) ? "" : form.elements[name].value);
  setError(name, message);
  return message;
}

function updateCounter() {
  const remaining = MAX_COMMENTS - form.elements.comentarios.value.length;
  counter.textContent =
    remaining >= 0
      ? `${remaining} caracteres restantes`
      : `Te has pasado por ${-remaining} caracteres (máximo ${MAX_COMMENTS})`;
  counter.classList.toggle("text-red-800", remaining < 0);
  counter.classList.toggle("font-medium", remaining < 0);
  counter.classList.toggle("text-slate-700", remaining >= 0);
}

function updateVolumeWarning() {
  const lowVolume = form.elements.volumen_mensual.value === "0-100";
  const hasProduct = form.elements.tipo_producto.value !== "";
  volumeWarning.textContent = lowVolume && hasProduct ? LOW_VOLUME_WARNING : "";
}

function fieldKey(target) {
  if (target.name === "servicios" || target.name === "tiene_3pl") return target.name;
  return validators[target.name] ? target.name : null;
}

function onUserEdit(event) {
  const key = fieldKey(event.target);
  if (!key) return;

  summary.textContent = "";
  touched.add(key);
  validateField(key);

  if (key === "comentarios") updateCounter();
  if (key === "volumen_mensual" || key === "tipo_producto") updateVolumeWarning();
}

form.addEventListener("input", onUserEdit);
form.addEventListener("change", onUserEdit);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const invalid = Object.keys(validators).filter((name) => {
    touched.add(name);
    return validateField(name) !== "";
  });

  if (invalid.length > 0) {
    summary.textContent =
      invalid.length === 1
        ? "Hay 1 error en el formulario. Revisa el campo marcado."
        : `Hay ${invalid.length} errores en el formulario. Revisa los campos marcados.`;
    const first = invalid[0];
    const target = isGroup(first) ? form.querySelector(`#${first} input`) : form.elements[first];
    target.focus();
    return;
  }

  summary.textContent = "";
  form.reset();
  form.hidden = true;
  success.hidden = false;
  success.focus();
  success.scrollIntoView({ behavior: "smooth", block: "start" });
});

form.addEventListener("reset", () => {
  touched.clear();
  summary.textContent = "";
  Object.keys(validators).forEach((name) => setError(name, ""));
  // El navegador restaura los valores después del evento reset.
  setTimeout(() => {
    updateCounter();
    updateVolumeWarning();
    if (!form.hidden) form.elements.nombre_empresa.focus();
  }, 0);
});

updateCounter();
