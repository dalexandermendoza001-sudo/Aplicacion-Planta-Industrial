// js/config.js
export const config = {
  // ─── Datos de la empresa ───
  empresa: {
    nombre: "Empresa",
    eslogan: "Automatización e instrumentación industrial",
    telefono: "+593 99 999 9999",
    email: "contacto@empresa.com",
    whatsapp: "593999999999", // sin +
    direcciones: [
      { ciudad: "Quito", direccion: "Av. Ejemplo 123" },
      { ciudad: "Guayaquil", direccion: "Av. Ejemplo 456" }
    ]
  },

  // ─── Mapa de áreas ───
  mapa: {
    imagen: "img/planta.webp",
    areas: [
      {
        id: 1,
        nombre: "Bodegas",
        posicion: { top: "38%", left: "60%" },
        color: "#6b9bd1",
        descripcion: "Registro, pesaje y verificación de materiales que ingresan a la planta.",
        soluciones: [
          "Automatización del pesaje y registro",
          "Sistemas de identificación por código de barras/RFID",
          "Integración con sistemas de inventario"
        ],
        preguntas: [
          "¿Cómo registras actualmente el ingreso de materiales?",
          "¿Cuánto tiempo toma el proceso de recepción?"
        ]
      },
      {
        id: 2,
        nombre: "Mantenimiento",
        posicion: { top: "12%", left: "37%" },
        color: "#7dc47d",
        descripcion: "Gestión y control de inventarios de materia prima y producto terminado.",
        soluciones: [
          "Sistemas de gestión de almacén (WMS)",
          "Control de temperatura y humedad",
          "Automatización de picking"
        ],
        preguntas: [
          "¿Cómo controlas el inventario actualmente?",
          "¿Tienes problemas de stock o vencimientos?"
        ]
      },
      {
        id: 3,
        nombre: "Producción",
        posicion: { top: "24%", left: "49%" },
        color: "#f4a896",
        descripcion: "Transformación de materia prima en producto terminado.",
        soluciones: [
          "Control de procesos (PLC, DCS, SCADA)",
          "Monitoreo de variables críticas",
          "Optimización de ciclos productivos"
        ],
        preguntas: [
          "¿Qué variables del proceso monitoreas hoy?",
          "¿Tienes problemas de variabilidad en la calidad?"
        ]
      },
      {
        id: 4,
        nombre: "Administracion",
        posicion: { top: "38%", left: "25%" },
        color: "#f4c542",
        descripcion: "Administración.",
        soluciones: [
          "Sistemas de visión artificial",
          "Control estadístico de procesos (SPC)",
          "Registro automatizado de no conformidades"
        ],
        preguntas: [
          "¿Cómo verificas la calidad actualmente?",
          "¿Cuántos defectos detectas por lote?"
        ]
      },
     
      {
        id: 6,
        nombre: "Logística / Despacho",
        posicion: { top: "63%", left: "48%" },
        color: "#7ec8c8",
        descripcion: "Preparación de pedidos y despacho de producto terminado.",
        soluciones: [
          "Automatización de carga y paletizado",
          "Trazabilidad de despacho",
          "Integración con transporte"
        ],
        preguntas: [
          "¿Cómo preparas los pedidos actualmente?",
          "¿Tienes control de trazabilidad de despacho?"
        ]
      },
      {
        id: 5,
        nombre: "Servicios industriales",
        posicion: { top: "32%", left: "15%" },
        color: "#e89b7d",
        descripcion: "Suministro de servicios auxiliares (agua, vapor, aire, energía).",
        soluciones: [
          "Monitoreo de consumo energético",
          "Automatización de sistemas de bombeo",
          "Control de calidad de agua/vapor"
        ],
        preguntas: [
          "¿Monitoreas el consumo de servicios auxiliares?",
          "¿Tienes problemas de disponibilidad?"
        ]
      }
    ]
  },

  // ─── Asesor ───
  asesor: {
    nombre: "Ingra. Stefania Vera",
    cargo: "Especialista en Automatización Industrial",
    foto: "img/asesor.webp",
    whatsapp: "593999999999",
    mensajeWhatsapp: "Hola, vengo de la web y quiero asesoría técnica."
  },

  // ─── Casos similares ───
  casos: [
    {
      titulo: "Automatización de línea de empaque",
      area: "Empacado",
      imagen: "img/caso-3.webp",
      descripcion: "Reducción del 40% en tiempo de empaque mediante PLC y visión artificial.",
      resultado: "40% más rápido"
    },
    {
      titulo: "Control de calidad en línea",
      area: "Control y Calidad",
      imagen: "img/caso-5.webp",
      descripcion: "Detección automática de defectos con cámaras de alta velocidad.",
      resultado: "99.5% precisión"
    },
    {
      titulo: "Monitoreo de variables críticas",
      area: "Producción",
      imagen: "img/caso-2.webp",
      descripcion: "Sistema SCADA para monitoreo en tiempo real de 150 variables.",
      resultado: "24/7 monitoreo"
    }
  ],

  // ─── Cómo trabajamos ───
  proceso: [
    {
      titulo: "Diagnóstico en planta",
      descripcion: "Revisamos el proceso, las variables críticas y los puntos donde la operación puede ganar seguridad, trazabilidad o eficiencia."
    },
    {
      titulo: "Ingeniería de la solución",
      descripcion: "Definimos la instrumentación, automatización e integración necesarias para que la propuesta se adapte a tu proceso y presupuesto."
    },
    {
      titulo: "Implementación y puesta en marcha",
      descripcion: "Instalamos, configuramos y validamos la solución junto a tu equipo, procurando una transición ordenada hacia la operación."
    },
    {
      titulo: "Acompañamiento y mejora continua",
      descripcion: "Damos soporte técnico y seguimiento a los resultados para mantener el sistema confiable y detectar nuevas oportunidades de optimización."
    }
  ],

  // ─── Integración CRM / IA ───
  crm: {
    endpoint: "https://tu-agente-ia.com/api/lead", // URL de tu agente IA
    // o si usas un servicio tipo Formspree, Formspark, etc.
  }
};
