// js/config.js
export const config = {
  // ─── Datos de la empresa ───
  empresa: {
    nombre: "Nombre Empresa",
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
    imagen: "img/planta.png",
    areas: [
      {
        id: 1,
        nombre: "Recepción de materia prima",
        posicion: { top: "18%", left: "12%" },
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
        nombre: "Almacenamiento",
        posicion: { top: "25%", left: "28%" },
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
        posicion: { top: "35%", left: "45%" },
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
        nombre: "Control y Calidad",
        posicion: { top: "30%", left: "62%" },
        color: "#f4c542",
        descripcion: "Verificación de que el producto cumple especificaciones.",
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
        id: 5,
        nombre: "Empacado",
        posicion: { top: "60%", left: "35%" },
        color: "#b8a5d1",
        descripcion: "Empaque final y preparación para distribución.",
        soluciones: [
          "Automatización de líneas de empaque",
          "Etiquetado automático",
          "Detección de defectos en línea"
        ],
        preguntas: [
          "¿El empaque es manual o automatizado?",
          "¿Cuál es tu velocidad actual de empaque?"
        ]
      },
      {
        id: 6,
        nombre: "Logística / Despacho",
        posicion: { top: "70%", left: "60%" },
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
        id: 7,
        nombre: "Utilities / Servicios",
        posicion: { top: "80%", left: "20%" },
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
    nombre: "Ing. Juan Pérez",
    cargo: "Especialista en Automatización Industrial",
    foto: "img/asesor.jpg",
    whatsapp: "593999999999",
    mensajeWhatsapp: "Hola, vengo de la web y quiero asesoría técnica."
  },

  // ─── Casos similares ───
  casos: [
    {
      titulo: "Automatización de línea de empaque",
      area: "Empacado",
      imagen: "img/casos/caso-1.jpg",
      descripcion: "Reducción del 40% en tiempo de empaque mediante PLC y visión artificial.",
      resultado: "40% más rápido"
    },
    {
      titulo: "Control de calidad en línea",
      area: "Control y Calidad",
      imagen: "img/casos/caso-2.jpg",
      descripcion: "Detección automática de defectos con cámaras de alta velocidad.",
      resultado: "99.5% precisión"
    },
    {
      titulo: "Monitoreo de variables críticas",
      area: "Producción",
      imagen: "img/casos/caso-3.jpg",
      descripcion: "Sistema SCADA para monitoreo en tiempo real de 150 variables.",
      resultado: "24/7 monitoreo"
    }
  ],

  // ─── Integración CRM / IA ───
  crm: {
    endpoint: "https://tu-agente-ia.com/api/lead", // URL de tu agente IA
    // o si usas un servicio tipo Formspree, Formspark, etc.
  }
};