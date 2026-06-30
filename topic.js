function getParam(name){
  return new URLSearchParams(window.location.search).get(name);
}

function render(){
  const subjectId = getParam("s");
  const topicIndex = parseInt(getParam("t"), 10);
  const root = document.getElementById("topicPage");

  const subject = SUBJECTS.find(s => s.id === subjectId);
  if(!subject || isNaN(topicIndex) || !subject.topics[topicIndex]){
    root.innerHTML = `
      <button class="topic-back" onclick="window.close(); window.history.back();">← Volver</button>
      <p class="topic-empty">No se encontró información para este tema.</p>
    `;
    return;
  }

  const raw = subject.topics[topicIndex];
  const topic = typeof raw === "string" ? { title: raw } : raw;
  const area = AREAS[subject.area];

  document.title = `${topic.title} · ${subject.name}`;

  let html = `
    <button class="topic-back" onclick="window.history.length > 1 ? window.history.back() : window.close();">← Volver al ramo</button>
    <div class="topic-breadcrumb">
      <span class="area-pill" style="background:${area.color}26; color:${area.color}">${area.label}</span>
      ${subject.name} · Año ${subject.year} · Semestre ${subject.semester}
    </div>
    <h1 class="topic-title">${topic.title}</h1>
    <p class="topic-subject">${subject.summary}</p>
  `;

  if(topic.points && topic.points.length){
    html += `
      <div class="topic-section">
        <h3>Contenido detallado</h3>
        <ul class="topic-points">${topic.points.map(p => `<li>${p}</li>`).join("")}</ul>
      </div>
    `;
  } else {
    html += `
      <div class="topic-section">
        <p class="topic-empty">Aún no se ha profundizado este tema en detalle. Revisa el resumen del ramo y consulta material de cátedra para complementar.</p>
      </div>
    `;
  }

  if(topic.diagram){
    const svg = getDiagram(topic.diagram);
    if(svg){
      html += `
        <div class="topic-section">
          <h3>Diagrama</h3>
          <div class="topic-diagram">${svg}</div>
        </div>
      `;
    }
  }

  if(topic.formulas && topic.formulas.length){
    html += `
      <div class="topic-section">
        <h3>Fórmulas</h3>
        <ul class="formula-list">${topic.formulas.map(f => `<li>${f}</li>`).join("")}</ul>
      </div>
    `;
  }

  root.innerHTML = html;
}

render();
