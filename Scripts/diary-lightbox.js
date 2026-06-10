/*
 * Diary photo lightbox
 * --------------------------------------------------------------------------
 * Click any `.diary-photo` in a travel post to open it full-screen, with
 * previous/next navigation across every photo on the page.
 *
 * Dependency-free progressive enhancement: without JS the photos simply
 * stay as inline figures. Keyboard: Esc closes, arrow keys navigate.
 */
(function () {
  'use strict';

  var figures = Array.prototype.slice.call(document.querySelectorAll('.diary-photo'));
  if (figures.length === 0) return;

  var overlay = null;
  var imgEl = null;
  var captionEl = null;
  var counterEl = null;
  var current = -1;

  function buildOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'diary-lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<button class="diary-lightbox-close" type="button" aria-label="Close">&times;</button>' +
      '<button class="diary-lightbox-nav diary-lightbox-prev" type="button" aria-label="Previous photo"><i class="fas fa-chevron-left"></i></button>' +
      '<figure class="diary-lightbox-figure">' +
        '<img class="diary-lightbox-img" alt="">' +
        '<figcaption class="diary-lightbox-caption"></figcaption>' +
      '</figure>' +
      '<button class="diary-lightbox-nav diary-lightbox-next" type="button" aria-label="Next photo"><i class="fas fa-chevron-right"></i></button>' +
      '<div class="diary-lightbox-counter"></div>';
    document.body.appendChild(overlay);

    imgEl = overlay.querySelector('.diary-lightbox-img');
    captionEl = overlay.querySelector('.diary-lightbox-caption');
    counterEl = overlay.querySelector('.diary-lightbox-counter');

    overlay.querySelector('.diary-lightbox-close').addEventListener('click', close);
    overlay.querySelector('.diary-lightbox-prev').addEventListener('click', function () { show(current - 1); });
    overlay.querySelector('.diary-lightbox-next').addEventListener('click', function () { show(current + 1); });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.classList.contains('diary-lightbox-figure')) close();
    });
  }

  function show(index) {
    current = (index + figures.length) % figures.length;
    var fig = figures[current];
    var img = fig.querySelector('img');
    if (!img) return;
    // currentSrc serves webp when the <picture> source matched
    imgEl.src = img.currentSrc || img.src;
    imgEl.alt = img.alt || '';
    var cap = fig.querySelector('figcaption');
    captionEl.textContent = cap ? cap.textContent : '';
    captionEl.style.display = cap ? '' : 'none';
    counterEl.textContent = (current + 1) + ' / ' + figures.length;
  }

  function open(index) {
    if (!overlay) buildOverlay();
    show(index);
    overlay.classList.add('open');
    document.body.classList.add('diary-lightbox-lock');
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.classList.remove('diary-lightbox-lock');
  }

  document.addEventListener('keydown', function (e) {
    if (!overlay || !overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
  });

  figures.forEach(function (fig, i) {
    fig.classList.add('diary-photo-zoomable');
    fig.setAttribute('tabindex', '0');
    fig.setAttribute('role', 'button');
    var img = fig.querySelector('img');
    fig.setAttribute('aria-label', (img && img.alt) ? 'View photo: ' + img.alt : 'View photo');
    fig.addEventListener('click', function () { open(i); });
    fig.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
    });
  });
})();
