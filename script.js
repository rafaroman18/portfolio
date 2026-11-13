// Portfolio rendering and language switcher.
// Content lives in data.js; static texts in index.html carry their English version in data-en.
(function () {
  var STORAGE_KEY = 'portfolio-lang';
  var DATA = window.PORTFOLIO;
  var toggle = document.getElementById('lang-toggle');
  var lang = 'es';

  // Resolve a plain string or an { es, en } object for the current language
  function t(value) {
    if (value === undefined || value === null) return '';
    return typeof value === 'string' ? value : (value[lang] || value.es || '');
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function badges(tags, note) {
    var p = el('p', 'badges');
    (tags || []).forEach(function (tag) { p.appendChild(el('span', '', t(tag))); });
    if (note) p.appendChild(el('span', 'muted', note));
    return p;
  }

  function projectCard(item, compact) {
    var article = el('article', 'project' + (item.featured ? ' featured' : '') + (compact ? ' compact' : ''));
    var img = el('img', 'thumb');
    img.src = item.image;
    img.alt = '';
    img.loading = 'lazy';
    article.appendChild(img);

    var body = el('div', 'body');
    if (item.ribbon) body.appendChild(el('span', 'ribbon', t(item.ribbon)));
    body.appendChild(el('h3', '', t(item.title)));
    (item.description || []).forEach(function (paragraph) {
      body.appendChild(el('p', '', t(paragraph)));
    });
    body.appendChild(badges(item.tags, item.note));
    if (item.link) {
      var p = el('p');
      var a = el('a', 'btn', t(DATA.linkLabel));
      a.href = item.link;
      a.target = '_blank';
      a.rel = 'noopener';
      p.appendChild(a);
      body.appendChild(p);
    }
    article.appendChild(body);
    return article;
  }

  function fill(id, items, build) {
    var container = document.getElementById(id);
    container.textContent = '';
    items.forEach(function (item) { container.appendChild(build(item)); });
  }

  // Rebuild every section generated from data.js
  function renderContent() {
    fill('projects', DATA.projects, function (item) { return projectCard(item, false); });
    fill('other-projects', DATA.otherProjects, function (item) { return projectCard(item, true); });

    fill('experience', DATA.experience, function (item) {
      var li = el('li');
      li.appendChild(el('span', 'date', t(item.date)));
      li.appendChild(el('h3', '', t(item.title)));
      li.appendChild(el('p', '', t(item.description)));
      li.appendChild(badges(item.tags));
      return li;
    });

    fill('education', DATA.education, function (item) {
      var li = el('li');
      li.appendChild(el('strong', '', t(item.title)));
      li.appendChild(document.createTextNode(' · ' + t(item.detail)));
      return li;
    });

    fill('publications', DATA.publications, function (item) {
      var li = el('li');
      li.appendChild(el('h3', '', t(item.title)));
      var authors = el('p', 'pub-authors');
      item.authors.forEach(function (name, i) {
        if (i > 0) authors.appendChild(document.createTextNode(', '));
        authors.appendChild(name === DATA.authorName ? el('strong', '', name) : document.createTextNode(name));
      });
      li.appendChild(authors);
      li.appendChild(el('p', 'pub-venue', t(item.venue)));
      if (item.description) li.appendChild(el('p', '', t(item.description)));
      if (item.link) {
        var p = el('p');
        var a = el('a', 'btn', t(item.linkLabel));
        a.href = item.link;
        a.target = '_blank';
        a.rel = 'noopener';
        p.appendChild(a);
        li.appendChild(p);
      }
      return li;
    });

    fill('skills-list', DATA.skills, function (item) {
      var div = el('div');
      div.appendChild(el('h4', '', t(item.title)));
      div.appendChild(badges(item.tags));
      return div;
    });
  }

  // Keep the original Spanish text of static elements so it can be restored
  document.querySelectorAll('[data-en]').forEach(function (node) {
    node.dataset.es = node.tagName === 'META' ? node.getAttribute('content') : node.textContent;
  });
  document.querySelectorAll('[data-en-alt]').forEach(function (node) {
    node.dataset.esAlt = node.getAttribute('alt');
  });
  document.querySelectorAll('[data-en-label]').forEach(function (node) {
    node.dataset.esLabel = node.getAttribute('aria-label');
  });
  document.querySelectorAll('[data-en-href]').forEach(function (node) {
    node.dataset.esHref = node.getAttribute('href');
  });

  function apply(next) {
    lang = next;
    var en = lang === 'en';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-en]').forEach(function (node) {
      var text = en ? node.dataset.en : node.dataset.es;
      if (node.tagName === 'META') node.setAttribute('content', text);
      else node.textContent = text;
    });
    document.querySelectorAll('[data-en-alt]').forEach(function (node) {
      node.setAttribute('alt', en ? node.dataset.enAlt : node.dataset.esAlt);
    });
    document.querySelectorAll('[data-en-label]').forEach(function (node) {
      node.setAttribute('aria-label', en ? node.dataset.enLabel : node.dataset.esLabel);
    });

    // Language-specific links, such as the CV download
    document.querySelectorAll('[data-en-href]').forEach(function (node) {
      node.setAttribute('href', en ? node.dataset.enHref : node.dataset.esHref);
    });

    renderContent();

    // The button shows the language it switches to
    toggle.querySelector('img').src = en ? 'assets/img/flag-es.svg' : 'assets/img/flag-gb.svg';
    toggle.querySelector('span').textContent = en ? 'Español' : 'English';
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage unavailable */ }
  var initial = saved || ((navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  apply(initial === 'en' ? 'en' : 'es');

  toggle.addEventListener('click', function () {
    apply(lang === 'en' ? 'es' : 'en');
  });
})();
