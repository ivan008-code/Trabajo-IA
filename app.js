// --- Mock Data --- Ivan
const matchesData = [
  { group: "Grupo A", team1: "México", code1: "mx", team2: "Sudáfrica", code2: "za", date: "11 JUN", time: "21:00", locked: false, isUpcoming: false },
  { group: "Grupo A", team1: "Corea del Sur", code1: "kr", team2: "Chequia", code2: "cz", date: "12 JUN", time: "4:00", locked: false, isUpcoming: false },
  { group: "Grupo B", team1: "Canadá", code1: "ca", team2: "Bosnia", code2: "ba", date: "12 JUN", time: "21:00", locked: false, isUpcoming: true },
  { group: "Grupo D", team1: "EE.UU.", code1: "us", team2: "Paraguay", code2: "py", date: "13 JUN", time: "3:00", locked: false, isUpcoming: true },
  { group: "Grupo B", team1: "Catar", code1: "qa", team2: "Suiza", code2: "ch", date: "13 JUN", time: "21:00", locked: false, isUpcoming: true },
  { group: "Grupo C", team1: "Brasil", code1: "br", team2: "Marruecos", code2: "ma", date: "14 JUN", time: "0:00", locked: false, isUpcoming: true },
  { group: "Grupo E", team1: "España", code1: "es", team2: "Alemania", code2: "de", date: "15 JUN", time: "21:00", locked: false, isUpcoming: true },
  { group: "Grupo F", team1: "Argentina", code1: "ar", team2: "Francia", code2: "fr", date: "16 JUN", time: "21:00", locked: false, isUpcoming: true }
];

const groupsData = {
    A: [ {name: "México", code: "mx"}, {name: "Sudáfrica", code: "za"}, {name: "Corea del Sur", code: "kr"}, {name: "Chequia", code: "cz"} ],
    B: [ {name: "Canadá", code: "ca"}, {name: "Bosnia y Her.", code: "ba"}, {name: "Catar", code: "qa"}, {name: "Suiza", code: "ch"} ],
    C: [ {name: "Brasil", code: "br"}, {name: "Marruecos", code: "ma"}, {name: "Italia", code: "it"}, {name: "Japón", code: "jp"} ],
    D: [ {name: "EE.UU.", code: "us"}, {name: "Paraguay", code: "py"}, {name: "Inglaterra", code: "gb-eng"}, {name: "Croacia", code: "hr"} ],
    E: [ {name: "España", code: "es"}, {name: "Alemania", code: "de"}, {name: "Portugal", code: "pt"}, {name: "Uruguay", code: "uy"} ],
    F: [ {name: "Argentina", code: "ar"}, {name: "Francia", code: "fr"}, {name: "Bélgica", code: "be"}, {name: "Senegal", code: "sn"} ]
};

const leaderboardData = [
  { name: "Carlos Pérez", f1: 85, f2: 40, live: 12, total: 137 },
  { name: "Ana Martínez", f1: 80, f2: 45, live: 8, total: 133 },
  { name: "Juan Gómez", f1: 75, f2: 50, live: 4, total: 129 },
  { name: "Laura Sánchez", f1: 78, f2: 38, live: 6, total: 122 },
  { name: "David Ruiz", f1: 70, f2: 40, live: 10, total: 120 }
];

const prizesData = [
  { id: "p1", title: "Campeón Absoluto", amount: "340 €", winner: null },
  { id: "p2", title: "Subcampeón", amount: "170 €", winner: null },
  { id: "p3", title: "Tercer Puesto", amount: "60 €", winner: null },
  { id: "p4", title: "Maestro de Grupos", amount: "60 €", winner: "Carlos Pérez" },
  { id: "p5", title: "Arquitecto del Cuadro", amount: "60 €", winner: null },
  { id: "p6", title: "Rey del Directo", amount: "60 €", winner: null }
];

// --- Translations ---
const translations = {
  es: {
    nav_title: "MUNDIAL 2026",
    nav_login: "Entrar / Registro",
    title: "LA PORRA DEL MUNDIAL 2026",
    subtitle: "EL LIBRO MAESTRO - Reglamento oficial",
    tab_rules: "Reglamento",
    tab_matches: "Partidos del Día",
    tab_upcoming: "Próximos",
    tab_leaderboard: "Clasificación en Directo",
    tab_prizes: "Premios Actuales",
    matches_title: "Partidos de Hoy",
    upcoming_title: "Próximos Partidos",
    matches_reminder: "Activar recordatorios",
    leaderboard_title: "Clasificación en Directo",
    lb_player: "JUGADOR",
    lb_f1: "FASE 1",
    lb_f2: "FASE 2",
    lb_live: "DIRECTO",
    lb_total: "TOTAL",
    prizes_live_title: "Bote y Premios Actualizados",
    prizes_total: "BOTE TOTAL RECAUDADO",
    prizes_players: "25 Jugadores inscritos",
    auth_title: "Registro / Acceso",
    auth_desc: "Únete a la porra oficial. Recibirás recordatorios de partidos por WhatsApp/SMS.",
    auth_name: "Nombre completo",
    auth_email: "Correo electrónico",
    auth_phone: "Teléfono (WhatsApp)",
    auth_submit: "Inscribirse en la Porra",
    footer: "© 2026 La Porra del Mundial. Todos los derechos reservados.",
    sections: [
      {
        id: "intro", icon: "fa-book-open", title: "Reglamento oficial de la competición",
        content: "<p>La presente normativa regula el funcionamiento íntegro de La Porra del Mundial 2026, así como el sistema de inscripción, puntuación, clasificación, desempates y reparto de premios aplicable a todos los participantes.</p><p class='gold-text'>La participación en el juego implica la aceptación total de estas normas.</p>"
      },
      {
        id: "inscripcion", icon: "fa-users", title: "1. Inscripción y fondo económico",
        content: "<ul><li><span class='highlight'>Número de participantes:</span> 25 jugadores.</li><li><span class='highlight'>Cuota de inscripción:</span> 30 € por jugador.</li><li><span class='highlight'>Gastos de gestión:</span> 2 € adicionales por jugador.</li><li><span class='highlight'>Importe total del bote:</span> <span class='gold-text'>750 €</span>.</li><li><span class='highlight'>Forma de pago:</span> Bizum al administrador.</li><li><span class='highlight'>Concepto del pago:</span> PORRA + Nombre.</li></ul><p>Los 30 € de inscripción de cada participante integran exclusivamente el bote de premios.</p>"
      }
    ]
  },
  va: {
    nav_title: "MUNDIAL 2026",
    nav_login: "Entrar / Registre",
    title: "LA PORRA DEL MUNDIAL 2026",
    subtitle: "EL LLIBRE MESTRE - Reglament oficial",
    tab_rules: "Reglament",
    tab_matches: "Partits del Dia",
    tab_upcoming: "Pròxims",
    tab_leaderboard: "Classificació en Directe",
    tab_prizes: "Premis Actuals",
    matches_title: "Partits de Hui",
    upcoming_title: "Pròxims Partits",
    matches_reminder: "Activar recordatoris",
    leaderboard_title: "Classificació en Directe",
    lb_player: "JUGADOR",
    lb_f1: "FASE 1",
    lb_f2: "FASE 2",
    lb_live: "DIRECTE",
    lb_total: "TOTAL",
    prizes_live_title: "Pot i Premis Actualitzats",
    prizes_total: "POT TOTAL RECAPTAT",
    prizes_players: "25 Jugadors inscrits",
    auth_title: "Registre / Accés",
    auth_desc: "Unix-te a la porra oficial. Rebràs recordatoris de partits per WhatsApp/SMS.",
    auth_name: "Nom complet",
    auth_email: "Correu electrònic",
    auth_phone: "Telèfon (WhatsApp)",
    auth_submit: "Inscriure's a la Porra",
    footer: "© 2026 La Porra del Mundial. Tots els drets reservats.",
    sections: [
      {
        id: "intro", icon: "fa-book-open", title: "Reglament oficial de la competició",
        content: "<p>La present normativa regula el funcionament íntegre de La Porra del Mundial 2026...</p>"
      }
    ]
  },
  en: {
    nav_title: "WORLD CUP 2026",
    nav_login: "Login / Register",
    title: "WORLD CUP 2026 SWEEPSTAKES",
    subtitle: "THE MASTER BOOK - Official Rules",
    tab_rules: "Rules",
    tab_matches: "Today's Matches",
    tab_upcoming: "Upcoming",
    tab_leaderboard: "Live Leaderboard",
    tab_prizes: "Current Prizes",
    matches_title: "Today's Matches",
    upcoming_title: "Upcoming Matches",
    matches_reminder: "Enable reminders",
    leaderboard_title: "Live Leaderboard",
    lb_player: "PLAYER",
    lb_f1: "PHASE 1",
    lb_f2: "PHASE 2",
    lb_live: "LIVE",
    lb_total: "TOTAL",
    prizes_live_title: "Live Pot and Prizes",
    prizes_total: "TOTAL POT COLLECTED",
    prizes_players: "25 Registered Players",
    auth_title: "Register / Login",
    auth_desc: "Join the official sweepstakes. You will receive match reminders via WhatsApp/SMS.",
    auth_name: "Full Name",
    auth_email: "Email address",
    auth_phone: "Phone (WhatsApp)",
    auth_submit: "Join the Sweepstakes",
    footer: "© 2026 World Cup Sweepstakes. All rights reserved.",
    sections: [
      {
        id: "intro", icon: "fa-book-open", title: "Official Competition Rules",
        content: "<p>These regulations govern the entire operation of the 2026 World Cup Sweepstakes...</p>"
      }
    ]
  }
};

const ruleSectionsEs = [
    { id: "intro", icon: "fa-book-open", title: "Reglamento oficial de la competición", content: "<p>La presente normativa regula el funcionamiento íntegro de La Porra del Mundial 2026. Todos los participantes deben acatar estas reglas para garantizar el buen funcionamiento del juego.</p>" },
    { id: "inscripcion", icon: "fa-users", title: "1. Inscripción y fondo económico", content: "<ul><li><span class='highlight'>Número de participantes:</span> 25 jugadores.</li><li><span class='highlight'>Cuota:</span> 30 €.</li><li><span class='highlight'>Método de pago:</span> Bizum al número del administrador.</li></ul><p>Los 30 € de inscripción de cada participante integran exclusivamente el bote de premios.</p>" },
    { id: "premios", icon: "fa-money-bill-wave", title: "2. Estructura de premios", content: "<p><span class='highlight'>Fondo total:</span> <span class='gold-text'>750 €</span></p><ul><li>Campeón Absoluto: 340 €</li><li>Subcampeón: 170 €</li><li>Tercer Puesto: 60 €</li><li>Premios Menores (Grupos, Cuadro, Directo): 60 € c/u</li></ul>" },
    { id: "fase1", icon: "fa-1", title: "3. Fase 1: Fase de Grupos", content: "<p>Los jugadores deberán pronosticar los resultados exactos de los partidos de la fase de grupos.</p><p><span class='highlight'>Puntuación:</span></p><ul><li>Acertar resultado exacto (ej. 2-1): <span class='gold-text'>3 puntos</span>.</li><li>Acertar tendencia (ganador o empate): <span class='gold-text'>1 punto</span>.</li></ul>" },
    { id: "fase2", icon: "fa-2", title: "4. Fase 2: Eliminatorias", content: "<p>A partir de octavos de final, se pronosticarán los equipos que avanzan de ronda. Puntuación progresiva según la fase de eliminatoria.</p>" },
    { id: "fase3", icon: "fa-trophy", title: "5. Fase 3: La Gran Final", content: "<p>Se debe pronosticar el Campeón del Mundo y el resultado exacto de la final. Premio especial al acierto pleno.</p>" }
];
translations.es.sections = ruleSectionsEs;
translations.va.sections = ruleSectionsEs;
translations.en.sections = ruleSectionsEs;

let currentLang = 'es';
let isLoggedIn = false;
let isAdmin = false;
let currentUsername = "";
let userVotes = {};

const allBetsData = [
  { user: "Carlos Pérez", match: "México vs Sudáfrica", score: "2 - 1" },
  { user: "Ana Martínez", match: "Brasil vs Marruecos", score: "3 - 0" },
  { user: "Laura Sánchez", match: "España vs Alemania", score: "1 - 1" },
  { user: "David Ruiz", match: "EE.UU. vs Paraguay", score: "0 - 0" },
  { user: "Juan Gómez", match: "Argentina vs Francia", score: "2 - 2" }
];

let activityLogs = [
    { time: "09:00", msg: "Sistema de porra inicializado y seguro." },
    { time: "10:30", msg: "Carlos Pérez completó su pago por Bizum." }
];

document.addEventListener('DOMContentLoaded', () => {
  setupLanguageToggle();
  setupTabs();
  setupModal();
  renderAll();
});

function renderAll() {
  renderStaticText();
  renderRules();
  renderMatches();
  renderLeaderboard();
  renderPrizes();
  renderCalendarGroups();
  renderBracket();
  renderLiveSelector();
}

function setupLanguageToggle() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentLang = e.target.getAttribute('data-lang');
      renderAll();
    });
  });
}

function renderStaticText() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
  
  document.getElementById('title').textContent = t.title;
  document.getElementById('title').setAttribute('data-text', t.title);
  document.getElementById('subtitle').textContent = t.subtitle;
  const footerTextEl = document.getElementById('footer-text');
  if (footerTextEl) {
    footerTextEl.textContent = t.footer;
  }
  document.documentElement.lang = currentLang;
}

function renderRules() {
  const t = translations[currentLang];
  const container = document.getElementById('content-sections');
  container.innerHTML = '';

  t.sections.forEach((section, index) => {
    const card = document.createElement('div');
    card.className = 'section-card';
    if(index === 0) card.classList.add('active');

    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `<h2><i class="fa-solid ${section.icon} icon"></i> ${section.title}</h2><i class="fa-solid fa-chevron-down toggle-icon"></i>`;

    const content = document.createElement('div');
    content.className = 'section-content';
    content.innerHTML = section.content;

    header.addEventListener('click', () => {
      card.classList.toggle('active');
      content.style.maxHeight = card.classList.contains('active') ? content.scrollHeight + "px" : "0";
    });

    card.appendChild(header);
    card.appendChild(content);
    container.appendChild(card);

    if(card.classList.contains('active')) {
      setTimeout(() => content.style.maxHeight = content.scrollHeight + "px", 100);
    }
  });
}

function renderMatches() {
  const containerToday = document.getElementById('matches-grid');
  const containerUpcoming = document.getElementById('upcoming-grid');
  
  if (containerToday) containerToday.innerHTML = '';
  if (containerUpcoming) containerUpcoming.innerHTML = '';
  
  matchesData.forEach((m, idx) => {
    const card = document.createElement('div');
    card.className = 'match-card';
    
    const vote = userVotes[idx] || { score1: '', score2: '' };
    let centerContent = `
      <div class="prediction-container ${m.locked ? 'locked' : ''}">
        <input type="number" class="pred-input" min="0" max="9" placeholder="-" data-match="${idx}" data-team="1" value="${vote.score1}" ${m.locked ? 'disabled' : ''}>
        <span class="pred-divider">-</span>
        <input type="number" class="pred-input" min="0" max="9" placeholder="-" data-match="${idx}" data-team="2" value="${vote.score2}" ${m.locked ? 'disabled' : ''}>
      </div>
      ${m.locked ? '<div class="locked-msg" style="color:#ff4757; font-size:0.8rem; margin-top:5px; font-weight:bold;"><i class="fa-solid fa-lock"></i> Tiempo límite superado</div>' : ''}
    `;
    let saveButton = `<button class="save-pred-btn" onclick="savePrediction(this, ${idx})" ${m.locked ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}><i class="fa-solid fa-floppy-disk"></i> Guardar Porra</button>`;


    card.innerHTML = `
      <div class="match-header">
        <div class="match-group">${m.group}</div>
        <div class="match-time-inline">
          <i class="fa-regular fa-calendar"></i> ${m.date} &nbsp;|&nbsp; <i class="fa-regular fa-clock"></i> ${m.time}
        </div>
      </div>
      <div class="match-info">
        <div class="teams-container">
          <div class="team">
            <div class="flag-container">
                <img src="https://hatscripts.github.io/circle-flags/flags/${m.code1}.svg" class="flag-img" alt="${m.team1}">
            </div>
            <span class="team-name">${m.team1}</span>
          </div>
          ${centerContent}
          <div class="team">
            <div class="flag-container">
                <img src="https://hatscripts.github.io/circle-flags/flags/${m.code2}.svg" class="flag-img" alt="${m.team2}">
            </div>
            <span class="team-name">${m.team2}</span>
          </div>
        </div>
        <div style="margin-top: 1rem; text-align: center; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 1rem;">
            <button class="phase-btn" style="width: 100%; background: rgba(255,255,255,0.05); color: #fff; font-size: 0.95rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem;" onclick="openSquads(${idx})">
                <i class="fa-solid fa-users"></i> Alineaciones y Estadísticas
            </button>
        </div>
      </div>
      ${saveButton}
    `;
    if (m.isUpcoming) {
        if (containerUpcoming) containerUpcoming.appendChild(card);
    } else {
        if (containerToday) containerToday.appendChild(card);
    }
  });
}

window.savePrediction = function(btn, idx) {
  if (!isLoggedIn) {
    alert("Para guardar tu porra y participar en los premios, debes inscribirte o iniciar sesión.");
    document.getElementById('auth-modal').classList.add('show');
    return;
  }

  const container = btn.parentElement.querySelector('.prediction-container');
  const inputs = container.querySelectorAll('input');
  const score1 = inputs[0].value;
  const score2 = inputs[1].value;

  if (score1 === '' || score2 === '') {
    alert("Por favor, introduce ambos resultados.");
    return;
  }

  userVotes[idx] = { score1, score2 };
  
  btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Guardada!';
  btn.classList.add('saved');
  
  // Also update user panel if visible
  renderUserPanel();
  
  setTimeout(() => {
    btn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Guardar Porra';
    btn.classList.remove('saved');
  }, 2000);
};

window.logout = function() {
    isLoggedIn = false;
    isAdmin = false;
    currentUsername = "";
    userVotes = {};
    
    document.getElementById('login-btn').innerHTML = '<i class="fa-solid fa-user"></i> <span data-i18n="nav_login">Entrar / Registro</span>';
    document.getElementById('login-btn').style.background = 'var(--primary-gold)';
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('admin-tab-btn').style.display = 'none';
    document.getElementById('user-tab-btn').style.display = 'none';
    document.getElementById('floating-submit').style.display = 'none';
    
    // Switch to first tab
    document.querySelector('.tab-btn[data-tab="reglas"]').click();
    
    renderMatches();
    updateChatInputUI();
}

function renderUserPanel() {
    const list = document.getElementById('user-votes-list');
    const nameEl = document.getElementById('panel-username');
    const avatarEl = document.getElementById('panel-avatar');
    
    if (!list) return;
    
    nameEl.textContent = currentUsername;
    avatarEl.textContent = currentUsername.charAt(0).toUpperCase();
    
    list.innerHTML = '';
    
    const votedIndices = Object.keys(userVotes);
    
    if (votedIndices.length === 0) {
        list.innerHTML = '<div style="color: var(--text-muted); text-align: center; padding: 2rem;">Aún no has realizado ningún pronóstico. ¡Ve a la pestaña de Partidos y empieza a jugar!</div>';
        return;
    }
    
    votedIndices.forEach(idx => {
        const m = matchesData[idx];
        const vote = userVotes[idx];
        
        list.innerHTML += `
            <div class="admin-bet-card">
               <div class="admin-bet-info">
                 <div class="admin-bet-user">${m.team1} vs ${m.team2}</div>
                 <div class="admin-bet-match">${m.date} - ${m.group}</div>
               </div>
               <div class="admin-bet-score">${vote.score1} - ${vote.score2}</div>
            </div>
        `;
    });
}

function renderLeaderboard() {
  const tbody = document.getElementById('leaderboard-body');
  tbody.innerHTML = '';
  const sorted = [...leaderboardData].sort((a,b) => b.total - a.total);
  
  sorted.forEach((player, index) => {
    const pos = index + 1;
    let posClass = '';
    if(pos === 1) posClass = 'pos-1';
    if(pos === 2) posClass = 'pos-2';
    if(pos === 3) posClass = 'pos-3';
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="${posClass}">${pos}</td>
      <td class="player-name">${player.name}</td>
      <td>${player.f1}</td>
      <td>${player.f2}</td>
      <td class="live-score">${player.live > 0 ? '+'+player.live : player.live}</td>
      <td class="total-score">${player.total}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderPrizes() {
  const container = document.getElementById('live-prizes-grid');
  container.innerHTML = '';
  prizesData.forEach(p => {
    const isWon = p.winner !== null;
    const card = document.createElement('div');
    card.className = `prize-card ${isWon ? 'won' : ''}`;
    
    card.innerHTML = `
      <h3>${p.title}</h3>
      <div class="prize-amount">${p.amount}</div>
      <div class="winner-info">
        ${isWon ? `<span class="won-badge">GANADO</span> <span>${p.winner}</span>` : `<i class="fa-solid fa-hourglass-half"></i> En juego`}
      </div>
    `;
    container.appendChild(card);
  });
}

function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      document.getElementById(`tab-${targetId}`).classList.add('active');
    });
  });
}

function setupModal() {
  const modal = document.getElementById('auth-modal');
  const loginBtn = document.getElementById('login-btn');
  const closeBtn = document.querySelector('.close-modal');
  const registerForm = document.getElementById('auth-form');
  const loginForm = document.getElementById('login-form');
  const authDesc = document.getElementById('auth-desc');

  loginBtn.addEventListener('click', () => {
    modal.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

  // Tabs logic
  const authTabs = document.querySelectorAll('.auth-tab-btn');
  authTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      authTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.getAttribute('data-auth') === 'register') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
        authDesc.style.display = 'block';
      } else {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        authDesc.style.display = 'none';
      }
    });
  });

  // Admin login logic
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;
    
    if (user.toLowerCase() === "ivan" && pass === "2007") {
       isAdmin = true;
       isLoggedIn = true;
       currentUsername = "Ivan (Admin)";
       modal.classList.remove('show');
       document.getElementById('login-btn').innerHTML = '<i class="fa-solid fa-shield-halved"></i> <span>Panel Admin</span>';
       document.getElementById('login-btn').style.background = 'var(--accent-neon)';
       document.getElementById('logout-btn').style.display = 'inline-block';
       
       // Show admin tab
       const adminTabBtn = document.getElementById('admin-tab-btn');
       adminTabBtn.style.display = 'inline-block';
       adminTabBtn.click(); // go to admin tab
       
       document.getElementById('floating-submit').style.display = 'flex';
       
       renderAdminPanel();
       renderMatches();
       updateChatInputUI();
       if (activeLiveMatchIdx !== -1) renderLivePoll(matchesData[activeLiveMatchIdx]);
    } else {
       alert("Credenciales incorrectas");
    }
  });
  
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Form Validation & Anti-Duplicate (Basic Security)
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    
    if(name.length < 3) { alert("El nombre debe tener al menos 3 caracteres."); return; }
    if(!email.includes('@') || !email.includes('.')) { alert("Correo electrónico inválido."); return; }
    if(phone.length < 9) { alert("El teléfono debe tener al menos 9 dígitos."); return; }

    const submitBtn = registerForm.querySelector('button[type="submit"]');
    if(submitBtn.disabled) return; // Anti-duplicate
    submitBtn.disabled = true;
    
    activityLogs.unshift({ time: new Date().toLocaleTimeString('es-ES', {hour: '2-digit', minute:'2-digit'}), msg: `Nuevo registro completado: ${name}`});
    if(isAdmin) renderAdminPanel();
    
    const container = document.getElementById('auth-form-container');
    const originalHTML = container.innerHTML;
    
    container.innerHTML = `
      <div style="text-align: center; padding: 1rem 0;">
        <h2 style="color: #fff; margin-bottom: 0.5rem; font-family: 'Outfit';">Paso Final: Confirmar Inscripción</h2>
        <p style="color: #9aa0a6; margin-bottom: 2rem;">Abona la cuota de participación a través de nuestra pasarela segura.</p>
        
        <div class="bizum-card" style="background: linear-gradient(135deg, #00c6ff, #0072ff); border: none; box-shadow: 0 15px 35px rgba(0,114,255,0.4);">
          <div style="background: #fff; padding: 1rem; border-radius: 12px; margin-bottom: 1.5rem;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bizum.svg/2560px-Bizum.svg.png" alt="Bizum" style="height: 40px;">
          </div>
          <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 2px;">Importe a pagar</p>
          <p style="font-size: 3rem; color: #fff; font-weight: 800; margin-bottom: 1.5rem; font-family: 'Outfit';">30,00 €</p>
          <button class="bizum-btn" id="bizum-pay-btn" style="background: #fff; color: #0072ff; border: none; font-size: 1.2rem; box-shadow: 0 10px 20px rgba(0,0,0,0.2);">
            <i class="fa-solid fa-shield-halved"></i> Pagar ahora
          </button>
          <p style="margin-top: 1.5rem; font-size: 0.8rem; color: rgba(255,255,255,0.7);"><i class="fa-solid fa-lock"></i> Pago seguro encriptado SSL</p>
        </div>
      </div>
    `;
    
    document.getElementById('bizum-pay-btn').addEventListener('click', () => {
      const bizumCard = document.querySelector('.bizum-card');
      bizumCard.innerHTML = `
        <div class="loader-container">
          <div class="spinner"></div>
          <p style="margin-top: 1rem; color: #00ff88; font-weight: 500;">Conectando con tu banco...</p>
        </div>
      `;

      setTimeout(() => {
        container.innerHTML = `
          <div style="text-align: center; padding: 2rem 0;">
            <i class="fa-solid fa-circle-check" style="font-size: 4.5rem; color: #00ff88; margin-bottom: 1.5rem; text-shadow: 0 0 20px rgba(0,255,136,0.4);"></i>
            <h2 style="color: #00ff88; margin-bottom: 0.5rem;">¡Pago Completado!</h2>
            <p style="color: #9aa0a6;">Estás oficialmente inscrito en La Porra del Mundial 2026. ¡Mucha suerte!</p>
            <button class="submit-btn" id="close-success-btn" style="margin-top: 2rem;">Acceder a mi panel</button>
          </div>
        `;
        
        document.getElementById('close-success-btn').addEventListener('click', () => {
          modal.classList.remove('show');
          document.getElementById('login-btn').innerHTML = '<i class="fa-solid fa-user-check"></i> <span>Mi Panel</span>';
          document.getElementById('login-btn').style.background = 'var(--accent-neon)';
          document.getElementById('logout-btn').style.display = 'inline-block';
          document.getElementById('user-tab-btn').style.display = 'inline-block';
          
          isLoggedIn = true;
          currentUsername = document.getElementById('reg-name').value || "Usuario_" + Math.floor(Math.random()*1000);
          
          document.getElementById('floating-submit').style.display = 'flex';
          
          renderMatches();
          renderUserPanel();
          updateChatInputUI();
          if (activeLiveMatchIdx !== -1) renderLivePoll(matchesData[activeLiveMatchIdx]);
          
          // Restore form for next time (optional)
          setTimeout(() => container.innerHTML = originalHTML, 500);
        });
      }, 2500); // Simulate Bizum processing time
    });
  });
}

let isSubmittingAll = false;

window.submitAllPredictions = function() {
    if (isSubmittingAll) return; // Anti-duplicate
    isSubmittingAll = true;
    
    const btn = document.getElementById('floating-submit');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
    btn.style.pointerEvents = 'none';
    
    activityLogs.unshift({ time: new Date().toLocaleTimeString('es-ES', {hour: '2-digit', minute:'2-digit'}), msg: `${currentUsername} ha enviado sus pronósticos globales.`});
    if(isAdmin) renderAdminPanel();
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Pronósticos Guardados!';
        btn.style.background = 'linear-gradient(45deg, var(--primary-gold), #ffdf00)';
        btn.style.color = '#000';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = 'linear-gradient(45deg, var(--accent-neon), #00cc6a)';
            btn.style.pointerEvents = 'auto';
            isSubmittingAll = false;
        }, 3000);
    }, 1500);
}

function renderAdminPanel() {
   const totalMoney = document.getElementById('admin-total-money');
   const totalUsers = document.getElementById('admin-total-users');
   const betsList = document.getElementById('admin-bets-list');
   const logsList = document.getElementById('admin-logs-list');
   
   // Hardcoded stats based on rules
   totalUsers.textContent = "26"; // 25 + new
   totalMoney.textContent = (26 * 30) + " €";
   
   if(logsList) {
       logsList.innerHTML = activityLogs.map(log => `
           <div class="log-item" style="border-bottom: 1px dashed rgba(255,255,255,0.1); padding: 0.5rem 0;">
               <span class="log-time" style="color:var(--text-muted); margin-right:10px;">[${log.time}]</span>
               <span class="log-msg" style="color:#fff;">${log.msg}</span>
           </div>
       `).join('');
   }
   
   betsList.innerHTML = '';
   allBetsData.forEach(bet => {
      betsList.innerHTML += `
        <div class="admin-bet-card">
           <div class="admin-bet-info">
             <div class="admin-bet-user"><i class="fa-solid fa-user"></i> ${bet.user}</div>
             <div class="admin-bet-match">${bet.match}</div>
           </div>
           <div class="admin-bet-score">${bet.score}</div>
        </div>
      `;
   });
   
   renderAdminMatches();
}

function renderAdminMatches() {
   const container = document.getElementById('admin-matches-list');
   container.innerHTML = '';
   matchesData.forEach((m, idx) => {
       container.innerHTML += `
         <div class="admin-bet-card">
            <div class="admin-bet-info">
              <div class="admin-bet-user">${m.team1} <span style="color:#9aa0a6;font-size:0.9rem">vs</span> ${m.team2}</div>
              <div class="admin-bet-match">Grupo: ${m.group}</div>
            </div>
            <div class="admin-match-edit">
              <input type="text" id="edit-date-${idx}" value="${m.date}" class="edit-input" title="Fecha">
              <input type="text" id="edit-time-${idx}" value="${m.time}" class="edit-input" title="Hora">
              <button class="save-edit-btn" onclick="updateMatchTime(event, ${idx})"><i class="fa-solid fa-floppy-disk"></i></button>
            </div>
         </div>
       `;
   });
}

window.updateMatchTime = function(event, idx) {
   const newDate = document.getElementById(`edit-date-${idx}`).value;
   const newTime = document.getElementById(`edit-time-${idx}`).value;
   
   matchesData[idx].date = newDate;
   matchesData[idx].time = newTime;
   
   // Re-render user view so they see the updated time immediately
   renderMatches();
   
   // visual feedback
   const btn = event.currentTarget;
   btn.classList.add('saved');
   btn.innerHTML = '<i class="fa-solid fa-check"></i>';
   setTimeout(() => {
       btn.classList.remove('saved');
       btn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
   }, 1500);
}

function renderCalendarGroups() {
    const container = document.getElementById('phase-grupos');
    container.innerHTML = '';
    
    const grid = document.createElement('div');
    grid.className = 'groups-grid';
    
    for (const [groupName, teams] of Object.entries(groupsData)) {
        let teamsHTML = teams.map(t => `
            <div class="group-team-row">
                <img src="https://hatscripts.github.io/circle-flags/flags/${t.code}.svg" class="group-flag" alt="${t.name}">
                <span>${t.name}</span>
            </div>
        `).join('');
        
        grid.innerHTML += `
            <div class="group-card">
                <div class="group-header">GRUPO ${groupName}</div>
                <div class="group-teams">${teamsHTML}</div>
            </div>
        `;
    }
    
    container.appendChild(grid);

    // Setup phase buttons
    const phaseBtns = document.querySelectorAll('.phase-btn');
    const phaseContents = document.querySelectorAll('.phase-content');
    phaseBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        phaseBtns.forEach(b => b.classList.remove('active'));
        phaseContents.forEach(c => c.style.display = 'none');
        btn.classList.add('active');
        document.getElementById('phase-' + btn.getAttribute('data-phase')).style.display = 'block';
      });
    });
}

function renderBracket() {
    const container = document.querySelector('.bracket-container');
    container.innerHTML = `
        <div class="bracket-round">
            <h3>Octavos de Final</h3>
            <div class="bracket-match"><span>1A</span> vs <span>2B</span></div>
            <div class="bracket-match"><span>1C</span> vs <span>2D</span></div>
            <div class="bracket-match"><span>1E</span> vs <span>2F</span></div>
            <div class="bracket-match"><span>1G</span> vs <span>2H</span></div>
        </div>
        <div class="bracket-round">
            <h3>Cuartos de Final</h3>
            <div class="bracket-match"><span>Ganador O1</span> vs <span>Ganador O2</span></div>
            <div class="bracket-match"><span>Ganador O3</span> vs <span>Ganador O4</span></div>
        </div>
        <div class="bracket-round">
            <h3>Semifinales</h3>
            <div class="bracket-match"><span>Ganador C1</span> vs <span>Ganador C2</span></div>
        </div>
        <div class="bracket-round final-round">
            <h3>La Gran Final</h3>
            <div class="bracket-match final-match">
              <i class="fa-solid fa-trophy"></i>
              <span>Campeón del Mundo</span>
            </div>
        </div>
    `;
}

// --- Live Match Simulation Logic ---
function renderLiveSelector() {
    const container = document.getElementById('live-match-selector');
    container.innerHTML = '';
    
    matchesData.forEach((m, idx) => {
        container.innerHTML += `
            <div class="live-select-card" onclick="startLiveMatch(${idx})">
                <span>${m.team1} vs ${m.team2}</span>
                <i class="fa-solid fa-play"></i>
            </div>
        `;
    });
    updateChatInputUI();
}

const fakeChatUsers = ["Marta99", "FutboleroOK", "JuanchoX", "LaPorraMaster", "DavidGol", "Gamer2026", "Lara_FC", "Jose_Crack"];
const fakeChatMessages = ["¡Qué paradón!", "GOOOOOOOL", "Vaya aburrimiento de partido", "Eso era roja clarísima", "Vamos equipo!!!", "El árbitro está ciego", "Partidazo hoy", "Tengo 3 puntos en la porra por esto", "No me lo creo"];

let liveInterval = null;
let currentLiveMinute = 0;
let liveScore1 = 0;
let liveScore2 = 0;
let activeLiveMatchIdx = -1;

let liveStats = { pos1: 50, shots1: 0, shots2: 0, fouls1: 0, fouls2: 0 };

function updateStatsUI() {
    document.getElementById('stat-pos-1').textContent = liveStats.pos1 + "%";
    document.getElementById('stat-pos-2').textContent = (100 - liveStats.pos1) + "%";
    document.getElementById('bar-pos').style.width = liveStats.pos1 + "%";
    document.getElementById('stat-shots-1').textContent = liveStats.shots1;
    document.getElementById('stat-shots-2').textContent = liveStats.shots2;
    document.getElementById('stat-fouls-1').textContent = liveStats.fouls1;
    document.getElementById('stat-fouls-2').textContent = liveStats.fouls2;
}

function renderLivePoll(match) {
    const pollPanel = document.getElementById('live-poll-panel');
    if (!isLoggedIn) {
        pollPanel.innerHTML = `
            <h3><i class="fa-solid fa-chart-pie"></i> Predicción en Directo</h3>
            <div class="poll-msg">Inicia sesión o regístrate para votar quién ganará y unirte al público.</div>
        `;
        return;
    }
    
    // Fake percentages
    const fakeP1 = Math.floor(Math.random() * 40) + 20;
    const fakeP2 = Math.floor(Math.random() * 30) + 10;
    const fakePX = 100 - fakeP1 - fakeP2;
    
    pollPanel.innerHTML = `
        <h3><i class="fa-solid fa-chart-pie"></i> Tu Predicción en Directo</h3>
        <div class="poll-buttons" id="poll-options">
            <button class="poll-btn" onclick="submitPoll(1, ${fakeP1}, ${fakePX}, ${fakeP2})"><span>${match.team1}</span> <span class="poll-pct" style="display:none">${fakeP1}%</span></button>
            <button class="poll-btn" onclick="submitPoll('X', ${fakeP1}, ${fakePX}, ${fakeP2})"><span>Empate</span> <span class="poll-pct" style="display:none">${fakePX}%</span></button>
            <button class="poll-btn" onclick="submitPoll(2, ${fakeP1}, ${fakePX}, ${fakeP2})"><span>${match.team2}</span> <span class="poll-pct" style="display:none">${fakeP2}%</span></button>
        </div>
    `;
}

window.submitPoll = function(choice, p1, px, p2) {
    const btns = document.querySelectorAll('.poll-btn');
    const pcts = document.querySelectorAll('.poll-pct');
    
    if(choice === 1) p1++; else if(choice === 'X') px++; else p2++;
    
    pcts[0].textContent = p1 + "%"; pcts[0].style.display = 'inline';
    pcts[1].textContent = px + "%"; pcts[1].style.display = 'inline';
    pcts[2].textContent = p2 + "%"; pcts[2].style.display = 'inline';
    
    btns.forEach(b => { b.onclick = null; b.style.cursor = 'default'; b.style.background = '#11141a'; b.style.color = '#fff'; b.style.borderColor = 'rgba(255,255,255,0.2)'; });
    
    if(choice === 1) { btns[0].style.background = 'var(--primary-gold)'; btns[0].style.color = '#000'; }
    if(choice === 'X') { btns[1].style.background = 'var(--primary-gold)'; btns[1].style.color = '#000'; }
    if(choice === 2) { btns[2].style.background = 'var(--primary-gold)'; btns[2].style.color = '#000'; }
    
    // Auto chat message for immersion
    addChatMessage(currentUsername, "Acabo de votar en el partido. ¡Vamos!", true);
}

window.startLiveMatch = function(idx) {
    activeLiveMatchIdx = idx;
    const match = matchesData[idx];
    document.querySelector('.live-selector-area').style.display = 'none';
    document.getElementById('live-match-area').style.display = 'block';
    
    document.getElementById('live-flag-1').src = `https://hatscripts.github.io/circle-flags/flags/${match.code1}.svg`;
    document.getElementById('live-name-1').textContent = match.team1;
    document.getElementById('live-flag-2').src = `https://hatscripts.github.io/circle-flags/flags/${match.code2}.svg`;
    document.getElementById('live-name-2').textContent = match.team2;
    
    // Reset state
    currentLiveMinute = 0;
    liveScore1 = 0;
    liveScore2 = 0;
    liveStats = { pos1: 50, shots1: 0, shots2: 0, fouls1: 0, fouls2: 0 };
    
    document.getElementById('live-score-1').textContent = '0';
    document.getElementById('live-score-2').textContent = '0';
    document.getElementById('live-minute').textContent = "00'";
    document.getElementById('pitch-ball').style.left = "50%";
    
    updateStatsUI();
    renderLivePoll(match);
    
    const feed = document.getElementById('commentary-feed');
    feed.innerHTML = `<div class="comment">¡Arranca el partido! Empieza a rodar el balón en el estadio.</div>`;
    
    const chat = document.getElementById('chat-messages');
    chat.innerHTML = `<div class="chat-msg"><span class="chat-user">Sistema:</span> <span class="chat-text" style="color:var(--text-muted)">Bienvenido al chat global del partido.</span></div>`;
    
    if(liveInterval) clearInterval(liveInterval);
    
    // Simulate events every 2 seconds
    liveInterval = setInterval(() => {
        currentLiveMinute += Math.floor(Math.random() * 5) + 1; // advance 1 to 5 mins
        if (currentLiveMinute >= 90) {
            clearInterval(liveInterval);
            document.getElementById('live-minute').textContent = "90'";
            feed.innerHTML = `<div class="comment highlight-comment">¡FINAL DEL PARTIDO! Resultado definitivo: ${match.team1} ${liveScore1} - ${liveScore2} ${match.team2}</div>` + feed.innerHTML;
            document.getElementById('pitch-ball').style.left = "50%";
            return;
        }
        
        document.getElementById('live-minute').textContent = currentLiveMinute + "'";
        
        // Random event generator
        const r = Math.random();
        let eventText = "";
        const ball = document.getElementById('pitch-ball');
        
        // Update possession
        liveStats.pos1 += (Math.floor(Math.random() * 11) - 5);
        if(liveStats.pos1 > 75) liveStats.pos1 = 75;
        if(liveStats.pos1 < 25) liveStats.pos1 = 25;
        
        if (r > 0.9) {
            liveScore1++;
            liveStats.shots1++;
            document.getElementById('live-score-1').textContent = liveScore1;
            eventText = `<div class="comment goal-comment"><i class="fa-solid fa-futbol"></i> ¡GOOOOOOL DE ${match.team1.toUpperCase()}! Disparo espectacular desde fuera del área.</div>`;
            ball.style.left = "10%"; // Team 1 scoring area
        } else if (r > 0.8) {
            liveScore2++;
            liveStats.shots2++;
            document.getElementById('live-score-2').textContent = liveScore2;
            eventText = `<div class="comment goal-comment"><i class="fa-solid fa-futbol"></i> ¡GOOOOOOL DE ${match.team2.toUpperCase()}! Remate de cabeza imparable al fondo de la red.</div>`;
            ball.style.left = "90%"; // Team 2 scoring area
        } else if (r > 0.65) {
            const isT1 = Math.random() > 0.5;
            if(isT1) liveStats.fouls1++; else liveStats.fouls2++;
            eventText = `<div class="comment"><i class="fa-solid fa-square" style="color: #ffdf00;"></i> Tarjeta amarilla para un jugador de ${isT1 ? match.team1 : match.team2}. Entrada peligrosa.</div>`;
            ball.style.left = (Math.random() * 60 + 20) + "%";
        } else if (r > 0.5) {
            liveStats.shots1++;
            eventText = `<div class="comment">¡Uyyy! Ocasión clarísima para ${match.team1}. El balón roza el poste y se marcha por poco.</div>`;
            ball.style.left = "15%";
        } else if (r > 0.35) {
            liveStats.shots2++;
            eventText = `<div class="comment">Gran parada del portero de ${match.team2} tras un fuerte disparo. ¡Sigue la igualdad!</div>`;
            ball.style.left = "85%";
        } else {
            eventText = `<div class="comment">Juego detenido en el medio campo. Posesión muy disputada por ambos equipos.</div>`;
            ball.style.left = (Math.random() * 40 + 30) + "%"; // 30-70 middle area
        }
        
        updateStatsUI();
        
        feed.innerHTML = `<div><span style="color: var(--accent-neon); font-weight:bold; margin-right: 5px;">${currentLiveMinute}'</span> ` + eventText + `</div>` + feed.innerHTML;
        
        // Fake Chat generation
        if (Math.random() > 0.5) {
            const rUser = fakeChatUsers[Math.floor(Math.random() * fakeChatUsers.length)];
            const rMsg = fakeChatMessages[Math.floor(Math.random() * fakeChatMessages.length)];
            addChatMessage(rUser, rMsg);
        }
        
    }, 2500); // 2.5 seconds per event update
}

window.stopLiveMatch = function() {
    if(liveInterval) clearInterval(liveInterval);
    document.querySelector('.live-selector-area').style.display = 'block';
    document.getElementById('live-match-area').style.display = 'none';
}

// Chat UI logic
function updateChatInputUI() {
    const chatInputArea = document.getElementById('chat-input-area');
    if (!chatInputArea) return;
    
    if (isLoggedIn) {
        chatInputArea.innerHTML = `
            <div class="chat-input-box">
                <input type="text" id="chat-msg-input" placeholder="Escribe un mensaje..." onkeypress="if(event.key === 'Enter') sendChatMessage()">
                <button onclick="sendChatMessage()"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        `;
    } else {
        chatInputArea.innerHTML = `<div class="chat-login-msg">Inicia sesión o regístrate para participar en el chat.</div>`;
    }
}

window.sendChatMessage = function() {
    const input = document.getElementById('chat-msg-input');
    if(!input || input.value.trim() === '') return;
    
    addChatMessage(currentUsername, input.value, true);
    input.value = '';
}

function addChatMessage(user, msg, isSelf = false) {
    const chat = document.getElementById('chat-messages');
    if(!chat) return;
    
    chat.innerHTML += `
        <div class="chat-msg ${isSelf ? 'self' : ''}">
            <span class="chat-user">${user}:</span> 
            <span class="chat-text">${msg}</span>
        </div>
    `;
    chat.scrollTop = chat.scrollHeight;
}

// --- Squads Logic ---
const surnames = {
   es: ["García", "Ramos", "Torres", "Silva", "Pedri", "Morata", "Navas", "Carvajal", "Rodri"],
   ar: ["Messi", "Martínez", "Álvarez", "De Paul", "Romero", "Fernández", "Di María", "Paredes"],
   fr: ["Mbappé", "Griezmann", "Tchouaméni", "Hernández", "Dembele", "Giroud", "Koundé", "Camavinga"],
   br: ["Neymar", "Vinicius", "Rodrygo", "Casemiro", "Silva", "Alisson", "Marquinhos", "Richarlison"],
   default: ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Gomez", "Silva", "Santos"]
};

function generateSquad(teamName, countryCode) {
    const code = countryCode.toLowerCase();
    const namesList = surnames[code] || surnames.default;
    
    const squad = [];
    const positions = ['POR', 'DEF', 'DEF', 'DEF', 'DEF', 'MED', 'MED', 'MED', 'DEL', 'DEL', 'DEL'];
    
    for(let i=0; i<11; i++) {
        const rndName = namesList[Math.floor(Math.random() * namesList.length)];
        const initial = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + ". ";
        squad.push({
            name: initial + rndName,
            pos: positions[i],
            number: i === 0 ? 1 : Math.floor(Math.random()*22)+2,
            face: `https://api.dicebear.com/7.x/avataaars/svg?seed=${rndName}${i}&backgroundColor=b6e3f4,c0aede,d1d4f9`,
            rating: Math.floor(Math.random()*15) + 75,
            goals: positions[i] === 'DEL' ? Math.floor(Math.random()*15) : Math.floor(Math.random()*3),
            assists: Math.floor(Math.random()*10),
            speed: Math.floor(Math.random()*20) + 70,
            shot: Math.floor(Math.random()*20) + 70,
            stamina: Math.floor(Math.random()*25) + 70,
            passing: Math.floor(Math.random()*25) + 70,
            defending: Math.floor(Math.random()*25) + 70,
            yellowCards: Math.floor(Math.random()*3),
            redCards: Math.random() > 0.9 ? 1 : 0,
            minutes: Math.floor(Math.random()*270)
        });
    }
    return squad;
}

const cachedSquads = {};

window.openSquads = function(idx) {
    const match = matchesData[idx];
    const modal = document.getElementById('squad-modal');
    
    if(!cachedSquads[match.team1]) cachedSquads[match.team1] = generateSquad(match.team1, match.code1);
    if(!cachedSquads[match.team2]) cachedSquads[match.team2] = generateSquad(match.team2, match.code2);
    
    // Add match context
    const stadiums = ["Estadio Azteca", "MetLife Stadium", "SoFi Stadium", "AT&T Stadium", "Hard Rock Stadium", "BMO Field"];
    const referees = ["Pierluigi Collina", "Mateu Lahoz", "Daniele Orsato", "Szymon Marciniak", "César Ramos", "Wilton Sampaio"];
    const weather = ["Soleado, 25°C", "Nublado, 18°C", "Lluvia ligera, 15°C", "Noche despejada, 20°C", "Caluroso, 30°C"];
    
    if(!match.stadium) match.stadium = stadiums[Math.floor(Math.random() * stadiums.length)];
    if(!match.referee) match.referee = referees[Math.floor(Math.random() * referees.length)];
    if(!match.weather) match.weather = weather[Math.floor(Math.random() * weather.length)];

    const tabs = document.getElementById('squad-tabs');
    tabs.innerHTML = `
        <div class="squad-tab active" onclick="renderMatchDetails(${idx})">
            <i class="fa-solid fa-circle-info"></i> Info Partido
        </div>
        <div class="squad-tab" onclick="renderSquadView('${match.team1}', ${idx})">
            <img src="https://hatscripts.github.io/circle-flags/flags/${match.code1}.svg" class="squad-tab-flag"> ${match.team1}
        </div>
        <div class="squad-tab" onclick="renderSquadView('${match.team2}', ${idx})">
            <img src="https://hatscripts.github.io/circle-flags/flags/${match.code2}.svg" class="squad-tab-flag"> ${match.team2}
        </div>
    `;
    
    renderMatchDetails(idx);
    modal.classList.add('show');
}

window.renderMatchDetails = function(idx) {
    const tabs = document.querySelectorAll('.squad-tab');
    tabs.forEach(t => {
        t.classList.remove('active');
        if(t.innerHTML.includes('Info Partido')) t.classList.add('active');
    });

    const match = matchesData[idx];
    const body = document.getElementById('squad-body');
    
    body.innerHTML = `
        <div class="match-details-view">
            <div class="match-details-header">
                <div class="md-team">
                    <img src="https://hatscripts.github.io/circle-flags/flags/${match.code1}.svg" class="md-flag">
                    <h3>${match.team1}</h3>
                    <div class="md-form">Forma: <span class="form-w">V</span><span class="form-d">E</span><span class="form-w">V</span></div>
                </div>
                <div class="md-vs">
                    <div class="md-time">${match.date} | ${match.time}</div>
                    <h2>VS</h2>
                    <div class="md-group">${match.group}</div>
                </div>
                <div class="md-team">
                    <img src="https://hatscripts.github.io/circle-flags/flags/${match.code2}.svg" class="md-flag">
                    <h3>${match.team2}</h3>
                    <div class="md-form">Forma: <span class="form-l">D</span><span class="form-w">V</span><span class="form-l">D</span></div>
                </div>
            </div>
            
            <div class="md-info-grid">
                <div class="md-info-card">
                    <i class="fa-solid fa-stadium"></i>
                    <h4>Estadio</h4>
                    <p>${match.stadium}</p>
                </div>
                <div class="md-info-card">
                    <i class="fa-solid fa-user-tie"></i>
                    <h4>Árbitro</h4>
                    <p>${match.referee}</p>
                </div>
                <div class="md-info-card">
                    <i class="fa-solid fa-cloud-sun"></i>
                    <h4>Clima</h4>
                    <p>${match.weather}</p>
                </div>
                <div class="md-info-card">
                    <i class="fa-solid fa-ticket"></i>
                    <h4>Asistencia (Est.)</h4>
                    <p>${Math.floor(Math.random() * 40000) + 30000} espect.</p>
                </div>
            </div>
            
            <h3 style="color: var(--primary-gold); margin: 2rem 0 1rem; text-align: center;"><i class="fa-solid fa-chart-line"></i> Estadísticas Históricas H2H</h3>
            <div class="h2h-stats">
                <div class="h2h-row">
                    <span class="h2h-val">${Math.floor(Math.random()*10)}</span>
                    <span class="h2h-label">Victorias</span>
                    <span class="h2h-val">${Math.floor(Math.random()*10)}</span>
                </div>
                <div class="h2h-row">
                    <span class="h2h-val">${Math.floor(Math.random()*20)}</span>
                    <span class="h2h-label">Goles a favor</span>
                    <span class="h2h-val">${Math.floor(Math.random()*20)}</span>
                </div>
                <div class="h2h-row">
                    <span class="h2h-val">${Math.floor(Math.random()*5)}</span>
                    <span class="h2h-label">Empates</span>
                    <span class="h2h-val">${Math.floor(Math.random()*5)}</span>
                </div>
                <div class="h2h-row">
                    <span class="h2h-val">${Math.floor(Math.random()*15)}</span>
                    <span class="h2h-label">Partidos Jugados</span>
                    <span class="h2h-val">${Math.floor(Math.random()*15)}</span>
                </div>
            </div>
        </div>
    `;
}

window.renderSquadView = function(teamName, idx) {
    const tabs = document.querySelectorAll('.squad-tab');
    tabs.forEach(t => {
        t.classList.remove('active');
        if(t.innerHTML.includes(teamName)) t.classList.add('active');
    });

    const squad = cachedSquads[teamName];
    const body = document.getElementById('squad-body');
    
    let html = '<div class="players-grid">';
    squad.forEach(p => {
        html += `
            <div class="player-card">
                <div class="player-header">
                    <div class="player-number">${p.number}</div>
                    <div class="player-pos ${p.pos.toLowerCase()}">${p.pos}</div>
                </div>
                <img src="${p.face}" class="player-photo" alt="${p.name}">
                <div class="player-info">
                    <div class="player-name">${p.name}</div>
                    <div class="player-rating">VALORACIÓN: <span class="rating-val">${p.rating}</span></div>
                    
                    <div class="player-stats-extended">
                        <div class="stat-col">
                            <div class="p-stat"><i class="fa-solid fa-futbol" title="Goles"></i> <span>${p.goals}</span></div>
                            <div class="p-stat"><i class="fa-solid fa-shoe-prints" title="Asistencias"></i> <span>${p.assists}</span></div>
                            <div class="p-stat"><i class="fa-solid fa-stopwatch" title="Minutos Jugados"></i> <span>${p.minutes}'</span></div>
                        </div>
                        <div class="stat-col">
                            <div class="p-stat"><i class="fa-solid fa-bolt" title="Velocidad"></i> <span>${p.speed}</span></div>
                            <div class="p-stat"><i class="fa-solid fa-crosshairs" title="Tiro"></i> <span>${p.shot}</span></div>
                            <div class="p-stat"><i class="fa-solid fa-shield-halved" title="Defensa"></i> <span>${p.defending}</span></div>
                        </div>
                        <div class="stat-col">
                            <div class="p-stat"><i class="fa-solid fa-heart-pulse" title="Resistencia"></i> <span>${p.stamina}</span></div>
                            <div class="p-stat"><i class="fa-solid fa-square" style="color:#f1c40f;" title="Tarjetas Amarillas"></i> <span>${p.yellowCards}</span></div>
                            <div class="p-stat"><i class="fa-solid fa-square" style="color:#e74c3c;" title="Tarjetas Rojas"></i> <span>${p.redCards}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    body.innerHTML = html;
}
