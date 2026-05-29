/*
 * Google Maps Places UI Kit — on-demand place popover
 * --------------------------------------------------------------------------
 * Enhances every `.travel-map-link` in the travel blog. Clicking a place name
 * opens a small popover that lazily loads the Google "Place Details (compact)"
 * card (photo, rating, type, address, hours, website).
 *
 * Design goals:
 *   - Lazy: the Maps JS bootstrap is injected only on the first click, so a
 *     reader who never clicks a place is billed nothing and downloads nothing.
 *   - Graceful: with no API key (placeholder), the popover degrades to a tidy
 *     "open in Google Maps" card — links never break.
 *   - i18n-aware: chrome strings follow the page language (en / fr / ro).
 *
 * Key is read from window.PLACES_UI_KIT_KEY (see places-config.js).
 */
(function () {
  'use strict';

  var PLACEHOLDER = 'YOUR_MAPS_API_KEY';
  var KEY = (window.PLACES_UI_KIT_KEY || '').trim();
  var HAS_KEY = KEY && KEY !== PLACEHOLDER;

  var STRINGS = {
    en: {
      loading: 'Loading place details…',
      notfound: "Couldn't find this place. Open it in Google Maps:",
      error: 'Place details are unavailable right now.',
      openMaps: 'Open in Google Maps',
      noKey: 'Live place details aren’t enabled yet.',
      close: 'Close'
    },
    fr: {
      loading: 'Chargement des informations…',
      notfound: 'Lieu introuvable. Ouvrez-le dans Google Maps :',
      error: 'Les informations du lieu sont indisponibles pour le moment.',
      openMaps: 'Ouvrir dans Google Maps',
      noKey: 'Les fiches de lieu en direct ne sont pas encore activées.',
      close: 'Fermer'
    },
    ro: {
      loading: 'Se încarcă detaliile locului…',
      notfound: 'Locul nu a fost găsit. Deschide-l în Google Maps:',
      error: 'Detaliile locului nu sunt disponibile momentan.',
      openMaps: 'Deschide în Google Maps',
      noKey: 'Fișele de loc în timp real nu sunt încă activate.',
      close: 'Închide'
    }
  };

  function t(key) {
    var lang = (document.documentElement.lang || 'en').slice(0, 2);
    var dict = STRINGS[lang] || STRINGS.en;
    return dict[key] || STRINGS.en[key] || key;
  }

  /* ---- Maps JS bootstrap (official inline loader, injected once) ---------- */
  var mapsLoading = null;
  function loadMaps() {
    if (mapsLoading) return mapsLoading;
    mapsLoading = new Promise(function (resolve, reject) {
      try {
        (function (g) {
          var h, a, k, p = 'The Google Maps JavaScript API', c = 'google', l = 'importLibrary',
            q = '__ib__', m = document, b = window;
          b = b[c] || (b[c] = {});
          var d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(),
            u = function () {
              return h || (h = new Promise(function (f, n) {
                a = m.createElement('script');
                e.set('libraries', [].concat(Array.from(r)) + '');
                for (k in g) e.set(k.replace(/[A-Z]/g, function (t) { return '_' + t[0].toLowerCase(); }), g[k]);
                e.set('callback', c + '.maps.' + q);
                a.src = 'https://maps.' + c + 'apis.com/maps/api/js?' + e;
                d[q] = f;
                a.onerror = function () { h = n(Error(p + ' could not load.')); };
                a.nonce = (m.querySelector('script[nonce]') || {}).nonce || '';
                m.head.append(a);
              }));
            };
          d[l] ? console.warn(p + ' only loads once. Ignoring:', g) : (d[l] = function (f) {
            for (var _len = arguments.length, n = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) n[_key - 1] = arguments[_key];
            return r.add(f) && u().then(function () { return d[l].apply(d, [f].concat(n)); });
          });
        })({ key: KEY, v: 'weekly' });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
    return mapsLoading;
  }

  /* ---- query resolution --------------------------------------------------- */
  function queryFor(link) {
    if (link.dataset.placeQuery) return link.dataset.placeQuery;
    var href = link.getAttribute('href') || '';
    var m = href.match(/[?&]q=([^&]+)/);
    if (m) {
      try { return decodeURIComponent(m[1].replace(/\+/g, ' ')); } catch (e) { return m[1].replace(/\+/g, ' '); }
    }
    return (link.textContent || '').trim();
  }

  /* ---- popover element ---------------------------------------------------- */
  var pop = null, backdrop = null, currentAnchor = null;

  function ensurePopover() {
    if (pop) return;
    backdrop = document.createElement('div');
    backdrop.className = 'place-pop-backdrop';
    backdrop.addEventListener('click', closePopover);

    pop = document.createElement('div');
    pop.className = 'place-pop';
    pop.setAttribute('role', 'dialog');
    pop.setAttribute('aria-modal', 'false');

    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'place-pop-close';
    close.setAttribute('aria-label', t('close'));
    close.innerHTML = '&times;';
    close.addEventListener('click', closePopover);

    var body = document.createElement('div');
    body.className = 'place-pop-body';

    pop.appendChild(close);
    pop.appendChild(body);
    document.body.appendChild(backdrop);
    document.body.appendChild(pop);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePopover();
    });
    window.addEventListener('resize', function () { if (pop.classList.contains('open')) position(); });
  }

  function popBody() { return pop.querySelector('.place-pop-body'); }

  function position() {
    if (!currentAnchor) return;
    var r = currentAnchor.getBoundingClientRect();
    var pw = pop.offsetWidth || 340;
    var ph = pop.offsetHeight || 240;
    var margin = 10;
    var left = r.left + window.scrollX;
    left = Math.min(left, window.scrollX + document.documentElement.clientWidth - pw - margin);
    left = Math.max(window.scrollX + margin, left);
    var below = r.bottom + window.scrollY + 8;
    var above = r.top + window.scrollY - ph - 8;
    var spaceBelow = window.innerHeight - r.bottom;
    var top = (spaceBelow < ph + 20 && r.top > spaceBelow) ? Math.max(window.scrollY + margin, above) : below;
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
  }

  function openPopover(anchor) {
    ensurePopover();
    currentAnchor = anchor;
    var body = popBody();
    body.innerHTML = '';
    pop.classList.add('open');
    backdrop.classList.add('open');
    position();
    render(anchor, body);
  }

  function closePopover() {
    if (!pop) return;
    pop.classList.remove('open');
    backdrop.classList.remove('open');
    popBody().innerHTML = '';
    currentAnchor = null;
  }

  function mapsHref(anchor) {
    var href = anchor.getAttribute('href');
    if (href && href.indexOf('google.') !== -1) return href;
    return 'https://www.google.com/maps?q=' + encodeURIComponent(queryFor(anchor));
  }

  function noticeCard(body, message, anchor) {
    var p = document.createElement('p');
    p.className = 'place-pop-msg';
    p.textContent = message;
    var a = document.createElement('a');
    a.className = 'place-pop-maps-btn';
    a.href = mapsHref(anchor);
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = '<i class="fas fa-map-marker-alt"></i> ' + t('openMaps');
    body.appendChild(p);
    body.appendChild(a);
    position();
  }

  function spinner(body) {
    var s = document.createElement('div');
    s.className = 'place-pop-loading';
    s.innerHTML = '<span class="place-pop-spinner"></span>' + t('loading');
    body.appendChild(s);
  }

  function render(anchor, body) {
    var query = queryFor(anchor);
    var title = (anchor.textContent || query).trim();

    if (!HAS_KEY) {
      noticeCard(body, t('noKey'), anchor);
      return;
    }

    spinner(body);

    loadMaps()
      .then(function () { return google.maps.importLibrary('places'); })
      .then(function (lib) {
        var Place = lib.Place;
        return Place.searchByText({
          textQuery: query,
          fields: ['id', 'displayName', 'location'],
          maxResultCount: 1,
          language: (document.documentElement.lang || 'en').slice(0, 2)
        });
      })
      .then(function (res) {
        if (currentAnchor !== anchor) return; // user moved on
        body.innerHTML = '';
        var places = res && res.places ? res.places : [];
        if (!places.length) {
          noticeCard(body, t('notfound'), anchor);
          return;
        }
        var id = places[0].id;
        var details = document.createElement('gmp-place-details-compact');
        details.className = 'place-pop-details';
        var reqEl = document.createElement('gmp-place-details-place-request');
        reqEl.setAttribute('place', id);
        var cfg = document.createElement('gmp-place-content-config');
        ['gmp-place-media', 'gmp-place-rating', 'gmp-place-type', 'gmp-place-price',
          'gmp-place-address', 'gmp-place-opening-hours', 'gmp-place-website'
        ].forEach(function (tag) {
          var el = document.createElement(tag);
          if (tag === 'gmp-place-media') el.setAttribute('lightbox-preferred', '');
          cfg.appendChild(el);
        });
        details.appendChild(reqEl);
        details.appendChild(cfg);
        body.appendChild(details);

        var foot = document.createElement('a');
        foot.className = 'place-pop-maps-link';
        foot.href = mapsHref(anchor);
        foot.target = '_blank';
        foot.rel = 'noopener';
        foot.innerHTML = '<i class="fas fa-external-link-alt"></i> ' + t('openMaps');
        body.appendChild(foot);
        position();
      })
      .catch(function (err) {
        if (currentAnchor !== anchor) return;
        console.error('Places UI Kit:', err);
        body.innerHTML = '';
        noticeCard(body, t('error'), anchor);
      });
  }

  /* ---- wire up ------------------------------------------------------------ */
  function onClick(e) {
    var link = e.target.closest('.travel-map-link');
    if (!link) return;
    e.preventDefault();
    openPopover(link);
  }

  function init() {
    if (!document.querySelector('.travel-map-link')) return;
    document.addEventListener('click', onClick);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
