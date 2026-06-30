// ===== State =====
const STORAGE_KEY = "umag-mecanica-grades-v1";
const PASSMIN_KEY = "umag-mecanica-passmin-v1";
let grades = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
let passMins = JSON.parse(localStorage.getItem(PASSMIN_KEY) || "{}");
let activeSubjectId = null;

function saveGrades(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(grades));
}

function savePassMins(){
  localStorage.setItem(PASSMIN_KEY, JSON.stringify(passMins));
}

function subjectAvg(id){
  const list = grades[id] || [];
  if(!list.length) return null;
  const totalWeight = list.reduce((a,b)=> a + (Number(b.weight) || 0), 0);
  if(totalWeight > 0){
    const weightedSum = list.reduce((a,b)=> a + b.score * (Number(b.weight) || 0), 0);
    return weightedSum / totalWeight;
  }
  // sin ponderaciones definidas: promedio simple (compatibilidad)
  const sum = list.reduce((a,b)=>a+b.score,0);
  return sum / list.length;
}

function globalAvg(){
  const vals = SUBJECTS.map(s => subjectAvg(s.id)).filter(v => v !== null);
  if(!vals.length) return null;
  return vals.reduce((a,b)=>a+b,0) / vals.length;
}

// Avance de un semestre: promedio de las notas obtenidas en los ramos de ese semestre
// que ya tienen al menos una evaluación registrada (0% si ninguno tiene notas aún).
function semesterProgress(items){
  const vals = items.map(s => subjectAvg(s.id)).filter(v => v !== null);
  if(!vals.length) return 0;
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

    const progress = semesterProgress(block.items);
    const section = document.createElement("div");
    section.className = "semester-block";
    section.id = `sem-${block.year}-${block.semester}`;
    section.innerHTML = `
      <div class="semester-title">
        AÑO ${block.year} · SEMESTRE ${block.semester}
        <span class="badge">${items.length} ramos</span>
        <span class="semester-progress">
          <span class="bar"><div class="bar-fill" style="width:${Math.min(100, progress)}%"></div></span>
          <span class="sp-label">${progress > 0 ? progress.toFixed(0) + '%' : '—'}</span>
        </span>
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
  document.getElementById("panelTopics").innerHTML = s.topics.map((t, i) => {
    const title = typeof t === "string" ? t : t.title;
    return `
      <li>
        <a href="topic.html?s=${encodeURIComponent(s.id)}&t=${i}" target="_blank" rel="noopener">
          <span>${title}</span>
          <span class="topic-arrow">↗</span>
        </a>
      </li>
    `;
  }).join("");
  document.getElementById("panelTips").innerHTML = s.tips.map(t => `<li>${t}</li>`).join("");

  document.getElementById("passMinInput").value = passMins[s.id] ?? "";

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
          ${g.weight ? `<span class="gr-weight">${g.weight}%</span>` : ""}
          <span class="gr-score">${g.score.toFixed(1)}</span>
          <button class="gr-del" data-i="${i}">✕</button>
        </span>
      </li>
    `).join("");
  }

  const avg = subjectAvg(activeSubjectId);
  avgBox.textContent = avg !== null ? avg.toFixed(1) : "—";

  const passStatusEl = document.getElementById("passStatus");
  const passMin = passMins[activeSubjectId];
  if(avg !== null && passMin !== undefined && passMin !== null && passMin !== ""){
    const passed = avg >= Number(passMin);
    passStatusEl.style.display = "";
    passStatusEl.className = "pass-status " + (passed ? "pass" : "fail");
    passStatusEl.textContent = passed
      ? `✓ Aprobado (necesitabas ${Number(passMin).toFixed(1)})`
      : `✕ Bajo el mínimo — te faltan ${(Number(passMin) - avg).toFixed(1)} puntos`;
  } else {
    passStatusEl.style.display = "none";
  }

  const weightTotalEl = document.getElementById("weightTotal");
  const totalWeight = list.reduce((a,b)=> a + (Number(b.weight) || 0), 0);
  if(!list.length){
    weightTotalEl.textContent = "";
    weightTotalEl.className = "weight-total";
  } else {
    weightTotalEl.textContent = `Ponderación registrada: ${totalWeight}%${totalWeight !== 100 ? " (falta completar 100%)" : ""}`;
    weightTotalEl.className = "weight-total " + (totalWeight === 100 ? "ok" : "warn");
  }

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

document.getElementById("passMinInput").addEventListener("input", e => {
  if(!activeSubjectId) return;
  const val = e.target.value;
  if(val === ""){
    delete passMins[activeSubjectId];
  } else {
    passMins[activeSubjectId] = parseFloat(val);
  }
  savePassMins();
  renderGradeList();
});

document.getElementById("evalAdd").addEventListener("click", () => {
  if(!activeSubjectId) return;
  const nameInput = document.getElementById("evalName");
  const scoreInput = document.getElementById("evalScore");
  const weightInput = document.getElementById("evalWeight");
  const name = nameInput.value.trim();
  const score = parseFloat(scoreInput.value);
  const weight = parseFloat(weightInput.value) || 0;

  if(!name || isNaN(score)) return;

  if(!grades[activeSubjectId]) grades[activeSubjectId] = [];
  grades[activeSubjectId].push({ name, score, weight });
  saveGrades();

  nameInput.value = "";
  scoreInput.value = "";
  weightInput.value = "";
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
  if(view === "profile") renderProfileView();
}
document.querySelectorAll(".nav-item[data-view]").forEach(b => {
  b.addEventListener("click", () => switchView(b.dataset.view));
});

// ===== Profile / Auth =====
function renderProfileView(){
  const user = currentUser();
  const authBox = document.getElementById("authBox");
  const profileBox = document.getElementById("profileBox");

  if(!user){
    authBox.style.display = "";
    profileBox.style.display = "none";
    return;
  }

  authBox.style.display = "none";
  profileBox.style.display = "";

  const avatarEl = document.getElementById("profileAvatar");
  avatarEl.innerHTML = user.photo
    ? `<img src="${user.photo}" alt="Foto de perfil">`
    : (user.name || user.email)[0].toUpperCase();

  document.getElementById("profileName").textContent = user.name || "Sin nombre";
  document.getElementById("profileEmail").textContent = user.email;
  document.getElementById("profileNameInput").value = user.name || "";
  document.getElementById("profileBirthdateInput").value = user.birthdate || "";
  document.getElementById("profileCareerInput").value = user.career || "Ingeniería en Mecánica — UMAG";
  document.getElementById("profileYearInput").value = user.year || 1;
  document.getElementById("profileInstagramInput").value = (user.socials && user.socials.instagram) || "";
  document.getElementById("profileTiktokInput").value = (user.socials && user.socials.tiktok) || "";
  document.getElementById("profileLinkedinInput").value = (user.socials && user.socials.linkedin) || "";

  const socialsEl = document.getElementById("profileSocials");
  const socialLinks = [
    { key: "instagram", label: "Instagram", base: "https://instagram.com/" },
    { key: "tiktok", label: "TikTok", base: "https://tiktok.com/@" },
    { key: "linkedin", label: "LinkedIn", base: "" },
  ];
  socialsEl.innerHTML = socialLinks
    .filter(s => user.socials && user.socials[s.key])
    .map(s => {
      let val = user.socials[s.key].trim();
      let href = val.startsWith("http") ? val : s.base + val.replace(/^@/, "");
      return `<a href="${href}" target="_blank" rel="noopener">${s.label} ↗</a>`;
    }).join("");
}

function toDataURL(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

document.getElementById("profilePhotoInput").addEventListener("change", async e => {
  const file = e.target.files[0];
  if(!file) return;
  const dataUrl = await toDataURL(file);
  updateProfile({ photo: dataUrl });
  renderProfileView();
});

document.querySelectorAll(".auth-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".auth-tab").forEach(t => t.classList.toggle("active", t === tab));
    document.querySelectorAll(".auth-form").forEach(f => f.classList.remove("active"));
    document.getElementById(tab.dataset.authTab === "login" ? "loginForm" : "registerForm").classList.add("active");
  });
});

document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const result = loginUser(email, password);
  const errorEl = document.getElementById("loginError");
  if(!result.ok){
    errorEl.textContent = result.error;
    return;
  }
  errorEl.textContent = "";
  renderProfileView();
});

document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const result = registerUser(name, email, password);
  const errorEl = document.getElementById("registerError");
  if(!result.ok){
    errorEl.textContent = result.error;
    return;
  }
  errorEl.textContent = "";
  renderProfileView();
});

document.getElementById("profileForm").addEventListener("submit", e => {
  e.preventDefault();
  updateProfile({
    name: document.getElementById("profileNameInput").value.trim(),
    birthdate: document.getElementById("profileBirthdateInput").value,
    career: document.getElementById("profileCareerInput").value.trim(),
    year: parseInt(document.getElementById("profileYearInput").value, 10),
    socials: {
      instagram: document.getElementById("profileInstagramInput").value.trim(),
      tiktok: document.getElementById("profileTiktokInput").value.trim(),
      linkedin: document.getElementById("profileLinkedinInput").value.trim(),
    },
  });
  renderProfileView();
  const savedEl = document.getElementById("profileSaved");
  savedEl.textContent = "✓ Perfil actualizado.";
  setTimeout(() => savedEl.textContent = "", 2000);
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  logoutUser();
  renderProfileView();
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
