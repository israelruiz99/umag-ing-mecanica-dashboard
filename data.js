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
      {
        title: "Transformadores: principio y relación de transformación",
        points: [
          "Un transformador cambia el nivel de voltaje manteniendo la potencia (idealmente) mediante inducción electromagnética entre dos bobinados.",
          "La relación de transformación depende del número de vueltas de cada bobinado.",
        ],
        formulas: ["V1/V2 = N1/N2 = I2/I1"],
      },
      {
        title: "Motores asíncronos (inducción) y síncronos",
        points: [
          "Motor de inducción: el rotor gira a una velocidad menor que el campo magnético del estator (desliz > 0).",
          "Motor síncrono: el rotor gira exactamente a la velocidad del campo magnético (sin desliz).",
          "La velocidad síncrona depende de la frecuencia de la red y el número de polos del motor.",
        ],
        formulas: ["Ns = 120·f / p", "Desliz: s = (Ns − Nr)/Ns"],
      },
      {
        title: "Sistemas trifásicos: estrella y triángulo",
        points: [
          "Conexión estrella (Y): voltaje de línea es √3 veces el voltaje de fase.",
          "Conexión triángulo (Δ): voltaje de línea = voltaje de fase; corriente de línea es √3 veces la de fase.",
        ],
        formulas: ["P = √3 · VL · IL · cos φ", "Estrella: VL = √3·Vf", "Triángulo: IL = √3·If"],
      },
      {
        title: "Arranque y protección de motores",
        points: [
          "El arranque directo produce alta corriente inicial (5-7 veces la nominal); arranque estrella-triángulo la reduce.",
          "Protecciones típicas: térmico (sobrecarga), guardamotor, fusibles e interruptores diferenciales.",
        ],
      },
      {
        title: "Distribución eléctrica industrial básica",
        points: [
          "Un tablero de distribución reparte la energía desde la acometida hacia los distintos circuitos/equipos.",
        ],
      },
    ],
    tips: [
      "Practica cálculos trifásicos (potencia, corriente) con fórmulas siempre a mano.",
    ],
  },
  {
    id: "mecanica-fluidos", name: "Mecánica de los Fluidos", year: 2, semester: 3, area: "mecan",
    summary: "Estática y dinámica de fluidos aplicada a sistemas mecánicos.",
    topics: [
      {
        title: "Propiedades de los fluidos: densidad, viscosidad, presión",
        points: [
          "Densidad relaciona masa y volumen; viscosidad mide la resistencia interna del fluido a fluir.",
          "Presión = fuerza por unidad de área; en un fluido en reposo actúa igual en todas direcciones (principio de Pascal).",
        ],
        formulas: ["ρ = m / V", "P = F / A"],
      },
      {
        title: "Hidrostática: principio de Pascal, fuerzas sobre superficies",
        points: [
          "La presión hidrostática aumenta linealmente con la profundidad.",
          "Principio de Pascal: la presión aplicada a un fluido confinado se transmite íntegra a todo el fluido (base de prensas hidráulicas).",
        ],
        formulas: ["P = P0 + ρ·g·h"],
      },
      {
        title: "Ecuación de continuidad",
        points: [
          "En un flujo incompresible, el caudal se mantiene constante: a menor área, mayor velocidad.",
        ],
        formulas: ["Q = A·v = constante", "A1·v1 = A2·v2"],
      },
      {
        title: "Ecuación de Bernoulli y aplicaciones",
        points: [
          "Bernoulli relaciona presión, velocidad y altura a lo largo de una línea de corriente (conservación de energía en el fluido).",
          "Aplicaciones: tubo de Venturi, medidores de flujo, perfil de ala.",
        ],
        formulas: ["P1 + ½ρv1² + ρgh1 = P2 + ½ρv2² + ρgh2"],
      },
      {
        title: "Flujo en tuberías: pérdidas de carga (Darcy-Weisbach)",
        points: [
          "Las pérdidas de carga dependen de la longitud, diámetro, rugosidad de la tubería y velocidad del fluido.",
        ],
        formulas: ["hf = f · (L/D) · (v²/2g)"],
      },
      {
        title: "Número de Reynolds: flujo laminar vs turbulento",
        points: [
          "Re < 2300 → flujo laminar; Re > 4000 → flujo turbulento; entre ambos, zona de transición.",
        ],
        formulas: ["Re = ρ·v·D / μ"],
      },
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
      {
        title: "Desarme y documentación de componentes mecánicos",
        points: ["Documenta cada paso del desarme con fotos y orden de piezas para poder rearmar sin errores."],
      },
      {
        title: "Medición dimensional para reconstrucción de planos",
        points: ["Usa pie de metro, micrómetro y calibres para capturar cada cota antes de modelar en CAD."],
      },
      {
        title: "Identificación de materiales y procesos de fabricación",
        points: ["Las marcas de mecanizado, acabado superficial y geometría dan pistas del proceso de fabricación original."],
      },
      {
        title: "Reconstrucción CAD a partir de pieza física",
        points: ["El modelo 3D final debe reproducir tolerancias y ajustes funcionales, no solo la forma exterior."],
      },
    ],
    tips: [
      "Lleva siempre tus instrumentos de medición y registra todo en bitácora con fotos.",
    ],
  },
  {
    id: "admin-mantenimiento", name: "Administración de Mantenimiento", year: 2, semester: 3, area: "gest",
    summary: "Gestión, planificación y control de recursos para mantenimiento industrial.",
    topics: [
      {
        title: "Planificación y programación de mantenimiento",
        points: ["Planificar define QUÉ se hará; programar define CUÁNDO y con QUÉ recursos."],
      },
      {
        title: "Gestión de repuestos e inventario",
        points: ["Clasificar repuestos por criticidad (críticos, importantes, triviales) evita sobre-stock o quiebres de stock."],
      },
      {
        title: "Costos de mantenimiento",
        points: ["Costos directos (mano de obra, repuestos) + costos indirectos (parada de producción) componen el costo total."],
      },
      {
        title: "Indicadores de gestión (KPI) y mejora continua",
        points: ["KPI típicos: cumplimiento de plan, costo de mantenimiento/facturación, disponibilidad de equipos."],
      },
    ],
    tips: ["Conecta los conceptos con Mantenimiento Industrial (sem 2) y Estrategias del Mantenimiento (sem 5)."],
  },
  {
    id: "dibujo-1", name: "Dibujo I", year: 2, semester: 3, area: "diseno",
    summary: "Fundamentos de dibujo técnico y normalización para ingeniería.",
    topics: [
      {
        title: "Normas de dibujo técnico (ISO, escalas, formatos)",
        points: ["Las normas ISO estandarizan tipos de línea, formatos de hoja (A4, A3...) y escalas para que cualquier ingeniero lea el plano igual."],
      },
      {
        title: "Vistas ortogonales y proyección de planos",
        points: ["El método de proyección (primer o tercer ángulo) determina cómo se ubican las vistas (planta, alzado, perfil) entre sí."],
      },
      {
        title: "Cortes y secciones",
        points: ["Un corte revela geometría interna que no se ve en vista exterior; el rayado indica el material seccionado."],
      },
      {
        title: "Acotado y tolerancias básicas",
        points: ["Cada cota se coloca una sola vez y en la vista donde la geometría se ve más clara, evitando cotas redundantes."],
      },
      {
        title: "Introducción a software CAD 2D",
        points: ["Dominar capas, tipos de línea y bloques en CAD acelera mucho la elaboración de planos."],
      },
    ],
    tips: [
      "Practica proyección de vistas a mano antes de usar el software: ayuda a visualizar en 3D.",
    ],
  },
  {
    id: "ingles-tecnico", name: "Inglés Técnico", year: 2, semester: 3, area: "idioma",
    summary: "Vocabulario técnico en inglés para lectura de manuales y normas.",
    topics: [
      {
        title: "Vocabulario de mecánica, materiales y procesos en inglés",
        points: ["Aprende los términos en familias (fasteners, bearings, welding) en vez de listas sueltas: se memoriza mejor por contexto."],
      },
      {
        title: "Lectura de manuales técnicos y datasheets",
        points: ["Los datasheets siguen una estructura predecible: specs, dimensiones, condiciones de operación — aprende a escanearlos rápido."],
      },
      {
        title: "Comprensión de normas internacionales en inglés",
        points: ["Normas como ASTM o ASME usan inglés técnico estandarizado, útil reconocer abreviaturas comunes (min., max., approx.)."],
      },
    ],
    tips: ["Lee datasheets de componentes reales (rodamientos, motores) para practicar contexto técnico."],
  },

  // ===== AÑO 2 - SEMESTRE 4 =====
  {
    id: "mate-aplicada-2", name: "Matemática Aplicada II", year: 2, semester: 4, area: "mate",
    summary: "Cálculo multivariable, ecuaciones diferenciales y series.",
    topics: [
      {
        title: "Funciones de varias variables y derivadas parciales",
        points: ["La derivada parcial mide la razón de cambio respecto a una variable, manteniendo las demás constantes."],
        formulas: ["∂f/∂x: deriva tratando y, z,... como constantes"],
      },
      {
        title: "Integrales múltiples (dobles)",
        points: ["La integral doble calcula volumen bajo una superficie sobre una región del plano; se resuelve como integrales iteradas."],
        formulas: ["∬_R f(x,y) dA = ∫∫ f(x,y) dy dx"],
      },
      {
        title: "Ecuaciones diferenciales ordinarias de primer y segundo orden",
        points: [
          "EDO de primer orden: variables separables o factor integrante son los métodos más comunes.",
          "EDO de segundo orden lineal homogénea: se resuelve con la ecuación característica.",
        ],
        formulas: ["ay'' + by' + cy = 0  →  ecuación característica: ar² + br + c = 0"],
      },
      {
        title: "Aplicaciones a sistemas físicos (vibraciones, enfriamiento)",
        points: ["La ley de enfriamiento de Newton y los sistemas masa-resorte se modelan con EDOs de 1er y 2do orden respectivamente."],
        formulas: ["Enfriamiento: dT/dt = −k(T − Tamb)"],
      },
      {
        title: "Series y aproximaciones (introducción)",
        points: ["Las series de Taylor permiten aproximar funciones complejas con polinomios cerca de un punto."],
      },
    ],
    tips: [
      "Las EDOs de segundo orden reaparecen en Cinemática de Máquinas y vibraciones mecánicas.",
    ],
  },
  {
    id: "hidraulica-neumatica", name: "Hidráulica y Neumática", year: 2, semester: 4, area: "mecan",
    summary: "Sistemas de transmisión de potencia mediante fluidos a presión y aire comprimido.",
    topics: [
      {
        title: "Componentes hidráulicos: bombas, válvulas, cilindros",
        points: ["La bomba genera caudal (no presión directamente); la presión surge de la resistencia del circuito."],
      },
      {
        title: "Circuitos hidráulicos y simbología ISO",
        points: ["Cada símbolo ISO representa función, no forma física: aprende a leer dirección de flujo y accionamiento de válvulas."],
      },
      {
        title: "Componentes neumáticos: compresores, actuadores",
        points: ["El aire comprimido es compresible, a diferencia del aceite hidráulico: esto hace los sistemas neumáticos más elásticos pero menos precisos."],
      },
      {
        title: "Circuitos neumáticos básicos y secuenciales",
        points: ["Los circuitos secuenciales usan sensores de fin de carrera para encadenar movimientos de varios cilindros en orden."],
      },
      {
        title: "Cálculo de fuerza, caudal y presión en cilindros",
        points: ["La fuerza de un cilindro depende del área del pistón y la presión de trabajo; el área en retroceso es menor (por el vástago)."],
        formulas: ["F = P · A", "Q = A · v (velocidad del vástago)"],
      },
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
      {
        title: "Diodos, transistores y amplificadores básicos",
        points: ["El diodo conduce en un solo sentido; el transistor actúa como interruptor o amplificador controlado por corriente/voltaje."],
      },
      {
        title: "Álgebra de Boole y compuertas lógicas",
        points: ["AND, OR, NOT son la base; cualquier función lógica se puede construir combinándolas (o con NAND/NOR universales)."],
        formulas: ["AND: Y = A·B", "OR: Y = A+B", "NOT: Y = Ā"],
      },
      {
        title: "Circuitos combinacionales y secuenciales",
        points: ["Combinacional: la salida depende solo de las entradas actuales. Secuencial: depende también del estado anterior (tiene memoria, ej. flip-flops)."],
      },
      {
        title: "Conversión análogo-digital (ADC/DAC)",
        points: ["El ADC discretiza una señal continua en niveles digitales; la resolución (bits) define la precisión de esa conversión."],
      },
      {
        title: "Introducción a microcontroladores/PLC",
        points: ["Un microcontrolador integra procesador, memoria y E/S en un solo chip, ideal para control embebido simple."],
      },
    ],
    tips: [
      "El álgebra de Boole es clave para Automatización Industrial más adelante.",
    ],
  },
  {
    id: "ingles-conversacional", name: "Inglés Conversacional", year: 2, semester: 4, area: "idioma",
    summary: "Desarrollo de fluidez oral en inglés con foco en contextos técnicos y laborales.",
    topics: [
      { title: "Conversación cotidiana y profesional", points: ["Practica diálogos de entrevista de trabajo y reuniones técnicas: son los contextos más evaluados."] },
      { title: "Presentaciones orales en inglés", points: ["Estructura: introducción, desarrollo con 2-3 puntos clave, conclusión — igual que en español pero con vocabulario técnico en inglés."] },
      { title: "Listening con material técnico-industrial", points: ["Videos de procesos industriales con subtítulos en inglés son buen material de práctica de oído."] },
    ],
    tips: ["Practica presentaciones de tus propios proyectos en inglés, se reutiliza para CV/entrevistas."],
  },
  {
    id: "metrologia", name: "Metrología y Tecnología Mecánica", year: 2, semester: 4, area: "mecan",
    summary: "Principios de medición dimensional y control de calidad en manufactura.",
    topics: [
      {
        title: "Instrumentos de medición: pie de metro, micrómetro, comparador",
        points: ["El pie de metro mide con resolución de 0,02-0,05 mm; el micrómetro llega a 0,01 mm o menos para mayor precisión."],
      },
      {
        title: "Tolerancias dimensionales y geométricas (GD&T básico)",
        points: ["La tolerancia define el rango aceptable de una medida; GD&T además controla forma, orientación y posición."],
      },
      {
        title: "Calibración y trazabilidad metrológica",
        points: ["Todo instrumento debe calibrarse contra un patrón trazable a un estándar nacional/internacional."],
      },
      {
        title: "Control estadístico de procesos (introducción)",
        points: ["Las cartas de control detectan si un proceso de fabricación se mantiene dentro de límites estadísticos esperados."],
      },
    ],
    tips: [
      "Practica lectura de pie de metro y micrómetro hasta leerlos sin dudar: es habilidad evaluada en taller.",
    ],
  },
  {
    id: "tec-materiales", name: "Tecnología de los Materiales", year: 2, semester: 4, area: "mater",
    summary: "Estructura, propiedades y selección de materiales de ingeniería.",
    topics: [
      {
        title: "Estructura cristalina de metales",
        points: ["Las estructuras BCC, FCC y HCP determinan propiedades mecánicas como ductilidad y resistencia."],
      },
      {
        title: "Diagramas de fase (ej. Fe-C)",
        points: ["El diagrama Fe-C muestra qué fases (ferrita, austenita, cementita) existen según %C y temperatura — clave para entender aceros."],
      },
      {
        title: "Tratamientos térmicos: temple, revenido, recocido",
        points: [
          "Temple: enfriamiento rápido que aumenta dureza pero también fragilidad.",
          "Revenido: se aplica después del temple para reducir fragilidad manteniendo dureza razonable.",
          "Recocido: ablanda el material y elimina tensiones internas.",
        ],
      },
      {
        title: "Propiedades mecánicas: dureza, ductilidad, tenacidad",
        points: ["Dureza resiste la penetración; ductilidad permite deformarse sin romper; tenacidad absorbe energía de impacto antes de fracturar."],
      },
      {
        title: "Ensayos de materiales (tracción, dureza, impacto)",
        points: ["El ensayo de tracción entrega el diagrama esfuerzo-deformación, de donde se obtiene E, Sy y Su."],
      },
      {
        title: "Selección de materiales según aplicación",
        points: ["La selección balancea propiedades mecánicas, costo, disponibilidad y resistencia ambiental (corrosión, temperatura)."],
      },
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
      { title: "Modelado 3D paramétrico (CAD)", points: ["El modelado paramétrico usa cotas y relaciones (restricciones) que permiten editar la pieza cambiando valores, no rehaciendo la geometría."] },
      { title: "Ensambles y despieces", points: ["El ensamble define relaciones de posición entre piezas (coincidente, concéntrico, distancia); el despiece lista cada componente con cantidad."] },
      { title: "Planos de fabricación y de detalle", points: ["El plano de detalle debe incluir toda la información para fabricar la pieza sin ambigüedad: cotas, tolerancias, acabado, material."] },
      { title: "Tolerancias y ajustes (sistema agujero/eje base)", points: ["Sistema agujero base: el agujero mantiene tolerancia fija y el eje se ajusta; es el más usado en la industria."] },
    ],
    tips: ["Guarda tus modelos CAD: te servirán de base para Diseños Mecánicos en semestre 7."],
  },

  // ===== AÑO 3 - SEMESTRE 5 =====
  {
    id: "econ-adm-empresas", name: "Economía y Adm. de Empresas", year: 3, semester: 5, area: "gest",
    summary: "Conceptos de economía y administración aplicados a la gestión industrial.",
    topics: [
      { title: "Principios de oferta y demanda", points: ["El precio de equilibrio surge donde la cantidad ofrecida iguala a la demandada."] },
      { title: "Estructura organizacional de empresas", points: ["Estructuras funcionales, divisionales o matriciales definen cómo fluye la autoridad y la comunicación."] },
      {
        title: "Costos, ingresos y punto de equilibrio",
        points: ["El punto de equilibrio es donde los ingresos totales igualan a los costos totales (ni gana ni pierde)."],
        formulas: ["Punto de equilibrio (unidades) = Costos fijos / (Precio − Costo variable unitario)"],
      },
      { title: "Indicadores financieros básicos", points: ["Liquidez, rentabilidad y endeudamiento son las tres familias básicas de indicadores financieros."] },
    ],
    tips: ["Relaciona el punto de equilibrio con decisiones de mantenimiento (reparar vs reemplazar)."],
  },
  {
    id: "mecanica-general", name: "Mecánica General", year: 3, semester: 5, area: "mecan",
    summary: "Estática y dinámica aplicada de cuerpos rígidos y sistemas mecánicos.",
    topics: [
      {
        title: "Equilibrio de cuerpos rígidos en 2D y 3D",
        points: ["En 3D se agregan ecuaciones de momento en cada eje: 6 ecuaciones de equilibrio en total (3 fuerza + 3 momento)."],
        formulas: ["ΣFx=0, ΣFy=0, ΣFz=0, ΣMx=0, ΣMy=0, ΣMz=0"],
      },
      {
        title: "Análisis de estructuras: armaduras y marcos",
        points: ["Método de nodos: equilibrio en cada nudo. Método de secciones: corta la armadura y analiza el equilibrio de una parte."],
      },
      {
        title: "Centro de masa y momentos de inercia",
        points: ["El momento de inercia mide la resistencia a la rotación; depende de cómo se distribuye la masa respecto al eje."],
        formulas: ["I = ∫r² dm"],
      },
      {
        title: "Dinámica de partículas y cuerpos rígidos",
        points: ["Para rotación: el equivalente de F=ma es el torque neto igual al momento de inercia por la aceleración angular."],
        formulas: ["ΣΤ = I·α"],
      },
      {
        title: "Fricción en sistemas mecánicos",
        points: ["El ángulo de fricción y el coeficiente μ determinan si un cuerpo desliza o permanece en reposo bajo una fuerza dada."],
      },
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
      { title: "Layout de planta y distribución de procesos", points: ["Un buen layout minimiza el recorrido de materiales y cruces de flujo entre estaciones de trabajo."] },
      { title: "Diagramas de flujo de proceso (PFD)", points: ["El PFD representa equipos principales y su secuencia, sin todo el detalle de instrumentación (eso lo cubre el P&ID después)."] },
      { title: "Capacidad de planta y balance de líneas", points: ["El cuello de botella es la estación más lenta de la línea; define la capacidad máxima de todo el sistema."] },
      { title: "Eficiencia y productividad industrial", points: ["La eficiencia global de equipo (OEE) combina disponibilidad, rendimiento y calidad en un solo indicador."] },
    ],
    tips: ["Practica leer e interpretar diagramas PFD/P&ID, se repiten en Instrumentación y Control."],
  },
  {
    id: "automatizacion", name: "Automatización Industrial", year: 3, semester: 5, area: "elec",
    summary: "Sistemas automáticos de control aplicados a procesos industriales.",
    topics: [
      { title: "Lógica de control con PLC", points: ["El PLC ejecuta un ciclo de barrido continuo: lee entradas, ejecuta el programa, actualiza salidas."] },
      { title: "Sensores y actuadores industriales", points: ["Sensores típicos: inductivos, capacitivos, fotoeléctricos; actuadores: cilindros, motores, electroválvulas."] },
      { title: "Diagramas de escalera (ladder)", points: ["Cada 'peldaño' representa una condición lógica que activa una salida; se lee de izquierda a derecha, de arriba a abajo."] },
      { title: "Sistemas de control secuencial", points: ["Una secuencia encadena pasos donde cada uno depende de que el anterior haya finalizado (confirmado por sensores)."] },
      { title: "Introducción a SCADA", points: ["SCADA supervisa y controla procesos a distancia, mostrando datos en tiempo real desde los PLC de campo."] },
    ],
    tips: ["Practica programación ladder en simulador, es la habilidad más evaluada en pruebas prácticas."],
  },
  {
    id: "soldadura-calidad", name: "Soldadura y Control de Calidad", year: 3, semester: 5, area: "mater",
    summary: "Procesos de soldadura industrial y métodos de control de calidad asociados.",
    topics: [
      {
        title: "Procesos de soldadura: SMAW, MIG/MAG, TIG",
        points: [
          "SMAW (electrodo revestido): versátil, usado en terreno, requiere más habilidad manual.",
          "MIG/MAG: alambre continuo, mayor productividad, bueno para producción en serie.",
          "TIG: mayor calidad y control, usado en materiales finos o aceros inoxidables.",
        ],
      },
      { title: "Defectos de soldadura y su prevención", points: ["Porosidad, falta de fusión, socavado y grietas son los defectos más comunes; cada uno tiene causas específicas de parámetro o técnica."] },
      { title: "Ensayos no destructivos (END): tintas penetrantes, ultrasonido, radiografía", points: ["Tintas penetrantes detectan defectos superficiales; ultrasonido y radiografía detectan defectos internos."] },
      { title: "Normas de calidad en soldadura (AWS, ASME)", points: ["Estas normas definen criterios de aceptación/rechazo y calificación de soldadores."] },
    ],
    tips: ["Asocia cada defecto de soldadura con su causa raíz: es típico en preguntas de diagnóstico."],
  },
  {
    id: "estrategias-mant", name: "Estrategias del Mantenimiento", year: 3, semester: 5, area: "gest",
    summary: "Metodologías avanzadas de gestión de mantenimiento (RCM, TPM, etc.).",
    topics: [
      { title: "Mantenimiento Centrado en Confiabilidad (RCM)", points: ["RCM pregunta: ¿cómo puede fallar el equipo, qué consecuencia tiene cada falla y qué tarea de mantenimiento la previene mejor?"] },
      { title: "Mantenimiento Productivo Total (TPM)", points: ["TPM involucra al operador en mantenimiento básico diario (limpieza, lubricación, inspección) para detectar fallas tempranamente."] },
      { title: "Análisis de fallas (FMEA, causa raíz)", points: ["FMEA evalúa cada modo de falla por severidad, ocurrencia y detección para priorizar acciones preventivas."] },
      { title: "Mantenimiento predictivo: vibraciones, termografía", points: ["El análisis de vibraciones detecta desalineación, desbalance o desgaste de rodamientos antes de la falla catastrófica."] },
    ],
    tips: ["Compara RCM vs TPM con un cuadro propio: es pregunta clásica de evaluación conceptual."],
  },

  // ===== AÑO 3 - SEMESTRE 6 =====
  {
    id: "decisiones-econ", name: "Decisiones Económicas", year: 3, semester: 6, area: "gest",
    summary: "Evaluación económica de proyectos e ingeniería económica.",
    topics: [
      {
        title: "Valor del dinero en el tiempo",
        points: ["Un peso hoy vale más que un peso mañana por su capacidad de generar interés/rentabilidad."],
        formulas: ["Valor futuro: VF = VP·(1+i)ⁿ"],
      },
      {
        title: "VAN y TIR",
        points: [
          "VAN positivo indica que el proyecto genera valor por sobre la tasa de descuento exigida.",
          "TIR es la tasa de descuento que hace VAN = 0; si TIR > tasa exigida, el proyecto conviene.",
        ],
        formulas: ["VAN = Σ [Ft / (1+i)^t] − Inversión inicial"],
      },
      { title: "Análisis costo-beneficio de proyectos de ingeniería", points: ["Compara beneficios totales versus costos totales, considerando el valor del dinero en el tiempo."] },
      {
        title: "Depreciación y reemplazo de activos",
        points: ["La depreciación lineal reparte el costo de un activo en partes iguales durante su vida útil."],
        formulas: ["Depreciación lineal = (Costo inicial − Valor residual) / Vida útil"],
      },
    ],
    tips: ["Practica VAN/TIR con calculadora financiera o Excel: son cálculo seguro en examen."],
  },
  {
    id: "resistencia-materiales", name: "Resistencia de Materiales", year: 3, semester: 6, area: "mecan",
    summary: "Análisis de esfuerzos, deformaciones y diseño a falla de elementos mecánicos.",
    topics: [
      {
        title: "Esfuerzo y deformación: tracción, compresión, corte",
        points: ["El esfuerzo es fuerza por unidad de área; la deformación unitaria es el alargamiento relativo respecto a la longitud original."],
        formulas: ["σ = F/A", "ε = ΔL/L₀", "Ley de Hooke: σ = E·ε"],
      },
      {
        title: "Diagramas de esfuerzo cortante y momento flector",
        points: ["El diagrama de momento es la integral del diagrama de corte; los puntos de corte=0 suelen ser máximos/mínimos de momento."],
      },
      {
        title: "Flexión y torsión de vigas y ejes",
        points: ["El esfuerzo de flexión es máximo en la fibra más alejada del eje neutro."],
        formulas: ["Flexión: σ = M·c / I", "Torsión: τ = T·r / J"],
      },
      {
        title: "Esfuerzos combinados y círculo de Mohr",
        points: ["El círculo de Mohr permite encontrar esfuerzos principales y el esfuerzo cortante máximo gráficamente."],
        formulas: ["σ_prom = (σx+σy)/2", "R = √[((σx−σy)/2)² + τxy²]"],
      },
      {
        title: "Pandeo de columnas",
        points: ["Columnas esbeltas fallan por pandeo antes de alcanzar el esfuerzo de fluencia del material."],
        formulas: ["Carga crítica de Euler: Pcr = π²EI / (KL)²"],
      },
      {
        title: "Criterios de falla (Von Mises, Tresca)",
        points: ["Von Mises predice fluencia bajo esfuerzos combinados con mayor precisión que Tresca para materiales dúctiles."],
      },
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
      {
        title: "Primera ley: balance de energía en sistemas cerrados y abiertos",
        points: ["La primera ley es conservación de energía: el calor neto agregado menos el trabajo neto entregado es el cambio de energía interna."],
        formulas: ["ΔU = Q − W"],
      },
      {
        title: "Segunda ley: entropía y eficiencia",
        points: ["Ninguna máquina térmica puede ser 100% eficiente; siempre hay calor rechazado a un foco frío."],
        formulas: ["η = W_neto / Q_entrada = 1 − Qsalida/Qentrada"],
      },
      { title: "Propiedades de sustancias puras y tablas de vapor", points: ["Las tablas de vapor entregan propiedades (h, s, v) en función de presión/temperatura, esenciales para resolver ciclos."] },
      { title: "Ciclos de potencia: Rankine, Otto, Diésel, Brayton", points: ["Rankine usa vapor de agua (plantas térmicas); Otto/Diésel son de combustión interna; Brayton es el ciclo de turbinas a gas."] },
      { title: "Ciclos de refrigeración", points: ["El ciclo de refrigeración por compresión de vapor es el inverso de un ciclo de potencia: consume trabajo para mover calor de frío a caliente."] },
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
      { title: "Procesos de conformado: laminado, forjado, extrusión", points: ["Todos deforman el material plásticamente sin remover viruta, generalmente mejorando sus propiedades mecánicas por afinamiento del grano."] },
      { title: "Mecanizado: torneado, fresado, taladrado", points: ["Torneado: la pieza gira y la herramienta es fija. Fresado: la herramienta gira y se desplaza sobre la pieza fija."] },
      { title: "Fundición y moldeo", points: ["La fundición vierte metal líquido en un molde; permite geometrías complejas difíciles de mecanizar."] },
      { title: "Parámetros de corte y selección de herramientas", points: ["Velocidad de corte, avance y profundidad de pasada determinan acabado superficial, vida de herramienta y tiempo de mecanizado."] },
      { title: "Manufactura aditiva (introducción)", points: ["La impresión 3D construye la pieza capa por capa, ideal para prototipos o geometrías imposibles de mecanizar."] },
    ],
    tips: ["Relaciona cada proceso con el tipo de material y geometría de pieza más adecuada para él."],
  },
  {
    id: "cinematica-maquinas", name: "Cinemática de Máquinas", year: 3, semester: 6, area: "mecan",
    summary: "Análisis de movimiento de mecanismos: levas, engranajes y eslabonamientos.",
    topics: [
      { title: "Análisis de mecanismos de barras (4 barras)", points: ["El mecanismo de 4 barras es la base de muchos mecanismos más complejos; su movilidad se calcula con el criterio de Grashof."] },
      {
        title: "Engranajes: relación de transmisión, tipos",
        points: ["La relación de transmisión compara velocidades angulares (o número de dientes) entre engranaje motriz y conducido."],
        formulas: ["i = N1/N2 = ω2/ω1"],
      },
      { title: "Levas y seguidores", points: ["El perfil de la leva define la ley de movimiento (posición, velocidad, aceleración) del seguidor."] },
      { title: "Análisis de velocidad y aceleración en mecanismos", points: ["El método de centros instantáneos de rotación simplifica el análisis de velocidades en mecanismos planos."] },
      {
        title: "Trenes de engranajes",
        points: ["En un tren de engranajes, la relación total es el producto de las relaciones individuales de cada par."],
        formulas: ["i_total = i1 · i2 · i3 · ..."],
      },
    ],
    tips: ["Practica el método gráfico de velocidades/aceleraciones, suele pedirse paso a paso en pruebas."],
  },
  {
    id: "control-riesgo", name: "Control de Riesgo Operacional", year: 3, semester: 6, area: "trans",
    summary: "Gestión de prevención de riesgos y seguridad laboral en entornos industriales.",
    topics: [
      { title: "Identificación de peligros y evaluación de riesgos (IPER)", points: ["IPER evalúa cada peligro combinando probabilidad y consecuencia para priorizar controles."] },
      { title: "Normativa de seguridad laboral chilena", points: ["La Ley 16.744 regula accidentes del trabajo y enfermedades profesionales en Chile."] },
      { title: "Equipos de protección personal (EPP)", points: ["El EPP es la última línea de defensa: primero deben aplicarse controles de ingeniería y administrativos."] },
      { title: "Investigación de accidentes", points: ["El análisis de causa raíz busca la causa real detrás del incidente, no solo el síntoma inmediato."] },
    ],
    tips: ["Memoriza la matriz IPER: se usa como herramienta transversal en taller y prácticas."],
  },

  // ===== AÑO 4 - SEMESTRE 7 =====
  {
    id: "disenos-mecanicos", name: "Diseños Mecánicos", year: 4, semester: 7, area: "mecan",
    summary: "Diseño de elementos de máquinas: ejes, uniones, engranajes, rodamientos.",
    topics: [
      {
        title: "Diseño de ejes a fatiga y resistencia",
        points: ["La falla por fatiga ocurre a esfuerzos muy por debajo del esfuerzo de fluencia, debido a cargas cíclicas repetidas."],
        formulas: ["Factor de seguridad: FS = Sy / σ_trabajo"],
      },
      { title: "Uniones: pernos, soldadura, remaches", points: ["Los pernos se diseñan considerando precarga, fatiga y el patrón de torque de apriete."] },
      { title: "Selección de rodamientos", points: ["La selección se basa en carga, velocidad, vida útil deseada (L10) y condiciones ambientales."] },
      { title: "Diseño de engranajes y transmisiones", points: ["El diseño verifica resistencia a flexión del diente y resistencia superficial al contacto (picado)."] },
      { title: "Resortes y elementos elásticos", points: ["La constante de un resorte helicoidal depende del diámetro de alambre, diámetro medio y número de espiras."], formulas: ["F = k·x"] },
      { title: "Factores de seguridad y normas de diseño", points: ["El factor de seguridad elegido depende de la incertidumbre en cargas, materiales y consecuencias de una falla."] },
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
      {
        title: "Conducción: Ley de Fourier, resistencia térmica",
        points: ["La resistencia térmica permite tratar problemas de conducción como un circuito eléctrico equivalente."],
        formulas: ["q = −k·A·(dT/dx)", "R_cond = L / (k·A)"],
      },
      {
        title: "Convección natural y forzada",
        points: ["Forzada: el fluido se mueve por un agente externo (bomba/ventilador). Natural: el movimiento lo genera la diferencia de densidad por temperatura."],
        formulas: ["q = h·A·(Ts − T∞)"],
      },
      {
        title: "Radiación térmica",
        points: ["Todo cuerpo emite radiación según su temperatura absoluta a la cuarta potencia (ley de Stefan-Boltzmann)."],
        formulas: ["q = ε·σ·A·T⁴"],
      },
      { title: "Intercambiadores de calor: tipos y diseño (LMTD, NTU)", points: ["Flujo paralelo vs contracorriente: contracorriente logra mayor efectividad de intercambio para la misma área."] },
      { title: "Aletas y superficies extendidas", points: ["Las aletas aumentan el área de transferencia para mejorar la disipación de calor por convección."] },
    ],
    tips: ["Domina el concepto de resistencia térmica equivalente: simplifica casi todos los problemas."],
  },
  {
    id: "instrumentacion-control", name: "Instrumentación y Control Industrial", year: 4, semester: 7, area: "elec",
    summary: "Instrumentos de medición de procesos y lazos de control automático.",
    topics: [
      { title: "Sensores de presión, temperatura, flujo y nivel", points: ["Cada variable de proceso tiene tecnologías específicas: termopares/RTD para temperatura, transmisores piezoeléctricos para presión, etc."] },
      {
        title: "Lazos de control: P, PI, PID",
        points: [
          "Control P: respuesta proporcional al error, pero deja error residual (offset).",
          "Control PI: elimina el offset gracias al término integral.",
          "Control PID: agrega el término derivativo para anticipar y suavizar la respuesta.",
        ],
        formulas: ["Salida PID: u(t) = Kp·e(t) + Ki∫e(t)dt + Kd·de/dt"],
      },
      { title: "Diagramas P&ID", points: ["El P&ID detalla instrumentación, líneas de proceso y lazos de control, a diferencia del PFD que es más general."] },
      { title: "Sintonización básica de controladores", points: ["Sintonizar significa ajustar Kp, Ki, Kd para lograr una respuesta rápida, estable y sin oscilaciones excesivas."] },
    ],
    tips: ["Practica leer P&ID de principio a fin, identificando lazo de control y variable controlada."],
  },
  {
    id: "software-ingenieria", name: "Software de Ingeniería", year: 4, semester: 7, area: "trans",
    summary: "Herramientas de simulación y análisis computacional aplicadas a mecánica (CAE/FEA).",
    topics: [
      { title: "Modelado CAD avanzado", points: ["Un buen modelo paramétrico anticipa qué dimensiones cambiarán en el futuro y las deja como variables controlables."] },
      { title: "Simulación por elementos finitos (FEA): mallado, condiciones de borde", points: ["Una malla más fina da mayor precisión pero mayor costo computacional; refina solo en zonas críticas (concentradores de esfuerzo)."] },
      { title: "Análisis estático y de fatiga asistido por software", points: ["El software calcula esfuerzos y factor de seguridad, pero la correcta definición de cargas y restricciones es responsabilidad del ingeniero."] },
      { title: "Interpretación de resultados de simulación", points: ["Un resultado de simulación sin verificación manual aproximada puede esconder errores de configuración (cargas, apoyos, unidades)."] },
    ],
    tips: ["Valida siempre tus resultados de simulación con cálculo manual aproximado de Resistencia de Materiales."],
  },
  {
    id: "turbomaquinas", name: "Turbomáquinas", year: 4, semester: 7, area: "mecan",
    summary: "Principios y diseño de turbinas, bombas y compresores.",
    topics: [
      { title: "Clasificación de turbomáquinas (axiales, radiales)", points: ["Axiales: el flujo es paralelo al eje. Radiales (centrífugas): el flujo cambia de dirección axial a radial."] },
      { title: "Triángulos de velocidad", points: ["El triángulo de velocidad combina velocidad absoluta, relativa y tangencial del rotor; es la base del diseño de álabes."] },
      {
        title: "Bombas centrífugas: curvas características, cavitación",
        points: ["La cavitación ocurre cuando la presión local cae bajo la presión de vapor del fluido, dañando el rodete."],
        formulas: ["NPSH disponible > NPSH requerido (condición para evitar cavitación)"],
      },
      { title: "Turbinas hidráulicas, de vapor y de gas", points: ["Pelton (acción), Francis y Kaplan (reacción) se seleccionan según el salto y caudal disponible del recurso hídrico."] },
      { title: "Compresores centrífugos y axiales", points: ["Los compresores centrífugos manejan menor caudal a mayor relación de presión por etapa que los axiales."] },
    ],
    tips: ["Aprende a leer curvas características de bombas: pregunta recurrente en evaluaciones."],
  },

  // ===== AÑO 4 - SEMESTRE 8 =====
  {
    id: "proyecto-especialidad", name: "Proyecto de Especialidad", year: 4, semester: 8, area: "trans",
    summary: "Proyecto integrador aplicando conocimientos de toda la carrera a un caso real.",
    topics: [
      { title: "Definición de problema y alcance del proyecto", points: ["Un alcance bien definido evita que el proyecto crezca sin control ('scope creep') antes de la entrega final."] },
      { title: "Aplicación integrada de diseño, materiales y procesos", points: ["El proyecto debe demostrar dominio transversal: cálculo de resistencia, selección de material y proceso de fabricación coherentes entre sí."] },
      { title: "Evaluación técnico-económica del proyecto", points: ["Toda propuesta técnica debe justificarse también económicamente (costo, retorno, viabilidad)."] },
      { title: "Defensa y comunicación de resultados", points: ["La defensa evalúa tanto el resultado técnico como la capacidad de explicarlo y defenderlo ante preguntas."] },
    ],
    tips: ["Elige un tema que te apasione y conecte con tu futuro laboral: lo presentarás varias veces."],
  },
  {
    id: "liderazgo-situacional", name: "Técnicas de Liderazgo Situacional", year: 4, semester: 8, area: "trans",
    summary: "Habilidades blandas de liderazgo y gestión de equipos de trabajo.",
    topics: [
      { title: "Modelo de liderazgo situacional (Hersey-Blanchard)", points: ["El estilo de liderazgo (dirigir, persuadir, participar, delegar) debe adaptarse al nivel de madurez/competencia del colaborador."] },
      { title: "Comunicación efectiva y manejo de conflictos", points: ["La escucha activa y la retroalimentación específica reducen malentendidos y conflictos en equipos técnicos."] },
      { title: "Toma de decisiones en equipo", points: ["El consenso no siempre es la mejor vía; a veces decisiones técnicas requieren autoridad clara y rápida."] },
      { title: "Gestión de equipos técnicos", points: ["Gestionar técnicos requiere balancear autonomía (suelen ser expertos) con alineación a objetivos del proyecto."] },
    ],
    tips: ["Relaciona los estilos de liderazgo con casos reales de tu práctica o proyecto de especialidad."],
  },
  {
    id: "topicos-ingenieria", name: "Tópicos de Ingeniería", year: 4, semester: 8, area: "trans",
    summary: "Temas emergentes y de actualización en ingeniería mecánica.",
    topics: [
      { title: "Tendencias en manufactura 4.0 e Industria 4.0", points: ["IoT industrial, gemelos digitales y mantenimiento predictivo conectado son los pilares de la Industria 4.0."] },
      { title: "Sostenibilidad y eficiencia energética", points: ["La eficiencia energética en procesos industriales es hoy un criterio de diseño tan relevante como el costo o la resistencia."] },
      { title: "Nuevos materiales y tecnologías", points: ["Materiales compuestos y aleaciones avanzadas amplían las opciones de diseño más allá de los aceros tradicionales."] },
      { title: "Casos de estudio actuales del rubro", points: ["Analizar casos reales de la industria regional (minería, energía, pesca) conecta la teoría con el contexto laboral de Magallanes."] },
    ],
    tips: ["Mantente al día con noticias del sector industrial chileno y mundial durante el semestre."],
  },
];
