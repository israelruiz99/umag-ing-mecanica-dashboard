// Malla curricular Ingeniería en Mecánica - Universidad de Magallanes (UMAG)
// Contenido de estudio generado como apoyo académico por ramo.

const AREAS = {
  mate:   { label: "Matemáticas",        color: "#6C8CFF" },
  fisica: { label: "Física / Química",   color: "#3FD0C9" },
  diseno: { label: "Dibujo / Diseño",    color: "#FF9F5A" },
  mecan:  { label: "Mecánica",           color: "#FF6B6B" },
  elec:   { label: "Electricidad / Electrónica", color: "#C792EA" },
  gest:   { label: "Gestión / Mantenimiento",    color: "#FFD166" },
  mater:  { label: "Materiales / Procesos",      color: "#5AD1A6" },
  idioma: { label: "Idiomas",            color: "#7AD7F0" },
  trans:  { label: "Transversal",        color: "#A0A7B8" },
};

const SUBJECTS = [
  // ===== AÑO 1 - SEMESTRE 1 =====
  {
    id: "mate-general", name: "Matemática General", year: 1, semester: 1, area: "mate",
    summary: "Bases de álgebra, funciones y trigonometría que sustentan todo el cálculo posterior.",
    topics: [
      "Conjuntos numéricos, inecuaciones y valor absoluto",
      "Funciones: dominio, recorrido, composición e inversa",
      "Función lineal, cuadrática, exponencial y logarítmica",
      "Trigonometría: razones, identidades y ecuaciones",
      "Polinomios: factorización, división y raíces",
      "Sistemas de ecuaciones lineales (2x2 y 3x3)",
      "Geometría analítica básica: recta y circunferencia",
    ],
    tips: [
      "Domina la factorización antes de avanzar: es la base de cálculo I.",
      "Practica gráficos de funciones a mano para entender comportamiento, no solo álgebra.",
      "Memoriza identidades trigonométricas fundamentales (seno, coseno, Pitágoras trigonométrico).",
    ],
  },
  {
    id: "computacion", name: "Computación", year: 1, semester: 1, area: "trans",
    summary: "Introducción a programación y herramientas ofimáticas/computacionales para ingeniería.",
    topics: [
      "Lógica de programación: variables, condicionales, ciclos",
      "Pseudocódigo y diagramas de flujo",
      "Introducción a un lenguaje (Python/C según cátedra)",
      "Manejo de hojas de cálculo (Excel) para ingeniería",
      "Estructuras de datos básicas (arreglos)",
      "Resolución de problemas numéricos simples por algoritmo",
    ],
    tips: [
      "Practica en el computador, no solo leas teoría: la lógica se aprende programando.",
      "Aprende atajos y fórmulas de Excel, se usan en casi todos los ramos posteriores.",
    ],
  },
  {
    id: "quimica", name: "Química", year: 1, semester: 1, area: "fisica",
    summary: "Fundamentos de química general aplicados a materiales e ingeniería.",
    topics: [
      "Estructura atómica y tabla periódica",
      "Enlace químico (iónico, covalente, metálico)",
      "Estequiometría y balance de ecuaciones",
      "Soluciones, concentración y pH",
      "Termoquímica básica",
      "Oxidación-reducción y corrosión (clave para mecánica)",
    ],
    tips: [
      "Relaciona la corrosión y enlace metálico con Tecnología de los Materiales, se reutiliza más adelante.",
      "Practica balanceo de ecuaciones hasta que sea automático.",
    ],
  },
  {
    id: "orientacion-prof", name: "Orientación Profesional", year: 1, semester: 1, area: "trans",
    summary: "Introducción al perfil del ingeniero mecánico, ética y rol profesional.",
    topics: [
      "Perfil de egreso de la carrera y campo laboral",
      "Ética profesional y responsabilidad social",
      "Metodologías de estudio y gestión del tiempo",
      "Estructura de la malla curricular y especialidades",
    ],
    tips: [
      "Úsalo para mapear qué área de la mecánica te interesa (mantenimiento, diseño, procesos).",
    ],
  },
  {
    id: "taller-comunicaciones", name: "Taller de Comunicaciones", year: 1, semester: 1, area: "trans",
    summary: "Desarrollo de habilidades de comunicación oral y escrita técnica.",
    topics: [
      "Redacción de informes técnicos",
      "Comunicación oral y presentaciones",
      "Normas de citación y referencias",
      "Trabajo colaborativo y retroalimentación",
    ],
    tips: [
      "Guarda las plantillas de informe: las reutilizarás en laboratorios de toda la carrera.",
    ],
  },
  {
    id: "deportes", name: "Deportes", year: 1, semester: 1, area: "trans",
    summary: "Actividad física y formación deportiva, ramo de formación integral.",
    topics: [
      "Acondicionamiento físico general",
      "Trabajo en equipo y disciplina deportiva",
    ],
    tips: ["Asistencia y constancia suelen ser el criterio principal de evaluación."],
  },

  // ===== AÑO 1 - SEMESTRE 2 =====
  {
    id: "mate-aplicada-1", name: "Matemática Aplicada I", year: 1, semester: 2, area: "mate",
    summary: "Cálculo diferencial e integral de una variable.",
    topics: [
      "Límites y continuidad",
      "Derivadas: reglas, regla de la cadena, derivación implícita",
      "Aplicaciones de la derivada: máximos, mínimos, optimización",
      "Integral indefinida: técnicas de integración básicas",
      "Integral definida y Teorema Fundamental del Cálculo",
      "Aplicaciones: áreas, volúmenes de revolución",
    ],
    tips: [
      "La optimización (máx/mín) se usa después en diseño mecánico y resistencia de materiales.",
      "Practica integración por sustitución y por partes hasta automatizarlas.",
    ],
  },
  {
    id: "fisica", name: "Física", year: 1, semester: 2, area: "fisica",
    summary: "Mecánica clásica: cinemática, dinámica, trabajo y energía.",
    topics: [
      "Cinemática en 1D y 2D (MRU, MRUA, tiro parabólico)",
      "Leyes de Newton y diagramas de cuerpo libre",
      "Trabajo, energía y conservación de energía",
      "Momentum lineal y choques",
      "Torque, momento angular y equilibrio de cuerpo rígido",
      "Gravitación y movimiento circular",
    ],
    tips: [
      "El diagrama de cuerpo libre es la herramienta más usada en toda la carrera: domínalo aquí.",
      "Equilibrio de cuerpo rígido es la base directa de Mecánica General y Resistencia de Materiales.",
    ],
  },
  {
    id: "motores", name: "Motores", year: 1, semester: 2, area: "mecan",
    summary: "Funcionamiento, componentes y ciclos de motores de combustión interna.",
    topics: [
      "Ciclos termodinámicos Otto y Diésel (introducción)",
      "Componentes: bloque, culata, pistón, biela, cigüeñal",
      "Sistemas de distribución, lubricación y refrigeración",
      "Sistemas de alimentación e inyección",
      "Diagnóstico básico de fallas",
    ],
    tips: [
      "Aprende el ciclo de 4 tiempos de memoria, es examinado constantemente.",
      "Relaciona cada sistema con su función: evita memorizar piezas sueltas.",
    ],
  },
  {
    id: "electromecanica", name: "Electromecánica", year: 1, semester: 2, area: "elec",
    summary: "Principios eléctricos aplicados a sistemas y máquinas mecánicas.",
    topics: [
      "Circuitos eléctricos básicos: Ley de Ohm, Kirchhoff",
      "Corriente continua y alterna",
      "Motores eléctricos: principios de funcionamiento",
      "Sensores y actuadores electromecánicos",
      "Mantenimiento eléctrico básico",
    ],
    tips: [
      "Domina Ley de Ohm y Kirchhoff: son la base de Redes Máquinas Eléctricas más adelante.",
    ],
  },
  {
    id: "mant-industrial", name: "Mantenimiento Industrial", year: 1, semester: 2, area: "gest",
    summary: "Introducción a tipos y estrategias de mantenimiento en la industria.",
    topics: [
      "Tipos de mantenimiento: correctivo, preventivo, predictivo",
      "Indicadores de mantenimiento (MTBF, MTTR, disponibilidad)",
      "Órdenes de trabajo y planificación básica",
      "Seguridad en intervenciones de mantenimiento",
    ],
    tips: [
      "Este ramo es la puerta de entrada a toda la línea de Mantenimiento (sem. 3, 5, 6).",
    ],
  },

  // ===== AÑO 2 - SEMESTRE 3 =====
  {
    id: "redes-maquinas-elec", name: "Redes Máquinas Eléctricas", year: 2, semester: 3, area: "elec",
    summary: "Máquinas eléctricas (motores, transformadores) y su conexión en redes industriales.",
    topics: [
      "Transformadores: principio y relación de transformación",
      "Motores asíncronos (inducción) y síncronos",
      "Sistemas trifásicos: estrella y triángulo",
      "Arranque y protección de motores",
      "Distribución eléctrica industrial básica",
    ],
    tips: [
      "Practica cálculos trifásicos (potencia, corriente) con fórmulas siempre a mano.",
    ],
  },
  {
    id: "mecanica-fluidos", name: "Mecánica de los Fluidos", year: 2, semester: 3, area: "mecan",
    summary: "Estática y dinámica de fluidos aplicada a sistemas mecánicos.",
    topics: [
      "Propiedades de los fluidos: densidad, viscosidad, presión",
      "Hidrostática: principio de Pascal, fuerzas sobre superficies",
      "Ecuación de continuidad",
      "Ecuación de Bernoulli y aplicaciones",
      "Flujo en tuberías: pérdidas de carga (Darcy-Weisbach)",
      "Número de Reynolds: flujo laminar vs turbulento",
    ],
    tips: [
      "Bernoulli + continuidad es la base de Hidráulica y Neumática del próximo semestre.",
      "Aprende a identificar unidades (Pa, bar, mca) y convertir sin error.",
    ],
  },
  {
    id: "taller-tec-inversa", name: "Taller de Tecnología Inversa", year: 2, semester: 3, area: "mecan",
    summary: "Análisis de componentes mecánicos mediante desarme, medición y modelado inverso.",
    topics: [
      "Desarme y documentación de componentes mecánicos",
      "Medición dimensional para reconstrucción de planos",
      "Identificación de materiales y procesos de fabricación",
      "Reconstrucción CAD a partir de pieza física",
    ],
    tips: [
      "Lleva siempre tus instrumentos de medición y registra todo en bitácora con fotos.",
    ],
  },
  {
    id: "admin-mantenimiento", name: "Administración de Mantenimiento", year: 2, semester: 3, area: "gest",
    summary: "Gestión, planificación y control de recursos para mantenimiento industrial.",
    topics: [
      "Planificación y programación de mantenimiento",
      "Gestión de repuestos e inventario",
      "Costos de mantenimiento",
      "Indicadores de gestión (KPI) y mejora continua",
    ],
    tips: ["Conecta los conceptos con Mantenimiento Industrial (sem 2) y Estrategias del Mantenimiento (sem 5)."],
  },
  {
    id: "dibujo-1", name: "Dibujo I", year: 2, semester: 3, area: "diseno",
    summary: "Fundamentos de dibujo técnico y normalización para ingeniería.",
    topics: [
      "Normas de dibujo técnico (ISO, escalas, formatos)",
      "Vistas ortogonales y proyección de planos",
      "Cortes y secciones",
      "Acotado y tolerancias básicas",
      "Introducción a software CAD 2D",
    ],
    tips: [
      "Practica proyección de vistas a mano antes de usar el software: ayuda a visualizar en 3D.",
    ],
  },
  {
    id: "ingles-tecnico", name: "Inglés Técnico", year: 2, semester: 3, area: "idioma",
    summary: "Vocabulario técnico en inglés para lectura de manuales y normas.",
    topics: [
      "Vocabulario de mecánica, materiales y procesos en inglés",
      "Lectura de manuales técnicos y datasheets",
      "Comprensión de normas internacionales en inglés",
    ],
    tips: ["Lee datasheets de componentes reales (rodamientos, motores) para practicar contexto técnico."],
  },

  // ===== AÑO 2 - SEMESTRE 4 =====
  {
    id: "mate-aplicada-2", name: "Matemática Aplicada II", year: 2, semester: 4, area: "mate",
    summary: "Cálculo multivariable, ecuaciones diferenciales y series.",
    topics: [
      "Funciones de varias variables y derivadas parciales",
      "Integrales múltiples (dobles)",
      "Ecuaciones diferenciales ordinarias de primer y segundo orden",
      "Aplicaciones a sistemas físicos (vibraciones, enfriamiento)",
      "Series y aproximaciones (introducción)",
    ],
    tips: [
      "Las EDOs de segundo orden reaparecen en Cinemática de Máquinas y vibraciones mecánicas.",
    ],
  },
  {
    id: "hidraulica-neumatica", name: "Hidráulica y Neumática", year: 2, semester: 4, area: "mecan",
    summary: "Sistemas de transmisión de potencia mediante fluidos a presión y aire comprimido.",
    topics: [
      "Componentes hidráulicos: bombas, válvulas, cilindros",
      "Circuitos hidráulicos y simbología ISO",
      "Componentes neumáticos: compresores, actuadores",
      "Circuitos neumáticos básicos y secuenciales",
      "Cálculo de fuerza, caudal y presión en cilindros",
    ],
    tips: [
      "Aprende la simbología ISO de memoria: aparece en evaluaciones de lectura de circuitos.",
      "Practica armar circuitos simples en simulador (FluidSIM u otro) si está disponible.",
    ],
  },
  {
    id: "electronica-analoga-digital", name: "Electrónica Análoga Digital", year: 2, semester: 4, area: "elec",
    summary: "Fundamentos de electrónica analógica y digital aplicada a control industrial.",
    topics: [
      "Diodos, transistores y amplificadores básicos",
      "Álgebra de Boole y compuertas lógicas",
      "Circuitos combinacionales y secuenciales",
      "Conversión análogo-digital (ADC/DAC)",
      "Introducción a microcontroladores/PLC",
    ],
    tips: [
      "El álgebra de Boole es clave para Automatización Industrial más adelante.",
    ],
  },
  {
    id: "ingles-conversacional", name: "Inglés Conversacional", year: 2, semester: 4, area: "idioma",
    summary: "Desarrollo de fluidez oral en inglés con foco en contextos técnicos y laborales.",
    topics: [
      "Conversación cotidiana y profesional",
      "Presentaciones orales en inglés",
      "Listening con material técnico-industrial",
    ],
    tips: ["Practica presentaciones de tus propios proyectos en inglés, se reutiliza para CV/entrevistas."],
  },
  {
    id: "metrologia", name: "Metrología y Tecnología Mecánica", year: 2, semester: 4, area: "mecan",
    summary: "Principios de medición dimensional y control de calidad en manufactura.",
    topics: [
      "Instrumentos de medición: pie de metro, micrómetro, comparador",
      "Tolerancias dimensionales y geométricas (GD&T básico)",
      "Calibración y trazabilidad metrológica",
      "Control estadístico de procesos (introducción)",
    ],
    tips: [
      "Practica lectura de pie de metro y micrómetro hasta leerlos sin dudar: es habilidad evaluada en taller.",
    ],
  },
  {
    id: "tec-materiales", name: "Tecnología de los Materiales", year: 2, semester: 4, area: "mater",
    summary: "Estructura, propiedades y selección de materiales de ingeniería.",
    topics: [
      "Estructura cristalina de metales",
      "Diagramas de fase (ej. Fe-C)",
      "Tratamientos térmicos: temple, revenido, recocido",
      "Propiedades mecánicas: dureza, ductilidad, tenacidad",
      "Ensayos de materiales (tracción, dureza, impacto)",
      "Selección de materiales según aplicación",
    ],
    tips: [
      "El diagrama Fe-C y tratamientos térmicos son tema recurrente de examen.",
      "Conecta esto con Resistencia de Materiales y Procesos de Conformado.",
    ],
  },
  {
    id: "dibujo-2", name: "Dibujo II", year: 2, semester: 4, area: "diseno",
    summary: "Dibujo técnico avanzado y modelado 3D para piezas y ensambles.",
    topics: [
      "Modelado 3D paramétrico (CAD)",
      "Ensambles y despieces",
      "Planos de fabricación y de detalle",
      "Tolerancias y ajustes (sistema agujero/eje base)",
    ],
    tips: ["Guarda tus modelos CAD: te servirán de base para Diseños Mecánicos en semestre 7."],
  },

  // ===== AÑO 3 - SEMESTRE 5 =====
  {
    id: "econ-adm-empresas", name: "Economía y Adm. de Empresas", year: 3, semester: 5, area: "gest",
    summary: "Conceptos de economía y administración aplicados a la gestión industrial.",
    topics: [
      "Principios de oferta y demanda",
      "Estructura organizacional de empresas",
      "Costos, ingresos y punto de equilibrio",
      "Indicadores financieros básicos",
    ],
    tips: ["Relaciona el punto de equilibrio con decisiones de mantenimiento (reparar vs reemplazar)."],
  },
  {
    id: "mecanica-general", name: "Mecánica General", year: 3, semester: 5, area: "mecan",
    summary: "Estática y dinámica aplicada de cuerpos rígidos y sistemas mecánicos.",
    topics: [
      "Equilibrio de cuerpos rígidos en 2D y 3D",
      "Análisis de estructuras: armaduras y marcos",
      "Centro de masa y momentos de inercia",
      "Dinámica de partículas y cuerpos rígidos",
      "Fricción en sistemas mecánicos",
    ],
    tips: [
      "Es la continuación directa de Física (sem 2): repasa diagramas de cuerpo libre.",
      "Base obligatoria para Resistencia de Materiales y Cinemática de Máquinas.",
    ],
  },
  {
    id: "plantas-procesos", name: "Plantas y Procesos Industriales", year: 3, semester: 5, area: "gest",
    summary: "Diseño y organización de plantas industriales y flujo de procesos.",
    topics: [
      "Layout de planta y distribución de procesos",
      "Diagramas de flujo de proceso (PFD)",
      "Capacidad de planta y balance de líneas",
      "Eficiencia y productividad industrial",
    ],
    tips: ["Practica leer e interpretar diagramas PFD/P&ID, se repiten en Instrumentación y Control."],
  },
  {
    id: "automatizacion", name: "Automatización Industrial", year: 3, semester: 5, area: "elec",
    summary: "Sistemas automáticos de control aplicados a procesos industriales.",
    topics: [
      "Lógica de control con PLC",
      "Sensores y actuadores industriales",
      "Diagramas de escalera (ladder)",
      "Sistemas de control secuencial",
      "Introducción a SCADA",
    ],
    tips: ["Practica programación ladder en simulador, es la habilidad más evaluada en pruebas prácticas."],
  },
  {
    id: "soldadura-calidad", name: "Soldadura y Control de Calidad", year: 3, semester: 5, area: "mater",
    summary: "Procesos de soldadura industrial y métodos de control de calidad asociados.",
    topics: [
      "Procesos de soldadura: SMAW, MIG/MAG, TIG",
      "Defectos de soldadura y su prevención",
      "Ensayos no destructivos (END): tintas penetrantes, ultrasonido, radiografía",
      "Normas de calidad en soldadura (AWS, ASME)",
    ],
    tips: ["Asocia cada defecto de soldadura con su causa raíz: es típico en preguntas de diagnóstico."],
  },
  {
    id: "estrategias-mant", name: "Estrategias del Mantenimiento", year: 3, semester: 5, area: "gest",
    summary: "Metodologías avanzadas de gestión de mantenimiento (RCM, TPM, etc.).",
    topics: [
      "Mantenimiento Centrado en Confiabilidad (RCM)",
      "Mantenimiento Productivo Total (TPM)",
      "Análisis de fallas (FMEA, causa raíz)",
      "Mantenimiento predictivo: vibraciones, termografía",
    ],
    tips: ["Compara RCM vs TPM con un cuadro propio: es pregunta clásica de evaluación conceptual."],
  },

  // ===== AÑO 3 - SEMESTRE 6 =====
  {
    id: "decisiones-econ", name: "Decisiones Económicas", year: 3, semester: 6, area: "gest",
    summary: "Evaluación económica de proyectos e ingeniería económica.",
    topics: [
      "Valor del dinero en el tiempo",
      "VAN y TIR",
      "Análisis costo-beneficio de proyectos de ingeniería",
      "Depreciación y reemplazo de activos",
    ],
    tips: ["Practica VAN/TIR con calculadora financiera o Excel: son cálculo seguro en examen."],
  },
  {
    id: "resistencia-materiales", name: "Resistencia de Materiales", year: 3, semester: 6, area: "mecan",
    summary: "Análisis de esfuerzos, deformaciones y diseño a falla de elementos mecánicos.",
    topics: [
      "Esfuerzo y deformación: tracción, compresión, corte",
      "Diagramas de esfuerzo cortante y momento flector",
      "Flexión y torsión de vigas y ejes",
      "Esfuerzos combinados y círculo de Mohr",
      "Pandeo de columnas",
      "Criterios de falla (Von Mises, Tresca)",
    ],
    tips: [
      "Es uno de los ramos más pesados: practica diagramas V-M todos los días, no solo antes de la prueba.",
      "Conecta con Tecnología de los Materiales para propiedades (E, Sy, Su) y con Diseños Mecánicos después.",
    ],
  },
  {
    id: "termodinamica", name: "Termodinámica", year: 3, semester: 6, area: "fisica",
    summary: "Leyes de la termodinámica y ciclos de potencia aplicados a máquinas térmicas.",
    topics: [
      "Primera ley: balance de energía en sistemas cerrados y abiertos",
      "Segunda ley: entropía y eficiencia",
      "Propiedades de sustancias puras y tablas de vapor",
      "Ciclos de potencia: Rankine, Otto, Diésel, Brayton",
      "Ciclos de refrigeración",
    ],
    tips: [
      "Aprende a usar tablas de vapor con fluidez: gran parte del examen depende de eso.",
      "Es la base directa de Transferencia de Calor y Turbomáquinas en año 4.",
    ],
  },
  {
    id: "procesos-conformado", name: "Procesos de Conformado y Fabricación", year: 3, semester: 6, area: "mater",
    summary: "Procesos de manufactura: conformado, mecanizado y fabricación de piezas.",
    topics: [
      "Procesos de conformado: laminado, forjado, extrusión",
      "Mecanizado: torneado, fresado, taladrado",
      "Fundición y moldeo",
      "Parámetros de corte y selección de herramientas",
      "Manufactura aditiva (introducción)",
    ],
    tips: ["Relaciona cada proceso con el tipo de material y geometría de pieza más adecuada para él."],
  },
  {
    id: "cinematica-maquinas", name: "Cinemática de Máquinas", year: 3, semester: 6, area: "mecan",
    summary: "Análisis de movimiento de mecanismos: levas, engranajes y eslabonamientos.",
    topics: [
      "Análisis de mecanismos de barras (4 barras)",
      "Engranajes: relación de transmisión, tipos",
      "Levas y seguidores",
      "Análisis de velocidad y aceleración en mecanismos",
      "Trenes de engranajes",
    ],
    tips: ["Practica el método gráfico de velocidades/aceleraciones, suele pedirse paso a paso en pruebas."],
  },
  {
    id: "control-riesgo", name: "Control de Riesgo Operacional", year: 3, semester: 6, area: "trans",
    summary: "Gestión de prevención de riesgos y seguridad laboral en entornos industriales.",
    topics: [
      "Identificación de peligros y evaluación de riesgos (IPER)",
      "Normativa de seguridad laboral chilena",
      "Equipos de protección personal (EPP)",
      "Investigación de accidentes",
    ],
    tips: ["Memoriza la matriz IPER: se usa como herramienta transversal en taller y prácticas."],
  },

  // ===== AÑO 4 - SEMESTRE 7 =====
  {
    id: "disenos-mecanicos", name: "Diseños Mecánicos", year: 4, semester: 7, area: "mecan",
    summary: "Diseño de elementos de máquinas: ejes, uniones, engranajes, rodamientos.",
    topics: [
      "Diseño de ejes a fatiga y resistencia",
      "Uniones: pernos, soldadura, remaches",
      "Selección de rodamientos",
      "Diseño de engranajes y transmisiones",
      "Resortes y elementos elásticos",
      "Factores de seguridad y normas de diseño",
    ],
    tips: [
      "Integra todo lo de Resistencia de Materiales y Metrología: es el ramo de síntesis del área mecánica.",
      "Ten siempre a mano tablas de materiales y factores de concentración de esfuerzos.",
    ],
  },
  {
    id: "transferencia-calor", name: "Transferencia de Calor", year: 4, semester: 7, area: "fisica",
    summary: "Mecanismos de transferencia de calor: conducción, convección y radiación.",
    topics: [
      "Conducción: Ley de Fourier, resistencia térmica",
      "Convección natural y forzada",
      "Radiación térmica",
      "Intercambiadores de calor: tipos y diseño (LMTD, NTU)",
      "Aletas y superficies extendidas",
    ],
    tips: ["Domina el concepto de resistencia térmica equivalente: simplifica casi todos los problemas."],
  },
  {
    id: "instrumentacion-control", name: "Instrumentación y Control Industrial", year: 4, semester: 7, area: "elec",
    summary: "Instrumentos de medición de procesos y lazos de control automático.",
    topics: [
      "Sensores de presión, temperatura, flujo y nivel",
      "Lazos de control: P, PI, PID",
      "Diagramas P&ID",
      "Sintonización básica de controladores",
    ],
    tips: ["Practica leer P&ID de principio a fin, identificando lazo de control y variable controlada."],
  },
  {
    id: "software-ingenieria", name: "Software de Ingeniería", year: 4, semester: 7, area: "trans",
    summary: "Herramientas de simulación y análisis computacional aplicadas a mecánica (CAE/FEA).",
    topics: [
      "Modelado CAD avanzado",
      "Simulación por elementos finitos (FEA): mallado, condiciones de borde",
      "Análisis estático y de fatiga asistido por software",
      "Interpretación de resultados de simulación",
    ],
    tips: ["Valida siempre tus resultados de simulación con cálculo manual aproximado de Resistencia de Materiales."],
  },
  {
    id: "turbomaquinas", name: "Turbomáquinas", year: 4, semester: 7, area: "mecan",
    summary: "Principios y diseño de turbinas, bombas y compresores.",
    topics: [
      "Clasificación de turbomáquinas (axiales, radiales)",
      "Triángulos de velocidad",
      "Bombas centrífugas: curvas características, cavitación",
      "Turbinas hidráulicas, de vapor y de gas",
      "Compresores centrífugos y axiales",
    ],
    tips: ["Aprende a leer curvas características de bombas: pregunta recurrente en evaluaciones."],
  },

  // ===== AÑO 4 - SEMESTRE 8 =====
  {
    id: "proyecto-especialidad", name: "Proyecto de Especialidad", year: 4, semester: 8, area: "trans",
    summary: "Proyecto integrador aplicando conocimientos de toda la carrera a un caso real.",
    topics: [
      "Definición de problema y alcance del proyecto",
      "Aplicación integrada de diseño, materiales y procesos",
      "Evaluación técnico-económica del proyecto",
      "Defensa y comunicación de resultados",
    ],
    tips: ["Elige un tema que te apasione y conecte con tu futuro laboral: lo presentarás varias veces."],
  },
  {
    id: "liderazgo-situacional", name: "Técnicas de Liderazgo Situacional", year: 4, semester: 8, area: "trans",
    summary: "Habilidades blandas de liderazgo y gestión de equipos de trabajo.",
    topics: [
      "Modelo de liderazgo situacional (Hersey-Blanchard)",
      "Comunicación efectiva y manejo de conflictos",
      "Toma de decisiones en equipo",
      "Gestión de equipos técnicos",
    ],
    tips: ["Relaciona los estilos de liderazgo con casos reales de tu práctica o proyecto de especialidad."],
  },
  {
    id: "topicos-ingenieria", name: "Tópicos de Ingeniería", year: 4, semester: 8, area: "trans",
    summary: "Temas emergentes y de actualización en ingeniería mecánica.",
    topics: [
      "Tendencias en manufactura 4.0 e Industria 4.0",
      "Sostenibilidad y eficiencia energética",
      "Nuevos materiales y tecnologías",
      "Casos de estudio actuales del rubro",
    ],
    tips: ["Mantente al día con noticias del sector industrial chileno y mundial durante el semestre."],
  },
];
