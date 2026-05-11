// ── Highlight active nav link based on current page ──────────────────────────
(function () {
  var links = document.querySelectorAll('nav a');
  var current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) {
      link.style.textDecoration = 'underline';
      link.style.fontWeight = '700';
    }
  });
})();

// ── Scroll-reveal: fade + slide up elements as they enter the viewport ────────
(function () {
  var style = document.createElement('style');
  style.textContent = [
    '.reveal {',
    '  opacity: 0;',
    '  transform: translateY(28px);',
    '  transition: opacity 0.55s ease, transform 0.55s ease;',
    '}',
    '.reveal.visible {',
    '  opacity: 1;',
    '  transform: translateY(0);',
    '}',
  ].join('\n');
  document.head.appendChild(style);

  function onScroll() {
    var elements = document.querySelectorAll('.reveal');
    elements.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  // Run once on load for anything already in view
  window.addEventListener('load', onScroll);
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ── Hobby cards: gentle lift on hover ────────────────────────────────────────
(function () {
  var style = document.createElement('style');
  style.textContent = [
    '.card {',
    '  transition: transform 0.2s ease, box-shadow 0.2s ease;',
    '  cursor: default;',
    '}',
    '.card:hover {',
    '  transform: translateY(-4px);',
    '  box-shadow: 0 8px 20px rgba(61,43,31,0.12);',
    '}',
  ].join('\n');
  document.head.appendChild(style);
})();

// ── Nav links: underline slide-in effect on hover ────────────────────────────
(function () {
  var style = document.createElement('style');
  style.textContent = [
    'nav a {',
    '  position: relative;',
    '  text-decoration: none !important;',
    '}',
    'nav a::after {',
    '  content: "";',
    '  position: absolute;',
    '  left: 0; bottom: -2px;',
    '  width: 0; height: 2px;',
    '  background: #faf3e8;',
    '  transition: width 0.25s ease;',
    '}',
    'nav a:hover::after,',
    'nav a.active-link::after {',
    '  width: 100%;',
    '}',
  ].join('\n');
  document.head.appendChild(style);
})();