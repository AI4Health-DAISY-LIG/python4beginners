const state = { capsules: [], practicalSessions: [], selected: 0, language: localStorage.getItem('site-language') || 'en' };
const tabs = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('[data-panel]');
const copy = {
  en: { overview: 'Overview', courses: 'Capsules', practicalSessions: 'Practical sessions', practicalTitle: 'Put the concepts into practice.', practicalLoading: 'Loading practical sessions...', practicalMissing: 'Practical sessions are not available yet.', about: 'About', github: 'View on GitHub', explore: 'Explore the capsules', reference: 'Open Python documentation', curriculum: 'The curriculum', intro: 'Short, focused resources to help you become confident with Python for scientific work.', select: 'Select a capsule', start: 'Start at the beginning.', prompt: 'Choose a capsule to see its learning outcomes and next steps.', back: 'Back to capsules', tutorial: 'Setup tutorial', language: 'Passer en francais', footer: 'Built for open, careful science' },
  fr: { overview: 'Accueil', courses: 'Capsules', practicalSessions: 'Sessions pratiques', practicalTitle: 'Mettre en pratique les concepts.', practicalLoading: 'Chargement des sessions pratiques...', practicalMissing: "Les sessions pratiques ne sont pas encore disponibles.", about: 'A propos', github: 'Voir sur GitHub', explore: 'Explorer les capsules', reference: 'Ouvrir la documentation Python', curriculum: 'Le parcours', intro: 'Des ressources courtes et ciblees pour prendre confiance en Python applique aux sciences.', select: 'Choisir une capsule', start: 'Commencer ici.', prompt: 'Choisissez une capsule pour voir ses objectifs et les prochaines etapes.', back: 'Retour aux capsules', tutorial: "Tutoriel d'installation", language: 'Switch to English', footer: 'Pour une science ouverte et soigneuse' }
};
const text = (key) => copy[state.language][key];
const localized = (value) => value && typeof value === 'object' && !Array.isArray(value) ? value[state.language] : value;
const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

function showTab(name, updateHash = true) {
  panels.forEach((panel) => panel.classList.toggle('is-visible', panel.dataset.panel === name));
  tabs.forEach((tab) => tab.classList.toggle('is-active', tab.dataset.tab === name));
  if (updateHash) history.pushState(null, '', `#${name}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderStaticText() {
  document.documentElement.lang = state.language;
  document.querySelector('[data-label="overview"]').textContent = text('overview');
  document.querySelector('[data-label="courses"]').textContent = text('courses');
  document.querySelector('[data-label="practical-sessions"]').textContent = text('practicalSessions');
  document.querySelector('[data-label="about"]').textContent = text('about');
  document.querySelector('[data-label="github"]').firstChild.textContent = `${text('github')} `;
  document.querySelector('[data-label="explore"]').firstChild.textContent = `${text('explore')} `;
  document.querySelector('[data-label="reference"]').firstChild.textContent = `${text('reference')} `;
  document.querySelector('[data-label="curriculum"]').textContent = text('curriculum');
  document.querySelector('[data-label="course-intro"]').textContent = text('intro');
  document.querySelector('[data-label="practical-eyebrow"]').textContent = text('practicalSessions');
  document.querySelector('[data-label="practical-title"]').textContent = text('practicalTitle');
  document.querySelector('[data-label="about-eyebrow"]').textContent = state.language === 'en' ? 'About the instructor' : "A propos de l'enseignante";
  document.querySelector('[data-label="about-title"]').innerHTML = state.language === 'en' ? 'Teaching the path from <em>health data</em> to intelligence.' : 'Enseigner le chemin des <em>donnees de sante</em> vers l intelligence.';
  document.querySelector('[data-label="footer-copy"]').textContent = text('footer');
  const languageButton = document.querySelector('#language-toggle');
  languageButton.setAttribute('aria-label', text('language'));
  languageButton.title = text('language');
  languageButton.querySelector('.language-code').textContent = state.language === 'en' ? 'FR' : 'EN';
  document.querySelector('#course-detail').innerHTML = `<p class="detail-kicker">${text('select')}</p><h3>${text('start')}</h3><p>${text('prompt')}</p>`;
}
function renderDetail(capsule) {
  const links = localized(capsule.links) || [];
  document.querySelector('#course-detail').innerHTML = `<p class="detail-kicker">Capsule ${String(capsule.number).padStart(2, '0')} · ${localized(capsule.duration)}</p><h3>${localized(capsule.title)}</h3><p>${localized(capsule.summary)}</p><ul class="detail-outcomes">${localized(capsule.outcomes).map((item) => `<li>${item}</li>`).join('')}</ul><div class="detail-topics">${localized(capsule.topics).map((topic) => `<span class="topic">${topic}</span>`).join('')}</div><div class="detail-links">${links.map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label} ↗</a>`).join('')}</div>`;
}
function renderCourses(capsules) {
  const list = document.querySelector('#course-list');
  document.querySelector('#nav-course-count').textContent = String(capsules.length).padStart(2, '0');
  list.innerHTML = capsules.map((capsule, index) => `<button class="course-row${index === state.selected ? ' is-selected' : ''}" data-course-index="${index}"><span class="course-number">${String(capsule.number).padStart(2, '0')}</span><span><h3>${localized(capsule.title)}</h3><p class="course-meta">${localized(capsule.duration)} · ${localized(capsule.level)}</p></span><span class="course-arrow">→</span></button>`).join('');
  list.querySelectorAll('[data-course-index]').forEach((row) => row.addEventListener('click', () => {
    state.selected = Number(row.dataset.courseIndex);
    if (state.selected === 0) {
      window.location.href = 'tutorial.html?lesson=setup';
      return;
    }
    renderCourses(state.capsules);
  }));
  if (capsules[state.selected]) renderDetail(capsules[state.selected]);
}
function renderPracticalSessions(sessions) {
  const list = document.querySelector('#practical-sessions-index');
  if (!sessions.length) {
    list.innerHTML = `<p>${text('practicalMissing')}</p>`;
    return;
  }
  list.innerHTML = sessions.map((session) => {
    const title = escapeHTML(localized(session.title) || session.slug);
    const authors = escapeHTML((session.author || []).join(', '));
    const slug = encodeURIComponent(session.slug);
    return `<a class="tutorial-index-link" href="tutorial.html?collection=practical_sessions&lesson=${slug}"><span>${escapeHTML(session.number)}</span><div class="title">${title}</div><div class="author">${authors}</div></a>`;
  }).join('');
}
function renderLesson(capsule) {
  const lesson = localized(capsule.lesson);
  document.querySelector('#lesson-content').innerHTML = `<p class="eyebrow">${text('tutorial')} · ${localized(capsule.duration)}</p><h2>${localized(capsule.title)}</h2><p class="lesson-intro">${lesson.intro}</p><div class="lesson-sections">${lesson.sections.map((section) => `<article class="lesson-section"><p class="detail-kicker">${section.title}</p><h3>${section.why}</h3><ol>${section.steps.map((step) => `<li>${step}</li>`).join('')}</ol>${section.code ? `<pre><code>${section.code}</code></pre>` : ''}${section.link ? `<a class="lesson-link" href="${section.link.url}" target="_blank" rel="noreferrer">${section.link.label} ↗</a>` : ''}${section.troubleshooting ? `<div class="troubleshooting">${section.troubleshooting.map((item) => `<div><strong>${item.problem}</strong><p>${item.solution}</p></div>`).join('')}</div>` : ''}</article>`).join('')}</div><p class="lesson-closing">${lesson.closing}</p>`;
}
function setLanguage(language) {
  state.language = language;
  localStorage.setItem('site-language', language);
  renderStaticText();
  renderPracticalSessions(state.practicalSessions);
  if (state.capsules.length) { renderCourses(state.capsules); renderLesson(state.capsules[0]); }
}
tabs.forEach((tab) => tab.addEventListener('click', () => showTab(tab.dataset.tab)));
document.querySelector('#language-toggle').addEventListener('click', () => setLanguage(state.language === 'en' ? 'fr' : 'en'));
document.querySelector('#back-to-courses').addEventListener('click', () => showTab('courses'));
async function loadCourseData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Course data unavailable');
    const catalog = await response.json();
    state.capsules = await Promise.all(catalog.map(async (entry) => {
      const folder = entry._folder;
      if (typeof folder !== 'string' || !folder || folder === '.' || folder === '..' || /[\\/]/.test(folder)) return entry;
      try {
        const capsuleResponse = await fetch(`${encodeURIComponent(folder)}/${encodeURIComponent(folder)}.json`);
        if (!capsuleResponse.ok) return entry;
        return { ...entry, ...await capsuleResponse.json() };
      } catch {
        return entry;
      }
    }));
    try {
      const sessionsResponse = await fetch('practical_sessions/practical_sessions.json');
      if (sessionsResponse.ok) state.practicalSessions = await sessionsResponse.json();
    } catch {
      state.practicalSessions = [];
    }
    renderStaticText();
    renderCourses(state.capsules);
    renderPracticalSessions(state.practicalSessions);
    renderLesson(state.capsules[0]);
    const initialTab = window.location.hash.slice(1);
    showTab(['overview', 'courses', 'tutorial', 'practical_sessions', 'about'].includes(initialTab) ? initialTab : 'overview', false);
  } catch (error) {
    document.querySelector('#course-list').innerHTML = '<p class="loading">Run the site from a local server to load the capsules.</p>';
  }
}
window.addEventListener('popstate', () => showTab(window.location.hash.slice(1) || 'overview', false));
loadCourseData();
