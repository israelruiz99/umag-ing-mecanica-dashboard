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
      {
        title: "Conjuntos numéricos, inecuaciones y valor absoluto",
        points: [
          "Conjuntos: Naturales ⊂ Enteros ⊂ Racionales ⊂ Reales. Identifica siempre en qué conjunto se pide la solución.",
          "Inecuaciones: al multiplicar o dividir por un número negativo, el sentido de la desigualdad se invierte.",
          "Valor absoluto |x| representa distancia al origen: |x−a| < b significa que x está a menos de b unidades de a.",
          "Las soluciones de inecuaciones se expresan en notación de intervalo, no como una sola igualdad.",
        ],
        formulas: ["|x − a| < b  ⇔  −b < x − a < b", "|x − a| > b  ⇔  x < a − b  ó  x > a + b"],
      },
      {
        title: "Funciones: dominio, recorrido, composición e inversa",
        points: [
          "Dominio = valores de x permitidos (cuidado con denominadores = 0 y raíces de índice par negativas).",
          "Una función es inyectiva si pasa la prueba de la recta horizontal; solo así tiene inversa directa.",
          "Composición (f∘g)(x) = f(g(x)): siempre evalúa primero la función interior.",
          "Para hallar la inversa: despeja x en función de y, luego intercambia las variables.",
        ],
      },
      {
        title: "Función lineal, cuadrática, exponencial y logarítmica",
        points: [
          "La función lineal y = mx + n tiene pendiente constante m; representa una recta.",
          "La función cuadrática y = ax² + bx + c forma una parábola; su vértice marca el máximo o mínimo.",
          "Función exponencial f(x) = aˣ crece/decae según a > 1 o 0 < a < 1; su inversa es el logaritmo.",
          "Logaritmo y exponencial son funciones inversas entre sí: deshacen la operación de la otra.",
        ],
        formulas: [
          "Vértice de la parábola: x_v = −b / 2a",
          "log_a(x) = y  ⇔  a^y = x",
        ],
        diagram: "parabola",
      },
      {
        title: "Trigonometría: razones, identidades y ecuaciones",
        points: [
          "Círculo unitario: sen²θ + cos²θ = 1 es la identidad madre, de ella derivan las demás.",
          "tan θ = sen θ / cos θ; cuidado con los valores donde cos θ = 0 (asíntotas).",
          "Ángulos notables (0°, 30°, 45°, 60°, 90°) deben saberse de memoria, sin calculadora.",
          "Ley del seno y coseno se usan para triángulos no rectángulos (útil en Mecánica General después).",
        ],
        formulas: ["sen²θ + cos²θ = 1", "tan θ = sen θ / cos θ", "Ley del coseno: c² = a² + b² − 2ab·cos C"],
        diagram: "unitCircle",
      },
      {
        title: "Polinomios: factorización, división y raíces",
        points: [
          "Casos de factorización: factor común, diferencia de cuadrados, trinomio cuadrado perfecto, suma/diferencia de cubos.",
          "Fórmula general para cuadráticas: x = (−b ± √(b²−4ac)) / 2a; el discriminante define el número de soluciones reales.",
          "División sintética (Ruffini) permite encontrar raíces racionales de polinomios de grado mayor a 2.",
        ],
        formulas: ["Discriminante: Δ = b² − 4ac", "x = (−b ± √Δ) / 2a"],
      },
      {
        title: "Sistemas de ecuaciones lineales (2x2 y 3x3)",
        points: [
          "Métodos: sustitución, igualación, reducción (suma/resta) y matricial (Gauss básico).",
          "Un sistema 2x2 puede tener una solución única, infinitas (rectas coincidentes) o ninguna (rectas paralelas).",
          "Para 3x3, escalonar la matriz (Gauss) es el método más ordenado y menos propenso a errores.",
        ],
      },
      {
        title: "Geometría analítica básica: recta y circunferencia",
        points: [
          "La pendiente m mide la inclinación de la recta; rectas paralelas tienen igual m, perpendiculares cumplen m₁·m₂ = −1.",
          "La ecuación de la circunferencia se obtiene aplicando el teorema de Pitágoras a un punto genérico y el centro.",
        ],
        formulas: [
          "Distancia entre dos puntos: d = √[(x₂−x₁)² + (y₂−y₁)²]",
          "Ecuación de la recta: y = mx + n,  m = (y₂−y₁)/(x₂−x₁)",
          "Circunferencia: (x−h)² + (y−k)² = r²",
        ],
      },
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
      {
        title: "Lógica de programación: variables, condicionales, ciclos",
        points: [
          "Variable = espacio de memoria con nombre; el tipo de dato define qué puede guardar (entero, real, texto, booleano).",
          "Condicional if/else: evalúa una expresión booleana y bifurca el flujo del programa.",
          "Ciclo for: número conocido de repeticiones. Ciclo while: se repite mientras una condición sea verdadera.",
        ],
      },
      {
        title: "Pseudocódigo y diagramas de flujo",
        points: [
          "El pseudocódigo describe la lógica sin sintaxis estricta de un lenguaje, enfocado en el algoritmo.",
          "Diagrama de flujo: óvalo = inicio/fin, rombo = decisión, rectángulo = proceso, paralelogramo = entrada/salida.",
        ],
        diagram: "flowchart",
      },
      {
        title: "Introducción a un lenguaje (Python/C según cátedra)",
        points: [
          "Sintaxis básica: declaración de variables, operadores aritméticos y lógicos, estructuras de control.",
          "Practica traduciendo directamente tu pseudocódigo a código real: así conectas lógica con sintaxis.",
        ],
      },
      {
        title: "Manejo de hojas de cálculo (Excel) para ingeniería",
        points: [
          "Referencias relativas vs absolutas ($A$1) al copiar fórmulas.",
          "Funciones clave: SI(), BUSCARV/BUSCARX, SUMAR.SI, promedio, gráficos de dispersión para datos experimentales.",
          "Tablas dinámicas para resumir datos de laboratorio o mantenimiento.",
        ],
      },
      {
        title: "Estructuras de datos básicas (arreglos)",
        points: [
          "Un arreglo almacena varios valores del mismo tipo bajo un solo nombre, accesibles por índice (empieza en 0).",
          "Recorrer un arreglo con un ciclo for es la operación más común (buscar máximo, sumar, promediar).",
        ],
      },
      {
        title: "Resolución de problemas numéricos simples por algoritmo",
        points: [
          "Antes de programar: define entradas, salidas y los pasos intermedios (algoritmo) en papel.",
          "Prueba tu algoritmo con un caso simple a mano antes de codificarlo.",
        ],
      },
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
      {
        title: "Estructura atómica y tabla periódica",
        points: [
          "Número atómico = protones; número másico = protones + neutrones; isótopos varían en neutrones.",
          "La tabla periódica organiza elementos por número atómico; grupos (columnas) comparten propiedades químicas.",
        ],
      },
      {
        title: "Enlace químico (iónico, covalente, metálico)",
        points: [
          "Electronegatividad determina el tipo de enlace: diferencia alta → iónico, baja → covalente.",
          "Enlace metálico explica conductividad y maleabilidad de los metales usados en mecánica.",
        ],
      },
      {
        title: "Estequiometría y balance de ecuaciones",
        points: [
          "Balancear primero por tanteo metales, luego no metales, luego H y O al final.",
          "Mol = puente entre masa (gramos) y número de partículas (Avogadro = 6,022×10²³).",
          "Reactivo limitante: el que se agota primero y determina la cantidad máxima de producto.",
        ],
        formulas: ["n = m / M (moles = masa / masa molar)"],
      },
      {
        title: "Soluciones, concentración y pH",
        points: [
          "Concentración molar relaciona cantidad de soluto disuelto con el volumen total de solución.",
          "pH < 7 ácido, pH = 7 neutro, pH > 7 básico; escala logarítmica en base a [H⁺].",
        ],
        formulas: ["Molaridad: M = n_soluto / V_solución (L)", "pH = −log[H⁺]"],
      },
      {
        title: "Termoquímica básica",
        points: [
          "Reacciones exotérmicas liberan calor (ΔH < 0); endotérmicas lo absorben (ΔH > 0).",
          "La ley de los gases ideales conecta presión, volumen, temperatura y cantidad de sustancia.",
        ],
        formulas: ["PV = nRT"],
      },
      {
        title: "Oxidación-reducción y corrosión (clave para mecánica)",
        points: [
          "La corrosión es una reacción redox: el metal se oxida (pierde electrones) y un agente reductor se reduce.",
          "Serie galvánica: metales más activos (ánodos) se corroen para proteger a los menos activos (cátodos) — base de la protección catódica.",
          "Factores que aceleran la corrosión: humedad, electrolitos (sales), temperatura y pares de metales distintos en contacto.",
        ],
        diagram: "galvanicSeries",
      },
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
      {
        title: "Perfil de egreso de la carrera y campo laboral",
        points: [
          "El ingeniero mecánico UMAG se desempeña en diseño, mantenimiento, producción, energía y minería.",
          "Áreas de especialización que verás en la malla: mantenimiento industrial, diseño mecánico, procesos de fabricación.",
        ],
      },
      {
        title: "Ética profesional y responsabilidad social",
        points: [
          "La ética profesional implica seguridad, honestidad técnica y respeto al medioambiente en cada decisión de ingeniería.",
        ],
      },
      {
        title: "Metodologías de estudio y gestión del tiempo",
        points: [
          "Técnica Pomodoro o bloques de estudio de 45-50 min con descansos cortos mejora retención en ramos de cálculo.",
          "Planificar por semana cruzando fechas de pruebas de todos los ramos evita acumulación al final del semestre.",
        ],
      },
      {
        title: "Estructura de la malla curricular y especialidades",
        points: [
          "La malla se organiza en 4 años / 8 semestres con un plan común inicial y profundización progresiva en mecánica.",
        ],
      },
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
      {
        title: "Redacción de informes técnicos",
        points: [
          "Estructura típica: portada, resumen/objetivos, marco teórico, metodología, resultados, discusión, conclusiones, referencias.",
          "Resultados se presentan con tablas/gráficos numerados y referenciados en el texto ('ver Figura 1').",
          "La conclusión debe responder directamente al objetivo planteado, sin información nueva.",
        ],
      },
      {
        title: "Comunicación oral y presentaciones",
        points: [
          "Una presentación técnica clara prioriza una idea por diapositiva y apoya con gráficos, no párrafos largos.",
        ],
      },
      {
        title: "Normas de citación y referencias",
        points: [
          "Formato más usado en ingeniería: APA o IEEE, según lo pida la cátedra.",
          "Toda figura, tabla o dato que no sea propio debe citarse para evitar plagio.",
        ],
      },
      {
        title: "Trabajo colaborativo y retroalimentación",
        points: [
          "Recibir y dar retroalimentación constructiva es una habilidad que se evalúa tanto como el contenido del trabajo.",
        ],
      },
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
      {
        title: "Acondicionamiento físico general",
        points: [
          "Suele evaluarse con pruebas físicas básicas (resistencia, fuerza) más asistencia y actitud.",
        ],
      },
      {
        title: "Trabajo en equipo y disciplina deportiva",
        points: [
          "El componente práctico cubre nociones de salud, hábitos de vida activa y trabajo en equipo.",
        ],
      },
    ],
    tips: ["Asistencia y constancia suelen ser el criterio principal de evaluación."],
  },

  // ===== AÑO 1 - SEMESTRE 2 =====
  {
    id: "mate-aplicada-1", name: "Matemática Aplicada I", year: 1, semester: 2, area: "mate",
    summary: "Cálculo diferencial e integral de una variable.",
    topics: [
      {
        title: "Límites y continuidad",
        points: [
          "Una función es continua en x=a si existe f(a), existe el límite en a, y ambos coinciden.",
          "Formas indeterminadas (0/0, ∞/∞) se resuelven factorizando, racionalizando o con L'Hôpital (si ya se vio derivadas).",
          "Límites al infinito describen asíntotas horizontales; importantes para entender comportamiento de funciones.",
        ],
      },
      {
        title: "Derivadas: reglas, regla de la cadena, derivación implícita",
        points: [
          "Regla de la cadena: d/dx[f(g(x))] = f'(g(x))·g'(x) — la más usada en problemas compuestos.",
          "Derivación implícita: deriva ambos lados respecto a x, tratando y como función de x (dy/dx aparece como incógnita).",
        ],
        formulas: ["Regla de la cadena: (f∘g)'(x) = f'(g(x))·g'(x)", "Derivada de potencia: d/dx[xⁿ] = n·xⁿ⁻¹"],
      },
      {
        title: "Aplicaciones de la derivada: máximos, mínimos, optimización",
        points: [
          "Para optimizar: deriva, iguala a 0, encuentra puntos críticos, usa segunda derivada o tabla de signos para clasificar máx/mín.",
          "En problemas de contexto físico, primero plantea la función a optimizar en una sola variable usando las restricciones dadas.",
        ],
      },
      {
        title: "Integral indefinida: técnicas de integración básicas",
        points: [
          "Integral = antiderivada; siempre agrega +C en la indefinida.",
          "Sustitución (cambio de variable) es la técnica más usada: busca una función y su derivada presente en el integrando.",
          "Integración por partes: ∫u dv = uv − ∫v du; elige 'u' con la regla LIATE (logarítmica, inversa trig., algebraica, trig., exponencial).",
        ],
        formulas: ["Integración por partes: ∫u dv = uv − ∫v du"],
      },
      {
        title: "Integral definida y Teorema Fundamental del Cálculo",
        points: [
          "El Teorema Fundamental del Cálculo conecta área bajo la curva con la antiderivada evaluada en los límites.",
        ],
        formulas: ["TFC: ∫ₐᵇ f(x) dx = F(b) − F(a)"],
      },
      {
        title: "Aplicaciones: áreas, volúmenes de revolución",
        points: [
          "Área entre curvas: integra la diferencia (curva superior − curva inferior) en el intervalo de intersección.",
          "Volumen de revolución por discos: gira la región alrededor de un eje y suma discos de área π·r².",
        ],
        formulas: ["Volumen de revolución (discos): V = π∫ₐᵇ [f(x)]² dx"],
      },
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
      {
        title: "Cinemática en 1D y 2D (MRU, MRUA, tiro parabólico)",
        points: [
          "MRUA: v = v₀ + at; x = x₀ + v₀t + ½at²; v² = v₀² + 2aΔx — las tres ecuaciones que resuelven casi todo.",
          "Tiro parabólico: descompón en eje X (velocidad constante) y eje Y (MRUA con g); el tiempo de vuelo conecta ambos ejes.",
        ],
        formulas: ["v = v₀ + at", "x = x₀ + v₀t + ½at²", "v² = v₀² + 2aΔx"],
        diagram: "velocityTime",
      },
      {
        title: "Leyes de Newton y diagramas de cuerpo libre",
        points: [
          "Diagrama de cuerpo libre: dibuja SOLO el cuerpo y todas las fuerzas externas que actúan sobre él (peso, normal, tensión, fricción, aplicada).",
          "ΣF = ma en cada eje; en planos inclinados conviene rotar los ejes paralelo/perpendicular al plano.",
          "Fricción estática máxima = μₛN; fricción cinética = μₖN (μₖ < μₛ generalmente).",
        ],
        formulas: ["ΣF = m·a"],
        diagram: "freeBody",
      },
      {
        title: "Trabajo, energía y conservación de energía",
        points: [
          "Trabajo W = F·d·cosθ; teorema trabajo-energía: W_neto = ΔEc.",
          "Energía mecánica se conserva si no hay fricción ni fuerzas no conservativas.",
        ],
        formulas: ["W = F·d·cosθ", "Ec = ½mv²", "Ep = mgh"],
      },
      {
        title: "Momentum lineal y choques",
        points: [
          "Choques elásticos conservan momentum y energía cinética; los inelásticos solo conservan momentum.",
        ],
        formulas: ["p = m·v"],
      },
      {
        title: "Torque, momento angular y equilibrio de cuerpo rígido",
        points: [
          "Condición de equilibrio: ΣF = 0 y ΣTorque = 0 respecto a cualquier punto elegido.",
          "Elegir el punto de pivote en una fuerza desconocida elimina su torque y simplifica el sistema de ecuaciones.",
        ],
        formulas: ["Torque: τ = F·d·senθ"],
      },
      {
        title: "Gravitación y movimiento circular",
        points: [
          "En movimiento circular uniforme, la fuerza neta apunta al centro (fuerza centrípeta): Fc = mv²/r.",
        ],
        formulas: ["Fc = m·v² / r"],
      },
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
      {
        title: "Ciclos termodinámicos Otto y Diésel (introducción)",
        points: [
          "Admisión: válvula de admisión abierta, pistón baja, entra mezcla aire-combustible (u aire en diésel).",
          "Compresión: ambas válvulas cerradas, pistón sube, comprime la mezcla/aire.",
          "Explosión (combustión): bujía enciende (Otto) o autoencendido por compresión (Diésel); el pistón es empujado hacia abajo — es el único tiempo que entrega trabajo.",
          "Escape: válvula de escape abierta, pistón sube y expulsa los gases quemados.",
          "Otto: encendido por chispa (bujía), relación de compresión más baja (~8-12:1), usa mezcla aire-combustible premezclada.",
          "Diésel: autoencendido por compresión, relación de compresión alta (~14-22:1), inyecta combustible directamente en el aire ya comprimido.",
        ],
        formulas: ["Relación de compresión: rc = (Vd + Vc) / Vc", "Cilindrada unitaria: Vd = (π/4)·D²·L"],
        diagram: "fourStroke",
      },
      {
        title: "Componentes: bloque, culata, pistón, biela, cigüeñal",
        points: [
          "El bloque aloja los cilindros; la culata cierra la parte superior y contiene válvulas y cámaras de combustión.",
          "La biela transforma el movimiento lineal del pistón en movimiento rotatorio del cigüeñal.",
        ],
      },
      {
        title: "Sistemas de distribución, lubricación y refrigeración",
        points: [
          "Distribución: sincroniza apertura/cierre de válvulas con la posición del pistón mediante correa/cadena de tiempo.",
          "Lubricación: reduce fricción y desgaste, evacúa calor parcialmente; presión típica monitoreada por sensor.",
          "Refrigeración: por agua (radiador, bomba, termostato) o por aire; mantiene temperatura óptima de operación.",
        ],
      },
      {
        title: "Sistemas de alimentación e inyección",
        points: [
          "Sistema de alimentación lleva combustible desde el estanque hasta la cámara de combustión, con filtrado y presurización.",
          "Inyección electrónica dosifica con precisión el combustible según RPM y carga del motor.",
        ],
      },
      {
        title: "Diagnóstico básico de fallas",
        points: [
          "Diagnosticar = relacionar síntoma (no enciende, sobrecalienta, pierde potencia) con el sistema responsable.",
        ],
      },
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
      {
        title: "Circuitos eléctricos básicos: Ley de Ohm, Kirchhoff",
        points: [
          "Ley de Ohm: V = I·R, relaciona voltaje, corriente y resistencia.",
          "Ley de corrientes de Kirchhoff (LCK): la suma de corrientes que entra a un nodo = suma que sale.",
          "Ley de voltajes de Kirchhoff (LVK): la suma de voltajes en una malla cerrada es cero.",
          "Resistencias en serie se suman; en paralelo se combinan como inversos.",
        ],
        formulas: ["V = I·R", "P = V·I = I²R = V²/R", "Req(serie) = R1 + R2 + ...", "1/Req(paralelo) = 1/R1 + 1/R2 + ..."],
        diagram: "circuit",
      },
      {
        title: "Corriente continua y alterna",
        points: [
          "Corriente continua: magnitud y sentido constantes (baterías).",
          "Corriente alterna: varía senoidalmente en el tiempo, caracterizada por frecuencia (Hz) y voltaje RMS.",
        ],
      },
      {
        title: "Motores eléctricos: principios de funcionamiento",
        points: [
          "Principio básico: un conductor con corriente en un campo magnético experimenta una fuerza (Ley de Lorentz/regla de la mano derecha).",
          "Motor DC simple: bobina gira por interacción entre su campo magnético y el del imán/estator fijo.",
          "Esto es la base conceptual para entender motores de inducción en Redes Máquinas Eléctricas (semestre 3).",
        ],
      },
      {
        title: "Sensores y actuadores electromecánicos",
        points: [
          "Sensor convierte una magnitud física (temperatura, presión, posición) en señal eléctrica.",
          "Actuador hace lo inverso: convierte señal eléctrica en acción mecánica (movimiento, fuerza).",
        ],
      },
      {
        title: "Mantenimiento eléctrico básico",
        points: [
          "Incluye inspección de conexiones, medición de aislamiento y verificación de continuidad con multímetro.",
        ],
      },
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
      {
        title: "Tipos de mantenimiento: correctivo, preventivo, predictivo",
        points: [
          "Correctivo: se interviene cuando ya ocurrió la falla (mayor costo y riesgo de paradas no planificadas).",
          "Preventivo: intervención programada en base a tiempo o uso, antes de que falle (ej. cambio de aceite cada X horas).",
          "Predictivo: se monitorean variables (vibración, temperatura, aceite) para predecir la falla antes de que ocurra.",
        ],
      },
      {
        title: "Indicadores de mantenimiento (MTBF, MTTR, disponibilidad)",
        points: [
          "MTBF (Mean Time Between Failures): tiempo promedio entre fallas — mide confiabilidad.",
          "MTTR (Mean Time To Repair): tiempo promedio de reparación — mide capacidad de respuesta.",
          "Disponibilidad = MTBF / (MTBF + MTTR): proporción de tiempo que el equipo está operativo.",
        ],
        formulas: [
          "Disponibilidad = MTBF / (MTBF + MTTR)",
          "MTBF = Tiempo total de operación / N° de fallas",
          "MTTR = Tiempo total de reparación / N° de reparaciones",
        ],
        diagram: "mtbfTimeline",
      },
      {
        title: "Órdenes de trabajo y planificación básica",
        points: [
          "La orden de trabajo (OT) formaliza una intervención: equipo, falla/tarea, repuestos, tiempo, responsable.",
          "Es la base de los sistemas CMMS (software de gestión de mantenimiento) usados en la industria real.",
        ],
      },
      {
        title: "Seguridad en intervenciones de mantenimiento",
        points: [
          "Todo trabajo de mantenimiento debe partir con bloqueo/etiquetado (LOTO) de la energía del equipo.",
        ],
      },
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
