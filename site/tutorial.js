const state = {
  language: localStorage.getItem('site-language') || 'en',
  lesson: new URLSearchParams(window.location.search).get('lesson') || 'setup',
  collection: new URLSearchParams(window.location.search).get('collection') === 'practical_sessions' ? 'practical_sessions' : 'tutorials',
  platform: localStorage.getItem('site-platform') || 'windows',
  tutorials: []
};
const copy = {
  en: { overview: 'Overview', tutorials: 'Tutorials', practicalSessions: 'Practical sessions', about: 'About', indexTitle: 'Tutorial index', practicalIndexTitle: 'Practical sessions', loading: 'Loading tutorial...', missing: 'This tutorial is not available yet.', language: 'Passer en francais', github: 'View on GitHub' },
  fr: { overview: 'Accueil', tutorials: 'Tutoriels', practicalSessions: 'Sessions pratiques', about: 'A propos', indexTitle: 'Index des tutoriels', practicalIndexTitle: 'Sessions pratiques', loading: 'Chargement du tutoriel...', missing: "Ce tutoriel n'est pas encore disponible.", language: 'Switch to English', github: 'Voir sur GitHub' }
};
const text = (key) => copy[state.language][key];
const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const inlineMarkdown = (value) => {
  const codeSpans = [];
  let html = escapeHtml(value).replace(/`([^`]+)`/g, (_, code) => {
    codeSpans.push(`<code>${code}</code>`);
    return `\u0000CODE${codeSpans.length - 1}\u0000`;
  });
  html = html
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^\w])_([^_\n]+)_(?!\w)/g, '$1<em>$2</em>')
    .replace(/(^|[^\w*])\*([^*\n]+)\*(?!\w|\*)/g, '$1<em>$2</em>')
    .replace(/!\[([^\]]*)\]\(([^\s)]+)\)/g, '<img src="$2" alt="$1">')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1 ↗</a>')
    .replace(/\u0000CODE(\d+)\u0000/g, (_, index) => codeSpans[Number(index)]);
  return html;
};
function slugify(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
function parseMarkdown(markdown) {
  const lines = markdown.replace(/^(?:<!-- local-code-markup-v\d+ -->\r?\n)+/, '').replace(/\r/g, '').split('\n');
  const html = [];
  let paragraph = [];
  let listType = '';
  let code = false;
  let codeLanguage = '';
  let codeLines = [];
  const flushParagraph = () => { if (paragraph.length) { html.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`); paragraph = []; } };
  const closeList = () => { if (listType) { html.push(`</${listType}>`); listType = ''; } };
  lines.forEach((line) => {
    if (line.startsWith('```')) {
      if (code) {
        const source = escapeHtml(codeLines.join('\n'));
        if (['windows', 'mac', 'linux'].includes(codeLanguage)) {
          html.push(`<div class="platform-code" data-platform="${codeLanguage}"><div class="platform-controls" role="group" aria-label="Choose your operating system"><button type="button" data-platform-choice="windows" title="Windows">⊞ <span>Windows</span></button><button type="button" data-platform-choice="mac" title="macOS">⌘ <span>macOS</span></button><button type="button" data-platform-choice="linux" title="Linux">◈ <span>Linux</span></button></div><pre><code class="language-${codeLanguage}">${source}</code></pre></div`);
        } else {
          html.push(`<pre><code class="language-${codeLanguage}">${source}</code></pre>`);
        }
        code = false; codeLines = []; codeLanguage = '';
      } else { flushParagraph(); closeList(); code = true; codeLanguage = line.slice(3).trim() || 'text'; }
      return;
    }
    if (code) { codeLines.push(line); return; }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) { flushParagraph(); closeList(); const level = heading[1].length; const title = heading[2]; const id = slugify(title); html.push(`<h${level} id="${id}">${inlineMarkdown(title)}</h${level}>`); return; }
    const orderedItem = line.match(/^\d+\.\s+(.+)$/);
    const unorderedItem = line.match(/^[-*]\s+(.+)$/);
    if (orderedItem || unorderedItem) {
      flushParagraph();
      const nextListType = orderedItem ? 'ol' : 'ul';
      if (listType && listType !== nextListType) closeList();
      if (!listType) { html.push(`<${nextListType}>`); listType = nextListType; }
      html.push(`<li>${inlineMarkdown((orderedItem || unorderedItem)[1])}</li>`);
      return;
    }
    if (!line.trim()) { flushParagraph(); closeList(); return; }
    paragraph.push(line.trim());
  });
  flushParagraph(); closeList();
  return html.join('\n');
}
function renderIndex() {
  document.querySelector('[data-label="overview"]').textContent = text('overview');
  const collectionLink = document.querySelector('[data-label="tutorials"]');
  collectionLink.textContent = state.collection === 'tutorials' ? text('tutorials') : text('practicalSessions');
  collectionLink.href = state.collection === 'tutorials' ? 'tutorial.html?collection=tutorials&lesson=setup' : 'index.html#practical_sessions';
  document.querySelector('[data-label="about"]').textContent = text('about');
  document.querySelector('[data-label="index-title"]').textContent = state.collection === 'tutorials' ? text('indexTitle') : text('practicalIndexTitle');
  const index = document.querySelector('#tutorial-index-list');
  index.innerHTML = state.tutorials.map((tutorial) => `
    <a class="tutorial-index-link ${tutorial.slug === state.lesson ? ' is-current' : ''}" href="tutorial.html?collection=${state.collection}&lesson=${encodeURIComponent(tutorial.slug)}">
      <span class="number">${escapeHtml(tutorial.number)}</span>
      <div class="title">${escapeHtml(tutorial.title[state.language] || tutorial.title.en || tutorial.slug)}</div>
      <div class="author">by ${escapeHtml(Array.isArray(tutorial.author) ? tutorial.author.join(', ') : tutorial.author)}</div>
    </a>`).join('');
  const languageButton = document.querySelector('#language-toggle');
  languageButton.setAttribute('aria-label', text('language'));
  languageButton.title = text('language');
  languageButton.querySelector('.language-code').textContent = state.language === 'en' ? 'FR' : 'EN';
  document.querySelector('.github-link').firstChild.textContent = `${text('github')} `;
}
function renderArticle(markdown) {
  const content = document.querySelector('#tutorial-content');
  content.innerHTML = parseMarkdown(markdown);
  const title = content.querySelector('h1');
  if (title) document.title = `${title.textContent} | Scientific Programming`;
  const headings = content.querySelectorAll('h2, h3');
  document.querySelector('#page-index').innerHTML = `<p>${state.language === 'en' ? 'On this page' : 'Dans cette page'}</p>${Array.from(headings).map((heading) => `<a href="#${heading.id}">${heading.textContent}</a>`).join('')}`;
  document.querySelectorAll('[data-platform-choice]').forEach((button) => button.addEventListener('click', () => setPlatform(button.dataset.platformChoice)));
  setPlatform(state.platform);
}
function setPlatform(platform) {
  state.platform = platform;
  localStorage.setItem('site-platform', platform);
  document.querySelectorAll('.platform-code').forEach((block) => {
    const active = block.dataset.platform === platform;
    block.hidden = !active;
    block.querySelectorAll('[data-platform-choice]').forEach((button) => button.classList.toggle('is-selected', button.dataset.platformChoice === platform));
  });
}
async function loadTutorial() {
  try {
    const response = await fetch(`${state.collection}/${state.collection}.json`);
    if (!response.ok) throw new Error('Collection manifest unavailable');
    state.tutorials = await response.json();
    renderIndex();
    const current = state.tutorials.find((tutorial) => tutorial.slug === state.lesson) || state.tutorials[0];
    state.lesson = current.slug;
    const source = current.sources[state.language] || current.sources.en;
    const markdownResponse = await fetch(`${state.collection}/${source}`);
    if (!markdownResponse.ok) throw new Error('Markdown source unavailable');
    const markdown = await markdownResponse.text();
    renderArticle(markdown);
  } catch (error) {
    document.querySelector('#tutorial-content').innerHTML = `<p>${text('missing')}</p>`;
  }
}
document.querySelector('#language-toggle').addEventListener('click', () => {
  state.language = state.language === 'en' ? 'fr' : 'en';
  localStorage.setItem('site-language', state.language);
  loadTutorial();
});
loadTutorial();
