/* Hero "data terrain" — a perspective field of points rolling like a signal.
   Canvas 2D, no dependencies. The cursor lifts the surface; a click sends a
   ripple. Pauses when off-screen / tab hidden; drifts at a calmer pace with
   prefers-reduced-motion, and follows the light/dark system theme. */
(function () {
  'use strict';

  var canvas = document.getElementById('hero-field');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var hero = canvas.parentElement;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SPEED = reduceMotion ? 0.45 : 1;
  var lightQuery = window.matchMedia('(prefers-color-scheme: light)');

  var W = 0, H = 0, DPR = 1;
  var COLS = 0, ROWS = 0, XSPAN = 0;
  var NEAR = 1.6, FAR = 9, CAM_H = 1.35, FOCAL = 1, HORIZON = 0;

  var BUCKETS = 40;
  var base = [], hot = [];

  var pointer = { x: -1e4, y: -1e4, sx: -1e4, sy: -1e4, on: 0, onT: 0 };
  var ripples = [];
  var start = performance.now();
  var rafId = 0, running = false, onScreen = true;

  function mix(a, b, f) { return Math.round(a + (b - a) * f); }

  function buildPalette() {
    var light = lightQuery.matches;
    for (var i = 0; i < BUCKETS; i++) {
      var f = i / (BUCKETS - 1);
      var a = 0.05 + 0.85 * Math.pow(f, 1.6);
      if (light) {
        // light theme: brand indigo ink, deeper up close; cursor highlight in sky blue
        base[i] = 'rgba(' + mix(120, 42, f) + ',' + mix(112, 31, f) + ',' + mix(255, 220, f) + ',' + (a * 0.9).toFixed(3) + ')';
        hot[i] = 'rgba(' + mix(56, 2, f) + ',' + mix(189, 132, f) + ',' + mix(248, 199, f) + ',' + Math.min(1, a + 0.3).toFixed(3) + ')';
      } else {
        // dark theme: far = deep indigo, faint; near = pale lavender, bright
        base[i] = 'rgba(' + mix(52, 205, f) + ',' + mix(40, 201, f) + ',255,' + a.toFixed(3) + ')';
        // highlight under the cursor: towards ice-cyan
        hot[i] = 'rgba(' + mix(120, 186, f) + ',' + mix(200, 240, f) + ',255,' + Math.min(1, a + 0.35).toFixed(3) + ')';
      }
    }
  }

  function resize() {
    var rect = canvas.getBoundingClientRect();
    W = Math.max(1, rect.width);
    H = Math.max(1, rect.height);
    DPR = Math.min(window.devicePixelRatio || 1, W < 700 ? 1.5 : 2);
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    var k = W < 640 ? 0.55 : W < 1100 ? 0.78 : 1;
    COLS = Math.round(170 * k);
    ROWS = Math.round(72 * k);
    FOCAL = Math.max(W, H * 1.1) * 0.6;
    HORIZON = H * (W < 640 ? 0.5 : 0.44);
    // world half-width so the far rows still reach the screen edges
    XSPAN = (W / 2) * FAR / FOCAL * 1.05;
    if (!running) draw(performance.now());
  }

  function surface(x, z, t) {
    return 0.26 * Math.sin(x * 0.55 + t * 0.5) +
           0.18 * Math.sin(z * 0.8 - t * 0.9) +
           0.1 * Math.sin((x * 1.3 + z * 1.1) + t * 1.2) +
           0.05 * Math.sin(x * 2.9 - z * 2.3 - t * 1.6);
  }

  function draw(now) {
    var t = (now - start) / 1000 * SPEED;
    ctx.clearRect(0, 0, W, H);

    // ease the pointer and its presence
    pointer.sx += (pointer.x - pointer.sx) * 0.1;
    pointer.sy += (pointer.y - pointer.sy) * 0.1;
    pointer.on += (pointer.onT - pointer.on) * 0.06;

    var sigma = Math.max(120, Math.min(W, 1400) * 0.12);
    var twoSig2 = 2 * sigma * sigma;
    var halfW = W / 2;
    var drift = t * 0.35; // the terrain slowly flows towards the viewer

    for (var i = ripples.length - 1; i >= 0; i--) {
      if (t - ripples[i].t > 3.2) ripples.splice(i, 1);
    }
    var nr = ripples.length;

    for (var r = 0; r < ROWS; r++) {
      var fr = r / (ROWS - 1);
      var z = NEAR + (FAR - NEAR) * fr;
      var depth = 1 - fr;                 // 1 near → 0 far
      var bucket = Math.round(depth * (BUCKETS - 1));
      var size = 0.7 + 2.1 * depth * depth;
      var half = size / 2;
      var inv = FOCAL / z;

      for (var c = 0; c < COLS; c++) {
        var x = (c / (COLS - 1) * 2 - 1) * XSPAN;
        var sx = halfW + x * inv;
        if (sx < -6 || sx > W + 6) continue;

        var y = surface(x, z + drift, t);
        var sy = HORIZON + (CAM_H - y) * inv;
        if (sy > H + 6) continue;

        var lift = 0, glow = 0;
        if (pointer.on > 0.01) {
          var dx = sx - pointer.sx, dy = sy - pointer.sy;
          var g = Math.exp(-(dx * dx + dy * dy) / twoSig2) * pointer.on;
          lift += g * (18 + 34 * depth);
          glow = g;
        }
        for (var k = 0; k < nr; k++) {
          var rp = ripples[k];
          var age = t - rp.t;
          var rx = sx - rp.x, ry = sy - rp.y;
          var d = Math.sqrt(rx * rx + ry * ry) - age * 520;
          if (d > -90 && d < 90) {
            var w = Math.exp(-(d * d) / 1800) * (1 - age / 3.2);
            lift += w * 26 * (0.4 + depth);
            glow = Math.max(glow, w * 0.9);
          }
        }
        if (lift) sy -= lift;
        if (sy < -6) continue;

        ctx.fillStyle = glow > 0.12 ? hot[bucket] : base[bucket];
        ctx.fillRect(sx - half, sy - half, size, size);
      }
    }
  }

  function loop(now) {
    draw(now);
    rafId = requestAnimationFrame(loop);
  }
  function play() {
    if (running) return;
    running = true;
    rafId = requestAnimationFrame(loop);
  }
  function pause() {
    running = false;
    cancelAnimationFrame(rafId);
  }
  function sync() {
    if (onScreen && !document.hidden) play(); else pause();
  }

  /* --- input --- */
  function local(e) {
    var rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top, inside: e.clientY >= rect.top && e.clientY <= rect.bottom };
  }
  window.addEventListener('pointermove', function (e) {
    if (e.pointerType === 'touch') return;
    var p = local(e);
    pointer.x = p.x; pointer.y = p.y;
    if (pointer.onT === 0 && p.inside) { pointer.sx = p.x; pointer.sy = p.y; }
    pointer.onT = p.inside ? 1 : 0;
  }, { passive: true });
  // mouse left the window
  document.addEventListener('mouseout', function (e) { if (!e.relatedTarget) pointer.onT = 0; });
  hero.addEventListener('pointerdown', function (e) {
    if (e.target.closest('a, button')) return;
    var p = local(e);
    ripples.push({ x: p.x, y: p.y, t: (performance.now() - start) / 1000 * SPEED });
    if (ripples.length > 4) ripples.shift();
  });

  /* --- lifecycle --- */
  buildPalette();
  var onTheme = function () { buildPalette(); if (!running) draw(performance.now()); };
  if (lightQuery.addEventListener) lightQuery.addEventListener('change', onTheme);
  else if (lightQuery.addListener) lightQuery.addListener(onTheme);
  resize();
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      onScreen = entries[0].isIntersecting;
      sync();
    }).observe(canvas);
  }
  document.addEventListener('visibilitychange', sync);

  sync();
})();
