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
        ],
        vistaDetalle: "bodegas",
        imagenDetalle: "img/areaBodega.webp",
        subareas: [
          {
            id: "recepcion-descarga",
            nombre: "Recepción y descarga",
            posicion: { top: "25%", left: "16%" },
            descripcion: "Ingreso, descarga y verificación inicial de materiales recibidos.",
            problemas: ["Tiempos de descarga altos", "Material sin identificación", "Errores de recepción", "Registros manuales"],
            soluciones: ["Registro digital de recepción", "Lectores de código de barras o RFID", "Automatización de pesaje"]
          },
          {
            id: "inspeccion-registro",
            nombre: "Inspección y registro",
            posicion: { top: "25%", left: "50%" },
            descripcion: "Validación de cantidad, estado y documentación de los materiales entrantes.",
            problemas: ["Inspecciones lentas", "Documentación incompleta", "Diferencias de inventario", "Falta de trazabilidad"],
            soluciones: ["Checklists digitales", "Integración con ERP o WMS", "Trazabilidad por lote"]
          },
          {
            id: "almacenamiento",
            nombre: "Almacenamiento",
            posicion: { top: "25%", left: "84%" },
            descripcion: "Ubicación y conservación de materiales en racks, estanterías o zonas de almacenamiento.",
            problemas: ["Ubicaciones mal asignadas", "Uso ineficiente del espacio", "Daño de producto", "Falta de control ambiental"],
            soluciones: ["Gestión de ubicaciones con WMS", "Sensores de temperatura y humedad", "Identificación de racks"]
          },
          {
            id: "control-inventario",
            nombre: "Control de inventario",
            posicion: { top: "64%", left: "16%" },
            descripcion: "Seguimiento de existencias, movimientos y disponibilidad de materiales.",
            problemas: ["Inventario desactualizado", "Diferencias entre físico y sistema", "Conteos manuales", "Stock crítico no detectado"],
            soluciones: ["Inventario en tiempo real", "Conteo cíclico asistido", "Alertas de reposición"]
          },
          {
            id: "picking-preparacion",
            nombre: "Picking y preparación",
            posicion: { top: "64%", left: "84%" },
            descripcion: "Selección y preparación de materiales o pedidos para producción o despacho.",
            problemas: ["Errores de picking", "Recorridos largos", "Pedidos incompletos", "Baja productividad"],
            soluciones: ["Picking guiado", "Validación por escáner", "Optimización de rutas"]
          },
          {
            id: "empaque-consolidacion",
            nombre: "Empaque y consolidación",
            posicion: { top: "87%", left: "16%" },
            descripcion: "Agrupación, embalaje y preparación final de pedidos o materiales.",
            problemas: ["Embalaje inconsistente", "Errores de consolidación", "Daños en transporte", "Etiquetado incorrecto"],
            soluciones: ["Estaciones de empaque estandarizadas", "Verificación por código", "Impresión automática de etiquetas"]
          },
          {
            id: "despacho-carga",
            nombre: "Despacho y carga",
            posicion: { top: "87%", left: "84%" },
            descripcion: "Salida, carga y confirmación de los materiales o pedidos hacia su destino.",
            problemas: ["Despachos incompletos", "Tiempos de carga altos", "Errores de documentación", "Falta de confirmación de salida"],
            soluciones: ["Control de despacho", "Trazabilidad de carga", "Integración con transporte"]
          }
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
        ],
        vistaDetalle: "mantenimiento",
        imagenDetalle: "img/areaMantenimiento.webp",
        subareas: [
          {
            id: "planificacion-programacion",
            nombre: "Planificación y programación",
            posicion: { top: "25%", left: "16%" },
            descripcion: "Organización de actividades, recursos y tiempos para ejecutar el mantenimiento.",
            problemas: ["Órdenes de trabajo tardías", "Recursos mal asignados", "Mantenimiento reactivo", "Historial incompleto"],
            soluciones: ["Planificación con CMMS", "Programación de órdenes de trabajo", "Indicadores de cumplimiento"]
          },
          {
            id: "mantenimiento-preventivo",
            nombre: "Mantenimiento preventivo",
            posicion: { top: "25%", left: "50%" },
            descripcion: "Intervenciones programadas para reducir fallas y prolongar la vida útil de los equipos.",
            problemas: ["Rutinas incumplidas", "Frecuencias inadecuadas", "Paradas recurrentes", "Checklists en papel"],
            soluciones: ["Planes preventivos digitales", "Checklists móviles", "Alertas de tareas programadas"]
          },
          {
            id: "mantenimiento-predictivo",
            nombre: "Mantenimiento predictivo",
            posicion: { top: "25%", left: "84%" },
            descripcion: "Monitoreo de condición para anticipar fallas antes de que detengan la operación.",
            problemas: ["Fallas inesperadas", "Sin monitoreo de condición", "Datos no analizados", "Mantenimiento solo por calendario"],
            soluciones: ["Monitoreo de vibración", "Termografía", "Sensores IIoT y análisis de condición"]
          },
          {
            id: "mantenimiento-correctivo",
            nombre: "Mantenimiento correctivo",
            posicion: { top: "56%", left: "16%" },
            descripcion: "Reparación de equipos después de una falla para recuperar la operación.",
            problemas: ["Tiempos de respuesta altos", "Diagnóstico lento", "Paradas prolongadas", "Falta de historial de fallas"],
            soluciones: ["Gestión de incidencias", "Estandarización de diagnósticos", "Análisis de causa raíz"]
          },
          {
            id: "mantenimiento-mecanico",
            nombre: "Mantenimiento mecánico",
            posicion: { top: "56%", left: "84%" },
            descripcion: "Inspección, ajuste y reparación de componentes mecánicos de maquinaria.",
            problemas: ["Desgaste prematuro", "Lubricación deficiente", "Desalineación", "Fugas y vibraciones"],
            soluciones: ["Rondas de inspección", "Planes de lubricación", "Monitoreo de condición mecánica"]
          },
          {
            id: "mantenimiento-electrico-control",
            nombre: "Mantenimiento eléctrico y control",
            posicion: { top: "87%", left: "16%" },
            descripcion: "Mantenimiento de tableros, motores, sensores, PLC y sistemas de control.",
            problemas: ["Fallas eléctricas recurrentes", "Tableros obsoletos", "Sensores sin calibrar", "Alarmas sin seguimiento"],
            soluciones: ["Diagnóstico eléctrico", "Modernización de tableros", "Calibración e instrumentación"]
          },
          {
            id: "repuestos-taller",
            nombre: "Repuestos y taller",
            posicion: { top: "87%", left: "84%" },
            descripcion: "Gestión de repuestos críticos y preparación de herramientas para intervenciones de mantenimiento.",
            problemas: ["Repuestos críticos agotados", "Exceso de inventario", "Herramientas no disponibles", "Sin trazabilidad de consumo"],
            soluciones: ["Inventario de repuestos críticos", "Control de consumo", "Integración de almacén y mantenimiento"]
          }
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
        ],
        vistaDetalle: "produccion",
        imagenDetalle: "img/produccionsub.webp",
        subareas: [
          {
            id: "preparacion-dosificacion",
            nombre: "Preparación y dosificación",
            posicion: { top: "25%", left: "16%" },
            descripcion: "Preparación, pesaje y dosificación de materias primas antes del proceso.",
            problemas: ["Dosificación imprecisa", "Desperdicio de materia prima", "Registros manuales", "Falta de trazabilidad por lote"],
            soluciones: ["Sistemas de pesaje y dosificación", "Control de bombas y válvulas", "Trazabilidad de lotes"]
          },
          {
            id: "proceso-principal",
            nombre: "Proceso principal",
            posicion: { top: "17%", left: "50%" },
            descripcion: "Etapa central donde la materia prima se transforma en producto mediante equipos y parámetros de proceso.",
            problemas: ["Variación de calidad", "Paradas no planificadas", "Parámetros sin control", "Consumo energético alto"],
            soluciones: ["Automatización con PLC o DCS", "Monitoreo de variables críticas", "Optimización de ciclos"]
          },
          {
            id: "transporte-interno",
            nombre: "Línea de transporte interno",
            posicion: { top: "22%", left: "90%" },
            descripcion: "Movimiento de materiales y productos entre las estaciones de producción.",
            problemas: ["Atascos en la línea", "Producto mal posicionado", "Velocidades descoordinadas", "Falta de sensores"],
            soluciones: ["Control de bandas y motores", "Sensores de presencia y posición", "Sincronización de línea"]
          },
          {
            id: "inspeccion-calidad",
            nombre: "Inspección y control de calidad",
            posicion: { top: "79%", left: "15%" },
            descripcion: "Verificación de atributos, medidas y defectos antes de liberar el producto.",
            problemas: ["Defectos no detectados", "Inspección manual lenta", "Reprocesos", "Registros de calidad incompletos"],
            soluciones: ["Visión artificial", "Sistemas de pesaje e inspección", "Registro digital de calidad"]
          },
          {
            id: "empaque-etiquetado",
            nombre: "Empaque y etiquetado",
            posicion: { top: "79%", left: "38%" },
            descripcion: "Envasado, sellado, codificación y etiquetado del producto terminado.",
            problemas: ["Etiquetas erróneas", "Fallas de sellado", "Baja velocidad", "Cambios de formato lentos"],
            soluciones: ["Integración de impresoras y lectores", "Control automático de empaque", "Trazabilidad de producto"]
          },
          {
            id: "tableros-control",
            nombre: "Tableros y control de maquinaria",
            posicion: { top: "79%", left: "61%" },
            descripcion: "Tableros eléctricos, PLC, variadores y equipos que gobiernan la maquinaria.",
            problemas: ["Tableros obsoletos", "Alarmas sin prioridad", "Fallas eléctricas", "Control manual"],
            soluciones: ["Modernización de tableros", "PLC y variadores", "Gestión de alarmas"]
          },
          {
            id: "sala-control",
            nombre: "Sala de control y supervisión",
            posicion: { top: "79%", left: "85%" },
            descripcion: "Visualización y seguimiento de producción, alarmas e indicadores operativos.",
            problemas: ["Falta de datos en tiempo real", "Alarmas excesivas", "Indicadores dispersos", "Decisiones tardías"],
            soluciones: ["SCADA y HMI", "Historización de datos", "Tableros de indicadores"]
          }
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

const areaDespacho = config.mapa.areas.find(area => area.id === 6);

Object.assign(areaDespacho, {
  vistaDetalle: "despacho",
  imagenDetalle: "img/areaDespacho.webp",
  subareas: [
    {
      id: "recepcion-pedidos",
      nombre: "Recepción de pedidos preparados",
      posicion: { top: "24%", left: "16%" },
      descripcion: "Recepción y validación inicial de los pedidos preparados para su salida.",
      problemas: ["Pedidos incompletos", "Productos equivocados", "Demoras en la recepción", "Falta de identificación"],
      soluciones: ["Validación por escáner", "Confirmación digital de pedidos", "Trazabilidad por pedido"]
    },
    {
      id: "verificacion-consolidacion",
      nombre: "Verificación y consolidación",
      posicion: { top: "24%", left: "50%" },
      descripcion: "Comprobación final y agrupación de productos que conforman cada despacho.",
      problemas: ["Diferencias en el pedido", "Consolidación incorrecta", "Revisiones manuales lentas", "Falta de evidencia de entrega"],
      soluciones: ["Checklists digitales", "Lectores de código de barras", "Validación contra orden de despacho"]
    },
    {
      id: "embalaje-etiquetado",
      nombre: "Embalaje y etiquetado",
      posicion: { top: "24%", left: "84%" },
      descripcion: "Protección, identificación y etiquetado de los pedidos antes de la carga.",
      problemas: ["Etiquetas erróneas", "Embalaje insuficiente", "Daño en transporte", "Proceso manual lento"],
      soluciones: ["Impresión automática de etiquetas", "Estandarización de embalaje", "Verificación de peso y dimensiones"]
    },
    {
      id: "clasificacion-destino",
      nombre: "Clasificación por destino",
      posicion: { top: "58%", left: "16%" },
      descripcion: "Organización de pedidos según ruta, cliente, transportista o zona de entrega.",
      problemas: ["Pedidos enviados a ruta incorrecta", "Mezcla de destinos", "Retrasos en salida", "Clasificación manual"],
      soluciones: ["Clasificación asistida por escáner", "Gestión de rutas", "Señalización digital de zonas"]
    },
    {
      id: "estiba-zona-carga",
      nombre: "Estiba y zona de carga",
      posicion: { top: "58%", left: "84%" },
      descripcion: "Preparación y ubicación segura de los pedidos para cargar los vehículos.",
      problemas: ["Estiba inestable", "Uso ineficiente del espacio", "Daños por manipulación", "Riesgos de seguridad"],
      soluciones: ["Estándares de paletizado", "Control de peso", "Gestión visual de muelles"]
    },
    {
      id: "carga-despacho",
      nombre: "Carga y despacho",
      posicion: { top: "87%", left: "16%" },
      descripcion: "Carga física, confirmación de salida y entrega de pedidos al transporte.",
      problemas: ["Tiempos de carga altos", "Carga incompleta", "Errores de salida", "Falta de confirmación"],
      soluciones: ["Control de muelles", "Confirmación de carga por escáner", "Integración con transporte"]
    },
    {
      id: "documentacion-trazabilidad",
      nombre: "Documentación y trazabilidad",
      posicion: { top: "87%", left: "84%" },
      descripcion: "Gestión de documentos, evidencias y seguimiento del pedido hasta su entrega.",
      problemas: ["Documentos incompletos", "Sin evidencia de entrega", "Información dispersa", "Trazabilidad limitada"],
      soluciones: ["Documentos digitales", "Prueba de entrega electrónica", "Seguimiento de despacho"]
    }
  ]
});

const areaAdministracion = config.mapa.areas.find(area => area.id === 4);

Object.assign(areaAdministracion, {
  vistaDetalle: "administracion",
  imagenDetalle: "img/areaAdministracion.webp",
  subareas: [
    {
      id: "direccion-planificacion",
      nombre: "Dirección y planificación",
      posicion: { top: "25%", left: "16%" },
      descripcion: "Definición de objetivos, indicadores y planes para coordinar la operación industrial.",
      problemas: ["Objetivos poco claros", "Indicadores dispersos", "Seguimiento manual", "Decisiones tardías"],
      soluciones: ["Tableros de gestión", "Planificación con indicadores", "Reportes automatizados"]
    },
    {
      id: "finanzas-contabilidad",
      nombre: "Finanzas y contabilidad",
      posicion: { top: "25%", left: "50%" },
      descripcion: "Control de presupuestos, costos, pagos y registros financieros de la operación.",
      problemas: ["Costos sin visibilidad", "Procesos manuales", "Conciliaciones lentas", "Información desactualizada"],
      soluciones: ["Integración con ERP", "Automatización de reportes", "Control presupuestario"]
    },
    {
      id: "talento-humano",
      nombre: "Talento humano",
      posicion: { top: "25%", left: "84%" },
      descripcion: "Gestión de personal, turnos, capacitación y competencias del equipo de trabajo.",
      problemas: ["Turnos mal coordinados", "Capacitación sin seguimiento", "Registros manuales", "Información de personal dispersa"],
      soluciones: ["Gestión digital de turnos", "Control de capacitación", "Indicadores de talento"]
    },
    {
      id: "compras-proveedores",
      nombre: "Compras y proveedores",
      posicion: { top: "84%", left: "14%" },
      descripcion: "Solicitud, adquisición y seguimiento de materiales y servicios requeridos por la planta.",
      problemas: ["Órdenes de compra tardías", "Falta de evaluación de proveedores", "Compras urgentes", "Información no centralizada"],
      soluciones: ["Flujos de aprobación", "Portal de proveedores", "Seguimiento de órdenes"]
    },
    {
      id: "gestion-documental",
      nombre: "Gestión documental",
      posicion: { top: "84%", left: "37%" },
      descripcion: "Organización, control de versiones y consulta de documentos operativos y administrativos.",
      problemas: ["Documentos desactualizados", "Pérdida de información", "Versiones duplicadas", "Acceso lento"],
      soluciones: ["Repositorio documental", "Control de versiones", "Flujos de aprobación"]
    },
    {
      id: "atencion-cliente",
      nombre: "Atención al cliente",
      posicion: { top: "84%", left: "60%" },
      descripcion: "Gestión de solicitudes, reclamos y comunicación con clientes internos o externos.",
      problemas: ["Solicitudes sin seguimiento", "Respuestas tardías", "Información dispersa", "Sin indicadores de servicio"],
      soluciones: ["Sistema de tickets", "CRM integrado", "Indicadores de atención"]
    },
    {
      id: "servicios-administrativos",
      nombre: "Servicios administrativos",
      posicion: { top: "84%", left: "86%" },
      descripcion: "Soporte administrativo para facilitar la continuidad de las actividades de la empresa.",
      problemas: ["Procesos repetitivos", "Solicitudes manuales", "Falta de trazabilidad", "Tiempos de respuesta altos"],
      soluciones: ["Flujos digitales", "Automatización de solicitudes", "Tableros de servicio"]
    }
  ]
});

const areaServiciosIndustriales = config.mapa.areas.find(area => area.id === 5);

Object.assign(areaServiciosIndustriales, {
  vistaDetalle: "servicios-industriales",
  imagenDetalle: "img/serviciosIndustriales.webp",
  subareas: [
    {
      id: "energia-electrica",
      nombre: "Energía eléctrica y respaldo",
      posicion: { top: "28%", left: "16%" },
      descripcion: "Suministro, distribución y respaldo de energía eléctrica para la operación de la planta.",
      problemas: ["Cortes no planificados", "Picos de demanda", "Tableros sin monitoreo", "Respaldo insuficiente"],
      soluciones: ["Monitoreo de energía", "Gestión de demanda", "UPS y generación de respaldo"]
    },
    {
      id: "calderas-vapor",
      nombre: "Calderas, vapor y agua caliente",
      posicion: { top: "28%", left: "50%" },
      descripcion: "Generación y distribución de vapor o agua caliente para procesos industriales.",
      problemas: ["Consumo elevado de combustible", "Presión inestable", "Pérdidas de vapor", "Mantenimiento reactivo"],
      soluciones: ["Control de combustión", "Monitoreo de presión y temperatura", "Gestión de trampas de vapor"]
    },
    {
      id: "refrigeracion-agua-helada",
      nombre: "Refrigeración y agua helada",
      posicion: { top: "28%", left: "84%" },
      descripcion: "Sistemas de enfriamiento y distribución de agua helada para procesos o conservación.",
      problemas: ["Temperatura fuera de rango", "Consumo energético alto", "Fugas de refrigerante", "Capacidad insuficiente"],
      soluciones: ["Control de chillers", "Monitoreo de temperatura", "Optimización energética"]
    },
    {
      id: "aire-comprimido-gases",
      nombre: "Aire comprimido y gases",
      posicion: { top: "60%", left: "16%" },
      descripcion: "Generación, tratamiento y distribución de aire comprimido y gases de proceso.",
      problemas: ["Fugas de aire", "Presión inestable", "Humedad en la línea", "Consumo excesivo"],
      soluciones: ["Detección de fugas", "Control de compresores", "Monitoreo de presión y caudal"]
    },
    {
      id: "tratamiento-agua-proceso",
      nombre: "Tratamiento de agua de proceso",
      posicion: { top: "60%", left: "50%" },
      descripcion: "Acondicionamiento de agua para cumplir los requisitos de calidad del proceso.",
      problemas: ["Calidad de agua variable", "Dosificación química imprecisa", "Falta de registros", "Consumo alto"],
      soluciones: ["Instrumentación de calidad", "Control de dosificación", "Monitoreo de conductividad y pH"]
    },
    {
      id: "aguas-residuales",
      nombre: "Aguas residuales y efluentes",
      posicion: { top: "60%", left: "84%" },
      descripcion: "Tratamiento y control de efluentes antes de su descarga o reutilización.",
      problemas: ["Parámetros fuera de norma", "Carga contaminante variable", "Falta de trazabilidad", "Operación manual"],
      soluciones: ["Monitoreo de efluentes", "Control automático de tratamiento", "Historización de parámetros"]
    },
    {
      id: "gestion-residuos",
      nombre: "Gestión de residuos y auxiliares",
      posicion: { top: "87%", left: "50%" },
      descripcion: "Clasificación, manejo y control de residuos y consumibles auxiliares de la planta.",
      problemas: ["Segregación deficiente", "Registros incompletos", "Costos de disposición altos", "Falta de indicadores"],
      soluciones: ["Trazabilidad de residuos", "Control de recolección", "Indicadores ambientales"]
    }
  ]
});
