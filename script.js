// Language switcher: Spanish is the default markup, English comes from data-en attributes
(function () {
  var STORAGE_KEY = 'portfolio-lang';
  var toggle = document.getElementById('lang-toggle');

  // Keep the original Spanish text so it can be restored
  document.querySelectorAll('[data-en]').forEach(function (el) {
    if (el.tagName === 'META') {
      el.dataset.es = el.getAttribute('content');
    } else {
      el.dataset.es = el.textContent;
    }
  });
  document.querySelectorAll('[data-en-alt]').forEach(function (el) {
    el.dataset.esAlt = el.getAttribute('alt');
  });
  document.querySelectorAll('[data-en-label]').forEach(function (el) {
    el.dataset.esLabel = el.getAttribute('aria-label');
  });

  function apply(lang) {
    var en = lang === 'en';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var text = en ? el.dataset.en : el.dataset.es;
      if (el.tagName === 'META') {
        el.setAttribute('content', text);
      } else {
        el.textContent = text;
      }
    });
    document.querySelectorAll('[data-en-alt]').forEach(function (el) {
      el.setAttribute('alt', en ? el.dataset.enAlt : el.dataset.esAlt);
    });
    document.querySelectorAll('[data-en-label]').forEach(function (el) {
      el.setAttribute('aria-label', en ? el.dataset.enLabel : el.dataset.esLabel);
    });
    // The button shows the language it switches to
    toggle.querySelector('img').src = en ? 'assets/img/flag-es.svg' : 'assets/img/flag-gb.svg';
    toggle.querySelector('span').textContent = en ? 'Español' : 'English';
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage unavailable */ }
  var initial = saved || ((navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  if (initial === 'en') apply('en');

  toggle.addEventListener('click', function () {
    apply(document.documentElement.lang === 'en' ? 'es' : 'en');
  });
})();
