// Sistema de cuenta local (sin servidor). Solo persiste en este navegador (localStorage).
// No es un sistema de autenticación seguro: es una personalización de la sesión local.

const USERS_KEY = "umag-mecanica-users-v1";
const SESSION_KEY = "umag-mecanica-session-v1";

function getUsers(){
  return JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
}
function saveUsers(users){
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
function getSession(){
  return localStorage.getItem(SESSION_KEY);
}
function setSession(email){
  localStorage.setItem(SESSION_KEY, email);
}
function clearSession(){
  localStorage.removeItem(SESSION_KEY);
}
function currentUser(){
  const email = getSession();
  if(!email) return null;
  const users = getUsers();
  return users[email] || null;
}

// Hash muy simple solo para no guardar la clave en texto plano evidente.
// (No es criptográficamente seguro — adecuado solo para personalización local, no para datos sensibles reales.)
function simpleHash(str){
  let hash = 0;
  for(let i = 0; i < str.length; i++){
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return String(hash);
}

function registerUser(name, email, password){
  const users = getUsers();
  email = email.trim().toLowerCase();
  if(users[email]) return { ok: false, error: "Ya existe una cuenta con ese correo." };
  if(password.length < 4) return { ok: false, error: "La clave debe tener al menos 4 caracteres." };
  users[email] = { name: name.trim(), email, passwordHash: simpleHash(password), career: "Ingeniería en Mecánica — UMAG", year: 1 };
  saveUsers(users);
  setSession(email);
  return { ok: true };
}

function loginUser(email, password){
  const users = getUsers();
  email = email.trim().toLowerCase();
  const user = users[email];
  if(!user || user.passwordHash !== simpleHash(password)){
    return { ok: false, error: "Correo o clave incorrectos." };
  }
  setSession(email);
  return { ok: true };
}

function updateProfile(fields){
  const email = getSession();
  if(!email) return;
  const users = getUsers();
  users[email] = { ...users[email], ...fields };
  saveUsers(users);
}

function logoutUser(){
  clearSession();
}
