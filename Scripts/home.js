/* Homepage interactions — vanilla JS, no dependencies.
   Relies on Scripts/i18n.js (window.tKey / setLang / 'langchange' event). */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function t(key, fallback) {
    var v = window.tKey ? window.tKey(key) : undefined;
    return v === undefined || v === key ? (fallback || key) : v;
  }
  function lang() { return root.lang === 'fr' ? 'fr' : 'en'; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  /* ------------------------------------------------------------------
     Year
     ------------------------------------------------------------------ */
  qsa('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ------------------------------------------------------------------
     Nav: scrolled state, progress bar, timeline progress (one rAF)
     ------------------------------------------------------------------ */
  var nav = qs('#site-nav');
  var progressBar = qs('.scroll-progress');
  var timeline = qs('#timeline');
  var tlItems = timeline ? qsa('.tl-item', timeline) : [];
  var ticking = false;

  function onScroll() {
    var y = window.pageYOffset || root.scrollTop;
    var max = root.scrollHeight - window.innerHeight;
    if (nav) nav.classList.toggle('is-scrolled', y > 24);
    if (progressBar) progressBar.style.setProperty('--p', max > 0 ? clamp(y / max, 0, 1) : 0);

    if (timeline) {
      var rect = timeline.getBoundingClientRect();
      var anchor = window.innerHeight * 0.62;
      timeline.style.setProperty('--progress', clamp((anchor - rect.top) / rect.height, 0, 1));
      tlItems.forEach(function (item) {
        var node = item.querySelector('.tl-node');
        if (node) item.classList.toggle('is-passed', node.getBoundingClientRect().top < anchor);
      });
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------ */
  var navToggle = qs('.nav-toggle');
  function setMenu(open) {
    if (!nav || !navToggle) return;
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (navToggle) {
    navToggle.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
    qsa('.nav-links a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('click', function (e) { if (!nav.contains(e.target)) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 980) setMenu(false); });
  }

  /* ------------------------------------------------------------------
     Scrollspy
     ------------------------------------------------------------------ */
  var spyLinks = {};
  qsa('.nav-links a[href^="#"]').forEach(function (a) { spyLinks[a.getAttribute('href').slice(1)] = a; });
  function setActive(id) {
    Object.keys(spyLinks).forEach(function (k) {
      var on = k === id;
      spyLinks[k].classList.toggle('is-active', on);
      if (on) spyLinks[k].setAttribute('aria-current', 'true'); else spyLinks[k].removeAttribute('aria-current');
    });
  }
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['home', 'about', 'experience', 'projects', 'education', 'skills', 'contact'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     Reveal on scroll (staggered per batch)
     ------------------------------------------------------------------ */
  var revealEls = qsa('[data-reveal]');
  function settle(el, delay) {
    // once the entrance is over, drop the reveal hook so the element's own
    // hover transitions apply again (keeps .is-in for child animations)
    setTimeout(function () { el.removeAttribute('data-reveal'); el.style.removeProperty('--d'); }, 1100 + delay * 1000);
  }
  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealer = new IntersectionObserver(function (entries) {
      var batch = entries.filter(function (en) { return en.isIntersecting; }).map(function (en) { return en.target; });
      batch.sort(function (a, b) { return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1; });
      batch.forEach(function (el, i) {
        var delay = Math.min(i, 6) * 0.08;
        el.style.setProperty('--d', delay + 's');
        el.classList.add('is-in');
        revealer.unobserve(el);
        settle(el, delay);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { revealer.observe(el); });
  }

  /* ------------------------------------------------------------------
     Count-up numbers  (data-count, data-decimals, data-prefix, data-suffix)
     ------------------------------------------------------------------ */
  var counters = qsa('[data-count]');
  function fmt(el, v) {
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var l = lang();
    var num = new Intl.NumberFormat(l === 'fr' ? 'fr-FR' : 'en-US', {
      minimumFractionDigits: dec, maximumFractionDigits: dec
    }).format(v);
    var suffix = el.getAttribute('data-suffix') || '';
    if (suffix === '%' && l === 'fr') suffix = ' %';
    return (el.getAttribute('data-prefix') || '') + num + suffix;
  }
  function renderCounter(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    el.textContent = fmt(el, el._state === 'idle' ? 0 : target);
  }
  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var dur = 1800, t0 = performance.now();
    el._state = 'run';
    (function step(now) {
      var p = clamp((now - t0) / dur, 0, 1);
      var eased = 1 - Math.pow(2, -10 * p);
      el.textContent = fmt(el, p >= 1 ? target : target * eased);
      if (p < 1) requestAnimationFrame(step); else el._state = 'done';
    })(t0);
  }
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        countIO.unobserve(en.target);
        setTimeout(function () { runCounter(en.target); }, 250);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { el._state = 'idle'; renderCounter(el); countIO.observe(el); });
  } else {
    counters.forEach(function (el) { el._state = 'done'; renderCounter(el); });
  }

  /* ------------------------------------------------------------------
     Hero rotator — "decoding" text scramble
     ------------------------------------------------------------------ */
  var rotator = qs('#hero-rotator');
  var phrases = [], phraseIdx = 0, scrambleRaf = 0, heroVisible = true;
  var GLYPHS = '01<>/\\{}[]#%&*+=_ABCDEFXYZ';
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function loadPhrases() {
    phrases = t('hero.rotate', '').split('|').filter(Boolean);
    phraseIdx = 0;
    if (rotator && phrases.length) { cancelAnimationFrame(scrambleRaf); rotator.textContent = phrases[0]; }
  }
  function scrambleTo(text) {
    cancelAnimationFrame(scrambleRaf);
    var from = rotator.textContent, len = Math.max(from.length, text.length), queue = [];
    for (var i = 0; i < len; i++) {
      var s = Math.floor(Math.random() * 16) + Math.floor(i * 0.6);
      queue.push({ from: from[i] || '', to: text[i] || '', start: s, end: s + 6 + Math.floor(Math.random() * 14), ch: '' });
    }
    var frame = 0;
    (function tick() {
      var out = '', done = 0;
      for (var j = 0; j < queue.length; j++) {
        var q = queue[j];
        if (frame >= q.end) { done++; out += esc(q.to); }
        else if (frame >= q.start) {
          if (!q.ch || Math.random() < 0.3) q.ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          out += '<span class="glyph">' + esc(q.ch) + '</span>';
        } else out += esc(q.from);
      }
      rotator.innerHTML = out;
      if (done < queue.length) { frame++; scrambleRaf = requestAnimationFrame(tick); }
    })();
  }
  if (rotator) {
    loadPhrases();
    if (!reduceMotion) {
      var heroEl = qs('#home');
      if (heroEl && 'IntersectionObserver' in window) {
        new IntersectionObserver(function (en) { heroVisible = en[0].isIntersecting; }).observe(heroEl);
      }
      setInterval(function () {
        if (!heroVisible || document.hidden || phrases.length < 2) return;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        scrambleTo(phrases[phraseIdx]);
      }, 3600);
    }
  }

  /* ------------------------------------------------------------------
     Pointer effects: spotlight cards, tilt, magnetic buttons, cursor glow
     ------------------------------------------------------------------ */
  if (finePointer) {
    document.addEventListener('pointermove', function (e) {
      var el = e.target.closest && e.target.closest('.spot');
      if (!el) return;
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  if (finePointer && !reduceMotion) {
    qsa('.tilt').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'perspective(1100px) rotateX(' + (-py * 3).toFixed(2) + 'deg) rotateY(' + (px * 4).toFixed(2) + 'deg) translateY(-4px)';
      });
      el.addEventListener('pointerleave', function () { el.style.transform = ''; });
    });

    qsa('.magnetic').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = 'translate(' + (dx * 0.18).toFixed(1) + 'px,' + (dy * 0.3).toFixed(1) + 'px)';
      });
      el.addEventListener('pointerleave', function () { el.style.transform = ''; });
    });

    var glow = qs('.cursor-glow');
    if (glow) {
      var gx = window.innerWidth / 2, gy = window.innerHeight / 2, tx = gx, ty = gy, glowRaf = 0;
      var glowStep = function () {
        gx += (tx - gx) * 0.14;
        gy += (ty - gy) * 0.14;
        glow.style.transform = 'translate3d(' + gx.toFixed(1) + 'px,' + gy.toFixed(1) + 'px,0)';
        glowRaf = Math.abs(tx - gx) + Math.abs(ty - gy) > 0.4 ? requestAnimationFrame(glowStep) : 0;
      };
      window.addEventListener('pointermove', function (e) {
        tx = e.clientX; ty = e.clientY;
        if (!glow.classList.contains('is-on')) { gx = tx; gy = ty; glow.classList.add('is-on'); }
        if (!glowRaf) glowRaf = requestAnimationFrame(glowStep);
      }, { passive: true });
      document.addEventListener('mouseout', function (e) { if (!e.relatedTarget) glow.classList.remove('is-on'); });
    }
  }

  /* ------------------------------------------------------------------
     Experience: collapse long highlight lists
     ------------------------------------------------------------------ */
  var collapsibles = [];
  qsa('.tl-points[data-collapse]').forEach(function (list, n) {
    var keep = parseInt(list.getAttribute('data-collapse'), 10);
    var extra = list.children.length - keep;
    if (extra < 2) return;
    if (!list.id) list.id = 'tl-points-' + n;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tl-more';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', list.id);
    list.classList.add('is-collapsed');
    list.parentNode.insertBefore(btn, list.nextSibling);
    var item = { list: list, btn: btn, extra: extra };
    collapsibles.push(item);
    labelCollapsible(item);
    btn.addEventListener('click', function () {
      var open = list.classList.toggle('is-collapsed') === false;
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      Array.prototype.slice.call(list.children, keep).forEach(function (li) { li.classList.toggle('is-new', open); });
      labelCollapsible(item);
      if (!open) {
        var top = list.closest('.tl-card').getBoundingClientRect().top;
        if (top < 0) window.scrollBy({ top: top - 110, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    });
  });
  function labelCollapsible(item) {
    var open = !item.list.classList.contains('is-collapsed');
    item.btn.textContent = open ? t('exp.less', 'Show less') : t('exp.more', 'Show {n} more').replace('{n}', item.extra);
  }

  /* ------------------------------------------------------------------
     Clipboard + toast
     ------------------------------------------------------------------ */
  var toastEl = qs('#toast'), toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    requestAnimationFrame(function () { toastEl.classList.add('is-on'); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-on'); }, 2600);
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      try { if (document.execCommand('copy')) resolve(); else reject(); } catch (err) { reject(err); }
      document.body.removeChild(ta);
    });
  }
  var EMAIL = 'alexandrebredillot@gmail.com';
  function copyEmail(btn) {
    return copyText(EMAIL).then(function () {
      toast(t('contact.copied', 'Email address copied to clipboard'));
      if (btn) {
        btn.classList.add('is-copied');
        setTimeout(function () { btn.classList.remove('is-copied'); }, 2000);
      }
    }, function () { window.location.href = 'mailto:' + EMAIL; });
  }
  qsa('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () { copyEmail(btn); });
  });

  /* ------------------------------------------------------------------
     Project art: deterministic candlestick chart (decorative)
     ------------------------------------------------------------------ */
  var candles = qs('#art-candles');
  if (candles) {
    var seed = 20260;
    var rand = function () { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    var N = 32, Wv = 400, Hv = 160, step = Wv / N;
    var price = 50, series = [];
    for (var i = 0; i < N; i++) {
      var open = price;
      price = price + (rand() - 0.42) * 9;
      var hi = Math.max(open, price) + rand() * 5, lo = Math.min(open, price) - rand() * 5;
      series.push({ o: open, c: price, h: hi, l: lo });
    }
    var min = Infinity, max = -Infinity;
    series.forEach(function (s) { min = Math.min(min, s.l); max = Math.max(max, s.h); });
    var Y = function (v) { return 18 + (1 - (v - min) / (max - min)) * (Hv - 36); };
    var html = '<defs><linearGradient id="candle-area" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#8c85ff" stop-opacity=".28"/><stop offset="1" stop-color="#8c85ff" stop-opacity="0"/></linearGradient></defs>';
    var pts = [];
    series.forEach(function (s, k) {
      var x = step * k + step / 2, up = s.c >= s.o, cls = up ? 'up' : 'down';
      var top = Y(Math.max(s.o, s.c)), bot = Y(Math.min(s.o, s.c));
      html += '<g class="c ' + cls + '" style="--cd:' + (k * 0.025).toFixed(3) + 's">' +
        '<line class="wick" x1="' + x.toFixed(1) + '" x2="' + x.toFixed(1) + '" y1="' + Y(s.h).toFixed(1) + '" y2="' + Y(s.l).toFixed(1) + '"/>' +
        '<rect x="' + (x - 3).toFixed(1) + '" y="' + top.toFixed(1) + '" width="6" height="' + Math.max(1.5, bot - top).toFixed(1) + '" rx="1"/></g>';
      pts.push([x, Y((s.o + s.c) / 2)]);
    });
    var d = 'M' + pts.map(function (p) { return p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' L');
    html = html.replace('</defs>', '</defs><path class="area" d="' + d + ' L' + pts[pts.length - 1][0].toFixed(1) + ' ' + Hv + ' L' + pts[0][0].toFixed(1) + ' ' + Hv + ' Z"/>');
    html += '<path class="trend" d="' + d + '"/>';
    candles.innerHTML = html;
    var trend = candles.querySelector('.trend');
    if (trend && trend.getTotalLength) trend.style.setProperty('--len', Math.ceil(trend.getTotalLength()));
  }

  /* ------------------------------------------------------------------
     Command palette (⌘K / Ctrl+K / "/")
     ------------------------------------------------------------------ */
  var isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
  qsa('[data-cmd-key]').forEach(function (k) { k.textContent = isMac ? '⌘K' : 'Ctrl K'; });

  function openUrl(url) { window.open(url, '_blank', 'noopener'); }
  function goTo(hash) {
    var target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    if (history.replaceState) history.replaceState(null, '', hash);
  }
  var COMMANDS = [
    { g: 'nav', icon: 'i-arrow', key: 'nav.about', kw: 'about summary profile a propos', run: function () { goTo('#about'); } },
    { g: 'nav', icon: 'i-arrow', key: 'nav.experience', kw: 'experience work jobs loreal banque postale sienna', run: function () { goTo('#experience'); } },
    { g: 'nav', icon: 'i-arrow', key: 'nav.projects', kw: 'projects projets thesis trading bot kleerer', run: function () { goTo('#projects'); } },
    { g: 'nav', icon: 'i-arrow', key: 'nav.education', kw: 'education formation edhec essca msc', run: function () { goTo('#education'); } },
    { g: 'nav', icon: 'i-arrow', key: 'nav.skills', kw: 'skills competences stack python sql certifications languages', run: function () { goTo('#skills'); } },
    { g: 'nav', icon: 'i-arrow', key: 'nav.contact', kw: 'contact email hire', run: function () { goTo('#contact'); } },
    { g: 'act', icon: 'i-download', key: 'contact.cv', kw: 'cv resume pdf', run: function () { openUrl('Images/CV_Alexandre_Bredillot.pdf'); } },
    { g: 'act', icon: 'i-copy', key: 'cmd.copy', kw: 'email mail copy copier', run: function () { copyEmail(); } },
    { g: 'act', icon: 'i-file', key: 'cmd.thesis', kw: 'thesis these pdf finbert msc', run: function () { openUrl('Images/Bredillot_Thesis_EDHEC_v3.pdf'); } },
    { g: 'act', icon: 'i-linkedin', key: 'cmd.linkedin', kw: 'linkedin network', run: function () { openUrl('https://www.linkedin.com/in/alexandre-bredillot'); } },
    { g: 'act', icon: 'i-github', key: 'cmd.github', kw: 'github code repositories', run: function () { openUrl('https://github.com/McJack3d'); } },
    { g: 'act', icon: 'i-globe', key: 'cmd.travel', kw: 'travel blog voyage globe', run: function () { window.location.href = 'travel.html'; } },
    { g: 'act', icon: 'i-lang', key: 'cmd.lang', kw: 'language langue french english francais anglais', run: function () { window.setLang(lang() === 'fr' ? 'en' : 'fr'); } }
  ];

  var cmd, cmdInput, cmdList, cmdResults = [], cmdActive = 0, cmdReturnFocus = null;

  function norm(s) { return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
  function buildPalette() {
    cmd = document.createElement('div');
    cmd.className = 'cmd';
    cmd.id = 'cmd';
    cmd.innerHTML =
      '<div class="cmd-panel" role="dialog" aria-modal="true">' +
        '<div class="cmd-search">' +
          '<svg class="ico" aria-hidden="true"><use href="#i-search"/></svg>' +
          '<input class="cmd-input" type="text" role="combobox" aria-expanded="true" aria-controls="cmd-list" aria-autocomplete="list" autocomplete="off" spellcheck="false">' +
          '<kbd class="cmd-esc">ESC</kbd>' +
        '</div>' +
        '<div class="cmd-list" id="cmd-list" role="listbox"></div>' +
        '<div class="cmd-foot" aria-hidden="true">' +
          '<span><kbd>↑</kbd><kbd>↓</kbd><span data-cmd-t="cmd.hint_nav"></span></span>' +
          '<span><kbd>↵</kbd><span data-cmd-t="cmd.hint_run"></span></span>' +
          '<span><kbd>esc</kbd><span data-cmd-t="cmd.hint_close"></span></span>' +
        '</div>' +
      '</div>';
    document.body.appendChild(cmd);
    cmdInput = qs('.cmd-input', cmd);
    cmdList = qs('.cmd-list', cmd);

    cmd.addEventListener('mousedown', function (e) { if (e.target === cmd) closePalette(); });
    cmdInput.addEventListener('input', function () { cmdActive = 0; renderPalette(); });
    cmdInput.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); moveActive(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); moveActive(-1); }
      else if (e.key === 'Enter') { e.preventDefault(); runActive(); }
      else if (e.key === 'Escape') { e.preventDefault(); closePalette(); }
      else if (e.key === 'Tab') { e.preventDefault(); moveActive(e.shiftKey ? -1 : 1); }
    });
    cmdList.addEventListener('mousemove', function (e) {
      var opt = e.target.closest('[role="option"]');
      if (!opt) return;
      var i = parseInt(opt.getAttribute('data-i'), 10);
      if (i !== cmdActive) { cmdActive = i; paintActive(); }
    });
    cmdList.addEventListener('click', function (e) {
      var opt = e.target.closest('[role="option"]');
      if (!opt) return;
      cmdActive = parseInt(opt.getAttribute('data-i'), 10);
      runActive();
    });
    localizePalette();
  }
  function localizePalette() {
    if (!cmd) return;
    qs('.cmd-panel', cmd).setAttribute('aria-label', t('cmd.title', 'Command menu'));
    cmdInput.setAttribute('placeholder', t('cmd.placeholder', 'Type a command or search…'));
    cmdInput.setAttribute('aria-label', t('cmd.placeholder', 'Type a command or search…'));
    qsa('[data-cmd-t]', cmd).forEach(function (el) { el.textContent = t(el.getAttribute('data-cmd-t')); });
  }
  function renderPalette() {
    var q = norm(cmdInput.value).trim().split(/\s+/).filter(Boolean);
    cmdResults = COMMANDS.filter(function (c) {
      var hay = norm(t(c.key) + ' ' + c.kw);
      return q.every(function (w) { return hay.indexOf(w) !== -1; });
    });
    cmdActive = clamp(cmdActive, 0, Math.max(0, cmdResults.length - 1));
    if (!cmdResults.length) {
      cmdList.innerHTML = '<p class="cmd-empty">' + esc(t('cmd.empty', 'No results')) + '</p>';
      cmdInput.removeAttribute('aria-activedescendant');
      return;
    }
    var html = '', lastGroup = null;
    cmdResults.forEach(function (c, i) {
      if (c.g !== lastGroup) {
        if (lastGroup !== null) html += '</div>';
        var label = t(c.g === 'nav' ? 'cmd.nav' : 'cmd.actions');
        html += '<div role="group" aria-label="' + esc(label) + '"><p class="cmd-group" aria-hidden="true">' + esc(label) + '</p>';
        lastGroup = c.g;
      }
      html += '<div class="cmd-item" role="option" id="cmd-opt-' + i + '" data-i="' + i + '" aria-selected="false">' +
        '<svg class="ico" aria-hidden="true"><use href="#' + c.icon + '"/></svg>' +
        '<span>' + esc(t(c.key)) + '</span><span class="cmd-go" aria-hidden="true">↵</span></div>';
    });
    cmdList.innerHTML = html + '</div>';
    paintActive();
  }
  function paintActive() {
    qsa('[role="option"]', cmdList).forEach(function (el) {
      var on = parseInt(el.getAttribute('data-i'), 10) === cmdActive;
      el.setAttribute('aria-selected', on ? 'true' : 'false');
      if (on) {
        cmdInput.setAttribute('aria-activedescendant', el.id);
        var lr = cmdList.getBoundingClientRect(), er = el.getBoundingClientRect();
        if (er.bottom > lr.bottom) cmdList.scrollTop += er.bottom - lr.bottom + 8;
        else if (er.top < lr.top) cmdList.scrollTop -= lr.top - er.top + 8;
      }
    });
  }
  function moveActive(dir) {
    if (!cmdResults.length) return;
    cmdActive = (cmdActive + dir + cmdResults.length) % cmdResults.length;
    paintActive();
  }
  function runActive() {
    var c = cmdResults[cmdActive];
    if (!c) return;
    closePalette(true);
    c.run();
  }
  function openPalette() {
    if (!cmd) buildPalette();
    cmdReturnFocus = document.activeElement;
    cmdInput.value = '';
    cmdActive = 0;
    renderPalette();
    cmd.classList.add('is-open');
    root.classList.add('cmd-lock');
    setMenu(false);
    // focus synchronously so keystrokes typed right after ⌘K aren't lost
    cmdInput.focus({ preventScroll: true });
  }
  function closePalette(keepScroll) {
    if (!cmd || !cmd.classList.contains('is-open')) return;
    cmd.classList.remove('is-open');
    root.classList.remove('cmd-lock');
    if (cmdReturnFocus && cmdReturnFocus.focus) cmdReturnFocus.focus({ preventScroll: !!keepScroll });
  }
  document.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase();
    if ((e.metaKey || e.ctrlKey) && k === 'k') {
      e.preventDefault();
      if (cmd && cmd.classList.contains('is-open')) closePalette(); else openPalette();
      return;
    }
    if (k === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
      e.preventDefault();
      openPalette();
    }
  });
  qsa('[data-cmd-open]').forEach(function (b) { b.addEventListener('click', openPalette); });

  /* ------------------------------------------------------------------
     Language changes: refresh everything rendered from JS
     ------------------------------------------------------------------ */
  document.addEventListener('langchange', function () {
    loadPhrases();
    counters.forEach(function (el) { if (el._state !== 'run') renderCounter(el); });
    collapsibles.forEach(labelCollapsible);
    localizePalette();
    if (cmd && cmd.classList.contains('is-open')) renderPalette();
  });
})();
