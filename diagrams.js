// Diagramas SVG ilustrativos reutilizados en las páginas de detalle de tema.

const DIAGRAMS = {
  parabola: () => `
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="190" x2="340" y2="190" stroke="#2A2D3A" stroke-width="1.5"/>
      <line x1="180" y1="20" x2="180" y2="200" stroke="#2A2D3A" stroke-width="1.5"/>
      <path d="M 40 180 Q 180 0 320 180" fill="none" stroke="#6C8CFF" stroke-width="3"/>
      <circle cx="180" cy="38" r="4.5" fill="#FF9F5A"/>
      <text x="190" y="34" fill="#FF9F5A" font-size="12" font-family="monospace">Vértice (x_v, y_v)</text>
      <text x="295" y="205" fill="#8A8D9B" font-size="12">x</text>
      <text x="188" y="32" fill="#8A8D9B" font-size="12"></text>
      <text x="160" y="14" fill="#8A8D9B" font-size="12">y</text>
    </svg>`,

  unitCircle: () => `
    <svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
      <circle cx="130" cy="130" r="100" fill="none" stroke="#2A2D3A" stroke-width="1.5"/>
      <line x1="10" y1="130" x2="250" y2="130" stroke="#2A2D3A" stroke-width="1.5"/>
      <line x1="130" y1="10" x2="130" y2="250" stroke="#2A2D3A" stroke-width="1.5"/>
      <line x1="130" y1="130" x2="201" y2="79" stroke="#6C8CFF" stroke-width="3"/>
      <path d="M 160 130 A 30 30 0 0 0 152 106" fill="none" stroke="#FF9F5A" stroke-width="2"/>
      <text x="166" y="112" fill="#FF9F5A" font-size="13" font-family="monospace">θ</text>
      <line x1="201" y1="79" x2="201" y2="130" stroke="#3FD0C9" stroke-width="2" stroke-dasharray="4 3"/>
      <line x1="130" y1="79" x2="201" y2="79" stroke="#5AD1A6" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="206" y="108" fill="#3FD0C9" font-size="12" font-family="monospace">sen θ</text>
      <text x="150" y="72" fill="#5AD1A6" font-size="12" font-family="monospace">cos θ</text>
      <circle cx="201" cy="79" r="4" fill="#6C8CFF"/>
    </svg>`,

  galvanicSeries: () => `
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" font-family="monospace">
      <text x="10" y="18" fill="#8A8D9B" font-size="11">MÁS ACTIVO (ÁNODO — se corroe primero)</text>
      ${["Magnesio (Mg)","Zinc (Zn)","Aluminio (Al)","Hierro/Acero (Fe)","Plomo (Pb)","Cobre (Cu)","Plata (Ag)"].map((m,i)=>`
        <rect x="10" y="${30+i*24}" width="${320-i*22}" height="18" rx="4" fill="${i<2?'#FF6B6B':i<4?'#FF9F5A':'#5AD1A6'}" opacity="0.85"/>
        <text x="16" y="${30+i*24+13}" fill="#0E0F14" font-size="11" font-weight="bold">${m}</text>
      `).join("")}
      <text x="10" y="208" fill="#8A8D9B" font-size="11">MENOS ACTIVO (CÁTODO — protegido)</text>
    </svg>`,

  flowchart: () => `
    <svg viewBox="0 0 280 320" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="11">
      <ellipse cx="140" cy="25" rx="55" ry="20" fill="#1A1C25" stroke="#6C8CFF" stroke-width="2"/>
      <text x="140" y="29" fill="#EDEEF3" text-anchor="middle">Inicio</text>
      <line x1="140" y1="45" x2="140" y2="75" stroke="#2A2D3A" stroke-width="2"/>
      <rect x="80" y="75" width="120" height="40" rx="6" fill="#1A1C25" stroke="#5AD1A6" stroke-width="2"/>
      <text x="140" y="99" fill="#EDEEF3" text-anchor="middle">Proceso</text>
      <line x1="140" y1="115" x2="140" y2="145" stroke="#2A2D3A" stroke-width="2"/>
      <polygon points="140,145 195,180 140,215 85,180" fill="#1A1C25" stroke="#FF9F5A" stroke-width="2"/>
      <text x="140" y="184" fill="#EDEEF3" text-anchor="middle">¿Condición?</text>
      <line x1="195" y1="180" x2="240" y2="180" stroke="#2A2D3A" stroke-width="2"/>
      <text x="245" y="184" fill="#8A8D9B">Sí</text>
      <line x1="140" y1="215" x2="140" y2="245" stroke="#2A2D3A" stroke-width="2"/>
      <text x="148" y="235" fill="#8A8D9B">No</text>
      <ellipse cx="140" cy="270" rx="55" ry="20" fill="#1A1C25" stroke="#6C8CFF" stroke-width="2"/>
      <text x="140" y="274" fill="#EDEEF3" text-anchor="middle">Fin</text>
    </svg>`,

  velocityTime: () => `
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="11">
      <line x1="30" y1="190" x2="340" y2="190" stroke="#2A2D3A" stroke-width="1.5"/>
      <line x1="30" y1="20" x2="30" y2="190" stroke="#2A2D3A" stroke-width="1.5"/>
      <text x="335" y="205" fill="#8A8D9B">t</text>
      <text x="14" y="22" fill="#8A8D9B">v</text>
      <polyline points="30,150 130,80 250,80 340,30" fill="none" stroke="#6C8CFF" stroke-width="3"/>
      <text x="50" y="170" fill="#5AD1A6">acelera</text>
      <text x="155" y="72" fill="#FF9F5A">v constante</text>
      <text x="255" y="60" fill="#5AD1A6">acelera</text>
    </svg>`,

  freeBody: () => `
    <svg viewBox="0 0 280 260" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="12">
      <rect x="110" y="110" width="60" height="40" rx="4" fill="#1A1C25" stroke="#EDEEF3" stroke-width="2"/>
      <line x1="140" y1="110" x2="140" y2="40" stroke="#5AD1A6" stroke-width="3" marker-end="url(#arrowG)"/>
      <text x="148" y="55" fill="#5AD1A6">N</text>
      <line x1="140" y1="150" x2="140" y2="220" stroke="#FF6B6B" stroke-width="3" marker-end="url(#arrowR)"/>
      <text x="148" y="215" fill="#FF6B6B">P = mg</text>
      <line x1="110" y1="130" x2="40" y2="130" stroke="#FFD166" stroke-width="3" marker-end="url(#arrowY)"/>
      <text x="45" y="122" fill="#FFD166">f (fricción)</text>
      <line x1="170" y1="130" x2="240" y2="130" stroke="#6C8CFF" stroke-width="3" marker-end="url(#arrowB)"/>
      <text x="190" y="122" fill="#6C8CFF">F aplicada</text>
      <defs>
        <marker id="arrowG" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#5AD1A6"/></marker>
        <marker id="arrowR" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#FF6B6B"/></marker>
        <marker id="arrowY" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#FFD166"/></marker>
        <marker id="arrowB" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#6C8CFF"/></marker>
      </defs>
    </svg>`,

  circuit: () => `
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="12">
      <rect x="30" y="40" width="260" height="120" fill="none" stroke="#2A2D3A" stroke-width="2"/>
      <line x1="30" y1="100" x2="60" y2="100" stroke="#6C8CFF" stroke-width="2.5"/>
      <line x1="60" y1="80" x2="60" y2="120" stroke="#6C8CFF" stroke-width="3"/>
      <line x1="70" y1="85" x2="70" y2="115" stroke="#6C8CFF" stroke-width="1.5"/>
      <line x1="70" y1="100" x2="100" y2="100" stroke="#6C8CFF" stroke-width="2.5"/>
      <text x="50" y="70" fill="#6C8CFF">V</text>
      <rect x="150" y="35" width="50" height="14" fill="none" stroke="#FF9F5A" stroke-width="2.5"/>
      <text x="155" y="30" fill="#FF9F5A">R1</text>
      <rect x="150" y="151" width="50" height="14" fill="none" stroke="#FF9F5A" stroke-width="2.5"/>
      <text x="155" y="178" fill="#FF9F5A">R2</text>
      <line x1="100" y1="100" x2="100" y2="42" stroke="#2A2D3A" stroke-width="2"/>
      <line x1="100" y1="42" x2="150" y2="42" stroke="#2A2D3A" stroke-width="2"/>
      <line x1="200" y1="42" x2="260" y2="42" stroke="#2A2D3A" stroke-width="2"/>
      <line x1="260" y1="42" x2="260" y2="158" stroke="#2A2D3A" stroke-width="2"/>
      <line x1="100" y1="100" x2="100" y2="158" stroke="#2A2D3A" stroke-width="2"/>
      <line x1="100" y1="158" x2="150" y2="158" stroke="#2A2D3A" stroke-width="2"/>
      <line x1="200" y1="158" x2="260" y2="158" stroke="#2A2D3A" stroke-width="2"/>
      <text x="120" y="20" fill="#8A8D9B">R1 y R2 en paralelo</text>
    </svg>`,

  fourStroke: () => `
    <svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="10.5">
      ${["Admisión","Compresión","Explosión","Escape"].map((label,i)=>{
        const x = 10 + i*102;
        const pistonY = (i===0||i===2) ? 70 : 35; // down for admision/explosion, up for compresion/escape
        const valveLeftOpen = i===0;
        const valveRightOpen = i===3;
        return `
        <g>
          <rect x="${x}" y="10" width="80" height="100" rx="4" fill="#1A1C25" stroke="#2A2D3A" stroke-width="1.5"/>
          <rect x="${x+10}" y="${pistonY}" width="60" height="22" rx="3" fill="#6C8CFF"/>
          <rect x="${x+10}" y="14" width="14" height="${valveLeftOpen?10:4}" fill="#5AD1A6"/>
          <rect x="${x+56}" y="14" width="14" height="${valveRightOpen?10:4}" fill="#FF6B6B"/>
          <text x="${x+40}" y="125" fill="#8A8D9B" text-anchor="middle">${label}</text>
        </g>`;
      }).join("")}
    </svg>`,

  mtbfTimeline: () => `
    <svg viewBox="0 0 360 120" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="11">
      <line x1="20" y1="60" x2="340" y2="60" stroke="#2A2D3A" stroke-width="2"/>
      <rect x="20" y="48" width="90" height="24" fill="#5AD1A6" opacity="0.85"/>
      <text x="35" y="64" fill="#0E0F14" font-weight="bold">Operando</text>
      <rect x="110" y="48" width="30" height="24" fill="#FF6B6B" opacity="0.9"/>
      <text x="113" y="42" fill="#FF6B6B">Falla</text>
      <rect x="140" y="48" width="50" height="24" fill="#FFD166" opacity="0.9"/>
      <text x="143" y="64" fill="#0E0F14" font-weight="bold">MTTR</text>
      <rect x="190" y="48" width="110" height="24" fill="#5AD1A6" opacity="0.85"/>
      <text x="205" y="64" fill="#0E0F14" font-weight="bold">Operando</text>
      <text x="20" y="95" fill="#8A8D9B">◀─────────── MTBF (tiempo entre fallas) ───────────▶</text>
    </svg>`,
};

function getDiagram(key){
  return DIAGRAMS[key] ? DIAGRAMS[key]() : null;
}
