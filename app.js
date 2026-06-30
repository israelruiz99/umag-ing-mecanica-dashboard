// ===== State =====
const STORAGE_KEY = "umag-mecanica-grades-v1";
let grades = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
let activeSubjectId = null;

function saveGrades(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(grades));
}

function subjectAvg(id){
  const list = grades[id] || [];
  if(!list.length) return null;
  const sum = list.reduce((a,b)=>a+b.score,0);
  return sum / list.length;
}

function globalAvg(){
  const vals = SUBJECTS.map(s => subjectAvg(s.id)).filter(v => v !== null);
  if(!vals.length) return null;
  return vals.reduce((a,b)=>a+b,0) / vals.length;
}

// ===== Helpers =====
function bySemester(){
  const map = {};
  SUBJECTS.forEach(s => {
    const key = `${s.year}-${s.semester}`;
    if(!map[key]) map[key] = { year: s.year, semester: s.semester, items: [] };
    map[key].items.push(s);
  });
  return Object.values(map).sort((a,b)=> a.year - b.year || a.semester - b.semester);
}

function byYear(){
  const map = {};
  SUBJECTS.forEach(s => {
    if(!map[s.year]) map[s.year] = new Set();
    map[s.year].add(s.semester);
  });
  return Object.entries(map).sort((a,b)=>a[0]-b[0])
    .map(([year, sems]) => ({ year: +year, semesters: [...sems].sort() }));
}

// ===== Render: Legend =====
function renderLegend(){
  const el = document.getElementById("legend");
  el.innerHTML = Object.values(AREAS).map(a => `
    <div class="legend-item"><span class="legend-dot" style="background:${a.color}"></span>${a.label}</div>
  `).join("");
}

// ===== Render: Sidebar years nav =====
function renderYearsNav(){
  const el = document.getElementById("yearsNav");
  const label = el.querySelector(".nav-label");
  el.innerHTML = "";
  const lab = document.createElement("span");
  lab.className = "nav-label";
  lab.textContent = "Años";
  el.appendChild(lab);

  byYear().forEach(y => {
    const group = document.createElement("div");
    group.className = "year-group";
    group.innerHTML = `
      <button class="year-head">AÑO ${y.year} <span class="chev">›</span></button>
      <div class="sem-list">
        ${y.semesters.map(s => `<button class="sem-link" data-target="sem-${y.year}-${s}">Semestre ${s}</button>`).join("")}
      </div>
    `;
    el.appendChild(group);

    group.querySelector(".year-head").addEventListener("click", () => {
      group.classList.toggle("open");
    });
    group.querySelectorAll(".sem-link").forEach(btn => {
      btn.addEventListener("click", () => {
        switchView("overview");
        const target = document.getElementById(btn.dataset.target);
        if(target) target.scrollIntoView({ behavior:"smooth", block:"start" });
      });
    });
  });
}

// ===== Render: subject card =====
function subjectCardHTML(s){
  const area = AREAS[s.area];
  const avg = subjectAvg(s.id);
  return `
    <div class="subject-card" style="--c:${area.color}" data-id="${s.id}">
      <div class="card-top">
        <span class="area-pill" style="--c:${area.color}">${area.label}</span>
        <span class="card-score ${avg !== null ? 'has-score' : ''}">${avg !== null ? avg.toFixed(1) : '—'}</span>
      </div>
      <h3>${s.name}</h3>
      <p class="card-summary">${s.summary}</p>
    </div>
  `;
}

// ===== Render: Overview =====
function renderOverview(filterText = ""){
  const wrap = document.getElementById("semestersWrap");
  const ft = filterText.trim().toLowerCase();
  wrap.innerHTML = "";

  bySemester().forEach(block => {
    const items = ft
      ? block.items.filter(s => s.name.toLowerCase().includes(ft))
      : block.items;
    if(ft && items.length === 0) return;

    const section = document.createElement("div");
    section.className = "semester-block";
    section.id = `sem-${block.year}-${block.semester}`;
    section.innerHTML = `
      <div class="semester-title">
        AÑO ${block.year} · SEMESTRE ${block.semester}
        <span class="badge">${items.length} ramos</span>
      </div>
      <div class="cards-grid">
        ${items.map(subjectCardHTML).join("")}
      </div>
    `;
    wrap.appendChild(section);
  });

  wrap.querySelectorAll(".subject-card").forEach(card => {
    card.addEventListener("click", () => openPanel(card.dataset.id));
  });
}

// ===== Render: Grades view =====
function renderGradesView(){
  const grid = document.getElementById("gradesGrid");
  grid.innerHTML = SUBJECTS.map(s => {
    const avg = subjectAvg(s.id);
    const count = (grades[s.id] || []).length;
    return `
      <div class="grade-card" data-id="${s.id}">
        <h4>${s.name}</h4>
        <div class="gc-meta">Año ${s.year} · Semestre ${s.semester}</div>
        <div class="gc-avg ${avg === null ? 'empty' : ''}">${avg !== null ? avg.toFixed(1) : 'Sin notas'}</div>
        <div class="gc-count">${count} evaluación${count === 1 ? '' : 'es'} registrada${count === 1 ? '' : 's'}</div>
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".grade-card").forEach(card => {
    card.addEventListener("click", () => openPanel(card.dataset.id, "grades"));
  });
}

function refreshGlobalAvg(){
  const g = globalAvg();
  document.getElementById("globalAvg").textContent = g !== null ? g.toFixed(1) : "—";
  document.getElementById("globalAvgBar").style.width = g !== null ? `${Math.min(100, (g/100)*100)}%` : "0%";
}

// ===== Panel =====
const overlay = document.getElementById("overlay");
const panel = document.getElementById("panel");

function openPanel(id, tab = "study"){
  const s = SUBJECTS.find(x => x.id === id);
  if(!s) return;
  activeSubjectId = id;
  const area = AREAS[s.area];

  document.getElementById("panelArea").textContent = area.label;
  document.getElementById("panelArea").style.background = area.color + "26";
  document.getElementById("panelArea").style.color = area.color;
  document.getElementById("panelTitle").textContent = s.name;
  document.getElementById("panelMeta").textContent = `Año ${s.year} · Semestre ${s.semester}`;
  document.getElementById("panelSummary").textContent = s.summary;
  document.getElementById("panelTopics").innerHTML = s.topics.map(t => `<li>${t}</li>`).join("");
  document.getElementById("panelTips").innerHTML = s.tips.map(t => `<li>${t}</li>`).join("");

  setTab(tab);
  renderGradeList();

  overlay.classList.add("show");
  panel.classList.add("show");
}

function closePanel(){
  overlay.classList.remove("show");
  panel.classList.remove("show");
  activeSubjectId = null;
}

function setTab(tab){
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.toggle("active", c.id === `tab-${tab}`));
}

document.querySelectorAll(".tab").forEach(t => {
  t.addEventListener("click", () => setTab(t.dataset.tab));
});

document.getElementById("panelClose").addEventListener("click", closePanel);
overlay.addEventListener("click", closePanel);
document.addEventListener("keydown", e => { if(e.key === "Escape") closePanel(); });

// ===== Grades inside panel =====
function renderGradeList(){
  if(!activeSubjectId) return;
  const list = grades[activeSubjectId] || [];
  const ul = document.getElementById("gradeList");
  const avgBox = document.getElementById("subjectAvg");

  if(!list.length){
    ul.innerHTML = `<li class="grade-empty">Aún no registras evaluaciones para este ramo.</li>`;
  } else {
    ul.innerHTML = list.map((g, i) => `
      <li class="grade-row">
        <span class="gr-name">${g.name}</span>
        <span class="gr-right">
          <span class="gr-score">${g.score.toFixed(1)}</span>
          <button class="gr-del" data-i="${i}">✕</button>
        </span>
      </li>
    `).join("");
  }

  const avg = subjectAvg(activeSubjectId);
  avgBox.textContent = avg !== null ? avg.toFixed(1) : "—";

  ul.querySelectorAll(".gr-del").forEach(btn => {
    btn.addEventListener("click", () => {
      list.splice(+btn.dataset.i, 1);
      grades[activeSubjectId] = list;
      saveGrades();
      renderGradeList();
      renderOverview(document.getElementById("searchInput").value);
      renderGradesView();
      refreshGlobalAvg();
    });
  });
}

document.getElementById("evalAdd").addEventListener("click", () => {
  if(!activeSubjectId) return;
  const nameInput = document.getElementById("evalName");
  const scoreInput = document.getElementById("evalScore");
  const name = nameInput.value.trim();
  const score = parseFloat(scoreInput.value);

  if(!name || isNaN(score)) return;

  if(!grades[activeSubjectId]) grades[activeSubjectId] = [];
  grades[activeSubjectId].push({ name, score });
  saveGrades();

  nameInput.value = "";
  scoreInput.value = "";
  nameInput.focus();

  renderGradeList();
  renderOverview(document.getElementById("searchInput").value);
  renderGradesView();
  refreshGlobalAvg();
});

// ===== View switching =====
function switchView(view){
  document.querySelectorAll(".nav-item[data-view]").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === `view-${view}`));
}
document.querySelectorAll(".nav-item[data-view]").forEach(b => {
  b.addEventListener("click", () => switchView(b.dataset.view));
});

// ===== Search =====
document.getElementById("searchInput").addEventListener("input", e => {
  renderOverview(e.target.value);
});

// ===== Init =====
function init(){
  document.getElementById("semesterChip").textContent = `8 semestres · ${SUBJECTS.length} ramos`;
  renderLegend();
  renderYearsNav();
  renderOverview();
  renderGradesView();
  refreshGlobalAvg();
  // open first year by default
  const firstGroup = document.querySelector(".year-group");
  if(firstGroup) firstGroup.classList.add("open");
}
init();
