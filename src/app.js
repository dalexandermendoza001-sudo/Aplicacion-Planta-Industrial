import { config } from './config.js';

// ══════════════ RENDERIZAR EMPRESA ══════════════
document.getElementById('logo-inicial').textContent = config.empresa.inicial;
document.getElementById('logo-nombre').textContent = config.empresa.nombre;
document.getElementById('footer-empresa').textContent = config.empresa.nombre;
document.getElementById('footer-año').textContent = new Date().getFullYear();
document.title = `${config.empresa.nombre} · Soluciones Industriales`;

// ══════════════ RENDERIZAR MAPA ══════════════
const mapaContenedor = document.getElementById('mapa-contenedor');
const mapaImagen = document.getElementById('mapa-imagen');
mapaImagen.src = config.mapa.imagen;

config.mapa.areas.forEach(area => {
  const btn = document.createElement('button');
  btn.className = 'marcador';
  btn.style.top = area.posicion.top;
  btn.style.left = area.posicion.left;
  btn.style.backgroundColor = area.color;
  btn.dataset.id = area.id;
  btn.setAttribute('aria-label', `Ver información de ${area.nombre}`);
  btn.innerHTML = `
    ${area.id}
    <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white 
                 px-1 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 hover:opacity-100 
                 transition pointer-events-none">
      ${area.nombre}
    </span>
  `;
  btn.addEventListener('click', () => abrirPanel(area));
  mapaContenedor.appendChild(btn);
});

// ══════════════ PANEL DE ÁREA ══════════════
const panelOverlay = document.getElementById('panel-overlay');
const panelTitulo = document.getElementById('panel-titulo');
const panelDescripcion = document.getElementById('panel-descripcion');
const panelSoluciones = document.getElementById('panel-soluciones');
const panelPreguntas = document.getElementById('panel-preguntas');
const panelCta = document.getElementById('panel-cta');
const cerrarPanel = document.getElementById('cerrar-panel');

function abrirPanel(area) {
  panelTitulo.textContent = area.nombre;
  panelDescripcion.textContent = area.descripcion;
  
  panelSoluciones.innerHTML = area.soluciones
    .map(s => `<li class="flex items-start gap-2 text-slate-700">
      <span class="text-brand-500 mt-1">✓</span><span>${s}</span>
    </li>`).join('');
  
  panelPreguntas.innerHTML = area.preguntas
    .map(p => `<li class="flex items-start gap-2 text-slate-600 text-sm">
      <span class="text-slate-400 mt-1">?</span><span>${p}</span>
    </li>`).join('');
  
 panelCta.onclick = () => {
  cerrarPanelFn();

  document.getElementById('form-area').value = area.id;

  mostrarVista('contacto');
};
  
  panelOverlay.classList.remove('hidden');
  panelOverlay.classList.add('flex');
}

function cerrarPanelFn() {
  panelOverlay.classList.add('hidden');
  panelOverlay.classList.remove('flex');
}

cerrarPanel.addEventListener('click', cerrarPanelFn);
panelOverlay.addEventListener('click', e => {
  if (e.target === panelOverlay) cerrarPanelFn();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarPanelFn();
});

// ══════════════ SELECT DE ÁREAS EN FORMULARIO ══════════════
const formArea = document.getElementById('form-area');
config.mapa.areas.forEach(area => {
  const opt = document.createElement('option');
  opt.value = area.id;
  opt.textContent = area.nombre;
  formArea.appendChild(opt);
});

// ══════════════ CASOS ══════════════
const casosGrid = document.getElementById('casos-grid');
casosGrid.innerHTML = config.casos.map(c => `
  <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
    <div class="h-48 bg-slate-200 overflow-hidden">
      <img src="${c.imagen}" alt="${c.titulo}" 
           class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
    </div>
    <div class="p-6">
      <span class="text-xs font-semibold text-brand-500 uppercase tracking-wider">${c.area}</span>
      <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2">${c.titulo}</h3>
      <p class="text-sm text-slate-600 mb-4">${c.descripcion}</p>
      <span class="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
        ${c.resultado}
      </span>
    </div>
  </article>
`).join('');

// ══════════════ TIMELINE PROCESO ══════════════
const timeline = document.getElementById('timeline');
timeline.innerHTML = config.proceso.map((p, i) => `
  <li class="ml-8 relative">
    <span class="absolute -left-12 top-0 w-8 h-8 rounded-full bg-brand-500 text-white 
                 flex items-center justify-center text-sm font-bold border-4 border-white shadow-md">
      ${i + 1}
    </span>
    <h3 class="text-lg font-bold text-slate-900 mb-1">${p.titulo}</h3>
    <p class="text-slate-600">${p.descripcion}</p>
  </li>
`).join('');

// ══════════════ ASESOR ══════════════
document.getElementById('asesor-foto').src = config.asesor.foto;
document.getElementById('asesor-nombre').textContent = config.asesor.nombre;
document.getElementById('asesor-cargo').textContent = config.asesor.cargo;
document.getElementById('asesor-whatsapp').href = 
  `https://wa.me/${config.asesor.whatsapp}?text=${encodeURIComponent(config.asesor.mensajeWhatsapp)}`;

// ══════════════ FORMULARIO ══════════════
const formulario = document.getElementById('formulario');
const formMensaje = document.getElementById('form-mensaje');

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(formulario);
  const datos = Object.fromEntries(formData);
  
  // Si hay webhook configurado, enviar
  if (config.crm.webhook) {
    try {
      await fetch(config.crm.webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
      });
    } catch (err) {
      console.error('Error enviando:', err);
    }
  } else {
    console.log('Datos del formulario:', datos);
  }
  
  // Mostrar mensaje de gracias
  formMensaje.textContent = '✓ ¡Gracias! Un ingeniero te contactará en menos de 24 horas.';
  formMensaje.className = 'text-center text-sm text-green-600 font-medium mt-4';
  formulario.reset();
  
  setTimeout(() => {
    formMensaje.classList.add('hidden');
  }, 6000);
});

// ══════════════ NAVEGACIÓN ENTRE VISTAS ══════════════

const vistas = {
  planta: document.getElementById('inicio'),
  casos: document.getElementById('casos'),
  proceso: document.getElementById('proceso'),
  asesor: document.getElementById('asesor'),
  contacto: document.getElementById('contacto')
};

function mostrarVista(nombreVista) {
  const vistaSeleccionada = vistas[nombreVista];

  if (!vistaSeleccionada) {
    console.warn(`La vista "${nombreVista}" no existe.`);
    return;
  }

  // Mostrar únicamente la vista seleccionada.
  Object.entries(vistas).forEach(([nombre, elemento]) => {
    elemento.hidden = nombre !== nombreVista;
  });

  // Actualizar el estado visual de los enlaces.
  document.querySelectorAll('nav [data-vista]').forEach(enlace => {
    const activo = enlace.dataset.vista === nombreVista;

    enlace.setAttribute('aria-current', activo ? 'page' : 'false');

    // Enlaces de escritorio.
    if (enlace.classList.contains('text-slate-600')) {
      enlace.classList.toggle('text-brand-500', activo);
      enlace.classList.toggle('text-slate-600', !activo);
    }

    // Enlaces de la navegación móvil.
    if (
      enlace.classList.contains('text-slate-500') ||
      enlace.classList.contains('text-brand-500')
    ) {
      enlace.classList.toggle('text-brand-500', activo);
      enlace.classList.toggle('text-slate-500', !activo);
    }

    // Diferenciar la etiqueta seleccionada en el móvil.
    const etiqueta = enlace.querySelector('span');

    if (etiqueta) {
      etiqueta.classList.toggle('font-semibold', activo);
      etiqueta.classList.toggle('font-medium', !activo);
    }
  });

  // Volver al inicio del contenido.
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
}

// ══════════════ EVENTOS DE NAVEGACIÓN ══════════════

document.querySelectorAll('[data-vista]').forEach(enlace => {
  enlace.addEventListener('click', evento => {
    evento.preventDefault();

    const nombreVista = enlace.dataset.vista;
    mostrarVista(nombreVista);
  });
});
// ══════════════ VISTA INICIAL ══════════════

mostrarVista('planta');






// ══════════════ FOOTER ══════════════
document.getElementById('footer-contenido').innerHTML = `
  <div>
    <h4 class="font-bold text-white mb-4">${config.empresa.nombre}</h4>
    <p class="text-sm text-slate-400">${config.empresa.email}</p>
    <p class="text-sm text-slate-400">${config.empresa.telefono}</p>
  </div>
  <div>
    <h4 class="font-bold text-white mb-4">Ubicaciones</h4>
    ${config.empresa.direcciones.map(d => 
      `<p class="text-sm text-slate-400 mb-1"><strong class="text-slate-300">${d.ciudad}:</strong> ${d.direccion}</p>`
    ).join('')}
  </div>
  <div>
    <h4 class="font-bold text-white mb-4">Navegación</h4>
    <a href="#areas" class="block text-sm text-slate-400 hover:text-white transition mb-1">Áreas</a>
    <a href="#casos" class="block text-sm text-slate-400 hover:text-white transition mb-1">Casos</a>
    <a href="#contacto" class="block text-sm text-slate-400 hover:text-white transition">Contacto</a>
  </div>
`;