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
    deepDive: [
      {
        title: "Funciones",
        points: [
          "Dominio = valores de x permitidos (cuidado con denominadores =0 y raíces de índice par negativas).",
          "Una función es inyectiva si pasa la prueba de la recta horizontal; solo así tiene inversa directa.",
          "Composición (f∘g)(x) = f(g(x)): siempre evalúa primero la función interior.",
          "Función exponencial f(x)=a^x crece/decae según a>1 o 0<a<1; su inversa es el logaritmo.",
        ],
      },
      {
        title: "Trigonometría",
        points: [
          "Círculo unitario: sen²θ + cos²θ = 1 es la identidad madre, de ella derivan las demás.",
          "tan θ = sen θ / cos θ; cuidado con los valores donde cos θ = 0 (asíntotas).",
          "Ángulos notables (0°, 30°, 45°, 60°, 90°) deben saberse de memoria, sin calculadora.",
          "Ley del seno y coseno se usan para triángulos no rectángulos (útil en Mecánica General después).",
        ],
      },
      {
        title: "Factorización y ecuaciones",
        points: [
          "Casos de factorización: factor común, diferencia de cuadrados, trinomio cuadrado perfecto, suma/diferencia de cubos.",
          "Fórmula general para cuadráticas: x = (-b ± √(b²-4ac)) / 2a; el discriminante define el número de soluciones reales.",
          "Sistemas de ecuaciones: método de sustitución, igualación, reducción y matricial (Gauss básico).",
        ],
      },
    ],
    formulas: [
      "Discriminante: Δ = b² − 4ac",
      "Distancia entre dos puntos: d = √[(x₂−x₁)² + (y₂−y₁)²]",
      "Ecuación de la recta: y = mx + n, con m = (y₂−y₁)/(x₂−x₁)",
      "Identidad pitagórica: sen²θ + cos²θ = 1",
      "Logaritmo: log_a(x) = y ⇔ a^y = x",
    ],
    examFocus: [
      "Resolver inecuaciones con valor absoluto y expresar la solución en notación de intervalo.",
      "Encontrar dominio y recorrido de funciones racionales y con raíces.",
      "Factorizar polinomios de grado 3 o 4 combinando varios casos.",
      "Resolver ecuaciones trigonométricas en un intervalo dado [0, 2π].",
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
    deepDive: [
      {
        title: "Lógica de programación",
        points: [
          "Variable = espacio de memoria con nombre; tipo de dato define qué puede guardar (entero, real, texto, booleano).",
          "Condicional if/else: evalúa una expresión booleana y bifurca el flujo del programa.",
          "Ciclo for: número conocido de repeticiones. Ciclo while: se repite mientras una condición sea verdadera.",
          "Diagrama de flujo: óvalo = inicio/fin, rombo = decisión, rectángulo = proceso, paralelogramo = entrada/salida.",
        ],
      },
      {
        title: "Excel para ingeniería",
        points: [
          "Referencias relativas vs absolutas ($A$1) al copiar fórmulas.",
          "Funciones clave: SI(), BUSCARV/BUSCARX, SUMAR.SI, promedio, gráficos de dispersión para datos experimentales.",
          "Tablas dinámicas para resumir datos de laboratorio o mantenimiento.",
        ],
      },
    ],
    examFocus: [
      "Escribir pseudocódigo o diagrama de flujo para un problema simple (ej. promedio de notas, máximo de una lista).",
      "Identificar el resultado de un programa corto con ciclos anidados (trace de ejecución).",
      "Resolver un caso práctico en Excel con fórmulas condicionales.",
    ],
    tips: [
      "Practica en el computador, no solo leas teoría: la lógica se aprende programando.",
      "Aprende atajos y fórmulas de Excel, se usan en casi todos los ramos posteriores.",
      "Cuando un programa falle, traza el código línea a línea con valores concretos antes de asumir que 'no funciona'.",
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
    deepDive: [
      {
        title: "Estructura y enlace",
        points: [
          "Número atómico = protones; número másico = protones + neutrones; isótopos varían en neutrones.",
          "Enlace metálico explica conductividad y maleabilidad de los metales usados en mecánica.",
          "Electronegatividad determina el tipo de enlace: diferencia alta → iónico, baja → covalente.",
        ],
      },
      {
        title: "Estequiometría",
        points: [
          "Balancear primero por tanteo metales, luego no metales, luego H y O al final.",
          "Mol = puente entre masa (gramos) y número de partículas (Avogadro = 6,022×10²³).",
          "Reactivo limitante: el que se agota primero y determina la cantidad máxima de producto.",
        ],
      },
      {
        title: "Corrosión (clave para mecánica)",
        points: [
          "La corrosión es una reacción redox: el metal se oxida (pierde electrones) y un agente reductor se reduce.",
          "Serie galvánica: metales más activos (ánodos) se corroen para proteger a los menos activos (cátodos) — base de la protección catódica.",
          "Factores que aceleran la corrosión: humedad, electrolitos (sales), temperatura y pares de metales distintos en contacto.",
        ],
      },
    ],
    formulas: [
      "n = m / M (moles = masa / masa molar)",
      "Molaridad: M = n_soluto / V_solución (L)",
      "pH = −log[H⁺]",
      "PV = nRT (gases ideales, base para termoquímica)",
    ],
    examFocus: [
      "Balancear ecuaciones químicas por tanteo o método algebraico.",
      "Calcular reactivo limitante y rendimiento de una reacción.",
      "Explicar el mecanismo de corrosión galvánica entre dos metales distintos en contacto.",
      "Calcular pH de soluciones ácidas/básicas simples.",
    ],
    tips: [
      "Relaciona la corrosión y enlace metálico con Tecnología de los Materiales, se reutiliza más adelante.",
      "Practica balanceo de ecuaciones hasta que sea automático.",
      "Memoriza la serie galvánica de los metales comunes (Mg, Zn, Fe, Cu): se pregunta directo en pruebas.",
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
    deepDive: [
      {
        title: "Perfil y campo laboral",
        points: [
          "El ingeniero mecánico UMAG se desempeña en diseño, mantenimiento, producción, energía y minería.",
          "Áreas de especialización que verás en la malla: mantenimiento industrial, diseño mecánico, procesos de fabricación.",
        ],
      },
      {
        title: "Gestión del tiempo y método de estudio",
        points: [
          "Técnica Pomodoro o bloques de estudio de 45-50 min con descansos cortos mejora retención en ramos de cálculo.",
          "Planificar por semana cruzando fechas de pruebas de todos los ramos evita acumulación al final del semestre.",
        ],
      },
    ],
    examFocus: [
      "Describir el perfil de egreso y campos de desempeño del ingeniero mecánico.",
      "Reconocer principios éticos aplicados a casos de ingeniería (seguridad, medioambiente, honestidad técnica).",
    ],
    tips: [
      "Úsalo para mapear qué área de la mecánica te interesa (mantenimiento, diseño, procesos).",
      "Aplica desde ya un calendario de estudio: la base que armes aquí te sirve los 4 años.",
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
    deepDive: [
      {
        title: "Estructura de un informe técnico",
        points: [
          "Portada, resumen/objetivos, marco teórico, metodología, resultados, discusión, conclusiones, referencias.",
          "Resultados se presentan con tablas/gráficos numerados y referenciados en el texto ('ver Figura 1').",
          "Conclusión debe responder directamente al objetivo planteado, sin información nueva.",
        ],
      },
      {
        title: "Citación y referencias",
        points: [
          "Formato más usado en ingeniería: APA o IEEE, según lo pida la cátedra.",
          "Toda figura, tabla o dato que no sea propio debe citarse para evitar plagio.",
        ],
      },
    ],
    examFocus: [
      "Redactar un resumen ejecutivo claro y conciso de un tema técnico.",
      "Aplicar correctamente normas de citación en un texto dado.",
      "Estructurar un informe de laboratorio completo.",
    ],
    tips: [
      "Guarda las plantillas de informe: las reutilizarás en laboratorios de toda la carrera.",
      "Practica explicar un proceso técnico a alguien sin conocimiento previo: si lo entiende, tu redacción funciona.",
    ],
  },
  {
    id: "deportes", name: "Deportes", year: 1, semester: 1, area: "trans",
    summary: "Actividad física y formación deportiva, ramo de formación integral.",
    topics: [
      "Acondicionamiento físico general",
      "Trabajo en equipo y disciplina deportiva",
    ],
    deepDive: [
      {
        title: "Evaluación práctica",
        points: [
          "Suele evaluarse con pruebas físicas básicas (resistencia, fuerza) más asistencia y actitud.",
          "El componente teórico, si existe, cubre nociones de salud, hábitos de vida activa y trabajo en equipo.",
        ],
      },
    ],
    examFocus: ["Cumplir asistencia mínima y participar activamente en las pruebas físicas programadas."],
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
    deepDive: [
      {
        title: "Límites y continuidad",
        points: [
          "Una función es continua en x=a si existe f(a), existe el límite en a, y ambos coinciden.",
          "Formas indeterminadas (0/0, ∞/∞) se resuelven factorizando, racionalizando o con L'Hôpital (si ya se vio derivadas).",
          "Límites al infinito describen asíntotas horizontales; importantes para entender comportamiento de funciones.",
        ],
      },
      {
        title: "Derivadas",
        points: [
          "Regla de la cadena: d/dx[f(g(x))] = f'(g(x))·g'(x) — la más usada en problemas compuestos.",
          "Para optimización: deriva, iguala a 0, encuentra puntos críticos, usa segunda derivada o tabla de signos para clasificar máx/mín.",
          "Derivación implícita: deriva ambos lados respecto a x, tratando y como función de x (dy/dx aparece como incógnita).",
        ],
      },
      {
        title: "Integrales",
        points: [
          "Integral = antiderivada; siempre agrega +C en la indefinida.",
          "Sustitución (cambio de variable) es la técnica más usada: busca una función y su derivada presente en el integrando.",
          "Integración por partes: ∫u dv = uv − ∫v du; elige 'u' con la regla LIATE (logarítmica, inversa trig., algebraica, trig., exponencial).",
          "Teorema Fundamental del Cálculo conecta área bajo la curva con la antiderivada evaluada en los límites.",
        ],
      },
    ],
    formulas: [
      "Regla de la cadena: (f∘g)'(x) = f'(g(x))·g'(x)",
      "Derivada de potencia: d/dx[xⁿ] = n·xⁿ⁻¹",
      "Integración por partes: ∫u dv = uv − ∫v du",
      "TFC: ∫ₐᵇ f(x) dx = F(b) − F(a)",
      "Volumen de revolución (discos): V = π∫ₐᵇ [f(x)]² dx",
    ],
    examFocus: [
      "Calcular límites con formas indeterminadas usando factorización o racionalización.",
      "Resolver problemas de optimización con contexto físico (área máxima, costo mínimo).",
      "Integrar por sustitución y por partes en una misma prueba.",
      "Calcular área entre curvas y volumen de sólidos de revolución.",
    ],
    tips: [
      "La optimización (máx/mín) se usa después en diseño mecánico y resistencia de materiales.",
      "Practica integración por sustitución y por partes hasta automatizarlas.",
      "Verifica siempre tu derivada/integral derivando el resultado final: es la forma más rápida de autocorregirte.",
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
    deepDive: [
      {
        title: "Cinemática",
        points: [
          "MRUA: v = v₀ + at; x = x₀ + v₀t + ½at²; v² = v₀² + 2aΔx — las tres ecuaciones que resuelven casi todo.",
          "Tiro parabólico: descompón en eje X (velocidad constante) y eje Y (MRUA con g); el tiempo de vuelo conecta ambos ejes.",
        ],
      },
      {
        title: "Dinámica y DCL",
        points: [
          "Diagrama de cuerpo libre: dibuja SOLO el cuerpo y todas las fuerzas externas que actúan sobre él (peso, normal, tensión, fricción, aplicada).",
          "ΣF = ma en cada eje; en planos inclinados conviene rotar los ejes paralelo/perpendicular al plano.",
          "Fricción estática máxima = μₛN; fricción cinética = μₖN (μₖ < μₛ generalmente).",
        ],
      },
      {
        title: "Trabajo, energía y momentum",
        points: [
          "Trabajo W = F·d·cosθ; teorema trabajo-energía: W_neto = ΔEc.",
          "Energía mecánica se conserva si no hay fricción ni fuerzas no conservativas.",
          "Choques elásticos conservan momentum y energía cinética; los inelásticos solo conservan momentum.",
        ],
      },
      {
        title: "Equilibrio de cuerpo rígido",
        points: [
          "Condición de equilibrio: ΣF = 0 y ΣTorque = 0 respecto a cualquier punto elegido.",
          "Elegir el punto de pivote en una fuerza desconocida elimina su torque y simplifica el sistema de ecuaciones.",
        ],
      },
    ],
    formulas: [
      "v = v₀ + at",
      "x = x₀ + v₀t + ½at²",
      "ΣF = m·a",
      "W = F·d·cosθ",
      "Ec = ½mv²;  Ep = mgh",
      "p = m·v (momentum lineal)",
      "Torque: τ = F·d·senθ",
    ],
    examFocus: [
      "Resolver sistemas de bloques conectados con poleas usando DCL por cuerpo.",
      "Tiro parabólico: alcance máximo, altura máxima, tiempo de vuelo.",
      "Aplicar conservación de energía en planos inclinados con y sin fricción.",
      "Equilibrio de cuerpo rígido con cargas distribuidas o vigas apoyadas.",
    ],
    tips: [
      "El diagrama de cuerpo libre es la herramienta más usada en toda la carrera: domínalo aquí.",
      "Equilibrio de cuerpo rígido es la base directa de Mecánica General y Resistencia de Materiales.",
      "Define siempre un sistema de referencia (signos +/-) antes de plantear ecuaciones, y mantenlo fijo durante todo el problema.",
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
    deepDive: [
      {
        title: "Ciclo de 4 tiempos",
        points: [
          "Admisión: válvula de admisión abierta, pistón baja, entra mezcla aire-combustible (u aire en diésel).",
          "Compresión: ambas válvulas cerradas, pistón sube, comprime la mezcla/aire.",
          "Explosión (combustión): bujía enciende (Otto) o se inyecta combustible que autoenciende por compresión (Diésel); el pistón es empujado hacia abajo — es el único tiempo que entrega trabajo.",
          "Escape: válvula de escape abierta, pistón sube y expulsa los gases quemados.",
        ],
      },
      {
        title: "Otto vs Diésel",
        points: [
          "Otto: encendido por chispa (bujía), relación de compresión más baja (~8-12:1), usa mezcla aire-combustible premezclada.",
          "Diésel: autoencendido por compresión, relación de compresión alta (~14-22:1), inyecta combustible directamente en el aire ya comprimido.",
        ],
      },
      {
        title: "Sistemas de soporte",
        points: [
          "Lubricación: reduce fricción y desgaste, evacúa calor parcialmente; presión típica monitoreada por sensor.",
          "Refrigeración: por agua (radiador, bomba, termostato) o por aire; mantiene temperatura óptima de operación.",
          "Distribución: sincroniza apertura/cierre de válvulas con la posición del pistón mediante correa/cadena de tiempo.",
        ],
      },
    ],
    formulas: [
      "Relación de compresión: rc = (Vd + Vc) / Vc",
      "Potencia indicada (aprox.): Pi = pmi·V·N / (constante según tiempos)",
      "Cilindrada unitaria: Vd = (π/4)·D²·L",
    ],
    examFocus: [
      "Describir paso a paso el ciclo de 4 tiempos indicando estado de válvulas y movimiento del pistón.",
      "Comparar ciclo Otto y Diésel: tipo de encendido, relación de compresión, eficiencia.",
      "Diagnosticar una falla común (ej. motor no enciende, sobrecalentamiento) a partir de síntomas dados.",
    ],
    tips: [
      "Aprende el ciclo de 4 tiempos de memoria, es examinado constantemente.",
      "Relaciona cada sistema con su función: evita memorizar piezas sueltas.",
      "Dibuja el motor en corte de memoria identificando cada componente: ayuda mucho más que solo leer listas.",
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
    deepDive: [
      {
        title: "Circuitos básicos",
        points: [
          "Ley de Ohm: V = I·R, relaciona voltaje, corriente y resistencia.",
          "Ley de corrientes de Kirchhoff (LCK): la suma de corrientes que entra a un nodo = suma que sale.",
          "Ley de voltajes de Kirchhoff (LVK): la suma de voltajes en una malla cerrada es cero.",
          "Resistencias en serie se suman; en paralelo se combinan como inversos (1/Req = 1/R1 + 1/R2 + ...).",
        ],
      },
      {
        title: "CC vs CA",
        points: [
          "Corriente continua: magnitud y sentido constantes (baterías).",
          "Corriente alterna: varía senoidalmente en el tiempo, caracterizada por frecuencia (Hz) y voltaje RMS.",
          "Potencia eléctrica: P = V·I (CC); en CA hay que considerar el factor de potencia.",
        ],
      },
      {
        title: "Motores eléctricos",
        points: [
          "Principio básico: un conductor con corriente en un campo magnético experimenta una fuerza (Ley de Lorentz/regla de la mano derecha).",
          "Motor DC simple: bobina gira por interacción entre su campo magnético y el del imán/estator fijo.",
          "Esto es la base conceptual para entender motores de inducción en Redes Máquinas Eléctricas (semestre 3).",
        ],
      },
    ],
    formulas: [
      "V = I·R (Ley de Ohm)",
      "P = V·I = I²R = V²/R",
      "Req(serie) = R1 + R2 + ...",
      "1/Req(paralelo) = 1/R1 + 1/R2 + ...",
    ],
    examFocus: [
      "Resolver circuitos resistivos mixtos (serie-paralelo) aplicando Ohm y Kirchhoff.",
      "Calcular potencia disipada en distintos elementos de un circuito.",
      "Explicar el principio de funcionamiento básico de un motor eléctrico.",
    ],
    tips: [
      "Domina Ley de Ohm y Kirchhoff: son la base de Redes Máquinas Eléctricas más adelante.",
      "Practica resolver circuitos con método de mallas o nodos, no solo reducción serie-paralelo.",
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
    deepDive: [
      {
        title: "Tipos de mantenimiento",
        points: [
          "Correctivo: se interviene cuando ya ocurrió la falla (mayor costo y riesgo de paradas no planificadas).",
          "Preventivo: intervención programada en base a tiempo o uso, antes de que falle (ej. cambio de aceite cada X horas).",
          "Predictivo: se monitorean variables (vibración, temperatura, aceite) para predecir la falla antes de que ocurra.",
        ],
      },
      {
        title: "Indicadores clave",
        points: [
          "MTBF (Mean Time Between Failures): tiempo promedio entre fallas — mide confiabilidad.",
          "MTTR (Mean Time To Repair): tiempo promedio de reparación — mide capacidad de respuesta.",
          "Disponibilidad = MTBF / (MTBF + MTTR): proporción de tiempo que el equipo está operativo.",
        ],
      },
      {
        title: "Orden de trabajo (OT)",
        points: [
          "Documento que formaliza una intervención: equipo, falla/tarea, repuestos, tiempo, responsable.",
          "Es la base de los sistemas CMMS (software de gestión de mantenimiento) usados en la industria real.",
        ],
      },
    ],
    formulas: [
      "Disponibilidad = MTBF / (MTBF + MTTR)",
      "MTBF = Tiempo total de operación / N° de fallas",
      "MTTR = Tiempo total de reparación / N° de reparaciones",
    ],
    examFocus: [
      "Clasificar un caso dado como mantenimiento correctivo, preventivo o predictivo.",
      "Calcular MTBF, MTTR y disponibilidad a partir de datos de un equipo.",
      "Justificar qué estrategia de mantenimiento conviene según criticidad del equipo.",
    ],
    tips: [
      "Este ramo es la puerta de entrada a toda la línea de Mantenimiento (sem. 3, 5, 6).",
      "Practica los cálculos de MTBF/MTTR/disponibilidad con datos numéricos, no solo de memoria conceptual.",
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
